import { ArrowUpRight, Trophy } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { site } from "@/lib/site";

export function Engineering() {
  return (
    <section className="border-t border-[rgb(var(--border))] px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[72rem]">
        <Reveal>
          <SectionHeader
            index="06"
            kicker="Engineering"
            title="Problem-solving stays part of the process."
            description="I enjoy working through systems problems, writing clean APIs, and keeping code reliable under real-world constraints."
          />
        </Reveal>

        <Reveal>
          <div className="grid gap-5 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            <div className="rounded-lg border border-[rgb(var(--border))] bg-[rgb(var(--bg-elevated))] p-6 md:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[rgb(var(--muted))]">LeetCode</p>
                  <p className="mt-4 font-serif text-5xl leading-none text-[rgb(var(--foreground))]">{site.engineering.problemsSolved}</p>
                </div>
                <div className="rounded-full border border-[rgb(var(--border))] bg-[rgb(var(--background))] p-3 text-[rgb(var(--foreground))]">
                  <Trophy className="h-5 w-5" />
                </div>
              </div>
              <p className="mt-6 text-base leading-relaxed text-[rgb(var(--muted))]">{site.engineering.summary}</p>
              <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-[rgb(var(--muted))]">
                <span className="rounded-full border border-[rgb(var(--border))] px-2.5 py-1.5">{site.engineering.badge}</span>
                <span className="rounded-full border border-[rgb(var(--border))] px-2.5 py-1.5">{site.engineering.github}</span>
              </div>
            </div>

            <div className="rounded-lg border border-[rgb(var(--border))] bg-[rgb(var(--bg))] p-6 md:p-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[rgb(var(--muted))]">GitHub</p>
              <h3 className="mt-4 font-serif text-3xl text-[rgb(var(--foreground))]">More systems, product work, and experiments.</h3>
              <p className="mt-4 text-base leading-relaxed text-[rgb(var(--muted))]">
                I build small systems, API layers, and prototypes to sharpen my understanding of real-world constraints and performance trade-offs.
              </p>
              <a href={site.socials.github} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[rgb(var(--foreground))]">
                Visit GitHub
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
