import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coming soon",
};

export default function PreviewPage() {
  return (
    <main
      style={{
        margin: 0,
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Tahoma, Arial, sans-serif",
        background: "#000",
        color: "#fff",
      }}
    >
      <p>Coming soon ...</p>
    </main>
  );
}
