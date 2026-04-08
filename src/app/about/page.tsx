import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Hipp0.ai",
};

const stats = [
  { value: "778+", label: "Decisions Tracked", color: "bg-primary/10 text-primary" },
  { value: "16", label: "Active Agents", color: "bg-secondary/10 text-secondary" },
  { value: "155+", label: "Commits", color: "glass-panel text-on-background" },
  { value: "12+", label: "MCP Tools", color: "glass-panel text-on-background" },
];

const pillars = [
  {
    title: "Developer First",
    description: "SDK, CLI, and MCP from day one. Hipp0 is built for engineers who ship.",
  },
  {
    title: "Transparent Logic",
    description: "Every decision is scored, explained, and auditable. No black boxes.",
  },
  {
    title: "Open Source",
    description: "Apache 2.0 forever. Self-host, fork, extend. Your memory, your rules.",
  },
];

export default function AboutPage() {
  return (
    <section className="relative py-24 md:py-32 px-6 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <span className="inline-block mb-6 px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-full bg-primary/10 text-primary">
          Our Origin
        </span>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-on-background leading-tight">
          Hipp0 is built by{" "}
          <span className="text-primary">Perlantir AI&nbsp;Studio.</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          We believe AI agents deserve persistent memory. Our mission is to give
          every multi-agent team a shared hippocampus&mdash;so decisions are
          never lost, context never fades, and collaboration is always grounded
          in truth.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14 max-w-3xl mx-auto">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className={`${stat.color} rounded-2xl p-6 flex flex-col items-center justify-center`}
            >
              <span className="text-3xl md:text-4xl font-bold">{stat.value}</span>
              <span className="text-xs mt-1 font-medium uppercase tracking-wider opacity-70">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <h2 className="text-3xl font-bold text-on-background mb-8">
        The Journey
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-20">
        <div className="md:col-span-7 glass-panel rounded-3xl p-10">
          <span className="inline-block mb-3 px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full bg-primary/10 text-primary">
            Phase 01
          </span>
          <h3 className="text-2xl font-bold text-on-background mt-2">
            The Real Story
          </h3>
          <p className="text-lg font-semibold text-on-surface-variant mt-1">
            From a 10-Agent Tracking Need.
          </p>
          <p className="mt-4 text-sm text-on-surface-variant leading-relaxed">
            Hipp0 started as an internal tool called DeciGraph&mdash;a simple
            graph database for recording which agent made which decision during
            complex orchestration runs. We needed a way to audit 10+&nbsp;agents
            making hundreds of micro-decisions per pipeline, catch contradictions
            in real time, and compile a shared context window that actually fit
            inside a token budget. DeciGraph worked, but it was fragile. So we
            rebuilt it from scratch with a 5-signal scoring engine, temporal
            decay, and a first-class MCP server. That rebuild became Hipp0.
          </p>
        </div>

        <div className="md:col-span-5 glass-panel rounded-3xl overflow-hidden min-h-[260px]">
          <div className="w-full h-full bg-gradient-to-br from-primary/10 via-secondary/5 to-tertiary/10 flex items-center justify-center p-10">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto rounded-full glass-panel bg-white/40 border-white/60 flex items-center justify-center mb-4">
                <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
              </div>
              <p className="text-sm font-bold text-on-surface-variant">Persistent Memory Infrastructure</p>
            </div>
          </div>
        </div>

        <div className="md:col-span-4 glass-panel rounded-3xl p-10">
          <h3 className="text-xl font-bold text-on-background">
            Decision Memory
          </h3>
          <p className="mt-3 text-sm text-on-surface-variant leading-relaxed">
            Unlike vector stores that retrieve similar text, Hipp0 captures the
            <em> reasoning</em> behind each decision&mdash;who made it, what
            signals drove it, how confident the agent was, and whether it was
            later contradicted. This lets agent teams build on past logic instead
            of re-deriving it from scratch every session.
          </p>
        </div>

        <div className="md:col-span-8 bg-on-background rounded-3xl p-10 text-white">
          <h3 className="text-xl font-bold">The North Star</h3>
          <p className="mt-3 text-sm text-white/70 leading-relaxed max-w-xl">
            Every feature we ship is measured against one question:{" "}
            <em>
              &ldquo;Does this help an agent team make better decisions
              tomorrow based on what they learned today?&rdquo;
            </em>
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
            {pillars.map((pillar) => (
              <div key={pillar.title}>
                <h4 className="text-sm font-bold text-white">{pillar.title}</h4>
                <p className="mt-1 text-xs text-white/60 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-20">
        <div className="relative glass-panel rounded-3xl overflow-hidden min-h-[400px]">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary/20 blur-3xl" />
          <div className="w-full h-full bg-gradient-to-br from-slate-100 to-primary/5 flex items-center justify-center p-10">
            <div className="text-center space-y-4">
              <div className="w-28 h-28 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <svg className="w-14 h-14 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>
              </div>
              <blockquote className="text-sm font-bold italic max-w-[200px] mx-auto">
                &ldquo;Stateless agents are just tools. Persistent memory makes them a team.&rdquo;
              </blockquote>
            </div>
          </div>
        </div>

        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
            Founder &amp; Architect
          </span>
          <h2 className="text-4xl font-bold text-on-background mt-2">
            Nick Gallick
          </h2>
          <p className="mt-4 text-on-surface-variant leading-relaxed">
            Nick built Hipp0 after running a 14-agent AI team for his own
            projects and watching stateless agents repeat the same mistakes
            across sessions. With a background as SVP in Finance and founder
            of Perlantir AI Studio, he decided that decision memory
            shouldn&apos;t be an afterthought&mdash;it should be infrastructure.
          </p>

          <div className="mt-8 space-y-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                Background
              </span>
              <p className="text-sm text-on-background font-semibold mt-1">
                SVP in Finance &amp; Founder, Perlantir AI Studio
              </p>
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                Philosophy
              </span>
              <p className="text-sm text-on-background font-semibold mt-1">
                Memory is infrastructure, not a feature.
              </p>
            </div>
          </div>

          <blockquote className="mt-8 border-l-4 border-primary pl-5 text-on-surface-variant italic leading-relaxed">
            &ldquo;Stateless agents are just tools. Persistent memory makes them
            a team.&rdquo;
          </blockquote>
        </div>
      </div>

      <div className="glass-panel rounded-3xl p-10 md:p-14">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-on-background">
            Get in touch.
          </h2>
          <p className="mt-3 text-on-surface-variant max-w-lg mx-auto">
            Whether you&apos;re exploring a partnership, want to learn more
            about the studio, or just want to say hi&mdash;we&apos;d love to
            hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <a
            href="mailto:hello@hipp0.ai"
            className="glass-panel-heavy rounded-2xl p-8 text-center hover:shadow-lg transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-on-background group-hover:text-primary transition-colors">
              Partnerships
            </h3>
            <p className="text-sm text-on-surface-variant mt-1">
              hello@hipp0.ai
            </p>
          </a>

          <a
            href="https://github.com/perlantir"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel-heavy rounded-2xl p-8 text-center hover:shadow-lg transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-secondary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-2.83A3 3 0 0012 3.568 3 3 0 0116.5 6.5a3.001 3.001 0 003.75 2.849m-16.5 0H21.75"
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-on-background group-hover:text-primary transition-colors">
              Studio
            </h3>
            <p className="text-sm text-on-surface-variant mt-1">
              Perlantir AI Studio
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
