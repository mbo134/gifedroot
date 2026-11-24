import React, { useState } from 'react';
import { Menu, X, MessageCircle, Mail, ShoppingBag } from 'lucide-react';

interface HeaderProps {
  activePage: 'home' | 'products';
  cartItemCount: number;
  onNavigateHome: (sectionId?: string) => void;
  onNavigateProducts: () => void;
  onOpenCart: () => void;
  onOpenBooking: () => void;
  onOpenWhatsApp: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activePage,
  cartItemCount,
  onNavigateHome,
  onNavigateProducts,
  onOpenCart,
  onOpenBooking,
  onOpenWhatsApp,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { label: string; type: 'section' | 'products'; target: string }[] = [
    { label: 'About Lineage', type: 'section', target: 'about' },
    { label: 'Services', type: 'section', target: 'services' },
    { label: 'Products', type: 'products', target: 'products' },
    { label: 'Botanical Lore', type: 'section', target: 'botanicals' },
    { label: 'Our Philosophy', type: 'section', target: 'philosophy' },
  ];

  const handleNavClick = (link: { type: 'section' | 'products'; target: string }) => {
    setMobileMenuOpen(false);
    if (link.type === 'products') {
      onNavigateProducts();
    } else {
      onNavigateHome(link.target);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#D4AF37]/25 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
        {/* Zone 1: Brand Wordmark */}
        <button
          type="button"
          onClick={() => onNavigateHome()}
          className="flex items-center gap-2.5 text-[#142B1A] group whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#D4AF37] cursor-pointer text-left"
        >
          <div className="w-10 h-10 rounded-xl bg-[#142B1A] text-[#D4AF37] flex items-center justify-center shadow-sm group-hover:bg-[#1B3824] transition-colors">
            <svg
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#142B1A]">
              Gifted Roots
            </span>
          </div>
        </button>

        {/* Zone 2: Navigation Links (5 crisp single-line links) */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#4A3D33]">
          {navLinks.map((link) => {
            const isActive = link.type === 'products' && activePage === 'products';
            return (
              <button
                key={link.label}
                type="button"
                onClick={() => handleNavClick(link)}
                className={`relative py-1 transition-colors whitespace-nowrap shrink-0 group focus-visible:outline-none cursor-pointer ${
                  isActive ? 'text-[#142B1A] font-semibold' : 'hover:text-[#142B1A]'
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-[#D4AF37] transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Bag, WhatsApp & Primary Consultation Action */}
        <div className="hidden sm:flex items-center gap-2.5 shrink-0">
          <button
            type="button"
            onClick={onOpenCart}
            aria-label={`Open sacred bag with ${cartItemCount} items`}
            className="relative flex items-center gap-1.5 px-3 py-2.5 text-xs font-semibold text-[#142B1A] bg-[#F4EFE6] hover:bg-[#EAE2D3] border border-[#D4AF37]/30 rounded-xl transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4 text-[#7A4628]" />
            <span>Bag</span>
            <span className="px-1.5 py-0.5 text-[10px] font-bold bg-[#142B1A] text-[#FAF7F2] rounded-md tabular-nums">
              {cartItemCount}
            </span>
          </button>

          <button
            type="button"
            onClick={onOpenWhatsApp}
            aria-label="Direct WhatsApp Message"
            className="flex items-center gap-1.5 px-3 py-2.5 text-xs font-semibold text-[#142B1A] bg-[#EAE2D3] hover:bg-[#DDD3C0] rounded-xl transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>WhatsApp</span>
          </button>

          <button
            type="button"
            onClick={onOpenBooking}
            className="px-4 py-2.5 text-sm font-semibold text-[#FAF7F2] bg-[#142B1A] hover:bg-[#1B3824] rounded-xl shadow-sm transition-all hover:shadow-md border border-[#D4AF37]/40 whitespace-nowrap shrink-0 active:scale-[0.98] cursor-pointer"
          >
            Request Consultation
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={onOpenCart}
            aria-label={`Open sacred bag with ${cartItemCount} items`}
            className="sm:hidden flex items-center gap-1 px-2.5 py-2 rounded-xl bg-[#F4EFE6] border border-[#D4AF37]/30 text-xs font-bold text-[#142B1A] cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4 text-[#7A4628]" />
            <span className="tabular-nums">{cartItemCount}</span>
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl text-[#142B1A] hover:bg-[#EAE2D3] transition-colors focus-visible:outline-none cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF7F2] border-b border-[#D4AF37]/30 px-6 py-6 shadow-xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-4">
            <p className="text-xs uppercase tracking-wider text-[#7A4628] font-semibold">
              Rooted in Tradition. Guided by Wisdom.
            </p>
            {navLinks.map((link) => {
              const isActive = link.type === 'products' && activePage === 'products';
              return (
                <button
                  key={link.label}
                  type="button"
                  onClick={() => handleNavClick(link)}
                  className={`text-left text-base font-medium py-2 border-b border-[#EAE2D3]/60 transition-colors cursor-pointer ${
                    isActive
                      ? 'text-[#142B1A] font-bold'
                      : 'text-[#2C241E] hover:text-[#142B1A]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
            <div className="pt-4 flex flex-col gap-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 text-center text-sm font-semibold text-[#FAF7F2] bg-[#142B1A] hover:bg-[#1B3824] rounded-xl shadow-md border border-[#D4AF37]/50 cursor-pointer"
              >
                Request Consultation
              </button>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenWhatsApp();
                }}
                className="w-full py-2.5 flex items-center justify-center gap-2 text-sm font-semibold text-[#142B1A] bg-[#EAE2D3] hover:bg-[#DDD3C0] rounded-xl cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Chat via WhatsApp</span>
              </button>
              <a
                href="mailto:giftedroot6@gmail.com"
                className="w-full py-2.5 flex items-center justify-center gap-2 text-xs font-semibold text-[#55473C] border border-[#D4AF37]/30 rounded-xl hover:bg-[#EAE2D3] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>giftedroot6@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
