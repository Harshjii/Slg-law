import React from 'react';
import { VENTURES } from '../data/legalData';

export default function VenturesSection({ onShowNotice, onOpenQuery }) {
  const handleVentureClick = (venture) => {
    if (venture.id === 'lok-adalat' && onOpenQuery) {
      onOpenQuery('Lok Adalat Settlement & ADR Counsel');
      return;
    }
    if (onShowNotice) {
      onShowNotice(
        `${venture.title} // Institutional Desk`,
        `${venture.description} Coordinated through Statewide Litigation Group chambers desk.`
      );
    }
  };

  return (
    <section id="ventures" className="space-y-8 sm:space-y-12 pt-10 border-t border-[#1B3564] scroll-mt-28">
      {/* Chapter Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="mono-tag text-xs text-legal-accent tracking-widest uppercase font-semibold">
            INSTITUTIONAL ECOSYSTEM // ALLIANCES & VENTURES
          </span>
          <h3 className="serif-title text-3xl sm:text-4xl md:text-5xl font-normal mt-2 leading-tight text-[#F8F6F0]">
            Institutional Ecosystem
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-slate-300 max-w-md font-sans leading-relaxed">
          Chambers engagement with public civic initiatives and daily digital jurisprudence resources.
        </p>
      </div>

      {/* Ventures 3-Column Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {VENTURES.map(venture => {
          const isExternal = venture.href && venture.href.startsWith('http');
          const Component = isExternal ? 'a' : 'div';
          const linkProps = isExternal 
            ? { href: venture.href, target: '_blank', rel: 'noopener noreferrer' } 
            : { onClick: () => handleVentureClick(venture) };

          return (
            <Component
              key={venture.id}
              {...linkProps}
              className="bg-[#0B1B3D] border border-[#1B3564] p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-xl hover:border-legal-accent hover:bg-[#0F2450] transition-all duration-300 group cursor-pointer no-underline text-inherit rounded-xs"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <span className="mono-tag text-[10px] border border-legal-accent/40 bg-[#060E1D] text-gold-300 px-3 py-1 font-semibold rounded-2xs">
                    {venture.badge}
                  </span>
                  <span className="text-legal-accent font-serif text-2xl">
                    {venture.icon}
                  </span>
                </div>
                
                <h4 className="serif-title text-2xl sm:text-3xl font-medium text-[#F8F6F0] group-hover:text-legal-accent transition-colors">
                  {venture.title}
                </h4>
                
                <p className="mono-tag text-xs sm:text-sm text-legal-accent font-semibold leading-relaxed">
                  {venture.subtitle}
                </p>
                
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  {venture.description}
                </p>
              </div>

              {/* Action Indicator at bottom */}
              <div className="pt-4 border-t border-[#1B3564]/50 flex items-center justify-between">
                <span className="mono-tag text-[10px] sm:text-[11px] text-slate-400 group-hover:text-gold-300 transition-colors">
                  {venture.actionLabel || 'Chambers Desk'}
                </span>
                <span className="text-legal-accent text-xs group-hover:translate-x-1 transition-transform">
                  {isExternal ? '↗' : '→'}
                </span>
              </div>
            </Component>
          );
        })}
      </div>
    </section>
  );
}
