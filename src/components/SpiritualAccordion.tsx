import React, { useState, useId } from 'react';
import {
  ChevronDown,
  Search,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Check,
  X,
  Compass,
  Users,
  BookOpen,
} from 'lucide-react';
import { FAQS } from '../data/spiritualData';
import { FaqItem } from '../types';

interface SpiritualAccordionProps {
  onRequestBooking?: (serviceId?: string) => void;
}

export const SpiritualAccordion: React.FC<SpiritualAccordionProps> = ({ onRequestBooking }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'ancestor' | 'guidance' | 'ethics-prep'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    'faq-ancestor-what': true, // open the first ancestor question by default
  });

  const baseId = useId();

  // Filter items based on active category and search query
  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const q = searchQuery.toLowerCase().trim();
    if (!q) return matchesCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(q) ||
      faq.answer.toLowerCase().includes(q) ||
      faq.keyTakeaway.toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleExpandAll = () => {
    const nextState: Record<string, boolean> = {};
    filteredFaqs.forEach((faq) => {
      nextState[faq.id] = true;
    });
    setOpenItems(nextState);
  };

  const handleCollapseAll = () => {
    setOpenItems({});
  };

  const getCategoryLabel = (cat: FaqItem['category']) => {
    switch (cat) {
      case 'ancestor':
        return 'Ancestor Heritage & Lineage';
      case 'guidance':
        return 'Spiritual Guidance & Discernment';
      case 'ethics-prep':
        return 'Ethics, Preparation & Privacy';
      default:
        return 'Traditional Knowledge';
    }
  };

  return (
    <div className="space-y-6">
      {/* Category Tabs & Interactive Controls */}
      <div className="flex flex-col gap-4">
        {/* Interactive Filter Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#D4AF37]/20 pb-4">
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#142B1A] border border-[#D4AF37]/30 rounded-xl">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-[#D4AF37] text-[#142B1A] shadow-sm'
                  : 'text-[#D1C6B4] hover:text-[#FAF7F2]'
              }`}
            >
              All Topics ({FAQS.length})
            </button>
            <button
              onClick={() => setActiveCategory('ancestor')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === 'ancestor'
                  ? 'bg-[#D4AF37] text-[#142B1A] shadow-sm'
                  : 'text-[#D1C6B4] hover:text-[#FAF7F2]'
              }`}
            >
              Ancestor Consultations
            </button>
            <button
              onClick={() => setActiveCategory('guidance')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === 'guidance'
                  ? 'bg-[#D4AF37] text-[#142B1A] shadow-sm'
                  : 'text-[#D1C6B4] hover:text-[#FAF7F2]'
              }`}
            >
              Spiritual Guidance
            </button>
            <button
              onClick={() => setActiveCategory('ethics-prep')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === 'ethics-prep'
                  ? 'bg-[#D4AF37] text-[#142B1A] shadow-sm'
                  : 'text-[#D1C6B4] hover:text-[#FAF7F2]'
              }`}
            >
              Preparation & Ethics
            </button>
          </div>

          {/* Expand / Collapse All Toggles */}
          <div className="flex items-center gap-3 text-xs text-[#D1C6B4]">
            <button
              onClick={handleExpandAll}
              className="hover:text-[#D4AF37] transition-colors cursor-pointer"
            >
              Expand All
            </button>
            <span aria-hidden="true" className="text-[#D4AF37]/40">·</span>
            <button
              onClick={handleCollapseAll}
              className="hover:text-[#D4AF37] transition-colors cursor-pointer"
            >
              Collapse All
            </button>
          </div>
        </div>

        {/* Search Bar for Inquiries */}
        <div className="relative">
          <Search className="w-4 h-4 text-[#D4AF37] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions (e.g., ancestors, virtual, trauma, free will, religion, preparation)..."
            className="w-full pl-10 pr-9 py-2.5 text-xs sm:text-sm bg-[#142B1A] border border-[#D4AF37]/30 rounded-xl text-[#FAF7F2] placeholder-[#8C7E72] focus:outline-none focus:ring-1 focus:ring-[#D4AF37] transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              aria-label="Clear search"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#D1C6B4] hover:text-[#FAF7F2] p-1 cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Accordion Container */}
      {filteredFaqs.length === 0 ? (
        <div className="p-8 text-center bg-[#1B3824]/40 border border-[#D4AF37]/20 rounded-2xl space-y-3">
          <p className="text-sm text-[#D1C6B4]">
            No answers found matching "{searchQuery}".
          </p>
          <button
            onClick={() => setSearchQuery('')}
            className="px-4 py-2 text-xs font-semibold text-[#142B1A] bg-[#D4AF37] hover:bg-[#E5C358] rounded-xl transition-all cursor-pointer"
          >
            Clear Search Filter
          </button>
        </div>
      ) : (
        <div className="space-y-3.5" role="region" aria-label="Spiritual Guidance & Ancestor Consultations Questions">
          {filteredFaqs.map((faq) => {
            const isOpen = !!openItems[faq.id];
            const contentId = `${baseId}-content-${faq.id}`;
            const headerId = `${baseId}-header-${faq.id}`;

            return (
              <div
                key={faq.id}
                className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#1B3824] border-[#D4AF37] shadow-lg ring-1 ring-[#D4AF37]/20'
                    : 'bg-[#1B3824]/60 border-[#D4AF37]/25 hover:border-[#D4AF37]/60 hover:bg-[#1B3824]/80'
                }`}
              >
                {/* Accordion Trigger Header */}
                <h3>
                  <button
                    id={headerId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    onClick={() => toggleItem(faq.id)}
                    className="w-full px-5 sm:px-6 py-4.5 flex items-start sm:items-center justify-between text-left gap-4 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#D4AF37]"
                  >
                    <div className="space-y-1 flex-1">
                      {/* Clean unboxed metadata category label (zero-pill rule) */}
                      <div className="text-[11px] font-medium text-[#D4AF37] flex items-center gap-2">
                        <span>{getCategoryLabel(faq.category)}</span>
                      </div>
                      <span className="text-sm sm:text-base font-serif font-bold text-[#FAF7F2] leading-snug block">
                        {faq.question}
                      </span>
                    </div>

                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border border-[#D4AF37]/40 text-[#D4AF37] transition-all duration-300 ${
                        isOpen ? 'bg-[#D4AF37] text-[#142B1A] rotate-180' : 'bg-[#142B1A]/80'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>
                </h3>

                {/* Accordion Content Body */}
                {isOpen && (
                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={headerId}
                    className="px-5 sm:px-6 pb-6 pt-1 space-y-4 border-t border-[#D4AF37]/20 text-[#D1C6B4] text-xs sm:text-sm leading-relaxed animate-in fade-in duration-200"
                  >
                    <p>{faq.answer}</p>

                    {/* Key Takeaway Highlight Callout */}
                    <div className="p-3.5 bg-[#142B1A] rounded-xl border border-[#D4AF37]/30 flex items-start gap-2.5 text-xs text-[#FAF7F2]">
                      <Sparkles className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-[#D4AF37] block">Core Traditional Principle:</span>
                        <span className="text-[#E0D8CB] leading-relaxed">{faq.keyTakeaway}</span>
                      </div>
                    </div>

                    {/* Contextual Action / Booking Link */}
                    {onRequestBooking && (
                      <div className="flex items-center justify-between pt-1 text-xs">
                        <span className="text-[#A69785]">
                          Need personal clarification from an elder?
                        </span>
                        <button
                          onClick={() => onRequestBooking(faq.relevantServiceId || 'spiritual-guidance')}
                          className="inline-flex items-center gap-1.5 font-semibold text-[#D4AF37] hover:text-[#FAF7F2] hover:underline transition-colors cursor-pointer"
                        >
                          <span>Request this consultation</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Helpful Support Footnote */}
      <div className="p-4 bg-[#142B1A]/80 rounded-xl border border-[#D4AF37]/25 flex flex-col sm:flex-row items-center justify-between text-xs text-[#C5B8A5] gap-3">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0" />
          <span>Have an unlisted question? Email <a href="mailto:healer@giftedrootsspiritualhealer.org" className="text-[#D4AF37] underline font-medium">healer@giftedrootsspiritualhealer.org</a> or schedule a time.</span>
        </div>
        <button
          onClick={() => onRequestBooking?.('ancestral-consultation')}
          className="text-[#D4AF37] hover:underline font-semibold whitespace-nowrap cursor-pointer"
        >
          Send Confidential Inquiry
        </button>
      </div>
    </div>
  );
};
