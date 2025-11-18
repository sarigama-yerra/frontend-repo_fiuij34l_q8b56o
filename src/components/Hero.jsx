import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 pt-10 pb-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative z-10">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }}>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[12px] text-slate-300">
                <span className="inline-flex h-1.5 w-1.5 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-400 shadow-[0_0_0_3px_rgba(99,102,241,0.35)]" />
                Live Claude coding workspace
              </div>
              <h1 className="mt-5 text-5xl/tight font-semibold tracking-tight text-white md:text-6xl/tight">
                A world-class interface for Claude code
              </h1>
              <p className="mt-4 text-slate-300/90 text-lg">
                Claudine blends craft-level aesthetics with pragmatic workflows. Compose, run and iterate on Claude code in a fluid, cinematic space engineered for flow.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button className="group inline-flex items-center gap-2 px-4 h-11 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 text-white font-medium shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_20px_40px_-12px_rgba(56,189,248,0.6)]">
                  Start building
                  <span className="transition-transform group-hover:translate-x-0.5">→</span>
                </button>
                <button className="inline-flex items-center gap-2 px-4 h-11 rounded-xl border border-white/15 bg-white/5 text-slate-200 hover:text-white">
                  Watch demo
                </button>
              </div>
              <div className="mt-6 flex items-center gap-6 text-sm text-slate-400">
                <span>Gorgeous defaults</span>
                <span className="h-1 w-1 rounded-full bg-slate-600" />
                <span>Command-first UX</span>
                <span className="h-1 w-1 rounded-full bg-slate-600" />
                <span>Micro-interactions</span>
              </div>
            </motion.div>
          </div>

          <div className="relative aspect-[4/3] lg:aspect-[5/4] rounded-3xl border border-white/10 bg-white/5 overflow-hidden shadow-[0_40px_120px_-40px_rgba(0,0,0,0.7)]">
            <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b0d12] via-transparent to-transparent opacity-60" />
          </div>
        </div>
      </div>
    </section>
  )
}
