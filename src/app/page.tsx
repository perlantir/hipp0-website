import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-24 pb-32">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 pt-24 md:pt-32 text-center relative">
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-headline tracking-tight max-w-4xl mx-auto leading-tight">
            Your AI agents forget everything.{" "}
            <span className="text-primary">Hipp0 fixes that.</span>
          </h1>
          <p className="text-lg md:text-2xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            The decision memory layer for multi-agent AI teams. Captures what was decided, why, and by whom — then compiles the right context for each agent, every time.
          </p>
          <p className="text-sm text-on-surface-variant mt-4 font-mono">
            Built for engineers shipping multi-agent systems with LangGraph, CrewAI, AutoGen, or OpenAI Agents.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <a
              href="https://github.com/perlantir/Hipp0"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
            >
              Get Started
            </a>
            <a
              href="https://github.com/perlantir/Hipp0"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-2 hover:bg-slate-50 transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              View on GitHub
            </a>
          </div>
          <div className="mt-12 flex flex-col gap-3 items-center">
            <div className="inline-flex items-center gap-4 bg-slate-900 text-slate-300 px-6 py-3 rounded-2xl font-mono text-sm border border-slate-800 shadow-2xl">
              <span className="text-green-400 text-xs"># Zero config</span>
              <span>npx @hipp0/cli init my-project</span>
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              <div className="inline-flex items-center gap-3 bg-slate-900 text-slate-300 px-5 py-2 rounded-xl font-mono text-xs border border-slate-800">
                <span>npm install @hipp0/mcp</span>
              </div>
              <div className="inline-flex items-center gap-3 bg-slate-900 text-slate-300 px-5 py-2 rounded-xl font-mono text-xs border border-slate-800">
                <span>pip install hipp0-memory</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="glass-panel rounded-4xl p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12">
          <div className="flex gap-8 md:gap-12">
            <div className="flex flex-col">
              <span className="text-3xl md:text-4xl font-bold font-headline">778+</span>
              <span className="text-xs font-label uppercase tracking-widest text-on-surface-variant">Decisions Tracked</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl md:text-4xl font-bold font-headline">5</span>
              <span className="text-xs font-label uppercase tracking-widest text-on-surface-variant">Frameworks Supported</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl md:text-4xl font-bold font-headline">21</span>
              <span className="text-xs font-label uppercase tracking-widest text-on-surface-variant">MCP Tools</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-6 md:gap-8 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {["LangGraph", "CrewAI", "AutoGen", "OpenAI Agents", "LangChain"].map((fw) => (
              <div key={fw} className="font-headline font-bold text-base md:text-lg">{fw}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-8 grid md:grid-cols-3 gap-6 md:gap-8">
        <div className="glass-panel p-8 md:p-10 rounded-4xl space-y-6 hover:-translate-y-2 transition-transform duration-300">
          <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-primary">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>
          </div>
          <h3 className="text-2xl font-bold font-headline">Agents are stateless</h3>
          <p className="text-on-surface-variant leading-relaxed">Most agents reset their context window every few interactions, losing the &ldquo;why&rdquo; behind critical decisions.</p>
        </div>
        <div className="glass-panel p-8 md:p-10 rounded-4xl space-y-6 hover:-translate-y-2 transition-transform duration-300">
          <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-primary">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
          </div>
          <h3 className="text-2xl font-bold font-headline">Context gets lost</h3>
          <p className="text-on-surface-variant leading-relaxed">Multi-agent handoffs often fail because the receiving agent lacks the full execution history of its predecessor.</p>
        </div>
        <div className="glass-panel p-8 md:p-10 rounded-4xl space-y-6 border-primary/20 bg-primary/5 hover:-translate-y-2 transition-transform duration-300">
          <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </div>
          <h3 className="text-2xl font-bold font-headline">Hipp0 remembers</h3>
          <p className="text-on-surface-variant leading-relaxed">Our persistent decision layer creates a verifiable, queryable history of every decision your agents make.</p>
        </div>
      </section>

      <section className="bg-slate-50 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16 md:mb-20 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">The 3-Step Decision Loop</h2>
            <p className="text-on-surface-variant">How decisions flow through the system.</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <span className="text-5xl font-bold text-primary opacity-20 font-headline">01</span>
                <h4 className="text-xl font-bold font-headline">Capture</h4>
              </div>
              <div className="bg-slate-900 p-6 rounded-2xl font-mono text-xs text-slate-300 border border-slate-800 shadow-xl">
                <div className="flex gap-1.5 mb-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                </div>
                <div>
                  <span className="text-blue-400">await</span> hipp0.<span className="text-indigo-300">recordDecision</span>{"({"}
                  <br />{"  "}project_id: project.id,
                  <br />{"  "}title: <span className="text-green-400">&apos;Use JWT for API auth&apos;</span>,
                  <br />{"  "}reasoning: <span className="text-green-400">&apos;Stateless, scalable&apos;</span>,
                  <br />{"  "}made_by: <span className="text-green-400">&apos;architect&apos;</span>,
                  <br />{"  "}affects: [<span className="text-green-400">&apos;builder&apos;</span>, <span className="text-green-400">&apos;reviewer&apos;</span>],
                  <br />{"  "}tags: [<span className="text-green-400">&apos;security&apos;</span>, <span className="text-green-400">&apos;api&apos;</span>],
                  <br />{"})"}
                </div>
              </div>
              <p className="text-sm text-on-surface-variant">Capture every decision across the agent team — who made it, why, and who it affects.</p>
            </div>
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <span className="text-5xl font-bold text-primary opacity-20 font-headline">02</span>
                <h4 className="text-xl font-bold font-headline">Score</h4>
              </div>
              <div className="glass-panel p-6 rounded-2xl space-y-3">
                <div className="text-xs font-mono text-on-surface-variant mb-2">&quot;Use JWT for auth&quot; &mdash; score: <span className="text-primary font-bold">0.95</span></div>
                {[
                  { label: "directAffect", value: "1.00", weight: "0.30" },
                  { label: "personaMatch", value: "0.88", weight: "0.25" },
                  { label: "semanticSimilarity", value: "0.72", weight: "0.25" },
                  { label: "tagMatch", value: "0.67", weight: "0.20" },
                ].map((signal) => (
                  <div key={signal.label} className="flex justify-between items-center text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    <span className="font-mono">{signal.label}</span>
                    <div className="flex gap-3">
                      <span className="text-primary">{signal.value}</span>
                      <span className="text-slate-300">{signal.weight} wt</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-on-surface-variant">Five signals. One score. Agents get context ranked for their exact role — not a one-size-fits-all embedding dump.</p>
            </div>
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <span className="text-5xl font-bold text-primary opacity-20 font-headline">03</span>
                <h4 className="text-xl font-bold font-headline">Compile</h4>
              </div>
              <div className="glass-panel p-10 rounded-2xl flex flex-col items-center justify-center text-center">
                <svg className="w-12 h-12 text-primary mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
                <div className="text-xs font-mono bg-slate-100 px-3 py-1 rounded-full mb-2">Vector Embedding</div>
                <div className="text-[10px] text-slate-400 font-mono">dim: 1536 | metric: cosine</div>
              </div>
              <p className="text-sm text-on-surface-variant">Memory is distilled into vector embeddings and compiled into ranked context packages in sub-30ms at scale.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold font-headline">See It In Action</h2>
          <p className="text-on-surface-variant mt-2">The dashboard gives you 31 views into your decision memory.</p>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
          <img
            src="/images/dashboard-preview.png"
            alt="Hipp0 Dashboard — Context Compare showing role-differentiated results for two agents"
            className="w-full"
          />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold font-headline mb-12">What's Under the Hood</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="glass-panel p-8 rounded-4xl md:col-span-2">
            <svg className="w-6 h-6 text-primary mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
            <h4 className="text-xl font-bold font-headline mb-2">5-Signal Scoring</h4>
            <p className="text-on-surface-variant">Five scoring signals &mdash; Direct Affect, Tag Match, Persona Match, Semantic Similarity, and Status Penalty &mdash; ensure every agent gets context ranked for their specific role.</p>
          </div>
          <div className="bg-primary p-8 rounded-4xl text-white">
            <svg className="w-8 h-8 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            <h4 className="text-xl font-bold font-headline mb-2">Super Brain</h4>
            <p className="text-white/80">A unified memory pool allowing specialized agents to share expertise instantly without redundant computation.</p>
          </div>
          <div className="glass-panel p-8 rounded-4xl">
            <svg className="w-6 h-6 text-primary mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
            <h4 className="text-xl font-bold font-headline mb-2">Import Wizard</h4>
            <p className="text-on-surface-variant">Migrate and scan GitHub PRs with automated schema mapping and AI-powered extraction.</p>
          </div>
          <div className="glass-panel p-8 rounded-4xl">
            <svg className="w-6 h-6 text-primary mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            <h4 className="text-xl font-bold font-headline mb-2">Collab Rooms</h4>
            <p className="text-on-surface-variant">Collaborative debugging environment with real-time memory state visualization for agent teams.</p>
          </div>
          <div className="glass-panel p-8 rounded-4xl">
            <svg className="w-6 h-6 text-primary mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /></svg>
            <h4 className="text-xl font-bold font-headline mb-2">MCP Tools</h4>
            <p className="text-on-surface-variant">Native support for Model Context Protocol connectors and 12+ pre-built tool integrations.</p>
          </div>
        </div>
        <div className="mt-6 glass-panel p-8 rounded-4xl flex items-center gap-6 max-w-md">
          <div className="w-12 h-12 bg-slate-100 flex items-center justify-center rounded-xl">
            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" /></svg>
          </div>
          <div>
            <h4 className="text-lg font-bold font-headline">BYOK</h4>
            <p className="text-sm text-on-surface-variant">Bring Your Own Key for OpenAI, Anthropic, or Local LLMs.</p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 md:px-8 py-12 md:py-20 text-center">
        <h2 className="text-3xl font-bold font-headline mb-12 md:mb-16">System Architecture</h2>
        <div className="relative glass-panel p-8 md:p-12 rounded-6xl bg-slate-50/30">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center relative z-10">
            <div className="space-y-4">
              <div className="w-20 h-20 mx-auto glass-panel rounded-full flex items-center justify-center bg-white shadow-lg">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <p className="text-[10px] font-bold uppercase tracking-widest">Agents (MCP/SDK/API)</p>
            </div>
            <div className="hidden md:flex items-center justify-center">
              <div className="h-px w-full bg-primary/20 relative">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="px-6 py-6 glass-panel rounded-2xl bg-white shadow-xl border-primary/20">
                <div className="text-sm font-bold font-headline mb-1">Hipp0 Server</div>
                <div className="text-[9px] font-mono text-slate-400">Hono + Node.js (Port 3100)</div>
              </div>
              <div className="px-6 py-4 glass-panel rounded-2xl bg-white shadow-md">
                <div className="text-sm font-bold font-headline mb-1">Dashboard</div>
                <div className="text-[9px] font-mono text-slate-400">React + Vite (Port 3200)</div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="w-20 h-20 mx-auto glass-panel rounded-2xl flex flex-col items-center justify-center bg-white shadow-lg border-primary/10">
                <svg className="w-6 h-6 text-primary mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" /></svg>
                <span className="text-[9px] font-mono">pgvector</span>
              </div>
              <p className="text-[10px] font-bold uppercase tracking-widest">PostgreSQL 17</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-headline">How Hipp0 Compares</h2>
          <p className="text-on-surface-variant mt-2">Decision memory vs. general-purpose memory tools.</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-3 px-4 font-bold">Feature</th>
                <th className="py-3 px-4 font-bold text-primary">Hipp0</th>
                <th className="py-3 px-4 text-on-surface-variant">Mem0</th>
                <th className="py-3 px-4 text-on-surface-variant">Zep</th>
                <th className="py-3 px-4 text-on-surface-variant">LangMem</th>
              </tr>
            </thead>
            <tbody className="text-on-surface-variant">
              <tr className="border-b border-slate-100"><td className="py-3 px-4 font-medium text-on-background">Decision-specific memory</td><td className="py-3 px-4 text-primary font-bold text-center">&#10003;</td><td className="py-3 px-4 text-center">&#10007;</td><td className="py-3 px-4 text-center">&#10007;</td><td className="py-3 px-4 text-center">&#10007;</td></tr>
              <tr className="border-b border-slate-100"><td className="py-3 px-4 font-medium text-on-background">Role-differentiated context</td><td className="py-3 px-4 text-primary font-bold text-center">&#10003;</td><td className="py-3 px-4 text-center">&#10007;</td><td className="py-3 px-4 text-center">&#10007;</td><td className="py-3 px-4 text-center">&#10007;</td></tr>
              <tr className="border-b border-slate-100"><td className="py-3 px-4 font-medium text-on-background">5-signal scoring</td><td className="py-3 px-4 text-primary font-bold text-center">&#10003;</td><td className="py-3 px-4 text-center">&#10007;</td><td className="py-3 px-4 text-center">&#10007;</td><td className="py-3 px-4 text-center">&#10007;</td></tr>
              <tr className="border-b border-slate-100"><td className="py-3 px-4 font-medium text-on-background">Contradiction detection</td><td className="py-3 px-4 text-primary font-bold text-center">&#10003;</td><td className="py-3 px-4 text-center">&#10007;</td><td className="py-3 px-4 text-center">Partial</td><td className="py-3 px-4 text-center">&#10007;</td></tr>
              <tr className="border-b border-slate-100"><td className="py-3 px-4 font-medium text-on-background">MCP server</td><td className="py-3 px-4 text-primary font-bold text-center">21 tools</td><td className="py-3 px-4 text-center">&#10007;</td><td className="py-3 px-4 text-center">&#10007;</td><td className="py-3 px-4 text-center">&#10007;</td></tr>
              <tr className="border-b border-slate-100"><td className="py-3 px-4 font-medium text-on-background">Self-hosted</td><td className="py-3 px-4 text-primary font-bold text-center">&#10003;</td><td className="py-3 px-4 text-center">&#10003;</td><td className="py-3 px-4 text-center">&#10003;</td><td className="py-3 px-4 text-center">&#10007;</td></tr>
              <tr className="border-b border-slate-100"><td className="py-3 px-4 font-medium text-on-background">Open source</td><td className="py-3 px-4 text-primary font-bold text-center">Apache 2.0</td><td className="py-3 px-4 text-center">Partial</td><td className="py-3 px-4 text-center">&#10003;</td><td className="py-3 px-4 text-center">&#10007;</td></tr>
              <tr><td className="py-3 px-4 font-medium text-on-background">Token compression</td><td className="py-3 px-4 text-primary font-bold text-center">10-12x</td><td className="py-3 px-4 text-center">&#10007;</td><td className="py-3 px-4 text-center">&#10007;</td><td className="py-3 px-4 text-center">&#10007;</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">Proven Performance</h2>
          <p className="text-on-surface-variant">We ran the benchmarks. Here's what happened.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[
            { value: "78%", label: "Recall@5", detail: "+39% over naive RAG" },
            { value: "0.92", label: "Contradiction F1", detail: "Detection accuracy" },
            { value: "10-12x", label: "Token Compression", detail: "H0C (Hipp0 Context) format" },
            { value: "25ms", label: "P95 Latency", detail: "At 500 decisions" },
          ].map((metric) => (
            <div key={metric.label} className="glass-panel p-6 md:p-8 rounded-4xl text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary font-headline">{metric.value}</div>
              <div className="text-sm font-bold mt-2">{metric.label}</div>
              <div className="text-xs text-on-surface-variant mt-1">{metric.detail}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-8">
        <h2 className="text-2xl font-bold font-headline mb-12 text-center opacity-40">Natively Integrated</h2>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {["LangGraph", "CrewAI", "AutoGen", "OpenAI Agents", "LangChain"].map((name) => (
            <div key={name} className="glass-panel px-6 py-4 rounded-xl flex items-center gap-4 hover:border-primary/40 transition-all cursor-default">
              <span className="font-headline font-bold">{name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="glass-panel p-8 md:p-12 rounded-5xl relative overflow-hidden bg-slate-50/50">
          <div className="relative z-10 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-white text-[10px] font-bold font-label uppercase">
                Apache 2.0 Licensed
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-headline">The memory layer must be free.</h2>
              <p className="text-on-surface-variant">Hipp0 is built for the developer community. Our core decision layer is Apache 2.0 licensed, ensuring your team&apos;s memory is never locked in a proprietary silo.</p>
              <div className="flex gap-8">
                <div><span className="block text-2xl font-bold">778+</span><span className="text-xs text-slate-400">Decisions</span></div>
                <div><span className="block text-2xl font-bold">155+</span><span className="text-xs text-slate-400">Commits</span></div>
                <div><span className="block text-2xl font-bold">16</span><span className="text-xs text-slate-400">Agents</span></div>
              </div>
            </div>
            <div className="bg-slate-950 rounded-2xl p-6 text-slate-300 font-mono text-xs shadow-2xl border border-slate-800">
              <div className="flex items-center gap-2 mb-4 border-b border-slate-800 pb-3">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                <span>$ docker compose up -d</span>
              </div>
              <p className="text-green-400 mb-1">[+] Running 3/3</p>
              <p className="opacity-80"> &#10004; Container hipp0-db &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Healthy</p>
              <p className="opacity-80"> &#10004; Container hipp0-server &nbsp;&nbsp;&nbsp; Healthy</p>
              <p className="opacity-80"> &#10004; Container hipp0-dashboard &nbsp;Started</p>
              <p className="text-indigo-400 mt-2">Server listening on port 3100</p>
              <p className="opacity-80">Dashboard available at port 3200</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="glass-panel p-10 md:p-16 rounded-6xl text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight">Give your agents a hippocampus.</h2>
            <p className="text-lg md:text-xl text-on-surface-variant">Build once. Your agents remember forever.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="glass-panel p-8 rounded-3xl text-left hover:border-primary/40 transition-all group bg-white">
              <h4 className="text-xl font-bold font-headline mb-2">Self-Host</h4>
              <p className="text-sm text-on-surface-variant mb-6">Fully open-source. PostgreSQL and memory store managed by you.</p>
              <div className="font-bold text-lg mb-6">Free Forever</div>
              <a href="https://github.com/perlantir/Hipp0" target="_blank" rel="noopener noreferrer" className="block w-full py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors text-center">Deploy Now</a>
            </div>
            <div className="glass-panel p-8 rounded-3xl text-left border-primary/20 bg-primary/5 relative overflow-hidden">
              <div className="absolute top-4 right-4 px-2 py-1 bg-primary text-white text-[9px] font-bold rounded uppercase">Coming Soon</div>
              <h4 className="text-xl font-bold font-headline mb-2">Hipp0 Cloud</h4>
              <p className="text-sm text-on-surface-variant mb-6">Managed infrastructure. Zero-ops deployment with automatic scaling and backups.</p>
              <div className="font-bold text-lg mb-6">Coming Soon</div>
              <div className="space-y-3">
                <a href="mailto:hello@hipp0.ai?subject=Hipp0%20Cloud%20Waitlist" className="block w-full py-3 bg-primary text-white rounded-xl font-bold hover:shadow-lg transition-all text-center">Join Waitlist</a>
                <p className="text-xs text-on-surface-variant text-center">Email hello@hipp0.ai to join the Cloud waitlist</p>
              </div>
            </div>
          </div>
          <div className="inline-flex flex-col gap-4">
            <p className="text-[10px] font-bold font-label uppercase text-slate-400 tracking-widest">Local Setup</p>
            <div className="bg-slate-900 text-slate-300 px-6 md:px-8 py-4 rounded-2xl font-mono text-sm border border-slate-800 shadow-xl flex items-center gap-4">
              <span className="text-primary font-bold">$</span>
              <span>docker compose up -d</span>
              <button className="text-slate-500 hover:text-white transition-colors" aria-label="Copy command">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
