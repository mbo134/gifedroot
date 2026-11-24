import React, { useEffect, useState } from 'react';
import { X, ShoppingBag, Check, Minus, Plus, Leaf, Sparkles, ShieldCheck } from 'lucide-react';
import { ProductItem, ProductVariant } from '../types';

interface ProductDetailModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onAddToCart: (product: ProductItem, variant: ProductVariant, quantity: number) => void;
  onOpenCart: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onOpenCart,
}) => {
  const [selectedVariantId, setSelectedVariantId] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<'story' | 'ritual' | 'care'>('story');
  const [addedFeedback, setAddedFeedback] = useState(false);

  useEffect(() => {
    if (product) {
      setSelectedVariantId(product.variants[0]?.id ?? '');
      setQuantity(1);
      setActiveTab('story');
      setAddedFeedback(false);
    }
  }, [product]);

  if (!product) return null;

  const activeVariant =
    product.variants.find((v) => v.id === selectedVariantId) ?? product.variants[0];

  const handleAdd = () => {
    onAddToCart(product, activeVariant, quantity);
    setAddedFeedback(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 bg-[#0E1E12]/70 backdrop-blur-xs overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="pdp-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#FAF7F2] sm:rounded-2xl border border-[#D4AF37]/35 shadow-2xl overflow-hidden my-auto max-h-screen sm:max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Close Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-[#F4EFE6] border-b border-[#D4AF37]/20 shrink-0">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#7A4628]">
            {product.categoryLabel} · {product.origin}
          </span>
          <button
            onClick={onClose}
            aria-label="Close product details"
            className="p-1.5 rounded-xl text-[#4A3D33] hover:text-[#142B1A] hover:bg-[#EAE2D3] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Contiguous Layout */}
        <div className="overflow-y-auto flex-1 p-5 sm:p-7">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-7 items-start">
            {/* Left Column: 4:3 Product Image + Material Provenance */}
            <div className="md:col-span-6 space-y-4">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-[#F4EFE6] border border-[#D4AF37]/25">
                <img
                  src={product.image}
                  alt={product.imageAlt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="p-4 rounded-xl bg-[#F4EFE6] border border-[#D4AF37]/20 space-y-1.5">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#142B1A]">
                  <Leaf className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Provenance &amp; Craft Material</span>
                </div>
                <p className="text-xs text-[#4A3D33] leading-relaxed">
                  {product.botanicalOrMaterial}
                </p>
              </div>
            </div>

            {/* Right Column: Contiguous Offering Selection Module */}
            <div className="md:col-span-6 space-y-5">
              <div className="space-y-1.5">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-semibold text-[#7A4628]">
                    {product.subtitle}
                  </span>
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-md bg-[#EAE2D3] text-[#142B1A]">
                    {product.availability}
                  </span>
                </div>
                <h2
                  id="pdp-modal-title"
                  className="font-serif text-2xl sm:text-3xl font-bold text-[#142B1A] leading-tight"
                >
                  {product.name}
                </h2>
              </div>

              <p className="text-sm text-[#4A3D33] leading-relaxed">
                {product.shortDesc}
              </p>

              {/* Variant Selector */}
              <div className="space-y-2">
                <span className="block text-xs font-bold uppercase tracking-wider text-[#55473C]">
                  Select Size / Edition
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {product.variants.map((variant) => {
                    const selected = variant.id === activeVariant.id;
                    return (
                      <button
                        key={variant.id}
                        type="button"
                        onClick={() => {
                          setSelectedVariantId(variant.id);
                          setAddedFeedback(false);
                        }}
                        className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                          selected
                            ? 'bg-[#142B1A] text-[#FAF7F2] border-[#D4AF37]'
                            : 'bg-[#FFFFFF] text-[#2C241E] border-[#D4AF37]/30 hover:border-[#142B1A]/50'
                        }`}
                      >
                        <div className="text-xs font-semibold">{variant.label}</div>
                        <div
                          className={`text-[11px] mt-0.5 ${
                            selected ? 'text-[#D4AF37]' : 'text-[#7A4628]'
                          }`}
                        >
                          {variant.weightOrSize}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Quantity Stepper & Primary Add to Bag CTA */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
                <div className="inline-flex items-center justify-between border border-[#D4AF37]/35 rounded-xl bg-[#FFFFFF] px-2 py-1.5 sm:w-32">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    aria-label="Decrease quantity"
                    className="p-1.5 text-[#142B1A] hover:bg-[#F4EFE6] rounded-lg transition-colors cursor-pointer"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="text-sm font-bold text-[#142B1A] tabular-nums px-2">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.min(12, q + 1))}
                    aria-label="Increase quantity"
                    className="p-1.5 text-[#142B1A] hover:bg-[#F4EFE6] rounded-lg transition-colors cursor-pointer"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                <button
                  type="button"
                  onClick={handleAdd}
                  className="flex-1 px-5 py-3 bg-[#142B1A] hover:bg-[#1B3824] text-[#FAF7F2] text-sm font-semibold rounded-xl border border-[#D4AF37]/40 shadow-sm inline-flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  {addedFeedback ? (
                    <>
                      <Check className="w-4 h-4 text-[#D4AF37]" />
                      <span>Added to Sacred Bag</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4 text-[#D4AF37]" />
                      <span>Add to Request Bag</span>
                    </>
                  )}
                </button>
              </div>

              {addedFeedback && (
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#EAF3EC] border border-[#142B1A]/20 text-xs text-[#142B1A]">
                  <span className="font-medium">Item placed in your Sanctuary Bag.</span>
                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      onOpenCart();
                    }}
                    className="font-bold underline hover:text-[#7A4628] cursor-pointer"
                  >
                    Open Bag &amp; Request
                  </button>
                </div>
              )}

              {/* Cultural Story / Ritual Guide / Care Tabs */}
              <div className="pt-3 border-t border-[#D4AF37]/20 space-y-3">
                <div className="flex items-center gap-4 border-b border-[#EAE2D3]">
                  {[
                    { id: 'story', label: 'Cultural Lore' },
                    { id: 'ritual', label: 'Ritual Use' },
                    { id: 'care', label: 'Care & Ethics' },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTab(tab.id as 'story' | 'ritual' | 'care')}
                      className={`pb-2 text-xs font-bold transition-colors border-b-2 -mb-px cursor-pointer ${
                        activeTab === tab.id
                          ? 'text-[#142B1A] border-[#D4AF37]'
                          : 'text-[#8C7E72] border-transparent hover:text-[#4A3D33]'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                <div className="text-xs text-[#4A3D33] leading-relaxed min-h-[72px]">
                  {activeTab === 'story' && <p>{product.culturalStory}</p>}
                  {activeTab === 'ritual' && (
                    <p className="flex items-start gap-2">
                      <Sparkles className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                      <span>{product.ritualUse}</span>
                    </p>
                  )}
                  {activeTab === 'care' && (
                    <div className="space-y-2">
                      <p>{product.careInstructions}</p>
                      <p className="flex items-start gap-1.5 text-[11px] text-[#7A4628]">
                        <ShieldCheck className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                        <span>
                          Provided for cultural heritage, mindfulness, and home sanctuary craft; not a clinical medical product.
                        </span>
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
