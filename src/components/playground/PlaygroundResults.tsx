"use client";

import { useState } from "react";
import {
  Grid3x3,
  Radar,
  Cpu,
  Clock,
  Terminal,
  Braces,
  ArrowRight,
  Sparkles,
  Bot,
  GitBranch,
  Hammer,
} from "lucide-react";

export type DecisionResult = {
  id: string;
  rank: number;
  title: string;
  description: string;
  confidence: number;
  globalScore: number;
  directAffect: number;
  tagMatch: number;
  tags: string[];
};

type PlaygroundResultsProps = {
  results: DecisionResult[];
  scenarioLabel: string;
  onBack: () => void;
  onRerun: () => void;
  tokenCount?: number;
  compressionRatio?: number;
};

const DEFAULT_RESULTS: DecisionResult[] = [
  {
    id: "r1",
    rank: 1,
    title: "Adopt JWT with refresh token rotation",
    description:
      "Stateless auth with short-lived access tokens and rotating refresh tokens keyed per device. Preferred for our horizontally scaled API edge.",
    confidence: 94,
    globalScore: 0.92,
    directAffect: 0.88,
    tagMatch: 0.96,
    tags: ["auth", "scalability", "stateless"],
  },
  {
    id: "r2",
    rank: 2,
    title: "Server-side session with Redis",
    description:
      "Centralized session store simplifies revocation and audit trails but introduces a single coordinator failure mode and tighter infra coupling.",
    confidence: 81,
    globalScore: 0.78,
    directAffect: 0.74,
    tagMatch: 0.82,
    tags: ["auth", "stateful", "redis"],
  },
];

export default function PlaygroundResults({
  results,
  scenarioLabel,
  onBack,
  onRerun,
  tokenCount = 1284,
  compressionRatio = 4.7,
}: PlaygroundResultsProps) {
  const data = results.length > 0 ? results : DEFAULT_RESULTS;
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100">
      {/* Ambient orbs dark */}
      <div
        aria-hidden
        className="pointer-events-none fixed rounded-full blur-[120px]"
        style={{
          width: 520,
          height: 520,
          top: -120,
          left: -120,
          background: "rgba(6, 63, 249, 0.35)",
          zIndex: 0,
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none fixed rounded-full blur-[120px]"
        style={{
          width: 400,
          height: 400,
          bottom: -120,
          right: -120,
          background: "rgba(255, 46, 147, 0.18)",
          zIndex: 0,
        }}
      />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 min-h-screen">
        {/* Left sidebar */}
        <aside className="hidden lg:flex lg:col-span-2 flex-col border-r border-white/5 bg-slate-900/50 backdrop-blur-xl p-5">
          <div>
            <div className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold">
              Swarm Orchestrator
            </div>
            <div className="text-sm font-bold text-white mt-1">v2.4.0-alpha</div>
          </div>
          <nav className="mt-8 space-y-1 text-sm">
            {[
              { label: "Agents", icon: Bot },
              { label: "Scenarios", icon: Radar },
              { label: "Variables", icon: Braces, active: true },
              { label: "Memory", icon: Cpu },
              { label: "Logs", icon: Terminal },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.label}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                    item.active
                      ? "bg-primary/20 text-primary"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </nav>

          <div className="mt-10">
            <div className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold mb-3">
              Agent Skill Heatmap
            </div>
            <div className="grid grid-cols-4 gap-1.5">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-sm"
                  style={{ background: `rgba(6, 63, 249, ${0.2 + (i % 5) * 0.15})` }}
                />
              ))}
            </div>
          </div>

          <button
            onClick={onBack}
            className="mt-auto text-xs text-slate-500 hover:text-white transition-colors text-left"
          >
            ← Back to Canvas
          </button>
        </aside>

        {/* Main */}
        <main className="lg:col-span-7 p-6 md:p-10">
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                Compilation Results
              </h1>
              <p className="text-slate-400 mt-1 text-sm">{scenarioLabel}</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={onRerun}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 text-sm text-slate-200 hover:bg-white/5"
              >
                <Hammer className="w-3.5 h-3.5" /> Re-Run Analysis
              </button>
              <button className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-white text-sm font-semibold hover:scale-95 transition-transform shadow-[0_0_30px_rgba(6,63,249,0.4)]">
                <GitBranch className="w-3.5 h-3.5" /> Commit to Swarm
              </button>
            </div>
          </div>

          <div className="mt-8 space-y-5">
            {data.map((r) => {
              const isTop = r.rank === 1;
              return (
                <div
                  key={r.id}
                  onMouseEnter={() => setHovered(r.id)}
                  onMouseLeave={() => setHovered(null)}
                  className={`relative rounded-3xl p-6 backdrop-blur-xl bg-slate-900/60 border transition-all ${
                    isTop
                      ? "border-primary/60 shadow-[0_0_40px_rgba(6,63,249,0.25)]"
                      : "border-white/10"
                  }`}
                >
                  <div className="flex items-start justify-between gap-6 flex-wrap">
                    <div className="flex-1 min-w-[260px]">
                      <div className="flex items-center gap-3 mb-3">
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold ${
                            isTop ? "bg-primary text-white" : "bg-slate-800 text-slate-300"
                          }`}
                        >
                          #{r.rank}
                        </div>
                        <span
                          className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${
                            isTop
                              ? "bg-emerald-500/20 text-emerald-300"
                              : "bg-slate-700/60 text-slate-300"
                          }`}
                        >
                          {r.confidence}% confidence
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-white">{r.title}</h3>
                      <p className="text-sm text-slate-400 mt-1">{r.description}</p>
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {r.tags.map((t) => (
                          <span
                            key={t}
                            className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/5 text-slate-300 border border-white/10"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">
                        Global Score
                      </div>
                      <div
                        className={`text-4xl font-bold mt-1 ${
                          isTop ? "text-primary" : "text-slate-200"
                        }`}
                      >
                        {r.globalScore.toFixed(2)}
                      </div>
                    </div>
                  </div>
                  <div
                    className={`grid grid-cols-2 gap-4 mt-4 overflow-hidden transition-all ${
                      hovered === r.id ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div>
                      <div className="flex justify-between text-xs text-slate-400">
                        <span>Direct Affect</span>
                        <span>{Math.round(r.directAffect * 100)}%</span>
                      </div>
                      <div className="h-1.5 mt-1 rounded-full bg-white/5 overflow-hidden">
                        <div
                          className="h-full bg-primary"
                          style={{ width: `${r.directAffect * 100}%` }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs text-slate-400">
                        <span>Tag Match</span>
                        <span>{Math.round(r.tagMatch * 100)}%</span>
                      </div>
                      <div className="h-1.5 mt-1 rounded-full bg-white/5 overflow-hidden">
                        <div
                          className="h-full bg-secondary"
                          style={{ width: `${r.tagMatch * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 rounded-3xl p-6 backdrop-blur-xl bg-slate-900/60 border border-white/10">
            <h3 className="font-bold text-white">Contrastive Explanations</h3>
            <div className="grid md:grid-cols-2 gap-5 mt-4">
              <div>
                <div className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold mb-2">
                  Why #1 over #2?
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  The top choice scored +14 points on Direct Affect because it scales horizontally
                  without a shared coordinator. Tag overlap with the scenario tags also skewed
                  toward stateless authentication.
                </p>
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold mb-2">
                  Agent Consensus
                </div>
                <div className="space-y-2">
                  {[
                    { agent: "Architect", pct: 92 },
                    { agent: "Backend", pct: 88 },
                    { agent: "Security", pct: 74 },
                  ].map((row) => (
                    <div key={row.agent}>
                      <div className="flex justify-between text-xs text-slate-400">
                        <span>{row.agent}</span>
                        <span>{row.pct}%</span>
                      </div>
                      <div className="h-1.5 mt-1 rounded-full bg-white/5 overflow-hidden">
                        <div className="h-full bg-primary" style={{ width: `${row.pct}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Right H0C sidebar */}
        <aside className="lg:col-span-3 border-l border-white/5 bg-slate-900/50 backdrop-blur-xl p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Braces className="w-4 h-4 text-primary" />
              <span className="font-bold text-white">H0C Context</span>
            </div>
            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-primary/20 text-primary">
              v2.4
            </span>
          </div>
          <div className="grid grid-cols-2 gap-3 mt-5">
            <div className="rounded-xl border border-white/10 p-3">
              <div className="text-[10px] uppercase tracking-wider text-slate-500">Tokens</div>
              <div className="text-xl font-bold text-white">{tokenCount.toLocaleString()}</div>
            </div>
            <div className="rounded-xl border border-white/10 p-3">
              <div className="text-[10px] uppercase tracking-wider text-slate-500">Ratio</div>
              <div className="text-xl font-bold text-white">{compressionRatio.toFixed(1)}x</div>
            </div>
          </div>
          <pre className="mt-5 rounded-xl border border-white/10 bg-slate-950/70 p-4 text-[11px] font-mono leading-relaxed overflow-auto max-h-80">
            <code>
              <span style={{ color: "#64748b" }}># H0C v2.4 — compiled context</span>
              {"\n"}
              <span style={{ color: "#ff2e93" }}>scenario</span>{" = "}
              <span style={{ color: "#fde047" }}>&quot;auth-flow&quot;</span>
              {"\n"}
              <span style={{ color: "#ff2e93" }}>agents</span>
              {" = ["}
              <span style={{ color: "#fde047" }}>&quot;architect&quot;</span>
              {", "}
              <span style={{ color: "#fde047" }}>&quot;backend&quot;</span>
              {"]"}
              {"\n\n"}
              <span style={{ color: "#ff2e93" }}>def</span>{" "}
              <span style={{ color: "#60a5fa" }}>compile_memory</span>
              {"(ctx):"}
              {"\n    "}
              <span style={{ color: "#64748b" }}># score decisions by 5 signals</span>
              {"\n    "}
              <span style={{ color: "#ff2e93" }}>return</span>{" "}
              <span style={{ color: "#60a5fa" }}>rank</span>
              {"(ctx.decisions)"}
            </code>
          </pre>
          <button className="mt-5 w-full py-3 rounded-xl bg-primary text-white font-bold text-sm hover:scale-95 transition-transform">
            Copy Compressed H0C
          </button>
          <div className="mt-5 text-[10px] text-slate-500 flex items-center gap-1.5">
            <Clock className="w-3 h-3" />
            Compiled moments ago
          </div>
        </aside>
      </div>
    </div>
  );
}
