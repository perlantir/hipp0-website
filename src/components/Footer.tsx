import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/20 bg-slate-50/50 backdrop-blur-md">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 px-6 md:px-8 py-20 max-w-7xl mx-auto">
        <div className="col-span-2 md:col-span-1">
          <Link href="/" className="flex items-center gap-2 mb-4">
            <Image src="/images/Untitled design 6.png" alt="HIPP0" width={120} height={34} className="h-9 w-auto" />
          </Link>
          <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
            Decision memory for AI agent teams. Built by Perlantir AI Studio.
          </p>
          <p className="text-xs text-slate-400 mt-4">Apache 2.0 — Free and open source forever.</p>
        </div>
        <div>
          <h4 className="font-bold text-sm mb-6 uppercase tracking-widest text-slate-900">
            Product
          </h4>
          <ul className="space-y-4">
            <li><Link className="text-sm text-slate-500 hover:text-blue-600 transition-colors" href="/features">Features</Link></li>
            <li><Link className="text-sm text-slate-500 hover:text-blue-600 transition-colors" href="/changelog">Changelog</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-sm mb-6 uppercase tracking-widest text-slate-900">
            Resources
          </h4>
          <ul className="space-y-4">
            <li><Link className="text-sm text-slate-500 hover:text-blue-600 transition-colors" href="/docs">Documentation</Link></li>
            <li><a className="text-sm text-slate-500 hover:text-blue-600 transition-colors" href="https://github.com/perlantir/Hipp0/blob/main/docs/api-reference.md" target="_blank" rel="noopener noreferrer">API Reference</a></li>
            <li><Link className="text-sm text-slate-500 hover:text-blue-600 transition-colors" href="/blog">Blog</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-sm mb-6 uppercase tracking-widest text-slate-900">
            Community
          </h4>
          <ul className="space-y-4">
            <li><a className="text-sm text-slate-500 hover:text-blue-600 transition-colors" href="https://github.com/perlantir/Hipp0" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a className="text-sm text-slate-500 hover:text-blue-600 transition-colors" href="https://x.com/hipp0ai" target="_blank" rel="noopener noreferrer">X</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-10 border-t border-slate-200/40 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="text-xs text-slate-400">© 2026 Perlantir AI Studio. Apache 2.0 Licensed.</span>
        <div className="flex gap-8">
          <Link className="text-xs text-slate-400 hover:text-blue-600 transition-colors" href="/privacy">Privacy</Link>
          <Link className="text-xs text-slate-400 hover:text-blue-600 transition-colors" href="/terms">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
