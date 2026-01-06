"use client";

import { useState } from "react";

const phone = "4808753980";
const sms = `sms:${phone}?body=${encodeURIComponent("Hi, I'd like a quote for permanent lighting.")}`;

export default function Page() {
  const [open, setOpen] = useState(null);

  const photos = [
    "/job-completed-1.jpg",
    "/gallery-1.jpg",
    "/gallery-2.jpg",
    "/gallery-3.jpg",
    "/gallery-4.jpg",
    "/gallery-5.jpg",
    "/gallery-6.jpg",
  ];

  return (
    <div style={{ background: "#000", color: "#fff", minHeight: "100vh", fontFamily: "system-ui, Arial" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: 24, textAlign: "center" }}>
        <img src="/pjc-lighting-solutions-logo.png" alt="PJC Lighting Solutions" style={{ height: 80 }} />
        <h1 style={{ fontSize: 44, margin: "18px 0 6px" }}>Permanent Track Lighting</h1>
        <div style={{ color: "#38bdf8", fontWeight: 700, marginBottom: 12 }}>Serving all of Arizona</div>

        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <a href={`tel:${phone}`} style={btnOutline}>Call 480-875-3980</a>
          <a href={sms} style={btnSolid}>Text Us</a>
        </div>

        <div style={section}>
          <h2 style={h2}>Why Choose Us</h2>
          <p style={p}>Clean hidden installs • Built for AZ heat • App controlled • No seasonal setup</p>
        </div>

        <div style={section}>
          <h2 style={h2}>Pricing Expectations</h2>
          <p style={p}>Most installs range <b style={{ color: "#38bdf8" }}>$25–$50 per foot</b>. Free estimate — no surprises.</p>
        </div>

        <div style={sectionAlt}>
          <h2 style={h2}>20-Year Warranty</h2>
          <p style={p}>Every system is backed by a <b style={{ color: "#38bdf8" }}>20-year warranty</b> on materials and workmanship.</p>
        </div>

        <div style={sectionAlt}>
          <h2 style={h2}>Jobs Completed • ★★★★★</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: 12, marginTop: 14 }}>
            {photos.map((src) => (
              <button key={src} onClick={() => setOpen(src)} style={imgBtn}>
                <img src={src} alt="PJC job" style={img} />
              </button>
            ))}
          </div>
        </div>

        <div style={{ margin: "28px 0 10px" }}>
          <a href={`tel:${phone}`} style={btnSolid}>Get a Free Estimate</a>
        </div>

        <div style={{ color: "#888", fontSize: 13, padding: "18px 0" }}>
          © {new Date().getFullYear()} PJC Lighting Solutions
        </div>
      </div>

      {/* Lightbox */}
      {open && (
        <div onClick={() => setOpen(null)} style={lbBackdrop}>
          <div style={lbBox} onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setOpen(null)} style={lbClose}>Close ✕</button>
            <img src={open} alt="Expanded" style={{ width: "100%", borderRadius: 14 }} />
          </div>
        </div>
      )}

      {/* Sticky mobile bar */}
      <div style={sticky}>
        <a href={`tel:${phone}`} style={{ ...stickyBtn, color: "#38bdf8" }}>Call</a>
        <a href={sms} style={{ ...stickyBtn, background: "linear-gradient(90deg,#38bdf8,#fb923c)", color: "#000" }}>Text</a>
      </div>
    </div>
  );
}

const section = { borderTop: "1px solid #222", padding: "26px 0" };
const sectionAlt = { ...section, background: "#0b0b0b", marginTop: 8, borderRadius: 16, padding: 22 };
const h2 = { fontSize: 28, margin: "0 0 8px" };
const p = { color: "#cfcfcf", margin: 0, lineHeight: 1.5 };

const btnBase = { display: "inline-block", padding: "12px 18px", borderRadius: 14, fontWeight: 800, textDecoration: "none" };
const btnSolid = { ...btnBase, background: "linear-gradient(90deg,#38bdf8,#fb923c)", color: "#000" };
const btnOutline = { ...btnBase, border: "2px solid #38bdf8", color: "#38bdf8" };

const imgBtn = { border: "1px solid #222", background: "transparent", padding: 0, borderRadius: 14, cursor: "pointer" };
const img = { width: "100%", height: 160, objectFit: "cover", borderRadius: 14 };

const lbBackdrop = { position: "fixed", inset: 0, background: "rgba(0,0,0,.85)", display: "flex", alignItems: "center", justifyContent: "center", padding: 18 };
const lbBox = { width: "min(1000px, 95vw)", background: "#050505", borderRadius: 16, padding: 12, border: "1px solid #222" };
const lbClose = { background: "transparent", border: "1px solid #333", color: "#fff", padding: "8px 12px", borderRadius: 12, cursor: "pointer", marginBottom: 10 };

const sticky = { position: "fixed", left: 0, right: 0, bottom: 0, display: "flex", borderTop: "1px solid #333", background: "#0b0b0b" };
const stickyBtn = { flex: 1, textAlign: "center", padding: 16, fontWeight: 900, textDecoration: "none" };
