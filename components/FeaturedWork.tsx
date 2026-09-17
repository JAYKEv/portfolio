"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Sparkles } from "lucide-react";
import { CometCard } from "@/components/ui/comet-card";
import { content } from "@/lib/content";
import { durations, easeOut, fadeUp } from "@/lib/motion";
import { useReducedMotion } from "@/lib/useReducedMotion";

export function FeaturedWork() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="work" className="relative px-5 py-20 md:px-8 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-site">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-14"
        >
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-label text-[rgb(var(--fg-muted))]">
            <span className="text-[rgb(var(--accent))]">01</span>
            <span>{"//"}</span>
            <span>Selected Work</span>
          </div>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[rgb(var(--foreground))] md:text-4xl">
            Featured Projects &amp; Systems
          </h2>
          <p className="mt-3 max-w-xl text-sm md:text-base text-[rgb(var(--fg-muted))]">
            Architected for concurrency, sub-100ms response times, fault tolerance, and scalable data layers.
          </p>
        </motion.div>

        {/* 3 Featured Projects Grid / Stack */}
        <div className="space-y-12">
          {content.featuredProjects.map((project, idx) => {
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: prefersReducedMotion ? 0.01 : durations.base,
                  delay: prefersReducedMotion ? 0 : idx * 0.12,
                  ease: easeOut,
                }}
                className="group grid items-center gap-8 rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--bg-elevated))]/70 p-6 md:p-8 lg:grid-cols-12 lg:gap-10"
              >
                {/* Visual / CometCard on one side (7 cols) */}
                <div className="lg:col-span-7">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="block"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <CometCard className="w-full">
                      <div className="relative overflow-hidden rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))]">
                        <div className="relative aspect-[16/9] w-full overflow-hidden">
                          <Image
                            src={project.image || "/projects/clade.svg"}
                            alt={project.title}
                            fill
                            className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                            priority={idx === 0}
                          />
                        </div>

                        {/* Bottom Info Bar inside Card */}
                        <div className="flex items-center justify-between border-t border-[rgb(var(--border))] bg-[rgb(var(--bg-elevated))]/90 px-4 py-2.5 backdrop-blur-md">
                          <div className="flex items-center gap-2 font-mono text-xs">
                            <span className="font-semibold text-[rgb(var(--foreground))]">
                              {project.title}
                            </span>
                            <span className="text-[rgb(var(--fg-muted))]">/</span>
                            <span className="text-[rgb(var(--accent))]">{project.tagline}</span>
                          </div>
                          <div className="flex items-center gap-1 text-xs text-[rgb(var(--fg-muted))]">
                            <span>GitHub</span>
                            <ArrowUpRight className="h-3.5 w-3.5 text-[rgb(var(--foreground))]" />
                          </div>
                        </div>
                      </div>
                    </CometCard>
                  </a>
                </div>

                {/* Details / Specs (5 cols) */}
                <div className="flex flex-col justify-between lg:col-span-5">
                  <div>
                    {/* Index & Role Context */}
                    <div className="flex items-center gap-2 font-mono text-xs text-[rgb(var(--fg-muted))]">
                      <span className="rounded bg-[rgb(var(--bg))] px-2 py-0.5 border border-[rgb(var(--border))] text-[rgb(var(--accent))]">
                        0{idx + 1}
                      </span>
                      <span>{project.roleContext}</span>
                    </div>

                    {/* Title */}
                    <h3 className="mt-3 text-2xl font-bold tracking-tight text-[rgb(var(--foreground))] group-hover:text-[rgb(var(--accent))] transition-colors">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2"
                      >
                        <span>{project.title}</span>
                        <ArrowUpRight className="h-5 w-5 opacity-60 transition-opacity group-hover:opacity-100" />
                      </a>
                    </h3>

                    {/* Description */}
                    <p className="mt-3 text-sm md:text-[15px] leading-relaxed text-[rgb(var(--fg-muted))]">
                      {project.description}
                    </p>
                  </div>

                  {/* Stack Tags & Action Button */}
                  <div className="mt-6 pt-4 border-t border-[rgb(var(--border))]">
                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-[rgb(var(--border))] bg-[rgb(var(--bg))] px-2.5 py-1 font-mono text-[11px] font-medium text-[rgb(var(--fg-muted))]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5 flex items-center gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-[rgb(var(--border))] bg-[rgb(var(--bg))] px-4 py-2 text-xs font-semibold text-[rgb(var(--foreground))] transition hover:border-[rgb(var(--accent))] hover:text-[rgb(var(--accent))]"
                      >
                        <Github className="h-3.5 w-3.5" />
                        <span>Source Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
