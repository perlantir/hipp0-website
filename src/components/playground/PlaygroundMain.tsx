"use client";

import { useState } from "react";
import {
  Hammer,
  Gavel,
  Grid3x3,
  Compass,
  Terminal,
  Paperclip,
  Cpu,
  Radar,
  Clock,
  Edit3,
  Share2,
  Download,
  ArrowRight,
  ChevronUp,
  Server,
  Monitor,
  Bot,
  Play,
  Braces,
  Settings,
  Bell,
  Sparkles,
  GitBranch,
} from "lucide-react";

export type Agent = {
  id: string;
  name: string;
  role: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
};

export const AGENTS: Agent[] = [
  { id: "architect", name: "Architect", role: "System Design", icon: Compass, color: "text-primary" },
  { id: "backend", name: "Backend", role: "APIs & Data", icon: Server, color: "text-indigo-500" },
  { id: "frontend", name: "Frontend", role: "UX & UI", icon: Monitor, color: "text-secondary" },
  { id: "security", name: "Security", role: "Threat Model", icon: Gavel, color: "text-red-500" },
  { id: "devops", name: "DevOps", role: "CI / CD", icon: Terminal, color: "text-emerald-500" },
  { id: "reviewer", name: "Reviewer", role: "Quality", icon: Cpu, color: "text-amber-500" },
];

export const SCENARIOS: { id: string; label: string; hint: string }[] = [
  { id: "auth", label: "Auth system design", hint: "OAuth2, JWT, sessions" },
  { id: "db-migration", label: "Database migration strategy", hint: "Schema evolution" },
  { id: "frontend-framework", label: "Frontend framework selection", hint: "React vs Svelte vs Solid" },
  { id: "cicd", label: "CI/CD pipeline optimization", hint: "Build time, cache" },
  { id: "security-audit", label: "Security audit automation", hint: "SAST, DAST, IaC" },
];

type PlaygroundMainProps = {
  onCompile: (task: string) => void;
  isLoading: boolean;
  selectedScenario: string | null;
  onSelectScenario: (id: string) => void;
  onOpenCompare: () => void;
  taskInput: string;
  setTaskInput: (v: string) => void;
  timeValue: number;
  setTimeValue: (v: number) => void;
};

export default function PlaygroundMain({
  onCompile,
  isLoading,
  selectedScenario,
  onSelectScenario,
  onOpenCompare,
  taskInput,
  setTaskInput,
  timeValue,
  setTimeValue,
}: PlaygroundMainProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const activeScenario = SCENARIOS.find((s) => s.id === selectedScenario);

  return (
    <div className="relative min-h-screen">
      {/* Ambient orbs */}
      <div
        aria-hidden
        className="swarm-orb orb-blue pointer-events-none"
        style={{ width: 520, height: 520, top: -120, left: -120, position: "fixed", zIndex: -1 }}
      />
      <div
        aria-hidden
        className="swarm-orb orb-pink pointer-events-none"
        style={{ width: 440, height: 440, top: "30%", right: -160, position: "fixed", zIndex: -1 }}
      />
      <div
        aria-hidden
        className="swarm-orb orb-yellow pointer-events-none"
        style={{ width: 380, height: 380, bottom: -120, left: 80, position: "fixed", zIndex: -1 }}
      />

      {/* Sub-nav strip for the playground */}
      <div className="glass-panel sticky top-20 z-40 rounded-none border-x-0 border-t-0">
        <div className="max-w-7xl mx-auto px-6 md:px-8 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <Bot className="w-4 h-4 text-primary" />
            </div>
            <span className="font-bold tracking-tight text-on-surface">Hipp0 Super Brain</span>
            <span className="hidden md:inline-block text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
              Playground
            </span>
          </div>
          <div className="hidden lg:flex items-center gap-5 text-sm">
            {["Models", "Scenarios", "History", "Docs"].map((label, i) => (
              <button
                key={label}
                className={
                  i === 1
                    ? "text-primary font-semibold"
                    : "text-slate-500 hover:text-slate-800 transition-colors"
                }
              >
                {label}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button
              aria-label="Settings"
              className="w-9 h-9 rounded-lg hover:bg-white/80 flex items-center justify-center text-slate-500"
            >
              <Settings className="w-4 h-4" />
            </button>
            <button
              aria-label="Notifications"
              className="w-9 h-9 rounded-lg hover:bg-white/80 flex items-center justify-center text-slate-500"
            >
              <Bell className="w-4 h-4" />
            </button>
            <button className="hidden sm:inline-flex items-center gap-2 bg-primary text-on-primary px-4 py-2 rounded-xl font-semibold text-sm hover:scale-95 transition-all shadow-[0_0_20px_rgba(6,63,249,0.3)]">
              <Play className="w-3.5 h-3.5" /> Deploy Agent
            </button>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 pt-10 pb-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-on-surface">
          See how your agents <span className="italic font-serif text-primary">would</span> think
        </h1>
        <p className="mt-3 text-lg text-slate-500 max-w-2xl">
          Play with real decision memory. No signup, no install.
        </p>
        <div className="mt-5 inline-flex items-center gap-3 rounded-full px-4 py-2 glass-panel text-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-medium text-slate-700">Demo project loaded:</span>
          <span className="text-slate-500">Building a SaaS platform</span>
          <span className="text-slate-300">/</span>
          <span className="text-slate-500">50 decisions</span>
          <span className="text-slate-300">/</span>
          <span className="text-slate-500">6 agents</span>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 pb-48">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left - Active Swarm & Scenarios */}
          <aside className="lg:col-span-3 space-y-6">
            <div className="glass-panel rounded-3xl p-5">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-bold text-sm tracking-wide uppercase text-slate-700">
                  Active Swarm
                </h2>
                <span className="text-xs text-slate-400">6 / 6</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {AGENTS.map((a) => {
                  const Icon = a.icon;
                  return (
                    <div
                      key={a.id}
                      className="group bg-white/70 border border-white/50 rounded-xl p-3 hover:bg-white transition-all cursor-pointer"
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-8 h-8 rounded-lg bg-gradient-to-br from-white to-slate-100 flex items-center justify-center ${a.color}`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs font-semibold text-slate-800 truncate">
                            {a.name}
                          </div>
                          <div className="text-[10px] text-slate-400 truncate">{a.role}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="glass-panel rounded-3xl p-5">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-bold text-sm tracking-wide uppercase text-slate-700">
                  Scenario Picker
                </h2>
                <Radar className="w-4 h-4 text-slate-400" />
              </div>
              <div className="space-y-2">
                {SCENARIOS.slice(0, 3).map((s) => (
                  <button
                    key={s.id}
                    onClick={() => onSelectScenario(s.id)}
                    className={`w-full text-left rounded-xl p-3 border transition-all ${
                      selectedScenario === s.id
                        ? "bg-primary text-white border-primary shadow-[0_0_20px_rgba(6,63,249,0.3)]"
                        : "bg-white/70 border-white/50 hover:bg-white"
                    }`}
                  >
                    <div className="text-sm font-semibold">{s.label}</div>
                    <div
                      className={`text-xs ${
                        selectedScenario === s.id ? "text-white/80" : "text-slate-400"
                      }`}
                    >
                      {s.hint}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Center - Simulation Input */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel rounded-3xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-bold text-lg tracking-tight text-on-surface">
                  Simulation Input
                </h2>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Ready to compile
                </span>
              </div>
              <textarea
                value={taskInput}
                onChange={(e) => setTaskInput(e.target.value)}
                placeholder="Type a task or objective..."
                rows={6}
                className="w-full rounded-2xl bg-white/80 border border-white/60 p-4 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
              />

              <div className="mt-4 rounded-2xl border-2 border-dashed border-slate-300/70 p-5 flex flex-col items-center justify-center text-center text-slate-400 hover:border-primary/40 hover:text-primary/70 transition-colors cursor-pointer">
                <Paperclip className="w-5 h-5 mb-2" />
                <div className="text-xs font-medium">
                  Drop contextual data here (H0C files, logs, design docs)
                </div>
              </div>

              <button
                onClick={() => onCompile(taskInput || activeScenario?.label || "")}
                disabled={isLoading}
                className="mt-5 w-full bg-primary text-on-primary py-4 rounded-2xl font-bold text-base hover:scale-[0.99] transition-all shadow-[0_0_30px_rgba(6,63,249,0.35)] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                    Compiling…
                  </>
                ) : (
                  <>
                    <Hammer className="w-4 h-4" /> Compile Scenario
                  </>
                )}
              </button>
            </div>

            <div className="glass-panel rounded-3xl px-6 py-5 flex items-center justify-between">
              <div>
                <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                  Time Travel
                </div>
                <div className="text-sm text-slate-600 mt-0.5">
                  T + {(timeValue / 10).toFixed(2)}s
                </div>
              </div>
              <div className="flex-1 mx-6">
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={timeValue}
                  onChange={(e) => setTimeValue(Number(e.target.value))}
                  className="w-full accent-primary"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                  <span>Initialization</span>
                  <span>Final State</span>
                </div>
              </div>
              <Clock className="w-4 h-4 text-slate-400" />
            </div>
          </div>

          {/* Right - Results placeholder */}
          <aside className="lg:col-span-4">
            <div className="glass-panel rounded-3xl p-6 h-full min-h-[480px] flex flex-col items-center justify-center text-center">
              <div className="relative w-32 h-32 mb-6">
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/40 animate-spin-slow" />
                <div
                  className="absolute inset-3 rounded-full border border-primary/20"
                  style={{ animation: "spin 6s linear infinite reverse" }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-primary/70" />
                </div>
              </div>
              <h3 className="font-bold text-lg text-slate-700">Awaiting Computation</h3>
              <p className="text-sm text-slate-400 mt-2 max-w-xs">
                Pick a scenario or write your own task. The swarm will rank decisions in real
                time.
              </p>
              <div className="mt-6 w-full space-y-2">
                <div className="h-3 rounded-full bg-slate-200/60 animate-pulse" />
                <div className="h-3 rounded-full bg-slate-200/60 animate-pulse w-4/5" />
                <div className="h-3 rounded-full bg-slate-200/60 animate-pulse w-3/5" />
              </div>
              <button
                onClick={onOpenCompare}
                className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-primary hover:underline"
              >
                <GitBranch className="w-3.5 h-3.5" /> Compare Agents
              </button>
            </div>
          </aside>
        </div>
      </section>

      {/* Floating action panel */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-[min(720px,calc(100%-2rem))]">
        {dropdownOpen && (
          <div className="mb-3 glass-panel-heavy rounded-3xl p-3 shadow-[0_30px_60px_rgba(0,0,0,0.12)]">
            <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold px-3 py-2">
              Pick a scenario
            </div>
            <div className="space-y-1">
              {SCENARIOS.map((s) => (
                <button
                  key={s.id}
                  onClick={() => {
                    onSelectScenario(s.id);
                    setDropdownOpen(false);
                  }}
                  className="group w-full flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-primary/5 transition-colors text-left"
                >
                  <div>
                    <div className="text-sm font-semibold text-slate-800">{s.label}</div>
                    <div className="text-xs text-slate-400">{s.hint}</div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              ))}
            </div>
          </div>
        )}
        <div className="glass-panel-heavy rounded-full pl-2 pr-2 py-2 flex items-center gap-2 shadow-[0_20px_50px_rgba(6,63,249,0.2)]">
          <button
            onClick={() => setDropdownOpen((v) => !v)}
            className="inline-flex items-center gap-2 bg-primary text-on-primary px-4 py-2.5 rounded-full text-sm font-bold hover:scale-95 transition-all"
          >
            {dropdownOpen ? <ChevronUp className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            Run scenario
          </button>
          <input
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            placeholder="Try your own task..."
            className="flex-1 bg-transparent text-sm outline-none text-slate-700 placeholder:text-slate-400 px-2"
          />
          <button
            aria-label="Share"
            className="w-9 h-9 rounded-full hover:bg-white/80 flex items-center justify-center text-slate-500"
          >
            <Share2 className="w-4 h-4" />
          </button>
          <button
            aria-label="Download"
            className="w-9 h-9 rounded-full hover:bg-white/80 flex items-center justify-center text-slate-500"
          >
            <Download className="w-4 h-4" />
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow { animation: spin-slow 10s linear infinite; }
      `}</style>
    </div>
  );
}
