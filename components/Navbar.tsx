'use client';

import { useEffect, useState } from 'react';
import { site } from '@/lib/siteConfig';
import { Menu, X, Code, Folder, Settings, Search } from 'lucide-react';

/* ---------- VS CODE THEMED HELPERS ---------- */
function VSCodeDots() {
  return (
    <div className="flex items-center gap-2">
      <span className="h-3 w-3 rounded-full bg-[#ff5f57] border border-[#e0443e] shadow-sm hover:bg-[#ff6b63] transition-colors duration-200 cursor-pointer" />
      <span className="h-3 w-3 rounded-full bg-[#ffbd2e] border border-[#dea123] shadow-sm hover:bg-[#ffc441] transition-colors duration-200 cursor-pointer" />
      <span className="h-3 w-3 rounded-full bg-[#28ca42] border border-[#1aab29] shadow-sm hover:bg-[#32d249] transition-colors duration-200 cursor-pointer" />
    </div>
  );
}

function VSCodeBrand({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3">
      <Code className="h-5 w-5 text-[#007acc]" />
      <span className="font-mono text-sm text-[#cccccc] select-none flex items-center gap-1">
        <span className="text-[#569cd6] font-semibold">{text}</span>
        <span className="text-[#6a9955]">//</span>
        <span className="text-[#4ec9b0] text-xs">portfolio.tsx</span>
        <span className="ml-1 w-0.5 h-4 bg-[#007acc] animate-pulse"></span>
      </span>
    </div>
  );
}

function TabIndicator({ isActive = false }: { isActive?: boolean }) {
  return (
    <div className={`absolute top-0 left-0 right-0 h-0.5 transition-all duration-200 ${
      isActive ? 'bg-[#007acc]' : 'bg-transparent'
    }`} />
  );
}

/* ============================================================================
 * VS CODE THEMED NAVBAR
 * - Dark VS Code color scheme
 * - Tab-like navigation buttons
 * - Maintains terminal integration for "About"
 * ==========================================================================*/
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const barBase = 'fixed top-0 left-0 right-0 z-50 transition-all duration-300';
  const barSkin = isScrolled
    ? 'bg-[#1e1e1e] border-b border-[#333333] shadow-[0_2px_8px_rgba(0,0,0,0.8)]'
    : 'bg-[#1e1e1e]/95 border-b border-[#2d2d30] shadow-[0_1px_3px_rgba(0,0,0,0.5)]';

  const isAbout = (label: string) =>
    label.toLowerCase() === 'about' || label.toLowerCase().includes('about me');

  const handleItemClick = (label: string, href: string) => (e: React.MouseEvent) => {
    setActiveTab(label);
    
    if (isAbout(label)) {
      e.preventDefault();
      const target = document.querySelector('#terminal');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      document.dispatchEvent(new CustomEvent('terminal:run'));
      setIsOpen(false);
      return;
    }
    setIsOpen(false);
  };

  return (
    <nav className={`${barBase} ${barSkin}`}>
      {/* VS Code window controls */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
        <VSCodeDots />
      </div>

      <div className="mx-auto max-w-7xl px-4 pl-20">
        <div className="flex h-12 items-center">
          {/* Brand/Logo */}
          <div className="flex items-center">
            <VSCodeBrand text={site?.name?.split(' ')[0] || 'Portfolio'} />
          </div>

          {/* Push nav to the right */}
          <div className="ml-auto flex items-center">
            {/* Desktop Navigation - VS Code Tab Style */}
            <div className="hidden md:flex items-center">
              {site.nav.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleItemClick(item.label, item.href)}
                  className="relative group px-4 py-3 text-sm font-normal
                             text-[#cccccc] hover:text-white
                             bg-[#2d2d30] hover:bg-[#37373d]
                             border-r border-[#333333] last:border-r-0
                             transition-all duration-200
                             first:rounded-tl-md last:rounded-tr-md"
                  onMouseEnter={() => setActiveTab(item.label)}
                  onMouseLeave={() => setActiveTab('')}
                >
                  <TabIndicator isActive={activeTab === item.label} />
                  <div className="flex items-center gap-2">
                    {index === 0 && <Folder className="h-3.5 w-3.5 text-[#dcb67a]" />}
                    {index === 1 && <Search className="h-3.5 w-3.5 text-[#4ec9b0]" />}
                    {index === 2 && <Settings className="h-3.5 w-3.5 text-[#569cd6]" />}
                    <span>{item.label}</span>
                  </div>
                  
                  {/* Modified indicator */}
                  <div className="absolute right-2 top-1/2 -translate-y-1/2 
                                  w-1.5 h-1.5 rounded-full bg-[#007acc] opacity-0 
                                  group-hover:opacity-100 transition-opacity duration-200" />
                </a>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden ml-4 p-2 rounded text-[#cccccc] hover:text-white 
                         hover:bg-[#37373d] border border-[#333333] hover:border-[#007acc]
                         transition-all duration-200"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <div className="relative h-5 w-5">
                <Menu
                  className={`absolute inset-0 transition-all duration-300 ${
                    isOpen ? 'opacity-0 rotate-90 scale-75' : 'opacity-100 rotate-0 scale-100'
                  }`}
                />
                <X
                  className={`absolute inset-0 transition-all duration-300 ${
                    isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-75'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
            isOpen 
              ? 'max-h-96 opacity-100 translate-y-0' 
              : 'max-h-0 opacity-0 -translate-y-2'
          }`}
        >
          <div className="border-t border-[#333333] bg-[#252526] rounded-b-md">
            {site.nav.map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleItemClick(item.label, item.href)}
                className="flex items-center justify-between px-4 py-3 
                           text-[#cccccc] hover:text-white hover:bg-[#37373d]
                           border-b border-[#2d2d30] last:border-b-0
                           transition-all duration-200 font-mono text-sm
                           animate-in slide-in-from-top-1 fade-in"
                style={{ 
                  animationDelay: `${i * 0.1}s`, 
                  animationFillMode: 'both',
                  animationDuration: '0.4s'
                }}
              >
                <div className="flex items-center gap-3">
                  {i === 0 && <Folder className="h-4 w-4 text-[#dcb67a]" />}
                  {i === 1 && <Search className="h-4 w-4 text-[#4ec9b0]" />}
                  {i === 2 && <Settings className="h-4 w-4 text-[#569cd6]" />}
                  <span>{item.label}</span>
                </div>
                <span className="text-[#007acc] opacity-60 group-hover:opacity-100 
                               transition-opacity duration-200">
                  {'>' }
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

/* ============================================================================
 * PROFESSIONAL VS CODE NAVBAR (alternative variant)
 * ==========================================================================*/
interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
  external?: boolean;
}

interface ProfessionalNavbarProps {
  brand?: string;
  items?: NavItem[];
  showCTA?: boolean;
  ctaText?: string;
  ctaHref?: string;
  variant?: 'default' | 'minimal' | 'centered';
}

export function ProfessionalNavbar({
  brand,
  items,
  showCTA = false,
  ctaText = 'Deploy',
  ctaHref = '#contact',
  variant = 'default',
}: ProfessionalNavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('');

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = items || site.nav || [];
  const brandName = brand || site.name?.split(' ')[0] || 'Code';

  const base = 'fixed top-0 left-0 right-0 z-50 transition-all duration-300';
  const skin = isScrolled
    ? 'bg-[#1e1e1e] border-b border-[#333333] shadow-[0_2px_8px_rgba(0,0,0,0.8)]'
    : 'bg-[#1e1e1e]/95 border-b border-[#2d2d30] shadow-[0_1px_3px_rgba(0,0,0,0.5)]';

  const isAbout = (label: string) =>
    label.toLowerCase() === 'about' || label.toLowerCase().includes('about me');

  const handleItemClick = (label: string, href: string) => (e: React.MouseEvent) => {
    setActiveTab(label);
    
    if (isAbout(label)) {
      e.preventDefault();
      const target = document.querySelector('#terminal');
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      document.dispatchEvent(new CustomEvent('terminal:run'));
      setIsOpen(false);
      return;
    }
    setIsOpen(false);
  };

  return (
    <nav className={`${base} ${skin}`}>
      {variant !== 'centered' && (
        <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
          <VSCodeDots />
        </div>
      )}

      <div className="mx-auto max-w-7xl px-4">
        <div className={`flex h-12 items-center ${
          variant === 'centered' ? 'justify-center' : 'w-full'
        }`}>
          
          {variant !== 'centered' && (
            <>
              <div className="flex items-center ml-20">
                <VSCodeBrand text={brandName} />
              </div>

              <div className="ml-auto hidden md:flex items-center">
                {navItems.map((item, index) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={handleItemClick(item.label, item.href)}
                    className="relative group px-4 py-3 text-sm font-normal
                               text-[#cccccc] hover:text-white
                               bg-[#2d2d30] hover:bg-[#37373d]
                               border-r border-[#333333] last:border-r-0
                               transition-all duration-200
                               first:rounded-tl-md last:rounded-tr-md"
                    onMouseEnter={() => setActiveTab(item.label)}
                    onMouseLeave={() => setActiveTab('')}
                  >
                    <TabIndicator isActive={activeTab === item.label} />
                    <span>{item.label}</span>
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 
                                    w-1.5 h-1.5 rounded-full bg-[#007acc] opacity-0 
                                    group-hover:opacity-100 transition-opacity duration-200" />
                  </a>
                ))}

                {showCTA && (
                  <button className="ml-4 px-4 py-2 bg-[#007acc] hover:bg-[#1177bb] 
                                   text-white text-sm font-medium rounded
                                   transition-all duration-200 hover:shadow-lg
                                   hover:shadow-[#007acc]/20">
                    {ctaText}
                  </button>
                )}
              </div>

              <button
                className="md:hidden ml-auto p-2 rounded text-[#cccccc] hover:text-white 
                           hover:bg-[#37373d] border border-[#333333] hover:border-[#007acc]
                           transition-all duration-200"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                <div className="relative h-5 w-5">
                  <Menu
                    className={`absolute inset-0 transition-all duration-300 ${
                      isOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
                    }`}
                  />
                  <X
                    className={`absolute inset-0 transition-all duration-300 ${
                      isOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
                    }`}
                  />
                </div>
              </button>
            </>
          )}
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="border-t border-[#333333] bg-[#252526] rounded-b-md">
            {navItems.map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleItemClick(item.label, item.href)}
                className="flex items-center justify-between px-4 py-3 
                           text-[#cccccc] hover:text-white hover:bg-[#37373d]
                           border-b border-[#2d2d30] last:border-b-0
                           transition-all duration-200 font-mono text-sm"
              >
                <span>{item.label}</span>
                <span className="text-[#007acc]">{'>'}</span>
              </a>
            ))}
            
            {showCTA && (
              <div className="p-4 border-t border-[#333333]">
                <button className="w-full px-4 py-2 bg-[#007acc] hover:bg-[#1177bb] 
                                 text-white text-sm font-medium rounded
                                 transition-colors duration-200">
                  {ctaText}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}