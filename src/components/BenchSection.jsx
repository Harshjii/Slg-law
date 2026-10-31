import React from 'react';
import { BENCH_METRICS } from '../data/legalData';

export default function BenchSection() {
  return (
    <section id="bench" className="space-y-8 sm:space-y-12 pt-10 border-t border-[#1B3564] scroll-mt-28">
      {/* Chapter Header */}
      <div>
        <span className="mono-tag text-xs text-legal-accent tracking-widest uppercase font-semibold">
          ADVOCACY ARCHITECTURE // PAN-INDIA BENCH
        </span>
        <h3 className="serif-title text-3xl sm:text-4xl md:text-5xl font-normal mt-2 leading-tight text-[#F8F6F0]">
          Advocacy Architecture
        </h3>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {BENCH_METRICS.map(metric => (
          <div
            key={metric.num}
            className="bg-[#0B1B3D] border border-[#1B3564] p-6 sm:p-8 space-y-4 shadow-xl hover:border-legal-accent transition-all duration-200 rounded-xs"
          >
            <span className="mono-tag text-xs text-legal-accent font-semibold block tracking-wide">
              {metric.num} / {metric.tag}
            </span>
            <h4 className="serif-title text-2xl sm:text-3xl font-medium text-[#F8F6F0]">
              {metric.title}
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
              {metric.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
