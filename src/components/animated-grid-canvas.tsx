"use client";

import { useEffect, useRef } from "react";

const GRID = 48;
const TRAIL = 120;
const CONNECT_DIST = GRID * 2.6;

const mod = (value: number, size: number) => ((value % size) + size) % size;

type Traveler = {
  axis: "h" | "v";
  /** شماره خط ثابت روی grid */
  line: number;
  phase: number;
  speed: number;
  hue: "blue" | "cyan";
};

type Dot = {
  /** مختصات پیکسلی روی تقاطع grid */
  x: number;
  y: number;
  phase: number;
  radius: number;
  glow: number;
  hue: "blue" | "cyan" | "violet";
};

const COLORS = {
  blue: { r: 99, g: 128, b: 255 },
  cyan: { r: 129, g: 140, b: 248 },
  violet: { r: 59, g: 130, b: 246 },
};

export function AnimatedGridCanvas({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let frameId = 0;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let time = 0;
    let lastFrame = performance.now();
    let visible = !document.hidden;
    let lastW = 0;
    let lastH = 0;
    let dots: Dot[] = [];

    const travelers: Traveler[] = [
      { axis: "h", line: 2, phase: 0, speed: 95, hue: "blue" },
      { axis: "h", line: 5, phase: 0.45, speed: 75, hue: "cyan" },
      { axis: "h", line: 8, phase: 0.2, speed: 88, hue: "blue" },
      { axis: "h", line: 11, phase: 0.65, speed: 82, hue: "cyan" },
      { axis: "v", line: 3, phase: 0.1, speed: 80, hue: "cyan" },
      { axis: "v", line: 7, phase: 0.55, speed: 100, hue: "blue" },
      { axis: "v", line: 11, phase: 0.35, speed: 70, hue: "cyan" },
      { axis: "v", line: 15, phase: 0.8, speed: 92, hue: "blue" },
    ];

    const spawnDots = () => {
      const intersections: { x: number; y: number }[] = [];
      for (let x = 0; x <= width; x += GRID) {
        for (let y = 0; y <= height; y += GRID) {
          intersections.push({ x, y });
        }
      }

      const targetCount = Math.min(
        52,
        Math.max(Math.floor((width * height) / 16000), 28)
      );
      const count = Math.min(targetCount, intersections.length);

      for (let i = intersections.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [intersections[i], intersections[j]] = [
          intersections[j],
          intersections[i],
        ];
      }

      dots = intersections.slice(0, count).map((point) => ({
        x: point.x,
        y: point.y,
        phase: Math.random() * Math.PI * 2,
        radius: 0.5 + Math.random() * 1.6,
        glow: 7 + Math.random() * 12,
        hue: (["blue", "cyan", "violet"] as const)[
          Math.floor(Math.random() * 3)
        ],
      }));
    };

    const resize = () => {
      const w = wrap.clientWidth;
      const h = wrap.clientHeight;
      if (w === lastW && h === lastH) return;
      lastW = w;
      lastH = h;

      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = w;
      height = h;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      spawnDots();
    };

    const drawAmbient = () => {
      const cx = width * 0.5;
      const cy = height * 0.28;
      const bloom = ctx.createRadialGradient(cx, cy, 0, cx, cy, width * 0.65);
      bloom.addColorStop(0, "rgba(99, 128, 255, 0.14)");
      bloom.addColorStop(0.35, "rgba(99, 128, 255, 0.12)");
      bloom.addColorStop(0.65, "rgba(129, 140, 248, 0.05)");
      bloom.addColorStop(1, "rgba(9, 9, 15, 0)");
      ctx.fillStyle = bloom;
      ctx.fillRect(0, 0, width, height);
    };

    const drawConnections = () => {
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const a = dots[i];
          const b = dots[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist > CONNECT_DIST) continue;

          const fade = 1 - dist / CONNECT_DIST;
          const pulse =
            0.55 +
            Math.sin(time * 0.9 + a.phase + b.phase) * 0.25;
          const alpha = fade * fade * 0.14 * pulse;

          const g = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
          g.addColorStop(0, `rgba(59, 130, 246, ${alpha * 0.8})`);
          g.addColorStop(0.5, `rgba(99, 128, 255, ${alpha * 1.2})`);
          g.addColorStop(1, `rgba(129, 140, 248, ${alpha})`);

          ctx.strokeStyle = g;
          ctx.lineWidth = 0.75;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    };

    /** شبکه ثابت — بدون اسکرول */
    const drawStaticGrid = () => {
      ctx.lineWidth = 0.65;
      ctx.strokeStyle = "rgba(255, 255, 255, 0.04)";
      ctx.beginPath();
      for (let x = 0.5; x < width; x += GRID) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for (let y = 0.5; y < height; y += GRID) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();

      ctx.lineWidth = 0.45;
      ctx.strokeStyle = "rgba(99, 128, 255, 0.035)";
      ctx.beginPath();
      for (let x = 0.5; x < width; x += GRID * 4) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for (let y = 0.5; y < height; y += GRID * 4) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();
    };

    const drawDots = () => {
      for (const dot of dots) {
        const { x, y } = dot;
        const pulse =
          0.35 + Math.sin(time * 0.75 + dot.phase) * 0.35;
        const c = COLORS[dot.hue];

        const glow = ctx.createRadialGradient(x, y, 0, x, y, dot.glow);
        glow.addColorStop(0, `rgba(${c.r}, ${c.g}, ${c.b}, ${0.38 * pulse})`);
        glow.addColorStop(0.55, `rgba(${c.r}, ${c.g}, ${c.b}, ${0.12 * pulse})`);
        glow.addColorStop(1, `rgba(${c.r}, ${c.g}, ${c.b}, 0)`);
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(x, y, dot.glow, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `rgba(224, 231, 255, ${0.3 * pulse})`;
        ctx.beginPath();
        ctx.arc(x, y, dot.radius, 0, Math.PI * 2);
        ctx.fill();

        if (pulse > 0.55 && dot.hue === "violet") {
          ctx.strokeStyle = `rgba(96, 165, 250, ${0.22 * pulse})`;
          ctx.lineWidth = 0.5;
          const r = 4 + pulse * 2;
          ctx.beginPath();
          ctx.arc(x, y, r, 0, Math.PI * 2);
          ctx.stroke();
        }
      }
    };

    /** خط متحرک — دو نسخه برای loop بدون پرش */
    const drawTraveler = (t: Traveler) => {
      const c = COLORS[t.hue];
      const track = (t.axis === "h" ? width : height) + TRAIL * 2;
      const period = track;
      const head = mod(time * t.speed + t.phase * period, period) - TRAIL;

      const drawSegment = (center: number) => {
        if (t.axis === "h") {
          const y = t.line * GRID + 0.5;
          if (y < 0 || y > height) return;
          const g = ctx.createLinearGradient(
            center - TRAIL,
            y,
            center + TRAIL,
            y
          );
          g.addColorStop(0, `rgba(${c.r}, ${c.g}, ${c.b}, 0)`);
          g.addColorStop(0.4, `rgba(${c.r}, ${c.g}, ${c.b}, 0.45)`);
          g.addColorStop(0.5, "rgba(255, 255, 255, 0.22)");
          g.addColorStop(0.6, `rgba(${c.r}, ${c.g}, ${c.b}, 0.45)`);
          g.addColorStop(1, `rgba(${c.r}, ${c.g}, ${c.b}, 0)`);
          ctx.strokeStyle = g;
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(center - TRAIL, y);
          ctx.lineTo(center + TRAIL, y);
          ctx.stroke();
        } else {
          const x = t.line * GRID + 0.5;
          if (x < 0 || x > width) return;
          const g = ctx.createLinearGradient(
            x,
            center - TRAIL,
            x,
            center + TRAIL
          );
          g.addColorStop(0, `rgba(${c.r}, ${c.g}, ${c.b}, 0)`);
          g.addColorStop(0.5, `rgba(${c.r}, ${c.g}, ${c.b}, 0.4)`);
          g.addColorStop(1, `rgba(${c.r}, ${c.g}, ${c.b}, 0)`);
          ctx.strokeStyle = g;
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(x, center - TRAIL);
          ctx.lineTo(x, center + TRAIL);
          ctx.stroke();
        }
      };

      for (const shift of [0, -period]) {
        drawSegment(head + shift);
      }
    };

    const drawVignette = () => {
      const bottom = ctx.createLinearGradient(0, height * 0.55, 0, height);
      bottom.addColorStop(0, "rgba(9, 9, 15, 0)");
      bottom.addColorStop(1, "rgba(9, 9, 15, 1)");
      ctx.fillStyle = bottom;
      ctx.fillRect(0, height * 0.55, width, height * 0.45);

      const edge = ctx.createRadialGradient(
        width * 0.5,
        height * 0.4,
        width * 0.15,
        width * 0.5,
        height * 0.4,
        width * 0.78
      );
      edge.addColorStop(0, "rgba(9, 9, 15, 0)");
      edge.addColorStop(1, "rgba(9, 9, 15, 0.35)");
      ctx.fillStyle = edge;
      ctx.fillRect(0, 0, width, height);
    };

    const draw = (now = performance.now()) => {
      frameId = requestAnimationFrame(draw);

      if (!visible || width === 0 || height === 0) return;

      const dt = Math.min((now - lastFrame) / 1000, 0.032);
      lastFrame = now;

      ctx.clearRect(0, 0, width, height);

      drawAmbient();
      drawStaticGrid();
      drawConnections();
      drawDots();

      if (!reducedMotion) {
        for (const traveler of travelers) {
          drawTraveler(traveler);
        }
        time += dt;
      }

      drawVignette();
    };

    const onVisibility = () => {
      visible = !document.hidden;
      if (visible) lastFrame = performance.now();
    };

    resize();
    frameId = requestAnimationFrame(draw);

    const ro = new ResizeObserver(resize);
    ro.observe(wrap);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(frameId);
      ro.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <div ref={wrapRef} className={`absolute inset-0 ${className}`} aria-hidden>
      <canvas ref={canvasRef} className="block h-full w-full" />
    </div>
  );
}
