import React from 'react';
import { ExternalLink } from 'lucide-react';
import { FIRM_DETAILS } from '../data/legalData';

export default function Footer({ onOpenBci, onOpenQuery, onScrollTo, onShowNotice }) {
  return (
    <footer className="bg-legal-cardBg border-t border-legal-border mt-24 sm:mt-32 text-xs text-zinc-600">
      <div className="max-w-7xl mx-auto px-4 md:px-12 py-12 sm:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
        
        {/* Col 1: Official Logo & Brand Info */}
        <div className="lg:col-span-2 space-y-4">
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
            Light editorial jurisprudence. 10+ advocates across Delhi NCR & Pan-India correspondent networks. Committed to merit-based litigation and strict professional ethics.
          </p>
          <div>
            <span className="inline-block mono-tag text-[10px] bg-white border border-legal-accent/50 px-3 py-1 font-semibold text-legal-dark shadow-xs">
              MSME UDYAM REGISTERED PRACTICE // {FIRM_DETAILS.udyamReg}
            </span>
          </div>
        </div>

        {/* Col 2: Courts & Fora */}
        <div className="space-y-3">
          <h6 className="mono-tag font-bold text-legal-dark text-[11px] uppercase tracking-wider">
            COURTS & FORA
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

        {/* Col 4: Ventures with Direct Social Links */}
        <div className="space-y-3">
          <h6 className="mono-tag font-bold text-legal-dark text-[11px] uppercase tracking-wider">
            VENTURES & DESK
          </h6>
          <ul className="space-y-2.5 text-xs font-sans">
            <li>
              <a 
                href="https://www.facebook.com/share/1CXb8Mf5qS/?mibextid=wwXIfr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-legal-dark font-medium hover:underline flex items-center space-x-1"
              >
                <span>We Want Change</span>
                <ExternalLink className="w-3 h-3 text-legal-accent" />
              </a>
              <span className="text-zinc-500 text-[11px]">Civic Rights NGO (Facebook)</span>
            </li>
            <li>
              <a 
                href="https://www.instagram.com/invites/contact/?utm_content=s4h1oyg&dlrf=ftbvsg1lvwqr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-legal-dark font-medium hover:underline flex items-center space-x-1"
              >
                <span>Law Nest</span>
                <ExternalLink className="w-3 h-3 text-legal-accent" />
              </a>
              <span className="text-zinc-500 text-[11px]">Legal Knowledge (Instagram)</span>
            </li>
            <li className="pt-2">
              <button
                type="button"
                onClick={onOpenQuery}
                className="mono-tag text-xs text-legal-accent font-semibold hover:underline block cursor-pointer"
              >
                Query Helpline Desk →
              </button>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Sub-Footer */}
      <div className="border-t border-legal-border bg-[#F5F2EA] py-6 px-4 md:px-12">
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
            <span>•</span>
            <button 
              type="button" 
              onClick={() => onShowNotice("Chambers Seat: Delhi NCR", "Primary chambers at Supreme Court of India and High Court of Delhi corridors.")}
              className="cursor-pointer hover:underline text-legal-dark"
            >
              Delhi NCR
            </button>
            <span>•</span>
            <button 
              type="button" 
              onClick={() => onShowNotice("Chambers Seat: Kanpur", "Original trial and revenue jurisdiction established in 1983.")}
              className="cursor-pointer hover:underline text-legal-dark"
            >
              Kanpur
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
