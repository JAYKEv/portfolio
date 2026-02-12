import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/siteConfig";
import { Github, Linkedin, Mail, MapPin, Download } from "lucide-react";
import Skills from '@/components/Skills';
import ExperienceSection from '@/components/Experience';
import FeaturedProjects from '@/components/FeaturedProjects';
import OtherProjects from '@/components/OtherProjects';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />

      {/* Hero / About Section */}
      <section id="about" className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              {site.name}
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-6 font-medium">
              {site.role}
            </p>
            <div className="flex items-center justify-center gap-4 text-gray-600 flex-wrap mb-8">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{site.location}</span>
              </div>
            </div>
          </div>

          {/* About Text */}
          <div className="prose prose-lg max-w-none text-center mb-6">
            <p className="text-gray-700 leading-relaxed">
              {site.summary}
            </p>
          </div>

          {/* Badge */}
          {site.badge && (
            <div className="text-center mb-8">
              <p className="text-gray-600 text-lg font-medium">
                {site.badge}
              </p>
            </div>
          )}

          {/* Action Buttons with Premium Styling */}
          <div className="flex items-center justify-center gap-4 flex-wrap">
            {site.resume ? (
              <a
                href={site.resume}
                download
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#1F6FEB] text-white rounded-lg
                           font-semibold shadow-lg hover:bg-[#1a5fd9] hover:shadow-xl
                           hover:scale-105 transition-all duration-300"
              >
                <Download className="w-5 h-5" />
                <span>Resume</span>
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 px-8 py-3.5 bg-gray-400 text-white rounded-lg
                             cursor-not-allowed opacity-75 font-semibold">
                <Download className="w-5 h-5" />
                <span>Resume [Download PDF]</span>
              </span>
            )}
            {site.socials.github && (
              <a
                href={site.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-gray-900 rounded-lg
                           font-semibold border-2 border-gray-300 shadow-md hover:border-gray-400
                           hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
            )}
            {site.socials.linkedin && (
              <a
                href={site.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-gray-900 rounded-lg
                           font-semibold border-2 border-gray-300 shadow-md hover:border-gray-400
                           hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <ExperienceSection />

      {/* Featured Projects Section */}
      <FeaturedProjects projects={site.featuredProjects} />

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-gray-50">
        <Skills layout="grid" />
      </section>

      {/* Other Projects Section */}
      <OtherProjects projects={site.otherProjects} />

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 relative overflow-hidden bg-gray-900">
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">
              Let's Connect
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
              I'm always open to discussing new opportunities, projects, or ideas.
            </p>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="flex items-center justify-center gap-3 text-gray-300">
              <MapPin className="w-5 h-5 text-green-400" />
              <span>{site.location}</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-gray-300">
              <Mail className="w-5 h-5 text-blue-400" />
              <a href={`mailto:${site.email}`} className="hover:text-white transition-colors">
                {site.email}
              </a>
            </div>
          </div>

          {/* Contact Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href={`mailto:${site.email}`}
              className="group relative inline-flex items-center gap-3 px-8 py-4
                         bg-gradient-to-r from-emerald-500/20 to-emerald-600/20
                         border border-emerald-400/30 rounded-2xl text-white
                         hover:from-emerald-500/30 hover:to-emerald-600/30
                         hover:border-emerald-400/50 hover:scale-[1.02]
                         transition-all duration-300"
            >
              <Mail className="w-5 h-5 text-emerald-400" />
              <span className="font-semibold">Email Me</span>
            </a>

            {site.socials.github && (
              <a
                href={site.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 px-8 py-4
                           bg-zinc-800/60 border border-zinc-600/50 rounded-2xl
                           text-zinc-300 hover:text-white hover:bg-zinc-700/60
                           hover:border-zinc-500/70 hover:scale-[1.02]
                           transition-all duration-300"
              >
                <Github className="w-5 h-5" />
                <span className="font-semibold">GitHub</span>
              </a>
            )}

            {site.socials.linkedin && (
              <a
                href={site.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 px-8 py-4
                           bg-blue-500/20 border border-blue-400/30 rounded-2xl
                           text-zinc-300 hover:text-white hover:bg-blue-500/30
                           hover:border-blue-400/50 hover:scale-[1.02]
                           transition-all duration-300"
              >
                <Linkedin className="w-5 h-5 text-blue-400" />
                <span className="font-semibold">LinkedIn</span>
              </a>
            )}

            {site.resume ? (
              <a
                href={site.resume}
                download
                className="group relative inline-flex items-center gap-3 px-8 py-4
                           bg-green-500/20 border border-green-400/30 rounded-2xl
                           text-zinc-300 hover:text-white hover:bg-green-500/30
                           hover:border-green-400/50 hover:scale-[1.02]
                           transition-all duration-300"
              >
                <Download className="w-5 h-5 text-green-400" />
                <span className="font-semibold">Download Resume</span>
              </a>
            ) : (
              <span className="group relative inline-flex items-center gap-3 px-8 py-4
                             bg-gray-500/20 border border-gray-400/30 rounded-2xl
                             text-zinc-400 cursor-not-allowed opacity-75">
                <Download className="w-5 h-5 text-gray-400" />
                <span className="font-semibold">Resume [Download PDF]</span>
              </span>
            )}
          </div>

          {/* Availability note */}
          <div className="flex justify-center">
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span>Currently available for new opportunities</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
