"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Briefcase, Building2, Calendar, CheckCircle2, GraduationCap, MapPin } from "lucide-react";
import { content } from "@/lib/content";
import { durations, easeOut, fadeUp } from "@/lib/motion";
import { useReducedMotion } from "@/lib/useReducedMotion";

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // Vertical line draw animation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 60%"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section id="experience" className="relative px-5 py-20 md:px-8 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-site">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-16"
        >
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-label text-[rgb(var(--fg-muted))]">
            <span className="text-[rgb(var(--accent))]">05</span>
            <span>{"//"}</span>
            <span>Experience &amp; Education</span>
          </div>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[rgb(var(--foreground))] md:text-4xl">
            Career Timeline &amp; Academic Journey
          </h2>
          <p className="mt-3 max-w-xl text-sm md:text-base text-[rgb(var(--fg-muted))]">
            Proven track record in high-throughput backend services, distributed systems, and real-time collaboration platforms.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div ref={containerRef} className="relative pl-6 md:pl-10">
          {/* Static Background Track Line */}
          <div className="absolute left-[11px] top-3 bottom-3 w-[2px] bg-[rgb(var(--border))] md:left-[19px]" />

          {/* Animated Dynamic Scroll Indicator Line */}
          {!prefersReducedMotion && (
            <motion.div
              style={{ scaleY, transformOrigin: "top" }}
              className="absolute left-[11px] top-3 bottom-3 w-[2px] bg-gradient-to-b from-[rgb(var(--accent))] via-[rgb(var(--accent))] to-transparent md:left-[19px]"
            />
          )}

          {/* Timeline Nodes */}
          <div className="space-y-12">
            {content.experience.map((item, idx) => {
              const isWork = item.type === "work";
              const Icon = isWork ? Briefcase : GraduationCap;

              return (
                <motion.div
                  key={`${item.organization}-${item.roleOrDegree}`}
                  initial={{ opacity: 0, x: prefersReducedMotion ? 0 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: prefersReducedMotion ? 0.01 : durations.base,
                    delay: prefersReducedMotion ? 0 : idx * 0.1,
                    ease: easeOut,
                  }}
                  className="relative group"
                >
                  {/* Timeline Dot Icon */}
                  <div className="absolute -left-[30px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full border-2 border-[rgb(var(--bg))] bg-[rgb(var(--bg-elevated))] text-[rgb(var(--accent))] shadow-sm transition-transform duration-300 group-hover:scale-125 md:-left-[38px] md:h-8 md:w-8">
                    <Icon className="h-3 w-3 md:h-4 md:w-4" />
                  </div>

                  {/* Card Body */}
                  <div className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--bg-elevated))] p-6 shadow-sm transition-all duration-300 group-hover:border-[rgb(var(--border-hover))] group-hover:shadow-[0_16px_40px_rgba(0,0,0,0.06)] md:p-8">
                    {/* Header: Role & Organization */}
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[rgb(var(--accent))]">
                            {isWork ? "Professional Experience" : "Academic Degree"}
                          </span>
                        </div>
                        <h3 className="mt-1 text-xl font-bold tracking-tight text-[rgb(var(--foreground))] md:text-2xl">
                          {item.roleOrDegree}
                        </h3>
                        <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[rgb(var(--fg-muted))]">
                          <span className="flex items-center gap-1 font-medium text-[rgb(var(--foreground))]">
                            <Building2 className="h-3.5 w-3.5 text-[rgb(var(--accent))]" />
                            {item.organization}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3.5 w-3.5" />
                            {item.location}
                          </span>
                        </div>
                      </div>

                      {/* Period Badge */}
                      <div className="inline-flex items-center gap-1.5 self-start rounded-full border border-[rgb(var(--border))] bg-[rgb(var(--bg))] px-3 py-1 font-mono text-xs font-medium text-[rgb(var(--fg-muted))] sm:self-center">
                        <Calendar className="h-3 w-3 text-[rgb(var(--accent))]" />
                        <span>{item.period}</span>
                      </div>
                    </div>

                    {/* Bullet Points */}
                    {item.bullets && item.bullets.length > 0 && (
                      <ul className="mt-5 space-y-2.5">
                        {item.bullets.map((bullet, bIdx) => (
                          <li
                            key={bIdx}
                            className="flex items-start gap-2.5 text-xs md:text-sm leading-relaxed text-[rgb(var(--fg-muted))]"
                          >
                            <CheckCircle2 className="mt-1 h-3.5 w-3.5 shrink-0 text-[rgb(var(--accent))]/70" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Tech Tags */}
                    {item.tags && item.tags.length > 0 && (
                      <div className="mt-6 flex flex-wrap gap-1.5 pt-4 border-t border-[rgb(var(--border))]">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md border border-[rgb(var(--border))] bg-[rgb(var(--bg))] px-2.5 py-1 font-mono text-[11px] font-medium text-[rgb(var(--fg-muted))]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
