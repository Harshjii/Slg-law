import React from 'react';
import { ExternalLink } from 'lucide-react';
import { FIRM_DETAILS, PARTNERS } from '../data/legalData';

export default function Footer({ onOpenBci, onOpenQuery, onScrollTo, onShowNotice }) {
  return (
    <footer className="bg-legal-cardBg border-t border-legal-border mt-24 sm:mt-32 text-xs text-zinc-600">
      <div className="max-w-7xl mx-auto px-4 md:px-12 py-12 sm:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-12">
        
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

        {/* Col 2: Chamber Partners */}
        <div className="space-y-3">
          <h6 className="mono-tag font-bold text-legal-dark text-[11px] uppercase tracking-wider">
            CHAMBER PARTNERS
          </h6>
          <ul className="space-y-3 text-xs">
            {PARTNERS.map(partner => (
              <li key={partner.id}>
                <strong className="text-legal-dark font-medium block">
                  {partner.name}
                </strong>
                <span className="text-zinc-500 font-sans">{partner.role}</span>
                <br />
                <button
                  type="button"
                  onClick={() => onShowNotice(`${partner.name} // Chambers Verification`, `Partner registered with Bar Council. Chambers anchored at ${partner.seat}.`)}
                  className="text-legal-accent hover:underline mono-tag text-[10px] cursor-pointer mt-0.5"
                >
                  Verified Dossier →
                </button>
              </li>
            ))}
            <li className="pt-1 text-zinc-500 mono-tag text-[10px]">
              Roster: 10+ Advocates Corps
            </li>
          </ul>
        </div>

        {/* Col 3: Courts & Fora */}
        <div className="space-y-3">
          <h6 className="mono-tag font-bold text-legal-dark text-[11px] uppercase tracking-wider">
            COURTS & FORA
          </h6>
          <ul className="space-y-2 text-xs text-zinc-600 font-sans">
            <li>
              <button 
                type="button" 
                onClick={() => onScrollTo('expertise')} 
                className="hover:text-legal-dark transition-colors cursor-pointer text-left"
              >
                Supreme Court of India
              </button>
            </li>
            <li>
              <button 
                type="button" 
                onClick={() => onScrollTo('expertise')} 
                className="hover:text-legal-dark transition-colors cursor-pointer text-left"
              >
                High Courts (Article 226 Writs)
              </button>
            </li>
            <li>
              <button 
                type="button" 
                onClick={() => onScrollTo('expertise')} 
                className="hover:text-legal-dark transition-colors cursor-pointer text-left"
              >
                Company Law & NCLT / NCLAT
              </button>
            </li>
            <li>
              <button 
                type="button" 
                onClick={() => onScrollTo('expertise')} 
                className="hover:text-legal-dark transition-colors cursor-pointer text-left"
              >
                Consumer Law & NCDRC
              </button>
            </li>
            <li>
              <button 
                type="button" 
                onClick={() => onScrollTo('expertise')} 
                className="hover:text-legal-dark transition-colors cursor-pointer text-left"
              >
                RERA Real Estate Tribunals
              </button>
            </li>
            <li>
              <button 
                type="button" 
                onClick={() => onScrollTo('expertise')} 
                className="hover:text-legal-dark transition-colors cursor-pointer text-left"
              >
                Civil Suits & Revenue Boards
              </button>
            </li>
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
              onClick={() => onScrollTo('locator')}
              className="cursor-pointer hover:underline text-legal-dark"
            >
              Delhi NCR
            </button>
            <span>•</span>
            <button 
              type="button" 
              onClick={() => onScrollTo('locator')}
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
