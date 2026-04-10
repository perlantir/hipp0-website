import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, source } = body as { email?: string; source?: string };

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email is required" }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = parseInt(process.env.SMTP_PORT ?? "587", 10);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const fromEmail = process.env.SMTP_FROM ?? "noreply@hipp0.ai";

    if (!smtpHost || !smtpUser || !smtpPass) {
      console.log(
        `[PLAYGROUND-REMINDER] New request: ${email} from ${source || "unknown"} at ${new Date().toISOString()}`,
      );
      return NextResponse.json({ ok: true });
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: { user: smtpUser, pass: smtpPass },
    });

    // Send email to the user with the playground link
    await transporter.sendMail({
      from: fromEmail,
      to: email,
      subject: "Your Hipp0 Playground link",
      text: `Hi,

You requested the link to the Hipp0 interactive playground. Open this on your laptop or desktop for the full experience:

https://hipp0.ai/playground

The playground loads a live swarm of six agents with 50 pre-seeded decisions. You can drop tasks, watch scoring unfold in real time, and compare how different agents weigh the same information.

- The Hipp0 team
https://hipp0.ai
`,
      html: `
        <div style="font-family: -apple-system, system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px;">
          <h2 style="color: #063ff9; margin: 0 0 16px;">Your Hipp0 Playground link</h2>
          <p>You requested the link to the Hipp0 interactive playground. Open this on your laptop or desktop for the full experience:</p>
          <p style="margin: 32px 0;">
            <a href="https://hipp0.ai/playground"
               style="background: #063ff9; color: white; padding: 14px 28px; border-radius: 12px; text-decoration: none; font-weight: bold;">
              Open the Playground
            </a>
          </p>
          <p>The playground loads a live swarm of six agents with 50 pre-seeded decisions. You can drop tasks, watch scoring unfold in real time, and compare how different agents weigh the same information.</p>
          <p style="color: #6B7280; font-size: 14px; margin-top: 32px;">- The Hipp0 team<br/><a href="https://hipp0.ai">hipp0.ai</a></p>
        </div>
      `,
    });

    // Also notify the team
    await transporter
      .sendMail({
        from: fromEmail,
        to: "hello@hipp0.ai",
        subject: "Playground email link request",
        text: `New playground email request:\n\nEmail: ${email}\nSource: ${source || "unknown"}\nTime: ${new Date().toISOString()}`,
      })
      .catch(() => {});

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[PLAYGROUND-REMINDER] Error:", (err as Error).message);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
