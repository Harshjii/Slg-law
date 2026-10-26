import React, { useState, useEffect } from 'react';
import { Clock, ShieldAlert } from 'lucide-react';
import { FIRM_DETAILS } from '../data/legalData';

export default function TopTicker({ onOpenBci, onShowNotice }) {
  const [timeStr, setTimeStr] = useState('');

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const options = {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false
        };
        const ist = new Intl.DateTimeFormat('en-GB', options).format(now);
        setTimeStr(`NEW DELHI ${ist} IST`);
      } catch (e) {
        setTimeStr('NEW DELHI --:--:-- IST');
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#060E1D] text-cream-100 text-[11px] mono-tag py-2 px-4 md:px-12 flex flex-wrap justify-between items-center border-b border-[#1A2E56] transition-colors">
      {/* Left: Active Benches */}
      <div className="flex items-center space-x-3 overflow-x-auto whitespace-nowrap py-1 scrollbar-none">
        <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
        <span className="font-semibold tracking-wider text-cream-50">BENCH SESSIONS ACTIVE</span>
        <span className="text-[#3A507D]">·</span>
        <span className="text-zinc-300">SUPREME COURT</span>
        <span className="text-[#3A507D]">·</span>
        <span className="text-zinc-300">HIGH COURTS</span>
        <span className="text-[#3A507D]">·</span>
        <span className="text-zinc-300">DISTRICT COURTS & TRIBUNALS</span>
      </div>

      {/* Right: Clock & Quick Badges */}
      <div className="hidden lg:flex items-center space-x-5 text-[10px] text-zinc-400 pt-1 lg:pt-0">
        <span className="flex items-center space-x-1.5 text-zinc-300 font-medium">
          <Clock className="w-3 h-3 text-legal-accent" />
          <span>{timeStr || 'NEW DELHI --:--:-- IST'}</span>
        </span>
        <span>•</span>
        <button
          type="button"
          onClick={onOpenBci}
          className="text-cream-100 hover:text-legal-accent flex items-center space-x-1 underline cursor-pointer transition-colors"
        >
          <ShieldAlert className="w-3 h-3 text-legal-accent" />
          <span>BCI RULE 36</span>
        </button>
      </div>
    </div>
  );
}
