import React from 'react';
import { REGIONAL_STANDING_DESKS } from '../data/legalData';

export default function RegionalDesksSection({ onOpenQuery }) {
  return (
    <section id="desks" className="space-y-8 sm:space-y-12 pt-10 border-t border-legal-border scroll-mt-28">
      {/* Chapter Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center space-x-3">
            <span className="h-px w-8 bg-legal-accent"></span>
            <span className="mono-tag text-xs text-legal-accent tracking-widest uppercase font-semibold">
              GEOGRAPHIC FOOTPRINT
            </span>
          </div>
          <h3 className="serif-title text-3xl sm:text-4xl md:text-5xl font-bold mt-2 leading-tight text-legal-dark">
            REGIONAL STANDING DESKS
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-zinc-600 max-w-xl font-sans leading-relaxed">
          Permanent chambers and direct filing secretariats established across key judicial centers to ensure immediate turnaround and daily cause-list oversight.
        </p>
      </div>

      {/* 3-Column Desk Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {REGIONAL_STANDING_DESKS.map(desk => (
          <div
            key={desk.id}
            className="bg-white border border-legal-border hover:border-legal-accent/80 hover:shadow-xl transition-all duration-300 rounded-xs overflow-hidden flex flex-col justify-between group shadow-xs"
          >
            {/* Top Photo with Badge */}
            <div className="relative w-full aspect-16/10 overflow-hidden bg-navy-950">
              <img
                src={desk.image}
                alt={desk.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent opacity-85" />

              {/* Badge pinned to top-left */}
              <div className="absolute top-3 left-3">
                <span className="mono-tag text-[9px] sm:text-[10px] tracking-wider uppercase font-semibold px-2.5 py-1 bg-legal-dark/95 text-legal-accent border border-legal-accent/50 shadow-sm backdrop-blur-xs inline-block">
                  {desk.badge}
                </span>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-5 sm:p-6 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-3">
                <div>
                  <h4 className="serif-title text-2xl font-bold tracking-tight text-legal-dark group-hover:text-legal-accent transition-colors leading-tight">
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
                      className="mono-tag text-[9px] sm:text-[10px] bg-gold-100 text-legal-dark px-2.5 py-1 border border-legal-accent/30 font-medium rounded-2xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Key Details List */}
                <div className="space-y-2.5 pt-3 border-t border-legal-border text-xs text-zinc-600 font-sans leading-relaxed">
                  {desk.details.map((item, idx) => (
                    <div key={idx} className="flex flex-col sm:flex-row sm:space-x-1.5">
                      <span className="font-semibold text-legal-dark shrink-0">{item.label}:</span>
                      <span className="text-zinc-600">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-legal-border">
                <button
                  type="button"
                  onClick={() => onOpenQuery(desk.title)}
                  className="w-full bg-legal-dark hover:bg-zinc-800 text-white mono-tag text-xs font-semibold py-3 px-4 border border-legal-accent flex items-center justify-center space-x-2 transition-all active:scale-[0.99] cursor-pointer shadow-xs group/btn"
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
