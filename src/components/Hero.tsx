"use client";

import { motion } from "framer-motion";
import GridBackground from "./GridBackground";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* ── Background Layer ── */}
      <GridBackground />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.06)_0%,transparent_50%)]" />

      {/* ── Mid Layer: Floating topology nodes ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[
          { x: "15%", y: "25%", delay: 0, size: 4 },
          { x: "80%", y: "20%", delay: 1.5, size: 3 },
          { x: "70%", y: "70%", delay: 0.8, size: 5 },
          { x: "25%", y: "75%", delay: 2, size: 3 },
          { x: "50%", y: "15%", delay: 0.5, size: 4 },
          { x: "90%", y: "50%", delay: 1.2, size: 3 },
        ].map((node, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#10b981]"
            style={{ left: node.x, top: node.y, width: node.size, height: node.size }}
            animate={{ opacity: [0.1, 0.4, 0.1], scale: [1, 1.5, 1] }}
            transition={{ duration: 4, delay: node.delay, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
        <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.06 }}>
          <motion.line x1="15%" y1="25%" x2="50%" y2="15%" stroke="#10b981" strokeWidth="0.5"
            strokeDasharray="4 8" animate={{ strokeDashoffset: [0, -100] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }} />
          <motion.line x1="50%" y1="15%" x2="80%" y2="20%" stroke="#10b981" strokeWidth="0.5"
            strokeDasharray="4 8" animate={{ strokeDashoffset: [0, -100] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }} />
          <motion.line x1="80%" y1="20%" x2="70%" y2="70%" stroke="#10b981" strokeWidth="0.5"
            strokeDasharray="4 8" animate={{ strokeDashoffset: [0, -100] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }} />
          <motion.line x1="25%" y1="75%" x2="70%" y2="70%" stroke="#06b6d4" strokeWidth="0.5"
            strokeDasharray="4 8" animate={{ strokeDashoffset: [0, -100] }}
            transition={{ duration: 9, repeat: Infinity, ease: "linear" }} />
        </svg>
      </div>

      {/* ── Foreground: Content ── */}
      <div className="relative z-10 site-container" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
        {/* Status badge */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 32, padding: "6px 16px", borderRadius: 9999, border: "1px solid #1a1a2e", background: "rgba(10,10,16,0.6)" }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#10b981" }} className="animate-pulse" />
          <span style={{ fontSize: 12, color: "#a1a1aa", letterSpacing: "0.05em", fontFamily: "var(--font-mono)" }}>STAR EMPLOYEE</span>
        </motion.div>

        {/* Name */}
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 700, letterSpacing: "-0.02em", color: "#e4e4e7", marginBottom: 16, lineHeight: 1.1 }}>
          Kishan Khodbhaya
        </motion.h1>

        {/* Title */}
        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ fontSize: "clamp(1.1rem, 2vw, 1.25rem)", color: "#10b981", fontWeight: 500, letterSpacing: "0.02em", marginBottom: 24 }}>
          AI Automation Engineer & Python Backend Developer
        </motion.p>

        {/* Description */}
        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.125rem)", color: "#a1a1aa", maxWidth: 560, marginLeft: "auto", marginRight: "auto", lineHeight: 1.7, marginBottom: 32, textAlign: "center" }}>
          I build AI-driven automation systems that replace manual operations with intelligent workflows using AI agents, n8n, and Python.
        </motion.p>

        {/* Micro-status row */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 24, marginBottom: 32, fontSize: 12, fontFamily: "var(--font-mono)", color: "#3f3f46" }}>
          <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#10b981" }} />systems: 4 deployed
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#06b6d4" }} />agents: 5 active
          </span>
          <span className="hidden sm:flex" style={{ alignItems: "center", gap: 6 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#a78bfa" }} />apis: 20+ shipped
          </span>
        </motion.div>

        {/* CTA Buttons — all outlined, consistent sizing */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: 12 }}>

          {/* View Projects — green outline */}
          <a href="#projects"
            style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 24px", borderRadius: 8, fontSize: 14, fontWeight: 500, border: "1px solid #10b981", color: "#10b981", background: "transparent", textDecoration: "none", transition: "all 0.2s" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(16,185,129,0.1)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}>
            View Projects
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </a>

          {/* GitHub — gray outline with icon */}
          <a href="https://github.com/kishan-khodbhaya" target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 24px", borderRadius: 8, fontSize: 14, fontWeight: 500, border: "1px solid #1a1a2e", color: "#a1a1aa", background: "transparent", textDecoration: "none", transition: "all 0.2s" }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#2a2a40"; e.currentTarget.style.color = "#e4e4e7"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#1a1a2e"; e.currentTarget.style.color = "#a1a1aa"; }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" /></svg>
            GitHub
          </a>

          {/* LinkedIn — gray outline with icon */}
          <a href="https://linkedin.com/in/kishan-khodbhaya" target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 24px", borderRadius: 8, fontSize: 14, fontWeight: 500, border: "1px solid #1a1a2e", color: "#a1a1aa", background: "transparent", textDecoration: "none", transition: "all 0.2s" }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#2a2a40"; e.currentTarget.style.color = "#e4e4e7"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#1a1a2e"; e.currentTarget.style.color = "#a1a1aa"; }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" /></svg>
            LinkedIn
          </a>

          {/* Resume — gray outline with icon */}
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 24px", borderRadius: 8, fontSize: 14, fontWeight: 500, border: "1px solid #1a1a2e", color: "#a1a1aa", background: "transparent", textDecoration: "none", transition: "all 0.2s" }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#2a2a40"; e.currentTarget.style.color = "#e4e4e7"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#1a1a2e"; e.currentTarget.style.color = "#a1a1aa"; }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg>
            Resume
          </a>
        </motion.div>

        {/* Scroll indicator with text */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
          style={{ marginTop: 64, display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3f3f46" strokeWidth="1.5">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </motion.div>
          <span style={{ fontSize: 10, fontFamily: "var(--font-mono)", color: "#3f3f46", letterSpacing: "0.1em" }}>SCROLL TO EXPLORE</span>
        </motion.div>
      </div>
    </section>
  );
}
