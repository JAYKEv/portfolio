"use client";

import React from "react";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { content } from "@/lib/content";
import { useLenis } from "@/components/LenisProvider";

export function Footer() {
  const { scrollTo } = useLenis();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      scrollTo(href);
    }
  };

  const handleBackToTop = () => {
    scrollTo("#hero", { offset: 0, duration: 1.2 });
  };

  return (
    <footer className="relative border-t border-[rgb(var(--border))] bg-[rgb(var(--bg-elevated))]/40 px-5 py-14 md:px-8 overflow-hidden">
      <div className="mx-auto max-w-site">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand & Tagline */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-[rgb(var(--border))] bg-[rgb(var(--bg-elevated))] font-mono text-xs font-bold text-[rgb(var(--foreground))]">
                {content.personal.initials}
              </span>
              <span className="text-base font-bold tracking-tight text-[rgb(var(--foreground))]">
                {content.personal.name}
              </span>
            </div>
            <p className="mt-3 max-w-sm text-xs md:text-sm leading-relaxed text-[rgb(var(--fg-muted))]">
              {content.personal.subtext}
            </p>
            <p className="mt-4 font-mono text-[11px] text-[rgb(var(--fg-muted))]">
              Built using Next.js and Tailwind CSS
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-[rgb(var(--foreground))]">
              Navigation
            </h4>
            <ul className="mt-3 space-y-2 text-xs md:text-sm text-[rgb(var(--fg-muted))]">
              {content.nav.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="transition-colors hover:text-[rgb(var(--foreground))]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Links */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-[rgb(var(--foreground))]">
              Connect
            </h4>
            <ul className="mt-3 space-y-2 text-xs md:text-sm text-[rgb(var(--fg-muted))]">
              <li>
                <a
                  href={`mailto:${content.personal.email}`}
                  className="inline-flex items-center gap-2 transition-colors hover:text-[rgb(var(--foreground))]"
                >
                  <Mail className="h-3.5 w-3.5" />
                  <span>Email</span>
                </a>
              </li>
              <li>
                <a
                  href={content.personal.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-[rgb(var(--foreground))]"
                >
                  <Github className="h-3.5 w-3.5" />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href={content.personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-[rgb(var(--foreground))]"
                >
                  <Linkedin className="h-3.5 w-3.5" />
                  <span>LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col gap-4 border-t border-[rgb(var(--border))] pt-6 sm:flex-row sm:items-center sm:justify-between text-xs text-[rgb(var(--fg-muted))]">
          <p>© 2026 {content.personal.name}. All rights reserved.</p>

          <button
            type="button"
            onClick={handleBackToTop}
            className="inline-flex items-center gap-1.5 self-start rounded-full border border-[rgb(var(--border))] bg-[rgb(var(--bg-elevated))] px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-wider text-[rgb(var(--foreground))] transition hover:border-[rgb(var(--accent))] hover:text-[rgb(var(--accent))] sm:self-center"
          >
            <span>Back to top</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
