import React from 'react';
import { Quote, Scale, MessageSquareText, ArrowRight } from 'lucide-react';

export default function LeadershipSection({ onOpenQuery }) {
  return (
    <section id="leadership" className="space-y-8 pt-10 border-t border-[#1B3564] scroll-mt-28">
      {/* Editorial Container */}
      <div className="bg-[#0B1B3D] border border-[#1B3564] p-6 sm:p-12 md:p-16 relative shadow-xl overflow-hidden rounded-xs">
        
        {/* Subtle Watermark Scale in corner */}
        <div className="absolute right-6 sm:right-12 bottom-6 sm:bottom-10 opacity-10 pointer-events-none select-none text-legal-accent">
          <Scale className="w-48 sm:w-64 h-48 sm:h-64" />
        </div>

        <div className="max-w-4xl space-y-6 sm:space-y-8 relative z-10">
          
          {/* Top Tag & Decorative Icon */}
          <div className="flex items-center space-x-3">
            <span className="mono-tag text-xs text-legal-accent tracking-widest uppercase font-semibold">
              LEADERSHIP DIRECTIVE // MANAGING DIRECTOR'S ADDRESS
            </span>
            <span className="h-px w-12 bg-[#1B3564]"></span>
          </div>

          {/* Section Main Title */}
          <div className="space-y-2">
            <div className="flex items-center space-x-3">
              <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-legal-accent/70 -scale-x-100 shrink-0" />
              <h3 className="serif-title text-3xl sm:text-4xl md:text-5xl font-normal text-[#F8F6F0] leading-tight">
                Note from the Managing Director
              </h3>
            </div>
          </div>

          {/* Note Body Paragraphs */}
          <div className="space-y-5 text-sm sm:text-base text-slate-300 leading-relaxed font-sans border-l-2 border-legal-accent pl-4 sm:pl-6 my-6">
            <p className="font-medium text-white">
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

            <p className="italic font-serif text-base sm:text-lg text-gold-200 pt-1">
              Thank you for placing your confidence in SLG.
            </p>
          </div>

          {/* Submit Query Action Link */}
          <div className="pt-6 border-t border-[#1B3564] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="text-xs sm:text-sm text-slate-300 font-sans">
              Have a legal matter or dispute requiring strategic counsel?
            </p>
            <button
              type="button"
              onClick={onOpenQuery}
              className="inline-flex items-center space-x-2 bg-legal-accent hover:bg-gold-400 text-navy-950 font-bold mono-tag text-xs py-2.5 px-5 border border-gold-300 transition-all cursor-pointer group active:scale-95 shadow-md w-fit shrink-0"
            >
              <MessageSquareText className="w-3.5 h-3.5 text-navy-950" />
              <span>SUBMIT YOUR QUERY</span>
              <ArrowRight className="w-3.5 h-3.5 text-navy-950 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
