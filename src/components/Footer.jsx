import React from 'react';
import { FIRM_DETAILS } from '../data/legalData';

export default function Footer({ onOpenBci, onOpenQuery, onScrollTo, onShowNotice }) {
  return (
    <footer className="bg-legal-cardBg border-t border-legal-border mt-24 sm:mt-32 text-xs text-zinc-600">
      <div className="max-w-7xl mx-auto px-4 md:px-12 py-12 sm:py-16 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
        
        {/* Col 1: Official Logo & Brand Info */}
        <div className="md:col-span-2 space-y-4">
          <div className="space-y-2">
            <img 
              src="/logo.png" 
              alt="Statewide Litigation Group Logo" 
              className="h-12 sm:h-14 w-auto object-contain"
            />
            <div>
              <h5 className="serif-title text-xl font-bold text-legal-dark">
                {FIRM_DETAILS.name}
              </h5>
              <p className="mono-tag text-[10px] text-legal-accent tracking-wider font-semibold">
                {FIRM_DETAILS.tagline}
              </p>
            </div>
          </div>
          <p className="text-xs text-zinc-600 leading-relaxed max-w-sm font-sans">
            Light editorial jurisprudence. 10+ advocates across Pan-India correspondent networks. Committed to merit-based litigation and strict professional ethics.
          </p>

        </div>

        {/* Col 2: Courts & Forum */}
        <div className="space-y-3">
          <h6 className="mono-tag font-bold text-legal-dark text-[11px] uppercase tracking-wider">
            COURTS & FORUM
          </h6>
          <ul className="space-y-2 text-xs text-zinc-600 font-sans">
            <li className="text-zinc-600">Supreme Court of India</li>
            <li className="text-zinc-600">High Courts (Article 226 Writs)</li>
            <li className="text-zinc-600">Company Law & NCLT / NCLAT</li>
            <li className="text-zinc-600">Consumer Law & NCDRC</li>
            <li className="text-zinc-600">RERA Real Estate Tribunals</li>
            <li className="text-zinc-600">Civil Suits & Revenue Boards</li>
          </ul>
        </div>

      </div>

      {/* Bottom Sub-Footer */}
      <div className="border-t border-legal-border bg-[#F5F2EA] py-6 px-4 md:px-12 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] mono-tag text-zinc-500">
          <p>© 2026 Statewide Litigation Group (SLG). MSME Registered. All Rights Reserved.</p>
          <div className="flex flex-wrap gap-4 sm:gap-6 items-center justify-center">
            <button 
              type="button" 
              onClick={onOpenBci}
              className="cursor-pointer hover:underline text-legal-dark"
            >
              BCI Rule 36 Disclaimer
            </button>
            <span>•</span>
            <button 
              type="button" 
              onClick={() => onShowNotice("Partner Verification Active", "Advocate Bar Council registrations active for Supreme Court of India and Allahabad High Court.")}
              className="cursor-pointer hover:underline text-legal-dark"
            >
              Partner Verification
            </button>
            <span>•</span>
            <button 
              type="button" 
              onClick={() => onScrollTo('services')}
              className="cursor-pointer hover:underline text-legal-dark font-semibold"
            >
              Practice Services
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
