import type { NextConfig } from "next";
import path from "path";

const isDev = process.env.NODE_ENV === "development";

const productionSecurityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Cross-Origin-Opener-Policy",
    value: "same-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' blob: data:",
      "font-src 'self' data:",
      "connect-src 'self'",
      "frame-ancestors 'self'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  output: "export",
  outputFileTracingRoot: path.join(__dirname),
  poweredByHeader: false,
  compress: true,
  productionBrowserSourceMaps: true,
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  async rewrites() {
    const legacyUrl = process.env.LEGACY_APP_URL;
    if (!legacyUrl) return [];

    const base = legacyUrl.replace(/\/$/, "");

    return [
      { source: "/factor", destination: `${base}/factor` },
      { source: "/bill", destination: `${base}/bill` },
      {
        source: "/legacy/static/:path*",
        destination: `${base}/static/:path*`,
      },
    ];
  },
  async headers() {
    if (isDev) {
      return [];
    }

    return [
      {
        source: "/(.*)",
        headers: productionSecurityHeaders,
      },
    ];
  },
};

export default nextConfig;
