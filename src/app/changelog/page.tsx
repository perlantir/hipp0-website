import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Changelog | Hipp0.ai",
};

interface ChangelogItem {
  type: "feature" | "breaking" | "improvement";
  text: string;
}

interface ChangelogEntry {
  version: string;
  date: string;
  title: string;
  highlighted?: boolean;
  items: ChangelogItem[];
}

const changelog: ChangelogEntry[] = [
  {
    version: "v0.4.0",
    date: "April 10, 2026",
    title: "Production Hardening & Benchmarks",
    highlighted: true,
    items: [
      {
        type: "feature",
        text: "LongMemEval benchmark harness (loader, ingester, runner, scorer, CLI)",
      },
      {
        type: "feature",
        text: "Industry benchmarks roadmap: BEIR, HotpotQA, RULER, CRAG",
      },
      {
        type: "feature",
        text: "Cost tracking and per-project budget caps",
      },
      {
        type: "feature",
        text: "Per-agent API keys with scoped permissions",
      },
      {
        type: "feature",
        text: "Collaboration: comments, approvals, and annotations on decisions",
      },
      {
        type: "feature",
        text: "Notion, Linear, and Slack connectors",
      },
      {
        type: "feature",
        text: "Multi-tenant row-level security (RLS) policies",
      },
      {
        type: "feature",
        text: "Distillery resilience: retry + circuit breaker per provider",
      },
      {
        type: "feature",
        text: "Weekly digest delivery (email, Slack, webhook)",
      },
      {
        type: "feature",
        text: "OpenTelemetry traces and metrics",
      },
      {
        type: "feature",
        text: "Interactive Playground with 50-decision seed data",
      },
      {
        type: "feature",
        text: "4 pre-built project templates and framework tutorials (CrewAI, LangGraph, OpenAI Agents)",
      },
      {
        type: "improvement",
        text: "H0C Ultra compression reaches 20-33x token reduction",
      },
    ],
  },
  {
    version: "v0.3.2",
    date: "April 8, 2026",
    title: "Patterns, Capture & Compression",
    items: [
      {
        type: "feature",
        text: "Proactive pattern recommendations across projects",
      },
      {
        type: "feature",
        text: "Passive decision capture via monitoring API",
      },
      {
        type: "feature",
        text: "Context compression with session checkpoints",
      },
      {
        type: "feature",
        text: "Namespace isolation for multi-tenant decisions",
      },
    ],
  },
  {
    version: "v0.3.1",
    date: "April 8, 2026",
    title: "H0C, Wings & Evolution",
    items: [
      {
        type: "feature",
        text: "H0C compression format (10-12x token reduction)",
      },
      {
        type: "feature",
        text: "Agent Wings with learned affinity scoring",
      },
      {
        type: "feature",
        text: "Evolution Engine with 10 rule-based triggers",
      },
      {
        type: "feature",
        text: "Task-specific explanations in compiled context",
      },
      {
        type: "improvement",
        text: "4 urgency tiers (critical, high, medium, low)",
      },
    ],
  },
  {
    version: "v0.3.0",
    date: "April 7, 2026",
    title: "Full Rebrand & Platform Expansion",
    highlighted: true,
    items: [
      {
        type: "breaking",
        text: "Renamed DeciGraph \u2192 HIPP0 (202 files affected)",
      },
      {
        type: "feature",
        text: "Import Wizard with GitHub PR scanning",
      },
      {
        type: "feature",
        text: "Collab Rooms with real-time WebSocket",
      },
      {
        type: "feature",
        text: "Redesigned dashboard",
      },
      {
        type: "breaking",
        text: "Environment variables renamed (DECIGRAPH_ \u2192 HIPP0_)",
      },
    ],
  },
  {
    version: "v0.2.0",
    date: "March 29, 2026",
    title: "Core Intelligence",
    items: [
      {
        type: "feature",
        text: "5-signal scoring engine",
      },
      {
        type: "feature",
        text: "Role-differentiated context compilation",
      },
      {
        type: "feature",
        text: "Super Brain orchestration",
      },
      {
        type: "feature",
        text: "Contradiction detection (0.92 F1)",
      },
      {
        type: "feature",
        text: "12+ MCP tools",
      },
      {
        type: "feature",
        text: "TypeScript & Python SDKs",
      },
      {
        type: "feature",
        text: "Webhooks (Slack, Discord, Telegram)",
      },
    ],
  },
  {
    version: "v0.1.0",
    date: "March 8, 2026",
    title: "Initial Release",
    items: [
      {
        type: "feature",
        text: "Basic decision graph engine",
      },
      {
        type: "feature",
        text: "PostgreSQL storage with pgvector",
      },
      {
        type: "feature",
        text: "REST API",
      },
      {
        type: "feature",
        text: "CLI utility",
      },
    ],
  },
];

function BadgeType({ type }: { type: ChangelogItem["type"] }) {
  const styles = {
    feature:
      "bg-primary/10 text-primary",
    breaking:
      "bg-red-500/10 text-red-600",
    improvement:
      "bg-yellow-500/10 text-yellow-700",
  };

  const labels = {
    feature: "Feature",
    breaking: "Breaking",
    improvement: "Improvement",
  };

  return (
    <span
      className={`inline-block px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest rounded-full ${styles[type]}`}
    >
      {labels[type]}
    </span>
  );
}

export default function ChangelogPage() {
  return (
    <section className="relative py-24 md:py-32 px-6 md:px-8 max-w-4xl mx-auto">
      <div className="swarm-orb orb-blue w-[400px] h-[400px] -top-32 -right-48 opacity-50" />
      <div className="swarm-orb orb-yellow w-[350px] h-[350px] bottom-40 -left-48 opacity-40" />

      <div className="text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-on-background">
          Changelog
        </h1>
        <p className="mt-6 text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          Tracking the evolution of Hipp0 &mdash; every feature, fix, and
          breaking change.
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-[19px] md:left-[23px] top-0 bottom-0 w-px bg-slate-300/60" />

        <div className="space-y-12">
          {changelog.map((entry) => (
            <div key={entry.version} className="relative pl-14 md:pl-16">
              <div
                className={`absolute left-2.5 md:left-3.5 top-1 w-4 h-4 rounded-full border-[3px] ${
                  entry.highlighted
                    ? "bg-primary border-primary/30"
                    : "bg-white border-slate-300"
                }`}
              />

              <div className="flex items-center gap-3 mb-3">
                <span
                  className={`inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-full ${
                    entry.highlighted
                      ? "bg-primary text-on-primary"
                      : "bg-slate-200/80 text-on-surface-variant"
                  }`}
                >
                  {entry.version}
                </span>
                <span className="text-sm text-on-surface-variant">
                  {entry.date}
                </span>
              </div>

              <h2 className="text-xl md:text-2xl font-bold text-on-background mb-4">
                {entry.title}
              </h2>

              <div className="glass-panel rounded-2xl p-6">
                <ul className="space-y-3">
                  {entry.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <BadgeType type={item.type} />
                      <span className="text-sm text-on-surface-variant leading-relaxed">
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
