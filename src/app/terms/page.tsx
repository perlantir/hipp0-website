import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Hipp0.ai",
};

export default function TermsPage() {
  return (
    <section className="max-w-4xl mx-auto py-24 md:py-32 px-6 md:px-8">
      <div className="glass-panel rounded-3xl p-10 md:p-14">
        <h1 className="text-4xl md:text-5xl font-bold text-on-background mb-2">
          Terms of Service
        </h1>
        <p className="text-sm text-on-surface-variant mb-12">
          Last updated: April 9, 2026
        </p>

        <h2 className="text-2xl font-bold text-on-background mt-10 mb-4">
          1. Overview
        </h2>
        <p className="text-sm text-on-surface-variant leading-relaxed">
          Hipp0 is an open-source decision memory layer for multi-agent AI
          systems, developed and maintained by Perlantir AI Studio
          (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), based in
          Iowa, USA. These Terms of Service (&ldquo;Terms&rdquo;) govern your
          use of: The Hipp0 open-source software available at
          github.com/perlantir/Hipp0 (&ldquo;Software&rdquo;), The Hipp0
          website at hipp0.ai (&ldquo;Site&rdquo;), The Hipp0 Cloud managed
          service, when available (&ldquo;Cloud Service&rdquo;). By using any of
          the above, you agree to these Terms.
        </p>

        <h2 className="text-2xl font-bold text-on-background mt-10 mb-4">
          2. Open-Source Software
        </h2>
        <p className="text-sm text-on-surface-variant leading-relaxed">
          Hipp0 is licensed under the Apache License 2.0. You are free to use,
          copy, modify, and distribute the Software in accordance with that
          license. These Terms do not restrict rights granted under the Apache
          2.0 license. In the event of conflict between these Terms and the
          Apache 2.0 license with respect to the open-source Software, the
          Apache 2.0 license controls.
        </p>

        <h2 className="text-2xl font-bold text-on-background mt-10 mb-4">
          3. Hipp0 Cloud (Managed Service)
        </h2>
        <p className="text-sm text-on-surface-variant leading-relaxed">
          Hipp0 Cloud is a hosted version of the Software currently in
          development. When available: Free Tier: Unlimited self-hosting remains
          free forever. The Cloud Free tier may include usage limits. Pro and
          Enterprise Tiers: Paid plans with expanded limits, managed
          infrastructure, and SLA terms. Billing handled via Stripe.
          Subscription terms: Plans billed monthly or annually. Cancel at any
          time; cancellation takes effect at end of billing period. No refunds
          for partial periods unless required by law. Plan limits: Usage metered
          against your plan (compiles, asks, and decisions). Exceeding limits may
          result in throttling or prompt to upgrade.
        </p>

        <h2 className="text-2xl font-bold text-on-background mt-10 mb-4">
          4. Accounts and API Keys
        </h2>
        <p className="text-sm text-on-surface-variant leading-relaxed">
          To use Hipp0 Cloud, you must create an account. You are responsible for
          maintaining the confidentiality of your credentials and API keys, all
          activity under your account, and ensuring your account information is
          accurate. BYOK: Hipp0 supports integration with third-party AI
          providers. Your keys are stored in your self-hosted environment or
          encrypted at rest for Cloud users. We do not share your keys with third
          parties.
        </p>

        <h2 className="text-2xl font-bold text-on-background mt-10 mb-4">
          5. Acceptable Use
        </h2>
        <p className="text-sm text-on-surface-variant leading-relaxed">
          You agree not to use Hipp0 to: violate any applicable law; store or
          process unlawful content; reverse-engineer or circumvent security
          controls beyond Apache 2.0 permissions; abuse the Cloud Service (DDoS,
          scraping); or impersonate Perlantir AI Studio.
        </p>

        <h2 className="text-2xl font-bold text-on-background mt-10 mb-4">
          6. GitHub Integration
        </h2>
        <p className="text-sm text-on-surface-variant leading-relaxed">
          When you connect a GitHub repository, you authorize Hipp0 to read PR
          titles, descriptions, labels, reviewer information, and file paths. We
          do not write to your repositories. GitHub&apos;s Terms of Service
          apply.
        </p>

        <h2 className="text-2xl font-bold text-on-background mt-10 mb-4">
          7. Webhooks
        </h2>
        <p className="text-sm text-on-surface-variant leading-relaxed">
          Hipp0 delivers outbound webhooks to URLs you configure. You are
          responsible for security of your endpoints. We sign payloads with
          HMAC-SHA256. You should verify signatures before processing.
        </p>

        <h2 className="text-2xl font-bold text-on-background mt-10 mb-4">
          8. Third-Party Services
        </h2>
        <p className="text-sm text-on-surface-variant leading-relaxed">
          Hipp0 integrates with Stripe (payments), Sentry (error tracking), and
          AI providers (OpenAI, Anthropic, OpenRouter). We are not responsible
          for the practices of these third parties.
        </p>

        <h2 className="text-2xl font-bold text-on-background mt-10 mb-4">
          9. Data Ownership
        </h2>
        <p className="text-sm text-on-surface-variant leading-relaxed">
          Self-hosted users own and control all data. Perlantir has no access to
          self-hosted instances. Cloud users retain ownership of all data. We
          process data only to provide the service. Export available at any time;
          deletion upon account closure.
        </p>

        <h2 className="text-2xl font-bold text-on-background mt-10 mb-4">
          10. Community Insights
        </h2>
        <p className="text-sm text-on-surface-variant leading-relaxed">
          Optional feature surfacing anonymized cross-tenant patterns. Data is
          fully anonymized before aggregation. Opt out at any time. Opt-in for
          self-hosted users.
        </p>

        <h2 className="text-2xl font-bold text-on-background mt-10 mb-4">
          11. Disclaimer of Warranties
        </h2>
        <p className="text-sm text-on-surface-variant leading-relaxed uppercase">
          THE SOFTWARE AND CLOUD SERVICE ARE PROVIDED &ldquo;AS IS,&rdquo;
          WITHOUT WARRANTY OF ANY KIND. WE DISCLAIM ALL WARRANTIES INCLUDING
          MERCHANTABILITY, FITNESS FOR PURPOSE, AND NON-INFRINGEMENT.
        </p>

        <h2 className="text-2xl font-bold text-on-background mt-10 mb-4">
          12. Limitation of Liability
        </h2>
        <p className="text-sm text-on-surface-variant leading-relaxed uppercase">
          PERLANTIR AI STUDIO WILL NOT BE LIABLE FOR INDIRECT, INCIDENTAL,
          SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES. TOTAL LIABILITY SHALL NOT
          EXCEED THE AMOUNT PAID IN THE TWELVE MONTHS PRECEDING THE CLAIM, OR
          $50 USD.
        </p>

        <h2 className="text-2xl font-bold text-on-background mt-10 mb-4">
          13. Indemnification
        </h2>
        <p className="text-sm text-on-surface-variant leading-relaxed">
          You agree to indemnify Perlantir AI Studio from claims arising from
          your use of Hipp0, violation of these Terms, or violation of
          third-party rights.
        </p>

        <h2 className="text-2xl font-bold text-on-background mt-10 mb-4">
          14. Changes to Terms
        </h2>
        <p className="text-sm text-on-surface-variant leading-relaxed">
          We may update these Terms. Material changes require 30 days&apos;
          notice. Continued use constitutes acceptance.
        </p>

        <h2 className="text-2xl font-bold text-on-background mt-10 mb-4">
          15. Governing Law
        </h2>
        <p className="text-sm text-on-surface-variant leading-relaxed">
          Governed by the laws of the State of Iowa, United States. Disputes
          resolved in Iowa state or federal courts.
        </p>

        <h2 className="text-2xl font-bold text-on-background mt-10 mb-4">
          16. Contact
        </h2>
        <p className="text-sm text-on-surface-variant leading-relaxed">
          Questions:{" "}
          <a
            href="mailto:hello@hipp0.ai"
            className="text-primary font-semibold hover:underline"
          >
            hello@hipp0.ai
          </a>
        </p>

        <h2 className="text-2xl font-bold text-on-background mt-10 mb-4">
          17. EU/EEA/UK Users (GDPR)
        </h2>
        <p className="text-sm text-on-surface-variant leading-relaxed">
          For EU/EEA/UK users, Perlantir AI Studio is the data controller. We
          process data under lawful bases including Contract, Legal Obligation,
          Legitimate Interests, and Consent. International transfers safeguarded
          via EU-US DPF, SCCs, and adequacy decisions. Full GDPR rights apply
          (access, rectification, erasure, portability, objection, withdraw
          consent). Contact:{" "}
          <a
            href="mailto:hello@hipp0.ai"
            className="text-primary font-semibold hover:underline"
          >
            hello@hipp0.ai
          </a>
          . Response within 30 days. Right to lodge complaints with local
          supervisory authority.
        </p>
      </div>
    </section>
  );
}
