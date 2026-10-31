import React from 'react';
import { FIRM_DETAILS } from '../data/legalData';

export default function Footer({ onOpenBci, onOpenQuery, onNavigate, onShowNotice }) {
  return (
    <footer className="bg-[#030812] border-t border-[#1B3564] mt-20 sm:mt-28 text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-12 sm:py-16 grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-10">
        
        {/* Col 1 & 2: Official Logo & Brand Info */}
        <div className="md:col-span-2 space-y-4">
          <button
            type="button"
            onClick={() => onNavigate && onNavigate('home')}
            className="flex items-center space-x-3 text-left cursor-pointer group"
          >
            <img 
              src="/logo-dark.png" 
              alt="Statewide Litigation Group Logo" 
              className="h-12 sm:h-14 w-auto object-contain drop-shadow-[0_2px_8px_rgba(197,160,89,0.25)]"
            />
            <div>
              <h5 className="serif-title text-xl font-bold text-[#F8F6F0] group-hover:text-gold-200 transition-colors">
                {FIRM_DETAILS.name}
              </h5>
              <p className="mono-tag text-[10px] text-legal-accent tracking-wider font-semibold">
                {FIRM_DETAILS.tagline}
              </p>
            </div>
          </button>
          <p className="text-xs text-slate-300 leading-relaxed max-w-sm font-sans">
            Trial-tested standing across four decades. Appellate rigor before India's Supreme Court, High Courts, and commercial tribunals.
          </p>
        </div>

        {/* Col 3: Navigation Links */}
        <div className="space-y-3">
          <h6 className="mono-tag font-bold text-white text-[11px] uppercase tracking-wider">
            CHAMBERS DIRECTORY
          </h6>
          <ul className="space-y-2 text-xs font-sans">
            <li>
              <button 
                type="button" 
                onClick={() => onNavigate && onNavigate('practice')}
                className="hover:text-gold-300 text-slate-300 transition-colors cursor-pointer"
              >
                Practice Areas & Services
              </button>
            </li>
            <li>
              <button 
                type="button" 
                onClick={() => onNavigate && onNavigate('people')}
                className="hover:text-gold-300 text-slate-300 transition-colors cursor-pointer"
              >
                People & Leadership
              </button>
            </li>
            <li>
              <button 
                type="button" 
                onClick={() => onNavigate && onNavigate('desks')}
                className="hover:text-gold-300 text-slate-300 transition-colors cursor-pointer"
              >
                Regional Standing Desks
              </button>
            </li>
            <li>
              <button 
                type="button" 
                onClick={onOpenQuery}
                className="hover:text-gold-300 text-legal-accent font-semibold transition-colors cursor-pointer"
              >
                Contact Us / Helpline →
              </button>
            </li>
          </ul>
        </div>

        {/* Col 4: Courts & Forum */}
        <div className="space-y-3">
          <h6 className="mono-tag font-bold text-white text-[11px] uppercase tracking-wider">
            COURTS & FORUM
          </h6>
          <ul className="space-y-1.5 text-xs text-slate-300 font-sans">
            <li>Supreme Court of India (SLP)</li>
            <li>Delhi & Allahabad High Courts</li>
            <li>NCLT & NCLAT Commercial Benches</li>
            <li>UP RERA & Appellate Tribunals</li>
            <li>Original Title & Revenue Boards</li>
          </ul>
        </div>

      </div>

      {/* Bottom Sub-Footer */}
      <div className="border-t border-[#1B3564] bg-[#02050B] py-6 px-4 md:px-12 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] mono-tag text-slate-400">
          <p>© 2026 Statewide Litigation Group (SLG). All Rights Reserved.</p>
          <div className="flex flex-wrap gap-4 sm:gap-6 items-center justify-center">
            <button 
              type="button" 
              onClick={onOpenBci}
              className="cursor-pointer hover:underline hover:text-legal-accent text-slate-300 transition-colors"
            >
              BCI Rule 36 Disclaimer
            </button>
            <span>•</span>
            <button 
              type="button" 
              onClick={() => onShowNotice("Partner Verification Active", "Advocate Bar Council registrations active for Supreme Court of India and Allahabad High Court.")}
              className="cursor-pointer hover:underline hover:text-legal-accent text-slate-300 transition-colors"
            >
              Partner Verification
            </button>
            <span>•</span>
            <button 
              type="button" 
              onClick={() => onNavigate && onNavigate('practice')}
              className="cursor-pointer hover:underline hover:text-legal-accent text-slate-300 font-semibold transition-colors"
            >
              Practice Services
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
