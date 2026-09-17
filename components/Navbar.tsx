"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Github, Linkedin, Mail, FileText, ChevronDown } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { NoiseBackground } from "@/components/ui/noise-background";
import { content } from "@/lib/content";
import { cn } from "@/lib/utils";
import { useLenis } from "@/components/LenisProvider";

const navSections = [
  { id: "about", label: "About", href: "#about" },
  { id: "work", label: "Work", href: "#work", hasDropdown: true },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "experience", label: "Experience", href: "#experience" },
  { id: "contact", label: "Connect", href: "#contact", hasDropdown: true },
];

export function Navbar() {
  const { scrollTo } = useLenis();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileWorkExpanded, setMobileWorkExpanded] = useState(false);
  const [mobileConnectExpanded, setMobileConnectExpanded] = useState(false);

  // Monitor scroll for glass effect
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // IntersectionObserver for active section highlight
  useEffect(() => {
    const sectionIds = ["hero", "about", "work", "skills", "experience", "contact"];
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          const id = visible.target.id === "hero" ? "about" : visible.target.id;
          setActiveSection(id);
        }
      },
      { rootMargin: "-25% 0px -55% 0px", threshold: [0.1, 0.25, 0.5] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      scrollTo(href);
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-[rgb(var(--foreground))] focus:px-4 focus:py-2 focus:text-[rgb(var(--background))]"
      >
        Skip to content
      </a>

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-[rgb(var(--border))] bg-[rgb(var(--background))]/80 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.3)]"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <div className="mx-auto flex h-16 max-w-site items-center justify-between px-5 md:h-[4.25rem] md:px-8">
          {/* Logo / Initials */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="group flex items-center gap-2.5 text-base font-semibold tracking-tight text-[rgb(var(--foreground))]"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-[rgb(var(--border))] bg-[rgb(var(--bg-elevated))] font-mono text-xs font-bold text-[rgb(var(--foreground))] transition group-hover:border-[rgb(var(--accent))] group-hover:text-[rgb(var(--accent))]">
              {content.personal.initials}
            </span>
            <div className="flex flex-col">
              <span className="text-sm font-semibold leading-tight text-[rgb(var(--foreground))]">
                {content.personal.name}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-[rgb(var(--fg-muted))]">
                Portfolio
              </span>
            </div>
          </a>

          {/* Desktop Nav Center Pill */}
          <div
            className="hidden items-center gap-1 rounded-full border border-[rgb(var(--border))] bg-[rgb(var(--bg-elevated))]/85 p-1 shadow-[0_8px_24px_rgba(0,0,0,0.06)] backdrop-blur-xl md:flex"
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <nav className="flex items-center gap-1" aria-label="Primary navigation">
              {navSections.map((item) => {
                const isActive = activeSection === item.id;

                return (
                  <div
                    key={item.id}
                    className="relative"
                    onMouseEnter={() => {
                      if (item.hasDropdown) setActiveDropdown(item.id);
                      else setActiveDropdown(null);
                    }}
                  >
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={cn(
                        "relative flex items-center gap-1 rounded-full px-3.5 py-1.5 text-[13px] font-medium transition-colors duration-200",
                        isActive
                          ? "text-[rgb(var(--foreground))]"
                          : "text-[rgb(var(--fg-muted))] hover:text-[rgb(var(--foreground))]"
                      )}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="nav-indicator"
                          className="absolute inset-0 rounded-full bg-[rgb(var(--bg))] border border-[rgb(var(--border))] shadow-sm"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                      <span className="relative z-10">{item.label}</span>
                      {item.hasDropdown && (
                        <ChevronDown className="relative z-10 h-3 w-3 opacity-60 transition-transform duration-200 group-hover:rotate-180" />
                      )}
                    </a>

                    {/* Work Dropdown Menu */}
                    {item.id === "work" && activeDropdown === "work" && (
                      <div className="absolute left-1/2 top-full -translate-x-1/2 pt-2.5">
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.96 }}
                          transition={{ duration: 0.18, ease: "easeOut" }}
                          className="w-[22rem] rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg-elevated))]/95 p-3 shadow-[0_20px_48px_rgba(0,0,0,0.18)] backdrop-blur-xl"
                        >
                          <div className="mb-2 px-2 pt-1 font-mono text-[10px] uppercase tracking-wider text-[rgb(var(--fg-muted))]">
                            Featured Projects
                          </div>
                          <div className="space-y-1.5">
                            {content.featuredProjects.map((p) => (
                              <a
                                key={p.title}
                                href={p.github}
                                target="_blank"
                                rel="noreferrer"
                                className="group/item flex items-start gap-3 rounded-lg p-2 transition hover:bg-[rgb(var(--bg))] hover:border-[rgb(var(--border))]"
                              >
                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-[rgb(var(--border))] bg-[rgb(var(--bg))] font-mono text-xs font-semibold text-[rgb(var(--accent))] transition group-hover/item:border-[rgb(var(--accent))]">
                                  {p.title.substring(0, 2).toUpperCase()}
                                </div>
                                <div className="min-w-0 flex-1">
                                  <div className="flex items-center gap-1.5">
                                    <span className="text-xs font-semibold text-[rgb(var(--foreground))] group-hover/item:text-[rgb(var(--accent))]">
                                      {p.title}
                                    </span>
                                    <ArrowUpRight className="h-3 w-3 opacity-0 transition group-hover/item:opacity-100" />
                                  </div>
                                  <p className="line-clamp-1 text-[11px] text-[rgb(var(--fg-muted))]">
                                    {p.tagline}
                                  </p>
                                </div>
                              </a>
                            ))}
                          </div>
                          <div className="mt-2 border-t border-[rgb(var(--border))] pt-2">
                            <a
                              href="#work"
                              onClick={(e) => {
                                handleNavClick(e, "#work");
                                setActiveDropdown(null);
                              }}
                              className="block px-2 text-center text-[11px] font-medium text-[rgb(var(--accent))] hover:underline"
                            >
                              Explore all projects →
                            </a>
                          </div>
                        </motion.div>
                      </div>
                    )}

                    {/* Connect Dropdown Menu */}
                    {item.id === "contact" && activeDropdown === "contact" && (
                      <div className="absolute left-1/2 top-full -translate-x-1/2 pt-2.5">
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.96 }}
                          transition={{ duration: 0.18, ease: "easeOut" }}
                          className="w-52 rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg-elevated))]/95 p-2 shadow-[0_20px_48px_rgba(0,0,0,0.18)] backdrop-blur-xl"
                        >
                          <a
                            href={`mailto:${content.personal.email}`}
                            className="flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-xs font-medium text-[rgb(var(--foreground))] transition hover:bg-[rgb(var(--bg))] hover:text-[rgb(var(--accent))]"
                          >
                            <Mail className="h-3.5 w-3.5 text-[rgb(var(--fg-muted))]" />
                            <span>Email Me</span>
                          </a>
                          <a
                            href={content.personal.github}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-xs font-medium text-[rgb(var(--foreground))] transition hover:bg-[rgb(var(--bg))] hover:text-[rgb(var(--accent))]"
                          >
                            <Github className="h-3.5 w-3.5 text-[rgb(var(--fg-muted))]" />
                            <span>GitHub Profile</span>
                          </a>
                          <a
                            href={content.personal.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-xs font-medium text-[rgb(var(--foreground))] transition hover:bg-[rgb(var(--bg))] hover:text-[rgb(var(--accent))]"
                          >
                            <Linkedin className="h-3.5 w-3.5 text-[rgb(var(--fg-muted))]" />
                            <span>LinkedIn Profile</span>
                          </a>
                        </motion.div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>
          </div>

          {/* Right Action: Get in Touch & Theme Toggle */}
          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle />
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="inline-flex items-center gap-1.5 rounded-full border border-[rgb(var(--border))] bg-[rgb(var(--bg-elevated))] px-3.5 py-1.5 text-xs font-semibold text-[rgb(var(--foreground))] transition hover:border-[rgb(var(--accent))] hover:text-[rgb(var(--accent))]"
            >
              <Mail className="h-3.5 w-3.5" />
              <span>Contact</span>
            </a>
          </div>

          {/* Mobile Actions: ThemeToggle + Hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[rgb(var(--border))] bg-[rgb(var(--bg-elevated))] text-[rgb(var(--foreground))]"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-40 flex flex-col bg-[rgb(var(--background))]/95 px-6 pt-20 pb-8 backdrop-blur-2xl md:hidden overflow-y-auto"
          >
            <nav className="flex flex-col divide-y divide-[rgb(var(--border))]">
              <a
                href="#about"
                onClick={(e) => handleNavClick(e, "#about")}
                className="py-4 text-lg font-medium text-[rgb(var(--foreground))]"
              >
                About
              </a>

              {/* Mobile Work with Expand */}
              <div className="py-4">
                <button
                  type="button"
                  onClick={() => setMobileWorkExpanded(!mobileWorkExpanded)}
                  className="flex w-full items-center justify-between text-lg font-medium text-[rgb(var(--foreground))]"
                >
                  <span>Work</span>
                  <ChevronDown
                    className={cn("h-4 w-4 transition-transform", mobileWorkExpanded && "rotate-180")}
                  />
                </button>
                {mobileWorkExpanded && (
                  <div className="mt-3 space-y-2 pl-3">
                    {content.featuredProjects.map((p) => (
                      <a
                        key={p.title}
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        className="block rounded-md border border-[rgb(var(--border))] bg-[rgb(var(--bg-elevated))] p-2.5 text-sm font-medium text-[rgb(var(--foreground))]"
                      >
                        <div className="text-xs font-semibold text-[rgb(var(--accent))]">{p.title}</div>
                        <div className="text-[11px] text-[rgb(var(--fg-muted))]">{p.tagline}</div>
                      </a>
                    ))}
                    <a
                      href="#work"
                      onClick={(e) => handleNavClick(e, "#work")}
                      className="block text-xs font-medium text-[rgb(var(--accent))] pt-1"
                    >
                      View all projects →
                    </a>
                  </div>
                )}
              </div>

              <a
                href="#skills"
                onClick={(e) => handleNavClick(e, "#skills")}
                className="py-4 text-lg font-medium text-[rgb(var(--foreground))]"
              >
                Skills
              </a>

              <a
                href="#experience"
                onClick={(e) => handleNavClick(e, "#experience")}
                className="py-4 text-lg font-medium text-[rgb(var(--foreground))]"
              >
                Experience
              </a>

              {/* Mobile Connect with Expand */}
              <div className="py-4">
                <button
                  type="button"
                  onClick={() => setMobileConnectExpanded(!mobileConnectExpanded)}
                  className="flex w-full items-center justify-between text-lg font-medium text-[rgb(var(--foreground))]"
                >
                  <span>Connect</span>
                  <ChevronDown
                    className={cn("h-4 w-4 transition-transform", mobileConnectExpanded && "rotate-180")}
                  />
                </button>
                {mobileConnectExpanded && (
                  <div className="mt-3 space-y-2 pl-3">
                    <a
                      href={`mailto:${content.personal.email}`}
                      className="flex items-center gap-2 text-sm text-[rgb(var(--foreground))]"
                    >
                      <Mail className="h-4 w-4 text-[rgb(var(--accent))]" />
                      <span>{content.personal.email}</span>
                    </a>
                    <a
                      href={content.personal.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm text-[rgb(var(--foreground))]"
                    >
                      <Github className="h-4 w-4 text-[rgb(var(--accent))]" />
                      <span>GitHub</span>
                    </a>
                    <a
                      href={content.personal.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm text-[rgb(var(--foreground))]"
                    >
                      <Linkedin className="h-4 w-4 text-[rgb(var(--accent))]" />
                      <span>LinkedIn</span>
                    </a>
                  </div>
                )}
              </div>
            </nav>

            <div className="mt-auto pt-6 flex flex-col gap-3">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[rgb(var(--foreground))] py-3 text-sm font-semibold text-[rgb(var(--background))]"
              >
                <Mail className="h-4 w-4" />
                Get in Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
