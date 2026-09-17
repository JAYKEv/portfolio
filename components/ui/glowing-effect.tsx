"use client";

import React, { memo, useRef } from "react";
import { cn } from "@/lib/utils";

interface GlowingEffectProps {
  blur?: number;
  spread?: number;
  proximity?: number;
  inactiveZone?: number;
  variant?: "default" | "white";
  glow?: boolean;
  className?: string;
  disabled?: boolean;
  borderWidth?: number;
}

const GlowingEffect = memo(
  ({
    blur = 0,
    spread = 30,
    variant = "default",
    glow = false,
    className,
    borderWidth = 1.5,
    disabled = false,
  }: GlowingEffectProps) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
      if (disabled || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const angle = (Math.atan2(y - centerY, x - centerX) * 180) / Math.PI + 90;

      containerRef.current.style.setProperty("--start", `${angle}deg`);
      containerRef.current.style.setProperty("--active", "1");
    };

    const handlePointerLeave = () => {
      if (!containerRef.current) return;
      containerRef.current.style.setProperty("--active", "0");
    };

    return (
      <div
        ref={containerRef}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        style={
          {
            "--blur": `${blur}px`,
            "--spread": `${spread}deg`,
            "--start": "0deg",
            "--active": glow ? "1" : "0",
            "--glowingeffect-border-width": `${borderWidth}px`,
            "--repeating-conic-gradient-times": "5",
            "--gradient":
              variant === "white"
                ? `repeating-conic-gradient(
                from 236.84deg at 50% 50%,
                rgb(var(--accent)),
                rgb(var(--accent)) calc(25% / var(--repeating-conic-gradient-times))
              )`
                : `radial-gradient(circle, rgb(var(--accent)) 10%, rgba(var(--accent), 0) 20%),
              radial-gradient(circle at 40% 40%, rgb(var(--accent)) 5%, rgba(var(--accent), 0) 15%),
              radial-gradient(circle at 60% 60%, rgb(var(--accent)) 10%, rgba(var(--accent), 0) 20%), 
              radial-gradient(circle at 40% 60%, rgb(var(--accent)) 10%, rgba(var(--accent), 0) 20%),
              repeating-conic-gradient(
                from 236.84deg at 50% 50%,
                rgb(var(--accent)) 0%,
                rgba(var(--accent), 0.8) calc(25% / var(--repeating-conic-gradient-times)),
                rgba(var(--accent), 0.6) calc(50% / var(--repeating-conic-gradient-times)), 
                rgba(var(--accent), 0.9) calc(75% / var(--repeating-conic-gradient-times)),
                rgb(var(--accent)) calc(100% / var(--repeating-conic-gradient-times))
              )`,
          } as React.CSSProperties
        }
        className={cn(
          "pointer-events-none absolute inset-0 rounded-inherit opacity-100 transition-opacity",
          blur > 0 && "blur-[var(--blur)]",
          className,
          disabled && "!hidden"
        )}
      >
        <div
          className={cn(
            "rounded-inherit",
            'after:content-[""] after:rounded-inherit after:absolute after:inset-[calc(-1*var(--glowingeffect-border-width))]',
            "after:[border:var(--glowingeffect-border-width)_solid_transparent]",
            "after:[background:var(--gradient)] after:[background-attachment:fixed]",
            "after:opacity-[var(--active)] after:transition-opacity after:duration-300",
            "after:[mask-clip:padding-box,border-box]",
            "after:[mask-composite:intersect]",
            "after:[mask-image:linear-gradient(#0000,#0000),conic-gradient(from_var(--start),rgba(0,0,0,0)_0deg,rgb(var(--fg)),rgba(0,0,0,0)_var(--spread))]"
          )}
        />
      </div>
    );
  }
);

GlowingEffect.displayName = "GlowingEffect";

export { GlowingEffect };
