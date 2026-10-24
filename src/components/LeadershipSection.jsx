import React from 'react';
import { Quote, ShieldCheck, Scale, Award } from 'lucide-react';
import { FIRM_DETAILS } from '../data/legalData';

export default function LeadershipSection() {
  return (
    <section id="leadership" className="space-y-8 pt-10 border-t border-legal-border scroll-mt-28">
      {/* Editorial Container */}
      <div className="bg-legal-cardBg border border-legal-border p-6 sm:p-12 md:p-16 relative shadow-xs overflow-hidden">
        
        {/* Subtle Watermark Scale in corner */}
        <div className="absolute right-6 sm:right-12 bottom-6 sm:bottom-10 opacity-5 pointer-events-none select-none text-legal-dark">
          <Scale className="w-48 sm:w-64 h-48 sm:h-64" />
        </div>

        <div className="max-w-4xl space-y-6 sm:space-y-8 relative z-10">
          
          {/* Top Tag & Decorative Icon */}
          <div className="flex items-center space-x-3">
            <span className="mono-tag text-xs text-legal-accent tracking-widest uppercase font-semibold">
              LEADERSHIP DIRECTIVE // MANAGING DIRECTOR'S ADDRESS
            </span>
            <span className="h-px w-12 bg-legal-border"></span>
          </div>

          {/* Section Main Title */}
          <div className="space-y-2">
            <div className="flex items-center space-x-3">
              <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-legal-accent/60 -scale-x-100 shrink-0" />
              <h3 className="serif-title text-3xl sm:text-4xl md:text-5xl font-normal text-legal-dark leading-tight">
                Note from the Managing Director
              </h3>
            </div>
          </div>

          {/* Note Body Paragraphs */}
          <div className="space-y-5 text-sm sm:text-base text-zinc-700 leading-relaxed font-sans border-l-2 border-legal-accent/40 pl-4 sm:pl-6 my-6">
            <p className="font-medium text-legal-dark">
              At Statewide Litigation Group (SLG), I believe that exceptional legal representation begins with trust, integrity, and a genuine commitment to our clients.
            </p>

            <p>
              Our vision is to build a law firm that combines the strength of courtroom experience with strategic thinking and a modern, forward-looking approach to dispute resolution. From civil and revenue matters to complex commercial litigation, appellate advocacy, and company law disputes, we strive to approach every challenge with diligence, clarity, and purpose.
            </p>

            <p>
              As we grow, our commitment remains simple: to uphold the rule of law, stand firmly by our professional values, and deliver legal counsel that inspires confidence.
            </p>

            <p>
              For us, success is not just about winning cases—it is about building lasting relationships, earning trust, and making a meaningful difference.
            </p>

            <p className="italic font-serif text-base sm:text-lg text-legal-dark pt-1">
              Thank you for placing your confidence in SLG.
            </p>
          </div>

          {/* Sign-off & Chambers Credentials */}
          <div className="pt-6 border-t border-legal-border flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <p className="mono-tag text-[10px] sm:text-[11px] text-zinc-500 uppercase tracking-wider">
                CHAMBERS PRINCIPAL LEADERSHIP
              </p>
              <h4 className="serif-title text-xl sm:text-2xl font-bold text-legal-dark mt-1">
                Sudesh Kumar Singh
              </h4>
              <p className="mono-tag text-xs text-legal-accent font-semibold tracking-wide mt-0.5">
                Managing Partner & Director // Statewide Litigation Group
              </p>
              <p className="text-xs text-zinc-500 font-sans mt-0.5">
                Supreme Court of India & High Court of Delhi Bar
              </p>
            </div>

            <div className="flex items-center space-x-2 mono-tag text-[10px] text-zinc-600 bg-white border border-legal-border px-3 py-2 rounded-xs shadow-2xs self-start sm:self-end">
              <ShieldCheck className="w-4 h-4 text-legal-accent shrink-0" />
              <span>ESTD. 1983 • {FIRM_DETAILS.udyamReg}</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
