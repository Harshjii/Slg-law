import React from 'react';
import { BENCH_METRICS } from '../data/legalData';

export default function BenchSection() {
  return (
    <section id="bench" className="space-y-8 sm:space-y-12 pt-10 border-t border-legal-border scroll-mt-28">
      {/* Chapter Header */}
      <div>
        <span className="mono-tag text-xs text-legal-accent tracking-widest uppercase font-semibold">
          ADVOCACY ARCHITECTURE // PAN-INDIA BENCH
        </span>
        <h3 className="serif-title text-3xl sm:text-4xl md:text-5xl font-normal mt-2 leading-tight">
          Advocacy Architecture
        </h3>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {BENCH_METRICS.map(metric => (
          <div
            key={metric.num}
            className="bg-white border border-legal-border p-6 sm:p-8 space-y-4 shadow-sm hover:border-legal-accent transition-all duration-200"
          >
            <span className="mono-tag text-xs text-legal-accent font-semibold block tracking-wide">
              {metric.num} / {metric.tag}
            </span>
            <h4 className="serif-title text-2xl sm:text-3xl font-medium text-legal-dark">
              {metric.title}
            </h4>
            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-sans">
              {metric.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
