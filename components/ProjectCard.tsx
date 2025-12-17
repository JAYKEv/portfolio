import { ExternalLink, Github, Globe } from "lucide-react";

/* =========================
   Types
========================= */
interface Project {
  title: string;
  description: string;
  tags: ReadonlyArray<string>;
  link?: string;
  github?: string;
}

interface ProjectCardProps {
  project: Project;
  variant?: "default" | "elevated" | "minimal" | "terminal";
}

/* =========================
   Small UI bits
========================= */
function MacDots() {
  return (
    <div className="flex items-center gap-2">
      <span className="h-3.5 w-3.5 rounded-full bg-red-500 shadow-[0_2px_8px_rgba(239,68,68,0.3)]" />
      <span className="h-3.5 w-3.5 rounded-full bg-yellow-400 shadow-[0_2px_8px_rgba(250,204,21,0.3)]" />
      <span className="h-3.5 w-3.5 rounded-full bg-green-500 shadow-[0_2px_8px_rgba(34,197,94,0.3)]" />
    </div>
  );
}

function Tag({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <span
      className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-zinc-300
                 hover:bg-white/10 hover:text-white hover:border-white/20 hover:scale-105
                 transition-all duration-200 font-medium"
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </span>
  );
}

/* =========================
   Base Project Card
========================= */
export function ProjectCard({ project, variant = "default" }: ProjectCardProps) {
  if (variant === "terminal") {
    return (
      <div className="group relative block rounded-2xl overflow-hidden
                      bg-zinc-950 ring-1 ring-white/10 hover:ring-emerald-400/40 
                      transition-all duration-300 hover:scale-[1.02]
                      shadow-[0_14px_50px_-18px_rgba(0,0,0,0.8)] hover:shadow-[0_24px_60px_-18px_rgba(0,0,0,0.85)]">
        {/* Ambient glow */}
        <div className="pointer-events-none absolute inset-0 opacity-60" />
        {/* Title bar */}
        <div className="flex items-center justify-between px-5 py-3 bg-zinc-900 border-b border-white/10">
          <div className="flex items-center gap-3">
            <MacDots />
            <span className="text-xs text-zinc-400 select-none font-mono tracking-wide">
              terminal — {project.title}
            </span>
          </div>
          <div className="flex items-center gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-md text-zinc-400 hover:text-white hover:bg-white/10 transition-all duration-200"
                aria-label={`View ${project.title} on GitHub`}
              >
                <Github className="h-4 w-4" />
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-md text-zinc-400 hover:text-emerald-400 hover:bg-emerald-400/10 transition-all duration-200"
                aria-label={`Open ${project.title}`}
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>

        {/* Body */}
        <div className="p-6 font-mono text-sm text-zinc-200">
          <div className="mb-4 flex items-center">
            <span className="text-emerald-400 font-semibold">jaykumar@uwindsor</span>
            <span className="mx-2 text-zinc-600">~</span>
            <span className="text-sky-300 font-bold">$</span>
            <span className="ml-2 text-zinc-200 font-medium">
              cat {project.title.toLowerCase().replace(/\s+/g, "-")}.md
            </span>
            <span className="ml-1 text-emerald-400 animate-pulse font-bold">|</span>
          </div>

          <div className="mb-6 p-4 rounded-lg bg-zinc-900 border border-zinc-700/60">
            <p className="text-zinc-200/95 leading-relaxed font-sans text-sm">{project.description}</p>
          </div>

          <div className="flex flex-wrap gap-2 mb-2">
            {project.tags.map((tag, i) => (
              <Tag key={`${tag}-${i}`} delay={i * 0.05}>
                {tag}
              </Tag>
            ))}
          </div>
        </div>

        <div className="px-5 py-3 border-t border-white/10 bg-zinc-950 text-[11px] text-zinc-500 font-mono flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-emerald-400 font-semibold">READY</span>
          </div>
          <div className="flex items-center gap-2">
            <span>hover to explore</span>
            <span>•</span>
            <span>click to launch</span>
          </div>
        </div>
      </div>
    );
  }

  // Non-terminal variants
  const cardClass =
    variant === "elevated"
      ? `rounded-2xl border border-white/10 bg-zinc-900 text-zinc-200 p-6 
         ring-1 ring-white/5 shadow-[0_14px_40px_-16px_rgba(0,0,0,0.65)]
         hover:border-emerald-400/30 hover:ring-emerald-400/25 
         hover:bg-zinc-950 hover:shadow-[0_16px_60px_-20px_rgba(0,0,0,0.85)]
         transition-all duration-300 hover:scale-[1.02]`
      : variant === "minimal"
      ? `rounded-xl p-5 bg-zinc-900/80 text-zinc-200 border border-white/5
         hover:bg-zinc-950 hover:border-white/10 transition-all duration-300`
      : `rounded-2xl border border-white/10 bg-zinc-900 text-zinc-200 p-6 
         ring-1 ring-white/5 hover:ring-emerald-400/25 hover:border-emerald-400/30
         hover:bg-zinc-950 hover:shadow-[0_14px_50px_-18px_rgba(0,0,0,0.8)]
         hover:scale-[1.01] transition-all duration-300 shadow-[0_12px_30px_-14px_rgba(0,0,0,0.55)]`;

  return (
    <div className={`${cardClass} group relative overflow-hidden`}>
      {/* Ambient gradient */}
      <div className="absolute inset-0 rounded-2xl 
                      bg-[radial-gradient(120%_80%_at_80%_0%,rgba(16,185,129,0.06),transparent_60%),radial-gradient(120%_80%_at_0%_100%,rgba(56,189,248,0.05),transparent_60%)]
                      opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold text-zinc-100 group-hover:text-emerald-300 transition-colors duration-300 leading-tight">
            {project.title}
          </h3>
          <div className="flex items-center gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-all duration-200"
                aria-label={`View ${project.title} on GitHub`}
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-zinc-400 hover:text-emerald-400 hover:bg-emerald-400/10 transition-all duration-200"
                aria-label={`View ${project.title} project`}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        <p className="text-zinc-300 mb-6 leading-relaxed text-sm">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <Tag key={`${tag}-${index}`} delay={index * 0.05}>
              {tag}
            </Tag>
          ))}
        </div>
      </div>
    </div>
  );
}

/* =========================
   Enhanced Project Card
========================= */
interface EnhancedProject extends Project {
  image?: string;
  status?: "active" | "completed" | "archived";
  featured?: boolean;
  demo?: string;
}

interface EnhancedProjectCardProps {
  project: EnhancedProject;
  variant?: "default" | "elevated" | "minimal" | "terminal";
  showStatus?: boolean;
}

export function EnhancedProjectCard({
  project,
  variant = "default",
  showStatus = false,
}: EnhancedProjectCardProps) {
  if (variant === "terminal") {
    return (
      <div className="group relative rounded-2xl overflow-hidden
                      bg-zinc-950/90 ring-1 ring-white/8 hover:ring-emerald-400/40 
                      transition-all duration-300 hover:scale-[1.02]
                      shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)]
                      hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.8)]">
        {project.featured && (
          <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-emerald-500 to-teal-400 
                          text-white px-3 py-1.5 text-xs font-semibold rounded-full shadow-[0_4px_12px_rgba(16,185,129,0.4)]">
            Featured
          </div>
        )}

        <div className="flex items-center justify-between px-5 py-3 bg-zinc-800/90 border-b border-white/10 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <MacDots />
            <span className="text-xs text-zinc-300/80 select-none font-mono tracking-wide">
              terminal — {project.title}
            </span>
          </div>
          <div className="flex items-center gap-1">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-md text-zinc-400 hover:text-white hover:bg-white/10 transition-all duration-200" aria-label={`View ${project.title} on GitHub`}>
                <Github className="h-4 w-4" />
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-md text-zinc-400 hover:text-sky-400 hover:bg-sky-400/10 transition-all duration-200" aria-label={`View ${project.title} demo`}>
                <Globe className="h-4 w-4" />
              </a>
            )}
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-md text-zinc-400 hover:text-emerald-400 hover:bg-emerald-400/10 transition-all duration-200" aria-label={`Open ${project.title}`}>
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>

        {project.image && (
          <div className="relative overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        )}

        <div className="p-6 font-mono text-sm text-zinc-100">
          <div className="mb-4 flex items-center">
            <span className="text-emerald-400 font-semibold">jaykumar@uwindsor</span>
            <span className="mx-2 text-zinc-500">~</span>
            <span className="text-sky-300 font-bold">$</span>
            <span className="ml-2 text-zinc-200 font-medium">describe {project.title.toLowerCase().replace(/\s+/g, "-")}</span>
            <span className="ml-1 text-emerald-400 animate-pulse font-bold">|</span>
          </div>

          <div className="mb-6 p-4 rounded-lg bg-zinc-950/30 border border-zinc-700/50">
            <p className="text-zinc-200/95 leading-relaxed font-sans text-sm line-clamp-3">{project.description}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <Tag key={`${tag}-${i}`} delay={i * 0.05}>
                {tag}
              </Tag>
            ))}
          </div>
        </div>

        <div className="px-5 py-3 border-t border-white/10 bg-zinc-900/90 text-[11px] text-zinc-400 font-mono flex items-center justify-between">
          <div className="flex items-center gap-3">
            {showStatus && project.status && (
              <div className="flex items-center gap-2">
                <span
                  className={`inline-block h-2 w-2 rounded-full ${
                    project.status === "active"
                      ? "bg-emerald-400 animate-pulse"
                      : project.status === "completed"
                      ? "bg-sky-400"
                      : "bg-zinc-500"
                  }`}
                />
                <span className="capitalize font-medium">{project.status}</span>
              </div>
            )}
          </div>
          <div className="flex items-center gap-2 text-zinc-500">
            <span>interactive project</span>
          </div>
        </div>
      </div>
    );
  }

  // Fallback
  return <ProjectCard project={project as Project} variant={variant} />;
}

/* =========================
   Grid + "See more" button
========================= */
interface ProjectGridProps {
  projects: Project[];
  columns?: 1 | 2 | 3;
  variant?: "default" | "elevated" | "minimal" | "terminal";
  className?: string;
  showSeeMoreButton?: boolean;
  githubUrl?: string;
}

export function ProjectGrid({
  projects,
  columns = 3,
  variant = "default",
  className = "",
  showSeeMoreButton = true,
  githubUrl = "https://github.com/JAYKEv",
}: ProjectGridProps) {
  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  };

  return (
    <div className={`space-y-12 ${className}`}>
      {/* Cards */}
      <div className={`grid ${gridCols[columns]} gap-6`}>
        {projects.map((project, index) => (
          <div
            key={`${project.title}-${index}`}
            className="animate-in slide-in-from-bottom-4 fade-in"
            style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "both" }}
          >
            <ProjectCard project={project} variant={variant} />
          </div>
        ))}
      </div>

      {/* Button */}
      {showSeeMoreButton && (
        <div className="flex justify-center">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl
                       bg-zinc-900 text-zinc-300 border border-white/10
                       hover:bg-zinc-950 hover:text-white hover:border-emerald-400/30
                       transition-all duration-300 hover:scale-[1.03]
                       shadow-[0_8px_20px_-6px_rgba(0,0,0,0.6)]"
          >
            <Github className="w-5 h-5 text-zinc-400 group-hover:text-emerald-400 transition-colors" />
            <span className="font-semibold">See More on GitHub</span>
          </a>
        </div>
      )}
    </div>
  );
}
