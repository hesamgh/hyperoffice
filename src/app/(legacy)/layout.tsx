import type { Metadata } from "next";
import { LegacySpaShell } from "@/components/legacy-spa-shell";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

const legacyStylesheets = [
  "/legacy/static/css/2.a95be28f.chunk.css",
  "/legacy/static/css/main.2494a567.chunk.css",
  "/legacy/static/css/index.css",
] as const;

export default function LegacyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {legacyStylesheets.map((href) => (
        <link key={href} rel="stylesheet" href={href} />
      ))}
      {children}
      <LegacySpaShell />
    </>
  );
}
