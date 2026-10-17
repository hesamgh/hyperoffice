import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const iconsDir = path.join(root, "public", "icons");
const source = path.join(root, "public", "logo-mark.svg");

await mkdir(iconsDir, { recursive: true });

const sizes = [192, 512];

for (const size of sizes) {
  await sharp(source)
    .resize(size, size)
    .png()
    .toFile(path.join(iconsDir, `icon-${size}.png`));
}

// Maskable icon with safe-zone padding for Android adaptive icons
for (const size of [512]) {
  const iconSize = Math.round(size * 0.72);
  const padding = Math.round((size - iconSize) / 2);

  await sharp(source)
    .resize(iconSize, iconSize)
    .extend({
      top: padding,
      bottom: padding,
      left: padding,
      right: padding,
      background: { r: 9, g: 9, b: 15, alpha: 1 },
    })
    .png()
    .toFile(path.join(iconsDir, `icon-maskable-${size}.png`));
}

console.log("PWA icons generated in public/icons/");
