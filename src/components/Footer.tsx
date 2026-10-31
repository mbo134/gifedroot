import React, { useState } from 'react';
import { MessageCircle, ShieldCheck, Heart, Send, CheckCircle2, Mail } from 'lucide-react';

interface FooterProps {
  onOpenPrivacyPolicy: () => void;
  onOpenBooking: () => void;
  onOpenWhatsApp: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPrivacyPolicy,
  onOpenBooking,
  onOpenWhatsApp,
}) => {
  const [dispatchEmail, setDispatchEmail] = useState('');
  const [dispatchSubscribed, setDispatchSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!dispatchEmail.includes('@')) return;
    setDispatchSubscribed(true);
    setDispatchEmail('');
    setTimeout(() => setDispatchSubscribed(false), 5000);
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0E1E12] text-[#FAF7F2] border-t border-[#D4AF37]/30 pt-16 pb-12 relative overflow-hidden">
      {/* Background African geometric subtle texture */}
      <div className="absolute inset-0 bg-african-pattern opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Top Tier: Brand, Navigation, and Wisdom Dispatches */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand & Tagline */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-[#1B3824] text-[#D4AF37] flex items-center justify-center border border-[#D4AF37]/40 shadow-sm">
                <svg
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-[#FAF7F2]">
                Gifted Roots
              </span>
            </div>

            <p className="font-serif text-sm text-[#D4AF37] italic">
              “Rooted in Tradition. Guided by Wisdom. Focused on Well-Being.”
            </p>

            <p className="text-xs text-[#C5B8A5] leading-relaxed">
              Preserving authentic African ancestral teachings, sacred botanical heritage, and grounding discernment. A sanctuary of dignity, privacy, and cultural reverence.
            </p>

            {/* Direct Contact Links */}
            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <button
                onClick={onOpenWhatsApp}
                className="inline-flex items-center gap-2 px-3.5 py-2 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-semibold rounded-xl transition-all cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Coordination</span>
              </button>

              <a
                href="mailto:healer@giftedrootsspiritualhealer.org"
                className="inline-flex items-center gap-2 px-3.5 py-2 bg-[#1B3824] hover:bg-[#274F33] text-[#FAF7F2] border border-[#D4AF37]/30 text-xs font-medium rounded-xl transition-all"
              >
                <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span className="truncate">healer@giftedrootsspiritualhealer.org</span>
              </a>
            </div>
          </div>

          {/* Nav Links Column 1 */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#D1C6B4]">
              <li>
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="hover:text-[#FAF7F2] transition-colors cursor-pointer"
                >
                  Home Sanctuary
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('about')}
                  className="hover:text-[#FAF7F2] transition-colors cursor-pointer"
                >
                  About Our Lineage
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('services')}
                  className="hover:text-[#FAF7F2] transition-colors cursor-pointer"
                >
                  Sacred Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('botanicals')}
                  className="hover:text-[#FAF7F2] transition-colors cursor-pointer"
                >
                  Herbal Lore Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('philosophy')}
                  className="hover:text-[#FAF7F2] transition-colors cursor-pointer"
                >
                  Ancestral Philosophy
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('testimonials')}
                  className="hover:text-[#FAF7F2] transition-colors cursor-pointer"
                >
                  Seeker Reflections
                </button>
              </li>
            </ul>
          </div>

          {/* Consultation Services Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
              Offerings
            </h4>
            <ul className="space-y-2 text-xs text-[#D1C6B4]">
              <li>Traditional Spiritual Guidance</li>
              <li>Ancestral Heritage Consultations</li>
              <li>Traditional Dream Interpretation</li>
              <li>Herbal Heritage Education</li>
              <li>Cultural Rituals & Cleansing</li>
              <li>Mindful Meditation & Breathwork</li>
            </ul>
          </div>

          {/* Newsletter / Wisdom Dispatches */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
              Wisdom Dispatches
            </h4>
            <p className="text-xs text-[#C5B8A5] leading-relaxed">
              Quiet monthly contemplations on African seasonal rhythms, sacred flora, and ancestral proverbs. Never spam.
            </p>

            {dispatchSubscribed ? (
              <div className="p-3 bg-[#1B3824] rounded-xl border border-[#D4AF37]/40 text-xs text-[#FAF7F2] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Blessings received. You are subscribed.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={dispatchEmail}
                    onChange={(e) => setDispatchEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 text-xs bg-[#142B1A] border border-[#D4AF37]/40 rounded-xl text-[#FAF7F2] placeholder-[#8C7E72] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe to Wisdom Dispatches"
                    className="px-3 py-2 bg-[#D4AF37] hover:bg-[#E5C358] text-[#142B1A] rounded-xl transition-colors shrink-0 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
                <p className="text-[10px] text-[#A69785]">
                  We honor your digital privacy. Unsubscribe anytime.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Operating Hours & Sanctuary Note */}
        <div className="p-4 bg-[#142B1A] rounded-2xl border border-[#D4AF37]/25 flex flex-col sm:flex-row items-center justify-between text-xs text-[#C5B8A5] gap-3">
          <div>
            <span className="font-semibold text-[#D4AF37]">Sanctuary Consultation Schedule:</span> Monday through Saturday, 9:00 AM – 6:00 PM (CAT/GMT) by confirmed appointment.
          </div>
          <button
            onClick={onOpenBooking}
            className="text-xs font-semibold text-[#D4AF37] hover:underline whitespace-nowrap cursor-pointer"
          >
            Request Appointment Window
          </button>
        </div>

        {/* Full Mandatory Consultation Scope & Healthcare Disclaimer */}
        <div className="p-5 bg-[#0A160D] rounded-2xl border border-[#D4AF37]/20 text-[11px] text-[#A69785] leading-relaxed space-y-2">
          <div className="flex items-center gap-1.5 font-bold text-[#D4AF37]">
            <ShieldCheck className="w-4 h-4" />
            <span>Official Spiritual Consultation & Care Policy</span>
          </div>
          <p>
            Spiritual services, ancestral heritage consultations, and herbal education offered by Gifted Roots provide traditional spiritual discernment, personal alignment, and cultural insight. We consult on life crossroads including career transitions, job promotions, relationship reconciliation and harmony with loved ones, and business empowerment through ancestral wisdom. Our consultations honor traditional African philosophy and do not constitute clinical medical, psychological, psychiatric, or legal advice.
          </p>
        </div>

        {/* Bottom Tier: Copyright & Sacred Privacy */}
        <div className="pt-4 border-t border-[#D4AF37]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8C7E72]">
          <p>
            © {new Date().getFullYear()} Gifted Roots Spiritual Healer. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <button
              onClick={onOpenPrivacyPolicy}
              className="hover:text-[#D4AF37] transition-colors underline cursor-pointer"
            >
              Sacred Privacy Policy
            </button>
            <button
              onClick={() => scrollTo('philosophy')}
              className="hover:text-[#D4AF37] transition-colors cursor-pointer"
            >
              Ethical Code of Conduct
            </button>
            <button
              onClick={() => scrollTo('booking-section')}
              className="hover:text-[#D4AF37] transition-colors cursor-pointer"
            >
              Booking Portal
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
