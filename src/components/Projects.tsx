"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "./ScrollReveal";

/* ─── Architecture Diagram ──────────────────────────── */

interface DNode { id: string; label: string; x: number; y: number; accent?: boolean; }
interface DEdge { from: string; to: string; }

function ArchDiagram({ nodes, edges, w = 600, h = 200 }: { nodes: DNode[]; edges: DEdge[]; w?: number; h?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const get = (id: string) => nodes.find((n) => n.id === id)!;
  return (
    <svg ref={ref} viewBox={`0 0 ${w} ${h}`} className="w-full h-auto" style={{ maxHeight: 220 }}>
      {edges.map((e, i) => {
        const f = get(e.from), t = get(e.to);
        return (
          <g key={`e${i}`}>
            <motion.line x1={f.x} y1={f.y} x2={t.x} y2={t.y} stroke="#1a1a2e" strokeWidth="1"
              initial={{ pathLength: 0 }} animate={inView ? { pathLength: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.06 }} />
            <motion.line x1={f.x} y1={f.y} x2={t.x} y2={t.y} stroke="#10b981" strokeWidth="0.5"
              strokeDasharray="3 10" opacity={0.4}
              animate={inView ? { strokeDashoffset: [80, 0] } : {}}
              transition={{ duration: 5, delay: 0.4, repeat: Infinity, ease: "linear" }} />
          </g>
        );
      })}
      {nodes.map((n, i) => (
        <motion.g key={n.id} initial={{ opacity: 0, scale: 0.5 }} animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.3, delay: 0.15 + i * 0.04, type: "spring", stiffness: 200 }}>
          <rect x={n.x - 38} y={n.y - 11} width={76} height={22} rx={4}
            fill={n.accent ? "#10b98110" : "#0d0d14"} stroke={n.accent ? "#10b981" : "#1a1a2e"} strokeWidth="1" />
          <text x={n.x} y={n.y + 3} textAnchor="middle" fill={n.accent ? "#10b981" : "#71717a"}
            fontSize="8" fontFamily="var(--font-mono)">{n.label}</text>
        </motion.g>
      ))}
    </svg>
  );
}

/* ─── Project Data ──────────────────────────────────── */

const projects = [
  {
    id: "chatops", num: "01",
    title: "Multi-Agent ChatOps Engine",
    desc: "A control plane that turns Mattermost threads into a multi-agent runtime — routing intents to specialized agents, tools, and runbooks.",
    metrics: [
      { label: "TIME SAVED", value: "~8h/wk" },
      { label: "AGENTS", value: "5" },
      { label: "TOOLS", value: "12+" },
      { label: "LATENCY", value: "<1.2s" },
    ],
    layers: ["Input: Mattermost Webhook", "Reasoning: Gemini Intent Router", "Execution: n8n Agent Dispatch", "Persistence: Pinecone + MySQL", "Observability: Trace Logging"],
    stack: ["Python", "n8n", "Gemini", "Pinecone", "Mattermost", "Docker"],
    terminal: {
      title: "~/ORCHESTRATION", lines: [
        "$ chatops dispatch --intent=db.query.optimize",
        "→ agent=dbops · tools=[mysql.explain, schema.fetch]",
        "→ trace #a7f2 · 1.2s · status=resolved",
      ]
    },
    impact: "Replaced ~8h/week of manual DevOps across the team. Reduced avg resolution time by an order of magnitude.",
    github: "https://github.com/kishan-khodbhaya/ai-automation-workflows/tree/main/chatops-engine",
    diagram: {
      nodes: [
        { id: "user", label: "USER", x: 80, y: 60 },
        { id: "gw", label: "GATEWAY", x: 200, y: 30, accent: true },
        { id: "router", label: "ROUTER", x: 200, y: 100, accent: true },
        { id: "a1", label: "AGENT-A", x: 340, y: 30 },
        { id: "a2", label: "AGENT-B", x: 340, y: 80 },
        { id: "a3", label: "AGENT-C", x: 280, y: 160 },
        { id: "out", label: "OUTPUT", x: 480, y: 60, accent: true },
      ] as DNode[],
      edges: [
        { from: "user", to: "gw" }, { from: "user", to: "router" },
        { from: "gw", to: "a1" }, { from: "gw", to: "a2" },
        { from: "router", to: "a2" }, { from: "router", to: "a3" },
        { from: "a1", to: "out" }, { from: "a2", to: "out" },
      ] as DEdge[],
    },
  },
  {
    id: "voice", num: "02",
    title: "Autonomous GenAI Voice Agent",
    desc: "A fully automated voice system handling inbound calls end-to-end — qualifying leads, booking appointments, and dispatching confirmations with zero human operator.",
    metrics: [
      { label: "AUTOMATED", value: "100%" },
      { label: "LATENCY", value: "<2s" },
      { label: "INTEGRATIONS", value: "6" },
      { label: "CHANNELS", value: "3" },
    ],
    layers: ["Input: Twilio Inbound", "Reasoning: Gemini + Function Calling", "Execution: ElevenLabs TTS/STT", "Persistence: MySQL + Calendar", "Observability: Call Logging"],
    stack: ["Twilio", "ElevenLabs", "Gemini", "Google Calendar", "n8n", "MySQL"],
    terminal: {
      title: "~/VOICE-PIPELINE", lines: [
        "$ voice.inbound --caller=+1-XXX-XXXX",
        "→ stt=elevenlabs · llm=gemini · intent=schedule",
        "→ cal.book · slot=2025-03-15T10:00 · confirmed=true",
      ]
    },
    impact: "Eliminated 100% of manual call handling. Reduced lead response time from hours to real-time.",
    github: "https://github.com/kishan-khodbhaya/ai-automation-workflows/tree/main/voice-agent",
    diagram: {
      nodes: [
        { id: "call", label: "INBOUND", x: 80, y: 55, accent: true },
        { id: "stt", label: "STT", x: 200, y: 30 },
        { id: "llm", label: "GEMINI", x: 310, y: 55, accent: true },
        { id: "tts", label: "TTS", x: 200, y: 100 },
        { id: "tools", label: "TOOLS", x: 420, y: 30 },
        { id: "cal", label: "CALENDAR", x: 480, y: 100 },
        { id: "notify", label: "NOTIFY", x: 420, y: 160, accent: true },
      ] as DNode[],
      edges: [
        { from: "call", to: "stt" }, { from: "stt", to: "llm" },
        { from: "llm", to: "tts" }, { from: "tts", to: "call" },
        { from: "llm", to: "tools" }, { from: "tools", to: "cal" },
        { from: "cal", to: "notify" },
      ] as DEdge[],
    },
  },
  {
    id: "whatsapp", num: "03",
    title: "WhatsApp AI Lead Automation",
    desc: "A zero-cost intelligent communication system that auto-replies to leads 24/7, schedules follow-ups, and books appointments — managing 6 concurrent WhatsApp sessions.",
    metrics: [
      { label: "RESPONSE", value: "<5s" },
      { label: "SESSIONS", value: "6" },
      { label: "COST", value: "$0" },
      { label: "UPTIME", value: "24/7" },
    ],
    layers: ["Input: WhatsApp Web Polling", "Reasoning: Gemini AI + Knowledge Base", "Execution: Selenium Automation", "Persistence: MySQL Queue", "Observability: Session Monitoring"],
    stack: ["Python", "Selenium", "Gemini", "MySQL", "n8n", "Google Calendar"],
    terminal: {
      title: "~/WHATSAPP-ENGINE", lines: [
        "$ wa.scan --profiles=6 --mode=concurrent",
        "→ unread=3 · ai_reply=gemini · queue=mysql",
        "→ followup.schedule · lead=verified · slot=tomorrow",
      ]
    },
    impact: "Reduced lead response time from hours to seconds. Enabled 24/7 automated lead engagement at zero operational cost.",
    github: "https://github.com/kishan-khodbhaya/python-projects/tree/main/whatsapp-bot",
    diagram: {
      nodes: [
        { id: "wa", label: "WA WEB", x: 80, y: 55, accent: true },
        { id: "sel", label: "SELENIUM", x: 200, y: 30 },
        { id: "detect", label: "DETECT", x: 310, y: 55 },
        { id: "ai", label: "GEMINI", x: 420, y: 30, accent: true },
        { id: "kb", label: "KNOWLEDGE", x: 420, y: 100 },
        { id: "reply", label: "REPLY", x: 520, y: 55, accent: true },
        { id: "queue", label: "QUEUE", x: 310, y: 140 },
      ] as DNode[],
      edges: [
        { from: "wa", to: "sel" }, { from: "sel", to: "detect" },
        { from: "detect", to: "ai" }, { from: "detect", to: "kb" },
        { from: "ai", to: "reply" }, { from: "kb", to: "reply" },
        { from: "detect", to: "queue" },
      ] as DEdge[],
    },
  },
  {
    id: "cortex", num: "04",
    title: "Cortex — REST API Platform",
    desc: "Complete backend infrastructure for a live mobile application — 20+ API modules with JWT auth, PDF generation, email delivery, and automated certificate pipelines.",
    metrics: [
      { label: "ENDPOINTS", value: "20+" },
      { label: "UPTIME", value: "99.9%" },
      { label: "MODULES", value: "8" },
      { label: "LATENCY", value: "12ms" },
    ],
    layers: ["Input: Mobile + Admin Clients", "Reasoning: Route Middleware", "Execution: Flask Handlers", "Persistence: MySQL + AES Encryption", "Observability: Health Checks"],
    stack: ["Python", "Flask", "MySQL", "JWT", "Nginx", "Gunicorn"],
    terminal: {
      title: "~/CORTEX-API", lines: [
        "$ cortex.deploy --target=production --workers=4",
        "→ nginx=active · gunicorn=4w · mysql=connected",
        "→ health.check · status=200 · latency=12ms",
      ]
    },
    impact: "Designed, built, and deployed full production backend serving live mobile traffic with zero downtime.",
    github: "https://github.com/kishan-khodbhaya/python-projects/tree/main/cortex-backend-api",
    diagram: {
      nodes: [
        { id: "mob", label: "MOBILE", x: 80, y: 35 },
        { id: "adm", label: "ADMIN", x: 80, y: 115 },
        { id: "nginx", label: "NGINX", x: 220, y: 75, accent: true },
        { id: "flask", label: "FLASK", x: 360, y: 75, accent: true },
        { id: "jwt", label: "JWT", x: 360, y: 25 },
        { id: "mysql", label: "MYSQL", x: 490, y: 50, accent: true },
        { id: "utils", label: "UTILS", x: 490, y: 115 },
      ] as DNode[],
      edges: [
        { from: "mob", to: "nginx" }, { from: "adm", to: "nginx" },
        { from: "nginx", to: "flask" }, { from: "flask", to: "jwt" },
        { from: "flask", to: "mysql" }, { from: "flask", to: "utils" },
      ] as DEdge[],
    },
  },
];

/* ─── Case Study Card ───────────────────────────────── */

function CaseStudy({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <ScrollReveal delay={index * 0.08}>
      <div className="rounded-xl border border-[#1a1a2e] bg-[#0a0a10]/60 overflow-hidden">
        {/* ── Top: Architecture Diagram Panel ── */}
        <div className="border-b border-[#1a1a2e] bg-[#0a0a0f]" style={{ padding: "20px 24px 24px" }}>
          <div className="flex items-center justify-between" style={{ marginBottom: 16 }}>
            <span className="text-xs font-mono text-[#3f3f46] tracking-wider">P·{project.num} · ARCHITECTURE</span>
            <div className="flex items-center" style={{ gap: 6 }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
              <span className="text-[10px] font-mono text-[#3f3f46]">LIVE TRACE</span>
            </div>
          </div>
          <ArchDiagram nodes={project.diagram.nodes} edges={project.diagram.edges} />
        </div>

        {/* ── Body: Two-column content ── */}
        <div style={{ padding: 24 }}>
          {/* Title + link */}
          <div className="flex items-start justify-between" style={{ marginBottom: 16 }}>
            <h3 className="text-xl sm:text-2xl font-bold text-[#e4e4e7]">{project.title}</h3>
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              className="flex-shrink-0 text-xs font-mono text-[#3f3f46] hover:text-[#10b981] transition-colors tracking-wider flex items-center" style={{ gap: 6 }}>
              SOURCE
              <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3 h-3">
                <path d="M2 10L10 2M10 2H4M10 2v6" />
              </svg>
            </a>
          </div>

          <p className="text-sm text-[#a1a1aa] leading-relaxed" style={{ marginBottom: 24 }}>{project.desc}</p>

          {/* ── Operational Metrics Row ── */}
          <div className="grid grid-cols-2 sm:grid-cols-4" style={{ gap: 12, marginBottom: 24 }}>
            {project.metrics.map((m) => (
              <div key={m.label} className="rounded-lg border border-[#1a1a2e] bg-[#0d0d14]/60" style={{ padding: "12px 16px" }}>
                <span className="text-[10px] font-mono text-[#3f3f46] tracking-wider block" style={{ marginBottom: 4 }}>{m.label}</span>
                <span className="text-lg font-semibold text-[#e4e4e7]">{m.value}</span>
              </div>
            ))}
          </div>

          {/* ── Two-column: Layers + Terminal ── */}
          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 24 }}>
            {/* Architecture Layers */}
            <div>
              <span className="text-[10px] font-mono text-[#3f3f46] tracking-wider block" style={{ marginBottom: 12 }}>
                ARCHITECTURE LAYERS
              </span>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {project.layers.map((layer, i) => {
                  const [label, detail] = layer.split(": ");
                  return (
                    <div key={i} className="flex items-start text-sm" style={{ gap: 8 }}>
                      <span className="text-[#10b981] font-mono text-xs flex-shrink-0" style={{ minWidth: 80 }}>{label}</span>
                      <span className="text-[#71717a]">{detail}</span>
                    </div>
                  );
                })}
              </div>

              {/* Tech stack */}
              <div className="flex flex-wrap" style={{ gap: 6, marginTop: 16 }}>
                {project.stack.map((t) => (
                  <span key={t} className="text-[11px] font-mono text-[#71717a] bg-[#0d0d14] border border-[#1a1a2e] rounded" style={{ padding: "2px 10px" }}>{t}</span>
                ))}
              </div>

              {/* Impact */}
              <span className="text-[10px] font-mono text-[#3f3f46] tracking-wider block" style={{ marginBottom: 8, marginTop: 20 }}>
                OPERATIONAL IMPACT
              </span>
              <p className="text-sm text-[#a1a1aa] leading-relaxed">{project.impact}</p>
            </div>

            {/* Terminal */}
            <div className="rounded-lg border border-[#1a1a2e] bg-[#0a0a0f] overflow-hidden self-start">
              <div className="flex items-center border-b border-[#1a1a2e]" style={{ padding: "10px 16px", gap: 8 }}>
                <div className="flex" style={{ gap: 6 }}>
                  <span className="rounded-full bg-[#ff5f57]/60" style={{ width: 8, height: 8 }} />
                  <span className="rounded-full bg-[#febc2e]/60" style={{ width: 8, height: 8 }} />
                  <span className="rounded-full bg-[#28c840]/60" style={{ width: 8, height: 8 }} />
                </div>
                <span className="text-[10px] font-mono text-[#3f3f46] tracking-wider">{project.terminal.title}</span>
              </div>
              <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 6 }}>
                {project.terminal.lines.map((line, i) => (
                  <p key={i} className={`text-xs font-mono leading-relaxed ${line.startsWith("→") ? "text-[#10b981]/70" : "text-[#a1a1aa]"}`}>
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

/* ─── Projects Section ──────────────────────────────── */

export default function Projects() {
  return (
    <section id="projects" className="relative" style={{ padding: "96px 0" }}>
      <div className="site-container">
        {/* Header — 60/40 split */}
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr]" style={{ gap: 32, marginBottom: 64 }}>
          <div>
            <ScrollReveal>
              <div className="flex items-center" style={{ gap: 12, marginBottom: 32 }}>
                <span className="text-sm font-mono text-[#10b981]">02</span>
                <span className="text-xs font-mono text-[#71717a] tracking-widest">/</span>
                <span className="text-xs font-mono text-[#71717a] tracking-widest uppercase">Featured Work</span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#e4e4e7] leading-[1.15]">
                Production Systems & Engineering Case Studies
              </h2>
            </ScrollReveal>
          </div>
          <div className="flex items-end">
            <ScrollReveal delay={0.15}>
              <p className="text-sm text-[#a1a1aa] leading-relaxed">
                Client work is under NDA. Each project below is documented as a production system —
                its topology, trade-offs, and the operational impact it shipped.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          {projects.map((p, i) => <CaseStudy key={p.id} project={p} index={i} />)}
        </div>

        {/* View More */}
        <ScrollReveal delay={0.2}>
          <div style={{ display: "flex", justifyContent: "center", marginTop: 48 }}>
            <a
              href="https://github.com/kishan-khodbhaya"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 32px", borderRadius: 8, fontSize: 14, fontWeight: 500, border: "1px solid #1a1a2e", color: "#a1a1aa", background: "transparent", textDecoration: "none", transition: "all 0.2s" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#10b981"; e.currentTarget.style.color = "#10b981"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#1a1a2e"; e.currentTarget.style.color = "#a1a1aa"; }}
            >
              View More on GitHub
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
