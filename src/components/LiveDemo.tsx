"use client";

import { useState } from "react";

const SAMPLE_DECISIONS = [
  { title: "Use PostgreSQL for persistence", by: "architect", tags: ["database", "infrastructure"], reasoning: "Relational model fits our domain. pgvector for embeddings." },
  { title: "JWT for API authentication", by: "architect", tags: ["auth", "security"], reasoning: "Stateless auth enables horizontal scaling." },
  { title: "React + Vite for dashboard", by: "frontend", tags: ["frontend", "tooling"], reasoning: "Fast HMR, great DX, team already knows React." },
  { title: "Redis for session caching", by: "backend", tags: ["cache", "performance"], reasoning: "Sub-ms reads for hot session data." },
  { title: "WebSocket for real-time updates", by: "architect", tags: ["realtime", "api"], reasoning: "Bi-directional needed for collaboration features." },
];

interface CompileResult {
  agent: string;
  task: string;
  decisions: Array<{ title: string; score: number; tags: string[] }>;
  h0c: string;
  tokens: { markdown: number; h0c: number; ratio: string };
}

function simulateCompile(agent: string, task: string): CompileResult {
  // Score decisions based on tag/role relevance to the agent and task
  const taskWords = task.toLowerCase().split(/\s+/);
  const scored = SAMPLE_DECISIONS.map((d) => {
    let score = 0.3; // base
    // Direct affect: does the agent match made_by?
    if (d.by === agent) score += 0.25;
    // Tag match
    const tagHits = d.tags.filter((t) => taskWords.some((w) => t.includes(w) || w.includes(t)));
    score += tagHits.length * 0.15;
    // Keyword match
    const titleWords = d.title.toLowerCase().split(/\s+/);
    const keywordHits = titleWords.filter((w) => taskWords.includes(w));
    score += keywordHits.length * 0.1;
    return { ...d, score: Math.min(score, 0.99) };
  })
    .sort((a, b) => b.score - a.score)
    .filter((d) => d.score > 0.35);

  // Build H0C output
  const h0cLines = ["#H0C v3", `#T ${scored.flatMap((d) => d.tags).filter((t, i, a) => a.indexOf(t) === i).map((t, i) => `${i}=${t}`).join(" ")}`, "---"];
  scored.forEach((d, i) => {
    const s = Math.round(d.score * 100);
    if (i < 3) {
      h0cLines.push(`[${s}|H|${d.by}]${d.title}|${d.reasoning.split(".")[0]}`);
    } else {
      h0cLines.push(`[${s}]${d.title}`);
    }
  });
  const h0c = h0cLines.join("\n");

  // Build markdown (what agent normally receives)
  const mdLines = [`# Context for ${agent}`, `## Task: ${task}`, ""];
  scored.forEach((d) => {
    mdLines.push(`### ${d.title} (score: ${d.score.toFixed(2)})`);
    mdLines.push(`**By:** ${d.by} | **Tags:** ${d.tags.join(", ")}`);
    mdLines.push(`**Reasoning:** ${d.reasoning}`);
    mdLines.push("");
  });
  const md = mdLines.join("\n");

  return {
    agent,
    task,
    decisions: scored.map((d) => ({ title: d.title, score: Math.round(d.score * 100) / 100, tags: d.tags })),
    h0c,
    tokens: {
      markdown: Math.ceil(md.length / 4),
      h0c: Math.ceil(h0c.length / 4),
      ratio: (md.length / Math.max(h0c.length, 1)).toFixed(1) + "x",
    },
  };
}

export default function LiveDemo() {
  const [agent, setAgent] = useState("backend");
  const [task, setTask] = useState("implement the data persistence layer");
  const [result, setResult] = useState<CompileResult | null>(null);

  function handleCompile() {
    if (!agent.trim() || !task.trim()) return;
    setResult(simulateCompile(agent.trim(), task.trim()));
  }

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 block">Agent Name</label>
          <select
            value={agent}
            onChange={(e) => setAgent(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/40"
          >
            <option value="architect">architect</option>
            <option value="backend">backend</option>
            <option value="frontend">frontend</option>
            <option value="security">security</option>
          </select>
        </div>
        <div>
          <label className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 block">Task Description</label>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="implement the auth service"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
          />
        </div>
      </div>
      <button
        onClick={handleCompile}
        className="bg-primary text-white px-8 py-3 rounded-xl font-bold text-sm hover:shadow-lg hover:scale-[0.98] transition-all"
      >
        Compile Context
      </button>

      {result && (
        <div className="space-y-4 animate-in fade-in">
          <div className="flex gap-4 text-center">
            <div className="flex-1 glass-panel p-4 rounded-2xl">
              <div className="text-2xl font-bold text-primary">{result.decisions.length}</div>
              <div className="text-xs text-slate-400">Decisions Matched</div>
            </div>
            <div className="flex-1 glass-panel p-4 rounded-2xl">
              <div className="text-2xl font-bold text-primary">{result.tokens.ratio}</div>
              <div className="text-xs text-slate-400">Compression</div>
            </div>
            <div className="flex-1 glass-panel p-4 rounded-2xl">
              <div className="text-2xl font-bold text-primary">{result.tokens.h0c}</div>
              <div className="text-xs text-slate-400">H0C Tokens</div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Matched Decisions (scored for {result.agent})</div>
              <div className="space-y-2">
                {result.decisions.map((d, i) => (
                  <div key={i} className="glass-panel p-3 rounded-xl flex justify-between items-center">
                    <div>
                      <div className="text-sm font-bold">{d.title}</div>
                      <div className="text-xs text-slate-400">{d.tags.join(", ")}</div>
                    </div>
                    <div className="text-primary font-bold font-mono text-sm">{d.score.toFixed(2)}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">H0C Output ({result.tokens.h0c} tokens vs {result.tokens.markdown} markdown)</div>
              <pre className="bg-slate-900 text-slate-300 p-4 rounded-xl text-xs font-mono overflow-x-auto whitespace-pre-wrap">{result.h0c}</pre>
            </div>
          </div>

          <p className="text-xs text-slate-400 text-center">
            Try switching agents - each gets different scores for the same decisions.
            The {result.agent} agent scores {result.agent === "backend" ? "database" : result.agent === "frontend" ? "frontend" : "architecture"}-related decisions higher.
          </p>
        </div>
      )}
    </div>
  );
}
