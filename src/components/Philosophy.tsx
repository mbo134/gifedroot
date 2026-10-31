import React from 'react';
import { ShieldCheck, HeartHandshake, Compass, Users } from 'lucide-react';
import { PHILOSOPHY_PILLARS } from '../data/spiritualData';
import { SpiritualAccordion } from './SpiritualAccordion';

interface PhilosophyProps {
  onRequestBooking?: (serviceId?: string) => void;
}

export const Philosophy: React.FC<PhilosophyProps> = ({ onRequestBooking }) => {
  const icons = [Compass, HeartHandshake, Users, ShieldCheck];

  return (
    <section id="philosophy" className="py-20 lg:py-28 bg-[#142B1A] text-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <p className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold">
            Rooted in Tradition. Guided by Wisdom.
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#FAF7F2] tracking-tight">
            Our Traditional Philosophy & Ethical Code
          </h2>
          <div className="w-16 h-1 bg-[#D4AF37] mx-auto rounded-full" />
          <p className="text-base text-[#D1C6B4] leading-relaxed">
            Authentic African spirituality is built upon harmony, character (<em>Iwa Pele</em>), communal respect, and deep reverence for the living cosmos.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {PHILOSOPHY_PILLARS.map((pillar, idx) => {
            const IconComponent = icons[idx % icons.length];
            return (
              <div
                key={idx}
                className="bg-[#1B3824]/80 border border-[#D4AF37]/30 rounded-2xl p-6 space-y-3 hover:border-[#D4AF37] transition-all hover:bg-[#1B3824]"
              >
                <div className="w-10 h-10 rounded-xl bg-[#142B1A] text-[#D4AF37] flex items-center justify-center border border-[#D4AF37]/30">
                  <IconComponent className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-serif font-bold text-[#FAF7F2] leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-xs text-[#C5B8A5] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Interactive Accordion Section: Common Questions & Ancestral Inquiries */}
        <div className="max-w-4xl mx-auto pt-4 space-y-8">
          <div className="text-center space-y-3 mb-8">
            <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider">
              Seeker Knowledge Base
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#FAF7F2]">
              Spiritual Guidance & Ancestor Consultations: Common Questions
            </h3>
            <p className="text-xs sm:text-sm text-[#C5B8A5] max-w-2xl mx-auto leading-relaxed">
              Explore honest, grounded answers about African ancestral traditions, consultation ethics, and what to expect during your time of discernment.
            </p>
          </div>

          {/* Dedicated Interactive Accordion Component */}
          <SpiritualAccordion onRequestBooking={onRequestBooking} />
        </div>
      </div>
    </section>
  );
};
