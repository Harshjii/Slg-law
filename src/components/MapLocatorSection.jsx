import React, { useState } from 'react';
import { MapPin, Navigation, Compass, ArrowRight, CheckCircle2 } from 'lucide-react';
import { JURISDICTION_NODES } from '../data/legalData';

export default function MapLocatorSection({ onOpenQuery, onShowNotice }) {
  const [selectedKey, setSelectedKey] = useState('delhi');
  const currentNode = JURISDICTION_NODES[selectedKey] || JURISDICTION_NODES['delhi'];

  const handleSelect = (key) => {
    setSelectedKey(key);
    const node = JURISDICTION_NODES[key];
    if (node && onShowNotice) {
      onShowNotice(
        `Coordinate Loaded: ${node.title}`,
        `Inspecting benches and registry listing parameters for ${node.subtitle}.`,
        'info'
      );
    }
  };

  return (
    <section id="locator" className="space-y-8 sm:space-y-12 pt-10 border-t border-legal-border scroll-mt-28">
      {/* Chapter Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="mono-tag text-xs text-legal-accent tracking-widest uppercase font-semibold">
            MAP LOCATOR // JURISDICTIONAL NETWORK
          </span>
          <h3 className="serif-title text-3xl sm:text-4xl md:text-5xl font-normal mt-2 leading-tight">
            Jurisdictional Network
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-zinc-600 max-w-md font-sans leading-relaxed">
          Interactive court schematic. Select any regional coordinate on the map or tap the pills below to inspect benches, tribunals, and listing mechanisms.
        </p>
      </div>

      {/* Mobile/Tablet Location Grid Selector for Easy Touch */}
      <div className="lg:hidden space-y-2">
        <div className="flex justify-between items-center text-[10px] mono-tag text-zinc-500">
          <span className="font-semibold text-legal-accent">SELECT COURT COORDINATE:</span>
          <span>Tap to load benches</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {Object.keys(JURISDICTION_NODES).map(key => {
            const node = JURISDICTION_NODES[key];
            const isSelected = selectedKey === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => handleSelect(key)}
                className={`mono-tag text-[10px] sm:text-[11px] p-2.5 border text-left transition-all cursor-pointer active:scale-98 ${
                  isSelected
                    ? 'bg-legal-dark text-white border-legal-accent font-semibold shadow-xs ring-1 ring-legal-accent'
                    : 'bg-legal-cardBg text-zinc-700 border-legal-border hover:border-legal-accent'
                }`}
              >
                <div className="flex items-center space-x-1.5 truncate">
                  <span className={`w-2 h-2 rounded-full shrink-0 ${isSelected ? 'bg-legal-accent animate-pulse' : 'bg-zinc-400'}`}></span>
                  <span className="truncate font-medium">{node.name}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Grid: SVG Map on Left, Detailed Dynamic Dossier on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
        
        {/* Left: Interactive Schematic Canvas */}
        <div className="lg:col-span-7 bg-white border border-legal-border p-4 sm:p-6 shadow-sm relative">
          <div className="flex flex-wrap justify-between items-center gap-2 mb-4 pb-3 border-b border-legal-border mono-tag text-[11px] text-zinc-500">
            <span className="font-semibold text-zinc-700 flex items-center space-x-1">
              <Compass className="w-3.5 h-3.5 text-legal-accent" />
              <span>SLG COURT MATRIX SCHEMATIC</span>
            </span>
            <span className="text-legal-accent font-semibold">SCALE: NCR & UP CORRIDOR</span>
          </div>

          {/* SVG Container */}
          <div className="relative w-full aspect-[4/3] bg-legal-cardBg border border-legal-border overflow-hidden flex items-center justify-center p-2 sm:p-4 select-none">
            {/* Grid Background Effect */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e0d5_1px,transparent_1px),linear-gradient(to_bottom,#e5e0d5_1px,transparent_1px)] bg-[size:28px_28px] opacity-60"></div>
            
            <svg 
              className="w-full h-full relative z-10" 
              viewBox="0 0 600 450" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Connecting Lines with animated dashes */}
              <line x1="130" y1="240" x2="220" y2="150" stroke="#C5A059" strokeWidth="2" strokeDasharray="4,4" opacity="0.85" />
              <line x1="220" y1="150" x2="330" y2="200" stroke="#C5A059" strokeWidth="2" strokeDasharray="4,4" opacity="0.85" />
              <line x1="330" y1="200" x2="410" y2="200" stroke="#C5A059" strokeWidth="2" strokeDasharray="4,4" opacity="0.85" />
              <line x1="220" y1="150" x2="250" y2="270" stroke="#C5A059" strokeWidth="2" strokeDasharray="4,4" opacity="0.85" />
              <line x1="410" y1="200" x2="460" y2="350" stroke="#C5A059" strokeWidth="2" strokeDasharray="4,4" opacity="0.85" />

              {/* Node: Gurgaon */}
              <g 
                className="cursor-pointer group" 
                onClick={() => handleSelect('gurgaon')}
              >
                {selectedKey === 'gurgaon' && (
                  <circle cx="130" cy="240" r="18" fill="none" stroke="#C5A059" strokeWidth="1.5" className="animate-ping" opacity="0.6" />
                )}
                <circle 
                  cx="130" 
                  cy="240" 
                  r={selectedKey === 'gurgaon' ? "12" : "10"} 
                  fill={selectedKey === 'gurgaon' ? "#C5A059" : "#F4EBCE"} 
                  stroke="#C5A059" 
                  strokeWidth="2" 
                />
                <circle cx="130" cy="240" r="4" fill={selectedKey === 'gurgaon' ? "#ffffff" : "#0B1B3D"} />
                <text x="80" y="244" className="mono-tag" fontSize="10" fill="#0B1B3D" fontWeight="600">GURGAON</text>
              </g>

              {/* Node: Delhi Apex & HC */}
              <g 
                className="cursor-pointer group" 
                onClick={() => handleSelect('delhi')}
              >
                {selectedKey === 'delhi' && (
                  <circle cx="220" cy="150" r="22" fill="none" stroke="#C5A059" strokeWidth="2" className="animate-ping" opacity="0.5" />
                )}
                <circle 
                  cx="220" 
                  cy="150" 
                  r={selectedKey === 'delhi' ? "16" : "14"} 
                  fill={selectedKey === 'delhi' ? "#0B1B3D" : "#FDFCF9"} 
                  stroke="#0B1B3D" 
                  strokeWidth="3" 
                />
                <circle cx="220" cy="150" r="5" fill={selectedKey === 'delhi' ? "#C5A059" : "#0B1B3D"} />
                <text x="175" y="122" className="mono-tag" fontSize="11" fill="#0B1B3D" fontWeight="bold">DELHI (APEX & HC)</text>
              </g>

              {/* Node: Faridabad */}
              <g 
                className="cursor-pointer group" 
                onClick={() => handleSelect('faridabad')}
              >
                {selectedKey === 'faridabad' && (
                  <circle cx="250" cy="270" r="18" fill="none" stroke="#C5A059" strokeWidth="1.5" className="animate-ping" opacity="0.6" />
                )}
                <circle 
                  cx="250" 
                  cy="270" 
                  r={selectedKey === 'faridabad' ? "12" : "10"} 
                  fill={selectedKey === 'faridabad' ? "#C5A059" : "#F4EBCE"} 
                  stroke="#C5A059" 
                  strokeWidth="2" 
                />
                <circle cx="250" cy="270" r="4" fill={selectedKey === 'faridabad' ? "#ffffff" : "#0B1B3D"} />
                <text x="210" y="302" className="mono-tag" fontSize="10" fill="#0B1B3D" fontWeight="600">FARIDABAD</text>
              </g>

              {/* Node: Noida (UP RERA) */}
              <g 
                className="cursor-pointer group" 
                onClick={() => handleSelect('noida')}
              >
                {selectedKey === 'noida' && (
                  <circle cx="330" cy="200" r="18" fill="none" stroke="#C5A059" strokeWidth="1.5" className="animate-ping" opacity="0.6" />
                )}
                <circle 
                  cx="330" 
                  cy="200" 
                  r={selectedKey === 'noida' ? "12" : "10"} 
                  fill={selectedKey === 'noida' ? "#C5A059" : "#F4EBCE"} 
                  stroke="#C5A059" 
                  strokeWidth="2" 
                />
                <circle cx="330" cy="200" r="4" fill={selectedKey === 'noida' ? "#ffffff" : "#0B1B3D"} />
                <text x="345" y="204" className="mono-tag" fontSize="10" fill="#0B1B3D" fontWeight="600">NOIDA (UP RERA)</text>
              </g>

              {/* Node: Bulandshahr */}
              <g 
                className="cursor-pointer group" 
                onClick={() => handleSelect('bulandshahr')}
              >
                {selectedKey === 'bulandshahr' && (
                  <circle cx="410" cy="200" r="18" fill="none" stroke="#C5A059" strokeWidth="1.5" className="animate-ping" opacity="0.6" />
                )}
                <circle 
                  cx="410" 
                  cy="200" 
                  r={selectedKey === 'bulandshahr' ? "12" : "10"} 
                  fill={selectedKey === 'bulandshahr' ? "#C5A059" : "#F4EBCE"} 
                  stroke="#C5A059" 
                  strokeWidth="2" 
                />
                <circle cx="410" cy="200" r="4" fill={selectedKey === 'bulandshahr' ? "#ffffff" : "#0B1B3D"} />
                <text x="425" y="215" className="mono-tag" fontSize="10" fill="#0B1B3D" fontWeight="600">BULANDSHAHR</text>
              </g>

              {/* Node: Kanpur Seat */}
              <g 
                className="cursor-pointer group" 
                onClick={() => handleSelect('kanpur')}
              >
                {selectedKey === 'kanpur' && (
                  <circle cx="460" cy="350" r="22" fill="none" stroke="#0B1B3D" strokeWidth="2" className="animate-ping" opacity="0.5" />
                )}
                <circle 
                  cx="460" 
                  cy="350" 
                  r={selectedKey === 'kanpur' ? "16" : "14"} 
                  fill={selectedKey === 'kanpur' ? "#0B1B3D" : "#FDFCF9"} 
                  stroke="#0B1B3D" 
                  strokeWidth="3" 
                />
                <circle cx="460" cy="350" r="5" fill="#C5A059" />
                <text x="390" y="385" className="mono-tag" fontSize="11" fill="#0B1B3D" fontWeight="bold">KANPUR SEAT</text>
                <text x="390" y="400" className="mono-tag" fontSize="9" fill="#C5A059" fontWeight="600">CIVIL & REVENUE</text>
              </g>
            </svg>
          </div>

          <div className="mt-4 flex flex-wrap justify-between items-center gap-2 text-[11px] mono-tag text-zinc-500">
            <span>Tap any pin or button to inspect jurisdiction data →</span>
            <span className="text-legal-accent font-semibold">Active Coordinates Loaded: {currentNode.name}</span>
          </div>
        </div>

        {/* Right: Dynamic Side Panel */}
        <div className="lg:col-span-5 bg-white border border-legal-border p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex flex-wrap justify-between items-center gap-2 border-b border-legal-border pb-4">
            <span className="mono-tag text-xs text-legal-accent font-bold">
              {currentNode.code}
            </span>
            <span className="mono-tag text-[10px] bg-emerald-50 text-emerald-800 border border-emerald-200 px-2.5 py-0.5 font-semibold">
              {currentNode.badge}
            </span>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="serif-title text-2xl sm:text-3xl font-bold text-legal-dark">
                {currentNode.title}
              </h4>
              <p className="mono-tag text-xs text-legal-accent mt-1 uppercase tracking-wider font-semibold">
                {currentNode.subtitle}
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <div>
                <span className="mono-tag text-xs font-semibold block text-zinc-700 mb-1.5">
                  Key Benches:
                </span>
                <div className="bg-legal-cardBg border border-legal-border p-3.5 text-xs text-zinc-700 font-sans leading-relaxed">
                  {currentNode.benches}
                </div>
              </div>

              <div>
                <span className="mono-tag text-xs font-semibold block text-zinc-700 mb-1.5">
                  Tribunals:
                </span>
                <div className="bg-legal-cardBg border border-legal-border p-3.5 text-xs text-zinc-700 font-sans leading-relaxed">
                  {currentNode.tribunals}
                </div>
              </div>

              <div>
                <span className="mono-tag text-xs font-semibold block text-zinc-700 mb-1.5">
                  Lead Partner Oversight:
                </span>
                <p className="text-xs text-zinc-600 font-sans leading-relaxed">
                  {currentNode.oversight}
                </p>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-legal-border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-xs">
            <span className="mono-tag text-zinc-500">Need matter listing in this bench?</span>
            <button
              type="button"
              onClick={onOpenQuery}
              className="mono-tag text-legal-accent font-bold hover:underline flex items-center space-x-1 cursor-pointer"
            >
              <span>Dispatch to Registry</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
