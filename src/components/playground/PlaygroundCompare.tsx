"use client";

import {
  Server,
  Monitor,
  Network,
  Sparkles,
  Play,
  Plus,
  Radar,
  Bot,
  Braces,
  Cpu,
  Terminal,
} from "lucide-react";

type PlaygroundCompareProps = {
  scenarioLabel: string;
  onBack: () => void;
  onRerun: () => void;
};

export default function PlaygroundCompare({
  scenarioLabel,
  onBack,
  onRerun,
}: PlaygroundCompareProps) {
  return (
    <div className="relative min-h-screen">
      <div
        aria-hidden
        className="swarm-orb orb-blue pointer-events-none"
        style={{ width: 480, height: 480, top: -120, left: -120, position: "fixed", zIndex: -1 }}
      />
      <div
        aria-hidden
        className="swarm-orb orb-pink pointer-events-none"
        style={{ width: 420, height: 420, top: "40%", right: -160, position: "fixed", zIndex: -1 }}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-screen">
        <aside className="hidden lg:flex lg:col-span-2 flex-col border-r border-white/40 glass-panel rounded-none p-5">
          <div>
            <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
              Swarm Orchestrator
            </div>
            <div className="text-sm font-bold text-slate-800 mt-1">v2.4.0-alpha</div>
          </div>
          <nav className="mt-8 space-y-1 text-sm">
            {[
              { label: "Agents", icon: Bot },
              { label: "Scenarios", icon: Radar, active: true },
              { label: "Variables", icon: Braces },
              { label: "Memory", icon: Cpu },
              { label: "Logs", icon: Terminal },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.label}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                    item.active
                      ? "bg-primary text-white shadow-[0_0_20px_rgba(6,63,249,0.3)]"
                      : "text-slate-500 hover:text-slate-800 hover:bg-white/70"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </nav>
          <button className="mt-auto w-full inline-flex items-center justify-center gap-2 bg-white/80 border border-white/60 hover:bg-white py-2.5 rounded-xl text-sm font-semibold text-slate-700">
            <Plus className="w-4 h-4" /> New Scenario
          </button>
        </aside>

        <main className="lg:col-span-10 p-6 md:p-10">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-on-surface">
                  Split-View Comparison
                </h1>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Active
                </span>
              </div>
              <p className="text-slate-500 mt-1 text-sm">
                Analyzing persona variance for{" "}
                <span className="font-semibold text-slate-700">&quot;{scenarioLabel}&quot;</span>
              </p>
              <div className="text-[10px] text-slate-400 mt-1 font-mono">
                Session ID: swrm-7f3a-2b91
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={onBack}
                className="px-4 py-2 rounded-xl bg-white/80 border border-white/60 text-sm text-slate-700 font-semibold hover:bg-white"
              >
                Back
              </button>
              <button
                onClick={onRerun}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-white text-sm font-semibold hover:scale-95 transition-transform shadow-[0_0_20px_rgba(6,63,249,0.3)]"
              >
                <Play className="w-3.5 h-3.5" /> Re-Run
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {/* Backend Architect */}
            <div className="glass-panel rounded-3xl p-6 border-l-4 border-l-primary">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                    <Server className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-800">Backend Architect</h3>
                    <p className="text-xs text-slate-500">
                      Focus: Scalability, Security, State
                    </p>
                  </div>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full bg-primary text-white">
                  Active Persona
                </span>
              </div>

              <div className="mt-5">
                <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-2">
                  Ranked Logic Path
                </div>
                <div className="space-y-2">
                  {[
                    { title: "JWT Stateless Tokens", pct: 98 },
                    { title: "OAuth2 Hybrid Flow", pct: 84 },
                  ].map((d) => (
                    <div
                      key={d.title}
                      className="rounded-xl bg-white/70 border border-white/50 p-3"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-semibold text-slate-800">{d.title}</span>
                        <span className="text-xs font-bold text-primary">{d.pct}% match</span>
                      </div>
                      <div className="h-1.5 mt-2 rounded-full bg-slate-200 overflow-hidden">
                        <div className="h-full bg-primary" style={{ width: `${d.pct}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5">
                <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-2">
                  H0C Context Graph
                </div>
                <div className="rounded-xl bg-slate-950 p-4 flex items-end justify-between gap-1 h-28">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t bg-primary/80 animate-pulse"
                      style={{
                        height: `${20 + Math.abs(Math.sin(i * 0.9) * 80)}%`,
                        animationDelay: `${i * 60}ms`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Frontend UX */}
            <div className="glass-panel rounded-3xl p-6 border-l-4 border-l-secondary">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary">
                    <Monitor className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-800">Frontend UX</h3>
                    <p className="text-xs text-slate-500">
                      Focus: Latency, Accessibility, Flow
                    </p>
                  </div>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full bg-secondary text-white">
                  Active Persona
                </span>
              </div>

              <div className="mt-5">
                <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-2">
                  Ranked Logic Path
                </div>
                <div className="space-y-2">
                  {[
                    { title: "Optimistic Redirects", pct: 96 },
                    { title: "Biometric WebAuthn", pct: 91 },
                  ].map((d) => (
                    <div
                      key={d.title}
                      className="rounded-xl bg-white/70 border border-white/50 p-3"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-semibold text-slate-800">{d.title}</span>
                        <span className="text-xs font-bold text-secondary">{d.pct}% match</span>
                      </div>
                      <div className="h-1.5 mt-2 rounded-full bg-slate-200 overflow-hidden">
                        <div className="h-full bg-secondary" style={{ width: `${d.pct}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5">
                <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-2">
                  H0C Context Graph
                </div>
                <div className="rounded-xl bg-slate-950 p-4 flex items-end justify-between gap-1 h-28">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t bg-secondary/80 animate-pulse"
                      style={{
                        height: `${20 + Math.abs(Math.cos(i * 0.7) * 80)}%`,
                        animationDelay: `${i * 60}ms`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bento grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="md:col-span-2 glass-panel rounded-3xl p-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center">
                  <Network className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800">Swarm Consensus Gap</h3>
                  <p className="text-xs text-slate-500">
                    Divergence between personas on this scenario
                  </p>
                </div>
              </div>
              <div className="mt-5 h-3 rounded-full overflow-hidden flex">
                <div className="bg-primary" style={{ width: "35%" }} />
                <div className="bg-secondary" style={{ width: "50%" }} />
                <div className="bg-slate-300" style={{ width: "15%" }} />
              </div>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-sm text-slate-500">
                  Personas agree on stateless strategy, diverge on UX fallbacks.
                </span>
                <span className="text-sm font-bold text-secondary">85% Conflict Rate</span>
              </div>
            </div>

            <div className="rounded-3xl p-6 bg-primary text-white shadow-[0_0_30px_rgba(6,63,249,0.35)]">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span className="text-[11px] uppercase tracking-wider font-semibold">
                  AI Suggestion
                </span>
              </div>
              <h3 className="text-xl font-bold mt-3 leading-tight">
                Recommend introducing a Middleware Persona
              </h3>
              <p className="text-sm text-white/80 mt-2">
                Bridges backend state with frontend flow, closing the consensus gap.
              </p>
              <button className="mt-4 w-full py-2.5 rounded-xl bg-white text-primary font-bold text-sm hover:scale-95 transition-transform inline-flex items-center justify-center gap-2">
                <Plus className="w-4 h-4" /> Add Agent
              </button>
            </div>
          </div>
        </main>
      </div>

      <div className="fixed bottom-8 right-8 z-40 group">
        <button
          onClick={onRerun}
          className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center shadow-[0_0_30px_rgba(6,63,249,0.5)] hover:scale-95 transition-transform"
          aria-label="Run Simulation"
        >
          <Play className="w-5 h-5" />
        </button>
        <div className="absolute bottom-full right-0 mb-2 px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Run Simulation
        </div>
      </div>
    </div>
  );
}
