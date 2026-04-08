import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Hipp0.ai",
};

export default function PrivacyPage() {
  return (
    <section className="max-w-4xl mx-auto py-24 md:py-32 px-6 md:px-8">
      <div className="glass-panel rounded-3xl p-10 md:p-14">
        <h1 className="text-4xl md:text-5xl font-bold text-on-background mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm text-on-surface-variant mb-12">
          Last updated: April 9, 2026
        </p>

        <h2 className="text-2xl font-bold text-on-background mt-10 mb-4">
          1. Introduction
        </h2>
        <p className="text-sm text-on-surface-variant leading-relaxed">
          This Privacy Policy explains how Perlantir AI Studio collects, uses,
          and protects information in connection with the Hipp0 website and Cloud
          service. It does not apply to self-hosted deployments &mdash; you are
          the data controller for your own instance.
        </p>

        <h2 className="text-2xl font-bold text-on-background mt-10 mb-4">
          2. What We Collect
        </h2>
        <p className="text-sm text-on-surface-variant leading-relaxed">
          Account information: Name, email, password for Cloud accounts. Billing
          information: Processed by Stripe (we don&apos;t store card numbers).
          Project data: Decisions, agent configs, sessions, tags in Cloud. Usage
          data: API calls, compile counts, feature usage for metering and
          improvement. Error data: Crash reports via Sentry, retained 30 days.
          Log data: IP addresses, timestamps, request metadata, retained 90
          days. GitHub data: PR titles, descriptions, labels, file paths from
          authorized repos. OAuth tokens encrypted at rest. BYOK keys: Encrypted
          at rest (AES-256), decrypted only in memory during use. Never logged or
          shared.
        </p>

        <h2 className="text-2xl font-bold text-on-background mt-10 mb-4">
          3. How We Use Information
        </h2>
        <p className="text-sm text-on-surface-variant leading-relaxed">
          To provide, maintain, and improve the service; process billing; meter
          usage; monitor health; send service communications; respond to support;
          generate anonymized analytics.
        </p>

        <h2 className="text-2xl font-bold text-on-background mt-10 mb-4">
          4. Community Insights
        </h2>
        <p className="text-sm text-on-surface-variant leading-relaxed">
          If enabled, decision data contributes to anonymized patterns. All
          identifiers stripped. Only statistical patterns aggregated. Disable at
          any time.
        </p>

        <h2 className="text-2xl font-bold text-on-background mt-10 mb-4">
          5. Data Sharing
        </h2>
        <p className="text-sm text-on-surface-variant leading-relaxed">
          We do not sell data. We share only with: service providers (Stripe,
          Sentry) under DPAs; AI providers only when you trigger AI features; as
          required by law; in business transfers with notification.
        </p>

        <h2 className="text-2xl font-bold text-on-background mt-10 mb-4">
          6. Data Retention
        </h2>
        <p className="text-sm text-on-surface-variant leading-relaxed">
          Account data: Deleted within 30 days of closure request. Project data:
          Until you delete it. Billing records: 7 years (legal requirement).
          Logs: 90 days. Error traces: 30 days.
        </p>

        <h2 className="text-2xl font-bold text-on-background mt-10 mb-4">
          7. Self-Hosted
        </h2>
        <p className="text-sm text-on-surface-variant leading-relaxed">
          Perlantir has no access to self-hosted data. This policy does not apply
          to self-hosted instances.
        </p>

        <h2 className="text-2xl font-bold text-on-background mt-10 mb-4">
          8. Cookies
        </h2>
        <p className="text-sm text-on-surface-variant leading-relaxed">
          Minimal: session auth only. Privacy-first analytics if any. No
          advertising cookies. No cross-site tracking.
        </p>

        <h2 className="text-2xl font-bold text-on-background mt-10 mb-4">
          9. Security
        </h2>
        <p className="text-sm text-on-surface-variant leading-relaxed">
          TLS 1.2+, encryption at rest for sensitive fields, HMAC-SHA256
          webhooks, access controls, least privilege. Report vulnerabilities to:{" "}
          <a
            href="mailto:hello@hipp0.ai"
            className="text-primary font-semibold hover:underline"
          >
            hello@hipp0.ai
          </a>
        </p>

        <h2 className="text-2xl font-bold text-on-background mt-10 mb-4">
          10. Your Rights
        </h2>
        <p className="text-sm text-on-surface-variant leading-relaxed">
          Access, correct, delete, export your data. Opt out of Community
          Insights. Contact:{" "}
          <a
            href="mailto:hello@hipp0.ai"
            className="text-primary font-semibold hover:underline"
          >
            hello@hipp0.ai
          </a>
          . Iowa residents: ICDPA rights honored.
        </p>

        <h2 className="text-2xl font-bold text-on-background mt-10 mb-4">
          11. Children
        </h2>
        <p className="text-sm text-on-surface-variant leading-relaxed">
          Not directed at children under 13. No knowing collection. Contact us to
          delete.
        </p>

        <h2 className="text-2xl font-bold text-on-background mt-10 mb-4">
          12. Changes
        </h2>
        <p className="text-sm text-on-surface-variant leading-relaxed">
          Material changes: 30 days notice for Cloud users.
        </p>

        <h2 className="text-2xl font-bold text-on-background mt-10 mb-4">
          13. EU/EEA/UK Users (GDPR)
        </h2>
        <p className="text-sm text-on-surface-variant leading-relaxed">
          Data controller: Perlantir AI Studio, Iowa, USA. Lawful bases:
          Contract (account, billing), Legal obligation (billing), Legitimate
          interests (error monitoring, analytics), Consent (Community Insights,
          marketing). International transfers via EU-US DPF, SCCs, and adequacy
          decisions. Sub-processors: Stripe (payments, USA, SCCs/DPF), Sentry
          (errors, USA, SCCs), OpenAI/Anthropic (BYOK only, USA, SCCs), GitHub
          (optional, USA, SCCs). Full GDPR rights: access (Art. 15),
          rectification (Art. 16), erasure (Art. 17), restriction (Art. 18),
          portability (Art. 20), objection (Art. 21), withdraw consent. Response
          within 30 days. Right to lodge complaint with supervisory authority.
          UK: ICO at ico.org.uk.
        </p>

        <h2 className="text-2xl font-bold text-on-background mt-10 mb-4">
          14. Contact
        </h2>
        <p className="text-sm text-on-surface-variant leading-relaxed">
          Perlantir AI Studio, Iowa, USA.{" "}
          <a
            href="mailto:hello@hipp0.ai"
            className="text-primary font-semibold hover:underline"
          >
            hello@hipp0.ai
          </a>
        </p>
      </div>
    </section>
  );
}
