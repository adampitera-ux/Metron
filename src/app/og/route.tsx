import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

/** Dynamic Open Graph image: /og?title=…&kicker=… */
export function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const title = (searchParams.get("title") ?? SITE.tagline).slice(0, 120);
  const kicker = (searchParams.get("kicker") ?? "").slice(0, 40);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "70px 80px",
          background: "linear-gradient(135deg, #ffffff 0%, #fff4ea 100%)",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -160,
            right: -120,
            width: 560,
            height: 560,
            borderRadius: 9999,
            background: "radial-gradient(circle, rgba(255,177,104,0.55), rgba(255,177,104,0))",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 46,
              height: 46,
              borderRadius: 12,
              background: "linear-gradient(135deg, #e46f03, #ffb168)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: 30,
            }}
          >
            ✦
          </div>
          <div style={{ fontSize: 34, color: "#e87811", fontWeight: 600 }}>{SITE.name}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          {kicker && (
            <div
              style={{
                display: "flex",
                alignSelf: "flex-start",
                fontSize: 24,
                color: "#262626",
                border: "1px solid #e2e2e2",
                background: "white",
                borderRadius: 999,
                padding: "8px 22px",
              }}
            >
              {kicker}
            </div>
          )}
          <div style={{ fontSize: title.length > 60 ? 58 : 70, lineHeight: 1.12, color: "#0d0d0d", fontWeight: 600, letterSpacing: -1.5, maxWidth: 1000 }}>
            {title}
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, color: "#6f6f6f" }}>
          <span>{SITE.tagline}</span>
          <span>{SITE.url.replace(/^https?:\/\//, "")}</span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
