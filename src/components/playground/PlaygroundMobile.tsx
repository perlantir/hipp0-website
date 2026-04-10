"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Monitor,
  DraftingCompass,
  GitBranch,
  Mail,
  BellRing,
  Home,
  HelpCircle,
  ChevronRight,
  Check,
} from "lucide-react";

export default function PlaygroundMobile() {
  const [email, setEmail] = useState("");
  const [emailStatus, setEmailStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [reminderSet, setReminderSet] = useState(false);
  const [showEmailForm, setShowEmailForm] = useState(false);

  async function handleEmailSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setEmailStatus("sending");
    try {
      const res = await fetch("/api/playground/email-reminder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), source: "mobile_fallback" }),
      });
      if (res.ok) {
        setEmailStatus("sent");
      } else {
        setEmailStatus("error");
      }
    } catch {
      setEmailStatus("error");
    }
  }

  function handleRemindLater() {
    try {
      localStorage.setItem("hipp0_playground_reminder", String(Date.now()));
      setReminderSet(true);
      setTimeout(() => setReminderSet(false), 3000);
    } catch {
      // localStorage might be unavailable
    }
  }

  return (
    <div className="relative min-h-screen bg-slate-950 text-white overflow-hidden">
      {/* Ambient orbs */}
      <div
        aria-hidden
        className="pointer-events-none fixed rounded-full blur-[120px]"
        style={{
          width: 360,
          height: 360,
          top: -80,
          left: -80,
          background: "rgba(6, 63, 249, 0.35)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none fixed rounded-full blur-[120px]"
        style={{
          width: 320,
          height: 320,
          bottom: -80,
          right: -80,
          background: "rgba(255, 46, 147, 0.2)",
        }}
      />

      {/* Top nav */}
      <nav className="fixed top-0 inset-x-0 z-40 backdrop-blur-xl bg-slate-900/60 border-b border-white/10">
        <div className="h-14 px-5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img src="/images/hipp0-logo.png" alt="HIPP0" className="h-7 w-auto" />
          </Link>
          <Link
            href="/"
            aria-label="Home"
            className="w-9 h-9 rounded-lg hover:bg-white/10 flex items-center justify-center"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className="w-5 h-5"
            >
              <circle cx="12" cy="6" r="1.5" />
              <circle cx="12" cy="12" r="1.5" />
              <circle cx="12" cy="18" r="1.5" />
            </svg>
          </Link>
        </div>
      </nav>

      <main className="pt-20 pb-28 px-6">
        {/* Orbiting icon showcase */}
        <div className="relative mx-auto w-56 h-56 mt-6">
          <div className="absolute inset-0 rounded-full border border-white/10" />
          <div className="absolute inset-6 rounded-full border border-primary/40 animate-[spin_16s_linear_infinite]">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-7 h-7 rounded-lg bg-slate-900/80 border border-white/10 flex items-center justify-center text-primary">
              <DraftingCompass className="w-3.5 h-3.5" />
            </div>
            <div className="absolute bottom-0 -right-1 w-7 h-7 rounded-lg bg-slate-900/80 border border-white/10 flex items-center justify-center text-secondary">
              <GitBranch className="w-3.5 h-3.5" />
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-28 h-28 rounded-3xl backdrop-blur-xl bg-slate-900/60 border-2 border-primary/60 shadow-[0_0_40px_rgba(6,63,249,0.45)] flex items-center justify-center">
              <Monitor className="w-10 h-10 text-primary" />
            </div>
          </div>
        </div>

        <h1 className="mt-10 text-3xl font-bold tracking-tight leading-tight text-center">
          The Playground
          <br />
          <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            Demands More Space.
          </span>
        </h1>
        <p className="mt-4 text-sm text-slate-400 text-center max-w-sm mx-auto">
          The interactive swarm canvas is built for wide screens. Pop it open on a laptop to drag
          agents, rewind time, and split-compare personas.
        </p>

        {/* Email form - expands inline on click */}
        {!showEmailForm && emailStatus !== "sent" && (
          <button
            onClick={() => setShowEmailForm(true)}
            className="mt-8 w-full py-4 rounded-2xl bg-primary text-white font-bold text-sm inline-flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(6,63,249,0.35)] active:scale-[0.98] transition-transform"
          >
            <Mail className="w-4 h-4" /> Email me the link
          </button>
        )}

        {showEmailForm && emailStatus !== "sent" && (
          <form onSubmit={handleEmailSubmit} className="mt-8 space-y-3">
            <input
              type="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              required
              className="w-full px-5 py-4 rounded-2xl bg-slate-900/60 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-primary/60"
            />
            <button
              type="submit"
              disabled={emailStatus === "sending"}
              className="w-full py-4 rounded-2xl bg-primary text-white font-bold text-sm inline-flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(6,63,249,0.35)] active:scale-[0.98] transition-transform disabled:opacity-60"
            >
              <Mail className="w-4 h-4" />
              {emailStatus === "sending" ? "Sending..." : "Send me the link"}
            </button>
            {emailStatus === "error" && (
              <p className="text-xs text-red-400 text-center">Something went wrong. Try again.</p>
            )}
          </form>
        )}

        {emailStatus === "sent" && (
          <div className="mt-8 w-full py-4 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 font-bold text-sm inline-flex items-center justify-center gap-2">
            <Check className="w-4 h-4" /> Link sent! Check your inbox.
          </div>
        )}

        {/* Remind me later */}
        <button
          onClick={handleRemindLater}
          disabled={reminderSet}
          className="mt-4 w-full rounded-2xl backdrop-blur-xl bg-slate-900/60 border border-white/10 p-4 flex items-center gap-3 active:scale-[0.98] transition-transform disabled:opacity-60"
        >
          <div className="w-10 h-10 rounded-xl bg-secondary/20 text-secondary flex items-center justify-center">
            {reminderSet ? <Check className="w-4 h-4" /> : <BellRing className="w-4 h-4" />}
          </div>
          <div className="flex-1 min-w-0 text-left">
            <div className="text-sm font-semibold">
              {reminderSet ? "Reminder set!" : "Remind me later"}
            </div>
            <div className="text-xs text-slate-400">
              {reminderSet
                ? "We won't show this again today."
                : "We'll ping you when you're back at your desk."}
            </div>
          </div>
          {!reminderSet && <ChevronRight className="w-4 h-4 text-slate-500" />}
        </button>

        <div className="mt-10">
          <span className="text-[10px] uppercase tracking-wider font-bold text-primary px-2 py-1 rounded-full bg-primary/10 border border-primary/30">
            Orchestration Feature
          </span>
          <p className="mt-3 text-sm text-slate-400">
            The playground loads a live swarm of six agents. You can drop tasks, watch scoring
            unfold, and export the H0C context file to feed into your own stack.
          </p>
        </div>
      </main>

      {/* Bottom nav */}
      <nav className="fixed bottom-0 inset-x-0 z-40 backdrop-blur-xl bg-slate-900/70 border-t border-white/10">
        <div className="grid grid-cols-3 h-16">
          <Link
            href="/"
            className="flex flex-col items-center justify-center gap-1 text-slate-500 hover:text-white transition-colors"
          >
            <Home className="w-4 h-4" />
            <span className="text-[10px] font-semibold">Home</span>
          </Link>
          <Link
            href="/docs"
            className="flex flex-col items-center justify-center gap-1 text-slate-500 hover:text-white transition-colors"
          >
            <HelpCircle className="w-4 h-4" />
            <span className="text-[10px] font-semibold">Support</span>
          </Link>
          <div className="flex flex-col items-center justify-center gap-1 text-primary">
            <Monitor className="w-4 h-4" />
            <span className="text-[10px] font-semibold">Desktop</span>
          </div>
        </div>
      </nav>
    </div>
  );
}
