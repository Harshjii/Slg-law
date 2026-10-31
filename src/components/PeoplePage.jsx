import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { PARTNERS, TEAM_MEMBERS } from '../data/legalData';
import LeadershipSection from './LeadershipSection';

export default function PeoplePage({ onBackToHome, onOpenQuery }) {
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
          <span className="text-gold-300 font-semibold">PEOPLE & LEADERSHIP</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center space-x-3">
              <span className="h-px w-8 bg-legal-accent"></span>
              <span className="mono-tag text-xs text-legal-accent tracking-widest uppercase font-semibold">
                CHAMBERS CORPS // ADVOCATES & CONSULTANTS
              </span>
            </div>
            <h1 className="serif-title text-3xl sm:text-5xl md:text-6xl font-bold text-[#F8F6F0] mt-2 leading-tight">
              Leadership & Legal Team
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl font-sans leading-relaxed">
            Distinguished courtroom advocates and experienced legal counsel combining over four decades of trial court mastery with dedicated appellate representation before India's Supreme Court and High Courts.
          </p>
        </div>
      </div>

      {/* Senior Partners Section */}
      <div className="space-y-6">
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-legal-accent"></span>
          <span className="mono-tag text-xs text-legal-accent font-bold uppercase tracking-wider">
            SENIOR LEADERSHIP & PARTNERS
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PARTNERS.map(partner => (
            <div
              key={partner.id}
              className="bg-[#0B1B3D] border border-[#1B3564] hover:border-legal-accent/80 p-6 sm:p-8 rounded-xs space-y-5 shadow-xl flex flex-col justify-between group transition-all duration-300"
            >
              <div className="space-y-4">
                {/* Header Badge */}
                <div className="flex flex-wrap justify-between items-start gap-2 border-b border-[#1B3564] pb-3">
                  <span className="mono-tag text-xs text-legal-accent font-bold uppercase tracking-wider">
                    {partner.role}
                  </span>
                  <span className="mono-tag text-[10px] bg-[#060E1D] text-gold-300 border border-legal-accent/40 px-2.5 py-1 rounded-2xs">
                    {partner.seat}
                  </span>
                </div>

                {/* Name & Title */}
                <div>
                  <h3 className="serif-title text-2xl sm:text-3xl font-bold text-[#F8F6F0] group-hover:text-gold-200 transition-colors">
                    {partner.name}
                  </h3>
                  <p className="mono-tag text-xs text-slate-300 font-medium mt-1">
                    {partner.designation}
                  </p>
                </div>

                {/* Experience & Enrolment Snapshot */}
                <div className="space-y-2 pt-2 border-t border-[#1B3564]/70 text-xs text-slate-300 font-sans leading-relaxed">
                  {partner.enrolment && (
                    <div>
                      <span className="text-gold-300 font-semibold mono-tag">Enrolment / Standing: </span>
                      <span>{partner.enrolment}</span>
                    </div>
                  )}
                  {partner.experience && (
                    <div>
                      <span className="text-gold-300 font-semibold mono-tag">Experience: </span>
                      <span>{partner.experience}</span>
                    </div>
                  )}
                  {partner.areasOfFocus && (
                    <div>
                      <span className="text-gold-300 font-semibold mono-tag">Areas of focus: </span>
                      <span>{partner.areasOfFocus}</span>
                    </div>
                  )}
                  {partner.standing && (
                    <div>
                      <span className="text-gold-300 font-semibold mono-tag">Standing: </span>
                      <span>{partner.standing}</span>
                    </div>
                  )}
                  {partner.engagements && (
                    <div>
                      <span className="text-gold-300 font-semibold mono-tag">Key Engagements: </span>
                      <span>{partner.engagements}</span>
                    </div>
                  )}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {partner.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="mono-tag text-[9px] sm:text-[10px] bg-[#060E1D] text-slate-300 px-2.5 py-1 border border-[#1B3564] rounded-2xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Action Button */}
              <div className="pt-4 border-t border-[#1B3564]">
                <button
                  type="button"
                  onClick={() => onOpenQuery(partner.name)}
                  className="w-full bg-[#060E1D] hover:bg-[#122754] text-white mono-tag text-xs font-semibold py-3 px-4 border border-legal-accent/80 hover:border-legal-accent flex items-center justify-center space-x-2 transition-all active:scale-[0.99] cursor-pointer shadow-xs rounded-xs"
                >
                  <span>CONSULT WITH {partner.role}</span>
                  <ArrowRight className="w-4 h-4 text-legal-accent" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Legal Team: Senior Consultants & Associates (Exactly matching user's image) */}
      <div className="space-y-6">
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-legal-accent"></span>
          <span className="mono-tag text-xs text-legal-accent font-bold uppercase tracking-wider">
            ADVOCATES, SENIOR CONSULTANTS & ASSOCIATES
          </span>
        </div>

        {/* Clean Editorial List Cards matching user's uploaded screenshot */}
        <div className="bg-[#0B1B3D] border border-[#1B3564] rounded-xs divide-y divide-[#1B3564] shadow-xl overflow-hidden">
          {TEAM_MEMBERS.map(member => (
            <div 
              key={member.id} 
              className="p-6 sm:p-7 space-y-2 hover:bg-[#0F2450] transition-colors group"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h4 className="serif-title text-xl sm:text-2xl font-bold text-[#F8F6F0] group-hover:text-gold-200 transition-colors">
                  {member.name}
                </h4>
                <span className="mono-tag text-[11px] text-legal-accent font-bold uppercase tracking-wider">
                  {member.role}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed pt-1">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Note from the Managing Director Section */}
      <LeadershipSection onOpenQuery={() => onOpenQuery('Managing Director')} />
    </div>
  );
}
