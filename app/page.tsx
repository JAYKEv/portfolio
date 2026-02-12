import { Navbar } from "@/components/Navbar";
import { ProjectCard } from "@/components/ProjectCard";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/siteConfig";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Terminal from "@/components/Terminal";
import Skills from '@/components/Skills';
import ExperienceSection from '@/components/Experience';


export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-10 px-4">{/* reduced bottom padding */}
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            {site.name}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-4 font-medium">
            {site.role}
          </p>
          <div className="flex items-center justify-center gap-4 text-gray-500 flex-wrap">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>{site.location}</span>
            </div>
            {site.phone && (
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>{site.phone}</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Terminal Section */}
      <section className="px-4 pt-0 pb-12">{/* no extra top space */}
        <div className="max-w-4xl mx-auto">
          <Terminal />
        </div>
      </section>

      <ExperienceSection />

      <Skills layout="grid" />

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {site.projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>
{/* Enhanced Contact Section (Mac-themed, simplified) */}
<section id="contact" className="py-24 px-4 relative overflow-hidden">
  {/* Gradient Background */}
  <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900"></div>

  {/* Subtle Pattern Overlay */}
  <div className="absolute inset-0 opacity-10">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(34,197,94,0.1)_0%,transparent_50%)]"></div>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(59,130,246,0.08)_0%,transparent_50%)]"></div>
  </div>

  <div className="max-w-5xl mx-auto relative z-10 text-center">
    {/* Header */}
    <div className="mb-12">
      <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">
        Let’s Build Something
        <span className="text-transparent bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text">
          {" "}Amazing
        </span>
      </h2>
      <p className="text-zinc-300 text-lg max-w-2xl mx-auto leading-relaxed">
        I’m always excited to discuss scalable web applications, cloud architecture, 
        or innovative ideas that could make an impact.
      </p>
    </div>

    {/* Contact Buttons */}
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {/* Primary Email */}
      <a
        href={`mailto:${site.email}`}
        className="group relative inline-flex items-center gap-3 px-8 py-4
                   bg-gradient-to-r from-emerald-500/20 to-emerald-600/20
                   border border-emerald-400/30 rounded-2xl text-white
                   hover:from-emerald-500/30 hover:to-emerald-600/30
                   hover:border-emerald-400/50 hover:scale-[1.02]
                   transition-all duration-300 hover:shadow-[0_20px_40px_-12px_rgba(34,197,94,0.4)]
                   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/50"
      >
        <Mail className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform duration-200" />
        <span className="font-semibold">Email Me</span>
      </a>

      {/* GitHub */}
      {site.socials.github && (
        <a
          href={site.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-3 px-8 py-4
                     bg-zinc-800/60 border border-zinc-600/50 rounded-2xl
                     text-zinc-300 hover:text-white hover:bg-zinc-700/60
                     hover:border-zinc-500/70 hover:scale-[1.02]
                     transition-all duration-300 hover:shadow-[0_20px_40px_-12px_rgba(255,255,255,0.1)]
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400/50"
        >
          <Github className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
          <span className="font-semibold">GitHub</span>
        </a>
      )}

      {/* LinkedIn */}
      {site.socials.linkedin && (
        <a
          href={site.socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-3 px-8 py-4
                     bg-blue-500/20 border border-blue-400/30 rounded-2xl
                     text-zinc-300 hover:text-white hover:bg-blue-500/30
                     hover:border-blue-400/50 hover:scale-[1.02]
                     transition-all duration-300 hover:shadow-[0_20px_40px_-12px_rgba(59,130,246,0.3)]
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/50"
        >
          <Linkedin className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform duration-200" />
          <span className="font-semibold">LinkedIn</span>
        </a>
      )}
    </div>

    {/* Availability note */}
    <div className="flex justify-center">
      <div className="flex items-center gap-2 text-zinc-500 text-sm">
        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
        <span>Currently available for new opportunities</span>
      </div>
    </div>
  </div>

  {/* Floating accents */}
  <div className="absolute -top-10 -left-10 w-20 h-20 bg-emerald-500/10 rounded-full blur-xl"></div>
  <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
</section>


      <Footer />
    </div>
  );
}
