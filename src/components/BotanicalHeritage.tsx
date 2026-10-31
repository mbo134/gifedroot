import React, { useState } from 'react';
import { Leaf, Info, Sparkles, BookOpen, ShieldCheck } from 'lucide-react';
import { BOTANICALS } from '../data/spiritualData';
import { BotanicalItem } from '../types';

export const BotanicalHeritage: React.FC = () => {
  const [selectedHerb, setSelectedHerb] = useState<BotanicalItem>(BOTANICALS[0]);

  return (
    <section id="botanicals" className="py-20 lg:py-28 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <p className="text-xs uppercase tracking-widest text-[#7A4628] font-bold">
            Sacred African Flora & Ethnobotanical Lore
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#142B1A] tracking-tight">
            Herbal Heritage: The Sacred Plants of Our Ancestors
          </h2>
          <div className="w-16 h-1 bg-[#D4AF37] mx-auto rounded-full" />
          <p className="text-base text-[#4A3D33] leading-relaxed">
            In indigenous African life, botanicals are sacred companions. Plants are honored not merely as physical matter, but as living teachers that foster calm, purify the atmosphere, and deepen meditation.
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Visual Asset & Educational Notice */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl overflow-hidden border-2 border-[#D4AF37]/40 shadow-xl bg-[#0E1E12] relative group">
              <img
                src="/src/assets/images/sacred_herbal_heritage_1793325506737.jpg"
                alt="Traditional African sacred botanicals, dried imphepho bundle, moringa leaves, and aromatic incense resin"
                referrerPolicy="no-referrer"
                className="w-full h-[360px] sm:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E1E12] via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 bg-[#142B1A]/85 backdrop-blur-md p-4 rounded-xl border border-[#D4AF37]/30 text-[#FAF7F2]">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">
                  Earth Reciprocity
                </p>
                <p className="text-xs text-[#FAF7F2] mt-1 font-serif italic">
                  "Before our elders gathered a leaf, they poured water and whispered words of gratitude to the root."
                </p>
              </div>
            </div>

            {/* Strict Educational Notice */}
            <div className="p-4 bg-[#F1EBD8] rounded-xl border border-[#D4AF37]/30 text-xs text-[#4A3D33] space-y-1.5">
              <div className="flex items-center gap-1.5 font-bold text-[#7A4628]">
                <ShieldCheck className="w-4 h-4 text-[#7A4628]" />
                <span>Strictly Educational Plant Knowledge</span>
              </div>
              <p className="leading-relaxed">
                Information presented regarding traditional African plants is preserved for cultural heritage, spiritual symbolism, and historical education. It does not constitute medical advice or pharmacy practice.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Botanical Explorer */}
          <div className="lg:col-span-7 space-y-6">
            {/* Quick Plant Selector Chips / Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {BOTANICALS.map((herb) => {
                const isSelected = selectedHerb.id === herb.id;
                return (
                  <button
                    key={herb.id}
                    onClick={() => setSelectedHerb(herb)}
                    className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#142B1A] border-[#D4AF37] text-[#FAF7F2] shadow-sm'
                        : 'bg-[#F4EFE6] border-[#D4AF37]/20 text-[#3E342D] hover:bg-[#EAE2D3]'
                    }`}
                  >
                    <div className="text-xs font-bold truncate">
                      {herb.name.split(' ')[0]}
                    </div>
                    <div
                      className={`text-[11px] truncate ${
                        isSelected ? 'text-[#D4AF37]' : 'text-[#7A4628]'
                      }`}
                    >
                      {herb.region.split(',')[0]}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Selected Botanical Detail Card */}
            <div className="bg-[#FAF7F2] p-6 sm:p-8 rounded-2xl border-2 border-[#D4AF37]/40 shadow-md space-y-5">
              <div className="border-b border-[#EAE2D3] pb-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <div>
                  <h3 className="text-2xl font-serif font-bold text-[#142B1A]">
                    {selectedHerb.name}
                  </h3>
                  <p className="text-xs text-[#7A4628] italic mt-0.5 font-serif">
                    Traditional Nomenclature: {selectedHerb.traditionalName}
                  </p>
                </div>
                <div className="text-xs text-[#55473C]">
                  Native to: <span className="font-semibold text-[#142B1A]">{selectedHerb.region}</span>
                </div>
              </div>

              {/* Cultural Significance */}
              <div className="space-y-1.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#142B1A] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Cultural & Spiritual Significance</span>
                </h4>
                <p className="text-sm text-[#4A3D33] leading-relaxed">
                  {selectedHerb.significance}
                </p>
              </div>

              {/* Traditional Use */}
              <div className="space-y-1.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#142B1A] flex items-center gap-1.5">
                  <Leaf className="w-3.5 h-3.5 text-[#1B3824]" />
                  <span>Traditional Ceremonial & Household Use</span>
                </h4>
                <p className="text-sm text-[#4A3D33] leading-relaxed">
                  {selectedHerb.traditionalUse}
                </p>
              </div>

              {/* Wisdom Note */}
              <div className="p-4 bg-[#F4EFE6] rounded-xl border border-[#D4AF37]/30 space-y-1">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#7A4628] flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-[#7A4628]" />
                  <span>Elder Contemplative Note</span>
                </h4>
                <p className="text-xs text-[#4A3D33] italic leading-relaxed">
                  "{selectedHerb.wisdomNote}"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
