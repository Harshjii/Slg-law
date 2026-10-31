import React from 'react';
import { ArrowRight, Compass } from 'lucide-react';

export default function DesksBanner({ onNavigate }) {
  return (
    <section className="relative overflow-hidden rounded-xs border border-[#1B3564] bg-[#07132B] shadow-2xl transition-all duration-500 group">
      {/* 2-Column Split Layout matching Trilegal Reference Image (Text on Left, Photo on Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px] lg:min-h-[500px]">
        
        {/* Left Half: Deep Corporate Navy + "REGIONAL STANDING DESKS" + Outlined Button */}
        <div 
          onClick={() => onNavigate('desks')}
          className="lg:col-span-6 p-8 sm:p-12 md:p-16 flex flex-col justify-center relative z-10 cursor-pointer"
        >
          {/* Subtle Ambient Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#030914] via-[#07132B] to-transparent opacity-95 pointer-events-none" />

          <div className="relative z-10 space-y-4 sm:space-y-6 text-center sm:text-left">
            {/* Overline Tag */}
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#060E1D]/90 border border-legal-accent/40 rounded-2xs w-fit mx-auto sm:mx-0">
              <span className="w-1.5 h-1.5 rounded-full bg-legal-accent animate-pulse"></span>
              <span className="mono-tag text-[10px] text-gold-300 font-semibold uppercase tracking-widest">
                PAN-INDIA JUDICIAL FOOTPRINT
              </span>
            </div>

            {/* Title: REGIONAL STANDING DESKS */}
            <div>
              <h2 className="text-3xl sm:text-5xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white uppercase font-sans leading-tight">
                REGIONAL STANDING DESKS
              </h2>
              <div className="w-20 sm:w-28 h-0.5 bg-legal-accent mt-3 sm:mt-4 mx-auto sm:mx-0"></div>
            </div>

            {/* Subtitle Description */}
            <p className="text-xs sm:text-sm md:text-base text-slate-300 max-w-lg leading-relaxed font-sans">
              Permanent physical chambers and daily filing secretariats established across key judicial centers—Delhi NCR (Supreme Court & High Court), Kanpur Principal Civil Chambers, and Prayagraj Allahabad High Court Desk—ensuring immediate filing turnaround, caveat lodgement, and cause-list oversight.
            </p>

            {/* Outlined Action Button matching Trilegal Reference */}
            <div className="pt-2 sm:pt-4 flex flex-wrap items-center gap-3 sm:gap-4 justify-center sm:justify-start">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onNavigate('desks');
                }}
                className="border border-white/80 hover:border-legal-accent text-white hover:text-gold-200 hover:bg-white/10 px-6 sm:px-8 py-3 text-xs sm:text-sm mono-tag font-semibold tracking-wider transition-all duration-300 active:scale-95 cursor-pointer shadow-lg rounded-xs backdrop-blur-xs flex items-center space-x-2 group/btn"
              >
                <span>EXPLORE REGIONAL DESKS</span>
                <ArrowRight className="w-4 h-4 text-legal-accent transition-transform group-hover/btn:translate-x-1" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Half: Supreme Court of India Graffiti Artwork */}
        <div 
          onClick={() => onNavigate('desks')}
          className="lg:col-span-6 relative overflow-hidden min-h-[300px] lg:min-h-full cursor-pointer"
        >
          <img
            src="/desks/delhi.jpg"
            alt="Supreme Court of India Graffiti Street Art Mural"
            className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
          {/* Subtle Color Vignette Over Image */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#07132B] via-transparent to-transparent opacity-60 lg:opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07132B] via-transparent to-transparent opacity-70" />

          {/* Floating Subtle Pill on Image */}
          <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6">
            <span className="mono-tag text-[10px] sm:text-[11px] px-3.5 py-1.5 bg-[#060E1D]/90 text-gold-300 border border-legal-accent/50 shadow-md backdrop-blur-md rounded-2xs inline-flex items-center space-x-1.5 group-hover:border-legal-accent transition-colors">
              <Compass className="w-3.5 h-3.5 text-legal-accent" />
              <span>Explore Court Matrix & Desks →</span>
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
