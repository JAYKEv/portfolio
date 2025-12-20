'use client';

import React, { useRef, useState, useEffect } from 'react';
import {
  Code2, Box, Cloud, Cpu, Server, Database, Layers, Braces, GitBranch, Brain, FlaskConical,
  Sparkles, Zap, Star, Rocket
} from 'lucide-react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

/* ----------------------------------------------------------------------------
  Types
---------------------------------------------------------------------------- */
export type SkillItem = { 
  name: string; 
  icon?: React.ComponentType<{ className?: string }>; 
  src?: string; 
  color?: string;
};
export type SkillCategory = { title: string; skills: SkillItem[]; };

interface SkillsProps {
  layout?: 'dock' | 'grid';
  categories?: SkillCategory[];
  className?: string;
  enableFloatingSkills?: boolean;
}

/* ----------------------------------------------------------------------------
  Defaults with enhanced colors
---------------------------------------------------------------------------- */
const defaultGridCategories: SkillCategory[] = [
  { title: 'Languages', skills: [
    { name: 'Python', icon: Brain, color: '#3776AB' }, 
    { name: 'JavaScript', icon: Code2, color: '#F7DF1E' },
    { name: 'TypeScript', icon: Braces, color: '#3178C6' }, 
    { name: 'Java', icon: Code2, color: '#E34F26' },
    { name: 'C', icon: Code2, color: '#A8B9CC' },
    { name: 'Go', icon: Code2, color: '#00ADD8' },
  ]},
  { title: 'Frontend Development', skills: [
    { name: 'React', icon: Code2, color: '#61DAFB' }, 
    { name: 'HTML5', icon: Box, color: '#E34F26' },
    { name: 'CSS3', icon: Box, color: '#1572B6' },
    { name: 'Responsive Design', icon: Cpu, color: '#4ECDC4' },
    { name: 'UI/UX', icon: Layers, color: '#FF6B6B' },
    { name: 'State Management', icon: Cpu, color: '#764ABC' },
  ]},
  { title: 'Backend & Frameworks', skills: [
    { name: 'Node.js', icon: Server, color: '#339933' },
    { name: 'Express.js', icon: Server, color: '#000000' },
    { name: 'Socket.io', icon: Server, color: '#010101' },
    { name: 'REST APIs', icon: Code2, color: '#25D366' },
    { name: 'GraphQL', icon: Code2, color: '#E10098' },
    { name: 'WebSockets', icon: Server, color: '#010101' },
  ]},
  { title: 'Databases', skills: [
    { name: 'MongoDB', icon: Database, color: '#4DB33D' }, 
    { name: 'MySQL', icon: Database, color: '#336791' },
    { name: 'SQL', icon: Database, color: '#336791' },
  ]},
  { title: 'Data & Analytics', skills: [
    { name: 'PowerBI', icon: Database, color: '#F2C811' },
    { name: 'Data Visualization', icon: Cpu, color: '#FF6B6B' },
    { name: 'Business Intelligence', icon: Brain, color: '#4ECDC4' },
    { name: 'DAX', icon: Code2, color: '#F2C811' },
  ]},
  { title: 'Enterprise & Cloud', skills: [
    { name: 'Docker', icon: Box, color: '#2496ED' },
    { name: 'DevOps', icon: Cloud, color: '#00D9FF' },
    { name: 'Cloud Computing', icon: Cloud, color: '#00D9FF' },
  ]},
  { title: 'Software Engineering', skills: [
    { name: 'System Design', icon: Layers, color: '#4ECDC4' },
    { name: 'API Design', icon: Code2, color: '#25D366' },
    { name: 'Microservices', icon: Server, color: '#339933' },
    { name: 'Code Review', icon: GitBranch, color: '#F05032' },
  ]},
  { title: 'Tools & Concepts', skills: [
    { name: 'Git', icon: GitBranch, color: '#F05032' },
    { name: 'Microfrontend', icon: Layers, color: '#764ABC' },
    { name: 'Object-Oriented Programming', icon: Code2, color: '#4ECDC4' },
    { name: 'Distributed Systems', icon: Server, color: '#00D9FF' },
    { name: 'Agile', icon: Layers, color: '#FF6B6B' },
    { name: 'Real-time Systems', icon: Zap, color: '#FFD23F' },
    { name: 'Concurrency', icon: Cpu, color: '#00ADD8' },
    { name: 'Testing', icon: FlaskConical, color: '#C21325' },
  ]},
  
];

/* ----------------------------------------------------------------------------
  Floating Skills Component
---------------------------------------------------------------------------- */
interface FloatingSkill {
  id: string;
  skill: SkillItem;
  direction: 'left' | 'right' | 'top' | 'bottom';
  delay: number;
  duration: number;
  size: number;
}

function FloatingSkillsBackground({ 
  categories, 
  isVisible 
}: { 
  categories: SkillCategory[]; 
  isVisible: boolean; 
}) {
  const [floatingSkills, setFloatingSkills] = useState<FloatingSkill[]>([]);

  // Create floating skills from all categories
  useEffect(() => {
    if (!isVisible) return;

    const allSkills = categories.flatMap(cat => cat.skills);
    const directions: FloatingSkill['direction'][] = ['left', 'right', 'top', 'bottom'];
    
    const createFloatingSkills = () => {
      return allSkills.slice(0, 20).map((skill, index) => ({
        id: `${skill.name}-${index}`,
        skill,
        direction: directions[index % 4],
        delay: Math.random() * 3,
        duration: 8 + Math.random() * 4,
        size: 40 + Math.random() * 20,
      }));
    };

    setFloatingSkills(createFloatingSkills());

    // Refresh floating skills every 12 seconds
    const interval = setInterval(() => {
      setFloatingSkills(createFloatingSkills());
    }, 12000);

    return () => clearInterval(interval);
  }, [categories, isVisible]);

  const getInitialPosition = (direction: FloatingSkill['direction']) => {
    switch (direction) {
      case 'left':
        return { x: -100, y: Math.random() * window.innerHeight };
      case 'right':
        return { x: window.innerWidth + 100, y: Math.random() * window.innerHeight };
      case 'top':
        return { x: Math.random() * window.innerWidth, y: -100 };
      case 'bottom':
        return { x: Math.random() * window.innerWidth, y: window.innerHeight + 100 };
      default:
        return { x: 0, y: 0 };
    }
  };

  const getFinalPosition = (direction: FloatingSkill['direction'], initial: { x: number; y: number }) => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    switch (direction) {
      case 'left':
        return { x: centerX + Math.random() * 200 - 100, y: centerY + Math.random() * 200 - 100 };
      case 'right':
        return { x: centerX + Math.random() * 200 - 100, y: centerY + Math.random() * 200 - 100 };
      case 'top':
        return { x: centerX + Math.random() * 200 - 100, y: centerY + Math.random() * 200 - 100 };
      case 'bottom':
        return { x: centerX + Math.random() * 200 - 100, y: centerY + Math.random() * 200 - 100 };
      default:
        return { x: centerX, y: centerY };
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <AnimatePresence>
        {floatingSkills.map((floatingSkill) => {
          const initial = getInitialPosition(floatingSkill.direction);
          const final = getFinalPosition(floatingSkill.direction, initial);
          const Icon:any = floatingSkill.skill.icon;

          return (
            <motion.div
              key={floatingSkill.id}
              className="absolute opacity-20 hover:opacity-60 transition-opacity duration-300"
              initial={{
                x: initial.x,
                y: initial.y,
                scale: 0,
                rotate: 0,
                opacity: 0,
              }}
              animate={{
                x: final.x,
                y: final.y,
                scale: [0, 1.2, 1],
                rotate: [0, 180, 360],
                opacity: [0, 0.3, 0.6, 0.3, 0],
              }}
              exit={{
                scale: 0,
                opacity: 0,
                transition: { duration: 0.5 }
              }}
              transition={{
                duration: floatingSkill.duration,
                delay: floatingSkill.delay,
                ease: "easeInOut",
                scale: {
                  times: [0, 0.3, 1],
                  duration: floatingSkill.duration * 0.3,
                },
                opacity: {
                  times: [0, 0.2, 0.5, 0.8, 1],
                }
              }}
              style={{
                width: floatingSkill.size,
                height: floatingSkill.size,
              }}
            >
              <div
                className="w-full h-full rounded-full border-2 flex items-center justify-center
                           backdrop-blur-sm shadow-lg"
                style={{
                  backgroundColor: floatingSkill.skill.color ? `${floatingSkill.skill.color}20` : 'rgba(255,255,255,0.1)',
                  borderColor: floatingSkill.skill.color || '#ffffff40',
                  boxShadow: `0 0 20px ${floatingSkill.skill.color}40`
                }}
              >
                {floatingSkill.skill.src ? (
                  <img 
                    src={floatingSkill.skill.src} 
                    alt={floatingSkill.skill.name} 
                    className="w-1/2 h-1/2 object-contain" 
                  />
                ) : Icon ? (
                  <Icon className="w-1/2 h-1/2" style={{ color: floatingSkill.skill.color }} />
                ) : (
                  <span 
                    className="text-lg font-bold"
                    style={{ color: floatingSkill.skill.color }}
                  >
                    {floatingSkill.skill.name[0]}
                  </span>
                )}
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}

/* ----------------------------------------------------------------------------
  Motion presets (enhanced)
---------------------------------------------------------------------------- */
const headerMotion: any = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const cardEnter: any = {
  initial: { opacity: 0, y: 18, scale: 0.985 },
  whileInView: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: { 
      duration: 0.45, 
      ease: [0.22, 1, 0.36, 1],
      scale: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    } 
  },
};

const rowsStagger = {
  animate: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const rowAnimations = [
  // From left
  {
    initial: { opacity: 0, x: -60, scale: 0.8 },
    animate: { 
      opacity: 1, 
      x: 0, 
      scale: 1,
      transition: { 
        type: 'spring', 
        stiffness: 300, 
        damping: 25,
        opacity: { duration: 0.4 }
      } 
    },
  },
  // From right
  {
    initial: { opacity: 0, x: 60, scale: 0.8 },
    animate: { 
      opacity: 1, 
      x: 0, 
      scale: 1,
      transition: { 
        type: 'spring', 
        stiffness: 300, 
        damping: 25,
        opacity: { duration: 0.4 }
      } 
    },
  },
  // From top
  {
    initial: { opacity: 0, y: -40, scale: 0.8 },
    animate: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        type: 'spring', 
        stiffness: 300, 
        damping: 25,
        opacity: { duration: 0.4 }
      } 
    },
  },
  // From bottom
  {
    initial: { opacity: 0, y: 40, scale: 0.8 },
    animate: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        type: 'spring', 
        stiffness: 300, 
        damping: 25,
        opacity: { duration: 0.4 }
      } 
    },
  },
];

/* ----------------------------------------------------------------------------
  Enhanced Row component with directional animations
---------------------------------------------------------------------------- */
function SkillRow({ s, i }: { s: SkillItem; i: number }) {
  const Icon: any= s.icon;
  const [isHovered, setIsHovered] = useState(false);
  
  // Cycle through different directions
  const animationVariant: any= rowAnimations[i % 4];

  return (
    <motion.div
      variants ={animationVariant}
      className="group relative flex items-center gap-3 rounded-xl border border-[rgb(var(--border))]
                 bg-[rgb(var(--bg-primary))] hover:bg-[rgb(var(--bg-tertiary))]
                 text-[rgb(var(--fg-secondary))] hover:text-[rgb(var(--fg-primary))]
                 transition-all duration-300 px-3 py-2 cursor-pointer overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ 
        scale: 1.02,
        boxShadow: s.color ? `0 8px 25px ${s.color}20` : '0 8px 25px rgba(0,0,0,0.1)'
      }}
    >
      {/* Animated background glow */}
      <motion.div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: s.color 
            ? `linear-gradient(135deg, ${s.color}10, ${s.color}05)` 
            : 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))'
        }}
      />

      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
        initial={{ x: '-100%' }}
        animate={isHovered ? { x: '200%' } : { x: '-100%' }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      />

      {/* Enhanced icon container */}
      <motion.div
        className="relative grid h-8 w-8 place-items-center rounded-lg border transition-all duration-200 z-10"
        style={{
          borderColor: s.color || 'rgb(var(--border))',
          backgroundColor: s.color ? `${s.color}15` : 'rgb(var(--bg-secondary))'
        }}
        whileHover={{ 
          rotate: 360,
          scale: 1.1,
        }}
        transition={{ 
          rotate: { duration: 0.6, ease: "easeInOut" },
          scale: { duration: 0.2 }
        }}
      >
        {s.src ? (
          <img src={s.src} alt={s.name} className="h-4 w-4 object-contain" />
        ) : Icon ? (
          <Icon className="h-4 w-4" style={{ color: s.color }} />
        ) : (
          <span className="text-xs font-bold" style={{ color: s.color }}>
            {s.name[0]}
          </span>
        )}

        {/* Floating particles on hover */}
        <AnimatePresence>
          {isHovered && (
            <>
              {[...Array(3)].map((_, index) => (
                <motion.div
                  key={index}
                  className="absolute w-1 h-1 rounded-full"
                  style={{ backgroundColor: s.color || '#ffffff' }}
                  initial={{ 
                    scale: 0,
                    x: 0,
                    y: 0,
                    opacity: 0
                  }}
                  animate={{ 
                    scale: [0, 1, 0],
                    x: (Math.random() - 0.5) * 40,
                    y: (Math.random() - 0.5) * 40,
                    opacity: [0, 1, 0]
                  }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{
                    duration: 1,
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                />
              ))}
            </>
          )}
        </AnimatePresence>
      </motion.div>

      <span className="text-sm font-medium relative z-10 group-hover:font-semibold transition-all duration-200">
        {s.name}
      </span>

      {/* Skill level indicator */}
      <motion.div
        className="absolute right-2 w-1 h-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ backgroundColor: s.color || 'rgb(var(--fg-tertiary))' }}
        initial={{ scaleY: 0 }}
        animate={isHovered ? { scaleY: Math.random() * 0.5 + 0.5 } : { scaleY: 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}

/* ----------------------------------------------------------------------------
  Enhanced Card with improved animations
---------------------------------------------------------------------------- */
function CategoryCard({ cat, index }: { cat: SkillCategory; index: number }) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(cardRef, { once: true, margin: '-10% 0px' });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={cardRef}
      variants={cardEnter}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true, margin: '-10% 0px' }}
      className="group relative rounded-2xl border border-[rgb(var(--border))]
                 bg-[rgb(var(--bg-primary))] p-6
                 shadow-[0_8px_20px_-12px_rgba(0,0,0,.15)]
                 transition-all duration-300 hover:bg-[rgb(var(--bg-secondary))]
                 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,.25)]
                 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -4 }}
    >
      {/* Enhanced sheen effect */}
      <motion.div
        className="pointer-events-none absolute -top-1/2 left-0 h-[200%] w-12
                   bg-gradient-to-b from-transparent via-white/10 to-transparent
                   rotate-12"
        initial={{ x: '-100%', opacity: 0 }}
        animate={inView ? { 
          x: '400%', 
          opacity: [0, 1, 0],
          transition: { 
            duration: 1.5, 
            delay: index * 0.1,
            ease: 'easeInOut'
          }
        } : {}}
      />

      {/* Floating background particles */}
      <AnimatePresence>
        {isHovered && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-white/10"
                initial={{ 
                  x: Math.random() * 100 + '%',
                  y: Math.random() * 100 + '%',
                  scale: 0,
                  opacity: 0
                }}
                animate={{ 
                  y: '-20px',
                  scale: [0, 1, 0],
                  opacity: [0, 0.6, 0]
                }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{
                  duration: 2,
                  delay: i * 0.2,
                  repeat: Infinity,
                  ease: "easeOut"
                }}
              />
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* Animated border accent */}
      <motion.div 
        className="pointer-events-none absolute inset-0 rounded-2xl"
        initial={{ background: 'transparent' }}
        animate={isHovered ? {
          background: 'linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)',
        } : {}}
        transition={{ duration: 0.3 }}
      />

      <motion.h3 
        className="text-sm font-semibold tracking-wide text-[rgb(var(--fg-primary))] relative z-10
                   flex items-center gap-2"
        whileHover={{ x: 4 }}
      >
        <Sparkles className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" />
        {cat.title}
        <motion.div
          className="ml-auto w-2 h-2 rounded-full bg-green-400"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.h3>

      <motion.div
        variants={rowsStagger}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-10% 0px' }}
        className="mt-4 grid grid-cols-1 gap-2 relative z-10"
      >
        {cat.skills.map((s, i) => (
          <SkillRow key={s.name} s={s} i={i} />
        ))}
      </motion.div>
    </motion.div>
  );
}

/* ----------------------------------------------------------------------------
  Enhanced Header
---------------------------------------------------------------------------- */
function SectionHeader() {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });

  return (
    <motion.div
      ref={ref}
      className="mb-12 text-center relative"
      initial="initial"
      animate={inView ? 'animate' : 'initial'}
      variants={headerMotion}
    >
      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[Star, Zap, Rocket].map((Icon, i) => (
          <motion.div
            key={i}
            className="absolute text-blue-400/20"
            style={{
              left: `${20 + i * 30}%`,
              top: `${10 + i * 20}%`
            }}
            animate={{
              y: [-10, 10, -10],
              rotate: [0, 180, 360],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          >
            <Icon className="w-6 h-6" />
          </motion.div>
        ))}
      </div>

      <motion.h2
        className="text-4xl lg:text-5xl font-bold tracking-tight mb-4 relative z-10"
        style={{
          background: 'linear-gradient(135deg, #111 0%, #555 50%, #888 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        Skills & Technologies
      </motion.h2>

      <motion.div
  className="h-1 w-24 rounded-full mx-auto mb-6 bg-black"
  initial={{ scaleX: 0, opacity: 0 }}
  animate={inView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
  transition={{ delay: 0.25, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
  style={{ transformOrigin: 'center' }}
/>


      <motion.p
        className="text-[rgb(var(--fg-secondary))] max-w-2xl mx-auto relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.45, duration: 0.5 }}
      >
        A comprehensive toolkit for building scalable web applications and cloud-native systems.
        <br />
        
      </motion.p>
    </motion.div>
  );
}

/* ----------------------------------------------------------------------------
  Main Skills Component with floating background
---------------------------------------------------------------------------- */
export default function Skills({
  layout = 'grid',
  categories,
  className = '',
  enableFloatingSkills = true,
}: SkillsProps) {
  const cats = categories || defaultGridCategories;
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-20% 0px' });

  return (
    <section 
      ref={sectionRef}
      className={`relative py-16 px-4 bg-[rgb(var(--bg-primary))] ${className} overflow-hidden`}
    >
      {/* Enhanced CSS animations */}
      <style jsx global>{`
        @keyframes sheen {
          to { transform: translateX(140%); opacity: 0; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 5px currentColor; }
          50% { box-shadow: 0 0 20px currentColor; }
        }
        
        @media (prefers-reduced-motion: reduce) {
          [data-reduce-motion="true"] {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>

      {/* Floating Skills Background */}
      {enableFloatingSkills && (
        <FloatingSkillsBackground categories={cats} isVisible={inView} />
      )}

      <div className="mx-auto max-w-6xl relative z-10">
        <SectionHeader />

        {layout === 'grid' ? (
          <motion.div 
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, staggerChildren: 0.1 }}
          >
            {cats.map((cat, index) => (
              <CategoryCard key={cat.title} cat={cat} index={index} />
            ))}
          </motion.div>
        ) : (
          <p className="text-center text-[rgb(var(--fg-secondary))]">
            Dock layout currently disabled in this variant.
          </p>
        )}
      </div>

      {/* Subtle background grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>
    </section>
  );
}