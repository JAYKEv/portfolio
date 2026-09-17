"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, Copy, Github, Linkedin, Mail, MapPin, Send, Sparkles } from "lucide-react";
import { content } from "@/lib/content";
import { fadeUp } from "@/lib/motion";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(content.personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    const subject = encodeURIComponent(
      form.subject || `Portfolio contact from ${form.name}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${content.personal.email}?subject=${subject}&body=${body}`;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="relative px-5 py-20 md:px-8 md:py-28 overflow-hidden">
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
            <span className="text-[rgb(var(--accent))]">06</span>
            <span>{"//"}</span>
            <span>Contact</span>
          </div>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[rgb(var(--foreground))] md:text-5xl">
            {content.contact.heading}
          </h2>
          <p className="mt-3 max-w-xl text-sm md:text-base text-[rgb(var(--fg-muted))]">
            {content.contact.statusLine}
          </p>
        </motion.div>

        {/* Contact Layout: Info Column & Form Column */}
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12 items-start">
          {/* Left Column: Direct Links & Email Box (5 cols) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="flex flex-col gap-5 lg:col-span-5"
          >
            {/* Direct Email Card */}
            <div className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--bg-elevated))] p-6 shadow-sm">
              <span className="font-mono text-xs uppercase tracking-wider text-[rgb(var(--fg-muted))]">
                Direct Contact
              </span>
              <div className="mt-3 flex items-center justify-between gap-2 rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] p-3">
                <div className="flex items-center gap-2.5 min-w-0">
                  <Mail className="h-4 w-4 shrink-0 text-[rgb(var(--accent))]" />
                  <span className="truncate font-mono text-xs md:text-sm text-[rgb(var(--foreground))]">
                    {content.personal.email}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-[rgb(var(--border))] bg-[rgb(var(--bg-elevated))] px-3 py-1.5 text-xs font-semibold text-[rgb(var(--foreground))] transition hover:border-[rgb(var(--accent))] hover:text-[rgb(var(--accent))]"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-500" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Status & Location Info */}
              <div className="mt-5 space-y-2 border-t border-[rgb(var(--border))] pt-4 text-xs text-[rgb(var(--fg-muted))]">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>{content.personal.statusText}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-3.5 w-3.5 text-[rgb(var(--accent))]" />
                  <span>{content.contact.location}</span>
                </div>
              </div>
            </div>

            {/* Social Links Card */}
            <div className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--bg-elevated))] p-6 shadow-sm">
              <span className="font-mono text-xs uppercase tracking-wider text-[rgb(var(--fg-muted))]">
                Socials &amp; Profiles
              </span>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <a
                  href={content.personal.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] p-3 text-xs font-semibold text-[rgb(var(--foreground))] transition hover:border-[rgb(var(--accent))] hover:text-[rgb(var(--accent))]"
                >
                  <Github className="h-4 w-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={content.personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] p-3 text-xs font-semibold text-[rgb(var(--foreground))] transition hover:border-[rgb(var(--accent))] hover:text-[rgb(var(--accent))]"
                >
                  <Linkedin className="h-4 w-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form (7 cols) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--bg-elevated))] p-6 md:p-8 shadow-sm lg:col-span-7"
          >
            <h3 className="text-xl font-bold tracking-tight text-[rgb(var(--foreground))]">
              Send a Message
            </h3>
            <p className="mt-1 text-xs md:text-sm text-[rgb(var(--fg-muted))]">
              Got a role opportunity, project inquiry, or just want to chat engineering? Drop a note below.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[rgb(var(--fg-muted))]">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                    className="mt-1.5 w-full rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] px-3.5 py-2.5 text-sm text-[rgb(var(--foreground))] placeholder:text-[rgb(var(--fg-muted))]/60 outline-none transition focus:border-[rgb(var(--accent))] focus:ring-1 focus:ring-[rgb(var(--accent))]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[rgb(var(--fg-muted))]">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                    className="mt-1.5 w-full rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] px-3.5 py-2.5 text-sm text-[rgb(var(--foreground))] placeholder:text-[rgb(var(--fg-muted))]/60 outline-none transition focus:border-[rgb(var(--accent))] focus:ring-1 focus:ring-[rgb(var(--accent))]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[rgb(var(--fg-muted))]">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Software Engineer Role / Collaboration"
                  className="mt-1.5 w-full rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] px-3.5 py-2.5 text-sm text-[rgb(var(--foreground))] placeholder:text-[rgb(var(--fg-muted))]/60 outline-none transition focus:border-[rgb(var(--accent))] focus:ring-1 focus:ring-[rgb(var(--accent))]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[rgb(var(--fg-muted))]">
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Hi Jaykumar, I saw your portfolio and would like to talk about..."
                  className="mt-1.5 w-full rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] px-3.5 py-2.5 text-sm text-[rgb(var(--foreground))] placeholder:text-[rgb(var(--fg-muted))]/60 outline-none transition focus:border-[rgb(var(--accent))] focus:ring-1 focus:ring-[rgb(var(--accent))]"
                />
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between pt-2">
                <span className="text-xs text-[rgb(var(--fg-muted))]">
                  Typically responds within 24 hours
                </span>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[rgb(var(--foreground))] px-6 py-2.5 text-sm font-semibold text-[rgb(var(--background))] transition-all duration-200 hover:opacity-90 active:scale-95"
                >
                  <Send className="h-4 w-4" />
                  <span>Send Message</span>
                </button>
              </div>

              {formSubmitted && (
                <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3 text-xs text-emerald-600 dark:text-emerald-400">
                  ✓ Email client launched! If it did not open automatically, please email me directly at {content.personal.email}.
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
