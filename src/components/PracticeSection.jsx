import React from 'react';

export default function PracticeSection() {
  return (
    <section id="practice" className="space-y-8 sm:space-y-10 pt-10 border-t border-legal-border scroll-mt-28">
      {/* Chapter Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="mono-tag text-xs text-legal-accent tracking-widest uppercase font-semibold">
            THE PRACTICE // CHAMBERS JURISPRUDENCE
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

      {/* Quote Card */}
      <div className="bg-white border border-legal-border p-6 sm:p-10 md:p-12 space-y-4 sm:space-y-6 shadow-sm">
        <span className="mono-tag text-xs text-legal-accent tracking-wider font-semibold">
          INSTITUTIONAL CHAMBERS STANDARD
        </span>
        <blockquote className="serif-title text-2xl sm:text-3xl md:text-3xl font-normal italic text-zinc-800 leading-snug">
          "Every legal dispute entrusted to these chambers receives direct partner oversight. We prioritize thorough research, precise drafting, and seasoned courtroom advocacy across every forum."
        </blockquote>
      </div>
    </section>
  );
}
