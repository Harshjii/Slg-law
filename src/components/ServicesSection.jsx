import React from 'react';
import { LEGAL_SERVICES } from '../data/legalData';

function ServiceCard({ service, onOpenQuery }) {
  return (
    <div 
      onClick={() => onOpenQuery(service.title)}
      className="bg-[#0B1B3D] border border-[#1B3564] hover:border-legal-accent/80 hover:bg-[#0F2450] hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300 rounded-xs overflow-hidden flex flex-col justify-between group cursor-pointer"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onOpenQuery(service.title);
        }
      }}
    >
      {/* Top Details Area */}
      <div className="p-5 sm:p-7 space-y-4">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-start">
          {/* Service Image with refined border */}
          <div className="w-full sm:w-36 md:w-40 aspect-4/3 sm:aspect-square shrink-0 rounded-lg overflow-hidden border border-[#1B3564] bg-[#060E1D] shadow-inner">
            <img 
              src={service.image} 
              alt={service.title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
              loading="lazy"
            />
          </div>

          {/* Service Info */}
          <div className="space-y-2 min-w-0 flex-1">
            <h4 className="serif-title text-xl sm:text-2xl font-bold text-[#F8F6F0] leading-snug group-hover:text-legal-accent transition-colors">
              {service.title}
            </h4>
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
    </div>
  );
}

export default function ServicesSection({ onOpenQuery }) {
  return (
    <section id="services" className="space-y-8 sm:space-y-12 pt-10 border-t border-[#1B3564] scroll-mt-28">
      {/* Chapter Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="mono-tag text-xs text-legal-accent tracking-widest uppercase font-semibold">
            PRACTICE VERTICALS // LEGAL SERVICES
          </span>
          <h3 className="serif-title text-3xl sm:text-4xl md:text-5xl font-normal mt-2 leading-tight text-[#F8F6F0]">
            Practice Areas & Legal Services
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-slate-300 max-w-lg font-sans leading-relaxed">
          Comprehensive multi-disciplinary counsel bridging original trial court jurisdiction with strategic appellate standing before India's Supreme Court, High Courts, and commercial tribunals.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {LEGAL_SERVICES.map(service => (
          <ServiceCard 
            key={service.id} 
            service={service} 
            onOpenQuery={onOpenQuery} 
          />
        ))}
      </div>
    </section>
  );
}
