import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { site } from "@/lib/site";

export function Education() {
  return (
    <section id="education" className="border-t border-[rgb(var(--border))] px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[72rem]">
        <Reveal>
          <SectionHeader
            index="03"
            kicker="Education"
            title="Academic foundation for software engineering."
          />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {site.education.map((item, index) => (
            <Reveal key={`${item.org}-${item.title}`} delay={index * 0.05}>
              <article className="h-full rounded-lg border border-[rgb(var(--border))] bg-[rgb(var(--bg-elevated))] p-6 md:p-7">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[rgb(var(--muted))]">{item.dates}</p>
                <h3 className="mt-4 font-serif text-2xl leading-tight text-[rgb(var(--foreground))]">{item.title}</h3>
                <p className="mt-3 text-base font-medium text-[rgb(var(--foreground))]">{item.org}</p>
                <p className="mt-2 text-sm text-[rgb(var(--muted))]">{item.location}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
