import React, { useEffect } from 'react';
import { ArrowRight, AlertCircle } from 'lucide-react';
import { lockBodyScroll, unlockBodyScroll } from '../utils/scrollLock';

export default function BciModal({ isOpen, onClose }) {
  // Prevent background scroll when modal is active using fixed-body locking
  useEffect(() => {
    if (isOpen) {
      lockBodyScroll();
    } else {
      unlockBodyScroll();
    }
    return () => {
      unlockBodyScroll();
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-6 transition-all animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="bci-title"
    >
      <div className="bg-[#0B1B3D] border border-legal-accent/60 max-w-2xl w-full p-6 sm:p-10 md:p-12 shadow-2xl relative max-h-[92vh] overflow-y-auto rounded-xs">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-6">
          <div className="flex items-center space-x-3.5">
            <img 
              src="/logo-dark.png" 
              alt="Statewide Litigation Group Logo" 
              className="h-12 sm:h-14 w-auto object-contain shrink-0 drop-shadow-[0_2px_8px_rgba(197,160,89,0.25)]"
            />
            <div>
              <h2 id="bci-title" className="serif-title text-2xl sm:text-3xl font-bold tracking-tight text-[#F8F6F0]">
                Bar Council of India Disclaimer
              </h2>
              <p className="mono-tag text-[11px] text-legal-accent mt-0.5 uppercase tracking-wider font-semibold">
                RULE 36, BAR COUNCIL OF INDIA RULES // SECTION IV
              </p>
            </div>
          </div>
          <span className="mono-tag text-[10px] border border-legal-accent/60 px-3 py-1 bg-[#060E1D] text-gold-300 font-semibold whitespace-nowrap self-start rounded-2xs">
            STATUTORY DECLARATION
          </span>
        </div>
        
        {/* Content */}
        <div className="space-y-4 text-xs sm:text-sm leading-relaxed text-slate-300 font-sans border-t border-b border-[#1B3564] py-5 sm:py-6 my-4 sm:my-6">
          <p>
            As per the rules of the <strong className="text-white font-semibold">Bar Council of India</strong>, advocates and law firms are strictly prohibited from soliciting work or advertising in any form or manner. By proceeding and accessing this website (<strong className="text-white font-semibold">Statewide Litigation Group</strong>), the user confirms and acknowledges the following:
          </p>
          
          <ul className="space-y-2.5 text-xs sm:text-sm pl-4 list-disc marker:text-legal-accent text-slate-300">
            <li>The user wishes to gain information concerning Statewide Litigation Group for their own personal knowledge and voluntary information purpose.</li>
            <li>There has been no advertisement, personal communication, solicitation, invitation, or inducement of any sort whatsoever by Statewide Litigation Group or its members to solicit any legal work.</li>
            <li>The information provided herein does not constitute legal advice and does not create an advocate-client relationship.</li>
            <li>Statewide Litigation Group is not liable for any action taken by the user relying upon any material or information provided on this platform.</li>
          </ul>

          <div className="bg-[#060E1D] border border-[#1B3564] p-3 text-[11px] mono-tag text-slate-300 flex items-center space-x-2 mt-4 rounded-xs">
            <AlertCircle className="w-4 h-4 text-legal-accent shrink-0" />
            <span>Advocates Act, 1961 • Preliminary merits are assessed prior to brief engagement.</span>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-2 gap-4">
          <p className="mono-tag text-[11px] text-slate-400 text-center sm:text-left">
            Advocates Act, 1961 • Registered Chambers
          </p>
          <button 
            type="button"
            onClick={onClose} 
            className="w-full sm:w-auto bg-legal-accent hover:bg-gold-400 text-navy-950 font-bold mono-tag text-xs px-6 py-3.5 transition-all flex items-center justify-center space-x-2 border border-gold-300 active:scale-[0.99] shadow-md cursor-pointer"
          >
            <span>I ACKNOWLEDGE & AGREE</span>
            <ArrowRight className="w-4 h-4 text-navy-950" />
          </button>
        </div>
      </div>
    </div>
  );
}
