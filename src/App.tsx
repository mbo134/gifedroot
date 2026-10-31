/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
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
import { ServiceItem } from './types';

export default function App() {
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<ServiceItem | null>(null);
  const [selectedServiceIdForBooking, setSelectedServiceIdForBooking] = useState<string>('spiritual-guidance');
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);

  const scrollToBooking = (serviceId?: string) => {
    if (serviceId) {
      setSelectedServiceIdForBooking(serviceId);
    }
    const el = document.getElementById('booking-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2C241E] flex flex-col font-sans selection:bg-[#D4AF37]/30 selection:text-[#142B1A]">
      {/* Top Ethical Notice Banner */}
      <MedicalDisclaimer variant="banner" />

      {/* Main Navigation (Complies with Top Bar Contract) */}
      <Header
        onOpenBooking={() => scrollToBooking()}
        onOpenWhatsApp={() => setIsWhatsAppOpen(true)}
      />

      <main className="flex-1">
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

        {/* Philosophy, Pillars & Interactive Accordion */}
        <Philosophy onRequestBooking={(serviceId) => scrollToBooking(serviceId)} />

        {/* Genuine Testimonials & Reflections */}
        <Testimonials />

        {/* Interactive Booking Request Form */}
        <BookingForm
          initialServiceId={selectedServiceIdForBooking}
          onOpenPrivacyPolicy={() => setIsPrivacyModalOpen(true)}
        />
      </main>

      {/* Responsive Footer */}
      <Footer
        onOpenPrivacyPolicy={() => setIsPrivacyModalOpen(true)}
        onOpenBooking={() => scrollToBooking()}
        onOpenWhatsApp={() => setIsWhatsAppOpen(true)}
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
