"use client";

import React, { useEffect, useRef } from "react";
import { motion, animate } from "framer-motion";
import {
  SiPython,
  SiTypescript,
  SiJavascript,
  SiCplusplus,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiSocketdotio,
  SiJsonwebtokens,
  SiMongodb,
  SiDocker,
  SiGit,
  SiLinux,
  SiMysql,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import { Sparkles, Terminal } from "lucide-react";
import { content } from "@/lib/content";
import { fadeUp } from "@/lib/motion";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { cn } from "@/lib/utils";

// Map skill name to react-icons/si component
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Python: SiPython,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  "C++": SiCplusplus,
  React: SiReact,
  "Node.js": SiNodedotjs,
  Express: SiExpress,
  "Socket.io": SiSocketdotio,
  "JWT / Auth": SiJsonwebtokens,
  MongoDB: SiMongodb,
  Docker: SiDocker,
  AWS: FaAws,
  Git: SiGit,
  Linux: SiLinux,
  MySQL: SiMysql,
};

// Orbit Component for central and satellite logos
function OrbitCardSkeleton({
  skills,
  categoryIndex,
}: {
  skills: { name: string; icon: string }[];
  categoryIndex: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || !orbitRef.current) return;

    // Smooth continuous rotation of orbit
    const controls = animate(orbitRef.current, { rotate: 360 }, {
      duration: categoryIndex === 0 ? 24 : categoryIndex === 1 ? 28 : 22,
      repeat: Infinity,
      ease: "linear",
    });

    return () => controls.stop();
  }, [prefersReducedMotion, categoryIndex]);

  const centerSkill = skills[0];
  const satelliteSkills = skills.slice(1);
  const CenterIcon = (centerSkill && iconMap[centerSkill.name]) || Terminal;

  return (
    <div
      ref={containerRef}
      className="relative flex h-48 w-full items-center justify-center overflow-hidden rounded-xl border border-[rgb(var(--border))] bg-[radial-gradient(circle_at_center,rgba(var(--accent),0.08),transparent_70%),rgb(var(--bg))]"
    >
      {/* Background Orbit Ring */}
      <div className="absolute h-36 w-36 rounded-full border border-dashed border-[rgb(var(--border))] opacity-60" />

      {/* Rotating Orbit with Satellite Logos */}
      <div
        ref={orbitRef}
        className="absolute flex h-36 w-36 items-center justify-center"
      >
        {satelliteSkills.map((skill, index) => {
          const Icon = iconMap[skill.name] || Terminal;
          const angle = (index / satelliteSkills.length) * (2 * Math.PI);
          const radius = 68; // orbit radius in px
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <div
              key={skill.name}
              style={{
                transform: `translate(${x}px, ${y}px)`,
              }}
              className="absolute flex h-9 w-9 items-center justify-center rounded-lg border border-[rgb(var(--border))] bg-[rgb(var(--bg-elevated))] shadow-sm"
              title={skill.name}
            >
              <Icon className="h-4 w-4 text-[rgb(var(--fg))] transition-transform duration-200 hover:scale-110" />
            </div>
          );
        })}
      </div>

      {/* Central Anchor Icon */}
      <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg-elevated))] shadow-md">
        <CenterIcon className="h-6 w-6 text-[rgb(var(--accent))]" />
      </div>

      {/* Ambient Corner Sparkle */}
      {!prefersReducedMotion && (
        <Sparkles className="absolute top-2.5 right-2.5 h-3.5 w-3.5 text-[rgb(var(--accent))] opacity-40 animate-pulse" />
      )}
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative px-5 py-20 md:px-8 md:py-28 overflow-hidden">
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
            <span className="text-[rgb(var(--accent))]">04</span>
            <span>{"//"}</span>
            <span>Skills &amp; Technologies</span>
          </div>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[rgb(var(--foreground))] md:text-4xl">
            Core Languages, Services &amp; Tools
          </h2>
          <p className="mt-3 max-w-xl text-sm md:text-base text-[rgb(var(--fg-muted))]">
            A battle-tested stack spanning high-concurrency backends, distributed systems, and modern front-end platforms.
          </p>
        </motion.div>

        {/* 3 Orbit Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {content.skillGroups.map((group, idx) => (
            <motion.div
              key={group.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              className="group flex flex-col justify-between rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--bg-elevated))] p-6 shadow-sm transition-all duration-300 hover:border-[rgb(var(--border-hover))] hover:shadow-[0_16px_40px_rgba(0,0,0,0.06)]"
            >
              <div>
                {/* Orbit Visual Skeleton */}
                <OrbitCardSkeleton
                  skills={group.skills}
                  categoryIndex={idx}
                />

                {/* Card Title & Description */}
                <h3 className="mt-6 text-xl font-bold tracking-tight text-[rgb(var(--foreground))] group-hover:text-[rgb(var(--accent))] transition-colors">
                  {group.title}
                </h3>
                <p className="mt-2 text-xs md:text-sm leading-relaxed text-[rgb(var(--fg-muted))]">
                  {group.description}
                </p>
              </div>

              {/* Skill Badges with live icons */}
              <div className="mt-6 pt-4 border-t border-[rgb(var(--border))]">
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => {
                    const Icon = iconMap[skill.name] || Terminal;
                    return (
                      <span
                        key={skill.name}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-[rgb(var(--border))] bg-[rgb(var(--bg))] px-2.5 py-1 text-xs font-medium text-[rgb(var(--fg))] transition-colors hover:border-[rgb(var(--accent))]"
                      >
                        <Icon className="h-3 w-3 text-[rgb(var(--fg-muted))]" />
                        <span>{skill.name}</span>
                      </span>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* All languages marquee / badge row */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="mt-12 rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--bg-elevated))]/60 p-6 backdrop-blur-sm"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-[rgb(var(--accent))]">
                Additional Languages &amp; Environments
              </span>
              <p className="text-xs text-[rgb(var(--fg-muted))] mt-1">
                Proficient in systems, scripting, and enterprise ecosystems
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {content.allLanguages.map((lang) => (
                <span
                  key={lang}
                  className="rounded-md border border-[rgb(var(--border))] bg-[rgb(var(--bg))] px-2.5 py-1 font-mono text-xs font-medium text-[rgb(var(--foreground))]"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
