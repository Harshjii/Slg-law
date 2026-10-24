import React, { useState } from 'react';
import { Send, CheckCircle2, Shield, Loader2, ArrowRight } from 'lucide-react';
import { LEGAL_SERVICES } from '../data/legalData';
import { sendLegalQuery, ADVOCATE_EMAIL } from '../services/mailService';

function ServiceCard({ service, onShowNotice }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    note: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please provide your name and contact phone number.");
      return;
    }

    setSubmitting(true);
    const result = await sendLegalQuery({
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      service: `${service.num}. ${service.title}`,
      summary: formData.note || `Inquiry regarding ${service.title}`
    });

    setSubmitting(false);
    setSubmittedRef(result.referenceId);
  };

  const handleReset = () => {
    setSubmittedRef('');
    setFormData({ name: '', phone: '', email: '', note: '' });
  };

  return (
    <div className="bg-legal-cardBg border border-legal-border hover:border-legal-accent/70 transition-all rounded-xs overflow-hidden shadow-xs flex flex-col justify-between">
      {/* Top Details Area */}
      <div className="p-5 sm:p-7 space-y-4">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-start">
          {/* Service Image with refined border */}
          <div className="w-full sm:w-36 md:w-40 aspect-4/3 sm:aspect-square shrink-0 rounded-lg overflow-hidden border border-legal-border bg-white shadow-xs">
            <img 
              src={service.image} 
              alt={service.title} 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              loading="lazy"
            />
          </div>

          {/* Service Info */}
          <div className="space-y-2 min-w-0 flex-1">
            <div className="flex items-center space-x-2">
              <span className="mono-tag text-[10px] text-legal-accent font-bold tracking-wider uppercase px-2 py-0.5 bg-gold-100 border border-legal-accent/40 rounded-xs">
                PRACTICE {service.num}
              </span>
            </div>
            <h4 className="serif-title text-xl sm:text-2xl font-bold text-legal-dark leading-snug">
              {service.num}. {service.title}
            </h4>
            <p className="text-xs sm:text-sm text-zinc-600 font-sans leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>

        {/* Practice Area Tags */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {service.practiceAreas.map((tag, idx) => (
            <span 
              key={idx}
              className="mono-tag text-[9px] sm:text-[10px] bg-white text-zinc-700 px-2.5 py-1 border border-legal-border rounded-xs shadow-2xs"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Dedicated Query Form under Service */}
      <div className="bg-[#F6F3EC] border-t border-legal-border p-4 sm:p-5 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-legal-accent animate-pulse"></span>
            <span className="mono-tag text-[10px] text-legal-accent uppercase font-bold tracking-wider">
              DIRECT QUERY // {service.title}
            </span>
          </div>
          <span className="mono-tag text-[9px] text-zinc-500 hidden sm:inline-block">
            Inbox: {ADVOCATE_EMAIL}
          </span>
        </div>

        {submittedRef ? (
          <div className="bg-emerald-50 border border-emerald-300 p-4 rounded-xs space-y-2 text-center animate-fadeIn">
            <div className="flex items-center justify-center space-x-2 text-emerald-800 font-semibold text-xs mono-tag">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Query Successfully Sent to {ADVOCATE_EMAIL}</span>
            </div>
            <p className="text-[11px] text-zinc-700 font-sans">
              Intake registered under reference <span className="font-bold text-legal-dark">{submittedRef}</span>. Our advocates will evaluate statutory merits and reach out promptly.
            </p>
            <button
              type="button"
              onClick={handleReset}
              className="text-[10px] mono-tag text-legal-accent font-semibold underline hover:text-legal-dark pt-1 cursor-pointer"
            >
              Submit Another Inquiry
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-2.5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <input
                type="text"
                name="name"
                required
                placeholder="Full Name *"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-white border border-legal-border focus:border-legal-accent px-3 py-2 text-xs text-legal-dark placeholder-zinc-400 rounded-xs focus:outline-none font-sans transition-colors"
              />
              <input
                type="tel"
                name="phone"
                required
                placeholder="Phone Number / WhatsApp *"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-white border border-legal-border focus:border-legal-accent px-3 py-2 text-xs text-legal-dark placeholder-zinc-400 rounded-xs focus:outline-none font-sans transition-colors"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <input
                type="email"
                name="email"
                placeholder="Email Address (optional)"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-white border border-legal-border focus:border-legal-accent px-3 py-2 text-xs text-legal-dark placeholder-zinc-400 rounded-xs focus:outline-none font-sans transition-colors"
              />
              <input
                type="text"
                name="note"
                placeholder="Brief Matter / Case Context"
                value={formData.note}
                onChange={handleChange}
                className="w-full bg-white border border-legal-border focus:border-legal-accent px-3 py-2 text-xs text-legal-dark placeholder-zinc-400 rounded-xs focus:outline-none font-sans transition-colors"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-legal-dark hover:bg-zinc-800 text-cream-50 font-semibold mono-tag text-xs py-2.5 px-4 rounded-xs border border-legal-accent/80 transition-all flex items-center justify-center space-x-2 active:scale-98 cursor-pointer disabled:opacity-60 shadow-xs"
            >
              {submitting ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin text-legal-accent" />
                  <span>TRANSMITTING TO {ADVOCATE_EMAIL}...</span>
                </>
              ) : (
                <>
                  <span>SUBMIT QUERY FOR {service.title.toUpperCase()}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-legal-accent" />
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default function ServicesSection({ onOpenQuery, onShowNotice }) {
  return (
    <section id="services" className="space-y-8 sm:space-y-12 pt-10 border-t border-legal-border scroll-mt-28">
      {/* Chapter Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="mono-tag text-xs text-legal-accent tracking-widest uppercase font-semibold">
            CH. 1 // PRACTICE VERTICALS
          </span>
          <h3 className="serif-title text-3xl sm:text-4xl md:text-5xl font-normal mt-2 leading-tight text-legal-dark">
            Practice Areas & Legal Services
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-zinc-600 max-w-lg font-sans leading-relaxed">
          Comprehensive multi-disciplinary counsel bridging original trial court jurisdiction with strategic appellate standing before India's Supreme Court, High Courts, and commercial tribunals.
        </p>
      </div>

      {/* Services Grid (10 Services with dedicated inquiry form under each) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {LEGAL_SERVICES.map(service => (
          <ServiceCard 
            key={service.id} 
            service={service} 
            onShowNotice={onShowNotice} 
          />
        ))}
      </div>

      {/* Statutory Footer Disclaimer */}
      <div className="bg-legal-cardBg border border-legal-border p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs mono-tag text-zinc-600 shadow-xs">
        <div className="flex items-center space-x-2">
          <Shield className="w-4 h-4 text-legal-accent shrink-0" />
          <span>All submissions directly routed to <strong className="text-legal-dark">{ADVOCATE_EMAIL}</strong> in accordance with Bar Council of India professional standards.</span>
        </div>
        <button
          type="button"
          onClick={onOpenQuery}
          className="text-legal-dark hover:text-legal-accent underline font-semibold cursor-pointer shrink-0"
        >
          Open Comprehensive Brief Intake →
        </button>
      </div>
    </section>
  );
}
