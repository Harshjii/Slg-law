import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero({ onScrollTo, onOpenQuery }) {
  return (
    <section className="space-y-6 sm:space-y-10 pt-2 sm:pt-4">
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
      <div className="pt-4 sm:pt-6 flex flex-col md:flex-row md:items-center justify-between gap-4 border-t border-legal-border">
        <p className="text-xs sm:text-sm text-zinc-600 max-w-xl font-sans leading-relaxed">
          Chambers founded in 1983 bridging four decades of original trial court jurisdiction with strategic appellate representation across the Supreme Court of India, Delhi High Court, and specialized tribunals.
        </p>

        <div className="shrink-0 pt-1 md:pt-0">
          <button
            type="button"
            onClick={onOpenQuery}
            className="w-full sm:w-auto bg-legal-dark text-white hover:bg-zinc-800 mono-tag text-xs px-6 py-2.5 sm:py-3 border border-legal-accent flex items-center justify-center space-x-2 transition-colors cursor-pointer active:scale-95 shadow-sm"
          >
            <span>SUBMIT BRIEF</span>
            <ArrowRight className="w-3.5 h-3.5 text-legal-accent" />
          </button>
        </div>
      </div>
    </section>
  );
}
