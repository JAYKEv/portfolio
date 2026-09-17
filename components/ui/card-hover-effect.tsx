"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, FolderGit2 } from "lucide-react";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { cn } from "@/lib/utils";

export interface HoverEffectItem {
  title: string;
  description: string;
  stack: string[];
  github: string;
  category?: string;
}

export const HoverEffect = ({
  items,
  className,
}: {
  items: HoverEffectItem[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-6",
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          href={item.github}
          key={item.title}
          target="_blank"
          rel="noreferrer"
          className="group relative block h-full w-full p-1"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {!prefersReducedMotion && hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 block h-full w-full rounded-2xl bg-[rgb(var(--accent))]/10 dark:bg-[rgb(var(--accent))]/15 border border-[rgb(var(--accent))]/30"
                layoutId="archiveHoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.1 },
                }}
              />
            )}
          </AnimatePresence>

          <div className="relative z-10 flex h-full flex-col justify-between rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg-elevated))] p-5 shadow-sm transition-all duration-300 group-hover:border-[rgb(var(--border-hover))] group-hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)]">
            <div>
              {/* Header: Folder Icon & Arrow Link */}
              <div className="flex items-center justify-between">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[rgb(var(--border))] bg-[rgb(var(--bg))] text-[rgb(var(--accent))]">
                  <FolderGit2 className="h-4 w-4" />
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-[rgb(var(--fg-muted))] group-hover:text-[rgb(var(--accent))]">
                  {item.category && (
                    <span className="rounded bg-[rgb(var(--bg))] px-2 py-0.5 border border-[rgb(var(--border))]">
                      {item.category}
                    </span>
                  )}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

              {/* Title */}
              <h4 className="mt-4 text-base font-semibold tracking-tight text-[rgb(var(--foreground))] group-hover:text-[rgb(var(--accent))] transition-colors">
                {item.title}
              </h4>

              {/* Description (capped to keep grid even) */}
              <p className="mt-2 line-clamp-2 text-xs md:text-sm leading-relaxed text-[rgb(var(--fg-muted))]">
                {item.description}
              </p>
            </div>

            {/* Stack Tags */}
            <div className="mt-5 flex flex-wrap gap-1 pt-3 border-t border-[rgb(var(--border))]">
              {item.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-[rgb(var(--border))] bg-[rgb(var(--bg))] px-2 py-0.5 font-mono text-[10px] text-[rgb(var(--fg-muted))]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};
