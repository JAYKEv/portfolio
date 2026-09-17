import { site } from "@/lib/site";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-site flex-col items-start justify-center px-6">
      <p className="font-mono text-[11px] uppercase tracking-label text-muted">404</p>
      <h1 className="mt-4 font-serif text-5xl">Page not found.</h1>
      <a href="/" className="mt-8 rounded-full bg-ink px-5 py-2.5 text-sm text-canvas">
        Back to {site.initials}
      </a>
    </main>
  );
}
