import React, { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { MessageSquare, Send, TerminalSquare, Play, Square, Pause, PanelRightOpen, PanelLeftOpen, FileCode2, Sparkles, Loader2, Circle, Wand2, Sidebar } from 'lucide-react'

function Divider({ onDrag, orientation = 'vertical' }) {
  const ref = useRef(null)
  const dragging = useRef(false)

  useEffect(() => {
    const onMove = (e) => {
      if (!dragging.current) return
      onDrag(e)
    }
    const onUp = () => { dragging.current = false }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
    window.addEventListener('touchmove', onMove)
    window.addEventListener('touchend', onUp)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', onUp)
      window.removeEventListener('touchmove', onMove)
      window.removeEventListener('touchend', onUp)
    }
  }, [onDrag])

  return (
    <div
      ref={ref}
      onMouseDown={() => (dragging.current = true)}
      onTouchStart={() => (dragging.current = true)}
      className={
        orientation === 'vertical'
          ? 'group relative w-1 cursor-col-resize select-none'
          : 'group relative h-1 cursor-row-resize select-none'
      }
    >
      <div className={
        orientation === 'vertical'
          ? 'absolute inset-y-0 -inset-x-1.5 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition'
          : 'absolute inset-x-0 -inset-y-1.5 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition'
      } />
      <div className={
        orientation === 'vertical'
          ? 'absolute inset-y-0 inset-x-0 border-l border-white/10'
          : 'absolute inset-x-0 inset-y-0 border-t border-white/10'
      } />
    </div>
  )
}

function HeaderBar({ title, children, glow }) {
  return (
    <div className="relative flex items-center justify-between px-3 py-2 border-b border-white/10">
      {glow && <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(400px_80px_at_10%_-40%,rgba(99,102,241,0.25),transparent_60%)] opacity-60" />}
      <div className="relative flex items-center gap-2 text-[12px] text-slate-300">
        <div className="h-2 w-2 rounded-full bg-emerald-400/80 shadow-[0_0_0_3px_rgba(16,185,129,0.15)]" />
        <span className="font-medium text-slate-200">{title}</span>
      </div>
      <div className="relative flex items-center gap-2 text-[12px] text-slate-300">
        {children}
      </div>
    </div>
  )
}

function ChatPanel() {
  const [messages, setMessages] = useState([
    { role: 'system', text: 'Welcome to Claudine. Ask me to scaffold components or run code.' },
    { role: 'user', text: 'Create a premium navbar with a command palette entry.' },
    { role: 'assistant', text: 'Done. Added a glassy header with ⌘K and magnetic hover states.' },
  ])
  const [input, setInput] = useState('Refactor editor chrome and add inline run glow.')
  const [sending, setSending] = useState(false)

  const send = () => {
    if (!input.trim()) return
    const next = [...messages, { role: 'user', text: input }]
    setMessages(next)
    setInput('')
    setSending(true)
    // Simulate assistant reply
    setTimeout(() => {
      setMessages((m) => [...m, { role: 'assistant', text: 'Applied refinements with softer borders and animated diagnostics.' }])
      setSending(false)
    }, 900)
  }

  return (
    <div className="flex h-full flex-col">
      <HeaderBar title="Claude Chat">
        <button className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md border border-white/10 bg-white/5 hover:bg-white/10 text-slate-200">
          <Wand2 size={14} /> Prompt presets
        </button>
      </HeaderBar>
      <div className="flex-1 overflow-auto p-3 space-y-3">
        {messages.map((m, i) => (
          <div key={i} className={
            m.role === 'user'
              ? 'ml-6 rounded-xl bg-white/5 border border-white/10 p-3 w-fit max-w-[85%]'
              : 'mr-6 rounded-xl bg-gradient-to-br from-indigo-500/15 to-cyan-500/15 border border-white/10 p-3 w-fit max-w-[85%]'
          }>
            <div className="text-[11px] mb-1 text-slate-400">{m.role}</div>
            <div className="text-sm text-slate-200">{m.text}</div>
          </div>
        ))}
        {sending && (
          <div className="mr-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-indigo-500/15 to-cyan-500/15 border border-white/10 px-3 py-2">
            <Loader2 size={14} className="animate-spin text-cyan-300" />
            <span className="text-sm text-slate-200">Thinking…</span>
          </div>
        )}
      </div>
      <div className="border-t border-white/10 p-2">
        <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && send()}
            placeholder="Message Claude…"
            className="flex-1 bg-transparent outline-none text-sm placeholder:text-slate-500 px-2 py-2"
          />
          <button onClick={send} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 text-white text-sm">
            <Send size={14} /> Send
          </button>
        </div>
      </div>
    </div>
  )
}

function CodeEditor() {
  const [code, setCode] = useState(`function PremiumButton({ label }) {\n  return (\n    <button className=\"group inline-flex items-center gap-2 px-4 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 text-white font-medium shadow-[inset_0_1px_0_rgba(255,255,255,0.4)]\">\n      {label}\n      <span className=\"transition-transform group-hover:translate-x-0.5\">→</span>\n    </button>\n  )\n}`)
  const [running, setRunning] = useState(false)

  return (
    <div className="flex h-full flex-col">
      <HeaderBar title="Editor" glow>
        <div className="inline-flex items-center gap-2">
          <button onClick={() => setRunning(true)} className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
            <Play size={14} /> Run
          </button>
          <button onClick={() => setRunning(false)} className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-rose-500/20 text-rose-200 border border-rose-400/30">
            <Square size={14} /> Stop
          </button>
        </div>
      </HeaderBar>
      <div className="relative flex-1">
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          spellCheck={false}
          className="h-full w-full resize-none bg-[#0f1218] text-slate-200 p-4 text-sm leading-relaxed outline-none font-mono rounded-b-xl"
        />
        {running && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="pointer-events-none absolute inset-0"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/10 via-transparent to-transparent" />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ repeat: Infinity, repeatType: 'mirror', duration: 1.4 }}
              className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-400"
            />
          </motion.div>
        )}
      </div>
    </div>
  )
}

function RunStream() {
  const [logs, setLogs] = useState([
    { level: 'info', text: 'Preparing environment…' },
    { level: 'info', text: 'Installing dependencies…' },
  ])
  const [active, setActive] = useState(true)

  useEffect(() => {
    if (!active) return
    const id = setInterval(() => {
      setLogs((l) => [
        ...l,
        { level: Math.random() > 0.85 ? 'warn' : 'ok', text: `Step ${l.length + 1} completed at ${new Date().toLocaleTimeString()}` },
      ])
    }, 1400)
    return () => clearInterval(id)
  }, [active])

  const color = (lvl) => (lvl === 'warn' ? 'text-amber-300' : lvl === 'ok' ? 'text-emerald-300' : 'text-slate-300')

  return (
    <div className="flex h-full flex-col">
      <HeaderBar title="Run Stream">
        <button onClick={() => setActive((v) => !v)} className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md border border-white/10 bg-white/5 hover:bg-white/10 text-slate-200">
          {active ? <Pause size={14} /> : <Play size={14} />} {active ? 'Pause' : 'Resume'}
        </button>
      </HeaderBar>
      <div className="flex-1 overflow-auto p-3 space-y-2 bg-gradient-to-b from-white/0 to-white/5">
        {logs.map((log, i) => (
          <div key={i} className="text-[12px] font-mono text-slate-300/90">
            <span className={`mr-2 ${color(log.level)}`}>{log.level === 'warn' ? '⚠' : '●'}</span>
            <span className="text-slate-400">{new Date().toLocaleTimeString()} — </span>
            <span className="text-slate-200">{log.text}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Workspace() {
  const containerRef = useRef(null)
  const [left, setLeft] = useState(28) // % width
  const [right, setRight] = useState(28)
  const [heightTop, setHeightTop] = useState(56) // % height of editor in center column

  const onDragLeft = (e) => {
    const bounds = containerRef.current?.getBoundingClientRect()
    const clientX = e.touches ? e.touches[0].clientX : e.clientX
    if (!bounds) return
    const pct = ((clientX - bounds.left) / bounds.width) * 100
    const min = 18
    const max = 50
    setLeft(Math.min(max, Math.max(min, pct)))
  }
  const onDragRight = (e) => {
    const bounds = containerRef.current?.getBoundingClientRect()
    const clientX = e.touches ? e.touches[0].clientX : e.clientX
    if (!bounds) return
    const pct = ((bounds.right - clientX) / bounds.width) * 100
    const min = 18
    const max = 50
    setRight(Math.min(max, Math.max(min, pct)))
  }
  const onDragMiddle = (e) => {
    const middle = document.getElementById('middle-col')
    const bounds = middle?.getBoundingClientRect()
    const clientY = e.touches ? e.touches[0].clientY : e.clientY
    if (!bounds) return
    const pct = ((clientY - bounds.top) / bounds.height) * 100
    const min = 30
    const max = 80
    setHeightTop(Math.min(max, Math.max(min, pct)))
  }

  return (
    <section className="relative">
      <div className="mx-auto max-w-[1400px] px-4 py-10 md:py-16">
        <div className="mb-4 flex items-center gap-2 text-slate-400 text-sm">
          <Sidebar size={16} /> Workspace shell demo
        </div>
        <div ref={containerRef} className="relative h-[640px] rounded-2xl border border-white/10 bg-white/[0.04] overflow-hidden shadow-[0_40px_120px_-40px_rgba(0,0,0,0.7)]">
          <div className="absolute inset-0 bg-[radial-gradient(800px_300px_at_10%_-20%,rgba(99,102,241,0.2),transparent_60%),radial-gradient(800px_300px_at_90%_-10%,rgba(56,189,248,0.18),transparent_60%)] opacity-60" />

          <div className="relative h-full w-full grid" style={{ gridTemplateColumns: `${left}% calc(${100 - left - right}% ) ${right}%` }}>
            {/* Left: Chat */}
            <div className="relative border-r border-white/10 bg-[#0f1218]/60 backdrop-blur-xl">
              <ChatPanel />
            </div>
            <Divider onDrag={onDragLeft} />

            {/* Middle: Editor split (top editor, bottom preview logs lite) */}
            <div id="middle-col" className="relative grid" style={{ gridTemplateRows: `${heightTop}% calc(${100 - heightTop}% )` }}>
              <div className="relative bg-[#0b0d12]">
                <CodeEditor />
              </div>
              <Divider onDrag={onDragMiddle} orientation="horizontal" />
              <div className="relative border-t border-white/10 bg-[#0b0d12]">
                <div className="p-3 text-[12px] text-slate-400">Inline diagnostics</div>
                <div className="px-3 pb-3">
                  <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-[12px] text-slate-300/90 font-mono">
                    <div className="flex items-center gap-2 mb-1 text-slate-400">
                      <Circle size={10} className="text-emerald-300" /> run glow active
                    </div>
                    <div>diff: + Added animated focus ring • - Removed harsh borders</div>
                  </div>
                </div>
              </div>
            </div>

            <Divider onDrag={onDragRight} />

            {/* Right: Run Stream */}
            <div className="relative border-l border-white/10 bg-[#0f1218]/60 backdrop-blur-xl">
              <RunStream />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
