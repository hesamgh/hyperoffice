import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "HyperOffice";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background:
            "linear-gradient(135deg, #09090f 0%, #12121a 50%, #09090f 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 28,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 88,
              height: 88,
              borderRadius: 22,
              background: "linear-gradient(145deg, #91a5ff 0%, #5c70f2 50%, #3a4bc8 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 16px 48px rgba(91, 112, 242, 0.45)",
              border: "1px solid rgba(255,255,255,0.2)",
              position: "relative",
            }}
          >
            <div
              style={{
                width: 58,
                height: 58,
                borderRadius: 16,
                background:
                  "linear-gradient(160deg, rgba(255,255,255,0.18), rgba(11,16,38,0.18))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="42" height="42" viewBox="0 0 48 48" fill="none">
                <path
                  d="M17 15.5v17M31 15.5v17"
                  stroke="white"
                  strokeWidth="3.8"
                  strokeLinecap="round"
                />
                <path
                  d="M17 24h14.5l4-4M31.5 24l4 4"
                  stroke="#dbe4ff"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "baseline" }}>
            <span style={{ fontSize: 48, fontWeight: 700, letterSpacing: -1 }}>
              Hyper
            </span>
            <span
              style={{
                fontSize: 48,
                fontWeight: 500,
                letterSpacing: -1,
                color: "rgba(255,255,255,0.55)",
              }}
            >
              Office
            </span>
          </div>
        </div>
        <p
          style={{
            fontSize: 48,
            fontWeight: 700,
            lineHeight: 1.3,
            maxWidth: 920,
            letterSpacing: -0.5,
          }}
        >
          Professional Web Design and Development
        </p>
        <p style={{ fontSize: 26, color: "#818cf8", marginTop: 28 }}>
          hyperoffice.ir
        </p>
      </div>
    ),
    { ...size }
  );
}
