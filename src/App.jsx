import React, { useState, useEffect } from 'react';
import TopTicker from './components/TopTicker';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PracticeSection from './components/PracticeSection';
import LeadershipSection from './components/LeadershipSection';
import BenchSection from './components/BenchSection';
import MapLocatorSection from './components/MapLocatorSection';
import ExpertiseSection from './components/ExpertiseSection';
import VenturesSection from './components/VenturesSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import BciModal from './components/BciModal';
import QueryModal from './components/QueryModal';
import NoticeModal from './components/NoticeModal';

export default function App() {
  const [bciOpen, setBciOpen] = useState(true);
  const [queryOpen, setQueryOpen] = useState(false);
  const [notice, setNotice] = useState({
    isOpen: false,
    title: '',
    message: '',
    type: 'info'
  });

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

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
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
    <div className="min-h-screen bg-[#fcfbf9] text-[#141413] flex flex-col font-sans selection:bg-[#8c7853] selection:text-white">
      {/* Statutory BCI Entry Modal */}
      <BciModal 
        isOpen={bciOpen} 
        onClose={handleCloseBci} 
      />

      {/* Query Intake Helpline Modal */}
      <QueryModal 
        isOpen={queryOpen} 
        onClose={() => setQueryOpen(false)} 
        onSubmitted={() => {
          showNotice(
            "Brief Registered with SLG Secretariat",
            "Your preliminary case query has been logged. Our advocates will evaluate statutory merits.",
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

      {/* Realtime IST Clock & Status Top Bar */}
      <TopTicker 
        onOpenBci={handleOpenBci} 
        onShowNotice={showNotice}
      />

      {/* Sticky Main Navigation */}
      <Navbar 
        onOpenQuery={() => setQueryOpen(true)} 
        onOpenBci={handleOpenBci} 
      />

      {/* Main Content Sections */}
      <main className="max-w-7xl mx-auto px-4 md:px-12 py-8 sm:py-16 md:py-20 space-y-20 sm:space-y-28 md:space-y-36 flex-grow">
        {/* Hero Headline */}
        <Hero 
          onScrollTo={handleScrollTo} 
          onOpenQuery={() => setQueryOpen(true)} 
        />

        {/* Ch. 1: The Practice */}
        <PracticeSection 
          onShowNotice={showNotice} 
        />

        {/* Ch. 2: Leadership */}
        <LeadershipSection 
          onShowNotice={showNotice} 
        />

        {/* Ch. 3: Bench & Heritage */}
        <BenchSection />

        {/* Ch. 4: Map Locator */}
        <MapLocatorSection 
          onOpenQuery={() => setQueryOpen(true)} 
          onShowNotice={showNotice}
        />

        {/* Ch. 5: Expertise */}
        <ExpertiseSection 
          onOpenQuery={() => setQueryOpen(true)} 
        />

        {/* Ch. 6: Ventures & Alliances */}
        <VenturesSection 
          onShowNotice={showNotice} 
        />

        {/* Ch. 7: Questions (FAQ) */}
        <FaqSection 
          onOpenQuery={() => setQueryOpen(true)} 
        />
      </main>

      {/* Footer */}
      <Footer 
        onOpenBci={handleOpenBci}
        onOpenQuery={() => setQueryOpen(true)}
        onScrollTo={handleScrollTo}
        onShowNotice={showNotice}
      />
    </div>
  );
}
