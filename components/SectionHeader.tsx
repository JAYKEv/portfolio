export function SectionHeader({
  index,
  kicker,
  title,
  description,
}: {
  index: string;
  kicker: string;
  title: string;
  description?: string;
}) {
  return (
    <header className="mb-10 max-w-3xl md:mb-14">
      <p className="font-mono text-[11px] uppercase tracking-label text-muted">
        {index} — {kicker}
      </p>
      <h2 className="mt-3 font-serif text-[clamp(1.85rem,4vw,3.15rem)] font-medium leading-[1.12] tracking-tight">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">{description}</p>
      ) : null}
    </header>
  );
}
