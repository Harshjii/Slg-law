import React from 'react';
import { ArrowRight, Shield, MessageSquareText } from 'lucide-react';
import { LEGAL_SERVICES } from '../data/legalData';
import { ADVOCATE_EMAIL } from '../services/mailService';

function ServiceCard({ service, onOpenQuery }) {
  return (
    <div className="bg-legal-cardBg border border-legal-border hover:border-legal-accent/70 transition-all rounded-xs overflow-hidden shadow-xs flex flex-col justify-between group">
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
            <h4 className="serif-title text-xl sm:text-2xl font-bold text-legal-dark leading-snug">
              {service.num}. {service.title}
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
              className="mono-tag text-[9px] sm:text-[10px] bg-white text-zinc-700 px-2.5 py-1 border border-legal-border rounded-xs shadow-2xs"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Action Strip: Direct Query Button to Open Query Modal */}
      <div className="bg-[#F7F5EE] border-t border-legal-border p-4 sm:px-6 sm:py-3.5 flex items-center justify-between gap-3">
        <div className="flex items-center space-x-2 text-zinc-500 mono-tag text-[10px]">
          <span className="w-1.5 h-1.5 rounded-full bg-legal-accent animate-pulse"></span>
          <span className="hidden sm:inline">Advocate Desk Intake</span>
          <span className="text-zinc-400 hidden md:inline">• {ADVOCATE_EMAIL}</span>
        </div>

        <button
          type="button"
          onClick={() => onOpenQuery(`${service.num}. ${service.title}`)}
          className="inline-flex items-center space-x-2 bg-legal-dark hover:bg-zinc-800 text-cream-50 font-semibold mono-tag text-xs py-2 px-4 border border-legal-accent/80 transition-all cursor-pointer group active:scale-95 shadow-xs"
        >
          <MessageSquareText className="w-3.5 h-3.5 text-legal-accent" />
          <span>SUBMIT QUERY FORM</span>
          <ArrowRight className="w-3.5 h-3.5 text-legal-accent transition-transform group-hover:translate-x-1" />
        </button>
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

      {/* Services Grid (10 Services with dedicated inquiry button on each) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {LEGAL_SERVICES.map(service => (
          <ServiceCard 
            key={service.id} 
            service={service} 
            onOpenQuery={onOpenQuery} 
          />
        ))}
      </div>

      {/* Statutory Footer Disclaimer */}
      <div className="bg-legal-cardBg border border-legal-border p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs mono-tag text-zinc-600 shadow-xs">
        <div className="flex items-center space-x-2">
          <Shield className="w-4 h-4 text-legal-accent shrink-0" />
          <span>All submissions directly routed to <strong className="text-legal-dark">{ADVOCATE_EMAIL}</strong> in accordance with Bar Council of India professional standards.</span>
        </div>
        <button
          type="button"
          onClick={() => onOpenQuery('')}
          className="text-legal-dark hover:text-legal-accent underline font-semibold cursor-pointer shrink-0"
        >
          Open General Brief Intake Form →
        </button>
      </div>
    </section>
  );
}
