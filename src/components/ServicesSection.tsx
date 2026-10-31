import React, { useState } from 'react';
import { Clock, ArrowUpRight, Compass, Shield, Sparkles } from 'lucide-react';
import { SERVICES } from '../data/spiritualData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectServiceForModal: (service: ServiceItem) => void;
  onRequestBooking: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceForModal,
  onRequestBooking,
}) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'guidance' | 'botanical' | 'mindfulness'>('all');

  const filteredServices = SERVICES.filter((s) => {
    if (activeCategory === 'all') return true;
    return s.category === activeCategory;
  });

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#F4EFE6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <p className="text-xs uppercase tracking-widest text-[#7A4628] font-bold">
            Sacred Offerings & Consultations
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#142B1A] tracking-tight">
            Traditional Services for Clarity & Harmony
          </h2>
          <div className="w-16 h-1 bg-[#D4AF37] mx-auto rounded-full" />
          <p className="text-base text-[#4A3D33] leading-relaxed">
            Every session is conducted with profound reverence for African spiritual lineage, ethical boundaries, and your sovereignty as a seeker.
          </p>
        </div>

        {/* Filter Tabs (Interactive Segmented Control) */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 bg-[#EAE2D3] rounded-2xl border border-[#D4AF37]/30 flex-wrap justify-center gap-1">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-[#142B1A] text-[#FAF7F2] shadow-sm'
                  : 'text-[#4A3D33] hover:text-[#142B1A]'
              }`}
            >
              All Services ({SERVICES.length})
            </button>
            <button
              onClick={() => setActiveCategory('guidance')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer ${
                activeCategory === 'guidance'
                  ? 'bg-[#142B1A] text-[#FAF7F2] shadow-sm'
                  : 'text-[#4A3D33] hover:text-[#142B1A]'
              }`}
            >
              Guidance & Lineage
            </button>
            <button
              onClick={() => setActiveCategory('botanical')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer ${
                activeCategory === 'botanical'
                  ? 'bg-[#142B1A] text-[#FAF7F2] shadow-sm'
                  : 'text-[#4A3D33] hover:text-[#142B1A]'
              }`}
            >
              Botanical & Ritual
            </button>
            <button
              onClick={() => setActiveCategory('mindfulness')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer ${
                activeCategory === 'mindfulness'
                  ? 'bg-[#142B1A] text-[#FAF7F2] shadow-sm'
                  : 'text-[#4A3D33] hover:text-[#142B1A]'
              }`}
            >
              Mindful Meditation
            </button>
          </div>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service, index) => {
            const editorialIndex = String(index + 1).padStart(2, '0');
            return (
              <div
                key={service.id}
                className="bg-[#FAF7F2] rounded-2xl border border-[#D4AF37]/30 p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-[#D4AF37] transition-all group"
              >
                <div className="space-y-4">
                  {/* Clean unboxed metadata (anti-slop rule) */}
                  <div className="flex items-center justify-between text-xs text-[#7A4628] font-medium border-b border-[#EAE2D3] pb-3">
                    <span className="font-serif font-bold text-sm text-[#142B1A]">
                      {editorialIndex}.
                    </span>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>{service.duration}</span>
                      <span aria-hidden="true">·</span>
                      <span>{service.sacredSymbol}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-serif font-bold text-[#142B1A] group-hover:text-[#7A4628] transition-colors leading-snug">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#4A3D33] leading-relaxed line-clamp-3">
                    {service.shortDesc}
                  </p>

                  {/* Format list: unboxed text */}
                  <div className="text-xs text-[#6B5A4E] pt-1">
                    <span className="font-medium text-[#142B1A]">Available via:</span>{' '}
                    {service.format.join(' · ')}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-6 mt-6 border-t border-[#EAE2D3] flex items-center justify-between gap-3">
                  <button
                    onClick={() => onSelectServiceForModal(service)}
                    className="text-xs font-semibold text-[#7A4628] hover:text-[#142B1A] flex items-center gap-1 transition-colors py-1 cursor-pointer"
                  >
                    <span>Details & Prep</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onRequestBooking(service.id)}
                    className="px-3.5 py-2 text-xs font-semibold text-[#FAF7F2] bg-[#142B1A] hover:bg-[#1B3824] rounded-xl border border-[#D4AF37]/30 transition-all cursor-pointer whitespace-nowrap active:scale-[0.98]"
                  >
                    Request Session
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Transparent Cost & Timing Inquiry Callout */}
        <div className="mt-14 p-6 sm:p-8 bg-[#142B1A] text-[#FAF7F2] rounded-2xl border border-[#D4AF37]/40 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-xl font-serif font-bold text-[#FAF7F2]">
              Honest Consultation Process & Transparency
            </h4>
            <p className="text-xs sm:text-sm text-[#D1C6B4] max-w-2xl leading-relaxed">
              We operate with clear session duration, no surprise obligations, and transparent sliding-scale consideration for those in genuine hardship. Every consultation begins with a mutual agreement of trust.
            </p>
          </div>
          <button
            onClick={() => onRequestBooking('spiritual-guidance')}
            className="px-6 py-3 text-xs sm:text-sm font-semibold text-[#142B1A] bg-[#D4AF37] hover:bg-[#E5C358] rounded-xl transition-all whitespace-nowrap cursor-pointer shadow-md"
          >
            Inquire for Consultation
          </button>
        </div>
      </div>
    </section>
  );
};
