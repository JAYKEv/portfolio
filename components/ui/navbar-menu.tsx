"use client";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const transition = {
  type: "spring" as const,
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer rounded-full px-3 py-2 text-sm font-medium text-[rgb(var(--fg-muted))] transition-colors hover:text-[rgb(var(--fg))]"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute left-1/2 top-[calc(100%_+_1rem)] -translate-x-1/2 pt-3">
              <motion.div
                transition={transition}
                layoutId="active"
                className="overflow-hidden rounded-lg border border-[rgb(var(--border))] bg-[rgb(var(--bg-elevated))]/95 shadow-[0_24px_60px_rgba(15,23,42,0.12)] backdrop-blur-xl"
              >
                <motion.div layout className="w-max max-w-[22rem] p-4">
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="relative flex items-center justify-center gap-1 rounded-full border border-[rgb(var(--border))] bg-[rgb(var(--bg-elevated))]/80 px-2 py-2 shadow-[0_12px_30px_rgba(15,23,42,0.08)] backdrop-blur-xl"
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <a href={href} className="flex items-center gap-3 rounded-lg p-2 transition hover:bg-[rgb(var(--bg))]">
      <div className="relative h-[64px] w-[120px] shrink-0 overflow-hidden rounded-lg border border-[rgb(var(--border))] bg-[rgb(var(--bg))] shadow-sm">
        <Image
          src={src}
          width={120}
          height={64}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="min-w-0">
        <h4 className="mb-1 text-base font-semibold text-[rgb(var(--fg))]">
          {title}
        </h4>
        <p className="line-clamp-2 text-sm text-[rgb(var(--fg-muted))]">
          {description}
        </p>
      </div>
    </a>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <a
      {...rest}
      className="rounded-lg px-2 py-1.5 text-sm text-[rgb(var(--fg-muted))] transition hover:bg-[rgb(var(--bg))] hover:text-[rgb(var(--fg))]"
    >
      {children}
    </a>
  );
};
