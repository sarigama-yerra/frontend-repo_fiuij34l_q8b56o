import React from 'react'

export default function Footer() {
  return (
    <footer className="relative">
      <div className="mx-auto max-w-7xl px-4 pb-16">
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-slate-400">
            © {new Date().getFullYear()} Claudine. Crafted for builders.
          </div>
          <div className="flex items-center gap-3 text-sm text-slate-400">
            <a className="hover:text-white" href="#">Changelog</a>
            <span className="h-1 w-1 rounded-full bg-slate-600" />
            <a className="hover:text-white" href="#">Privacy</a>
            <span className="h-1 w-1 rounded-full bg-slate-600" />
            <a className="hover:text-white" href="#">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
