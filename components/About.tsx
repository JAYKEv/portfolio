"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Briefcase, Compass, GraduationCap, MapPin, Sparkles } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { content } from "@/lib/content";
import { fadeUp } from "@/lib/motion";

const iconMap = {
  "graduation-cap": GraduationCap,
  "map-pin": MapPin,
  "briefcase": Briefcase,
  "compass": Compass,
  "sparkles": Sparkles,
};

export function About() {
  return (
    <section id="about" className="relative px-5 py-20 md:px-8 md:py-28 overflow-hidden">
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
            <span className="text-[rgb(var(--accent))]">03</span>
            <span>{"//"}</span>
            <span>About</span>
          </div>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[rgb(var(--foreground))] md:text-4xl">
            Engineering Background &amp; Focus
          </h2>
        </motion.div>

        {/* Two-Column Grid: Left (Bio + Photo), Right (Glowing Bento Grid) */}
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12 items-start">
          {/* Left Column: Bio & Photo Placeholder (5 cols) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="flex flex-col gap-6 lg:col-span-5"
          >
            {/* Profile Avatar Card */}
            <div className="relative overflow-hidden rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--bg-elevated))] p-4 shadow-sm">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))]">
                <Image
                  src="/profile.jpg"
                  alt="Jaykumar Kevadiya"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              <div className="mt-3 flex items-center justify-between font-mono text-[11px] text-[rgb(var(--fg-muted))]">
                <span>{content.personal.name}</span>
                <span>{content.personal.location}</span>
              </div>
            </div>

            {/* Bio Narrative */}
            <div className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--bg-elevated))]/70 p-6 md:p-8 backdrop-blur-sm">
              <h3 className="font-mono text-xs uppercase tracking-wider text-[rgb(var(--accent))]">
                The Short Story
              </h3>
              <p className="mt-4 text-sm md:text-[15px] leading-relaxed text-[rgb(var(--fg-muted))]">
                {content.about.bio}
              </p>
            </div>
          </motion.div>

          {/* Right Column: GlowingEffect Bento Grid (7 cols, 5 items) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="lg:col-span-7"
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-mono text-xs uppercase tracking-wider text-[rgb(var(--fg-muted))]">
                At A Glance {"//"} 05 Key Highlights
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {content.about.glanceItems.map((item, idx) => {
                const IconComponent = iconMap[item.iconName] || Sparkles;
                const isWide = idx === 0 || idx === 4;

                return (
                  <div
                    key={item.id}
                    className={`relative rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--bg-elevated))] p-6 shadow-sm transition-all duration-300 hover:border-[rgb(var(--border-hover))] ${
                      isWide ? "sm:col-span-2" : "sm:col-span-1"
                    }`}
                  >
                    <GlowingEffect
                      spread={40}
                      glow={true}
                      disabled={false}
                      proximity={64}
                      inactiveZone={0.01}
                      borderWidth={1.5}
                    />

                    <div className="relative z-10 flex flex-col justify-between h-full">
                      <div>
                        <div className="flex items-center justify-between">
                          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] text-[rgb(var(--accent))]">
                            <IconComponent className="h-4 w-4" />
                          </div>
                          {item.badge && (
                            <span className="rounded-full border border-[rgb(var(--border))] bg-[rgb(var(--bg))] px-2.5 py-0.5 font-mono text-[10px] font-medium text-[rgb(var(--fg-muted))]">
                              {item.badge}
                            </span>
                          )}
                        </div>

                        <h4 className="mt-4 text-base font-semibold tracking-tight text-[rgb(var(--foreground))]">
                          {item.title}
                        </h4>
                        <p className="mt-2 text-xs md:text-sm leading-relaxed text-[rgb(var(--fg-muted))]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
