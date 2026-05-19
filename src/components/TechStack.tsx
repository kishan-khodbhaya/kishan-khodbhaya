"use client";

import ScrollReveal from "./ScrollReveal";

const layers = [
  {
    layer: "AI RUNTIME",
    color: "#10b981",
    items: [
      { name: "Google Gemini", role: "Primary LLM" },
      { name: "OpenAI", role: "Fallback LLM" },
      { name: "Pinecone", role: "Vector Store" },
      { name: "RAG", role: "Context Retrieval" },
      { name: "Multi-Agent Systems", role: "Orchestration" },
      { name: "Tool/Function Calling", role: "API Invocation" },
    ],
  },
  {
    layer: "AUTOMATION",
    color: "#06b6d4",
    items: [
      { name: "n8n", role: "Workflow Engine" },
      { name: "Selenium", role: "Browser Automation" },
      { name: "Agentic Workflows", role: "Autonomous Pipelines" },
      { name: "Webhook Design", role: "Event Triggers" },
      { name: "Prompt Engineering", role: "LLM Control" },
    ],
  },
  {
    layer: "BACKEND",
    color: "#a78bfa",
    items: [
      { name: "Python", role: "Primary Language" },
      { name: "Flask", role: "Web Framework" },
      { name: "FastAPI", role: "Async Framework" },
      { name: "REST APIs", role: "Interface Layer" },
      { name: "JWT", role: "Authentication" },
      { name: "Data Contracts", role: "Validation" },
    ],
  },
  {
    layer: "DATA",
    color: "#f59e0b",
    items: [
      { name: "MySQL", role: "Primary Database" },
      { name: "SQL Optimization", role: "Performance" },
      { name: "Schema Design", role: "Data Modeling" },
      { name: "Indexing", role: "Query Speed" },
    ],
  },
  {
    layer: "INFRASTRUCTURE",
    color: "#ef4444",
    items: [
      { name: "Docker", role: "Containers" },
      { name: "Nginx", role: "Reverse Proxy" },
      { name: "Ubuntu/systemd", role: "Server OS" },
      { name: "Cloudflare", role: "CDN/DNS" },
      { name: "Git", role: "Version Control" },
      { name: "Gunicorn", role: "WSGI Server" },
    ],
  },
  {
    layer: "COMMUNICATION",
    color: "#ec4899",
    items: [
      { name: "Twilio", role: "Voice/SMS" },
      { name: "ElevenLabs", role: "TTS/STT" },
      { name: "WhatsApp API", role: "Messaging" },
      { name: "Telegram Bot API", role: "Bots" },
      { name: "Google Calendar", role: "Scheduling" },
      { name: "Mattermost", role: "ChatOps" },
    ],
  },
];

export default function TechStack() {
  return (
    <section id="stack" className="relative" style={{ padding: "96px 0" }}>
      <div className="site-container">
        {/* ── Header: 60/40 split ── */}
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr]" style={{ gap: 32, marginBottom: 64 }}>
          <div>
            <ScrollReveal>
              <div className="flex items-center" style={{ gap: 12, marginBottom: 32 }}>
                <span className="text-sm font-mono text-[#10b981]">04</span>
                <span className="text-xs font-mono text-[#71717a] tracking-widest">/</span>
                <span className="text-xs font-mono text-[#71717a] tracking-widest uppercase">Infrastructure</span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#e4e4e7] leading-[1.15]">
                Stack Architecture
              </h2>
            </ScrollReveal>
          </div>
          <div className="flex items-end">
            <ScrollReveal delay={0.15}>
              <p className="text-sm text-[#a1a1aa] leading-relaxed">
                Organized by system layer — from AI runtime to infrastructure. Each tool is chosen for production reliability, not trend adoption.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* ── Architecture Layers ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: 16 }}>
          {layers.map((layer, i) => (
            <ScrollReveal key={layer.layer} delay={0.08 + i * 0.06}>
              <div className="rounded-xl border border-[#1a1a2e] bg-[#0a0a10]/40 h-full" style={{ padding: 24 }}>
                {/* Layer header */}
                <div className="flex items-center" style={{ gap: 8, marginBottom: 20 }}>
                  <div className="rounded-full" style={{ width: 6, height: 6, backgroundColor: layer.color }} />
                  <span className="text-xs font-mono tracking-widest" style={{ color: layer.color }}>{layer.layer}</span>
                </div>

                {/* Items with roles */}
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {layer.items.map((item) => (
                    <div key={item.name} className="flex items-baseline justify-between">
                      <span className="text-sm text-[#e4e4e7]">{item.name}</span>
                      <span className="text-[10px] font-mono text-[#3f3f46] tracking-wider">{item.role}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
