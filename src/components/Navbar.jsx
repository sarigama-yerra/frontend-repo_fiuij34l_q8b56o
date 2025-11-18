import React from 'react'
import { Menu, Search, Settings, Sparkles } from 'lucide-react'

const NavButton = ({ children }) => (
  <button className="inline-flex items-center gap-2 px-3 h-9 rounded-lg bg-white/5 hover:bg-white/8 text-slate-200 hover:text-white border border-white/10 hover:border-white/20 transition-colors">
    {children}
  </button>
)

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl/2">
      <div className="mx-auto max-w-7xl px-4 py-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5 backdrop-blur-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 -z-10 blur-md bg-gradient-to-tr from-indigo-500/40 to-cyan-400/40 rounded-xl" />
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_10px_20px_-10px_rgba(56,189,248,0.7)]">
                <Sparkles size={18} />
              </div>
            </div>
            <div className="leading-tight">
              <div className="font-semibold tracking-tight">Claudine</div>
              <div className="text-[11px] text-slate-400">by Flames</div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-2 w-[42%]">
            <div className="flex-1 relative">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/10 to-white/5" />
              <div className="relative flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-[13px] text-slate-300">
                <Search size={16} className="text-slate-400" />
                <input className="flex-1 bg-transparent outline-none placeholder:text-slate-500" placeholder="Quick action, files, prompts… (⌘K)" />
                <kbd className="text-[10px] text-slate-500 border border-white/10 px-1.5 py-0.5 rounded">⌘K</kbd>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <NavButton>
              <span className="hidden sm:inline">Templates</span>
            </NavButton>
            <NavButton>
              <span className="hidden sm:inline">Workspace</span>
            </NavButton>
            <NavButton>
              <Settings size={16} />
              <span className="hidden sm:inline">Settings</span>
            </NavButton>
            <button className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 border border-white/10">
              <Menu size={18} />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
