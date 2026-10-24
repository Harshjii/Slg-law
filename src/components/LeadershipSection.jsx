import React from 'react';
import { ExternalLink, Award, MapPin, Scale, BookOpen } from 'lucide-react';
import { PARTNERS } from '../data/legalData';

export default function LeadershipSection({ onShowNotice }) {
  const handleDossierClick = (partner) => {
    onShowNotice(
      `${partner.name} // Chambers Dossier`,
      `Designation: ${partner.designation}. Practicing Seat: ${partner.seat}. Area of Mastery: ${partner.subRole}. Verified through High Court & Supreme Court bar registrations.`
    );
  };

  return (
    <section id="leadership" className="space-y-8 sm:space-y-12 pt-10 border-t border-legal-border scroll-mt-28">
      {/* Chapter Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="mono-tag text-xs text-legal-accent tracking-widest uppercase font-semibold">
            LEADERSHIP // CHAMBERS PARTNERS
          </span>
          <h3 className="serif-title text-3xl sm:text-4xl md:text-5xl font-normal mt-2 leading-tight">
            Partners in Chambers
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-zinc-600 max-w-md font-sans leading-relaxed">
          Chambers directed exclusively by two seasoned partners uniting 40+ years of trial court mastery with Supreme Court & High Court writ strategy.
        </p>
      </div>

      {/* Partners Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {PARTNERS.map(partner => (
          <div
            key={partner.id}
            className="bg-white border border-legal-border p-6 sm:p-10 flex flex-col justify-between space-y-6 sm:space-y-8 shadow-sm hover:border-legal-accent/60 transition-all relative group"
          >
            <div className="space-y-4">
              {/* Partner Badges */}
              <div className="flex flex-wrap justify-between items-center gap-2">
                <span className="mono-tag text-[10px] bg-legal-cardBg border border-legal-border px-3 py-1 font-semibold text-zinc-800">
                  {partner.role}
                </span>
                <button
                  type="button"
                  onClick={() => handleDossierClick(partner)}
                  className="mono-tag text-xs text-legal-accent hover:underline flex items-center space-x-1 cursor-pointer transition-colors"
                >
                  <span>Chambers Dossier</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Names & Designations */}
              <div>
                <h4 className="serif-title text-2xl sm:text-3xl font-bold tracking-tight text-legal-dark">
                  {partner.name}
                </h4>
                <p className="mono-tag text-xs text-legal-accent mt-1 tracking-wider uppercase font-semibold">
                  {partner.subRole}
                </p>
                <div className="flex items-center space-x-1.5 text-[11px] text-zinc-500 font-sans mt-1">
                  <MapPin className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                  <span>{partner.seat}</span>
                </div>
              </div>

              {/* Bio */}
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-sans pt-1">
                {partner.bio}
              </p>
            </div>

            {/* Tags */}
            <div className="pt-5 border-t border-legal-border space-y-3">
              <span className="mono-tag text-[10px] text-zinc-400 uppercase tracking-wider block font-semibold">
                CORE LITIGATION CAPACITIES:
              </span>
              <div className="flex flex-wrap gap-2 mono-tag text-[10px]">
                {partner.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-legal-cardBg border border-legal-border px-2.5 py-1 text-zinc-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
