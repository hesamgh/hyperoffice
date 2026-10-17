const editorLines = [
  { n: 1, parts: [{ c: "kw", t: "export default" }, { c: "fn", t: " function" }, { c: "tx", t: " Home()" }] },
  { n: 2, parts: [{ c: "tx", t: "  " }, { c: "kw", t: "return" }, { c: "tx", t: " (" }] },
  { n: 3, parts: [{ c: "tx", t: "    <" }, { c: "tag", t: "Hero" }, { c: "tx", t: " />" }] },
  { n: 4, parts: [{ c: "tx", t: "  )" }] },
];

const terminalLines = [
  { type: "path", text: "~/hyperoffice" },
  { type: "cmd", text: "$ npm run build" },
  { type: "ok", text: "✓ Compiled successfully" },
  { type: "dim", text: "  Route: / · /factor · /bill" },
];

const treeItems = [
  { depth: 0, name: "src/", kind: "folder" },
  { depth: 1, name: "app/", kind: "folder" },
  { depth: 2, name: "page.tsx", kind: "file", active: true },
  { depth: 1, name: "components/", kind: "folder" },
  { depth: 2, name: "hero.tsx", kind: "file" },
  { depth: 1, name: "lib/", kind: "folder" },
  { depth: 0, name: "package.json", kind: "config" },
];

function CodeToken({ c, t }: { c: string; t: string }) {
  return <span className={`hero-dev-token hero-dev-token--${c}`}>{t}</span>;
}

export function HeroDevPanels() {
  return (
    <>
      <div className="absolute top-[12%] left-[5%] hidden lg:block">
        <div className="hero-dev-panel-wrap">
          <div className="hero-dev-panel hero-dev-panel--editor">
            <div className="hero-dev-titlebar hero-dev-titlebar--editor">
              <div className="hero-dev-dots" aria-hidden>
                <span className="hero-dev-dot hero-dev-dot--red" />
                <span className="hero-dev-dot hero-dev-dot--yellow" />
                <span className="hero-dev-dot hero-dev-dot--green" />
              </div>
              <span className="hero-dev-tab hero-dev-tab--active">page.tsx</span>
              <span className="hero-dev-tab">layout.tsx</span>
            </div>
            <div className="hero-dev-body hero-dev-body--editor">
              {editorLines.map((line) => (
                <div key={line.n} className="hero-dev-line">
                  <span className="hero-dev-ln">{line.n}</span>
                  <span className="hero-dev-code">
                    {line.parts.map((part, i) => (
                      <CodeToken key={i} c={part.c} t={part.t} />
                    ))}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-[18%] right-[6%] hidden lg:block scale-[0.92] opacity-70">
        <div className="hero-dev-panel-wrap" style={{ animationDelay: "2s" }}>
          <div className="hero-dev-panel hero-dev-panel--terminal">
            <div className="hero-dev-titlebar hero-dev-titlebar--terminal">
              <span className="hero-dev-terminal-label">Terminal</span>
              <span className="hero-dev-terminal-badge">bash</span>
            </div>
            <div className="hero-dev-body hero-dev-body--terminal">
              {terminalLines.map((line, i) => (
                <div key={i} className={`hero-dev-term-line hero-dev-term-line--${line.type}`}>
                  {line.text}
                </div>
              ))}
              <span className="hero-dev-cursor" aria-hidden />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-[40%] right-[12%] hidden xl:block scale-[0.78] opacity-55">
        <div className="hero-dev-panel-wrap" style={{ animationDelay: "4s" }}>
          <div className="hero-dev-panel hero-dev-panel--explorer">
            <div className="hero-dev-titlebar hero-dev-titlebar--explorer">
              <span className="hero-dev-explorer-label">Explorer</span>
              <span className="hero-dev-explorer-root">hyperoffice</span>
            </div>
            <div className="hero-dev-body hero-dev-body--explorer">
              {treeItems.map((item) => (
                <div
                  key={item.name}
                  className={`hero-dev-tree-item hero-dev-tree-item--${item.kind}${item.active ? " hero-dev-tree-item--active" : ""}`}
                  style={{ paddingInlineStart: `${0.55 + item.depth * 0.65}rem` }}
                >
                  <span className="hero-dev-tree-icon" aria-hidden>
                    {item.kind === "folder" ? "▸" : item.kind === "config" ? "⚙" : "◇"}
                  </span>
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
