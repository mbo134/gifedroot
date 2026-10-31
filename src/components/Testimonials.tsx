import React from 'react';
import { Quote, Sparkles, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/spiritualData';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <p className="text-xs uppercase tracking-widest text-[#7A4628] font-bold">
            Voices of Seekers
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#142B1A] tracking-tight">
            Reflections on Clarity, Peace & Grounding
          </h2>
          <div className="w-16 h-1 bg-[#D4AF37] mx-auto rounded-full" />
          <p className="text-base text-[#4A3D33] leading-relaxed">
            Genuine experiences from individuals who turned to traditional guidance to navigate life changes and reconnect with their cultural heritage.
          </p>
        </div>

        {/* Testimonials 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-[#F4EFE6] border border-[#D4AF37]/30 rounded-2xl p-7 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow relative"
            >
              <Quote className="w-8 h-8 text-[#D4AF37]/40 mb-3" />
              
              <blockquote className="text-sm sm:text-base text-[#3E342D] leading-relaxed font-serif italic mb-6">
                "{t.quote}"
              </blockquote>

              <div className="border-t border-[#EAE2D3] pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                <div>
                  <div className="font-bold text-[#142B1A] text-sm">
                    {t.author}
                  </div>
                  <div className="text-[#7A4628]">
                    {t.location}
                  </div>
                </div>

                {/* Clean unboxed metadata (no pill badge) */}
                <div className="text-[#55473C] text-right sm:text-right">
                  <div className="font-medium text-[#142B1A]">{t.serviceTaken}</div>
                  <div className="text-[11px] text-[#7A4628]">{t.period}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Ethical disclaimer note */}
        <div className="mt-12 text-center text-xs text-[#7A4628]">
          <p>
            * Testimonials reflect individual personal journeys and spiritual perspectives. Results differ per person. Gifted Roots does not claim supernatural powers or medical healing.
          </p>
        </div>
      </div>
    </section>
  );
};
