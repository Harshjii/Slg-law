import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, ShieldCheck } from 'lucide-react';
import { LEGAL_SERVICES } from '../data/legalData';

export default function PracticePage({ onBackToHome, onOpenQuery }) {
  const [filterTag, setFilterTag] = useState('ALL');

  // Collect all unique tags
  const allTags = ['ALL', 'LITIGATION', 'CORPORATE', 'BANKING', 'REAL ESTATE', 'COMPLIANCE', 'TAX', 'ARBITRATION'];

  const filteredServices = filterTag === 'ALL'
    ? LEGAL_SERVICES
    : LEGAL_SERVICES.filter(svc => 
        svc.title.toUpperCase().includes(filterTag) || 
        svc.practiceAreas.some(tag => tag.toUpperCase().includes(filterTag))
      );

  return (
    <div className="space-y-12 sm:space-y-16 animate-fadeIn">
      {/* Top Breadcrumb & Page Header */}
      <div className="border-b border-[#1B3564] pb-6 sm:pb-8 space-y-4">
        <div className="flex items-center space-x-2 text-xs mono-tag">
          <button 
            type="button"
            onClick={onBackToHome}
            className="text-slate-400 hover:text-gold-300 flex items-center space-x-1 cursor-pointer transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>HOME</span>
          </button>
          <span className="text-slate-600">/</span>
          <span className="text-gold-300 font-semibold">PRACTICE SERVICES</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="mono-tag text-xs text-legal-accent tracking-widest uppercase font-semibold">
              PRACTICE VERTICALS // LEGAL COUNSEL
            </span>
            <h1 className="serif-title text-3xl sm:text-5xl md:text-6xl font-bold text-[#F8F6F0] mt-2 leading-tight">
              Practice Areas & Legal Services
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 max-w-lg font-sans leading-relaxed">
            Multi-disciplinary chambers counsel bridging original trial court jurisdiction with strategic appellate standing before the Supreme Court of India, High Courts, and commercial tribunals.
          </p>
        </div>

        {/* Quick Filter Bar */}
        <div className="flex items-center space-x-2 overflow-x-auto pt-3 scrollbar-none">
          <span className="mono-tag text-[10px] text-slate-400 uppercase tracking-wider shrink-0 mr-1">
            FILTER:
          </span>
          {allTags.map(tag => (
            <button
              key={tag}
              type="button"
              onClick={() => setFilterTag(tag)}
              className={`mono-tag text-[10px] sm:text-[11px] px-3 py-1.5 border transition-all cursor-pointer rounded-2xs shrink-0 ${
                filterTag === tag
                  ? 'bg-legal-accent text-navy-950 font-bold border-gold-300 shadow-sm'
                  : 'bg-[#0B1B3D] text-slate-300 border-[#1B3564] hover:border-legal-accent'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {filteredServices.map(service => (
          <div 
            key={service.id}
            onClick={() => onOpenQuery(service.title)}
            className="bg-[#0B1B3D] border border-[#1B3564] hover:border-legal-accent/80 hover:bg-[#0F2450] hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300 rounded-xs overflow-hidden flex flex-col justify-between group cursor-pointer shadow-lg"
          >
            <div className="p-5 sm:p-7 space-y-4">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-start">
                <div className="w-full sm:w-36 md:w-40 aspect-4/3 sm:aspect-square shrink-0 rounded-lg overflow-hidden border border-[#1B3564] bg-[#060E1D] shadow-inner">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                    loading="lazy"
                  />
                </div>

                <div className="space-y-2 min-w-0 flex-1">
                  <span className="mono-tag text-[10px] text-legal-accent font-bold">
                    VERTICAL {service.num || '01'}
                  </span>
                  <h3 className="serif-title text-xl sm:text-2xl font-bold text-[#F8F6F0] leading-snug group-hover:text-legal-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Practice Area Tags */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {service.practiceAreas.map((tag, idx) => (
                  <span 
                    key={idx}
                    className="mono-tag text-[9px] sm:text-[10px] bg-[#060E1D] text-slate-300 px-2.5 py-1 border border-[#1B3564] rounded-xs group-hover:border-legal-accent/50 group-hover:text-gold-200 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Card Action */}
            <div className="px-5 sm:px-7 py-3 border-t border-[#1B3564] bg-[#08152E] flex justify-between items-center text-xs mono-tag">
              <span className="text-slate-400 group-hover:text-slate-200 transition-colors">
                Preliminary brief assessment
              </span>
              <span className="text-legal-accent font-bold flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
                <span>Inquire Vertical</span>
                <span>→</span>
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Inquiry Helpline CTA */}
      <div className="bg-[#0B1B3D] border border-legal-accent/60 p-6 sm:p-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 rounded-xs shadow-xl">
        <div className="space-y-2 max-w-xl">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-legal-accent" />
            <span className="mono-tag text-xs text-legal-accent font-bold uppercase">
              CONFIDENTIAL INTAKE DESK
            </span>
          </div>
          <h4 className="serif-title text-2xl sm:text-3xl font-bold text-[#F8F6F0]">
            Require Counsel in Any of These Practice Verticals?
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 font-sans">
            Our chambers secretariat reviews initial facts and briefs to evaluate statutory remedies prior to formal engagement under BCI Rule 36 norms.
          </p>
        </div>
        <button
          type="button"
          onClick={() => onOpenQuery()}
          className="bg-legal-accent hover:bg-gold-400 text-navy-950 font-bold mono-tag text-xs px-6 py-3.5 border border-gold-300 flex items-center space-x-2 shrink-0 cursor-pointer transition-all active:scale-95 shadow-md rounded-xs"
        >
          <span>SUBMIT PRACTICE INQUIRY</span>
          <ArrowRight className="w-4 h-4 text-navy-950" />
        </button>
      </div>
    </div>
  );
}
