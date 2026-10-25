import React, { useState, useEffect } from 'react';
import TopTicker from './components/TopTicker';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PracticeSection from './components/PracticeSection';
import LeadershipSection from './components/LeadershipSection';
import ServicesSection from './components/ServicesSection';
import VenturesSection from './components/VenturesSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import BciModal from './components/BciModal';
import QueryModal from './components/QueryModal';
import NoticeModal from './components/NoticeModal';

export default function App() {
  const [bciOpen, setBciOpen] = useState(true);
  const [queryOpen, setQueryOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [notice, setNotice] = useState({
    isOpen: false,
    title: '',
    message: '',
    type: 'info'
  });

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
    <div className="min-h-screen w-full overflow-x-hidden bg-[#FDFCF9] text-[#0B1B3D] flex flex-col font-sans selection:bg-[#C5A059] selection:text-white">
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

      {/* Realtime IST Clock & Status Top Bar */}
      <TopTicker 
        onOpenBci={handleOpenBci} 
        onShowNotice={showNotice}
      />

      {/* Sticky Main Navigation */}
      <Navbar 
        onOpenQuery={() => handleOpenQuery('')} 
        onOpenBci={handleOpenBci} 
      />

      {/* Main Content Sections */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-6 sm:py-12 md:py-20 space-y-14 sm:space-y-24 md:space-y-36 flex-grow">
        {/* Hero Headline */}
        <Hero 
          onScrollTo={handleScrollTo} 
          onOpenQuery={() => handleOpenQuery('')} 
        />

        {/* Services & Direct Inquiry */}
        <ServicesSection 
          onOpenQuery={handleOpenQuery} 
          onShowNotice={showNotice}
        />

        {/* Leadership */}
        <LeadershipSection 
          onOpenQuery={() => handleOpenQuery('')}
          onShowNotice={showNotice} 
        />

        {/* The Practice */}
        <PracticeSection 
          onShowNotice={showNotice} 
        />

        {/* Ventures & Alliances */}
        <VenturesSection 
          onShowNotice={showNotice} 
        />

        {/* Questions (FAQ) */}
        <FaqSection 
          onOpenQuery={() => handleOpenQuery('')} 
        />
      </main>

      {/* Footer */}
      <Footer 
        onOpenBci={handleOpenBci}
        onOpenQuery={() => handleOpenQuery('')} 
        onScrollTo={handleScrollTo}
        onShowNotice={showNotice}
      />
    </div>
  );
}
