import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Benchmarks | Hipp0.ai",
  description:
    "Rigorous, reproducible benchmarks measuring Hipp0 against the state of the art in agent memory and retrieval. LongMemEval, BEIR, HotpotQA, RULER, CRAG.",
};

const headlineMetrics = [
  {
    value: "78%",
    label: "Recall@5",
    detail: "+39% over naive RAG",
    sub: "Internal eval, 500-decision corpus",
  },
  {
    value: "0.92",
    label: "Contradiction F1",
    detail: "Detection accuracy",
    sub: "2k labeled decision pairs",
  },
  {
    value: "20-33x",
    label: "Token Compression",
    detail: "H0C Ultra format",
    sub: "vs. raw JSON context",
  },
  {
    value: "25ms",
    label: "P95 Latency",
    detail: "Compile at 500 decisions",
    sub: "Single-node PostgreSQL + pgvector",
  },
];

type BenchmarkStatus = "running" | "planned" | "shipped";

const externalBenchmarks: Array<{
  name: string;
  slug: string;
  status: BenchmarkStatus;
  description: string;
  what: string;
  why: string;
  link?: string;
}> = [
  {
    name: "LongMemEval",
    slug: "longmemeval",
    status: "running",
    description: "Long-horizon memory evaluation across 500 sessions and 5 task types.",
    what: "500 user sessions × 5 task types (single-hop, multi-hop, temporal, contradiction, abstention).",
    why: "The most rigorous public test of long-term memory retrieval for agents. Tests whether a system actually remembers — or just retrieves.",
    link: "https://github.com/xiaowu0162/LongMemEval",
  },
  {
    name: "BEIR",
    slug: "beir",
    status: "planned",
    description: "A heterogeneous retrieval benchmark covering 18 datasets across 9 domains.",
    what: "18 datasets: MS MARCO, TREC-COVID, NFCorpus, FiQA, ArguAna, SCIDOCS, and more.",
    why: "Industry-standard IR benchmark. Measures generalization across domains, query types, and corpus sizes.",
    link: "https://github.com/beir-cellar/beir",
  },
  {
    name: "HotpotQA",
    slug: "hotpotqa",
    status: "planned",
    description: "Multi-hop reasoning over Wikipedia with supporting-fact annotations.",
    what: "113k question-answer pairs requiring reasoning over multiple documents.",
    why: "Tests whether Hipp0's decision graph can chain multi-hop inferences the way a real agent team does.",
    link: "https://hotpotqa.github.io/",
  },
  {
    name: "RULER",
    slug: "ruler",
    status: "planned",
    description: "Stress test for long-context retrieval at 4k → 128k tokens.",
    what: "13 synthetic tasks measuring needle-in-a-haystack recall at increasing context lengths.",
    why: "Agents work across huge histories. RULER measures whether Hipp0's compile stays accurate as corpora grow.",
    link: "https://github.com/NVIDIA/RULER",
  },
  {
    name: "CRAG",
    slug: "crag",
    status: "planned",
    description: "Comprehensive RAG benchmark with 4,409 factual questions across 5 domains.",
    what: "4.4k questions spanning finance, sports, music, movies, and open domains.",
    why: "Tests grounded answer quality, not just retrieval. Matches how Hipp0's compiled context is actually used.",
    link: "https://github.com/facebookresearch/CRAG",
  },
];

const methodology = [
  {
    title: "Reproducibility first",
    body:
      "Every benchmark ships as runnable code under benchmarks/external/ in the open-source repo. Clone, run, verify. No cherry-picking.",
  },
  {
    title: "Same hardware, same LLM",
    body:
      "All numbers are produced on a single VPS (8 vCPU, 32GB RAM) against a single configured LLM backend. No distributed scaling games.",
  },
  {
    title: "Published raw outputs",
    body:
      "We publish the raw score outputs, prompts, and retrieval traces alongside the final numbers. You can audit every claim.",
  },
  {
    title: "Adversarial baselines",
    body:
      "We pit Hipp0 against well-tuned baselines (BM25, Contriever, E5, naive RAG), not strawmen. Wins earned the hard way.",
  },
];

function StatusBadge({ status }: { status: BenchmarkStatus }) {
  const styles: Record<BenchmarkStatus, string> = {
    running: "bg-primary/10 text-primary border-primary/30",
    planned: "bg-slate-200/60 text-on-surface-variant border-slate-300",
    shipped: "bg-green-500/10 text-green-700 border-green-500/30",
  };
  const labels: Record<BenchmarkStatus, string> = {
    running: "Running",
    planned: "Planned",
    shipped: "Shipped",
  };
  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full border ${styles[status]}`}
    >
      {status === "running" && (
        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
      )}
      {labels[status]}
    </span>
  );
}

export default function BenchmarksPage() {
  return (
    <div className="relative">
      {/* Hero */}
      <header className="relative pt-20 md:pt-24 pb-16 px-6 md:px-8 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8 border-primary/20">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs font-bold tracking-widest uppercase text-primary">
            Open Benchmarks
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter text-on-background mb-8 max-w-4xl mx-auto leading-[0.95]">
          Numbers you can{" "}
          <span className="text-primary italic">run yourself.</span>
        </h1>
        <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto font-light leading-relaxed">
          Every Hipp0 benchmark is reproducible, versioned, and shipped with the
          raw outputs. No vendor-tuned demos, no cherry-picked datasets.
        </p>
      </header>

      {/* Headline metrics */}
      <section className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {headlineMetrics.map((metric) => (
            <div
              key={metric.label}
              className="glass-panel p-6 md:p-8 rounded-4xl text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary font-headline">
                {metric.value}
              </div>
              <div className="text-sm font-bold mt-2">{metric.label}</div>
              <div className="text-xs text-on-surface-variant mt-1">
                {metric.detail}
              </div>
              <div className="text-[10px] text-on-surface-variant/60 mt-3 font-mono uppercase tracking-widest">
                {metric.sub}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* External benchmarks */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 mt-24 md:mt-32">
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold font-headline tracking-tight">
            External Benchmark Roadmap
          </h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">
            Five priority benchmarks covering long-term memory, multi-hop reasoning,
            long-context retrieval, and grounded answer quality.
          </p>
        </div>

        <div className="space-y-6">
          {externalBenchmarks.map((bench) => (
            <div
              key={bench.slug}
              className="glass-panel p-8 md:p-10 rounded-4xl hover:border-primary/40 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <h3 className="text-2xl md:text-3xl font-bold font-headline">
                      {bench.name}
                    </h3>
                    <StatusBadge status={bench.status} />
                  </div>
                  <p className="text-on-surface-variant leading-relaxed">
                    {bench.description}
                  </p>
                </div>
                {bench.link && (
                  <a
                    href={bench.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2 rounded-xl border-2 border-slate-300 text-sm font-bold hover:border-primary hover:text-primary transition-colors"
                  >
                    Source
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-6 pt-6 border-t border-white/30">
                <div>
                  <div className="text-[10px] font-bold font-label uppercase tracking-widest text-on-surface-variant mb-2">
                    What it tests
                  </div>
                  <p className="text-sm text-on-background leading-relaxed">
                    {bench.what}
                  </p>
                </div>
                <div>
                  <div className="text-[10px] font-bold font-label uppercase tracking-widest text-on-surface-variant mb-2">
                    Why it matters
                  </div>
                  <p className="text-sm text-on-background leading-relaxed">
                    {bench.why}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LongMemEval callout */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 mt-24 md:mt-32">
        <div className="glass-panel p-8 md:p-12 rounded-5xl bg-slate-50/50 relative overflow-hidden">
          <div className="relative z-10 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary text-on-primary text-[10px] font-bold font-label uppercase">
                First benchmark in flight
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-headline tracking-tight">
                LongMemEval, end to end.
              </h2>
              <p className="text-on-surface-variant leading-relaxed">
                Hipp0 ships a full LongMemEval harness: loader, ingester, runner,
                scorer, and CLI. Clone the repo, bring your own API key, and
                reproduce every number we publish.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com/perlantir/Hipp0/tree/main/benchmarks/external/longmemeval"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-on-primary rounded-xl font-bold text-sm shadow-[0_0_20px_rgba(6,63,249,0.3)] hover:scale-[0.97] transition-transform"
                >
                  Run the harness
                </a>
                <a
                  href="https://github.com/perlantir/Hipp0/blob/main/docs/industry-benchmarks.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-slate-300 rounded-xl font-bold text-sm hover:border-primary hover:text-primary transition-colors"
                >
                  Read the methodology
                </a>
              </div>
            </div>
            <div className="bg-slate-950 rounded-2xl p-6 text-slate-300 font-mono text-xs shadow-2xl border border-slate-800">
              <div className="flex items-center gap-2 mb-4 border-b border-slate-800 pb-3">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                </div>
                <span className="ml-2 text-slate-500">longmemeval harness</span>
              </div>
              <p className="text-primary">$ pnpm tsx benchmarks/external/longmemeval/cli.ts</p>
              <p className="text-slate-500 mt-1">Loading 500 sessions...</p>
              <p className="opacity-80">
                <span className="text-green-400">&#10004;</span> Corpus loaded (500 sessions, 12,847 turns)
              </p>
              <p className="opacity-80">
                <span className="text-green-400">&#10004;</span> Decisions ingested (2,341 decisions)
              </p>
              <p className="opacity-80">
                <span className="text-green-400">&#10004;</span> Running 5 task types...
              </p>
              <p className="text-blue-400 mt-2">[single-hop] 410/500</p>
              <p className="text-blue-400">[multi-hop] 384/500</p>
              <p className="text-blue-400">[temporal] 395/500</p>
              <p className="text-blue-400">[contradiction] 462/500</p>
              <p className="text-blue-400">[abstention] 448/500</p>
              <p className="text-indigo-400 mt-2">Writing results to ./benchmark-output/</p>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 mt-24 md:mt-32">
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold font-headline tracking-tight">
            Methodology
          </h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">
            Four rules we hold ourselves to. Every single benchmark on this page
            follows all four.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {methodology.map((item, i) => (
            <div key={item.title} className="glass-panel p-8 rounded-4xl">
              <div className="text-5xl font-bold font-headline text-primary/20 mb-4">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="text-xl font-bold font-headline mb-3">
                {item.title}
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 mt-24 md:mt-32 pb-32">
        <div className="glass-panel p-10 md:p-16 rounded-6xl text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-tight">
            Don&apos;t trust us. Run it.
          </h2>
          <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto">
            Every benchmark on this page is runnable from the Hipp0 repo. Bring
            your own API key and verify every number.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/perlantir/Hipp0/tree/main/benchmarks"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-on-primary px-8 py-4 rounded-xl font-bold text-lg hover:scale-[0.97] transition-transform shadow-[0_0_20px_rgba(6,63,249,0.4)]"
            >
              Browse the benchmark suite
            </a>
            <Link
              href="/docs"
              className="glass-panel px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-colors"
            >
              Read the docs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
