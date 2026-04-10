"use client";

import { useCallback, useState } from "react";
import {
  PlaygroundMain,
  PlaygroundResults,
  PlaygroundCompare,
  PlaygroundMobile,
  SCENARIOS,
  type DecisionResult,
} from "@/components/playground";

type View = "main" | "results" | "compare";

type ApiDecision = {
  id?: string | number;
  title?: string;
  description?: string;
  score?: number;
  confidence?: number;
  tags?: string[];
  direct_affect?: number;
  tag_match?: number;
};

type CompileResponse = {
  decisions?: ApiDecision[];
  token_count?: number;
  compression_ratio?: number;
};

function normalize(api: ApiDecision[] | undefined): DecisionResult[] {
  if (!api || !Array.isArray(api)) return [];
  return api.slice(0, 6).map((d, i) => ({
    id: String(d.id ?? `r-${i}`),
    rank: i + 1,
    title: d.title ?? `Decision ${i + 1}`,
    description: d.description ?? "",
    confidence: Math.round((d.confidence ?? d.score ?? 0.8) * 100),
    globalScore: Number((d.score ?? 0.8).toFixed(2)),
    directAffect: d.direct_affect ?? d.score ?? 0.75,
    tagMatch: d.tag_match ?? 0.8,
    tags: d.tags ?? [],
  }));
}

export default function PlaygroundPage() {
  const [view, setView] = useState<View>("main");
  const [selectedScenario, setSelectedScenario] = useState<string | null>(null);
  const [taskInput, setTaskInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<DecisionResult[]>([]);
  const [tokenCount, setTokenCount] = useState<number>(1284);
  const [compressionRatio, setCompressionRatio] = useState<number>(4.7);
  const [timeValue, setTimeValue] = useState(0);

  const compile = useCallback(
    async (task: string) => {
      if (!task.trim()) return;
      setIsLoading(true);
      try {
        const res = await fetch("/api/playground/compile", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            task,
            scenario: selectedScenario,
            agents: ["architect", "backend", "frontend", "security", "devops", "reviewer"],
          }),
        });
        if (res.ok) {
          const data: CompileResponse = await res.json();
          setResults(normalize(data.decisions));
          if (typeof data.token_count === "number") setTokenCount(data.token_count);
          if (typeof data.compression_ratio === "number")
            setCompressionRatio(data.compression_ratio);
        } else {
          setResults([]);
        }
      } catch {
        setResults([]);
      } finally {
        setIsLoading(false);
        setView("results");
      }
    },
    [selectedScenario],
  );

  const handleSelectScenario = useCallback(
    (id: string) => {
      setSelectedScenario(id);
      const s = SCENARIOS.find((x) => x.id === id);
      if (s) setTaskInput(s.label);
    },
    [],
  );

  const scenarioLabel =
    SCENARIOS.find((s) => s.id === selectedScenario)?.label || taskInput || "Custom task";

  return (
    <>
      {/* Mobile fallback */}
      <div className="md:hidden">
        <PlaygroundMobile />
      </div>

      {/* Desktop views */}
      <div className="hidden md:block">
        {view === "main" && (
          <PlaygroundMain
            onCompile={compile}
            isLoading={isLoading}
            selectedScenario={selectedScenario}
            onSelectScenario={handleSelectScenario}
            onOpenCompare={() => setView("compare")}
            taskInput={taskInput}
            setTaskInput={setTaskInput}
            timeValue={timeValue}
            setTimeValue={setTimeValue}
          />
        )}
        {view === "results" && (
          <PlaygroundResults
            results={results}
            scenarioLabel={scenarioLabel}
            onBack={() => setView("main")}
            onRerun={() => compile(taskInput || scenarioLabel)}
            tokenCount={tokenCount}
            compressionRatio={compressionRatio}
          />
        )}
        {view === "compare" && (
          <PlaygroundCompare
            scenarioLabel={scenarioLabel}
            onBack={() => setView("main")}
            onRerun={() => compile(taskInput || scenarioLabel)}
          />
        )}
      </div>
    </>
  );
}
