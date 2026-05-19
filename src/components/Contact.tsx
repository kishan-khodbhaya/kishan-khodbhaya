"use client";

import ScrollReveal from "./ScrollReveal";

const channels = [
  {
    label: "Email",
    value: "khodbhaya1843@gmail.com",
    href: "mailto:khodbhaya1843@gmail.com",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>,
  },
  {
    label: "LinkedIn",
    value: "kishan-khodbhaya",
    href: "https://linkedin.com/in/kishan-khodbhaya",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" /></svg>,
  },
  {
    label: "GitHub",
    value: "kishan-khodbhaya",
    href: "https://github.com/kishan-khodbhaya",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" /></svg>,
  },
  {
    label: "Resume",
    value: "Download PDF",
    href: "/resume.pdf",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative" style={{ padding: "96px 0 0" }}>
      <div className="site-container">
        {/* ── Header ── */}
        <ScrollReveal>
          <div className="flex items-center" style={{ gap: 12, marginBottom: 48 }}>
            <span className="text-sm font-mono text-[#10b981]">05</span>
            <span className="text-xs font-mono text-[#71717a] tracking-widest">/</span>
            <span className="text-xs font-mono text-[#71717a] tracking-widest uppercase">Contact</span>
          </div>
        </ScrollReveal>

        {/* ── Two-column: Narrative + Channels ── */}
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr]" style={{ gap: 64 }}>
          {/* Left: Narrative */}
          <div>
            <ScrollReveal delay={0.1}>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#e4e4e7] leading-[1.15]" style={{ marginBottom: 24 }}>
                Let&apos;s build systems that run themselves.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <p className="text-base text-[#a1a1aa] leading-relaxed" style={{ marginBottom: 32 }}>
                Open to AI automation engineering roles, consulting on n8n/LLM automation systems,
                and technical leadership positions. I specialize in turning manual business operations
                into autonomous, self-observing workflows.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="rounded-xl border border-[#1a1a2e] bg-[#0a0a10]/40" style={{ padding: 20 }}>
                <span className="text-[10px] font-mono text-[#3f3f46] tracking-wider block" style={{ marginBottom: 12 }}>
                  CURRENTLY FOCUSED ON
                </span>
                <ul style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {[
                    "AI orchestration systems",
                    "Autonomous workflow infrastructure",
                    "Production automation platforms",
                    "Voice AI & conversational agents",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center text-sm text-[#a1a1aa]" style={{ gap: 8 }}>
                      <span className="flex-shrink-0" style={{ width: 16, height: 1, background: "#10b981" }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Contact channels */}
          <div>
            <ScrollReveal delay={0.2}>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {channels.map((ch) => (
                  <a
                    key={ch.label}
                    href={ch.href}
                    target={ch.href.startsWith("http") ? "_blank" : undefined}
                    rel={ch.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex items-center justify-between rounded-xl border border-[#1a1a2e] bg-[#0a0a10]/40 hover:border-[#2a2a40] hover:bg-[#0d0d14]/60 transition-all duration-200"
                    style={{ padding: "16px 20px" }}
                  >
                    <div className="flex items-center" style={{ gap: 12 }}>
                      <div className="text-[#71717a] group-hover:text-[#10b981] transition-colors">
                        {ch.icon}
                      </div>
                      <div>
                        <span className="text-xs font-mono text-[#3f3f46] tracking-wider block" style={{ marginBottom: 2 }}>{ch.label}</span>
                        <span className="text-sm text-[#e4e4e7]">{ch.value}</span>
                      </div>
                    </div>
                    <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5"
                      className="w-3.5 h-3.5 text-[#3f3f46] group-hover:text-[#10b981] transition-colors">
                      <path d="M2 10L10 2M10 2H4M10 2v6" />
                    </svg>
                  </a>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* ── Footer ── */}
        <div className="border-t border-[#1a1a2e]" style={{ marginTop: 96, padding: "32px 0" }}>
          <div className="flex items-center justify-center text-xs text-[#71717a] tracking-wide">
            <span>© 2026 Kishan Khodbhaya. All rights reserved</span>
          </div>
        </div>
      </div>
    </section>
  );
}
