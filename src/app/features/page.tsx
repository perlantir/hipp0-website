import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features | Hipp0.ai",
  description: "Every capability your agents need to remember. 5-Signal Scoring, Super Brain, Import Wizard, Collab Rooms, and more.",
};

export default function FeaturesPage() {
  return (
    <div className="relative">
      <header className="relative pt-20 md:pt-24 pb-16 px-6 md:px-8 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8 border-primary/20">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs font-bold tracking-widest uppercase text-primary">CAPABILITIES SHOWCASE</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter text-on-background mb-8 max-w-4xl mx-auto leading-[0.95]">
          One product. Every capability your agents need to{" "}
          <span className="text-primary italic">remember.</span>
        </h1>
        <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto font-light leading-relaxed">
          The decision memory layer that bridges the gap between stateless agents and persistent, intelligent context retrieval.
        </p>
      </header>

      <div className="sticky top-20 z-40 w-full glass-panel-heavy border-y border-white/20">
        <div className="max-w-7xl mx-auto px-6 md:px-8 overflow-x-auto">
          <div className="flex items-center gap-8 md:gap-12 h-14 whitespace-nowrap">
            {[
              { id: "scoring", label: "5-Signal Scoring" },
              { id: "brain", label: "Super Brain" },
              { id: "wizard", label: "Import Wizard" },
              { id: "collab", label: "Collab Rooms" },
              { id: "playground", label: "Playground" },
              { id: "distillery", label: "Distillery" },
              { id: "connectors", label: "Connectors" },
              { id: "dev", label: "Dev Tools" },
            ].map((item, i) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`text-sm font-medium transition-colors ${
                  i === 0
                    ? "font-bold text-primary border-b-2 border-primary h-full flex items-center"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <main className="space-y-24 md:space-y-32 py-20 md:py-32 px-6 md:px-8 max-w-7xl mx-auto">

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center" id="scoring">
          <div className="space-y-8">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">5-Signal Scoring Engine</h2>
            <p className="text-lg text-on-surface-variant leading-relaxed">
              Prioritize context with algorithmic certainty. Our engine synthesizes five distinct signals to ensure your agents recall only the most impactful memories, with automatic tie-breaking logic.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { label: "directAffect", value: "30%", color: "text-primary" },
                { label: "personaMatch", value: "25%", color: "text-secondary" },
                { label: "semanticSim", value: "25%", color: "text-on-surface-variant" },
                { label: "tagMatch", value: "20%", color: "text-primary" },
              ].map((signal) => (
                <div key={signal.label} className="p-3 rounded-xl glass-panel">
                  <span className={`text-[10px] font-bold ${signal.color} uppercase block mb-1`}>{signal.label}</span>
                  <span className="text-sm font-bold">{signal.value}</span>
                </div>
              ))}
              <div className="p-3 rounded-xl glass-panel flex items-center justify-center">
                <span className="text-[10px] font-bold uppercase text-on-surface-variant">Tie-breaking</span>
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-4xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative glass-panel rounded-3xl overflow-hidden shadow-2xl h-[300px] md:h-[400px] flex items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/5">
              <div className="text-center p-8">
                <div className="text-6xl font-bold text-primary/20 font-headline mb-4">99%</div>
                <div className="text-sm font-bold">Recall@10</div>
                <div className="text-xs text-on-surface-variant">+49% over naive RAG</div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center" id="brain">
          <div className="order-2 lg:order-1 relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-tertiary/20 to-primary/20 rounded-4xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative glass-panel rounded-3xl overflow-hidden shadow-2xl h-[300px] md:h-[400px] flex items-center justify-center bg-gradient-to-br from-secondary/5 to-primary/5">
              <div className="text-center p-8">
                <svg className="w-16 h-16 text-secondary/30 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                <div className="text-sm font-bold">4-Phase Pipeline</div>
                <div className="text-xs text-on-surface-variant">Session → Role → Orchestrate → Retrieve</div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-8">
            <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center">
              <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Multi-step reasoning with session memory</h2>
            <p className="text-lg text-on-surface-variant leading-relaxed">
              The Super Brain is a 4-phase pipeline that transforms raw interactions into actionable intelligence through iterative cognitive cycles.
            </p>
            <div className="space-y-4">
              {[
                { num: "01", title: "Session Memory", desc: "Instant short-term context injection" },
                { num: "02", title: "Role Differentiation", desc: "Task-specific persona alignment" },
                { num: "03", title: "Orchestrator Mode", desc: "High-level logical branching" },
                { num: "04", title: "Playground Retrieval", desc: "Context verification loop" },
              ].map((step) => (
                <div key={step.num} className="flex items-center gap-4 cursor-default">
                  <div className="w-8 h-8 rounded-lg bg-secondary/20 flex items-center justify-center text-secondary font-bold text-xs flex-shrink-0">
                    {step.num}
                  </div>
                  <div>
                    <span className="text-sm font-bold block">{step.title}</span>
                    <span className="text-xs text-on-surface-variant">{step.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 glass-panel p-8 md:p-10 rounded-5xl flex flex-col justify-between hover:border-primary/50 transition-colors group" id="wizard">
            <div className="max-w-md">
              <div className="w-12 h-12 rounded-xl bg-surface mb-6 flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Import Wizard</h3>
              <p className="text-on-surface-variant">Perform deep Octokit scans and utilize the AI distillery to normalize fragmented data. Deploy a 3-step webhook wizard to connect your real-time event streams instantly.</p>
            </div>
            <div className="mt-8 md:mt-12 rounded-2xl overflow-hidden border border-white/20 shadow-lg bg-gradient-to-br from-primary/5 to-secondary/5 h-48 flex items-center justify-center">
              <div className="text-center">
                <div className="text-sm font-bold text-on-surface-variant">Scan &rarr; Preview &rarr; Import</div>
                <div className="text-xs text-on-surface-variant/60 mt-2">500 decisions in 60 seconds</div>
              </div>
            </div>
          </div>
          <div className="bg-primary p-8 md:p-10 rounded-5xl flex flex-col text-on-primary shadow-[0_0_40px_rgba(6,63,249,0.3)]" id="collab">
            <div className="w-12 h-12 rounded-xl bg-white/20 mb-6 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Collab Rooms</h3>
            <p className="text-white/80 mb-8">Low-latency WebSocket infrastructure with presence, live typing indicators, @mention functionality, and robust auto-reconnect logic for global teams.</p>
            <div className="flex -space-x-3 mt-auto">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-primary bg-blue-200 flex items-center justify-center text-xs font-bold text-primary">
                  {i === 3 ? "+12" : `A${i}`}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center" id="playground">
          <div className="space-y-8">
            <div className="w-16 h-16 rounded-2xl bg-tertiary/20 flex items-center justify-center">
              <svg className="w-8 h-8 text-on-background" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">The Playground</h2>
            <p className="text-lg text-on-surface-variant leading-relaxed">
              Toggle between &ldquo;Classic&rdquo; and &ldquo;Super Brain&rdquo; modes to compare retrieval strategies in real-time. Fine-tune your memory parameters with instant feedback.
            </p>
            <div className="p-6 glass-panel rounded-2xl border-l-4 border-primary">
              <div className="flex gap-4 mb-4 border-b border-white/20 pb-2">
                <span className="text-[10px] font-bold text-on-surface-variant">CLASSIC</span>
                <span className="text-[10px] font-bold text-primary border-b border-primary">SUPER BRAIN</span>
              </div>
              <code className="text-sm font-mono text-primary">prompt: &quot;design the authentication flow for the new API&quot;</code>
              <div className="mt-4 flex gap-2">
                <span className="px-2 py-1 rounded bg-green-100 text-green-700 text-[10px] font-bold">OPTIMIZED RETRIEVAL</span>
                <span className="px-2 py-1 rounded bg-surface text-on-surface-variant text-[10px] font-bold">7ms</span>
              </div>
            </div>
          </div>
          <div className="glass-panel-heavy p-8 md:p-10 rounded-5xl border-primary/10 shadow-xl overflow-hidden relative" id="distillery">
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
              Data Distillery
            </h3>
            <p className="text-on-surface-variant mb-6">Convert raw conversations, PRs, and Slack threads into high-density insights. Features built-in contradiction detection and smart deduplication.</p>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-[10px] font-bold text-on-surface-variant">RAW THREADS</div>
              <div className="h-1 w-full bg-surface rounded-full overflow-hidden">
                <div className="h-full bg-secondary w-full rounded-full" />
              </div>
              <div className="flex items-center gap-2 text-[10px] font-bold text-secondary">DEDUPLICATED INSIGHT</div>
              <div className="h-2 w-full bg-surface rounded-full overflow-hidden">
                <div className="h-full bg-secondary w-1/4 rounded-full" />
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-12 md:space-y-16" id="connectors">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Seamless Connectors</h2>
            <p className="text-on-surface-variant">Hipp0 speaks every developer language. Connect to your engineering stack in minutes.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: "GitHub", label: "GitHub" },
              { icon: "Linear", label: "Linear" },
              { icon: "Slack", label: "Slack" },
              { icon: "Discord", label: "Discord" },
              { icon: "Telegram", label: "Telegram" },
              { icon: "OpenClaw", label: "OpenClaw" },
              { icon: "Webhooks", label: "Webhooks" },
              { icon: "Custom", label: "Custom" },
            ].map((connector) => (
              <div key={connector.label} className="p-6 md:p-8 glass-panel rounded-2xl flex flex-col items-center gap-4 hover:bg-white transition-colors cursor-pointer group">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                </div>
                <span className="text-xs font-bold uppercase tracking-widest">{connector.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="relative rounded-6xl overflow-hidden bg-[#1A1D27] text-white p-8 md:p-12 lg:p-24" id="dev">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/20 to-transparent opacity-50" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <div className="inline-block px-3 py-1 rounded bg-primary/20 text-primary-fixed text-[10px] font-bold uppercase tracking-widest mb-6">Developer First</div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">Built for the multi-agent stack.</h2>
              <p className="text-lg text-slate-400 mb-10">Deploy an MCP server with 18+ pre-built tools. Hipp0 supports TS SDK, Python SDK, a powerful CLI, and BYOK (Bring Your Own Key) architecture.</p>
              <div className="flex flex-wrap gap-4">
                <a href="https://github.com/perlantir/Hipp0/blob/main/docs/api-reference.md" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-white text-on-background rounded-xl font-bold hover:bg-slate-200 transition-colors">Read API Docs</a>
                <a href="https://github.com/perlantir/Hipp0/blob/main/docs/mcp-setup.md" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-white/10 text-white rounded-xl font-bold border border-white/20 hover:bg-white/5 transition-colors">Install SDK</a>
              </div>
            </div>
            <div className="glass-panel !bg-white/5 !border-white/10 rounded-2xl p-6 font-mono text-sm">
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <div className="text-blue-400">{"// mcp_config.json"}</div>
              <div className="text-slate-400 mt-2">{"{"}</div>
              <div className="text-slate-400 ml-4">&quot;mcpServers&quot;: {"{"}</div>
              <div className="text-slate-400 ml-8">&quot;hipp0&quot;: {"{"}</div>
              <div className="text-slate-400 ml-12">&quot;command&quot;: &quot;npx&quot;,</div>
              <div className="text-slate-400 ml-12">&quot;args&quot;: [&quot;@hipp0/mcp&quot;]</div>
              <div className="text-slate-400 ml-8">{"}"}</div>
              <div className="text-slate-400 ml-4">{"}"}</div>
              <div className="text-slate-400">{"}"}</div>
              <div className="text-green-400 mt-4">&#10003; MCP Server Initialized. 18 tools active.</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
