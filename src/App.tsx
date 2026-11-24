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
import { SubpageLayout } from './components/SubpageLayout';
import { PRODUCTS } from './data/productsData';
import { CartItem, PageRoute, ProductItem, ProductVariant, ServiceItem } from './types';

const CART_STORAGE_KEY = 'gifted_roots_cart';

const VALID_PAGES: PageRoute[] = [
  'home',
  'about',
  'services',
  'products',
  'botanicals',
  'philosophy',
  'testimonials',
  'consultation',
];

const parseHashToPage = (hash: string): PageRoute => {
  const clean = hash.replace(/^#/, '').toLowerCase();
  if (clean === 'booking-section') return 'consultation';
  if (VALID_PAGES.includes(clean as PageRoute)) {
    return clean as PageRoute;
  }
  return 'home';
};

export default function App() {
  const [activePage, setActivePage] = useState<PageRoute>(() =>
    typeof window !== 'undefined' ? parseHashToPage(window.location.hash) : 'home'
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
      const nextPage = parseHashToPage(window.location.hash);
      setActivePage(nextPage);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToPage = (page: PageRoute) => {
    setActivePage(page);
    const nextHash = page === 'home' ? '#' : `#${page}`;
    if (window.location.hash !== nextHash) {
      window.history.replaceState(null, '', nextHash);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openConsultationPage = (serviceId?: string) => {
    if (serviceId) {
      setSelectedServiceIdForBooking(serviceId);
    }
    navigateToPage('consultation');
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

  const renderMainContent = () => {
    switch (activePage) {
      case 'products':
        return (
          <ProductsPage
            onBackHome={() => navigateToPage('home')}
            onAddToCart={handleAddToCart}
            onOpenCart={() => setIsCartOpen(true)}
            onOpenBooking={() => openConsultationPage()}
            cartItemCount={totalCartItems}
            onSelectProduct={(product) => setSelectedProductForModal(product)}
          />
        );

      case 'about':
        return (
          <SubpageLayout
            kicker="Our Living Lineage"
            title="Rooted in Tradition & Ancestral Custodianship"
            subtitle="Discover the elder lineage, ethical commitment, and tranquil sanctuary principles guiding Gifted Roots."
            activePage={activePage}
            onNavigate={navigateToPage}
          >
            <AboutUs />
          </SubpageLayout>
        );

      case 'services':
        return (
          <SubpageLayout
            kicker="Traditional Healing & Spiritual Services"
            title="Sacred Consultations, Love Protection & Ritual Guidance"
            subtitle="Explore confidential one-on-one sessions covering traditional healing, ancestral lineage, dream interpretation, and love protection."
            activePage={activePage}
            onNavigate={navigateToPage}
          >
            <ServicesSection
              onSelectServiceForModal={(service) => setSelectedServiceForModal(service)}
              onRequestBooking={(serviceId) => openConsultationPage(serviceId)}
            />
          </SubpageLayout>
        );

      case 'botanicals':
        return (
          <SubpageLayout
            kicker="Sacred African Flora & Prosperity Plants"
            title="Botanical Lore & Living Home Harmony"
            subtitle="Learn the cultural significance of ceremonial herbs and thriving indoor money plants honored across our sanctuary."
            activePage={activePage}
            onNavigate={navigateToPage}
          >
            <BotanicalHeritage />
          </SubpageLayout>
        );

      case 'philosophy':
        return (
          <SubpageLayout
            kicker="Ancestral Ethics & Care Policy"
            title="Our Philosophy, Sacred Boundaries & Questions"
            subtitle="Understand the pillars of Sankofa, earth stewardship, seeker agency, and frequently asked consultation questions."
            activePage={activePage}
            onNavigate={navigateToPage}
          >
            <Philosophy onRequestBooking={(serviceId) => openConsultationPage(serviceId)} />
          </SubpageLayout>
        );

      case 'testimonials':
        return (
          <SubpageLayout
            kicker="Worldwide Sanctuary Reach"
            title="Global Clients & Seeker Testimonials"
            subtitle="Reflections from clients we serve across Africa, the Arabian Peninsula, Europe, and Eurasia."
            activePage={activePage}
            onNavigate={navigateToPage}
          >
            <Testimonials />
          </SubpageLayout>
        );

      case 'consultation':
        return (
          <SubpageLayout
            kicker="Confidential Scheduling Portal"
            title="Request a Traditional Healing or Spiritual Consultation"
            subtitle="Book a private video, audio, or sanctuary session tailored to your intentions and time zone."
            activePage={activePage}
            onNavigate={navigateToPage}
          >
            <BookingForm
              initialServiceId={selectedServiceIdForBooking}
              onOpenPrivacyPolicy={() => setIsPrivacyModalOpen(true)}
            />
          </SubpageLayout>
        );

      case 'home':
      default:
        return (
          <>
            {/* Hero Section */}
            <Hero
              onOpenBooking={() => openConsultationPage()}
              onExploreServices={() => navigateToPage('services')}
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
              onRequestBooking={(serviceId) => openConsultationPage(serviceId)}
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
                      Explore sun-cured Imphepho bundles, Pilea money plants, Man Power Tea Herbal, home protection blends, and artisan terracotta vessels.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => navigateToPage('products')}
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
                        <span className="text-xs font-semibold text-[#D4AF37] shrink-0">
                          View Details
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Philosophy, Pillars & Interactive Accordion */}
            <Philosophy onRequestBooking={(serviceId) => openConsultationPage(serviceId)} />

            {/* Genuine Testimonials & Reflections */}
            <Testimonials />

            {/* Interactive Booking Request Form */}
            <BookingForm
              initialServiceId={selectedServiceIdForBooking}
              onOpenPrivacyPolicy={() => setIsPrivacyModalOpen(true)}
            />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2C241E] flex flex-col font-sans selection:bg-[#D4AF37]/30 selection:text-[#142B1A]">
      {/* Top Ethical Notice Banner */}
      <MedicalDisclaimer variant="banner" />

      {/* Main Navigation (Complies with Top Bar Contract) */}
      <Header
        activePage={activePage}
        cartItemCount={totalCartItems}
        onNavigatePage={navigateToPage}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenBooking={() => openConsultationPage()}
        onOpenWhatsApp={() => setIsWhatsAppOpen(true)}
      />

      <main className="flex-1">{renderMainContent()}</main>

      {/* Responsive Footer */}
      <Footer
        onOpenPrivacyPolicy={() => setIsPrivacyModalOpen(true)}
        onOpenBooking={() => openConsultationPage()}
        onOpenWhatsApp={() => setIsWhatsAppOpen(true)}
        onNavigatePage={navigateToPage}
      />

      {/* Service Detail & Protocol Modal */}
      <ServiceModal
        service={selectedServiceForModal}
        onClose={() => setSelectedServiceForModal(null)}
        onBookNow={(serviceId) => {
          setSelectedServiceForModal(null);
          openConsultationPage(serviceId);
        }}
      />

      {/* Product Detail Contiguous Purchase Modal */}
      <ProductDetailModal
        product={selectedProductForModal}
        onClose={() => setSelectedProductForModal(null)}
        onAddToCart={handleAddToCart}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Slide-Over Shopping Bag & Offering Reservation Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        onBrowseProducts={() => navigateToPage('products')}
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
