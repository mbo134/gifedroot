import React from 'react';
import { Calendar, Compass, ShieldCheck, Sparkles, Leaf, ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreServices }) => {
  return (
    <section className="relative overflow-hidden bg-[#142B1A] text-[#FAF7F2] pt-10 pb-16 lg:pt-16 lg:pb-24">
      {/* Background African geometric subtle texture */}
      <div className="absolute inset-0 bg-african-pattern opacity-10 pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#D4AF37]/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[#58331D]/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            {/* Cultural Kicker */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1B3824] border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-medium tracking-wide">
              <Leaf className="w-3.5 h-3.5" />
              <span>Sacred African Spiritual Healing & Contemplation</span>
            </div>

            {/* Tagline & Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#FAF7F2] tracking-tight leading-[1.15]" style={{ textWrap: 'balance' }}>
              Rooted in Tradition.{' '}
              <span className="text-[#D4AF37] italic font-normal">Guided by Wisdom.</span>{' '}
              Focused on Well-Being.
            </h1>

            {/* Narrative Subtitle */}
            <p className="text-base sm:text-lg text-[#E0D8CB] font-light leading-relaxed max-w-2xl">
              Gifted Roots brings time-honored African ancestral guidance, sacred botanical heritage, and mindful contemplation to seekers of clarity. We provide a dignified, ethical sanctuary where ancient memory illuminates modern life paths.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-semibold text-[#142B1A] bg-[#D4AF37] hover:bg-[#E5C358] rounded-xl shadow-lg transition-all duration-200 active:scale-[0.98] cursor-pointer whitespace-nowrap"
              >
                <Calendar className="w-4 h-4" />
                <span>Request Consultation</span>
              </button>

              <button
                onClick={onExploreServices}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-medium text-[#FAF7F2] bg-[#1B3824] hover:bg-[#274F33] border border-[#D4AF37]/30 rounded-xl transition-colors cursor-pointer whitespace-nowrap"
              >
                <span>Explore Sacred Services</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
              </button>
            </div>

            {/* Privacy & Ethical Guarantee Notice */}
            <div className="pt-2 flex items-center gap-2 text-xs text-[#C5B8A5]">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <span>100% Confidential · Respectful Cultural Lineage · No Miracle Promises</span>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#D4AF37]/40 shadow-2xl bg-[#0E1E12] group">
              <img
                src="/src/assets/images/hero_african_roots_1793325506871.jpg"
                alt="Ancient African baobab tree roots embedded deeply in sacred terracotta earth with sunrise forest canopy"
                referrerPolicy="no-referrer"
                className="w-full h-[380px] sm:h-[460px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E1E12] via-[#0E1E12]/30 to-transparent" />
              
              {/* Overlay card */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#142B1A]/90 backdrop-blur-md p-4 rounded-xl border border-[#D4AF37]/30">
                <p className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold">
                  Ancestral Continuity
                </p>
                <p className="text-sm text-[#FAF7F2] mt-1 font-serif italic">
                  "The roots of the great tree drink from the same silence that nourished our elders."
                </p>
                <div className="mt-2 flex items-center justify-between text-[11px] text-[#C5B8A5]">
                  <span>Asase Yaa Tradition</span>
                  <span className="text-[#D4AF37]">Universal Balance</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Proof & Core Values Strip */}
        <div className="mt-14 pt-8 border-t border-[#D4AF37]/25 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          <div className="space-y-1">
            <div className="text-xl sm:text-2xl font-serif font-bold text-[#D4AF37]">
              Ancestral Lineage
            </div>
            <p className="text-xs text-[#D1C6B4] leading-relaxed">
              Carrying sacred traditional teachings passed down through disciplined elder guidance.
            </p>
          </div>

          <div className="space-y-1">
            <div className="text-xl sm:text-2xl font-serif font-bold text-[#D4AF37]">
              Strict Ethics
            </div>
            <p className="text-xs text-[#D1C6B4] leading-relaxed">
              No fortune-telling gimmicks or medical cure promises; compassionate discernment.
            </p>
          </div>

          <div className="space-y-1">
            <div className="text-xl sm:text-2xl font-serif font-bold text-[#D4AF37]">
              Global Reach
            </div>
            <p className="text-xs text-[#D1C6B4] leading-relaxed">
              Serving the diaspora and local seekers via secure video, private audio, and sanctuary visits.
            </p>
          </div>

          <div className="space-y-1">
            <div className="text-xl sm:text-2xl font-serif font-bold text-[#D4AF37]">
              Total Privacy
            </div>
            <p className="text-xs text-[#D1C6B4] leading-relaxed">
              Sacred confidentiality honored for all personal reflections, lineages, and inquiries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
