import { AnimatedGridCanvas } from "@/components/animated-grid-canvas";
import { HeroDevPanels } from "@/components/hero-dev-panels";

const FLOATING_SYMBOLS = [
  { symbol: "{ }", top: "12%", left: "8%", delay: "0s", size: "text-lg" },
  { symbol: "</>", top: "22%", right: "10%", delay: "1.2s", size: "text-xl" },
  { symbol: "fn()", top: "38%", left: "5%", delay: "2.4s", size: "text-sm" },
  { symbol: "API", top: "18%", left: "42%", delay: "0.8s", size: "text-xs" },
  { symbol: "git", top: "32%", right: "18%", delay: "3s", size: "text-sm" },
  { symbol: "npm", top: "48%", right: "6%", delay: "1.8s", size: "text-xs" },
  { symbol: "[]", top: "55%", left: "12%", delay: "2.8s", size: "text-base" },
  { symbol: "=>", top: "28%", right: "32%", delay: "4s", size: "text-sm" },
] as const;

export function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-[#09090f]" />

      <div className="absolute inset-0 hero-mesh-gradient opacity-90" />

      <div className="absolute -top-1/4 left-1/2 -translate-x-1/2 w-[140%] h-[70%] hero-perspective-grid opacity-[0.35]" />

      <AnimatedGridCanvas />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_50%_28%,rgba(99,128,255,0.08),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_35%_at_72%_18%,rgba(99,128,255,0.12),transparent_65%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_35%_30%_at_18%_22%,rgba(129,140,248,0.07),transparent_60%)]" />

      {FLOATING_SYMBOLS.map((item) => (
        <span
          key={item.symbol}
          className={`hero-float-symbol absolute font-mono font-medium text-white/[0.07] select-none pointer-events-none ${item.size}`}
          style={{
            top: item.top,
            left: "left" in item ? item.left : undefined,
            right: "right" in item ? item.right : undefined,
            animationDelay: item.delay,
          }}
        >
          {item.symbol}
        </span>
      ))}

      <HeroDevPanels />

      <div className="hero-scanline absolute inset-0 pointer-events-none" />

      <div className="absolute inset-0 bg-radial-glow opacity-50 mix-blend-screen" />
      <div className="absolute top-[15%] left-[20%] w-[28rem] h-[28rem] rounded-full bg-brand-600/10 blur-[100px] animate-pulse-glow" />
      <div
        className="absolute top-[25%] right-[15%] w-80 h-80 rounded-full bg-brand-500/14 blur-[90px] animate-pulse-glow"
        style={{ animationDelay: "1.2s" }}
      />
      <div
        className="absolute bottom-[35%] left-[35%] w-72 h-72 rounded-full bg-sky-400/8 blur-[80px] animate-pulse-glow"
        style={{ animationDelay: "2.4s" }}
      />

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-surface via-surface/80 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_45%,transparent_30%,rgba(9,9,15,0.55)_100%)]" />
    </div>
  );
}
