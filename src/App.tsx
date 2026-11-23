/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { ShoppingBag, ArrowRight, Sparkles } from 'lucide-react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MedicalDisclaimer } from './components/MedicalDisclaimer';
import { AboutUs } from './components/AboutUs';
import { ServicesSection } from './components/ServicesSection';
import { ServiceModal } from './components/ServiceModal';
import { BotanicalHeritage } from './components/BotanicalHeritage';
import { Philosophy } from './components/Philosophy';
import { Testimonials } from './components/Testimonials';
import { BookingForm } from './components/BookingForm';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { PrivacyModal } from './components/PrivacyModal';
import { Footer } from './components/Footer';
import { ProductsPage } from './components/ProductsPage';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { PRODUCTS } from './data/productsData';
import { CartItem, ProductItem, ProductVariant, ServiceItem } from './types';

const CART_STORAGE_KEY = 'gifted_roots_cart';

export default function App() {
  const [activePage, setActivePage] = useState<'home' | 'products'>(() =>
    typeof window !== 'undefined' && window.location.hash === '#products' ? 'products' : 'home'
  );
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<ServiceItem | null>(null);
  const [selectedServiceIdForBooking, setSelectedServiceIdForBooking] =
    useState<string>('spiritual-guidance');
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);

  const [selectedProductForModal, setSelectedProductForModal] = useState<ProductItem | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch {
      // Ignore storage failures
    }
  }, [cart]);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#products') {
        setActivePage('products');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToProducts = () => {
    setActivePage('products');
    if (window.location.hash !== '#products') {
      window.history.replaceState(null, '', '#products');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = (sectionId?: string) => {
    const switchingFromProducts = activePage !== 'home';
    setActivePage('home');
    if (window.location.hash === '#products') {
      window.history.replaceState(null, '', sectionId ? `#${sectionId}` : '#');
    }

    if (!sectionId) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    setTimeout(
      () => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      },
      switchingFromProducts ? 60 : 0
    );
  };

  const scrollToBooking = (serviceId?: string) => {
    if (serviceId) {
      setSelectedServiceIdForBooking(serviceId);
    }
    navigateToHome('booking-section');
  };

  const scrollToServices = () => {
    navigateToHome('services');
  };

  const handleAddToCart = (
    product: ProductItem,
    variant: ProductVariant,
    quantity: number
  ) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.productId === product.id && item.variantId === variant.id
      );
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity,
        };
        return updated;
      }
      return [
        ...prev,
        {
          productId: product.id,
          variantId: variant.id,
          name: product.name,
          variantLabel: variant.label,
          price: variant.price,
          quantity,
          image: product.image,
          origin: product.origin,
        },
      ];
    });
  };

  const handleUpdateQuantity = (
    productId: string,
    variantId: string,
    quantity: number
  ) => {
    if (quantity <= 0) {
      handleRemoveItem(productId, variantId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.productId === productId && item.variantId === variantId
          ? { ...item, quantity }
          : item
      )
    );
  };

  const handleRemoveItem = (productId: string, variantId: string) => {
    setCart((prev) =>
      prev.filter(
        (item) => !(item.productId === productId && item.variantId === variantId)
      )
    );
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const totalCartItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2C241E] flex flex-col font-sans selection:bg-[#D4AF37]/30 selection:text-[#142B1A]">
      {/* Top Ethical Notice Banner */}
      <MedicalDisclaimer variant="banner" />

      {/* Main Navigation (Complies with Top Bar Contract) */}
      <Header
        activePage={activePage}
        cartItemCount={totalCartItems}
        onNavigateHome={navigateToHome}
        onNavigateProducts={navigateToProducts}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenBooking={() => scrollToBooking()}
        onOpenWhatsApp={() => setIsWhatsAppOpen(true)}
      />

      <main className="flex-1">
        {activePage === 'products' ? (
          <ProductsPage
            onBackHome={() => navigateToHome()}
            onAddToCart={handleAddToCart}
            onOpenCart={() => setIsCartOpen(true)}
            onOpenBooking={() => scrollToBooking()}
            cartItemCount={totalCartItems}
            onSelectProduct={(product) => setSelectedProductForModal(product)}
          />
        ) : (
          <>
            {/* Hero Section */}
            <Hero
              onOpenBooking={() => scrollToBooking()}
              onExploreServices={scrollToServices}
            />

            {/* Prominent Ethical Care & Medical Boundary Statement */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
              <MedicalDisclaimer variant="card" />
            </div>

            {/* About Us & Living Lineage */}
            <AboutUs />

            {/* Sacred Traditional Offerings & Services */}
            <ServicesSection
              onSelectServiceForModal={(service) => setSelectedServiceForModal(service)}
              onRequestBooking={(serviceId) => scrollToBooking(serviceId)}
            />

            {/* Botanical Heritage & Sacred African Flora (Educational) */}
            <BotanicalHeritage />

            {/* Sanctuary Apothecary & Offerings Preview Band */}
            <section className="py-14 bg-[#142B1A] text-[#FAF7F2] border-y border-[#D4AF37]/30">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
                  <div className="space-y-2 max-w-2xl">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
                      <Sparkles className="w-4 h-4" />
                      <span>Sanctuary Apothecary &amp; Store</span>
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#FAF7F2]">
                      Bring Sacred Resins, Living Plants &amp; Vessels Home
                    </h2>
                    <p className="text-sm text-[#D1C6B4]">
                      Explore sun-cured Imphepho bundles, Pilea money plants, African Luban frankincense, and artisan terracotta vessels.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={navigateToProducts}
                    className="inline-flex items-center gap-2 px-5 py-3 bg-[#D4AF37] hover:bg-[#E5C358] text-[#142B1A] text-sm font-bold rounded-xl shadow-sm transition-colors whitespace-nowrap self-start lg:self-auto cursor-pointer"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Visit Products Page</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {PRODUCTS.slice(0, 3).map((product) => (
                    <div
                      key={product.id}
                      onClick={() => setSelectedProductForModal(product)}
                      className="bg-[#1B3824] rounded-2xl border border-[#D4AF37]/25 overflow-hidden hover:border-[#D4AF37]/60 transition-all cursor-pointer group"
                    >
                      <div className="aspect-[4/3] overflow-hidden bg-[#0E1E12]">
                        <img
                          src={product.image}
                          alt={product.imageAlt}
                          loading="lazy"
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-4 flex items-center justify-between gap-3">
                        <div className="min-w-0">
                          <p className="text-[11px] uppercase tracking-wider text-[#D4AF37] truncate">
                            {product.categoryLabel}
                          </p>
                          <h3 className="font-serif text-base font-bold text-[#FAF7F2] truncate">
                            {product.name}
                          </h3>
                        </div>
                        <span className="text-base font-bold text-[#D4AF37] tabular-nums shrink-0">
                          ${product.price.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Philosophy, Pillars & Interactive Accordion */}
            <Philosophy onRequestBooking={(serviceId) => scrollToBooking(serviceId)} />

            {/* Genuine Testimonials & Reflections */}
            <Testimonials />

            {/* Interactive Booking Request Form */}
            <BookingForm
              initialServiceId={selectedServiceIdForBooking}
              onOpenPrivacyPolicy={() => setIsPrivacyModalOpen(true)}
            />
          </>
        )}
      </main>

      {/* Responsive Footer */}
      <Footer
        onOpenPrivacyPolicy={() => setIsPrivacyModalOpen(true)}
        onOpenBooking={() => scrollToBooking()}
        onOpenWhatsApp={() => setIsWhatsAppOpen(true)}
        onNavigateHome={navigateToHome}
        onNavigateProducts={navigateToProducts}
      />

      {/* Service Detail & Protocol Modal */}
      <ServiceModal
        service={selectedServiceForModal}
        onClose={() => setSelectedServiceForModal(null)}
        onBookNow={(serviceId) => {
          setSelectedServiceForModal(null);
          scrollToBooking(serviceId);
        }}
      />

      {/* Product Detail Contiguous Purchase Modal */}
      <ProductDetailModal
        product={selectedProductForModal}
        onClose={() => setSelectedProductForModal(null)}
        onAddToCart={handleAddToCart}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Slide-Over Shopping Bag & Order Reservation Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        onBrowseProducts={navigateToProducts}
      />

      {/* Privacy Pledge Modal */}
      <PrivacyModal
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
      />

      {/* Floating & Interactive WhatsApp Widget */}
      <WhatsAppWidget
        isOpen={isWhatsAppOpen}
        onClose={() => setIsWhatsAppOpen(false)}
        onOpen={() => setIsWhatsAppOpen(true)}
      />
    </div>
  );
}
