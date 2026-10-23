import React from 'react';
import { ExternalLink, CheckCircle2 } from 'lucide-react';
import { VENTURES } from '../data/legalData';

export default function VenturesSection({ onShowNotice }) {
  const handleVentureClick = (venture) => {
    onShowNotice(
      `${venture.title} // Institutional Desk`,
      `${venture.description} Coordinated through Statewide Litigation Group chambers desk.`
    );
  };

  return (
    <section id="ventures" className="space-y-8 sm:space-y-12 pt-10 border-t border-legal-border scroll-mt-28">
      {/* Chapter Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="mono-tag text-xs text-legal-accent tracking-widest uppercase font-semibold">
            CH. 6 // ALLIANCES & VENTURES
          </span>
          <h3 className="serif-title text-3xl sm:text-4xl md:text-5xl font-normal mt-2 leading-tight">
            Institutional Ecosystem
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-zinc-600 max-w-md font-sans leading-relaxed">
          Chambers engagement with public civic initiatives, daily digital jurisprudence resources, and statutory certification.
        </p>
      </div>

      {/* Ventures 3 Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        {VENTURES.map(venture => (
          <div
            key={venture.id}
            className="bg-white border border-legal-border p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-sm hover:border-legal-accent transition-all duration-200"
          >
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <span className={`mono-tag text-[10px] border px-3 py-1 font-semibold ${venture.badgeColor}`}>
                  {venture.badge}
                </span>
                <span className="text-legal-accent font-serif text-xl">
                  {venture.icon}
                </span>
              </div>
              
              <h4 className="serif-title text-2xl sm:text-3xl font-medium text-legal-dark">
                {venture.title}
              </h4>
              
              <p className="mono-tag text-xs text-legal-accent font-semibold">
                {venture.subtitle}
              </p>
              
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-sans">
                {venture.description}
              </p>
            </div>

            <div className="pt-4 border-t border-legal-border">
              {venture.href.startsWith('http') ? (
                <a
                  href={venture.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mono-tag text-xs text-legal-accent font-semibold hover:underline flex items-center space-x-1"
                >
                  <span>{venture.linkText}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : (
                <button
                  type="button"
                  onClick={() => handleVentureClick(venture)}
                  className="mono-tag text-xs text-legal-accent font-semibold hover:underline flex items-center space-x-1 cursor-pointer"
                >
                  <span>{venture.linkText}</span>
                  <span>↗</span>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
