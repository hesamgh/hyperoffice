/**
 * BitNinja / LiteSpeed WAF blocks /_next/ (403). Rename for static hosting.
 * Also copies locale pages into {locale}/index.html so /fa/ etc. do not 403 on Apache.
 */
import { chmod, copyFile, readdir, readFile, rename, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const outDir = path.join(root, "out");
const fromDir = path.join(outDir, "_next");
const toDir = path.join(outDir, "next-static");
const fromPrefix = "/_next/";
const toPrefix = "/next-static/";

const TEXT_EXTENSIONS = /\.(html|js|css|json|txt|map|xml|webmanifest)$/i;
const LOCALE_HOMES = ["en", "es", "fr", "de", "zh", "ar", "tr", "fa"];

const FILE_MODE = 0o644;
const DIR_MODE = 0o755;

async function fixPermissions(dir) {
  await chmod(dir, DIR_MODE);
  const entries = await readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      await fixPermissions(fullPath);
      continue;
    }

    await chmod(fullPath, FILE_MODE);
  }
}

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      await walk(fullPath);
      continue;
    }

    if (!TEXT_EXTENSIONS.test(entry.name)) continue;

    const content = await readFile(fullPath, "utf8");
    if (!content.includes(fromPrefix)) continue;

    await writeFile(fullPath, content.replaceAll(fromPrefix, toPrefix), "utf8");
  }
}

/** Next export puts /fa at fa.html but children under fa/ — Apache /fa/ needs index.html. */
async function ensureLocaleIndexes() {
  for (const locale of LOCALE_HOMES) {
    const htmlFile = path.join(outDir, `${locale}.html`);
    const indexFile = path.join(outDir, locale, "index.html");

    try {
      await copyFile(htmlFile, indexFile);
      await chmod(indexFile, FILE_MODE);
    } catch (error) {
      if (error && typeof error === "object" && "code" in error && error.code === "ENOENT") {
        console.warn(
          `fix-static-export: skip ${locale}/index.html (missing ${locale}.html or dir)`
        );
        continue;
      }
      throw error;
    }
  }
}

let renamed = true;

try {
  await rename(fromDir, toDir);
} catch (error) {
  if (error && typeof error === "object" && "code" in error && error.code === "ENOENT") {
    console.warn("fix-static-export: out/_next not found, skipping rename");
    renamed = false;
  } else {
    throw error;
  }
}

if (renamed) {
  await walk(outDir);
}

await ensureLocaleIndexes();
await fixPermissions(outDir);

console.log(
  "fix-static-export: set permissions (dirs 755, files 644), locale indexes" +
    (renamed ? ", renamed _next → next-static and updated asset paths" : "")
);
