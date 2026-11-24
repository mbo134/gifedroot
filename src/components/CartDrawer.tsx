import React, { useState } from 'react';
import {
  X,
  ShoppingBag,
  Minus,
  Plus,
  Trash2,
  CheckCircle2,
  MessageCircle,
  Mail,
  ArrowRight,
  ArrowLeft,
  Package,
} from 'lucide-react';
import { CartItem, OrderRequest } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, variantId: string, quantity: number) => void;
  onRemoveItem: (productId: string, variantId: string) => void;
  onClearCart: () => void;
  onBrowseProducts: () => void;
}

const ORDERS_STORAGE_KEY = 'gifted_roots_orders';

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onBrowseProducts,
}) => {
  const [step, setStep] = useState<'bag' | 'checkout' | 'confirmed'>('bag');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [deliveryMethod, setDeliveryMethod] = useState<'courier' | 'sanctuary-pickup'>('courier');
  const [shippingAddress, setShippingAddress] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [blessingNote, setBlessingNote] = useState('');
  const [confirmedOrder, setConfirmedOrder] = useState<OrderRequest | null>(null);
  const [copiedId, setCopiedId] = useState(false);

  if (!isOpen) return null;

  const totalItemsCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) return;

    const orderId = `GRO-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    const newOrder: OrderRequest = {
      id: orderId,
      createdAt: new Date().toISOString(),
      items: [...items],
      fullName: fullName.trim(),
      email: email.trim(),
      whatsappNumber: whatsappNumber.trim(),
      deliveryMethod,
      shippingAddress: deliveryMethod === 'courier' ? shippingAddress.trim() : 'Sanctuary Collection',
      postalCode: deliveryMethod === 'courier' ? postalCode.trim() : 'N/A',
      blessingNote: blessingNote.trim(),
      status: 'Pending Sanctuary Confirmation',
    };

    try {
      const existingRaw = localStorage.getItem(ORDERS_STORAGE_KEY);
      const existing: OrderRequest[] = existingRaw ? JSON.parse(existingRaw) : [];
      localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify([newOrder, ...existing]));
    } catch {
      // Ignore storage quota errors gracefully
    }

    setConfirmedOrder(newOrder);
    onClearCart();
    setStep('confirmed');
  };

  const resetAndClose = () => {
    if (step === 'confirmed') {
      setStep('bag');
      setConfirmedOrder(null);
      setFullName('');
      setEmail('');
      setWhatsappNumber('');
      setShippingAddress('');
      setPostalCode('');
      setBlessingNote('');
    }
    onClose();
  };

  const buildOrderWhatsAppUrl = (order: OrderRequest) => {
    const lines = order.items
      .map((i) => `• ${i.quantity}x ${i.name} (${i.variantLabel})`)
      .join('\n');
    const message = `Greetings Gifted Roots Sanctuary! I have submitted Offering Request ${order.id}:\n\n${lines}\n\nName: ${order.fullName}\nDelivery: ${order.deliveryMethod === 'courier' ? `${order.shippingAddress}, ${order.postalCode}` : 'Sanctuary Pickup'}`;
    return `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
  };

  const buildOrderMailtoUrl = (order: OrderRequest) => {
    const subject = `Sanctuary Offering Request ${order.id} - ${order.fullName}`;
    const lines = order.items
      .map((i) => `- ${i.quantity}x ${i.name} (${i.variantLabel})`)
      .join('\n');
    const body = `Request Reference: ${order.id}\nName: ${order.fullName}\nEmail: ${order.email}\nWhatsApp: ${order.whatsappNumber}\nDelivery: ${order.deliveryMethod === 'courier' ? `${order.shippingAddress}, ${order.postalCode}` : 'Sanctuary Pickup'}\n\nRequested Offerings:\n${lines}`;
    return `mailto:giftedroot6@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-[#0E1E12]/65 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-label="Sacred Bag and Offering Reservation"
      onClick={resetAndClose}
    >
      <div
        className="w-full max-w-md bg-[#FAF7F2] h-full shadow-2xl border-l border-[#D4AF37]/35 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="px-5 py-4 bg-[#142B1A] text-[#FAF7F2] flex items-center justify-between border-b border-[#D4AF37]/30 shrink-0">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="w-5 h-5 text-[#D4AF37]" />
            <h2 className="font-serif text-lg font-bold">
              {step === 'bag' && 'Your Sacred Bag'}
              {step === 'checkout' && 'Delivery & Reservation'}
              {step === 'confirmed' && 'Request Received'}
            </h2>
          </div>
          <button
            onClick={resetAndClose}
            aria-label="Close bag drawer"
            className="p-1.5 rounded-xl text-[#D1C6B4] hover:text-[#FAF7F2] hover:bg-[#1B3824] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Body */}
        <div className="flex-1 overflow-y-auto p-5">
          {step === 'confirmed' && confirmedOrder ? (
            <div className="space-y-5 py-2">
              <div className="p-5 rounded-2xl bg-[#EAF3EC] border border-[#142B1A]/20 text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-[#142B1A] mx-auto" />
                <h3 className="font-serif text-xl font-bold text-[#142B1A]">
                  Blessings, {confirmedOrder.fullName}
                </h3>
                <p className="text-xs text-[#4A3D33] leading-relaxed">
                  Your sanctuary offering request has been recorded. Our coordinator will confirm preparation and delivery or pickup timing promptly.
                </p>
                <div className="pt-2 flex items-center justify-center gap-2">
                  <span className="px-3 py-1 bg-[#FFFFFF] border border-[#D4AF37]/40 rounded-lg text-xs font-bold text-[#142B1A] tabular-nums">
                    Ref: {confirmedOrder.id}
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      navigator.clipboard?.writeText(confirmedOrder.id);
                      setCopiedId(true);
                      setTimeout(() => setCopiedId(false), 2000);
                    }}
                    className="text-xs font-semibold text-[#7A4628] underline cursor-pointer"
                  >
                    {copiedId ? 'Copied' : 'Copy ID'}
                  </button>
                </div>
              </div>

              {/* Reserved Summary Receipt */}
              <div className="p-4 rounded-2xl bg-[#F4EFE6] border border-[#D4AF37]/25 space-y-3 text-xs">
                <p className="font-bold uppercase tracking-wider text-[#7A4628]">
                  Reserved Offerings
                </p>
                <ul className="space-y-2 divide-y divide-[#D4AF37]/15">
                  {confirmedOrder.items.map((item) => (
                    <li
                      key={`${item.productId}-${item.variantId}`}
                      className="pt-2 first:pt-0 flex items-center justify-between gap-2"
                    >
                      <div>
                        <p className="font-semibold text-[#142B1A]">
                          {item.quantity} × {item.name}
                        </p>
                        <p className="text-[11px] text-[#55473C]">{item.variantLabel}</p>
                      </div>
                      <span className="text-[11px] font-semibold text-[#7A4628]">
                        Reserved
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Direct Handoff Buttons */}
              <div className="space-y-2.5">
                <a
                  href={buildOrderWhatsAppUrl(confirmedOrder)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Request Details via WhatsApp</span>
                </a>
                <a
                  href={buildOrderMailtoUrl(confirmedOrder)}
                  className="w-full py-3 px-4 bg-[#142B1A] hover:bg-[#1B3824] text-[#FAF7F2] text-xs font-bold rounded-xl flex items-center justify-center gap-2 transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#D4AF37]" />
                  <span>Confirm via Sanctuary Email</span>
                </a>
                <button
                  type="button"
                  onClick={resetAndClose}
                  className="w-full py-2.5 text-xs font-semibold text-[#55473C] hover:text-[#142B1A] cursor-pointer"
                >
                  Return to Apothecary Store
                </button>
              </div>
            </div>
          ) : items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-[#F4EFE6] border border-[#D4AF37]/30 flex items-center justify-center text-[#7A4628]">
                <ShoppingBag className="w-7 h-7" />
              </div>
              <div className="space-y-1.5">
                <h3 className="font-serif text-xl font-bold text-[#142B1A]">
                  Your Sacred Bag is Empty
                </h3>
                <p className="text-xs text-[#55473C] max-w-xs mx-auto leading-relaxed">
                  Explore our ethically gathered mountain Imphepho, living Pilea money plants, and artisan terracotta vessels.
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onBrowseProducts();
                }}
                className="px-5 py-2.5 bg-[#142B1A] hover:bg-[#1B3824] text-[#FAF7F2] text-xs font-semibold rounded-xl border border-[#D4AF37]/40 transition-colors cursor-pointer"
              >
                Explore Sacred Offerings
              </button>
            </div>
          ) : step === 'bag' ? (
            <div className="space-y-5">
              {/* Sanctuary Coordination Note */}
              <div className="p-3.5 rounded-xl bg-[#F4EFE6] border border-[#D4AF37]/25">
                <div className="flex items-center gap-2 text-xs font-medium text-[#142B1A]">
                  <Package className="w-4 h-4 text-[#7A4628] shrink-0" />
                  <span>
                    Personal courier or sanctuary pickup arranged directly upon confirmation.
                  </span>
                </div>
              </div>

              {/* Cart Items List */}
              <ul className="space-y-3">
                {items.map((item) => (
                  <li
                    key={`${item.productId}-${item.variantId}`}
                    className="p-3 rounded-2xl bg-[#FFFFFF] border border-[#D4AF37]/20 flex gap-3.5 items-center"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="w-20 h-16 rounded-xl object-cover bg-[#F4EFE6] shrink-0"
                    />
                    <div className="flex-1 min-w-0 space-y-1">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-serif text-sm font-bold text-[#142B1A] truncate">
                          {item.name}
                        </h3>
                        <button
                          type="button"
                          onClick={() => onRemoveItem(item.productId, item.variantId)}
                          aria-label={`Remove ${item.name}`}
                          className="text-[#8C7E72] hover:text-[#7A4628] transition-colors shrink-0 cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <p className="text-[11px] text-[#7A4628] truncate">
                        {item.variantLabel}
                      </p>
                      <div className="flex items-center justify-between pt-1">
                        <div className="inline-flex items-center border border-[#D4AF37]/30 rounded-lg bg-[#FAF7F2]">
                          <button
                            type="button"
                            onClick={() =>
                              onUpdateQuantity(item.productId, item.variantId, item.quantity - 1)
                            }
                            aria-label="Decrease quantity"
                            className="p-1 text-[#142B1A] hover:bg-[#EAE2D3] rounded-l-lg cursor-pointer"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2.5 text-xs font-bold text-[#142B1A] tabular-nums">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() =>
                              onUpdateQuantity(item.productId, item.variantId, item.quantity + 1)
                            }
                            aria-label="Increase quantity"
                            className="p-1 text-[#142B1A] hover:bg-[#EAE2D3] rounded-r-lg cursor-pointer"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="text-[11px] font-semibold text-[#55473C]">
                          {item.origin}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <form id="sanctuary-checkout-form" onSubmit={handlePlaceOrder} className="space-y-4">
              <button
                type="button"
                onClick={() => setStep('bag')}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#7A4628] hover:text-[#142B1A] cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to Bag Review</span>
              </button>

              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-semibold text-[#142B1A] mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Your full name"
                    className="w-full px-3.5 py-2.5 text-sm bg-[#FFFFFF] border border-[#D4AF37]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#142B1A] mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full px-3.5 py-2.5 text-sm bg-[#FFFFFF] border border-[#D4AF37]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#142B1A] mb-1">
                      WhatsApp / Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      value={whatsappNumber}
                      onChange={(e) => setWhatsappNumber(e.target.value)}
                      placeholder="+1 / +27 ..."
                      className="w-full px-3.5 py-2.5 text-sm bg-[#FFFFFF] border border-[#D4AF37]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                    />
                  </div>
                </div>

                <div>
                  <span className="block text-xs font-semibold text-[#142B1A] mb-1.5">
                    Fulfillment Preference
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setDeliveryMethod('courier')}
                      className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-colors cursor-pointer ${
                        deliveryMethod === 'courier'
                          ? 'bg-[#142B1A] text-[#FAF7F2] border-[#D4AF37]'
                          : 'bg-[#FFFFFF] text-[#4A3D33] border-[#D4AF37]/30'
                      }`}
                    >
                      Courier Delivery
                    </button>
                    <button
                      type="button"
                      onClick={() => setDeliveryMethod('sanctuary-pickup')}
                      className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-colors cursor-pointer ${
                        deliveryMethod === 'sanctuary-pickup'
                          ? 'bg-[#142B1A] text-[#FAF7F2] border-[#D4AF37]'
                          : 'bg-[#FFFFFF] text-[#4A3D33] border-[#D4AF37]/30'
                      }`}
                    >
                      Sanctuary Pickup
                    </button>
                  </div>
                </div>

                {deliveryMethod === 'courier' && (
                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs font-semibold text-[#142B1A] mb-1">
                        Street Address &amp; City *
                      </label>
                      <input
                        type="text"
                        required
                        value={shippingAddress}
                        onChange={(e) => setShippingAddress(e.target.value)}
                        placeholder="Street, apartment, city, country"
                        className="w-full px-3.5 py-2.5 text-sm bg-[#FFFFFF] border border-[#D4AF37]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#142B1A] mb-1">
                        Postal / ZIP Code *
                      </label>
                      <input
                        type="text"
                        required
                        value={postalCode}
                        onChange={(e) => setPostalCode(e.target.value)}
                        placeholder="Postal code"
                        className="w-full px-3.5 py-2.5 text-sm bg-[#FFFFFF] border border-[#D4AF37]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                      />
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-semibold text-[#142B1A] mb-1">
                    Optional Household Intention or Gift Note
                  </label>
                  <textarea
                    rows={2}
                    value={blessingNote}
                    onChange={(e) => setBlessingNote(e.target.value)}
                    placeholder="Gift recipient name or quiet household blessing request..."
                    className="w-full px-3.5 py-2 text-sm bg-[#FFFFFF] border border-[#D4AF37]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                  />
                </div>
              </div>
            </form>
          )}
        </div>

        {/* Drawer Footer Summary & Action */}
        {items.length > 0 && step !== 'confirmed' && (
          <div className="p-5 bg-[#F4EFE6] border-t border-[#D4AF37]/30 space-y-3 shrink-0">
            <div className="space-y-1.5 text-xs text-[#4A3D33]">
              <div className="flex justify-between">
                <span>Selected Offerings</span>
                <span className="font-semibold text-[#142B1A] tabular-nums">
                  {totalItemsCount} {totalItemsCount === 1 ? 'item' : 'items'}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Coordination</span>
                <span className="font-semibold text-[#142B1A]">
                  {deliveryMethod === 'sanctuary-pickup' ? 'Sanctuary Pickup' : 'Courier Arranged'}
                </span>
              </div>
            </div>

            {step === 'bag' ? (
              <button
                type="button"
                onClick={() => setStep('checkout')}
                className="w-full py-3.5 px-5 bg-[#142B1A] hover:bg-[#1B3824] text-[#FAF7F2] text-sm font-semibold rounded-xl border border-[#D4AF37]/40 shadow-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <span>Proceed to Offering Request</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
              </button>
            ) : (
              <button
                type="submit"
                form="sanctuary-checkout-form"
                className="w-full py-3.5 px-5 bg-[#142B1A] hover:bg-[#1B3824] text-[#FAF7F2] text-sm font-semibold rounded-xl border border-[#D4AF37]/40 shadow-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <span>Submit Offering Request</span>
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
