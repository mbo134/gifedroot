import React, { useMemo, useState } from 'react';
import {
  Search,
  ShoppingBag,
  ArrowLeft,
  Sparkles,
  Check,
  ShieldCheck,
  Leaf,
  Package,
  ArrowRight,
} from 'lucide-react';
import { PRODUCTS, PRODUCT_CATEGORIES } from '../data/productsData';
import { ProductCategory, ProductItem, ProductVariant } from '../types';

interface ProductsPageProps {
  onBackHome: () => void;
  onAddToCart: (product: ProductItem, variant: ProductVariant, quantity: number) => void;
  onOpenCart: () => void;
  onOpenBooking: () => void;
  cartItemCount: number;
  onSelectProduct: (product: ProductItem) => void;
}

type SortOption = 'featured' | 'price-asc' | 'price-desc';

export const ProductsPage: React.FC<ProductsPageProps> = ({
  onBackHome,
  onAddToCart,
  onOpenCart,
  onOpenBooking,
  cartItemCount,
  onSelectProduct,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | ProductCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<SortOption>('featured');
  const [recentlyAddedId, setRecentlyAddedId] = useState<string | null>(null);

  const filteredProducts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    const list = PRODUCTS.filter((product) => {
      const matchesCategory =
        selectedCategory === 'all' || product.category === selectedCategory;
      const matchesSearch =
        !query ||
        product.name.toLowerCase().includes(query) ||
        product.subtitle.toLowerCase().includes(query) ||
        product.origin.toLowerCase().includes(query) ||
        product.shortDesc.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });

    if (sortBy === 'price-asc') {
      return [...list].sort((a, b) => a.price - b.price);
    }
    if (sortBy === 'price-desc') {
      return [...list].sort((a, b) => b.price - a.price);
    }
    return list;
  }, [selectedCategory, searchQuery, sortBy]);

  const handleQuickAdd = (e: React.MouseEvent, product: ProductItem) => {
    e.stopPropagation();
    const defaultVariant = product.variants[0];
    onAddToCart(product, defaultVariant, 1);
    setRecentlyAddedId(product.id);
    setTimeout(() => {
      setRecentlyAddedId((prev) => (prev === product.id ? null : prev));
    }, 1800);
  };

  return (
    <div className="bg-[#FAF7F2] min-h-screen">
      {/* Sanctuary Storefront Hero Banner */}
      <section className="relative bg-[#142B1A] text-[#FAF7F2] border-b border-[#D4AF37]/30 overflow-hidden">
        <div className="absolute inset-0 bg-african-pattern opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <button
              onClick={onBackHome}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D4AF37] hover:text-[#FAF7F2] transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Return to Main Sanctuary</span>
            </button>

            <button
              onClick={onOpenCart}
              className="inline-flex items-center gap-2.5 px-4 py-2 bg-[#1B3824] hover:bg-[#23472E] border border-[#D4AF37]/40 rounded-xl text-xs font-semibold text-[#FAF7F2] transition-colors cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4 text-[#D4AF37]" />
              <span>Sacred Bag</span>
              <span className="px-2 py-0.5 bg-[#D4AF37] text-[#142B1A] rounded-md font-bold tabular-nums">
                {cartItemCount}
              </span>
            </button>
          </div>

          <div className="max-w-3xl space-y-4">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
              Gifted Roots Sanctuary Apothecary &amp; Crafts
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FAF7F2] leading-tight [text-wrap:balance]">
              Sacred Botanical Offerings, Living Plants &amp; Ceremonial Crafts
            </h1>
            <p className="text-sm sm:text-base text-[#EAE2D3] leading-relaxed">
              Ethically harvested resins, mountain incense, hand-thrown terracotta vessels, and living prosperity plants curated to support tranquil home altars, ancestral reflection, and daily mindfulness.
            </p>
          </div>

          {/* Subtle Unboxed Value Props */}
          <div className="mt-8 pt-6 border-t border-[#D4AF37]/20 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-[#D1C6B4]">
            <span className="inline-flex items-center gap-2">
              <Leaf className="w-4 h-4 text-[#D4AF37]" />
              Ethically Wild-Harvested &amp; Guild-Crafted
            </span>
            <span className="inline-flex items-center gap-2">
              <Package className="w-4 h-4 text-[#D4AF37]" />
              Complimentary Sanctuary Delivery Over $95
            </span>
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              Traditional Cultural &amp; Ritual Offerings
            </span>
          </div>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6">
        <div className="bg-[#F4EFE6] border border-[#D4AF37]/25 rounded-2xl p-4 sm:p-5 space-y-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-[#7A4628] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search incense, plants, beads, vessels..."
                aria-label="Search sanctuary offerings"
                className="w-full pl-10 pr-4 py-2.5 text-sm bg-[#FAF7F2] border border-[#D4AF37]/30 rounded-xl text-[#2C241E] placeholder-[#8C7E72] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              />
            </div>

            {/* Sort & Count */}
            <div className="flex items-center justify-between sm:justify-end gap-4">
              <span className="text-xs font-medium text-[#55473C] tabular-nums">
                Showing {filteredProducts.length} of {PRODUCTS.length} offerings
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                aria-label="Sort products"
                className="px-3.5 py-2 text-xs font-semibold bg-[#FAF7F2] border border-[#D4AF37]/30 rounded-xl text-[#142B1A] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] cursor-pointer"
              >
                <option value="featured">Curated Order</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#D4AF37]/15">
            {PRODUCT_CATEGORIES.map((category) => {
              const isActive = selectedCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-[#142B1A] text-[#FAF7F2] shadow-sm border border-[#D4AF37]/50'
                      : 'bg-[#FAF7F2] text-[#4A3D33] hover:bg-[#EAE2D3] border border-[#D4AF37]/20'
                  }`}
                >
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Uniform 3-Column Product Catalog Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {filteredProducts.length === 0 ? (
          <div className="bg-[#F4EFE6] border border-[#D4AF37]/25 rounded-2xl p-12 text-center space-y-4">
            <p className="font-serif text-xl font-bold text-[#142B1A]">
              No matching sanctuary offerings found
            </p>
            <p className="text-sm text-[#55473C] max-w-md mx-auto">
              Try clearing your search terms or viewing all categories to explore our resins, living plants, and artisan vessels.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="px-5 py-2.5 bg-[#142B1A] text-[#FAF7F2] text-xs font-semibold rounded-xl hover:bg-[#1B3824] transition-colors cursor-pointer"
            >
              Reset Catalog Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProducts.map((product) => {
              const isRecentlyAdded = recentlyAddedId === product.id;

              return (
                <article
                  key={product.id}
                  onClick={() => onSelectProduct(product)}
                  className="group bg-[#FFFFFF] rounded-2xl border border-[#D4AF37]/25 overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex flex-col cursor-pointer"
                >
                  {/* 4:3 Image Container occupying ~65% visual height */}
                  <div className="relative aspect-[4/3] bg-[#F4EFE6] overflow-hidden shrink-0">
                    <img
                      src={product.image}
                      alt={product.imageAlt}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Max 1 quiet availability tag */}
                    <span className="absolute top-3 left-3 px-2.5 py-1 text-[11px] font-semibold tracking-wide bg-[#FAF7F2]/95 text-[#142B1A] border border-[#D4AF37]/30 rounded-lg shadow-xs">
                      {product.availability}
                    </span>
                  </div>

                  {/* Clean Card Body */}
                  <div className="p-5 flex-1 flex flex-col justify-between gap-4">
                    <div className="space-y-1.5">
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-[#7A4628]">
                        {product.categoryLabel} · {product.origin}
                      </p>
                      <h2 className="font-serif text-lg font-bold text-[#142B1A] group-hover:text-[#7A4628] transition-colors leading-snug">
                        {product.name}
                      </h2>
                      <p className="text-xs text-[#55473C] line-clamp-2 leading-relaxed">
                        {product.shortDesc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#EAE2D3] flex items-center justify-between gap-3">
                      <div>
                        <span className="block text-[10px] uppercase tracking-wider text-[#8C7E72]">
                          From
                        </span>
                        <span className="text-lg font-bold text-[#142B1A] tabular-nums">
                          ${product.price.toFixed(2)}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onSelectProduct(product);
                          }}
                          className="px-3 py-2 text-xs font-semibold text-[#142B1A] bg-[#F4EFE6] hover:bg-[#EAE2D3] rounded-xl transition-colors cursor-pointer"
                        >
                          Details
                        </button>
                        <button
                          type="button"
                          onClick={(e) => handleQuickAdd(e, product)}
                          className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                            isRecentlyAdded
                              ? 'bg-[#25603A] text-[#FAF7F2]'
                              : 'bg-[#142B1A] hover:bg-[#1B3824] text-[#FAF7F2] border border-[#D4AF37]/30'
                          }`}
                        >
                          {isRecentlyAdded ? (
                            <>
                              <Check className="w-3.5 h-3.5" />
                              <span>Added</span>
                            </>
                          ) : (
                            <>
                              <ShoppingBag className="w-3.5 h-3.5 text-[#D4AF37]" />
                              <span>Add</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>

      {/* Craftsmanship & Guidance Band */}
      <section className="bg-[#F4EFE6] border-t border-[#D4AF37]/25 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#7A4628]">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span>Bespoke Sanctuary Selection</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#142B1A]">
              Unsure which botanical or ceremonial vessel fits your home rhythm?
            </h2>
            <p className="text-sm text-[#4A3D33] leading-relaxed max-w-2xl">
              Every household carries distinct ancestral rhythms and intentions. You may request a brief traditional guidance consultation to tailor incense, living money plants, or quiet ritual items to your space. All offerings honor cultural heritage and mindfulness rather than clinical medical care.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
            <button
              onClick={onOpenBooking}
              className="w-full px-5 py-3 bg-[#142B1A] hover:bg-[#1B3824] text-[#FAF7F2] text-sm font-semibold rounded-xl border border-[#D4AF37]/40 shadow-sm inline-flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <span>Request Guidance Consultation</span>
              <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
            </button>
            <button
              onClick={onOpenCart}
              className="w-full px-5 py-3 bg-[#FAF7F2] hover:bg-[#EAE2D3] text-[#142B1A] text-sm font-semibold rounded-xl border border-[#D4AF37]/30 inline-flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4 text-[#7A4628]" />
              <span>Review Sacred Bag ({cartItemCount})</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
