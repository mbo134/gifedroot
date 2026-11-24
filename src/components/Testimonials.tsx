import React, { useState } from 'react';
import { Quote, Globe } from 'lucide-react';
import { GLOBAL_CLIENT_REGIONS, TESTIMONIALS } from '../data/spiritualData';

export const Testimonials: React.FC = () => {
  const [selectedRegionId, setSelectedRegionId] = useState<string>('all');

  const visibleRegions =
    selectedRegionId === 'all'
      ? GLOBAL_CLIENT_REGIONS
      : GLOBAL_CLIENT_REGIONS.filter((r) => r.id === selectedRegionId);

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <p className="text-xs uppercase tracking-widest text-[#7A4628] font-bold">
            Voices of Global Seekers
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#142B1A] tracking-tight [text-wrap:balance]">
            Trusted by Clients Across the World
          </h2>
          <div className="w-16 h-1 bg-[#D4AF37] mx-auto rounded-full" />
          <p className="text-base text-[#4A3D33] leading-relaxed">
            Genuine reflections from individuals and households across Africa, the Arabian Peninsula, Europe, and Eurasia who turned to our traditional healing and spiritual services.
          </p>
        </div>

        {/* Global Client Presence Directory */}
        <div className="mb-14 bg-[#142B1A] text-[#FAF7F2] rounded-2xl border border-[#D4AF37]/35 p-6 sm:p-8 shadow-md space-y-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-[#D4AF37]/20 pb-5">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
                <Globe className="w-4 h-4" />
                <span>Worldwide Confidential Consultations</span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#FAF7F2]">
                Regions &amp; Nations We Serve
              </h3>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => setSelectedRegionId('all')}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                  selectedRegionId === 'all'
                    ? 'bg-[#D4AF37] text-[#142B1A]'
                    : 'bg-[#1B3824] text-[#D1C6B4] hover:text-[#FAF7F2]'
                }`}
              >
                All Regions
              </button>
              {GLOBAL_CLIENT_REGIONS.map((region) => (
                <button
                  key={region.id}
                  type="button"
                  onClick={() => setSelectedRegionId(region.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                    selectedRegionId === region.id
                      ? 'bg-[#D4AF37] text-[#142B1A]'
                      : 'bg-[#1B3824] text-[#D1C6B4] hover:text-[#FAF7F2]'
                  }`}
                >
                  {region.regionName}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {visibleRegions.map((region) => (
              <div
                key={region.id}
                className="p-4 rounded-xl bg-[#1B3824]/90 border border-[#D4AF37]/20 space-y-2"
              >
                <h4 className="font-serif text-sm font-bold text-[#D4AF37]">
                  {region.regionName}
                </h4>
                <p className="text-xs text-[#E0D8CB] leading-relaxed">
                  {region.countries.join(' · ')}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-[#F4EFE6] border border-[#D4AF37]/30 rounded-2xl p-7 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow relative"
            >
              <div>
                <Quote className="w-8 h-8 text-[#D4AF37]/45 mb-3" />

                <blockquote className="text-sm sm:text-base text-[#3E342D] leading-relaxed font-serif italic mb-6">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
              </div>

              <div className="border-t border-[#EAE2D3] pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                <div>
                  <div className="font-bold text-[#142B1A] text-sm">
                    {t.author}
                  </div>
                  <div className="text-[#7A4628] font-medium">
                    {t.location}
                  </div>
                </div>

                {/* Clean unboxed metadata */}
                <div className="text-[#55473C] sm:text-right">
                  <div className="font-semibold text-[#142B1A]">{t.serviceTaken}</div>
                  <div className="text-[11px] text-[#7A4628]">{t.period}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Ethical disclaimer note */}
        <div className="mt-12 text-center text-xs text-[#7A4628]">
          <p>
            * Testimonials reflect individual personal journeys and spiritual perspectives across our global seeker community. Experiences vary per person.
          </p>
        </div>
      </div>
    </section>
  );
};
