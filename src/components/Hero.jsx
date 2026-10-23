import React from 'react';
import { ArrowRight, Compass, ShieldCheck } from 'lucide-react';

export default function Hero({ onScrollTo, onOpenQuery }) {
  return (
    <section className="space-y-5 sm:space-y-8 pt-1 sm:pt-4">
      {/* Top Meta Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 border-b border-legal-border pb-3 sm:pb-4">
        <div className="flex items-center space-x-2 mono-tag text-[10px] sm:text-xs text-legal-accent font-semibold tracking-wide">
          <span className="w-2 h-2 rounded-full bg-legal-accent animate-pulse shrink-0"></span>
          <span>SLG // ADVOCACY ARCHITECTURE // PAN-INDIA BENCH</span>
        </div>
        <div className="mono-tag text-[9px] sm:text-[11px] text-zinc-500 flex flex-wrap items-center gap-1.5 sm:gap-4">
          <button 
            type="button"
            onClick={() => onScrollTo('locator')} 
            className="hover:text-legal-dark underline cursor-pointer transition-colors"
          >
            DELHI NCR
          </button>
          <span>•</span>
          <button 
            type="button"
            onClick={() => onScrollTo('locator')} 
            className="hover:text-legal-dark underline cursor-pointer transition-colors"
          >
            KANPUR
          </button>
          <span>•</span>
          <button 
            type="button"
            onClick={() => onScrollTo('expertise')} 
            className="hover:text-legal-dark underline cursor-pointer transition-colors"
          >
            SUPREME COURT OF INDIA
          </button>
        </div>
      </div>

      {/* Main Editorial Headline */}
      <div className="space-y-2 sm:space-y-4 max-w-5xl">
        <h2 className="serif-title text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-normal tracking-tight text-legal-dark leading-[1.1] sm:leading-[1.08]">
          Trial-tested standing.
        </h2>
        <h2 className="serif-title text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-normal italic tracking-tight text-zinc-700 leading-[1.14] sm:leading-[1.12]">
          Appellate rigor before India's highest benches.
        </h2>
      </div>

      {/* Quick Summary & Responsive Actions */}
      <div className="pt-3 sm:pt-4 flex flex-col md:flex-row md:items-center justify-between gap-4 border-t border-legal-border">
        <p className="text-xs sm:text-sm text-zinc-600 max-w-xl font-sans leading-relaxed">
          Chambers founded in 1983 bridging four decades of original trial court jurisdiction with strategic appellate representation across the Supreme Court of India, Delhi High Court, and specialized tribunals.
        </p>

        <div className="flex items-center space-x-2.5 sm:space-x-3 shrink-0 pt-1 md:pt-0">
          <button
            type="button"
            onClick={() => onScrollTo('locator')}
            className="flex-1 sm:flex-initial bg-legal-cardBg hover:bg-legal-border text-legal-dark mono-tag text-xs px-4 py-2.5 sm:py-3 border border-legal-border flex items-center justify-center space-x-2 transition-colors cursor-pointer active:scale-95"
          >
            <Compass className="w-3.5 h-3.5 text-legal-accent" />
            <span>COURT MAP</span>
          </button>
          <button
            type="button"
            onClick={onOpenQuery}
            className="flex-1 sm:flex-initial bg-legal-dark text-white hover:bg-zinc-800 mono-tag text-xs px-5 py-2.5 sm:py-3 border border-legal-accent flex items-center justify-center space-x-2 transition-colors cursor-pointer active:scale-95 shadow-sm"
          >
            <span>SUBMIT BRIEF</span>
            <ArrowRight className="w-3.5 h-3.5 text-legal-accent" />
          </button>
        </div>
      </div>
    </section>
  );
}
