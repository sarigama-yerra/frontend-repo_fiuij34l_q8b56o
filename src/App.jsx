import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Showcase from './components/Showcase'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#0b0d12] text-slate-100 selection:bg-indigo-500/30 selection:text-white">
      {/* Background layers */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        {/* Soft vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_10%_-10%,rgba(99,102,241,0.25),transparent_60%),radial-gradient(1000px_500px_at_90%_10%,rgba(56,189,248,0.25),transparent_60%)] opacity-70" />
        {/* Grid + noise */}
        <div className="absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(1200px_600px_at_50%_0%,black,transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.06] mix-blend-soft-light" style={{backgroundImage:"url('data:image/svg+xml;utf8,<?xml version=\"1.0\"?><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1200\" height=\"600\"><filter id=\"n\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.9\" numOctaves=\"4\" stitchTiles=\"stitch\"/></filter><rect width=\"100%\" height=\"100%\" filter=\"url(%23n)\" opacity=\"0.35\"/></svg>')"}} />
      </div>

      <Navbar />
      <Hero />
      <Features />
      <Showcase />
      <Footer />
    </div>
  )
}

export default App
