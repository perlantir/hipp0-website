"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/features", label: "Features" },
  { href: "/docs", label: "Docs" },
  { href: "/changelog", label: "Changelog" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 w-full z-50 glass-nav shadow-[0_20px_40px_rgba(0,0,0,0.05)]">
      <div className="flex justify-between items-center h-20 px-6 md:px-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/Untitled design 6.png" alt="HIPP0" width={525} height={150} className="h-[150px] w-auto" priority />
          </Link>
          <div className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={
                  pathname === link.href
                    ? "text-blue-600 border-b-2 border-blue-600 font-bold tracking-tight transition-colors"
                    : "text-slate-600 font-medium tracking-tight hover:text-blue-500 transition-colors"
                }
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/perlantir/Hipp0"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 text-slate-600 font-medium hover:text-blue-500 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://github.com/perlantir/Hipp0"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-on-primary px-6 py-2.5 rounded-xl font-bold text-sm hover:scale-95 transition-all shadow-[0_0_20px_rgba(6,63,249,0.4)]"
          >
            Get Started
          </a>
          <button
            className="md:hidden text-slate-600"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div className="md:hidden glass-panel border-t border-white/40 px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`block py-2 font-medium ${
                pathname === link.href ? "text-blue-600 font-bold" : "text-slate-600"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://github.com/perlantir/Hipp0"
            target="_blank"
            rel="noopener noreferrer"
            className="block py-2 text-slate-600 font-medium"
          >
            GitHub
          </a>
        </div>
      )}
    </nav>
  );
}
