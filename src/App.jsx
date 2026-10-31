import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PracticesBanner from './components/PracticesBanner';
import PeopleBanner from './components/PeopleBanner';
import DesksBanner from './components/DesksBanner';
import PracticeSection from './components/PracticeSection';
import LeadershipSection from './components/LeadershipSection';
import VenturesSection from './components/VenturesSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import BciModal from './components/BciModal';
import QueryModal from './components/QueryModal';
import NoticeModal from './components/NoticeModal';
import PracticePage from './components/PracticePage';
import DesksPage from './components/DesksPage';
import PeoplePage from './components/PeoplePage';

export default function App() {
  const [bciOpen, setBciOpen] = useState(true);
  const [queryOpen, setQueryOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [activePage, setActivePage] = useState(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (['practice', 'people', 'desks'].includes(hash)) {
        return hash;
      }
    }
    return 'home';
  });

  const [notice, setNotice] = useState({
    isOpen: false,
    title: '',
    message: '',
    type: 'info'
  });

  // Sync hash routing with browser history
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (['practice', 'people', 'desks'].includes(hash)) {
        setActivePage(hash);
      } else {
        setActivePage('home');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page) => {
    setActivePage(page);
    window.location.hash = page === 'home' ? '' : `#${page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuery = (service = '') => {
    setSelectedService(service);
    setQueryOpen(true);
  };

  // Check if user already acknowledged during current session
  useEffect(() => {
    const acknowledged = sessionStorage.getItem('slg_bci_acknowledged');
    if (acknowledged === 'true') {
      setBciOpen(false);
    }
  }, []);

  const handleCloseBci = () => {
    setBciOpen(false);
    sessionStorage.setItem('slg_bci_acknowledged', 'true');
  };

  const handleOpenBci = () => {
    setBciOpen(true);
  };

  const handleScrollToManagingDirector = () => {
    if (activePage !== 'home') {
      setActivePage('home');
      window.location.hash = '';
      setTimeout(() => {
        const el = document.getElementById('leadership');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    } else {
      const el = document.getElementById('leadership');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const showNotice = (title, message, type = 'info') => {
    setNotice({
      isOpen: true,
      title,
      message,
      type
    });
  };

  const closeNotice = () => {
    setNotice(prev => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-[100dvh] w-full overflow-x-hidden bg-[#060E1D] text-[#F8F6F0] flex flex-col font-sans selection:bg-[#C5A059] selection:text-[#060E1D]">
      {/* Statutory BCI Entry Modal */}
      <BciModal 
        isOpen={bciOpen} 
        onClose={handleCloseBci} 
      />

      {/* Query Intake Helpline Modal */}
      <QueryModal 
        isOpen={queryOpen} 
        initialService={selectedService}
        onClose={() => {
          setQueryOpen(false);
          setSelectedService('');
        }} 
        onSubmitted={(ref) => {
          showNotice(
            "Brief Dispatched to Chambers Desk",
            `Your preliminary case query has been forwarded to advocate@statewidelitigation.com (Ref: ${ref || 'SLG-2026'}). Our advocates will evaluate statutory merits.`,
            "success"
          );
        }}
      />

      {/* Chambers Notification Alert Modal */}
      <NoticeModal
        isOpen={notice.isOpen}
        title={notice.title}
        message={notice.message}
        type={notice.type}
        onClose={closeNotice}
      />

      {/* Sticky Main Navigation with (Practice, People, Regional Standing Desks, Contact Us) */}
      <Navbar 
        activePage={activePage}
        onNavigate={handleNavigate}
        onOpenQuery={() => handleOpenQuery('')} 
        onOpenBci={handleOpenBci} 
      />

      {/* Main Content Sections / Routed Page Views */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-6 sm:py-12 md:py-16 space-y-16 sm:space-y-24 md:space-y-32 flex-grow">
        
        {/* VIEW 1: DEDICATED PRACTICE SERVICES PAGE */}
        {activePage === 'practice' && (
          <PracticePage 
            onBackToHome={() => handleNavigate('home')} 
            onOpenQuery={handleOpenQuery}
            onShowNotice={showNotice}
          />
        )}

        {/* VIEW 2: DEDICATED REGIONAL STANDING DESKS PAGE */}
        {activePage === 'desks' && (
          <DesksPage 
            onBackToHome={() => handleNavigate('home')} 
            onOpenQuery={handleOpenQuery}
            onShowNotice={showNotice}
          />
        )}

        {/* VIEW 3: DEDICATED PEOPLE & LEADERSHIP PAGE */}
        {activePage === 'people' && (
          <PeoplePage 
            onBackToHome={() => handleNavigate('home')} 
            onOpenQuery={handleOpenQuery}
            onShowNotice={showNotice}
          />
        )}

        {/* VIEW 4: HOME SCREEN (Hero, Overview, Managing Director, Practice, Desks, FAQ) */}
        {activePage === 'home' && (
          <>
            {/* Trilegal Style Immersive Hero Section */}
            <Hero 
              onScrollToManagingDirector={handleScrollToManagingDirector}
              onExplorePractice={() => handleNavigate('practice')}
            />

            {/* The Practice Jurisprudence (Full disclosure. We evaluate merit before representation.) */}
            <PracticeSection className="pt-2 sm:pt-4 border-t-0" />

            {/* Trilegal Style Showcase Banner: PRACTICES */}
            <PracticesBanner onNavigate={handleNavigate} />

            {/* Trilegal Style Showcase Banner: PEOPLE */}
            <PeopleBanner onNavigate={handleNavigate} />

            {/* Trilegal Style Showcase Banner: REGIONAL STANDING DESKS */}
            <DesksBanner onNavigate={handleNavigate} />

            {/* Note from Managing Director (Anchor target for Hero button) */}
            <div id="leadership" className="scroll-mt-28">
              <LeadershipSection 
                onOpenQuery={() => handleOpenQuery('')}
                onShowNotice={showNotice} 
              />
            </div>

            {/* Ventures & Alliances (Institutional Ecosystem including Lok Adalat) */}
            <VenturesSection 
              onShowNotice={showNotice} 
              onOpenQuery={handleOpenQuery}
            />

            {/* Questions (FAQ) */}
            <FaqSection 
              onOpenQuery={() => handleOpenQuery('')} 
            />
          </>
        )}
      </main>

      {/* Global Footer */}
      <Footer 
        onOpenBci={handleOpenBci}
        onOpenQuery={() => handleOpenQuery('')} 
        onNavigate={handleNavigate}
        onShowNotice={showNotice}
      />
    </div>
  );
}
