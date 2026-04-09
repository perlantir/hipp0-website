import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, company } = body as { email?: string; company?: string };

    // Honeypot check - "company" field is hidden, bots fill it in
    if (company) {
      // Silently accept to not tip off bots
      return NextResponse.json({ ok: true });
    }

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email is required" }, { status: 400 });
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
    }

    // Rate limiting: simple per-IP check via header
    // (In production, use Redis or similar)

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = parseInt(process.env.SMTP_PORT ?? "587", 10);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const fromEmail = process.env.SMTP_FROM ?? "noreply@hipp0.ai";

    if (!smtpHost || !smtpUser || !smtpPass) {
      // Fallback: log to console when SMTP is not configured
      console.log(`[WAITLIST] New signup: ${email} at ${new Date().toISOString()}`);
      return NextResponse.json({ ok: true });
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: { user: smtpUser, pass: smtpPass },
    });

    await transporter.sendMail({
      from: fromEmail,
      to: "hello@hipp0.ai",
      subject: "Waitlist submission for HIPP0.AI",
      text: `New waitlist signup:\n\nEmail: ${email}\nSubmitted: ${new Date().toISOString()}`,
      html: `
        <h2>New Waitlist Signup</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Submitted:</strong> ${new Date().toISOString()}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[WAITLIST] Error:", (err as Error).message);
    return NextResponse.json({ error: "Failed to process signup" }, { status: 500 });
  }
}
