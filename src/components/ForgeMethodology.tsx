import React from "react";
import { FullScreenScrollFX, FullScreenFXAPI } from "@/components/ui/full-screen-scroll-fx";
import "@/components/ui/full-screen-scroll-fx.css";

const sections = [
  {
    leftLabel: "01 — Audit",
    title: (
      <>
        <span className="fx-step-number">Step 01 — Audit</span>
        <h3 className="fx-featured-title">Identify Constraints</h3>
        <div className="fx-featured-divider" />
        <p className="fx-featured-desc">
          We tear apart your current funnel, competitive positioning, and digital
          presence. No assumptions — just data. We find the exact friction points
          killing your growth so we can fix what matters first.
        </p>
      </>
    ),
    rightLabel: "Diagnostic",
    background: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80",
  },
  {
    leftLabel: "02 — Position",
    title: (
      <>
        <span className="fx-step-number">Step 02 — Position</span>
        <h3 className="fx-featured-title">Establish Authority</h3>
        <div className="fx-featured-divider" />
        <p className="fx-featured-desc">
          We sharpen your messaging, nail your brand positioning, and build a
          narrative that makes your business the obvious choice. Category design,
          offer engineering, and visual identity — all aligned.
        </p>
      </>
    ),
    rightLabel: "Strategic",
    background: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1600&q=80",
  },
  {
    leftLabel: "03 — Execute",
    title: (
      <>
        <span className="fx-step-number">Step 03 — Execute</span>
        <h3 className="fx-featured-title">Velocity & Impact</h3>
        <div className="fx-featured-divider" />
        <p className="fx-featured-desc">
          Landing pages, content systems, social calendars, and campaign
          structures — deployed fast on a weekly sprint cadence. We build, ship,
          and iterate. Speed is leverage.
        </p>
      </>
    ),
    rightLabel: "Agile",
    background: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1600&q=80",
  },
  {
    leftLabel: "04 — Optimise",
    title: (
      <>
        <span className="fx-step-number">Step 04 — Optimise</span>
        <h3 className="fx-featured-title">Compound ROI</h3>
        <div className="fx-featured-divider" />
        <p className="fx-featured-desc">
          Continuous A/B testing, attribution modelling, and budget reallocation
          to drive compounding returns. We systematically lower your acquisition
          costs while scaling volume.
        </p>
      </>
    ),
    rightLabel: "Growth",
    background: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80",
  },
];

export default function ForgeMethodology() {
  const apiRef = React.useRef<FullScreenFXAPI>(null);

  return (
    <FullScreenScrollFX
      sections={sections}
      header={
        <>
          <div>The Forge</div>
          <div>Methodology</div>
        </>
      }
      footer={<div />}
      showProgress
      durations={{ change: 0.7, snap: 800 }}
      bgTransition="fade"
      parallaxAmount={4}
      colors={{
        text: "rgba(245, 235, 210, 0.95)",
        overlay: "rgba(8, 20, 14, 0.55)",
        pageBg: "#0D1814",
        stageBg: "#0D1814",
      }}
      fontFamily='"Fraunces", "Georgia", serif'
      gap={1}
      gridPaddingX={3}
      apiRef={apiRef}
    />
  );
}
