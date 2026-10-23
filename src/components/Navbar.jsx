import React, { useState } from 'react';
import { Menu, X, ArrowRight, Shield } from 'lucide-react';

const CHAPTERS = [
  { id: "practice", label: "CH. 1 PRACTICE", full: "CH. 1 THE PRACTICE" },
  { id: "leadership", label: "CH. 2 LEADERSHIP", full: "CH. 2 LEADERSHIP" },
  { id: "bench", label: "CH. 3 BENCH", full: "CH. 3 BENCH" },
  { id: "locator", label: "CH. 4 MAP", full: "CH. 4 MAP LOCATOR" },
  { id: "expertise", label: "CH. 5 EXPERTISE", full: "CH. 5 EXPERTISE" },
  { id: "ventures", label: "CH. 6 VENTURES", full: "CH. 6 VENTURES" },
  { id: "questions", label: "CH. 7 QUESTIONS", full: "CH. 7 QUESTIONS" }
];

export default function Navbar({ onOpenQuery, onOpenBci }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FDFCF9]/95 backdrop-blur-md border-b border-legal-border transition-all">
      <div className="max-w-7xl mx-auto px-4 md:px-12 py-3 flex justify-between items-center gap-4">
        
        {/* Brand Official Logo & Title */}
        <a 
          href="#" 
          className="flex items-center space-x-3.5 group focus:outline-none"
          aria-label="Statewide Litigation Group Home"
        >
          <img 
            src="/logo.png" 
            alt="Statewide Litigation Group Logo" 
            className="h-11 sm:h-12 w-auto object-contain transition-transform group-hover:scale-[1.02]"
          />
          <div className="hidden sm:block">
            <h1 className="serif-title text-xl font-bold tracking-tight text-legal-dark leading-none">
              Statewide Litigation Group
            </h1>
            <p className="mono-tag text-[9px] sm:text-[10px] text-legal-accent mt-1 tracking-wider font-semibold">
              CHAMBERS & ADVOCATES // ESTD. 1983
            </p>
          </div>
        </a>

        {/* Desktop Chapter Navigation Links */}
        <nav className="hidden xl:flex items-center space-x-5 mono-tag text-[11px] text-slate-700 font-medium">
          {CHAPTERS.map(chap => (
            <button
              key={chap.id}
              type="button"
              onClick={() => handleNavClick(chap.id)}
              className="hover:text-legal-dark transition-colors py-1 border-b-2 border-transparent hover:border-legal-accent cursor-pointer"
            >
              {chap.full}
            </button>
          ))}
        </nav>

        {/* Desktop & Tablet CTA */}
        <div className="hidden sm:flex items-center space-x-3">
          <button
            type="button"
            onClick={onOpenQuery}
            className="bg-legal-cardBg hover:bg-gold-100 text-legal-dark mono-tag text-xs font-semibold px-4 py-2.5 border border-legal-accent/60 transition-all flex items-center space-x-2 active:scale-95 cursor-pointer shadow-xs"
          >
            <span>QUERY HELPLINE</span>
            <span className="text-legal-accent font-bold">→</span>
          </button>
        </div>

        {/* Mobile Hamburger Button & Quick CTA */}
        <div className="flex items-center space-x-2 sm:hidden">
          <button
            type="button"
            onClick={onOpenQuery}
            className="bg-legal-dark text-white mono-tag text-[10px] px-2.5 py-1.5 border border-legal-accent font-semibold"
          >
            QUERY
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 border border-legal-border bg-legal-cardBg text-legal-dark hover:bg-legal-border transition-colors cursor-pointer"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-legal-dark" /> : <Menu className="w-5 h-5 text-legal-dark" />}
          </button>
        </div>
      </div>
      
      {/* Horizontal Sub-Bar for Quick Chapter Navigation on Tablets & Mobile */}
      <div className="xl:hidden bg-legal-cardBg border-t border-legal-border px-4 py-2 flex overflow-x-auto space-x-4 mono-tag text-[10px] whitespace-nowrap scrollbar-none">
        {CHAPTERS.map(chap => (
          <button
            key={chap.id}
            type="button"
            onClick={() => handleNavClick(chap.id)}
            className="hover:text-legal-dark text-slate-700 transition-colors py-0.5 cursor-pointer font-medium"
          >
            {chap.label}
          </button>
        ))}
      </div>

      {/* Full Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#FDFCF9] border-b border-legal-border px-6 py-6 space-y-5 animate-fadeIn shadow-xl">
          <div className="flex items-center space-x-3 pb-2 border-b border-legal-border">
            <img src="/logo.png" alt="SLG" className="h-8 w-auto object-contain" />
            <span className="mono-tag text-[11px] text-legal-accent font-semibold">
              CHAMBERS CHAPTER NAVIGATION
            </span>
          </div>

          <div className="grid grid-cols-1 gap-2.5 mono-tag text-xs">
            {CHAPTERS.map(chap => (
              <button
                key={chap.id}
                type="button"
                onClick={() => handleNavClick(chap.id)}
                className="text-left py-2 px-3 bg-legal-cardBg border border-legal-border hover:border-legal-accent text-legal-dark flex justify-between items-center"
              >
                <span>{chap.full}</span>
                <span className="text-legal-accent">→</span>
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-legal-border space-y-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuery();
              }}
              className="w-full bg-legal-dark text-white mono-tag text-xs font-semibold py-3 flex items-center justify-center space-x-2 border border-legal-accent"
            >
              <span>OPEN QUERY HELPLINE</span>
              <ArrowRight className="w-4 h-4 text-legal-accent" />
            </button>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBci();
              }}
              className="w-full bg-legal-cardBg text-legal-dark mono-tag text-xs py-2.5 border border-legal-border flex items-center justify-center space-x-2"
            >
              <Shield className="w-3.5 h-3.5 text-legal-accent" />
              <span>VIEW BCI RULE 36 DISCLAIMER</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
