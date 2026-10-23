import React, { useState } from 'react';
import { Plus, Minus, HelpCircle, ArrowRight } from 'lucide-react';
import { FAQ_ITEMS } from '../data/legalData';

export default function FaqSection({ onOpenQuery }) {
  const [openIds, setOpenIds] = useState(['faq1']);

  const toggleItem = (id) => {
    setOpenIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="questions" className="space-y-8 sm:space-y-12 pt-10 border-t border-legal-border scroll-mt-28">
      {/* Chapter Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="mono-tag text-xs text-legal-accent tracking-widest uppercase font-semibold">
            CH. 7 // QUESTIONS
          </span>
          <h3 className="serif-title text-3xl sm:text-4xl md:text-5xl font-normal mt-2 leading-tight">
            Asked Before
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-zinc-600 max-w-md font-sans leading-relaxed">
          Common inquiries concerning our chambers protocol, brief assessment, and court representation.
        </p>
      </div>

      {/* Accordion List */}
      <div className="bg-white border border-legal-border divide-y divide-legal-border shadow-sm">
        {FAQ_ITEMS.map(item => {
          const isOpen = openIds.includes(item.id);
          return (
            <div 
              key={item.id} 
              className="p-5 sm:p-7 md:p-8 cursor-pointer transition-colors hover:bg-legal-cardBg"
              onClick={() => toggleItem(item.id)}
            >
              <div className="flex justify-between items-start sm:items-center gap-4">
                <h4 className="serif-title text-xl sm:text-2xl font-medium text-legal-dark select-none">
                  {item.question}
                </h4>
                <span className="mono-tag text-legal-accent text-xl font-bold shrink-0 w-6 h-6 flex items-center justify-center">
                  {isOpen ? '−' : '+'}
                </span>
              </div>
              
              {isOpen && (
                <div className="pt-4 text-xs sm:text-sm text-zinc-600 leading-relaxed font-sans space-y-3 animate-fadeIn">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Inquire CTA */}
      <div className="bg-legal-cardBg border border-legal-border p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h5 className="serif-title text-xl font-medium text-legal-dark">
            Have a specific statutory proposition or appellate query?
          </h5>
          <p className="text-xs text-zinc-600 font-sans mt-0.5">
            Our chambers secretariat reviews queries in accordance with BCI Rule 36 norms.
          </p>
        </div>
        <button
          type="button"
          onClick={onOpenQuery}
          className="bg-legal-dark text-cream-50 hover:bg-zinc-800 mono-tag text-xs px-5 py-3 border border-legal-accent flex items-center space-x-2 shrink-0 cursor-pointer"
        >
          <span>SUBMIT TO REGISTRY</span>
          <ArrowRight className="w-4 h-4 text-legal-accent" />
        </button>
      </div>
    </section>
  );
}
