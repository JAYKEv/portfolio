import { site } from '@/lib/siteConfig'

/** Dark theme footer, minimal and aligned with Connect */
export function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400 border-t border-zinc-800">
      <div className="container py-12">
        {/* Brand + tagline */}
        <div className="text-center space-y-2">
          <h3 className="text-zinc-100 font-semibold tracking-tight text-xl">
            {site.name}
          </h3>
          <p className="text-sm text-zinc-500">
            Built using Next.js and Tailwind CSS
          </p>
        </div>

        {/* subtle hairline */}
        <div className="my-8 h-px bg-zinc-800" />

        {/* Legal line */}
        <div className="text-center text-xs text-zinc-500">
          <p className="flex items-center justify-center gap-2 flex-wrap">
            <span>© {new Date().getFullYear()} {site.name}</span>
            <span className="text-zinc-700">•</span>
            <span>Thanks for visiting.</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
