import React from 'react';
import { ArrowLeft, ArrowRight, Compass } from 'lucide-react';
import RegionalDesksSection from './RegionalDesksSection';
import MapLocatorSection from './MapLocatorSection';

export default function DesksPage({ onBackToHome, onOpenQuery, onShowNotice }) {
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
          <span className="text-gold-300 font-semibold">REGIONAL STANDING DESKS</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center space-x-3">
              <span className="h-px w-8 bg-legal-accent"></span>
              <span className="mono-tag text-xs text-legal-accent tracking-widest uppercase font-semibold">
                PAN-INDIA JUDICIAL FOOTPRINT
              </span>
            </div>
            <h1 className="serif-title text-3xl sm:text-5xl md:text-6xl font-bold text-[#F8F6F0] mt-2 leading-tight">
              Regional Standing Desks
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl font-sans leading-relaxed">
            Permanent physical chambers and daily filing secretariats established across principal judicial hubs to ensure immediate turnaround, caveat lodgement, and courtroom cause-list oversight.
          </p>
        </div>
      </div>

      {/* Main Desks Grid */}
      <RegionalDesksSection onOpenQuery={onOpenQuery} showHeader={false} />

      {/* Interactive Court Matrix Schematic Map */}
      <MapLocatorSection onOpenQuery={onOpenQuery} onShowNotice={onShowNotice} />

      {/* Bottom Dispatch Brief CTA */}
      <div className="bg-[#0B1B3D] border border-legal-accent/60 p-6 sm:p-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 rounded-xs shadow-xl">
        <div className="space-y-2 max-w-xl">
          <div className="flex items-center space-x-2">
            <Compass className="w-4 h-4 text-legal-accent" />
            <span className="mono-tag text-xs text-legal-accent font-bold uppercase">
              INTER-BENCH SECRETARIAT
            </span>
          </div>
          <h4 className="serif-title text-2xl sm:text-3xl font-bold text-[#F8F6F0]">
            Need Brief Filing or Caveat at Any Regional Bench?
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 font-sans">
            Our chambers maintain correspondent counsel across 25 High Courts with partner supervision from Delhi NCR and Kanpur.
          </p>
        </div>
        <button
          type="button"
          onClick={() => onOpenQuery()}
          className="bg-legal-accent hover:bg-gold-400 text-navy-950 font-bold mono-tag text-xs px-6 py-3.5 border border-gold-300 flex items-center space-x-2 shrink-0 cursor-pointer transition-all active:scale-95 shadow-md rounded-xs"
        >
          <span>SUBMIT TO REGISTRY DESK</span>
          <ArrowRight className="w-4 h-4 text-navy-950" />
        </button>
      </div>
    </div>
  );
}
