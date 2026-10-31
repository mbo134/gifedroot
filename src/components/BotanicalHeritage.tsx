import React, { useState } from 'react';
import { Leaf, Info, Sparkles, BookOpen, ShieldCheck, Coins, Compass, Sun } from 'lucide-react';
import { BOTANICALS } from '../data/spiritualData';
import { BotanicalItem } from '../types';
import botanicalsImg from '../assets/images/sacred_herbal_heritage_1793325506737.jpg';

export const BotanicalHeritage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'abundance' | 'ceremonial'>('abundance');
  const [selectedHerb, setSelectedHerb] = useState<BotanicalItem>(
    BOTANICALS.find((b) => b.id === 'pilea-peperomioides') || BOTANICALS[0]
  );

  const filteredBotanicals = BOTANICALS.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  return (
    <section id="botanicals" className="py-20 lg:py-28 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <p className="text-xs uppercase tracking-widest text-[#7A4628] font-bold flex items-center justify-center gap-1.5">
            <Coins className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Sacred African Flora & Household Energy Lore</span>
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#142B1A] tracking-tight">
            Herbal Heritage & Living Plants of Abundance
          </h2>
          <div className="w-16 h-1 bg-[#D4AF37] mx-auto rounded-full" />
          <p className="text-base text-[#4A3D33] leading-relaxed">
            In indigenous African and earth-centered traditions, botanicals are living companions. From revered cleansing herbs like Imphepho to lucky money plants that cultivate wealth, harmony, and positive energy, plants anchor our home in vitality.
          </p>
        </div>

        {/* Category Segmented Control */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 bg-[#EAE2D3] rounded-2xl border border-[#D4AF37]/30 flex-wrap justify-center gap-1">
            <button
              onClick={() => {
                setActiveCategory('abundance');
                const first = BOTANICALS.find((b) => b.category === 'abundance');
                if (first) setSelectedHerb(first);
              }}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer flex items-center gap-2 ${
                activeCategory === 'abundance'
                  ? 'bg-[#142B1A] text-[#FAF7F2] shadow-sm'
                  : 'text-[#4A3D33] hover:text-[#142B1A]'
              }`}
            >
              <Coins className="w-4 h-4 text-[#D4AF37]" />
              <span>5 Lucky Plants for Wealth & Abundance</span>
            </button>
            <button
              onClick={() => {
                setActiveCategory('ceremonial');
                const first = BOTANICALS.find((b) => b.category === 'ceremonial');
                if (first) setSelectedHerb(first);
              }}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer flex items-center gap-2 ${
                activeCategory === 'ceremonial'
                  ? 'bg-[#142B1A] text-[#FAF7F2] shadow-sm'
                  : 'text-[#4A3D33] hover:text-[#142B1A]'
              }`}
            >
              <Leaf className="w-4 h-4 text-[#1B3824]" />
              <span>Ceremonial & Ancestral Herbs</span>
            </button>
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-[#142B1A] text-[#FAF7F2] shadow-sm'
                  : 'text-[#4A3D33] hover:text-[#142B1A]'
              }`}
            >
              All Plants ({BOTANICALS.length})
            </button>
          </div>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Visual Asset & Educational Notice */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl overflow-hidden border-2 border-[#D4AF37]/40 shadow-xl bg-[#0E1E12] relative group">
              <img
                src={botanicalsImg}
                alt="Traditional African sacred botanicals, dried imphepho bundle, moringa leaves, and aromatic incense resin"
                referrerPolicy="no-referrer"
                className="w-full h-[360px] sm:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E1E12] via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 bg-[#142B1A]/90 backdrop-blur-md p-4 rounded-xl border border-[#D4AF37]/30 text-[#FAF7F2]">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">
                  Earth Reciprocity & Living Energy
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
                <span>Traditional Botanical Knowledge & Philosophy</span>
              </div>
              <p className="leading-relaxed">
                Information presented regarding traditional plants and home abundance symbols is preserved for cultural heritage, holistic mindfulness, and home harmony. Plants naturally purify air and cultivate serene environments.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Botanical Explorer */}
          <div className="lg:col-span-7 space-y-6">
            {/* Quick Plant Selector Chips / Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {filteredBotanicals.map((herb) => {
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
                      {herb.name.split(' (')[0]}
                    </div>
                    <div
                      className={`text-[11px] truncate mt-0.5 ${
                        isSelected ? 'text-[#D4AF37]' : 'text-[#7A4628]'
                      }`}
                    >
                      {herb.traditionalName.split('/')[0]}
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
                    Traditional / Common Name: {selectedHerb.traditionalName}
                  </p>
                </div>
                <div className="text-xs text-[#55473C]">
                  Origin / Habitat: <span className="font-semibold text-[#142B1A]">{selectedHerb.region}</span>
                </div>
              </div>

              {/* Cultural & Spiritual Significance */}
              <div className="space-y-1.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#142B1A] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Cultural Symbolism & Meaning</span>
                </h4>
                <p className="text-sm text-[#4A3D33] leading-relaxed">
                  {selectedHerb.significance}
                </p>
              </div>

              {/* Traditional Use */}
              <div className="space-y-1.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#142B1A] flex items-center gap-1.5">
                  <Leaf className="w-3.5 h-3.5 text-[#1B3824]" />
                  <span>Household Placement & Traditional Practice</span>
                </h4>
                <p className="text-sm text-[#4A3D33] leading-relaxed">
                  {selectedHerb.traditionalUse}
                </p>
              </div>

              {/* Placement & Energy Quality Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {selectedHerb.placementTip && (
                  <div className="p-3.5 bg-[#F4EFE6] rounded-xl border border-[#D4AF37]/20 space-y-1 text-xs">
                    <span className="font-bold text-[#142B1A] flex items-center gap-1.5">
                      <Compass className="w-3.5 h-3.5 text-[#7A4628]" />
                      <span>Optimal Home Placement</span>
                    </span>
                    <p className="text-[#55473C] leading-relaxed">
                      {selectedHerb.placementTip}
                    </p>
                  </div>
                )}
                {selectedHerb.energyQuality && (
                  <div className="p-3.5 bg-[#F4EFE6] rounded-xl border border-[#D4AF37]/20 space-y-1 text-xs">
                    <span className="font-bold text-[#142B1A] flex items-center gap-1.5">
                      <Sun className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>Energy & Atmospheric Quality</span>
                    </span>
                    <p className="text-[#55473C] leading-relaxed">
                      {selectedHerb.energyQuality}
                    </p>
                  </div>
                )}
              </div>

              {/* Wisdom Note */}
              <div className="p-4 bg-[#F1EBD8] rounded-xl border border-[#D4AF37]/30 space-y-1">
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
