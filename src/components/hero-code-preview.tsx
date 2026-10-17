"use client";

import type { ReactNode } from "react";
import { useDictionary } from "@/i18n/dictionary-provider";

function Kw({ children }: { children: React.ReactNode }) {
  return <span className="text-sky-300">{children}</span>;
}

function Ty({ children }: { children: React.ReactNode }) {
  return <span className="text-indigo-300">{children}</span>;
}

function Str({ children }: { children: React.ReactNode }) {
  return <span className="text-emerald-400">{children}</span>;
}

function Fn({ children }: { children: React.ReactNode }) {
  return <span className="text-amber-200">{children}</span>;
}

function Cm({ children }: { children: React.ReactNode }) {
  return <span className="text-white/30">{children}</span>;
}

function Pn({ children }: { children: React.ReactNode }) {
  return <span className="text-white/50">{children}</span>;
}

export function HeroCodePreview() {
  const { dictionary: dict } = useDictionary();
  const heroTitle =
    dict.servicePages.find((page) => page.slug === "tarahi-site")?.h1 ??
    dict.hero.badge;
  const metaTitle = `${dict.brand.nameLocal} | ${dict.services.titleAccent}`;

  const lines: ReactNode[] = [
    <>
      <Cm>{"// app/page.tsx — HyperOffice"}</Cm>
    </>,
    <>
      <Kw>import</Kw> <Ty>{"{ Metadata }"}</Ty> <Kw>from</Kw>{" "}
      <Str>&quot;next&quot;</Str>;
    </>,
    <>
      <Kw>import</Kw> <Pn>{"{ Hero, Services, Contact }"}</Pn> <Kw>from</Kw>{" "}
      <Str>&quot;@/components&quot;</Str>;
    </>,
    null,
    <>
      <Kw>export const</Kw> metadata: <Ty>Metadata</Ty> <Pn>{"= {"}</Pn>
    </>,
    <>
      {"  "}title: <Str>&quot;{metaTitle}&quot;</Str>,
    </>,
    <>
      {"  "}description:{" "}
      <Str>&quot;Next.js 15 · React 19 · TypeScript&quot;</Str>,
    </>,
    <>
      <Pn>{"};"}</Pn>
    </>,
    null,
    <>
      <Kw>export default function</Kw> <Fn>Home</Fn>
      <Pn>() {"{"}</Pn>
    </>,
    <>
      {"  "}
      <Kw>const</Kw> stack = <Pn>{"["}</Pn>
      <Str>&quot;Next.js&quot;</Str>, <Str>&quot;TypeScript&quot;</Str>,{" "}
      <Str>&quot;Python&quot;</Str>
      <Pn>{"] as const;"}</Pn>
    </>,
    null,
    <>
      {"  "}
      <Kw>return</Kw> <Pn>{"("}</Pn>
    </>,
    <>
      {"    "}
      <Pn>{"<"}</Pn>main<Pn>{">"}</Pn>
    </>,
    <>
      {"      "}
      <Pn>{"<"}</Pn>Hero title=<Str>&quot;{heroTitle}&quot;</Str>{" "}
      <Pn>{"/>"}</Pn>
    </>,
    <>
      {"      "}
      <Pn>{"<"}</Pn>Services technologies=<Pn>{"{stack}"}</Pn>{" "}
      <Pn>{"/>"}</Pn>
    </>,
    <>
      {"      "}
      <Pn>{"<"}</Pn>Contact call=<Str>&quot;{dict.nav.callUs}&quot;</Str>{" "}
      <Pn>{"/>"}</Pn>
    </>,
    <>
      {"    "}
      <Pn>{"</"}</Pn>main<Pn>{">"}</Pn>
    </>,
    <>
      {"  "}
      <Pn>{");"}</Pn>
    </>,
    <>
      <Pn>{"}"}</Pn>
    </>,
  ];

  return (
    <div
      dir="ltr"
      className="dir-ltr mt-10 md:mt-20 relative mx-auto max-w-3xl w-full text-left"
      aria-hidden
    >
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-brand-500/22 via-transparent to-sky-500/10 blur-sm" />
      <div className="relative glass-card overflow-hidden shadow-neon ring-1 ring-white/10">
        <div className="flex flex-row items-center gap-2 px-4 py-3 border-b border-white/5 bg-black/30">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <div className="flex items-center gap-1 ms-3">
            <span className="px-2.5 sm:px-3 py-1 rounded-t-md bg-white/[0.06] text-[10px] sm:text-[11px] font-mono text-brand-300 border border-white/10 border-b-transparent">
              page.tsx
            </span>
            <span className="hidden sm:inline px-3 py-1 text-[11px] font-mono text-white/25">
              layout.tsx
            </span>
          </div>
          <span className="hidden sm:inline text-[11px] text-white/25 ms-auto font-mono">
            hyperoffice.ir
          </span>
        </div>

        <div className="relative bg-gradient-to-br from-[#0e0e18] via-[#09090f] to-[#12101f]">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:linear-gradient(to_bottom,black,transparent)]" />
          <pre className="relative w-full p-3 sm:p-5 font-mono text-[10.5px] sm:text-[12.5px] md:text-[13px] text-left leading-[1.75] sm:leading-[1.85] overflow-x-auto">
            <code className="block w-full">
              {lines.map((line, index) => (
                <div key={index} className="flex flex-row justify-start">
                  <span className="select-none w-7 shrink-0 text-left pr-4 text-white/15 tabular-nums">
                    {index + 1}
                  </span>
                  <span className="min-w-0 flex-1 text-left whitespace-pre">
                    {line}
                  </span>
                </div>
              ))}
            </code>
          </pre>
        </div>

        <div className="flex flex-row items-center justify-between px-3 sm:px-4 py-2 border-t border-white/5 bg-black/40 text-[9px] sm:text-[10px] font-mono text-white/25">
          <span>TypeScript React · UTF-8</span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-400/80" />
            Ready
          </span>
        </div>
      </div>
    </div>
  );
}
