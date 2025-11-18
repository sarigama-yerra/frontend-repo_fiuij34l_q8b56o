import React from 'react'
import { motion } from 'framer-motion'

const Card = ({ children }) => (
  <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5 }} className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
    <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_10%_-20%,rgba(99,102,241,0.25),transparent_60%)] opacity-60" />
    <div className="relative p-4 sm:p-6">
      {children}
    </div>
  </motion.div>
)

export default function Showcase() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 py-10 md:py-16">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-start">
          <Card>
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold">Workspace preview</h3>
              <div className="text-[11px] text-slate-400">Concept</div>
            </div>
            <div className="rounded-xl overflow-hidden border border-white/10 bg-[#0f1218]">
              <div className="flex items-center gap-1 px-3 py-2 border-b border-white/10 text-[12px] text-slate-400">
                <div className="h-2 w-2 rounded-full bg-rose-400" />
                <div className="h-2 w-2 rounded-full bg-amber-300" />
                <div className="h-2 w-2 rounded-full bg-emerald-400" />
                <span className="ml-2">cluadeworkspace.tsx</span>
              </div>
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-3 md:p-4 border-r border-white/5">
                  <div className="text-[11px] text-slate-400 mb-2">Claude Chat</div>
                  <div className="h-40 rounded-lg bg-gradient-to-b from-white/5 to-white/0 border border-white/10" />
                </div>
                <div className="p-3 md:p-4">
                  <div className="text-[11px] text-slate-400 mb-2">Editor</div>
                  <div className="h-40 rounded-lg bg-gradient-to-b from-white/5 to-white/0 border border-white/10" />
                </div>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold">Micro-interactions</h3>
              <div className="text-[11px] text-slate-400">Always-on polish</div>
            </div>
            <ul className="space-y-2 text-sm text-slate-300/90">
              <li>• Magnetic hover states with subtle parallax</li>
              <li>• Contextual gloss on press and drag</li>
              <li>• Real-time syntax glow during runs</li>
              <li>• Gentle inertial scrolling and snapping</li>
              <li>• Focus rings that breathe with your input</li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  )
}
