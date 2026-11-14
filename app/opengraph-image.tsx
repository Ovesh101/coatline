import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#F2EEE6",
          padding: "72px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 28,
              fontWeight: 700,
              color: "#0E1A2B",
            }}
          >
            {site.name}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 14,
              fontWeight: 600,
              letterSpacing: 3,
              textTransform: "uppercase",
              color: "#0E1A2B99",
            }}
          >
            Painting Contractor · Daman
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 110,
            fontWeight: 800,
            letterSpacing: -4,
            lineHeight: 1,
            color: "#0E1A2B",
            maxWidth: 1000,
          }}
        >
          A fresh coat. A whole new feeling.
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 22,
              color: "#0E1A2B99",
            }}
          >
            Founded by {site.founder} · Since 1995 · Daman, Vapi, Silvassa
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "12px 22px",
              borderRadius: 999,
              background: "#4FB69A",
              color: "white",
              fontSize: 22,
              fontWeight: 600,
            }}
          >
            Get a quote →
          </div>
        </div>
      </div>
    ),
    size,
  );
}
