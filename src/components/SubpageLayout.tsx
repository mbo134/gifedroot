import React from 'react';
import { ArrowLeft, Calendar, ShoppingBag } from 'lucide-react';
import { PageRoute } from '../types';

interface SubpageLayoutProps {
  kicker: string;
  title: string;
  subtitle: string;
  activePage: PageRoute;
  onNavigate: (page: PageRoute) => void;
  children: React.ReactNode;
}

const SUBPAGE_SHORTCUTS: { id: PageRoute; label: string }[] = [
  { id: 'about', label: 'About Lineage' },
  { id: 'services', label: 'Services' },
  { id: 'products', label: 'Products' },
  { id: 'botanicals', label: 'Botanical Lore' },
  { id: 'philosophy', label: 'Philosophy' },
  { id: 'testimonials', label: 'Global Clients' },
  { id: 'consultation', label: 'Consultation' },
];

export const SubpageLayout: React.FC<SubpageLayoutProps> = ({
  kicker,
  title,
  subtitle,
  activePage,
  onNavigate,
  children,
}) => {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      {/* Subpage Header Banner */}
      <section className="relative bg-[#142B1A] text-[#FAF7F2] border-b border-[#D4AF37]/30 overflow-hidden">
        <div className="absolute inset-0 bg-african-pattern opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative z-10 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => onNavigate('home')}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D4AF37] hover:text-[#FAF7F2] transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Return to Main Sanctuary</span>
            </button>

            <div className="flex items-center gap-2.5">
              {activePage !== 'products' && (
                <button
                  type="button"
                  onClick={() => onNavigate('products')}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#1B3824] hover:bg-[#23472E] border border-[#D4AF37]/35 rounded-xl text-xs font-semibold text-[#FAF7F2] transition-colors cursor-pointer"
                >
                  <ShoppingBag className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Apothecary Products</span>
                </button>
              )}
              {activePage !== 'consultation' && (
                <button
                  type="button"
                  onClick={() => onNavigate('consultation')}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#D4AF37] hover:bg-[#E5C358] rounded-xl text-xs font-bold text-[#142B1A] transition-colors cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Consultation</span>
                </button>
              )}
            </div>
          </div>

          <div className="max-w-3xl space-y-3">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
              {kicker}
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FAF7F2] leading-tight [text-wrap:balance]">
              {title}
            </h1>
            <p className="text-sm sm:text-base text-[#EAE2D3] leading-relaxed">
              {subtitle}
            </p>
          </div>

          {/* Subpage Switcher Strip */}
          <div className="pt-4 border-t border-[#D4AF37]/20 flex flex-wrap items-center gap-2">
            {SUBPAGE_SHORTCUTS.map((item) => {
              const isCurrent = item.id === activePage;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onNavigate(item.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap cursor-pointer ${
                    isCurrent
                      ? 'bg-[#D4AF37] text-[#142B1A]'
                      : 'bg-[#1B3824] text-[#D1C6B4] hover:text-[#FAF7F2] border border-[#D4AF37]/20'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Subpage Content */}
      {children}
    </div>
  );
};
