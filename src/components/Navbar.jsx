import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Shield, PhoneCall } from 'lucide-react';
import { lockBodyScroll, unlockBodyScroll } from '../utils/scrollLock';

export default function Navbar({ activePage = 'home', onNavigate, onOpenQuery, onOpenBci }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      lockBodyScroll();
    } else {
      unlockBodyScroll();
    }
    return () => {
      unlockBodyScroll();
    };
  }, [mobileMenuOpen]);

  const handleLinkClick = (page) => {
    setMobileMenuOpen(false);
    if (page === 'contact') {
      onOpenQuery();
    } else {
      onNavigate(page);
    }
  };

  const navLinks = [
    { id: 'home', label: 'HOME' },
    { id: 'practice', label: 'PRACTICE' },
    { id: 'people', label: 'PEOPLE' },
    { id: 'desks', label: 'REGIONAL STANDING DESKS' },
    { id: 'contact', label: 'CONTACT US' },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#060E1D] border-b border-[#1B3564] shadow-lg transition-all">
        {/* Main Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-3 flex justify-between items-center gap-4">
          
          {/* Brand Official Logo & Title */}
          <button 
            type="button"
            onClick={() => handleLinkClick('home')}
            className="flex items-center space-x-2.5 sm:space-x-3.5 group focus:outline-none min-w-0 text-left cursor-pointer"
            aria-label="Statewide Litigation Group Home"
          >
            <img 
              src="/logo-dark.png" 
              alt="Statewide Litigation Group Logo" 
              className="h-9 sm:h-11 md:h-12 w-auto object-contain transition-transform group-hover:scale-[1.02] shrink-0 drop-shadow-[0_2px_8px_rgba(197,160,89,0.3)]"
            />
            <div className="min-w-0">
              <span className="serif-title text-base sm:text-xl font-bold tracking-tight text-[#F8F6F0] leading-tight block whitespace-nowrap group-hover:text-gold-200 transition-colors">
                Statewide Litigation Group
              </span>
              <span className="mono-tag text-[8px] sm:text-[10px] text-legal-accent tracking-wider font-semibold block whitespace-nowrap">
                CHAMBERS & ADVOCATES
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links (Practice, People, Regional Standing Desks, Contact Us) */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 mono-tag text-xs font-semibold">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => handleLinkClick(link.id)}
                  className={`py-2 px-1 relative transition-colors cursor-pointer whitespace-nowrap ${
                    isActive 
                      ? 'text-gold-300 font-bold' 
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-legal-accent" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Desktop Direct Helpline CTA */}
          <div className="hidden lg:flex items-center space-x-3 shrink-0">
            <button
              type="button"
              onClick={onOpenQuery}
              className="bg-legal-accent hover:bg-gold-400 text-navy-950 mono-tag text-xs font-bold px-4 py-2.5 border border-gold-300 transition-all flex items-center space-x-2 active:scale-95 cursor-pointer shadow-md rounded-xs"
            >
              <span>CONTACT US</span>
              <ArrowRight className="w-3.5 h-3.5 text-navy-950 font-extrabold" />
            </button>
          </div>

          {/* Tablet & Mobile Right Controls */}
          <div className="flex items-center space-x-2.5 lg:hidden shrink-0">
            <button
              type="button"
              onClick={onOpenQuery}
              className="hidden sm:inline-flex bg-legal-accent text-navy-950 mono-tag text-[11px] px-3.5 py-2 border border-gold-300 font-bold active:scale-95 shadow-sm rounded-xs items-center space-x-1.5"
            >
              <span>CONTACT</span>
              <ArrowRight className="w-3 h-3 text-navy-950" />
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 sm:p-2.5 border border-[#1B3564] bg-[#0B1B3D] text-[#F8F6F0] hover:bg-[#122754] hover:border-legal-accent active:scale-95 transition-all cursor-pointer rounded-xs flex items-center space-x-1.5"
              aria-label="Open mobile menu"
            >
              <Menu className="w-5 h-5 text-legal-accent" />
              <span className="hidden xs:inline mono-tag text-[10px] text-slate-300 font-semibold tracking-wider">
                MENU
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen Solid Mobile & Tablet Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#060E1D] text-[#F8F6F0] flex flex-col justify-between overflow-y-auto animate-fadeIn">
          {/* Top Bar inside Drawer */}
          <div className="px-4 sm:px-6 py-3.5 border-b border-[#1B3564] bg-[#07132B] flex items-center justify-between sticky top-0 z-10 shadow-md">
            <div className="flex items-center space-x-3 min-w-0">
              <img 
                src="/logo-dark.png" 
                alt="SLG Logo" 
                className="h-10 w-auto object-contain shrink-0 drop-shadow-[0_2px_8px_rgba(197,160,89,0.3)]" 
              />
              <div className="min-w-0">
                <span className="serif-title text-base sm:text-lg font-bold text-[#F8F6F0] block leading-tight truncate">
                  Statewide Litigation Group
                </span>
                <span className="mono-tag text-[9px] text-legal-accent tracking-widest font-semibold block">
                  CHAMBERS & ADVOCATES
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 border border-[#1B3564] bg-[#0B1B3D] text-slate-200 hover:text-white hover:border-legal-accent transition-colors active:scale-95 cursor-pointer rounded-xs shrink-0 ml-2"
              aria-label="Close menu"
            >
              <X className="w-5 h-5 text-legal-accent" />
            </button>
          </div>

          {/* Navigation Links Area */}
          <div className="px-5 sm:px-8 py-6 space-y-6 flex-1 max-w-lg w-full mx-auto">
            {/* Section Tag */}
            <div className="flex items-center justify-between pb-2 border-b border-[#1B3564]/60">
              <span className="mono-tag text-[10px] sm:text-xs text-legal-accent font-semibold tracking-widest uppercase">
                CHAMBERS NAVIGATION
              </span>
              <span className="mono-tag text-[10px] text-slate-400">
                SELECT DESTINATION
              </span>
            </div>

            {/* Links Stack */}
            <nav className="space-y-2.5">
              {navLinks.map((link) => {
                const isActive = activePage === link.id;
                const isContact = link.id === 'contact';

                if (isContact) {
                  return (
                    <button
                      key={link.id}
                      type="button"
                      onClick={() => handleLinkClick('contact')}
                      className="w-full text-left py-3.5 px-4 bg-legal-accent text-navy-950 font-bold border border-gold-300 flex justify-between items-center rounded-xs shadow-lg active:scale-[0.99] transition-transform cursor-pointer mt-3"
                    >
                      <div className="flex items-center space-x-2.5">
                        <PhoneCall className="w-4 h-4 text-navy-950" />
                        <span className="mono-tag text-xs font-bold tracking-wider">
                          CONTACT US (QUERY HELPLINE)
                        </span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-navy-950 font-bold" />
                    </button>
                  );
                }

                return (
                  <button
                    key={link.id}
                    type="button"
                    onClick={() => handleLinkClick(link.id)}
                    className={`w-full text-left py-3.5 px-4 border flex justify-between items-center transition-all duration-200 rounded-xs cursor-pointer active:scale-[0.99] ${
                      isActive
                        ? 'bg-[#0F244F] border-legal-accent text-white shadow-md'
                        : 'bg-[#0B1B3D] border-[#1B3564] text-slate-200 hover:text-white hover:border-legal-accent/60 hover:bg-[#0F244F]'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-legal-accent ring-2 ring-gold-400/40' : 'bg-slate-500'}`} />
                      <span className="mono-tag text-xs sm:text-sm font-semibold tracking-wider">
                        {link.label}
                      </span>
                    </div>
                    <ArrowRight className={`w-4 h-4 transition-transform ${isActive ? 'text-legal-accent translate-x-0.5' : 'text-slate-400'}`} />
                  </button>
                );
              })}
            </nav>

            {/* Chambers Coordinates Notice */}
            <div className="pt-4 border-t border-[#1B3564]/60 space-y-2">
              <div className="p-3 bg-[#07132B] border border-[#1B3564] rounded-xs space-y-1">
                <span className="mono-tag text-[10px] text-gold-300 font-semibold block">
                  CHAMBERS DESK LOCATIONS
                </span>
                <p className="text-xs text-slate-300 font-sans leading-relaxed">
                  Supreme Court of India • Patiala House Courts • Allahabad High Court • Kanpur District Sessions
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Drawer Footer */}
          <div className="px-5 sm:px-8 py-5 border-t border-[#1B3564] bg-[#07132B] space-y-3 shrink-0 max-w-lg w-full mx-auto">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBci();
              }}
              className="w-full bg-[#0B1B3D] hover:bg-[#122754] text-slate-200 hover:text-white mono-tag text-xs py-3 border border-[#1B3564] hover:border-legal-accent flex items-center justify-center space-x-2 active:bg-[#163066] rounded-xs transition-colors cursor-pointer"
            >
              <Shield className="w-4 h-4 text-legal-accent" />
              <span>STATUTORY BCI RULE 36 DISCLAIMER</span>
            </button>

            <p className="text-center mono-tag text-[10px] text-slate-400">
              Advocates Act, 1961 • State Bar Council of Uttar Pradesh
            </p>
          </div>
        </div>
      )}
    </>
  );
}
