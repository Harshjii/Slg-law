import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero({ onScrollToManagingDirector, onExplorePractice }) {
  return (
    <section className="relative w-full h-[75vh] sm:h-[82vh] min-h-[520px] max-h-[820px] overflow-hidden flex flex-col justify-between -mt-6 sm:-mt-12 md:-mt-20 -mx-4 sm:-mx-6 md:-mx-12 px-4 sm:px-8 md:px-16 pt-12 sm:pt-16 pb-6 sm:pb-8 border-b border-[#1B3564]">
      {/* Background Photograph */}
      <img
        src="/hero-bg.jpg"
        alt="Statewide Litigation Group Chambers"
        className="absolute inset-0 w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
        loading="eager"
      />

      {/* Trilegal Style Deep Blue / Navy Color Grade Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#030914]/95 via-[#061533]/80 to-[#0A2250]/65 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#060E1D] via-transparent to-[#030914]/80" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#060E1D_100%)] opacity-60" />

      {/* Top Tag */}
      <div className="relative z-10 pt-4 sm:pt-6">
        <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#060E1D]/80 border border-legal-accent/40 backdrop-blur-md rounded-2xs">
          <span className="w-2 h-2 rounded-full bg-legal-accent animate-pulse"></span>
          <span className="mono-tag text-[10px] sm:text-xs text-gold-300 font-semibold uppercase tracking-widest">
            SUPREME COURT & PAN-INDIA BENCHES
          </span>
        </div>
      </div>

      {/* Main Left-Aligned Headline & Managing Director Button (Trilegal Reference Style) */}
      <div className="relative z-10 max-w-4xl space-y-4 sm:space-y-6 my-auto pt-6">
        <div className="space-y-1 sm:space-y-2">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white uppercase font-sans leading-tight drop-shadow-md">
            WELCOME TO
          </h2>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#F8F6F0] serif-title leading-tight drop-shadow-lg">
            STATEWIDE LITIGATION GROUP
          </h1>
        </div>

        <p className="text-xs sm:text-base md:text-lg text-slate-300 max-w-2xl font-sans leading-relaxed drop-shadow-sm">
          Four decades of trial court authority anchored at Kanpur chambers, unified with strategic appellate advocacy before the Supreme Court of India, Delhi High Court, and commercial benches.
        </p>

        {/* Managing Director Outlined Button (Replaces About the Firm) */}
        <div className="pt-2 sm:pt-4 flex flex-wrap items-center gap-3 sm:gap-4">
          <button
            type="button"
            onClick={onScrollToManagingDirector}
            className="inline-flex items-center space-x-3 px-6 sm:px-8 py-3 sm:py-3.5 border border-white/90 hover:border-legal-accent text-white hover:text-gold-300 hover:bg-white/10 transition-all duration-300 mono-tag text-xs sm:text-sm font-semibold tracking-wider cursor-pointer active:scale-95 shadow-xl group backdrop-blur-xs rounded-xs"
          >
            <span>MANAGING DIRECTOR</span>
            <ArrowRight className="w-4 h-4 text-legal-accent transition-transform group-hover:translate-x-1" />
          </button>

          {onExplorePractice && (
            <button
              type="button"
              onClick={onExplorePractice}
              className="inline-flex items-center space-x-2 px-5 py-3 text-slate-300 hover:text-white mono-tag text-xs sm:text-sm font-medium tracking-wide transition-colors cursor-pointer group"
            >
              <span>Explore Practice</span>
              <span className="text-legal-accent transition-transform group-hover:translate-x-1">→</span>
            </button>
          )}
        </div>
      </div>

      {/* Center Bottom SCROLL Indicator (Trilegal Reference Style) */}
      <div className="relative z-10 flex flex-col items-center justify-center space-y-1.5 pointer-events-none select-none pb-2 sm:pb-3">
        <span className="mono-tag text-[9px] sm:text-[10px] tracking-[0.28em] text-slate-400 font-bold uppercase">
          SCROLL
        </span>
        <div className="w-5 h-8 rounded-full border border-slate-400/70 flex items-start justify-center p-1 shadow-sm">
          <div className="w-1 h-2 bg-legal-accent rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
