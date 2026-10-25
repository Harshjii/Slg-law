import React from 'react';
import { LEGAL_SERVICES } from '../data/legalData';

function ServiceCard({ service, onOpenQuery }) {
  return (
    <div 
      onClick={() => onOpenQuery(service.title)}
      className="bg-legal-cardBg border border-legal-border hover:border-legal-accent/80 hover:shadow-md transition-all rounded-xs overflow-hidden shadow-xs flex flex-col justify-between group cursor-pointer"
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
          <div className="w-full sm:w-36 md:w-40 aspect-4/3 sm:aspect-square shrink-0 rounded-lg overflow-hidden border border-legal-border bg-white shadow-xs">
            <img 
              src={service.image} 
              alt={service.title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </div>

          {/* Service Info */}
          <div className="space-y-2 min-w-0 flex-1">
            <h4 className="serif-title text-xl sm:text-2xl font-bold text-legal-dark leading-snug group-hover:text-legal-accent transition-colors">
              {service.title}
            </h4>
            <p className="text-xs sm:text-sm text-zinc-600 font-sans leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>

        {/* Practice Area Tags */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {service.practiceAreas.map((tag, idx) => (
            <span 
              key={idx}
              className="mono-tag text-[9px] sm:text-[10px] bg-white text-zinc-700 px-2.5 py-1 border border-legal-border rounded-xs shadow-2xs group-hover:border-legal-accent/40 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ServicesSection({ onOpenQuery, onShowNotice }) {
  return (
    <section id="services" className="space-y-8 sm:space-y-12 pt-10 border-t border-legal-border scroll-mt-28">
      {/* Chapter Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="mono-tag text-xs text-legal-accent tracking-widest uppercase font-semibold">
            PRACTICE VERTICALS // LEGAL SERVICES
          </span>
          <h3 className="serif-title text-3xl sm:text-4xl md:text-5xl font-normal mt-2 leading-tight text-legal-dark">
            Practice Areas & Legal Services
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-zinc-600 max-w-lg font-sans leading-relaxed">
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
