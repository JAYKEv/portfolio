'use client';

import React, { useState, useEffect } from 'react';
import { Briefcase, Calendar, MapPin, Code, GitBranch, FileText, GraduationCap, Star, ChevronRight, Terminal } from 'lucide-react';

/* ---------- Types ---------- */
export type ExperienceItem = {
  company: string;
  role: string;
  location: string;
  start: string;
  end: string;
  bullets?: string[];
};

export type EducationItem = {
  school: string;
  degree: string;
  start: string;
  end: string;
  gpa: string;
  location: string;
};

interface ExperienceCardsProps {
  items?: ExperienceItem[];
  education?: EducationItem[];
  title?: string;
  subtitle?: string;
  className?: string;
}

/* ---------- Defaults ---------- */
const defaults: ExperienceItem[] = [
  {
    company: 'Delta Tech-Up Ltd',
    role: 'Software Engineer — React, Node.js, Python',
    location: 'Ahmedabad, India',
    start: 'Jan 2023',
    end: 'Jun 2024',
    bullets: [
      'Improved system performance by 35% by designing scalable backend services using Node.js and Python, optimizing API workflows and reducing redundant data processing in distributed environments.',
      'Reduced API latency by 45% by refactoring GraphQL and REST APIs and optimizing MongoDB queries, supporting high-throughput transaction and analytics systems.',
      'Enhanced reliability and security by implementing structured logging, role-based access control, and automated testing aligned with modern software development and DevOps practices.'
    ],
  },
  {
    company: 'Kintu Designs Pvt Ltd',
    role: 'Frontend Developer Intern — React, WebSockets',
    location: 'Surat, India',
    start: 'May 2022',
    end: 'Jul 2022',
    bullets: [
      'Increased real-time collaboration efficiency by 30% by building interactive UIs with React and implementing low-latency communication using WebSockets.',
      'Improved code quality by creating reusable components and performing unit testing, accelerating feature delivery across multiple client-facing applications.',
      'Collaborated in Agile sprints, code reviews, and deployment cycles using Git, contributing to stable and maintainable frontend releases.'
    ],
  },
];

const defaultEducation: EducationItem[] = [
  {
    school: 'University of Windsor',
    degree: "Master of Applied Computing",
    start: 'Sep 2024',
    end: 'Dec 2025',
    gpa: '',
    location: 'Ontario, Canada',
  },
  {
    school: 'Charotar University of Science and Technology',
    degree: 'B.Tech in Computer Science Engineering',
    start: 'Jun 2019',
    end: 'Apr 2023',
    gpa: '',
    location: 'Anand, India',
  },
];

/* ---------- VS Code UI Components ---------- */
function VSCodeSeparator() {
  return <div className="h-px bg-[#333333] opacity-60" />;
}

function FileTab({ 
  title, 
  isActive = false, 
  hasUnsavedChanges = false 
}: { 
  title: string; 
  isActive?: boolean; 
  hasUnsavedChanges?: boolean;
}) {
  return (
    <div className={`relative flex items-center gap-2 px-4 py-2 text-sm font-mono
                    border-r border-[#333333] transition-all duration-200
                    ${isActive 
                      ? 'bg-[#1e1e1e] text-[#cccccc] border-t-2 border-t-[#007acc]' 
                      : 'bg-[#2d2d30] text-[#969696] hover:text-[#cccccc] hover:bg-[#37373d]'
                    }`}>
      <FileText className="h-3.5 w-3.5 text-[#dcb67a]" />
      <span>{title}</span>
      {hasUnsavedChanges && (
        <div className="w-1.5 h-1.5 rounded-full bg-[#007acc]" />
      )}
    </div>
  );
}

function CodeLineNumbers({ lines }: { lines: number }) {
  return (
    <div className="flex flex-col text-[#858585] text-xs font-mono leading-5 pr-3 border-r border-[#333333] select-none">
      {Array.from({ length: lines }, (_, i) => (
        <span key={i} className="text-right w-6">
          {i + 1}
        </span>
      ))}
    </div>
  );
}

function StatusBar({ fileName, language }: { fileName: string; language: string }) {
  return (
    <div className="flex items-center justify-between px-4 py-1 bg-[#007acc] text-white text-xs font-mono">
      <div className="flex items-center gap-4">
        <span>📄 {fileName}</span>
        <span>🔗 Git: main</span>
      </div>
      <div className="flex items-center gap-4">
        <span>{language}</span>
        <span>UTF-8</span>
        <span>LF</span>
      </div>
    </div>
  );
}

/* ---------- Enhanced Experience Card ---------- */
function ExperienceCard({ item, index }: { item: ExperienceItem; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsInView(true), index * 200);
    return () => clearTimeout(timer);
  }, [index]);

  const totalBullets = item.bullets?.length || 3; // Default lines for animation

  return (
    <article
      className={`group relative rounded-lg border border-[#333333] bg-[#252526] 
                 overflow-hidden transition-all duration-500 hover:border-[#007acc]/50
                 hover:shadow-[0_4px_20px_rgba(0,122,204,0.1)]
                 ${isInView 
                   ? 'opacity-100 translate-y-0' 
                   : 'opacity-0 translate-y-8'
                 }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* VS Code Tab Bar */}
      <div className="flex bg-[#2d2d30] border-b border-[#333333]">
        <FileTab 
          title={`${item.company.toLowerCase().replace(/\s+/g, '-')}.tsx`}
          isActive={true}
          hasUnsavedChanges={isHovered}
        />
        <div className="flex-1 bg-[#37373d]"></div>
      </div>

      {/* Code Editor Content */}
      <div className="flex">
        {/* Line Numbers */}
        <div className="bg-[#1e1e1e] py-4 pl-4">
          <CodeLineNumbers lines={totalBullets + 4} />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4 bg-[#1e1e1e] font-mono text-sm">
          {/* Company Header */}
          <div className="flex items-center gap-2 mb-3">
            <div className={`w-8 h-8 rounded border border-[#333333] bg-[#2d2d30] 
                          flex items-center justify-center transition-all duration-300
                          ${isHovered ? 'bg-[#007acc] border-[#007acc]' : ''}`}>
              <Briefcase className={`h-4 w-4 transition-colors duration-300 
                                   ${isHovered ? 'text-white' : 'text-[#cccccc]'}`} />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="text-[#4ec9b0]">const</span>
                <span className="text-[#9cdcfe]">role</span>
                <span className="text-[#cccccc]">=</span>
                <span className="text-[#ce9178]">"{item.role}"</span>
                <span className="text-[#cccccc]">;</span>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-[#4ec9b0]">const</span>
                <span className="text-[#9cdcfe]">company</span>
                <span className="text-[#cccccc]">=</span>
                <span className="text-[#ce9178]">"{item.company}"</span>
                <span className="text-[#cccccc]">;</span>
              </div>
            </div>
          </div>

          {/* Metadata */}
          <div className="mb-4 text-[#6a9955]">
            <div className="flex items-center gap-2">
              <span className="text-[#6a9955]">//</span>
              <Calendar className="h-3 w-3" />
              <span>{item.start} – {item.end}</span>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-[#6a9955]">//</span>
              <MapPin className="h-3 w-3" />
              <span>{item.location}</span>
            </div>
          </div>

          {/* Responsibilities/Bullets */}
          {item.bullets?.length ? (
            <div className="space-y-1">
              <div className="text-[#cccccc] mb-2">
                <span className="text-[#4ec9b0]">const</span>
                <span className="text-[#cccccc]"> </span>
                <span className="text-[#9cdcfe]">responsibilities</span>
                <span className="text-[#cccccc]"> = [</span>
              </div>
              {item.bullets.map((bullet, i) => (
                <div 
                  key={i}
                  className="flex items-start gap-2 ml-4 opacity-0 animate-in slide-in-from-left-4 fade-in"
                  style={{ 
                    animationDelay: `${(index * 200) + (i * 100)}ms`,
                    animationFillMode: 'forwards'
                  }}
                >
                  <span className="text-[#ce9178] mt-0.5">"</span>
                  <span className="text-[#ce9178] flex-1 leading-relaxed">{bullet}</span>
                  <span className="text-[#ce9178]">",</span>
                </div>
              ))}
              <div className="text-[#cccccc]">];</div>
            </div>
          ) : (
            <div className="text-[#6a9955] italic">
              <span></span>
            </div>
          )}

          {/* Hover Effect: Terminal-style prompt */}
          <div className={`mt-4 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}>
            <div className="flex items-center gap-2 text-xs text-[#569cd6]">
              <Terminal className="h-3 w-3" />
              <span className="font-mono">experience.compile() → </span>
              <span className="text-[#4ec9b0]">Success</span>
            </div>
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <StatusBar 
        fileName={`${item.company.toLowerCase().replace(/\s+/g, '-')}.tsx`}
        language="TypeScript React"
      />

      {/* Animated Border */}
      <div className={`absolute inset-0 rounded-lg border-2 border-[#007acc] opacity-0 
                      transition-opacity duration-300 pointer-events-none
                      ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
    </article>
  );
}

/* ---------- Enhanced Education Section ---------- */
function EducationSection({ items }: { items: EducationItem[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="mt-20">
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#252526] 
                       border border-[#333333] rounded-lg mb-4">
          <GraduationCap className="h-6 w-6 text-[#569cd6]" />
          <span className="text-2xl font-bold text-[#cccccc] font-mono">
            Education.json
          </span>
        </div>
        <p className="text-[#969696] text-sm font-mono">
          // Academic journey and qualifications
        </p>
      </div>

      {/* Education Cards */}
      <div className="mx-auto max-w-4xl">
        <VSCodeSeparator />
        
        <div className="mt-8 space-y-6">
          {items.map((edu, index) => (
            <div 
              key={`${edu.school}-${edu.degree}`}
              className="group relative bg-[#252526] border border-[#333333] rounded-lg p-6
                         hover:border-[#007acc]/50 transition-all duration-300
                         hover:shadow-[0_4px_16px_rgba(0,122,204,0.1)]
                         animate-in slide-in-from-bottom-4 fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
              onMouseEnter={() => setActiveIndex(index)}
            >
              {/* VS Code File Tab */}
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-[#333333]">
                <FileText className="h-4 w-4 text-[#dcb67a]" />
                <span className="text-sm font-mono text-[#cccccc]">
                  {edu.school.toLowerCase().replace(/\s+/g, '-')}.edu
                </span>
                <div className={`ml-auto transition-all duration-300 ${
                  activeIndex === index ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="flex items-center gap-2 text-xs text-[#007acc]">
                    <GitBranch className="h-3 w-3" />
                    <span>main</span>
                  </div>
                </div>
              </div>

              {/* Education Content */}
              <div className="font-mono text-sm space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-[#6a9955]">//</span>
                  <span className="text-[#cccccc] font-semibold">{edu.school}</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="text-[#4ec9b0]">degree:</span>
                  <span className="text-[#ce9178]">"{edu.degree}"</span>
                  <span className="text-[#cccccc]">,</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="text-[#4ec9b0]">duration:</span>
                  <span className="text-[#ce9178]">"{edu.start} – {edu.end}"</span>
                  <span className="text-[#cccccc]">,</span>
                </div>
                
                {edu.gpa && (
                  <div className="flex items-center gap-2">
                    <span className="text-[#4ec9b0]">gpa:</span>
                    <span className="text-[#b5cea8]">{edu.gpa}</span>
                    <span className="text-[#cccccc]">,</span>
                    <div className="flex items-center gap-1 ml-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-3 w-3 ${
                            i < Math.floor(parseFloat(edu.gpa)) 
                              ? 'text-[#ffd700] fill-current' 
                              : 'text-[#333333]'
                          }`} 
                        />
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="flex items-center gap-2">
                  <span className="text-[#4ec9b0]">location:</span>
                  <span className="text-[#ce9178]">"{edu.location}"</span>
                </div>
              </div>

              {/* Progress Indicator */}
              <div className={`mt-4 flex items-center gap-2 transition-all duration-300 ${
                activeIndex === index ? 'opacity-100' : 'opacity-60'
              }`}>
                <div className="h-1 bg-[#333333] rounded flex-1 overflow-hidden">
                  <div className={`h-full bg-[#007acc] rounded transition-all duration-1000 ${
                    activeIndex === index ? 'w-full' : 'w-0'
                  }`} />
                </div>
                <ChevronRight className="h-4 w-4 text-[#007acc]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------- Main Component ---------- */
export default function ExperienceCards({
  items = defaults,
  education = defaultEducation,
  title = 'Experience',
  subtitle = "A quick look at where I've built and shipped.",
  className = '',
}: ExperienceCardsProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={`relative py-20 px-4 bg-[#1a1a1a] ${className}`}>
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-[#252526] 
                         border border-[#333333] rounded-xl mb-6 
                         shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
            <Code className="h-8 w-8 text-[#007acc]" />
            <h2 className="text-4xl font-bold text-[#cccccc] font-mono">
              {title}.ts
            </h2>
          </div>
          <p className="text-[#969696] text-lg font-mono max-w-2xl mx-auto">
            <span className="text-[#6a9955]">// </span>
            {subtitle}
          </p>
        </div>

        {/* Experience Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {items.map((item, index) => (
            <ExperienceCard 
              key={`${item.company}-${item.role}-${item.start}`} 
              item={item} 
              index={index}
            />
          ))}
        </div>

        {/* Education Section */}
        <EducationSection items={education} />
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-[#007acc]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-[#4ec9b0]/5 rounded-full blur-3xl" />
      </div>
    </section>
  );
}