"use client";

import { useRef, useEffect } from "react";

export default function GridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let w: number, h: number;
    const spacing = 50;
    const pulses: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
    }[] = [];

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const spawnPulse = () => {
      const horizontal = Math.random() > 0.5;
      if (horizontal) {
        const row = Math.floor(Math.random() * (h / spacing)) * spacing;
        pulses.push({ x: 0, y: row, vx: 1.5 + Math.random(), vy: 0, life: 1 });
      } else {
        const col = Math.floor(Math.random() * (w / spacing)) * spacing;
        pulses.push({ x: col, y: 0, vx: 0, vy: 1.5 + Math.random(), life: 1 });
      }
    };

    let frame = 0;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      // Draw grid dots
      ctx.fillStyle = "rgba(255,255,255,0.04)";
      for (let x = 0; x < w; x += spacing) {
        for (let y = 0; y < h; y += spacing) {
          ctx.beginPath();
          ctx.arc(x, y, 1, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Draw grid lines
      ctx.strokeStyle = "rgba(255,255,255,0.015)";
      ctx.lineWidth = 0.5;
      for (let x = 0; x < w; x += spacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += spacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      // Spawn pulses periodically
      frame++;
      if (frame % 60 === 0 && pulses.length < 8) spawnPulse();

      // Draw signal pulses
      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 0.002;

        if (p.x > w || p.y > h || p.life <= 0) {
          pulses.splice(i, 1);
          continue;
        }

        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, 30);
        gradient.addColorStop(0, `rgba(16,185,129,${0.4 * p.life})`);
        gradient.addColorStop(1, "rgba(16,185,129,0)");
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 30, 0, Math.PI * 2);
        ctx.fill();

        // Trail
        const trailGrad = ctx.createLinearGradient(
          p.x - p.vx * 40,
          p.y - p.vy * 40,
          p.x,
          p.y
        );
        trailGrad.addColorStop(0, "rgba(16,185,129,0)");
        trailGrad.addColorStop(1, `rgba(16,185,129,${0.15 * p.life})`);
        ctx.strokeStyle = trailGrad;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(p.x - p.vx * 40, p.y - p.vy * 40);
        ctx.lineTo(p.x, p.y);
        ctx.stroke();
      }

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  );
}
