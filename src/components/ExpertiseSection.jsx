import React, { useState } from 'react';
import { ArrowUpRight, Scale, Search } from 'lucide-react';
import { PRACTICE_AREAS } from '../data/legalData';

export default function ExpertiseSection({ onOpenQuery }) {
  const [filter, setFilter] = useState('ALL');

  const filteredAreas = filter === 'ALL' 
    ? PRACTICE_AREAS 
    : PRACTICE_AREAS.filter(area => area.tag.includes(filter) || area.title.toLowerCase().includes(filter.toLowerCase()));

  return (
    <section id="expertise" className="space-y-8 sm:space-y-12 pt-10 border-t border-legal-border scroll-mt-28">
      {/* Chapter Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="mono-tag text-xs text-legal-accent tracking-widest uppercase font-semibold">
            EXPERTISE & FORA // JURISDICTIONAL COVERAGE
          </span>
          <h3 className="serif-title text-3xl sm:text-4xl md:text-5xl font-normal mt-2 leading-tight">
            Jurisdictional Coverage
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-zinc-600 max-w-md font-sans leading-relaxed">
          Comprehensive representation across constitutional, appellate, corporate, and civil trial forums in India.
        </p>
      </div>

      {/* Quick Filter Bar */}
      <div className="flex flex-wrap items-center gap-2 mono-tag text-[11px] pb-1">
        <span className="text-zinc-400 mr-1">FILTER FORUM:</span>
        {['ALL', 'CONSTITUTIONAL', 'HIGH COURT', 'CORPORATE', 'REAL ESTATE', 'CIVIL'].map(tab => (
          <button
            key={tab}
            type="button"
            onClick={() => setFilter(tab)}
            className={`px-3 py-1.5 border transition-all cursor-pointer ${
              filter === tab
                ? 'bg-legal-dark text-cream-50 border-legal-accent font-semibold'
                : 'bg-white text-zinc-600 border-legal-border hover:border-legal-accent'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAreas.map(item => (
          <div
            key={item.id}
            className="bg-white border border-legal-border p-6 sm:p-8 space-y-4 shadow-sm hover:border-legal-accent transition-all duration-200 flex flex-col justify-between group"
          >
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <span className="mono-tag text-xs text-legal-accent font-semibold">
                  {item.number} / {item.tag}
                </span>
                <span className="text-zinc-400 group-hover:text-legal-accent transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
              
              <h4 className="serif-title text-2xl font-medium text-legal-dark group-hover:text-legal-dark transition-colors">
                {item.title}
              </h4>
              
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-sans">
                {item.description}
              </p>
            </div>

            <div className="pt-4 border-t border-legal-border space-y-3">
              <div className="flex flex-wrap gap-1.5 mono-tag text-[10px]">
                {item.forums.map((f, i) => (
                  <span key={i} className="bg-legal-cardBg border border-legal-border px-2 py-0.5 text-zinc-600">
                    {f}
                  </span>
                ))}
              </div>
              <button
                type="button"
                onClick={onOpenQuery}
                className="text-[11px] mono-tag text-legal-accent font-semibold hover:underline flex items-center space-x-1 pt-1 cursor-pointer"
              >
                <span>Consult Bench Secretariat</span>
                <span>→</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
