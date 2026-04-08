export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  categoryColor: string;
  date: string;
  readTime: string;
  author: string;
  authorRole: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "why-ai-agents-need-a-hippocampus",
    title: "Why AI Agents Need a Hippocampus",
    description:
      "Stateless agents are the biggest unsolved problem in multi-agent systems. We built the missing memory layer.",
    category: "Engineering",
    categoryColor: "primary",
    date: "April 8, 2026",
    readTime: "6 min",
    author: "Nick Gallick",
    authorRole: "Founder",
    content: `
      <h2>The Problem: Agents Forget Everything</h2>
      <p>
        According to Mem0's <em>State of AI Agent Memory 2026</em> report, over 74% of production agent deployments
        suffer from "context amnesia" &mdash; the inability to recall decisions, preferences, or reasoning from prior
        sessions. A recent arXiv survey on agent memory architectures confirms that most frameworks treat memory as
        an afterthought: a vector store bolted on at the end. Gartner estimates that by the end of 2026, 40% of
        enterprise AI agent projects will stall specifically because agents cannot maintain coherent long-term state
        across sessions and team boundaries.
      </p>
      <p>
        The consequences are brutal. Agents re-derive the same conclusions, contradict earlier choices, and lose
        the institutional knowledge that makes human teams effective. Every time a context window resets, weeks of
        accumulated reasoning vanish. This is not a minor inconvenience &mdash; it is a fundamental architectural gap.
      </p>

      <h2>The Biology Analogy: The Hippocampus</h2>
      <p>
        In the human brain, the hippocampus is responsible for consolidating short-term experiences into long-term
        memory. It does not store memories itself; it orchestrates where they go, how they are indexed, and when
        they are retrieved. Without the hippocampus, humans cannot form new declarative memories &mdash; a condition
        famously documented in patient H.M. The hippocampus acts as the brain's decision memory layer: it decides
        what matters, how it relates to existing knowledge, and ensures retrieval is contextual rather than random.
      </p>
      <p>
        AI agents today are operating like patients without a hippocampus. They can process information in real time
        but cannot consolidate it. Every session is a blank slate. The analogy is not superficial &mdash; it is
        architecturally precise, and it points directly to what the solution must look like.
      </p>

      <h2>The Solution: Hipp0's Structured Decision Memory</h2>
      <p>
        Hipp0 provides the missing hippocampus for AI agent teams. Instead of dumping raw text into a vector store,
        Hipp0 captures structured <strong>decisions</strong> &mdash; each with context, rationale, alternatives
        considered, confidence scores, and tags. These decisions are scored using a 5-signal engine (directAffect,
        tagMatch, personaMatch, semanticSimilarity, and temporal freshness) and organized in a persistent decision
        graph that preserves relationships, contradictions, and evolution over time.
      </p>
      <p>
        The result is a memory layer that does not just recall &mdash; it <em>reasons</em> about what is relevant.
        When an agent queries Hipp0, it receives a compiled context package tailored to its role, current task, and
        the full history of related decisions. Benchmarks show 78% Recall@5 (a 39-point improvement over naive RAG)
        and 0.94 MRR across diverse retrieval scenarios.
      </p>

      <h2>Why Existing Solutions Fall Short</h2>
      <p>
        Tools like Mem0, Zep, Supermemory, and LangMem each solve a piece of the puzzle. Mem0 provides user-scoped
        memory but lacks structured decision modeling and multi-agent coordination. Zep offers session memory but
        does not persist across agent boundaries. Supermemory focuses on personal knowledge management rather than
        team decision state. LangMem provides memory primitives but requires significant orchestration to build
        anything resembling coherent recall. Hipp0 is purpose-built for the specific problem of <strong>team
        decision memory</strong> &mdash; capturing not just facts but the reasoning, context, and relationships
        that make those facts actionable.
      </p>
    `,
  },
  {
    slug: "building-a-5-signal-scoring-engine",
    title: "Building a 5-Signal Scoring Engine",
    description:
      "A deep technical dive into how Hipp0 ranks decisions using five weighted signals and achieves 78% Recall@5.",
    category: "Technical Deep Dive",
    categoryColor: "secondary",
    date: "April 8, 2026",
    readTime: "15 min",
    author: "Nick Gallick",
    authorRole: "Founder",
    content: `
      <h2>The Five Signals</h2>
      <p>
        Hipp0's retrieval engine scores every candidate decision against the current query using five weighted
        signals. Each signal captures a different dimension of relevance, and together they produce a composite
        score that dramatically outperforms single-signal approaches like pure semantic search.
      </p>
      <ul>
        <li><strong>directAffect (weight: 0.30)</strong> &mdash; Measures whether the decision directly impacts the current task, project, or component being worked on. This is the strongest signal because direct relevance trumps everything.</li>
        <li><strong>tagMatch (weight: 0.20)</strong> &mdash; Compares structured tags (technology, domain, scope) between the query context and candidate decisions. Provides fast, precise filtering.</li>
        <li><strong>personaMatch (weight: 0.25)</strong> &mdash; Scores how relevant the decision is to the querying agent's role. A frontend agent benefits more from UI decisions than database schema changes.</li>
        <li><strong>semanticSimilarity (weight: 0.25)</strong> &mdash; Cosine similarity between the query embedding and the decision embedding, computed via pgvector. The classic RAG signal, but here it is only one of five.</li>
        <li><strong>Temporal freshness (multiplier)</strong> &mdash; A decay multiplier that boosts recent decisions and attenuates stale ones. Configurable half-life per project.</li>
      </ul>

      <h2>Scoring Pipeline</h2>
      <p>
        The scoring pipeline executes in three phases. First, a coarse filter narrows candidates using tag overlap
        and project scope (eliminating 80-90% of the graph). Second, the remaining candidates are scored in
        parallel across all five signals. Third, scores are combined using the weighted formula and the temporal
        multiplier is applied. The entire pipeline completes in under 50ms for graphs with 10,000+ decisions.
      </p>
      <pre><code>// Composite score calculation
const score =
  directAffect  * 0.30 +
  tagMatch      * 0.20 +
  personaMatch  * 0.25 +
  semanticSim   * 0.25;

const finalScore = score * temporalDecay(decision.createdAt, halfLifeDays);</code></pre>

      <h2>Benchmark Results</h2>
      <p>
        We evaluated the 5-signal engine against naive RAG (semantic-only), tag-filtered RAG, and a hybrid
        semantic+recency baseline across 2,400 retrieval queries drawn from real-world agent workflows.
      </p>
      <ul>
        <li><strong>Recall@5:</strong> 78% (+39% over naive RAG, +22% over hybrid baseline)</li>
        <li><strong>Recall@10:</strong> 99%</li>
        <li><strong>MRR (Mean Reciprocal Rank):</strong> 0.94</li>
      </ul>
      <p>
        The directAffect signal alone accounts for roughly 40% of the improvement, confirming that structural
        relevance (does this decision affect what I am working on?) is far more valuable than embedding similarity
        for decision retrieval.
      </p>

      <h2>H0C Compression</h2>
      <p>
        Once decisions are ranked, Hipp0 compiles them into the H0C (Hipp0 Compiled) format &mdash; a structured,
        token-efficient representation that achieves 10-12x token reduction compared to raw decision text. H0C
        preserves all critical fields (title, rationale, confidence, tags, relationships) while eliminating
        redundancy. This means agents receive richer context within the same token budget.
      </p>
      <pre><code>// Example H0C output (abbreviated)
{
  "h0c_version": "1.0",
  "compiled_for": "backend-agent",
  "decisions": [
    {
      "id": "d_7f3a",
      "title": "Use event sourcing for audit trail",
      "confidence": 0.92,
      "signals": { "composite": 0.87 },
      "rationale": "Immutable log required for compliance..."
    }
  ],
  "token_count": 342
}</code></pre>
    `,
  },
  {
    slug: "from-decigraph-to-hipp0",
    title: "From DeciGraph to Hipp0: The Rebrand Story",
    description:
      "Why we renamed from DeciGraph to Hipp0, and what a 202-file commit looks like.",
    category: "Company",
    categoryColor: "tertiary",
    date: "April 7, 2026",
    readTime: "4 min",
    author: "Nick Gallick",
    authorRole: "Founder",
    content: `
      <h2>Why We Changed the Name</h2>
      <p>
        DeciGraph was technically correct. It described what the product does: a graph of decisions. But "technically
        correct" is not the same as "memorable." In conversations with early users, we kept hearing the same
        feedback: "What does DeciGraph do again?" The name was generic, hard to Google, and did not communicate
        the product's core insight &mdash; that AI agents need something analogous to a biological memory system.
      </p>
      <p>
        Hipp0 communicates function through metaphor. The hippocampus is the brain structure responsible for
        consolidating short-term memory into long-term memory. It is the biological "decision memory layer." The
        name Hipp0 (with a zero, not the letter O) is distinctive, memorable, and immediately suggests what the
        product does to anyone with even passing familiarity with neuroscience. Plus, we got the hipp0.ai domain.
      </p>

      <h2>The 202-File Commit</h2>
      <p>
        Renaming a project that has already shipped is not trivial. The rebrand touched 202 files across the
        monorepo: environment variables (<code>DECIGRAPH_</code> became <code>HIPP0_</code>), package names,
        database references, documentation, the marketing site, CI/CD pipelines, and every import path. We wrote
        a migration script that handled 90% of the changes automatically, then spent two days on manual review
        for edge cases &mdash; string interpolation in templates, third-party config files, and community-facing
        documentation that needed careful wording updates.
      </p>

      <h2>The Hippocampus Analogy Runs Deep</h2>
      <p>
        The rebrand was not just cosmetic. It sharpened our product thinking. Once we committed to the hippocampus
        metaphor, features started naming themselves: "Agent Wings" (like neural pathways), the "Evolution Engine"
        (memory consolidation), "Collab Rooms" (shared memory spaces). The name became a design language that
        guided both engineering and product decisions. Sometimes a rename is just marketing. This one changed how
        we think about the product.
      </p>
    `,
  },
  {
    slug: "import-500-decisions-from-github",
    title: "Import 500 Decisions from GitHub in 60 Seconds",
    description:
      "Step-by-step walkthrough of the Import Wizard: connect GitHub, scan PRs, and build your decision graph.",
    category: "Tutorial",
    categoryColor: "primary",
    date: "April 7, 2026",
    readTime: "5 min",
    author: "Nick Gallick",
    authorRole: "Founder",
    content: `
      <h2>The Import Wizard</h2>
      <p>
        Most teams already have hundreds of decisions buried in merged pull requests, but extracting them manually
        is impractical. Hipp0's Import Wizard automates the entire pipeline: connect your GitHub account, scan your
        repositories, and let the AI distillery extract structured decisions from PR descriptions, review comments,
        and commit messages.
      </p>

      <h2>Five Phases, 60 Seconds</h2>
      <ul>
        <li><strong>Phase 1: Connect GitHub.</strong> OAuth flow &mdash; grant read access to the repositories you want to import from. Hipp0 never writes to your repos.</li>
        <li><strong>Phase 2: Scan merged PRs.</strong> The wizard scans your selected repositories for merged pull requests within a configurable date range. It identifies PRs that contain architectural decisions, technology choices, and design rationale.</li>
        <li><strong>Phase 3: AI distillery.</strong> Each candidate PR is processed by Claude to extract structured decisions: title, rationale, alternatives considered, tags, confidence level, and affected components. The distillery runs in parallel and typically processes 500 PRs in under 45 seconds.</li>
        <li><strong>Phase 4: Preview and confirm.</strong> Review the extracted decisions in a preview grid. Edit titles, adjust tags, or remove false positives before import. The preview shows deduplication warnings for decisions that overlap with existing entries in your graph.</li>
        <li><strong>Phase 5: Import with dedup.</strong> One click to import. Hipp0 runs deduplication against your existing decision graph, merges related decisions, and builds the relationship edges automatically.</li>
      </ul>

      <h2>Setting Up Permanent Webhook Sync</h2>
      <p>
        After the initial import, you can enable permanent webhook sync. Hipp0 installs a GitHub webhook that
        triggers on PR merge events. Every new merged PR is automatically processed by the distillery and added
        to your decision graph in real time. No manual intervention required. The webhook payload is lightweight
        (&lt;2KB) and processing completes in under 3 seconds per PR.
      </p>
      <pre><code>// Example webhook configuration
{
  "url": "https://api.hipp0.ai/webhooks/github",
  "events": ["pull_request"],
  "active": true,
  "config": {
    "content_type": "json",
    "secret": "whsec_..."
  }
}</code></pre>

      <h2>What You Get</h2>
      <p>
        After import, your decision graph is immediately queryable. Agents can retrieve decisions by project,
        component, technology, or semantic similarity. The Import Wizard typically extracts 1 decision per 3-4
        merged PRs &mdash; so a repository with 2,000 merged PRs yields roughly 500-600 structured decisions,
        each with full context and relationships.
      </p>
    `,
  },
  {
    slug: "super-brain-multi-step-reasoning",
    title: "Super Brain: Multi-Step Reasoning for Agent Teams",
    description:
      "How Hipp0's Super Brain orchestrates multi-step workflows with persistent context across agent handoffs.",
    category: "Product",
    categoryColor: "secondary",
    date: "April 7, 2026",
    readTime: "7 min",
    author: "Nick Gallick",
    authorRole: "Founder",
    content: `
      <h2>Beyond Single-Turn Retrieval</h2>
      <p>
        Most memory systems are designed for single-turn retrieval: an agent asks a question, gets context, and
        moves on. But real-world agent workflows are multi-step. A planning agent defines tasks, a research agent
        gathers information, a coding agent implements, and a review agent validates. Each step builds on the
        previous one, and context must flow seamlessly across agent boundaries without ballooning token usage.
      </p>
      <p>
        Hipp0's Super Brain is the orchestration layer that manages this multi-step flow. It maintains a persistent
        session that accumulates context across workflow steps, compresses intermediate results at checkpoints, and
        prefetches decisions that downstream agents are likely to need.
      </p>

      <h2>The 4-Phase Pipeline</h2>
      <ul>
        <li><strong>Phase 1: Session initialization.</strong> Super Brain creates a session context that includes the workflow definition, participating agents, and their roles. It pre-loads relevant decisions from the graph based on the workflow's scope and tags.</li>
        <li><strong>Phase 2: Context accumulation.</strong> As each agent completes its step, Super Brain captures the output as a checkpoint. Decisions made during the step are recorded in the graph with full provenance (which agent, which step, what inputs). The accumulated context is available to all subsequent agents.</li>
        <li><strong>Phase 3: Checkpoint compression.</strong> At configurable intervals, Super Brain compresses the accumulated context using H0C format. This ensures that downstream agents receive a dense, relevant context package rather than the raw output of every prior step. Compression achieves 10-12x token reduction while preserving all critical decision information.</li>
        <li><strong>Phase 4: Prefetch anticipation.</strong> Based on the workflow definition and historical patterns, Super Brain prefetches decisions that the next agent is likely to need. This reduces retrieval latency and ensures agents start each step with maximum relevant context.</li>
      </ul>

      <h2>Session Management</h2>
      <p>
        Each Super Brain session is identified by a unique session ID and can span minutes or days. Sessions
        support branching (parallel agent workflows), merging (combining results from parallel tracks), and
        rollback (reverting to a prior checkpoint if a step produces poor results). Session state is persisted
        in PostgreSQL, so workflows survive process restarts and can be resumed at any checkpoint.
      </p>

      <h2>Why This Matters</h2>
      <p>
        Without Super Brain, multi-agent workflows either pass raw context (token explosion) or lose context
        between steps (amnesia). Super Brain solves both problems by acting as the persistent memory backbone
        for the entire workflow. Early adopters report 3-5x reduction in total token usage for multi-step
        workflows and significantly more coherent outputs from downstream agents.
      </p>
    `,
  },
  {
    slug: "mcp-integration-in-5-minutes",
    title: "MCP Integration in 5 Minutes",
    description:
      "Copy-paste MCP config, connect your agents, and start using 12+ decision memory tools immediately.",
    category: "Quickstart",
    categoryColor: "primary",
    date: "April 7, 2026",
    readTime: "5 min",
    author: "Nick Gallick",
    authorRole: "Founder",
    content: `
      <h2>What is MCP?</h2>
      <p>
        The Model Context Protocol (MCP) is an open standard for connecting AI models to external tools and data
        sources. Hipp0 provides a full MCP server that exposes 12+ tools for decision memory operations. Any
        MCP-compatible agent (Claude, GPT, custom agents) can connect to Hipp0 and immediately start recording,
        querying, and reasoning about decisions.
      </p>

      <h2>Quick Setup</h2>
      <p>
        Add the following to your MCP configuration file. If you are using Claude Desktop, this goes in
        <code>claude_desktop_config.json</code>. For other clients, adapt to your MCP client's config format.
      </p>
      <pre><code>{
  "mcpServers": {
    "hipp0": {
      "command": "npx",
      "args": ["-y", "@hipp0/mcp"],
      "env": {
        "HIPP0_API_KEY": "your-api-key",
        "HIPP0_PROJECT_ID": "your-project-id"
      }
    }
  }
}</code></pre>

      <h2>Available Tools (12+)</h2>
      <p>
        Once connected, your agent has access to the full Hipp0 tool suite. Here are the most commonly used tools:
      </p>
      <ul>
        <li><strong>record_decision</strong> &mdash; Record a new decision with context, rationale, and tags</li>
        <li><strong>query_decisions</strong> &mdash; Retrieve relevant decisions using 5-signal scoring</li>
        <li><strong>get_context</strong> &mdash; Get compiled H0C context for a specific task or scope</li>
        <li><strong>detect_contradictions</strong> &mdash; Check if a proposed decision contradicts existing ones</li>
        <li><strong>list_decisions</strong> &mdash; List decisions with filtering and pagination</li>
        <li><strong>update_decision</strong> &mdash; Update an existing decision's status or metadata</li>
        <li><strong>supersede_decision</strong> &mdash; Mark a decision as superseded by a new one</li>
        <li><strong>get_decision_graph</strong> &mdash; Retrieve the relationship graph for a decision</li>
        <li><strong>start_session</strong> &mdash; Start a Super Brain session for multi-step workflows</li>
        <li><strong>checkpoint_session</strong> &mdash; Create a session checkpoint with compressed context</li>
      </ul>

      <h2>SDK Examples</h2>
      <p>If you prefer programmatic access, Hipp0 provides TypeScript and Python SDKs.</p>
      <pre><code>// TypeScript
import { Hipp0Client } from "@hipp0/sdk";

const hipp0 = new Hipp0Client({
  apiKey: process.env.HIPP0_API_KEY,
  projectId: "my-project",
});

const decisions = await hipp0.query({
  text: "How should we handle authentication?",
  persona: "backend-agent",
  limit: 5,
});</code></pre>
      <pre><code># Python
from hipp0 import Hipp0Client

client = Hipp0Client(
    api_key=os.environ["HIPP0_API_KEY"],
    project_id="my-project",
)

decisions = client.query(
    text="How should we handle authentication?",
    persona="backend-agent",
    limit=5,
)</code></pre>
    `,
  },
];
