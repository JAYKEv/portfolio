"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github } from "lucide-react";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { content } from "@/lib/content";
import { fadeUp } from "@/lib/motion";

export function Archive() {
  return (
    <section id="archive" className="relative px-5 py-20 md:px-8 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-site">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end"
        >
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-label text-[rgb(var(--fg-muted))]">
              <span className="text-[rgb(var(--accent))]">02</span>
              <span>{"//"}</span>
              <span>Archive</span>
            </div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[rgb(var(--foreground))] md:text-4xl">
              Other Noteworthy Projects
            </h2>
            <p className="mt-2 text-sm text-[rgb(var(--fg-muted))]">
              Full-stack applications, microservices, auth frameworks, algorithms, and developer utilities.
            </p>
          </div>

          <a
            href={content.personal.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[rgb(var(--border))] bg-[rgb(var(--bg-elevated))] px-4 py-2 text-xs font-semibold text-[rgb(var(--foreground))] transition hover:border-[rgb(var(--accent))] hover:text-[rgb(var(--accent))]"
          >
            <Github className="h-4 w-4" />
            <span>See all repositories →</span>
          </a>
        </motion.div>

        {/* 12 Projects Grid via HoverEffect */}
        <HoverEffect items={content.archiveProjects} />

        {/* Bottom CTA */}
        <div className="mt-8 text-center">
          <a
            href={content.personal.github}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-[rgb(var(--accent))] transition hover:underline"
          >
            <span>Explore all 20+ public repositories on GitHub</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
