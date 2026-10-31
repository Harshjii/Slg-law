import React from 'react';
import { REGIONAL_STANDING_DESKS } from '../data/legalData';

export default function RegionalDesksSection({ onOpenQuery, showHeader = true }) {
  return (
    <section id="desks" className={`space-y-8 sm:space-y-12 scroll-mt-28 ${showHeader ? 'pt-10 border-t border-[#1B3564]' : ''}`}>
      {/* Chapter Editorial Header */}
      {showHeader && (
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center space-x-3">
              <span className="h-px w-8 bg-legal-accent"></span>
              <span className="mono-tag text-xs text-legal-accent tracking-widest uppercase font-semibold">
                GEOGRAPHIC FOOTPRINT
              </span>
            </div>
            <h3 className="serif-title text-3xl sm:text-4xl md:text-5xl font-bold mt-2 leading-tight text-[#F8F6F0]">
              REGIONAL STANDING DESKS
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl font-sans leading-relaxed">
            Permanent chambers and direct filing secretariats established across key judicial centers to ensure immediate turnaround and daily cause-list oversight.
          </p>
        </div>
      )}

      {/* 3-Column Desk Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {REGIONAL_STANDING_DESKS.map(desk => (
          <div
            key={desk.id}
            className="bg-[#0B1B3D] border border-[#1B3564] hover:border-legal-accent/80 hover:shadow-[0_12px_36px_rgba(0,0,0,0.6)] transition-all duration-300 rounded-xs overflow-hidden flex flex-col justify-between group shadow-lg"
          >
            {/* Top Photo with Badge */}
            <div className="relative w-full aspect-16/10 overflow-hidden bg-navy-950">
              <img
                src={desk.image}
                alt={desk.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B3D] via-[#0B1B3D]/30 to-transparent" />

              {/* Badge pinned to top-left */}
              <div className="absolute top-3 left-3">
                <span className="mono-tag text-[9px] sm:text-[10px] tracking-wider uppercase font-semibold px-2.5 py-1 bg-[#060E1D]/90 text-legal-accent border border-legal-accent/50 shadow-md backdrop-blur-xs inline-block">
                  {desk.badge}
                </span>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-5 sm:p-6 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-3">
                <div>
                  <h4 className="serif-title text-2xl font-bold tracking-tight text-[#F8F6F0] group-hover:text-legal-accent transition-colors leading-tight">
                    {desk.title}
                  </h4>
                  <p className="mono-tag text-[11px] text-legal-accent font-semibold tracking-wide mt-1">
                    {desk.subtitle}
                  </p>
                </div>

                {/* Pill Badges */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {desk.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="mono-tag text-[9px] sm:text-[10px] bg-[#060E1D] text-gold-300 px-2.5 py-1 border border-legal-accent/30 font-medium rounded-2xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Key Details List */}
                <div className="space-y-2.5 pt-3 border-t border-[#1B3564] text-xs text-slate-300 font-sans leading-relaxed">
                  {desk.details.map((item, idx) => (
                    <div key={idx} className="flex flex-col sm:flex-row sm:space-x-1.5">
                      <span className="font-semibold text-white shrink-0">{item.label}:</span>
                      <span className="text-slate-300">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-[#1B3564]">
                <button
                  type="button"
                  onClick={() => onOpenQuery(desk.title)}
                  className="w-full bg-[#060E1D] hover:bg-[#122754] text-white mono-tag text-xs font-semibold py-3 px-4 border border-legal-accent/80 hover:border-legal-accent flex items-center justify-center space-x-2 transition-all active:scale-[0.99] cursor-pointer shadow-xs group/btn"
                >
                  <span>{desk.cta}</span>
                  <span className="text-legal-accent font-bold transition-transform group-hover/btn:translate-x-1">→</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
