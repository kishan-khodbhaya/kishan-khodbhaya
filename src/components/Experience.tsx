"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "./ScrollReveal";

const timeline = [
  {
    role: "R&D Head & Tech Lead",
    company: "VedikIn Solutions",
    period: "Feb 2025 — Jul 2025",
    location: "Gandhinagar, India",
    metrics: [
      { label: "TEAMS LED", value: "2" },
      { label: "AI INITIATIVES", value: "3" },
      { label: "CLIENTS", value: "US-based" },
    ],
    points: [
      "Led two parallel project teams across Python and automation workstreams",
      "Defined technical architecture for new AI initiatives and mentored junior developers",
      "Managed end-to-end delivery for US-based clients via Slack and video calls",
    ],
    icon: "⬡",
    active: true,
  },
  {
    role: "AI Automation Engineer & Backend Developer",
    company: "VedikIn Solutions",
    period: "Jan 2024 — Nov 2025",
    location: "Gandhinagar, India",
    metrics: [
      { label: "WORKFLOWS", value: "20+" },
      { label: "APIS SHIPPED", value: "20+" },
      { label: "AGENTS", value: "5" },
    ],
    points: [
      "Designed and deployed 20+ AI-integrated automation workflows in n8n",
      "Engineered 20+ REST APIs using Python/Flask with JWT auth and LLM-driven endpoints",
      "Implemented tool/function calling patterns enabling LLMs to invoke infrastructure APIs",
      "Integrated Pinecone vector database for RAG-based context retrieval",
    ],
    icon: "◆",
    active: false,
  },
  {
    role: "Data Analyst Intern",
    company: "Unified Mentor",
    period: "Feb 2026 — Present",
    location: "Remote",
    metrics: [
      { label: "FOCUS", value: "Data Pipelines" },
      { label: "TOOLS", value: "Python + SQL" },
    ],
    points: [
      "Analyzing datasets using Python and SQL for business reporting and data pipeline tasks",
    ],
    icon: "◇",
    active: false,
  },
];

function TimelineDot({ active }: { active: boolean }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <div ref={ref} className="relative flex items-center justify-center">
      <motion.div
        initial={{ scale: 0 }} animate={inView ? { scale: 1 } : {}}
        transition={{ duration: 0.3, type: "spring" }}
        className={`rounded-full border-2 ${active ? "border-[#10b981] bg-[#10b981]/20" : "border-[#1a1a2e] bg-[#0d0d14]"}`}
        style={{ width: 12, height: 12 }}
      />
      {active && (
        <motion.div
          initial={{ scale: 0.5, opacity: 0.5 }}
          animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="absolute rounded-full bg-[#10b981]/30"
          style={{ width: 12, height: 12 }}
        />
      )}
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="relative" style={{ padding: "96px 0" }}>
      <div className="site-container">
        {/* ── Header: 60/40 split ── */}
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr]" style={{ gap: 32, marginBottom: 64 }}>
          <div>
            <ScrollReveal>
              <div className="flex items-center" style={{ gap: 12, marginBottom: 32 }}>
                <span className="text-sm font-mono text-[#10b981]">03</span>
                <span className="text-xs font-mono text-[#71717a] tracking-widest">/</span>
                <span className="text-xs font-mono text-[#71717a] tracking-widest uppercase">Experience</span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#e4e4e7] leading-[1.15]">
                Engineering Timeline
              </h2>
            </ScrollReveal>
          </div>
          <div className="flex items-end">
            <ScrollReveal delay={0.15}>
              <div className="flex flex-wrap" style={{ gap: 16 }}>
                {[
                  { label: "SYSTEMS", val: "4 deployed" },
                  { label: "APIS", val: "20+ shipped" },
                  { label: "SAVED", val: "8h/week" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <span className="text-[10px] font-mono text-[#3f3f46] tracking-wider block" style={{ marginBottom: 4 }}>{s.label}</span>
                    <span className="text-sm font-semibold text-[#e4e4e7]">{s.val}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* ── Timeline ── */}
        <div className="relative">
          <div className="absolute top-2 bottom-2 bg-[#1a1a2e]" style={{ left: 5, width: 1 }} />

          <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
            {timeline.map((item, i) => (
              <ScrollReveal key={i} delay={0.1 + i * 0.08}>
                <div className="relative" style={{ paddingLeft: 40 }}>
                  {/* Dot */}
                  <div className="absolute top-1.5" style={{ left: 0 }}>
                    <TimelineDot active={item.active} />
                  </div>

                  {/* Content card */}
                  <div className="rounded-xl border border-[#1a1a2e] bg-[#0a0a10]/40" style={{ padding: 24 }}>
                    {/* Role + Company */}
                    <div className="flex flex-col sm:flex-row sm:items-baseline" style={{ gap: 8, marginBottom: 8 }}>
                      <h3 className="text-base font-semibold text-[#e4e4e7]">{item.role}</h3>
                      <span className="text-xs font-mono text-[#71717a]">— {item.company}</span>
                    </div>

                    <div className="flex items-center" style={{ gap: 12, marginBottom: 16 }}>
                      <span className="text-xs font-mono text-[#10b981]">{item.period}</span>
                      <span className="text-xs text-[#71717a]">{item.location}</span>
                    </div>

                    {/* Metrics row */}
                    <div className="flex flex-wrap" style={{ gap: 16, marginBottom: 16 }}>
                      {item.metrics.map((m) => (
                        <div key={m.label} className="rounded-lg border border-[#1a1a2e] bg-[#0d0d14]/60" style={{ padding: "8px 12px" }}>
                          <span className="text-[10px] font-mono text-[#3f3f46] tracking-wider block" style={{ marginBottom: 2 }}>{m.label}</span>
                          <span className="text-sm font-semibold text-[#e4e4e7]">{m.value}</span>
                        </div>
                      ))}
                    </div>

                    {/* Points */}
                    <ul style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                      {item.points.map((point, j) => (
                        <li key={j} className="text-sm text-[#a1a1aa] leading-relaxed flex" style={{ gap: 8 }}>
                          <span className="text-[#10b981] mt-0.5 flex-shrink-0">›</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
