import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SwarmBackground from "@/components/SwarmBackground";

export const metadata: Metadata = {
  title: "Hipp0.ai | The Decision Memory Layer for AI Agents",
  description:
    "The decision memory layer that captures context, scores logic, and compiles a long-term hippocampus for multi-agent teams. Open source, Apache 2.0.",
  icons: {
    icon: "/images/favicon.jpg",
    apple: "/images/favicon.jpg",
  },
  openGraph: {
    title: "Hipp0.ai | Decision Memory for AI Agent Teams",
    description:
      "Persistent decision memory for multi-agent AI teams. 5-signal scoring, contradiction detection, and context compilation.",
    url: "https://hipp0.ai",
    siteName: "Hipp0.ai",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hipp0.ai | Decision Memory for AI Agent Teams",
    description:
      "Persistent decision memory for multi-agent AI teams. Open source, Apache 2.0.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-background text-on-background font-body selection:bg-primary/10 selection:text-primary antialiased min-h-screen flex flex-col">
        <SwarmBackground />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
