"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDownRight, Award, FolderGit2, Mail, MapPin, Sparkles } from "lucide-react";
import { content } from "@/lib/content";
import { durations, easeOut } from "@/lib/motion";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { useLenis } from "@/components/LenisProvider";

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const { scrollTo } = useLenis();

  // Animation variants respecting reduced motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.1,
        delayChildren: prefersReducedMotion ? 0 : 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.01 : durations.base,
        ease: easeOut,
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-[90vh] flex-col justify-center px-5 pt-28 pb-16 md:px-8 md:pt-36 md:pb-24 overflow-hidden"
    >
      <div className="mx-auto w-full max-w-site">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start"
        >
          {/* Eyebrow & Status Badge */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-label text-[rgb(var(--fg-muted))]">
              {content.personal.eyebrow}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-[rgb(var(--border))] bg-[rgb(var(--bg-elevated))] px-3 py-1 text-xs font-medium text-[rgb(var(--fg))] shadow-sm backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span>{content.personal.statusText}</span>
            </span>
          </motion.div>

          {/* Headline Treatment - 2 staggered lines with antigravity/devkakadiya aesthetic */}
          <div className="mt-8 max-w-4xl">
            <motion.h1
              variants={itemVariants}
              className="text-[clamp(2.4rem,6.5vw,5.2rem)] font-bold tracking-[-0.03em] leading-[1.04] text-[rgb(var(--foreground))]"
            >
              <span className="headline-gradient block">
                {content.personal.headlineLine1}
              </span>
              <span className="text-[rgb(var(--foreground))] block">
                {content.personal.headlineLine2}
              </span>
            </motion.h1>
          </div>

          {/* Subtext */}
          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-[rgb(var(--fg-muted))]"
          >
            {content.personal.subtext}
          </motion.p>

          {/* Location & LeetCode Badge Note */}
          <motion.div
            variants={itemVariants}
            className="mt-4 flex flex-wrap items-center gap-4 text-xs font-medium text-[rgb(var(--fg-muted))]"
          >
            <span className="inline-flex items-center gap-1.5 rounded-md border border-[rgb(var(--border))] bg-[rgb(var(--bg-elevated))]/60 px-2.5 py-1">
              <MapPin className="h-3.5 w-3.5 text-[rgb(var(--accent))]" />
              {content.personal.locationFull}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-md border border-[rgb(var(--border))] bg-[rgb(var(--bg-elevated))]/60 px-2.5 py-1">
              <Award className="h-3.5 w-3.5 text-amber-500" />
              {content.personal.leetcodeNote}
            </span>
          </motion.div>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="mt-8 flex flex-wrap items-center gap-4">
            {/* Primary CTA: View Projects */}
            <a
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#work");
              }}
              className="group relative inline-flex items-center gap-2 rounded-full bg-[rgb(var(--foreground))] px-6 py-3 text-sm font-semibold text-[rgb(var(--background))] transition-all duration-200 hover:opacity-90 hover:shadow-lg active:scale-95"
            >
              <FolderGit2 className="h-4 w-4" />
              <span>View Projects</span>
              <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>

            {/* Secondary CTA: Get in Touch */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#contact");
              }}
              className="inline-flex items-center gap-2 rounded-full border border-[rgb(var(--border))] bg-[rgb(var(--bg-elevated))] px-6 py-3 text-sm font-semibold text-[rgb(var(--foreground))] transition-all duration-200 hover:border-[rgb(var(--accent))] hover:text-[rgb(var(--accent))] active:scale-95"
            >
              <Mail className="h-4 w-4 text-[rgb(var(--fg-muted))]" />
              <span>Get in Touch</span>
            </a>
          </motion.div>

          {/* Stat Row - 4 Cards */}
          <motion.div
            variants={itemVariants}
            className="mt-14 w-full grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4"
          >
            {content.stats.map((stat, idx) => (
              <div
                key={stat.label}
                className="group relative overflow-hidden rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg-elevated))]/70 p-4 transition-all duration-300 hover:border-[rgb(var(--accent))]/50 hover:bg-[rgb(var(--bg-elevated))] hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)]"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[rgb(var(--fg-muted))]">
                    0{idx + 1} {"//"} {stat.label}
                  </span>
                  <Sparkles className="h-3.5 w-3.5 text-[rgb(var(--accent))] opacity-40 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="mt-3 text-2xl font-bold tracking-tight text-[rgb(var(--foreground))]">
                  {stat.value}
                </div>
                <p className="mt-1 text-xs text-[rgb(var(--fg-muted))] line-clamp-1">
                  {stat.hint}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
