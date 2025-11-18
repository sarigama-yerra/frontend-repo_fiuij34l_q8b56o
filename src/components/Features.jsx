import React from 'react'
import { motion } from 'framer-motion'
import { PanelsTopLeft, TerminalSquare, Wand2, MousePointerClick, LayoutDashboard, Cpu, ShieldCheck, Sparkles } from 'lucide-react'

const FeatureCard = ({ icon: Icon, title, desc, badge }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5 }}
    className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03] p-4 sm:p-6 hover:border-white/20 hover:from-white/[0.08]"
  >
    <div className="flex items-start gap-4">
      <div className="relative">
        <div className="absolute inset-0 blur-md -z-10 bg-gradient-to-tr from-indigo-400/40 to-cyan-400/40 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white border border-white/15">
          <Icon size={18} />
        </div>
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <h3 className="font-semibold text-white tracking-tight">{title}</h3>
          {badge && (
            <span className="text-[10px] uppercase tracking-wider rounded-full border border-emerald-400/40 text-emerald-300/90 px-2 py-0.5 bg-emerald-500/10">{badge}</span>
          )}
        </div>
        <p className="mt-1 text-sm text-slate-300/80">{desc}</p>
      </div>
    </div>
  </motion.div>
)

export default function Features() {
  const features = [
    { icon: PanelsTopLeft, title: 'Layered workspace', desc: 'A focused canvas with dockable panels, split views and context layers that keep the code, run output and Claude in perfect balance.' },
    { icon: TerminalSquare, title: 'Live run stream', desc: 'Execute code with animated, color-graded logs and inline diffs. Everything renders with cinematic smoothness at 120fps.' },
    { icon: Wand2, title: 'Prompt-as-UI', desc: 'Command palette drives everything. Type to create files, refactor, run tests, or brief Claude with structured prompts.' },
    { icon: MousePointerClick, title: 'Micro-interactions', desc: 'Magnetic hovers, tactile clicks, press states and glass highlights give delightful feedback without distraction.', badge: 'new' },
    { icon: LayoutDashboard, title: 'Fast context switching', desc: 'Workflows snap between chat, code and runs with gestures and shortcuts. Your state persists across sessions.' },
    { icon: Cpu, title: 'Local + cloud compute', desc: 'Seamlessly run small tasks locally and burst to the cloud for heavy jobs. Predictive caching keeps it instant.' },
    { icon: ShieldCheck, title: 'Privacy-first', desc: 'Your code and prompts stay yours. Local-first storage with transparent cloud sync and granular controls.' },
    { icon: Sparkles, title: 'Tasteful defaults', desc: 'A single balanced theme tuned between light and dark. High contrast where it matters, gentle elsewhere.' },
  ]

  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 pb-10 md:pb-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {features.map((f, i) => (
            <FeatureCard key={i} {...f} />
          ))}
        </div>
      </div>
    </section>
  )
}
