import React, { useEffect } from 'react';
import { X, Bell, CheckCircle2 } from 'lucide-react';
import { lockBodyScroll, unlockBodyScroll } from '../utils/scrollLock';

export default function NoticeModal({ isOpen, onClose, title = "SLG Chambers Notification", message, type = "info" }) {
  useEffect(() => {
    if (isOpen) {
      lockBodyScroll();
    } else {
      unlockBodyScroll();
    }
    return () => {
      unlockBodyScroll();
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-md p-4 transition-all animate-fadeIn"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-[#0B1B3D] border border-legal-accent/60 max-w-md w-full p-6 sm:p-7 shadow-2xl space-y-4 rounded-xs">
        {/* Header */}
        <div className="flex justify-between items-center border-b border-[#1B3564] pb-3">
          <div className="flex items-center space-x-2">
            {type === 'success' ? (
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            ) : (
              <Bell className="w-4 h-4 text-legal-accent" />
            )}
            <span className="mono-tag text-xs text-legal-accent font-bold tracking-wide uppercase">
              {title}
            </span>
          </div>
          <button 
            type="button"
            onClick={onClose} 
            className="text-slate-400 hover:text-white p-1 transition-colors cursor-pointer"
            aria-label="Close notification"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Message body */}
        <p className="text-sm text-slate-300 font-sans leading-relaxed pt-1">
          {message}
        </p>

        {/* Action */}
        <div className="flex justify-end pt-3 border-t border-[#1B3564]">
          <button 
            type="button"
            onClick={onClose} 
            className="bg-legal-accent hover:bg-gold-400 text-navy-950 font-bold mono-tag text-xs px-5 py-2.5 transition-colors border border-gold-300 active:scale-95 cursor-pointer shadow-md"
          >
            ACKNOWLEDGE
          </button>
        </div>
      </div>
    </div>
  );
}
