"use client";

import { useEffect } from "react";

const LEGACY_SCRIPTS = [
  "/legacy/static/js/runtime-main.97d62d15.js",
  "/legacy/static/js/2.eda8ce9e.chunk.js",
  "/legacy/static/js/main.b840988c.chunk.js",
] as const;

function loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.async = false;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.body.appendChild(script);
  });
}

export function LegacySpaShell() {
  useEffect(() => {
    let cancelled = false;

    void (async () => {
      for (const src of LEGACY_SCRIPTS) {
        if (cancelled) return;
        await loadScript(src);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <>
      <noscript>برای اجرای این برنامه JavaScript را فعال کنید.</noscript>
      <div id="root" />
    </>
  );
}
