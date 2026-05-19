"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "./ScrollReveal";

/* Mini topology visualization for the right side */
function SystemTopology() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const nodes = [
    { id: "llm", label: "LLM", x: 160, y: 30, accent: true },
    { id: "orch", label: "ORCHESTRATOR", x: 160, y: 90, accent: true },
    { id: "tool1", label: "TOOL-A", x: 60, y: 150 },
    { id: "tool2", label: "TOOL-B", x: 160, y: 150 },
    { id: "tool3", label: "TOOL-C", x: 260, y: 150 },
    { id: "db", label: "STATE", x: 110, y: 210, accent: true },
    { id: "out", label: "OUTPUT", x: 210, y: 210 },
  ];
  const edges = [
    [0,1],[1,2],[1,3],[1,4],[2,5],[3,5],[4,6],[3,6],
  ];

  return (
    <svg ref={ref} viewBox="0 0 320 250" className="w-full h-auto" style={{ maxHeight: 260 }}>
      {edges.map(([fi, ti], i) => {
        const f = nodes[fi], t = nodes[ti];
        return (
          <g key={`e${i}`}>
            <motion.line x1={f.x} y1={f.y} x2={t.x} y2={t.y} stroke="#1a1a2e" strokeWidth="1"
              initial={{ pathLength: 0 }} animate={inView ? { pathLength: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.06 }} />
            <motion.line x1={f.x} y1={f.y} x2={t.x} y2={t.y} stroke="#10b981" strokeWidth="0.5"
              strokeDasharray="3 9" opacity={0.4}
              animate={inView ? { strokeDashoffset: [60, 0] } : {}}
              transition={{ duration: 4, delay: 0.5, repeat: Infinity, ease: "linear" }} />
          </g>
        );
      })}
      {nodes.map((n, i) => (
        <motion.g key={n.id} initial={{ opacity: 0, scale: 0.5 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.2 + i * 0.05, type: "spring", stiffness: 200 }}>
          <rect x={n.x - 40} y={n.y - 12} width={80} height={24} rx={4}
            fill={n.accent ? "#10b98110" : "#0d0d14"} stroke={n.accent ? "#10b981" : "#1a1a2e"} strokeWidth="1" />
          <text x={n.x} y={n.y + 4} textAnchor="middle" fill={n.accent ? "#10b981" : "#71717a"}
            fontSize="8" fontFamily="var(--font-mono)">{n.label}</text>
        </motion.g>
      ))}
    </svg>
  );
}

const capabilities = [
  {
    tag: "ORCH", title: "AI Agent Orchestration",
    desc: "Multi-agent systems with planners, tool callers, and memory layers — coordinated through deterministic routers and graph-based control flow.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>,
  },
  {
    tag: "VOICE", title: "Voice AI Systems",
    desc: "Production-ready voice pipelines: low-latency STT, streaming LLM, function-calling, and TTS for autonomous inbound/outbound conversations.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" /><path d="M19 10v2a7 7 0 01-14 0v-2M12 19v4M8 23h8" /></svg>,
  },
  {
    tag: "MSG", title: "WhatsApp Automation",
    desc: "End-to-end conversational pipelines on the WhatsApp Business API — lead capture, qualification, routing, and CRM sync at scale.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" /></svg>,
  },
  {
    tag: "API", title: "REST API Infrastructure",
    desc: "Flask/FastAPI services with auth, rate-limits, queues, observability, and clean contracts — built to be deployed, versioned, and trusted.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path d="M16 18l2-2-2-2M8 18l-2-2 2-2M14 4l-4 16" /></svg>,
  },
  {
    tag: "OPS", title: "DevOps Systems",
    desc: "Containerized deployments, CI/CD pipelines, secrets management, log aggregation, and zero-downtime release strategies.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path d="M22 12h-6l-2 3h-4l-2-3H2" /><path d="M5.45 5.11L2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6l-3.45-6.89A2 2 0 0016.76 4H7.24a2 2 0 00-1.79 1.11z" /></svg>,
  },
  {
    tag: "AUTO", title: "Business Process Automation",
    desc: "n8n + custom code wiring CRMs, sheets, queues, and LLMs into closed-loop workflows that replace human-driven operations.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path d="M12 22V8M5 12H2a10 10 0 0020 0h-3" /><circle cx="12" cy="5" r="3" /></svg>,
  },
];

export default function About() {
  return (
    <section id="about" className="relative" style={{ padding: "96px 0" }}>
      <div className="site-container">
        {/* ── Header Row ── */}
        <ScrollReveal>
          <div className="flex items-center gap-3" style={{ marginBottom: 48 }}>
            <span className="text-sm font-mono text-[#10b981]">01</span>
            <span className="text-xs font-mono text-[#71717a] tracking-widest">/</span>
            <span className="text-xs font-mono text-[#71717a] tracking-widest uppercase">About</span>
          </div>
        </ScrollReveal>

        {/* ── 60/40 Split: Narrative + Topology ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] items-start" style={{ gap: 64, marginBottom: 64 }}>
          <div>
            <ScrollReveal delay={0.1}>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#e4e4e7] leading-[1.15]" style={{ marginBottom: 32 }}>
                Engineering the layer between intelligence and operations.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="text-[#a1a1aa] text-base leading-relaxed" style={{ marginBottom: 32 }}>
                I design and ship production AI systems — orchestration layers, voice agents,
                automation pipelines, and the backend infrastructure that holds them together.
                The goal isn&apos;t demos. It&apos;s services that run, observe themselves, and quietly
                remove manual work from a business.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <ul style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {["Production-grade systems engineering", "Orchestration & control-flow architecture",
                  "Backend automation infrastructure", "Observability, evals, and graceful failure modes"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-sm text-[#a1a1aa]" style={{ gap: 12 }}>
                    <span className="flex-shrink-0" style={{ width: 16, height: 1, background: "#10b981" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>

          {/* Right side: Animated topology */}
          <ScrollReveal delay={0.2}>
            <div className="rounded-xl border border-[#1a1a2e] bg-[#0a0a0f]/80" style={{ padding: 24 }}>
              <div className="flex items-center justify-between" style={{ marginBottom: 16 }}>
                <span className="text-[10px] font-mono text-[#3f3f46] tracking-wider">SYSTEM TOPOLOGY</span>
                <div className="flex items-center" style={{ gap: 6 }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
                  <span className="text-[10px] font-mono text-[#3f3f46]">ACTIVE</span>
                </div>
              </div>
              <SystemTopology />
            </div>
          </ScrollReveal>
        </div>

        {/* ── Capability Cards: 3×2 Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: 12 }}>
          {capabilities.map((cap, i) => (
            <ScrollReveal key={cap.title} delay={0.1 + i * 0.05}>
              <div className="group relative rounded-xl border border-[#1a1a2e] bg-[#0a0a10]/60 hover:border-[#1a1a2e]/80 hover:bg-[#0d0d14]/80 transition-all duration-300 h-full"
                style={{ padding: 20 }}>
                <div className="flex items-start justify-between" style={{ marginBottom: 16 }}>
                  <div className="rounded-lg border border-[#1a1a2e] bg-[#0d0d14] flex items-center justify-center text-[#a1a1aa] group-hover:text-[#10b981] group-hover:border-[#10b981]/20 transition-colors"
                    style={{ width: 36, height: 36 }}>
                    {cap.icon}
                  </div>
                  <span className="text-[10px] font-mono text-[#3f3f46] tracking-widest">{cap.tag}</span>
                </div>
                <h3 className="text-sm font-semibold text-[#e4e4e7]" style={{ marginBottom: 8 }}>{cap.title}</h3>
                <p className="text-xs text-[#71717a] leading-relaxed">{cap.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
