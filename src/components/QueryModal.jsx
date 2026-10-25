import React, { useState, useEffect } from 'react';
import { X, Send, Scale, PhoneCall, Mail, CheckCircle, ShieldCheck, Loader2 } from 'lucide-react';
import { FIRM_DETAILS, LEGAL_SERVICES } from '../data/legalData';
import { sendLegalQuery, ADVOCATE_EMAIL } from '../services/mailService';

export default function QueryModal({ isOpen, onClose, onSubmitted, initialService = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    role: 'Litigant',
    forum: 'Supreme Court of India',
    service: '',
    summary: '',
    acknowledged: false
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [refNumber, setRefNumber] = useState('');

  useEffect(() => {
    if (isOpen) {
      setFormData(prev => ({
        ...prev,
        service: initialService || prev.service || ''
      }));
    }
  }, [isOpen, initialService]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.acknowledged) {
      alert("Please check the statutory acknowledgment checkbox before submitting.");
      return;
    }

    setIsSubmitting(true);
    const result = await sendLegalQuery({
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      service: formData.service || formData.forum || "General Legal Inquiry",
      forum: formData.forum,
      summary: `[Role: ${formData.role}] ${formData.summary}`
    });

    setRefNumber(result.referenceId);
    setIsSubmitting(false);
    setIsSuccess(true);
    if (onSubmitted) {
      onSubmitted(result.referenceId);
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      role: 'Litigant',
      forum: 'Supreme Court of India',
      summary: '',
      acknowledged: false
    });
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-3 sm:p-6 overflow-y-auto animate-fadeIn"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-[#fcfbf9] border border-legal-border max-w-2xl w-full p-5 sm:p-10 shadow-2xl relative my-auto max-h-[92vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-start pb-3 sm:pb-4 border-b border-legal-border">
          <div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-legal-accent animate-pulse"></span>
              <span className="mono-tag text-[10px] sm:text-xs text-legal-accent font-bold uppercase tracking-wider">
                REGISTRY HELPDESK // BRIEF ASSESSMENT
              </span>
            </div>
            <h3 className="serif-title text-xl sm:text-3xl font-bold text-legal-dark mt-1">
              Matter Query & Preliminary Brief Intake
            </h3>
            <p className="text-[11px] sm:text-xs text-zinc-500 font-sans mt-0.5">
              Preliminary assessment under Advocates Act, 1961 guidelines.
            </p>
          </div>
          <button 
            type="button"
            onClick={handleReset}
            className="text-zinc-400 hover:text-legal-dark p-1.5 transition-colors cursor-pointer"
            aria-label="Close query modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSuccess ? (
          <div className="py-10 text-center space-y-5 animate-fadeIn">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto border border-emerald-300">
              <CheckCircle className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h4 className="serif-title text-3xl font-bold text-legal-dark">
                Brief Dispatched to Chambers
              </h4>
              <p className="text-xs sm:text-sm text-zinc-600 max-w-md mx-auto font-sans leading-relaxed">
                Your preliminary intake information has been received and routed directly to <span className="font-semibold text-legal-dark underline">{ADVOCATE_EMAIL}</span>. Our partner secretariat will review the statutory merit and reach out promptly.
              </p>
            </div>
            <div className="bg-legal-cardBg border border-legal-border p-4 max-w-md mx-auto text-left text-xs mono-tag space-y-1.5">
              <div className="flex justify-between text-zinc-600">
                <span>INTAKE REFERENCE:</span>
                <span className="font-bold text-legal-dark">{refNumber || 'SLG-2026-REGISTRY'}</span>
              </div>
              <div className="flex justify-between text-zinc-600">
                <span>RECIPIENT CHAMBERS:</span>
                <span className="font-semibold text-legal-accent">{ADVOCATE_EMAIL}</span>
              </div>
              <div className="flex justify-between text-zinc-600">
                <span>BENCH DESIGNATED:</span>
                <span className="font-semibold text-legal-dark">{formData.service || formData.forum}</span>
              </div>
              <div className="flex justify-between text-zinc-600">
                <span>STATUS:</span>
                <span className="text-emerald-700 font-semibold">TRANSMITTED TO ADVOCATE DESK</span>
              </div>
            </div>
            <div className="pt-4">
              <button
                type="button"
                onClick={handleReset}
                className="bg-legal-dark text-cream-50 mono-tag text-xs px-6 py-3 border border-legal-accent hover:bg-zinc-800 cursor-pointer transition-colors"
              >
                RETURN TO CHAMBERS PORTAL
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 pt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block mono-tag text-[11px] font-semibold text-zinc-700 mb-1">
                  FULL NAME / TITLE *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Advocate / Litigant Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white border border-legal-border px-3.5 py-2.5 text-xs text-legal-dark focus:outline-none focus:border-legal-accent transition-colors font-sans"
                />
              </div>

              <div>
                <label className="block mono-tag text-[11px] font-semibold text-zinc-700 mb-1">
                  CONTACT NUMBER *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="+91 98XXX XXXXX"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-white border border-legal-border px-3.5 py-2.5 text-xs text-legal-dark focus:outline-none focus:border-legal-accent transition-colors font-sans"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block mono-tag text-[11px] font-semibold text-zinc-700 mb-1">
                  EMAIL ADDRESS *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="registry@litigant.in"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white border border-legal-border px-3.5 py-2.5 text-xs text-legal-dark focus:outline-none focus:border-legal-accent transition-colors font-sans"
                />
              </div>

              <div>
                <label className="block mono-tag text-[11px] font-semibold text-zinc-700 mb-1">
                  I AM CONTACTING AS *
                </label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full bg-white border border-legal-border px-3.5 py-2.5 text-xs text-legal-dark focus:outline-none focus:border-legal-accent transition-colors font-sans cursor-pointer"
                >
                  <option value="Litigant">Litigant (Petitioner / Respondent)</option>
                  <option value="Referring Advocate">Referring Advocate / Counsel</option>
                  <option value="Corporate Representative">Corporate Legal Representative</option>
                  <option value="Civic / NGO Representative">Civic / NGO Partner</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block mono-tag text-[11px] font-semibold text-zinc-700 mb-1">
                  PRACTICE SERVICE VERTICAL
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-white border border-legal-border px-3.5 py-2.5 text-xs text-legal-dark focus:outline-none focus:border-legal-accent transition-colors font-sans cursor-pointer font-medium"
                >
                  <option value="">General Chambers Inquiry</option>
                  {LEGAL_SERVICES.map(svc => (
                    <option key={svc.id} value={svc.title}>{svc.title}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block mono-tag text-[11px] font-semibold text-zinc-700 mb-1">
                  FORUM / JURISDICTION OF MATTER *
                </label>
                <select
                  name="forum"
                  value={formData.forum}
                  onChange={handleChange}
                  className="w-full bg-white border border-legal-border px-3.5 py-2.5 text-xs text-legal-dark focus:outline-none focus:border-legal-accent transition-colors font-sans cursor-pointer"
                >
                  <option value="Supreme Court of India">Supreme Court of India (SLP / Article 32)</option>
                  <option value="Delhi High Court">Delhi High Court (Article 226 Writs / Commercial)</option>
                  <option value="Allahabad High Court & Lucknow Bench">Allahabad High Court / Lucknow Bench</option>
                  <option value="NCLT / NCLAT">NCLT Principal Bench / NCLAT (IBC / Company Law)</option>
                  <option value="UP RERA / REAT">UP RERA & Appellate Tribunal (Real Estate)</option>
                  <option value="NCDRC / Consumer Commission">NCDRC (National Consumer Commission)</option>
                  <option value="District & Sessions Courts (Delhi NCR / Kanpur)">District & Sessions Courts (Delhi NCR / Kanpur)</option>
                  <option value="UP Revenue Court / Board">UP Revenue Court / Board of Revenue</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block mono-tag text-[11px] font-semibold text-zinc-700 mb-1">
                BRIEF SYNOPSIS / CAUSE OF ACTION *
              </label>
              <textarea
                name="summary"
                rows={3}
                required
                placeholder="Briefly state key facts, impugned order date (if appeal/SLP), and interim relief sought..."
                value={formData.summary}
                onChange={handleChange}
                className="w-full bg-white border border-legal-border p-3 text-xs text-legal-dark focus:outline-none focus:border-legal-accent transition-colors font-sans resize-none"
              ></textarea>
            </div>

            <div className="bg-legal-cardBg border border-legal-border p-3 flex items-start space-x-2.5">
              <input
                type="checkbox"
                id="modalAcknowledge"
                name="acknowledged"
                checked={formData.acknowledged}
                onChange={handleChange}
                className="mt-0.5 h-4 w-4 rounded-none accent-legal-accent cursor-pointer"
              />
              <label htmlFor="modalAcknowledge" className="text-[11px] text-zinc-600 font-sans cursor-pointer">
                I declare this inquiry is voluntary and does not constitute advertisement solicitation or immediate advocate-client engagement under BCI Rule 36.
              </label>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-2">
              <div className="flex items-center space-x-3 text-xs mono-tag text-zinc-500">
                <span className="flex items-center space-x-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-legal-accent" />
                  <span>Confidential Intake</span>
                </span>
              </div>
              <div className="flex w-full sm:w-auto items-center space-x-2">
                <button
                  type="button"
                  onClick={handleReset}
                  className="w-1/2 sm:w-auto px-4 py-2.5 border border-legal-border text-zinc-600 hover:bg-zinc-100 mono-tag text-xs cursor-pointer"
                >
                  CANCEL
                </button>
                <button
                  type="submit"
                  disabled={!formData.acknowledged || isSubmitting}
                  className={`w-1/2 sm:w-auto px-6 py-2.5 mono-tag text-xs font-semibold flex items-center justify-center space-x-2 border transition-all cursor-pointer ${
                    formData.acknowledged && !isSubmitting
                      ? 'bg-legal-dark text-cream-50 border-legal-accent hover:bg-zinc-800'
                      : 'bg-zinc-200 text-zinc-400 border-zinc-300 cursor-not-allowed'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin text-legal-accent" />
                      <span>DISPATCHING...</span>
                    </>
                  ) : (
                    <>
                      <span>SUBMIT INTAKE</span>
                      <Send className="w-3.5 h-3.5 text-legal-accent" />
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
