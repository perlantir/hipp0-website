import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documentation | Hipp0.ai",
};

const DOCS_BASE =
  "https://github.com/perlantir/Hipp0/blob/main/docs";

const quickLinks = [
  {
    title: "Core Framework",
    description: "Architecture, decision protocol, and scoring engine.",
    href: `${DOCS_BASE}/architecture.md`,
    color: "text-primary",
    bg: "bg-primary/10",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
      </svg>
    ),
  },
  {
    title: "Custom Connectors",
    description: "GitHub, Slack, Linear, webhooks, and more.",
    href: `${DOCS_BASE}/webhooks.md`,
    color: "text-secondary",
    bg: "bg-secondary/10",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m9.07-9.07a4.5 4.5 0 00-6.364 0l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
  },
  {
    title: "Self-Hosting",
    description: "Docker, PostgreSQL, and production deployment.",
    href: `${DOCS_BASE}/self-hosting.md`,
    color: "text-yellow-600",
    bg: "bg-yellow-500/10",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0h.375a2.625 2.625 0 010 5.25H3.375a2.625 2.625 0 010-5.25H3.75" />
      </svg>
    ),
  },
];

const sdkLinks = [
  { label: "@hipp0/sdk", file: "api-reference.md" },
  { label: "hipp0-memory (Python)", file: "getting-started.md" },
  { label: "@hipp0/cli", file: "getting-started.md" },
  { label: "@hipp0/mcp", file: "mcp-setup.md" },
];

const hostingLinks = [
  { label: "Docker Compose", file: "self-hosting.md" },
  { label: "Self-Hosting Guide", file: "self-hosting.md" },
  { label: "Env Vars", file: "self-hosting.md" },
  { label: "PostgreSQL Setup", file: "storage.md" },
];

const allDocs = [
  { file: "getting-started.md", desc: "Get up and running with Hipp0" },
  { file: "quickstart.md", desc: "Minimal setup guide" },
  { file: "architecture.md", desc: "System design deep-dive" },
  { file: "api-reference.md", desc: "Complete REST API spec" },
  { file: "mcp-setup.md", desc: "MCP server configuration" },
  { file: "self-hosting.md", desc: "Production deployment guide" },
  { file: "storage.md", desc: "PostgreSQL schema details" },
  { file: "agent-protocol.md", desc: "Agent Decision Protocol" },
  { file: "agent-wings.md", desc: "Wing groupings and affinity" },
  { file: "temporal-intelligence.md", desc: "Time scopes and decay" },
  { file: "collab-rooms.md", desc: "Real-time collaboration" },
  { file: "cascade-alerts.md", desc: "Dependency notification flow" },
  { file: "review-queue.md", desc: "Decision review workflow" },
  { file: "webhooks.md", desc: "Event types and payloads" },
  { file: "github-integration.md", desc: "GitHub PR scanning" },
  { file: "comparison.md", desc: "vs Mem0, Supermemory, Zep, LangMem" },
  { file: "h0c-format.md", desc: "H0C token-efficient format" },
  { file: "context-survival.md", desc: "Token compression strategies" },
];

export default function DocsPage() {
  return (
    <section className="relative py-24 md:py-32 px-6 md:px-8 max-w-7xl mx-auto">
      <div className="glass-panel rounded-3xl p-10 md:p-14 mb-16">
        <span className="inline-block mb-4 px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-full bg-primary text-on-primary">
          New Release
        </span>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-on-background leading-tight">
          Get Hipp0 running in under 60&nbsp;seconds.
        </h1>
        <p className="mt-4 text-lg text-on-surface-variant max-w-2xl leading-relaxed">
          Hipp0 is the decision memory layer for AI agent teams. Explore our
          docs to learn how to integrate, deploy, and scale.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href={`${DOCS_BASE}/getting-started.md`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-on-primary px-6 py-3 rounded-xl font-bold text-sm hover:scale-[0.97] transition-all shadow-[0_0_20px_rgba(6,63,249,0.4)]"
          >
            Quick Start
          </a>
          <div className="flex flex-col gap-2">
            <code className="glass-panel-heavy px-4 py-3 rounded-xl text-sm font-mono text-on-surface-variant select-all">
              npx @hipp0/cli init my-project
            </code>
            <div className="flex flex-wrap gap-2">
              <code className="glass-panel-heavy px-4 py-2 rounded-lg text-xs font-mono text-on-surface-variant select-all">
                npm install @hipp0/sdk
              </code>
              <code className="glass-panel-heavy px-4 py-2 rounded-lg text-xs font-mono text-on-surface-variant select-all">
                pip install hipp0-memory
              </code>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-on-background mb-6">
        Quick Links
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        {quickLinks.map((link) => (
          <a
            key={link.title}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel rounded-2xl p-6 hover:shadow-lg transition-all group"
          >
            <div
              className={`w-10 h-10 ${link.bg} rounded-xl flex items-center justify-center ${link.color} mb-4`}
            >
              {link.icon}
            </div>
            <h3 className="text-lg font-bold text-on-background group-hover:text-primary transition-colors">
              {link.title}
            </h3>
            <p className="mt-1 text-sm text-on-surface-variant">
              {link.description}
            </p>
          </a>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-on-background mb-6">
        Explore by Category
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        <div className="glass-panel rounded-2xl p-8">
          <h3 className="text-lg font-bold text-on-background mb-4">
            SDK Reference
          </h3>
          <ul className="space-y-3">
            {sdkLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={`${DOCS_BASE}/${link.file}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-on-surface-variant hover:text-primary transition-colors"
                >
                  <svg
                    className="w-4 h-4 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  <code className="font-mono">{link.label}</code>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="glass-panel rounded-2xl p-8">
          <h3 className="text-lg font-bold text-on-background mb-4">
            Hosting &amp; DevOps
          </h3>
          <ul className="space-y-3">
            {hostingLinks.map((link, i) => (
              <li key={`${link.label}-${i}`}>
                <a
                  href={`${DOCS_BASE}/${link.file}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-on-surface-variant hover:text-primary transition-colors"
                >
                  <svg
                    className="w-4 h-4 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-on-background mb-6">
        Full Documentation
      </h2>
      <div className="glass-panel rounded-2xl divide-y divide-slate-200/60 mb-20">
        {allDocs.map((doc) => (
          <a
            key={doc.file}
            href={`${DOCS_BASE}/${doc.file}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between px-8 py-4 hover:bg-white/40 transition-colors group"
          >
            <div className="flex items-center gap-4">
              <svg
                className="w-5 h-5 text-slate-400 group-hover:text-primary transition-colors flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>
              <div>
                <span className="text-sm font-semibold text-on-background group-hover:text-primary transition-colors">
                  {doc.file}
                </span>
                <p className="text-xs text-on-surface-variant">{doc.desc}</p>
              </div>
            </div>
            <svg
              className="w-4 h-4 text-slate-400 group-hover:text-primary transition-colors flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
          </a>
        ))}
      </div>

      <div className="glass-panel rounded-3xl p-10 md:p-14 text-center">
        <h2 className="text-3xl font-bold text-on-background">Need help?</h2>
        <p className="mt-3 text-on-surface-variant max-w-lg mx-auto">
          Join the community, open an issue, or reach out on social media.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="https://github.com/perlantir/Hipp0/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-slate-300 px-6 py-3 rounded-xl font-bold text-sm text-on-background hover:border-primary hover:text-primary transition-all"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub Issues
          </a>
          <a
            href="https://x.com/hipp0ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-slate-300 px-6 py-3 rounded-xl font-bold text-sm text-on-background hover:border-primary hover:text-primary transition-all"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            X
          </a>
        </div>
      </div>
    </section>
  );
}
