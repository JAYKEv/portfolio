"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface DottedGlowBackgroundProps {
  className?: string;
}

export function DottedGlowBackground({ className }: DottedGlowBackgroundProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none fixed inset-0 -z-10 h-full w-full overflow-hidden select-none",
        className
      )}
    >
      {/* GPU-accelerated CSS Grid Pattern (Zero CPU overhead) */}
      <div
        className="absolute inset-0 h-full w-full opacity-40 dark:opacity-30 transition-opacity duration-300"
        style={{
          backgroundImage: `radial-gradient(circle at center, rgb(var(--fg-muted)) 1px, transparent 1px)`,
          backgroundSize: "26px 26px",
          backgroundPosition: "center center",
          maskImage:
            "radial-gradient(ellipse 90% 75% at 50% 35%, black 30%, transparent 90%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 75% at 50% 35%, black 30%, transparent 90%)",
        }}
      />

      {/* Subtle ambient lighting / radial glows */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 h-[500px] w-[700px] rounded-full bg-[rgb(var(--accent))]/5 blur-[120px] dark:bg-[rgb(var(--accent))]/8 pointer-events-none"
      />
      <div
        className="absolute top-1/2 right-0 translate-x-1/3 h-[400px] w-[500px] rounded-full bg-indigo-500/5 blur-[140px] pointer-events-none"
      />
    </div>
  );
}
