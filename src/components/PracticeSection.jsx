import React from 'react';
import { Award, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { FIRM_DETAILS } from '../data/legalData';

export default function PracticeSection({ onShowNotice }) {
  return (
    <section id="practice" className="space-y-8 sm:space-y-10 pt-10 border-t border-legal-border scroll-mt-28">
      {/* Chapter Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="mono-tag text-xs text-legal-accent tracking-widest uppercase font-semibold">
            CH. 1 // THE PRACTICE
          </span>
          <h3 className="serif-title text-3xl sm:text-4xl md:text-5xl font-normal mt-2 leading-tight">
            Full disclosure.<br />
            <span className="italic text-zinc-700">We evaluate merit before representation.</span>
          </h3>
        </div>
        <div className="max-w-md text-xs sm:text-sm text-zinc-600 leading-relaxed font-sans">
          In adherence to the Advocates Act, 1961 and Bar Council of India standards, Statewide Litigation Group maintains an uncompromised standard of preliminary brief assessment. We undertake litigation matters strictly grounded on statutory merit, verifiable facts, and realistic legal remedies.
        </div>
      </div>

      {/* Grid: MSME Box & Quote Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
        
        {/* Left Box: MSME Badge & Chambers Standard */}
        <div className="lg:col-span-5 bg-legal-cardBg border border-legal-border p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-sm">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="inline-block mono-tag text-[10px] bg-emerald-50 text-emerald-800 border border-emerald-200 px-3 py-1 font-semibold">
                MSME CERTIFIED PROFESSIONAL SERVICE
              </span>
            </div>
            <h4 className="serif-title text-2xl sm:text-3xl font-medium text-legal-dark">
              Institutional Chambers Standard
            </h4>
            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-sans">
              Registered micro/small enterprise under Ministry of MSME, Government of India, certifying transparent professional billing, structured counsel rosters, and formal accountability.
            </p>

            <ul className="space-y-2 text-xs font-sans text-zinc-700 pt-2 border-t border-legal-border">
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-legal-accent shrink-0" />
                <span>Statutory compliance under Ministry of MSME</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-legal-accent shrink-0" />
                <span>Transparent vakalatnama and professional retainer model</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-legal-accent shrink-0" />
                <span>Standardized brief repository & listing monitoring</span>
              </li>
            </ul>
          </div>

          <div className="pt-4 border-t border-legal-border flex items-center justify-between text-xs mono-tag text-zinc-500">
            <span>UDYAM REG: {FIRM_DETAILS.udyamReg}</span>
            <span className="text-legal-accent font-semibold">ESTD. {FIRM_DETAILS.established}</span>
          </div>
        </div>

        {/* Right Box: Quote Card */}
        <div className="lg:col-span-7 bg-white border border-legal-border p-6 sm:p-10 md:p-12 flex flex-col justify-between space-y-6 sm:space-y-8 shadow-sm">
          <div className="space-y-4 sm:space-y-6">
            <span className="mono-tag text-xs text-legal-accent tracking-wider font-semibold">
              INSTITUTIONAL CHAMBERS STANDARD
            </span>
            <blockquote className="serif-title text-2xl sm:text-3xl md:text-3xl font-normal italic text-zinc-800 leading-snug">
              "Every legal dispute entrusted to these chambers receives direct partner oversight. We prioritize thorough research, precise drafting, and seasoned courtroom advocacy across every forum."
            </blockquote>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 pt-6 border-t border-legal-border text-xs">
            <div>
              <span className="mono-tag font-semibold block text-legal-accent mb-1 tracking-wide">
                DIRECT PARTNER OVERSIGHT:
              </span>
              <p className="text-zinc-600 font-sans leading-relaxed">
                Managing Partner Sudesh Kumar Singh and Senior Partner Shri Hari Singh Gautam directly lead courtroom appearances and strategy.
              </p>
            </div>
            <div>
              <span className="mono-tag font-semibold block text-legal-accent mb-1 tracking-wide">
                PAN-INDIA COORDINATION:
              </span>
              <p className="text-zinc-600 font-sans leading-relaxed">
                Active NCR advocate bench paired with experienced correspondent advocates across all 25 Indian High Courts.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
