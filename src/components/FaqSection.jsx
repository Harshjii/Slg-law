import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { FAQ_ITEMS } from '../data/legalData';

export default function FaqSection({ onOpenQuery }) {
  const [openIds, setOpenIds] = useState(['faq1']);

  const toggleItem = (id) => {
    setOpenIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="questions" className="space-y-8 sm:space-y-12 pt-10 border-t border-[#1B3564] scroll-mt-28">
      {/* Chapter Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="mono-tag text-xs text-legal-accent tracking-widest uppercase font-semibold">
            FREQUENT INQUIRIES // QUESTIONS & ANSWERS
          </span>
          <h3 className="serif-title text-3xl sm:text-4xl md:text-5xl font-normal mt-2 leading-tight text-[#F8F6F0]">
            Asked Before
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-slate-300 max-w-md font-sans leading-relaxed">
          Common inquiries concerning our chambers protocol, brief assessment, and court representation.
        </p>
      </div>

      {/* Accordion List */}
      <div className="bg-[#0B1B3D] border border-[#1B3564] divide-y divide-[#1B3564] shadow-xl rounded-xs">
        {FAQ_ITEMS.map(item => {
          const isOpen = openIds.includes(item.id);
          return (
            <div 
              key={item.id} 
              className="p-5 sm:p-7 md:p-8 cursor-pointer transition-colors hover:bg-[#0F2450]"
              onClick={() => toggleItem(item.id)}
            >
              <div className="flex justify-between items-start sm:items-center gap-4">
                <h4 className="serif-title text-xl sm:text-2xl font-medium text-[#F8F6F0] select-none">
                  {item.question}
                </h4>
                <span className="mono-tag text-legal-accent text-xl font-bold shrink-0 w-6 h-6 flex items-center justify-center">
                  {isOpen ? '−' : '+'}
                </span>
              </div>
              
              {isOpen && (
                <div className="pt-4 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans space-y-3 animate-fadeIn">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Inquire CTA */}
      <div className="bg-[#08152E] border border-[#1B3564] p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shadow-xl rounded-xs">
        <div>
          <h5 className="serif-title text-xl font-medium text-[#F8F6F0]">
            Have a specific statutory proposition or appellate query?
          </h5>
          <p className="text-xs text-slate-300 font-sans mt-0.5">
            Our chambers secretariat reviews queries in accordance with BCI Rule 36 norms.
          </p>
        </div>
        <button
          type="button"
          onClick={onOpenQuery}
          className="bg-legal-accent hover:bg-gold-400 text-navy-950 font-bold mono-tag text-xs px-5 py-3 border border-gold-300 flex items-center space-x-2 shrink-0 cursor-pointer transition-all active:scale-95 shadow-md"
        >
          <span>SUBMIT TO REGISTRY</span>
          <ArrowRight className="w-4 h-4 text-navy-950" />
        </button>
      </div>
    </section>
  );
}
