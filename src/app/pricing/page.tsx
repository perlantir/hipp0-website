import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing | Hipp0.ai",
};

const tiers = [
  {
    name: "Community",
    price: "$0",
    period: "/mo",
    description: "For individual developers and small experiments.",
    features: [
      "Unlimited decisions",
      "Unlimited agents",
      "3 projects",
      "Self-hosted only",
      "Full MCP / SDK / CLI / Super Brain",
      "Single collab room",
      "Community Discord support",
    ],
    cta: "Get Started Free",
    href: "https://app.hipp0.ai",
    popular: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/mo per project",
    description: "For teams shipping AI-native products.",
    features: [
      "Everything in Community",
      "Unlimited projects",
      "Cloud + self-hosted",
      "Unlimited collab rooms",
      "All connectors (GitHub, Slack, Linear, etc.)",
      "Email + priority support",
    ],
    cta: "Start Free Trial",
    href: "https://app.hipp0.ai",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For organizations with advanced security and scale needs.",
    features: [
      "Everything in Pro",
      "Dedicated compute nodes",
      "Custom SLA",
      "SSO / SAML",
      "VPC Peering",
      "Dedicated solutions engineer",
    ],
    cta: "Contact Sales",
    href: "mailto:hello@hipp0.ai",
    popular: false,
  },
];

export default function PricingPage() {
  return (
    <section className="relative py-24 md:py-32 px-6 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-on-background">
          Simple, Usage-Based Pricing
        </h1>
        <p className="mt-6 text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          Transparent costs that scale with you. No hidden fees, no surprises.
          Start free and upgrade when you&apos;re ready.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`relative rounded-3xl p-8 flex flex-col ${
              tier.popular
                ? "md:-translate-y-4 shadow-[0_20px_60px_rgba(6,63,249,0.15)]"
                : ""
            }`}
          >
            {tier.popular && (
              <div
                className="absolute -inset-[1px] rounded-3xl -z-10"
                style={{
                  background:
                    "linear-gradient(135deg, #063ff9, #ff2e93, #ffeb3b)",
                }}
              />
            )}

            <div className="glass-panel-heavy rounded-3xl p-8 flex flex-col flex-1">
              {tier.popular && (
                <span className="inline-block self-start mb-4 px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-full bg-primary text-on-primary">
                  Most Popular
                </span>
              )}

              <h2 className="text-2xl font-bold text-on-background">
                {tier.name}
              </h2>
              <p className="mt-2 text-sm text-on-surface-variant">
                {tier.description}
              </p>

              <div className="mt-6 mb-8">
                <span className="text-5xl font-bold text-on-background">
                  {tier.price}
                </span>
                {tier.period && (
                  <span className="text-on-surface-variant text-sm ml-1">
                    {tier.period}
                  </span>
                )}
              </div>

              <ul className="space-y-3 mb-10 flex-1">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-on-surface-variant"
                  >
                    <svg
                      className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href={tier.href}
                className={`block text-center py-3 px-6 rounded-xl font-bold text-sm transition-all hover:scale-[0.97] ${
                  tier.popular
                    ? "bg-primary text-on-primary shadow-[0_0_20px_rgba(6,63,249,0.4)]"
                    : "border-2 border-slate-300 text-on-background hover:border-primary hover:text-primary"
                }`}
              >
                {tier.cta}
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-20">
        <p className="text-sm text-on-surface-variant">
          Have questions?{" "}
          <a
            href="mailto:hello@hipp0.ai"
            className="text-primary font-semibold hover:underline"
          >
            Reach out to us
          </a>{" "}
          and we&apos;ll help you find the right plan.
        </p>
      </div>
    </section>
  );
}
