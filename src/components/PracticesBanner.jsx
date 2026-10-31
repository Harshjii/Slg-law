import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';

export default function PracticesBanner({ onNavigate }) {
  return (
    <section className="relative overflow-hidden rounded-xs border border-[#1B3564] bg-[#07132B] shadow-2xl transition-all duration-500 group">
      {/* 2-Column Split Layout matching Trilegal Reference Image */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px] lg:min-h-[500px]">
        
        {/* Left Half: Deep Corporate Navy + "PRACTICES" + Outlined Buttons */}
        <div 
          onClick={() => onNavigate('practice')}
          className="lg:col-span-6 p-8 sm:p-12 md:p-16 flex flex-col justify-center relative z-10 cursor-pointer"
        >
          {/* Subtle Ambient Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#030914] via-[#07132B] to-transparent opacity-95 pointer-events-none" />

          <div className="relative z-10 space-y-4 sm:space-y-6 text-center sm:text-left">
            {/* Overline Tag */}
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#060E1D]/90 border border-legal-accent/40 rounded-2xs w-fit mx-auto sm:mx-0">
              <span className="w-1.5 h-1.5 rounded-full bg-legal-accent animate-pulse"></span>
              <span className="mono-tag text-[10px] text-gold-300 font-semibold uppercase tracking-widest">
                CHAMBERS PRACTICE VERTICALS
              </span>
            </div>

            {/* Title: EXACTLY "PRACTICES" (replacing "EXPERTISE") */}
            <div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white uppercase font-sans">
                PRACTICES
              </h2>
              <div className="w-20 sm:w-28 h-0.5 bg-legal-accent mt-3 sm:mt-4 mx-auto sm:mx-0"></div>
            </div>

            {/* Subtitle Description */}
            <p className="text-xs sm:text-sm md:text-base text-slate-300 max-w-lg leading-relaxed font-sans">
              Comprehensive trial court authority across civil, corporate, real estate, and banking disputes unified with appellate defense before India's Supreme Court, High Courts, and commercial tribunals.
            </p>

            {/* Outlined Action Buttons matching Trilegal Reference */}
            <div className="pt-2 sm:pt-4 flex flex-wrap items-center gap-3 sm:gap-4 justify-center sm:justify-start">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onNavigate('practice');
                }}
                className="border border-white/80 hover:border-legal-accent text-white hover:text-gold-200 hover:bg-white/10 px-6 sm:px-8 py-3 text-xs sm:text-sm mono-tag font-semibold tracking-wider transition-all duration-300 active:scale-95 cursor-pointer shadow-lg rounded-xs backdrop-blur-xs flex items-center space-x-2 group/btn"
              >
                <span>PRACTICES</span>
                <ArrowRight className="w-4 h-4 text-legal-accent transition-transform group-hover/btn:translate-x-1" />
              </button>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onNavigate('practice');
                }}
                className="border border-white/50 hover:border-legal-accent text-slate-200 hover:text-white hover:bg-white/5 px-6 sm:px-8 py-3 text-xs sm:text-sm mono-tag font-medium tracking-wide transition-all duration-300 active:scale-95 cursor-pointer rounded-xs"
              >
                <span>10+ PRACTICE AREAS</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Half: Partner Chamber Office & Legal Library Photograph */}
        <div 
          onClick={() => onNavigate('practice')}
          className="lg:col-span-6 relative overflow-hidden min-h-[300px] lg:min-h-full cursor-pointer"
        >
          <img
            src="/chamber-office.jpg"
            alt="SLG Law Firm Partner Chamber Office & Library"
            className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
          {/* Subtle Color Vignette Over Image */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#07132B] via-transparent to-transparent opacity-60 lg:opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07132B] via-transparent to-transparent opacity-80" />

          {/* Floating Subtle Pill on Image */}
          <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6">
            <span className="mono-tag text-[10px] sm:text-[11px] px-3.5 py-1.5 bg-[#060E1D]/90 text-gold-300 border border-legal-accent/50 shadow-md backdrop-blur-md rounded-2xs inline-flex items-center space-x-1.5 group-hover:border-legal-accent transition-colors">
              <BookOpen className="w-3.5 h-3.5 text-legal-accent" />
              <span>Explore Chambers Practice Verticals →</span>
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
