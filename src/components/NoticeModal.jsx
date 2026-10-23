import React from 'react';
import { X, Bell, CheckCircle2, Info } from 'lucide-react';

export default function NoticeModal({ isOpen, onClose, title = "SLG Chambers Notification", message, type = "info" }) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 transition-all animate-fadeIn"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white border border-legal-border max-w-md w-full p-6 sm:p-7 shadow-2xl space-y-4">
        {/* Header */}
        <div className="flex justify-between items-center border-b border-legal-border pb-3">
          <div className="flex items-center space-x-2">
            {type === 'success' ? (
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
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
            className="text-zinc-400 hover:text-legal-dark p-1 transition-colors cursor-pointer"
            aria-label="Close notification"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Message body */}
        <p className="text-sm text-zinc-700 font-sans leading-relaxed pt-1">
          {message}
        </p>

        {/* Action */}
        <div className="flex justify-end pt-3 border-t border-legal-border">
          <button 
            type="button"
            onClick={onClose} 
            className="bg-legal-dark text-cream-50 mono-tag text-xs px-5 py-2.5 hover:bg-zinc-800 transition-colors border border-legal-accent active:scale-95 cursor-pointer"
          >
            ACKNOWLEDGE
          </button>
        </div>
      </div>
    </div>
  );
}
