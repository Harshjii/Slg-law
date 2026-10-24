import React, { useState } from 'react';
import { Menu, X, ArrowRight, Shield } from 'lucide-react';
import { FIRM_DETAILS } from '../data/legalData';

const CHAPTERS = [
  { id: "services", label: "CH. 1 SERVICES", full: "CH. 1 PRACTICE SERVICES" },
  { id: "leadership", label: "CH. 2 LEADERSHIP", full: "CH. 2 LEADERSHIP" },
  { id: "bench", label: "CH. 3 BENCH", full: "CH. 3 BENCH" },
  { id: "practice", label: "CH. 4 PRACTICE", full: "CH. 4 THE PRACTICE" },
  { id: "ventures", label: "CH. 5 VENTURES", full: "CH. 5 VENTURES" },
  { id: "questions", label: "CH. 6 QUESTIONS", full: "CH. 6 QUESTIONS" }
];

export default function Navbar({ onOpenQuery, onOpenBci }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      // Offset for sticky navbar
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FDFCF9]/95 backdrop-blur-md border-b border-legal-border transition-all">
      {/* Main Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-2.5 sm:py-3 flex justify-between items-center gap-3">
        
        {/* Brand Official Logo & Title */}
        <a 
          href="#" 
          className="flex items-center space-x-2.5 sm:space-x-3.5 group focus:outline-none min-w-0"
          aria-label="Statewide Litigation Group Home"
        >
          <img 
            src="/logo.png" 
            alt="Statewide Litigation Group Logo" 
            className="h-9 sm:h-11 md:h-12 w-auto object-contain transition-transform group-hover:scale-[1.02] shrink-0"
          />
          <div className="min-w-0">
            <h1 className="serif-title text-base sm:text-xl font-bold tracking-tight text-legal-dark leading-tight truncate">
              Statewide Litigation Group
            </h1>
            <p className="mono-tag text-[8px] sm:text-[10px] text-legal-accent tracking-wider font-semibold truncate">
              CHAMBERS & ADVOCATES // ESTD. 1983
            </p>
          </div>
        </a>

        {/* Desktop CTA */}
        <div className="hidden sm:flex items-center space-x-3 shrink-0">
          <button
            type="button"
            onClick={onOpenQuery}
            className="bg-legal-cardBg hover:bg-gold-100 text-legal-dark mono-tag text-xs font-semibold px-4 py-2.5 border border-legal-accent/60 transition-all flex items-center space-x-2 active:scale-95 cursor-pointer shadow-xs"
          >
            <span>QUERY HELPLINE</span>
            <span className="text-legal-accent font-bold">→</span>
          </button>
        </div>

        {/* Mobile Right Controls */}
        <div className="flex items-center space-x-2 sm:hidden shrink-0">
          <button
            type="button"
            onClick={onOpenQuery}
            className="bg-legal-dark text-white mono-tag text-[11px] px-3 py-1.5 border border-legal-accent font-semibold active:scale-95"
          >
            QUERY
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 border border-legal-border bg-legal-cardBg text-legal-dark hover:bg-legal-border active:scale-95 transition-colors cursor-pointer"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Full Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="sm:hidden fixed inset-x-0 top-[88px] bottom-0 bg-[#FDFCF9] z-50 overflow-y-auto px-5 py-6 space-y-5 animate-fadeIn shadow-2xl border-t border-legal-border">
          <div className="flex items-center justify-between pb-3 border-b border-legal-border">
            <div className="flex items-center space-x-2.5">
              <img src="/logo.png" alt="SLG" className="h-8 w-auto object-contain" />
              <span className="mono-tag text-xs text-legal-accent font-bold">
                CHAMBERS DIRECTORY
              </span>
            </div>
            <span className="mono-tag text-[10px] bg-gold-100 text-legal-dark px-2 py-0.5 border border-legal-accent/40 font-semibold">
              ESTD. 1983
            </span>
          </div>

          {/* Chapters Links */}
          <div className="space-y-1.5 mono-tag text-xs">
            {CHAPTERS.map(chap => (
              <button
                key={chap.id}
                type="button"
                onClick={() => handleNavClick(chap.id)}
                className="w-full text-left py-3 px-3.5 bg-legal-cardBg border border-legal-border hover:border-legal-accent text-legal-dark flex justify-between items-center active:bg-gold-100/50"
              >
                <span className="font-medium">{chap.full}</span>
                <span className="text-legal-accent font-bold">→</span>
              </button>
            ))}
          </div>

          {/* Quick Action CTAs */}
          <div className="pt-3 border-t border-legal-border space-y-2.5">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuery();
              }}
              className="w-full bg-legal-dark text-white mono-tag text-xs font-semibold py-3.5 flex items-center justify-center space-x-2 border border-legal-accent active:scale-98 shadow-sm"
            >
              <span>DISPATCH BRIEF TO REGISTRY</span>
              <ArrowRight className="w-4 h-4 text-legal-accent" />
            </button>
            
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBci();
              }}
              className="w-full bg-legal-cardBg text-legal-dark mono-tag text-xs py-3 border border-legal-border flex items-center justify-center space-x-2 active:bg-zinc-100"
            >
              <Shield className="w-4 h-4 text-legal-accent" />
              <span>STATUTORY BCI RULE 36 DISCLAIMER</span>
            </button>
          </div>

          <div className="pt-4 text-center mono-tag text-[10px] text-zinc-500">
            Advocates Act, 1961 • Supreme Court & Pan-India Benches
          </div>
        </div>
      )}
    </header>
  );
}
