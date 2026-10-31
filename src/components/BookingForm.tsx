import React, { useState, useEffect } from 'react';
import {
  Calendar,
  Clock,
  Video,
  Phone,
  Home,
  CheckCircle2,
  Lock,
  MessageCircle,
  Copy,
  Download,
  AlertCircle,
  ShieldCheck,
  RefreshCw,
  Mail,
} from 'lucide-react';
import { SERVICES } from '../data/spiritualData';
import { BookingRequest } from '../types';

interface BookingFormProps {
  initialServiceId?: string;
  onClose?: () => void;
  onOpenPrivacyPolicy: () => void;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  initialServiceId,
  onClose,
  onOpenPrivacyPolicy,
}) => {
  const [serviceId, setServiceId] = useState(initialServiceId || 'spiritual-guidance');
  const [format, setFormat] = useState<'virtual' | 'phone' | 'sanctuary'>('virtual');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTimeSlot, setPreferredTimeSlot] = useState('morning');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [timezone, setTimezone] = useState('');
  const [intentions, setIntentions] = useState('');
  const [consentMedical, setConsentMedical] = useState(false);
  const [consentPrivacy, setConsentPrivacy] = useState(false);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedBooking, setSubmittedBooking] = useState<BookingRequest | null>(null);
  const [copiedNotice, setCopiedNotice] = useState(false);

  // Initialize default date (tomorrow) and timezone
  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setPreferredDate(tomorrow.toISOString().split('T')[0]);

    try {
      setTimezone(Intl.DateTimeFormat().resolvedOptions().timeZone || 'GMT');
    } catch {
      setTimezone('GMT');
    }
  }, []);

  useEffect(() => {
    if (initialServiceId) {
      setServiceId(initialServiceId);
    }
  }, [initialServiceId]);

  const selectedService = SERVICES.find((s) => s.id === serviceId) || SERVICES[0];

  const validateForm = () => {
    const errs: Record<string, string> = {};
    if (!fullName.trim()) errs.fullName = 'Please provide your name.';
    if (!email.trim() || !email.includes('@')) errs.email = 'A valid email is required for confirmation.';
    if (!whatsappNumber.trim()) errs.whatsappNumber = 'Please provide your contact number.';
    if (!preferredDate) errs.preferredDate = 'Please select a preferred date.';
    if (!consentMedical) {
      errs.consentMedical = 'You must acknowledge the medical & non-supernatural care disclaimer.';
    }
    if (!consentPrivacy) {
      errs.consentPrivacy = 'Please confirm consent for confidential scheduling.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const refNum = `GR-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;

    const newBooking: BookingRequest = {
      id: refNum,
      createdAt: new Date().toISOString(),
      serviceId,
      serviceTitle: selectedService.title,
      format,
      preferredDate,
      preferredTimeSlot,
      fullName: fullName.trim(),
      email: email.trim(),
      whatsappNumber: whatsappNumber.trim(),
      timezone,
      intentions: intentions.trim(),
      consentMedical,
      consentPrivacy,
      status: 'Received',
    };

    localStorage.setItem('gifted_roots_booking', JSON.stringify(newBooking));
    setSubmittedBooking(newBooking);
  };

  const handleCopySummary = () => {
    if (!submittedBooking) return;
    const text = `Gifted Roots Consultation Request\nReference: ${submittedBooking.id}\nService: ${submittedBooking.serviceTitle}\nFormat: ${submittedBooking.format}\nDate: ${submittedBooking.preferredDate} (${submittedBooking.preferredTimeSlot})\nName: ${submittedBooking.fullName}`;
    navigator.clipboard.writeText(text);
    setCopiedNotice(true);
    setTimeout(() => setCopiedNotice(false), 2500);
  };

  const handleDownloadIcs = () => {
    if (!submittedBooking) return;
    const dateFormatted = submittedBooking.preferredDate.replace(/-/g, '');
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Gifted Roots Spiritual Healer//EN
BEGIN:VEVENT
SUMMARY:Gifted Roots: ${submittedBooking.serviceTitle}
DESCRIPTION:Spiritual consultation request (Ref: ${submittedBooking.id}). Format: ${submittedBooking.format}. Contact: ${submittedBooking.email}
DTSTART;VALUE=DATE:${dateFormatted}
DTEND;VALUE=DATE:${dateFormatted}
STATUS:TENTATIVE
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `GiftedRoots-${submittedBooking.id}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleOpenWhatsAppHandoff = () => {
    if (!submittedBooking) return;
    const msg = encodeURIComponent(
      `Hello Gifted Roots, I have submitted a consultation request (Ref: ${submittedBooking.id}) for "${submittedBooking.serviceTitle}". My preferred date is ${submittedBooking.preferredDate}. Looking forward to connecting with the elder in reverence.`
    );
    window.open(`https://api.whatsapp.com/send?text=${msg}`, '_blank');
  };

  return (
    <section id="booking-section" className="py-20 lg:py-28 bg-[#FAF7F2] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <p className="text-xs uppercase tracking-widest text-[#7A4628] font-bold">
            Confidential Consultation Request
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#142B1A] tracking-tight">
            Schedule Your Time of Discernment
          </h2>
          <div className="w-16 h-1 bg-[#D4AF37] mx-auto rounded-full" />
          <p className="text-sm sm:text-base text-[#4A3D33] max-w-2xl mx-auto leading-relaxed">
            Begin with an unhurried, privacy-conscious booking request. Your identity and personal notes are held in the highest sacred trust.
          </p>
        </div>

        {submittedBooking ? (
          /* Confirmation Screen */
          <div className="bg-[#FAF7F2] border-2 border-[#D4AF37] rounded-3xl p-6 sm:p-10 shadow-xl space-y-6 animate-in zoom-in-95 duration-200">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-[#142B1A] text-[#D4AF37] flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#7A4628]">
                Request Successfully Lodged
              </p>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#142B1A]">
                Blessings, {submittedBooking.fullName}
              </h3>
              <p className="text-sm text-[#4A3D33] max-w-lg mx-auto leading-relaxed">
                Your consultation request has been received under our sacred confidentiality protocol. An elder custodian will review your inquiry and follow up within 24 hours.
              </p>
            </div>

            {/* Request Summary Receipt */}
            <div className="bg-[#F4EFE6] border border-[#D4AF37]/30 rounded-2xl p-5 sm:p-6 space-y-3 text-sm text-[#3E342D]">
              <div className="flex items-center justify-between border-b border-[#EAE2D3] pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#7A4628]">
                  Reference Code
                </span>
                <span className="font-mono font-bold text-base text-[#142B1A]">
                  {submittedBooking.id}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-[#7A4628] block">Service Requested:</span>
                  <span className="font-semibold text-[#142B1A]">{submittedBooking.serviceTitle}</span>
                </div>
                <div>
                  <span className="text-[#7A4628] block">Format:</span>
                  <span className="font-semibold capitalize text-[#142B1A]">
                    {submittedBooking.format} Session
                  </span>
                </div>
                <div>
                  <span className="text-[#7A4628] block">Requested Date:</span>
                  <span className="font-semibold text-[#142B1A]">{submittedBooking.preferredDate} ({submittedBooking.preferredTimeSlot})</span>
                </div>
                <div>
                  <span className="text-[#7A4628] block">Contact Channels:</span>
                  <span className="font-semibold text-[#142B1A]">{submittedBooking.email} · {submittedBooking.whatsappNumber}</span>
                </div>
              </div>
              <div className="pt-3 border-t border-[#EAE2D3] flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs text-[#55473C]">
                <span>Official Sanctuary Desk:</span>
                <a
                  href="mailto:healer@giftedrootsspiritualhealer.org"
                  className="font-semibold text-[#142B1A] hover:text-[#7A4628] flex items-center gap-1.5 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>healer@giftedrootsspiritualhealer.org</span>
                </a>
              </div>
            </div>

            {/* Next Steps & Direct WhatsApp Action */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={handleOpenWhatsAppHandoff}
                className="flex-1 py-3 px-4 bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold text-sm rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Notify via WhatsApp</span>
              </button>

              <button
                onClick={handleDownloadIcs}
                className="py-3 px-4 bg-[#EAE2D3] hover:bg-[#DDD3C0] text-[#142B1A] font-medium text-xs rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <Download className="w-4 h-4 text-[#7A4628]" />
                <span>Save to Calendar (.ics)</span>
              </button>

              <button
                onClick={handleCopySummary}
                className="py-3 px-4 bg-[#EAE2D3] hover:bg-[#DDD3C0] text-[#142B1A] font-medium text-xs rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <Copy className="w-4 h-4 text-[#7A4628]" />
                <span>{copiedNotice ? 'Copied!' : 'Copy Summary'}</span>
              </button>
            </div>

            <div className="text-center pt-2">
              <button
                onClick={() => setSubmittedBooking(null)}
                className="text-xs text-[#7A4628] hover:text-[#142B1A] underline cursor-pointer"
              >
                Submit another inquiry or change details
              </button>
            </div>
          </div>
        ) : (
          /* The Interactive Form */
          <form
            onSubmit={handleSubmit}
            className="bg-[#FAF7F2] border border-[#D4AF37]/40 rounded-3xl p-6 sm:p-10 shadow-xl space-y-8"
          >
            {/* Step 1: Select Service */}
            <div className="space-y-3">
              <label className="block text-sm font-bold text-[#142B1A] uppercase tracking-wider">
                1. Select Desired Spiritual Service
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {SERVICES.map((s) => {
                  const isSelected = serviceId === s.id;
                  return (
                    <button
                      type="button"
                      key={s.id}
                      onClick={() => setServiceId(s.id)}
                      className={`p-3.5 rounded-xl text-left border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#142B1A] border-[#D4AF37] text-[#FAF7F2] shadow-sm'
                          : 'bg-[#F4EFE6] border-[#D4AF37]/20 text-[#3E342D] hover:bg-[#EAE2D3]'
                      }`}
                    >
                      <div className="text-xs font-bold leading-snug">{s.title}</div>
                      <div className={`text-[11px] mt-1 ${isSelected ? 'text-[#D4AF37]' : 'text-[#7A4628]'}`}>
                        {s.duration}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Format & Date */}
            <div className="space-y-4 pt-2 border-t border-[#EAE2D3]">
              <label className="block text-sm font-bold text-[#142B1A] uppercase tracking-wider">
                2. Consultation Format & Preferred Timing
              </label>

              {/* Format Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setFormat('virtual')}
                  className={`p-3 rounded-xl border flex items-center gap-2.5 transition-all text-xs font-semibold cursor-pointer ${
                    format === 'virtual'
                      ? 'bg-[#142B1A] border-[#D4AF37] text-[#FAF7F2]'
                      : 'bg-[#F4EFE6] border-[#D4AF37]/20 text-[#3E342D] hover:bg-[#EAE2D3]'
                  }`}
                >
                  <Video className="w-4 h-4 text-[#D4AF37]" />
                  <span>Secure Video Call</span>
                </button>

                <button
                  type="button"
                  onClick={() => setFormat('phone')}
                  className={`p-3 rounded-xl border flex items-center gap-2.5 transition-all text-xs font-semibold cursor-pointer ${
                    format === 'phone'
                      ? 'bg-[#142B1A] border-[#D4AF37] text-[#FAF7F2]'
                      : 'bg-[#F4EFE6] border-[#D4AF37]/20 text-[#3E342D] hover:bg-[#EAE2D3]'
                  }`}
                >
                  <Phone className="w-4 h-4 text-[#D4AF37]" />
                  <span>Confidential Phone</span>
                </button>

                <button
                  type="button"
                  onClick={() => setFormat('sanctuary')}
                  className={`p-3 rounded-xl border flex items-center gap-2.5 transition-all text-xs font-semibold cursor-pointer ${
                    format === 'sanctuary'
                      ? 'bg-[#142B1A] border-[#D4AF37] text-[#FAF7F2]'
                      : 'bg-[#F4EFE6] border-[#D4AF37]/20 text-[#3E342D] hover:bg-[#EAE2D3]'
                  }`}
                >
                  <Home className="w-4 h-4 text-[#D4AF37]" />
                  <span>Sanctuary Visit</span>
                </button>
              </div>

              {/* Date & Time Slot Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
                <div>
                  <label htmlFor="preferredDate" className="block text-xs font-semibold text-[#55473C] mb-1">
                    Preferred Date
                  </label>
                  <input
                    id="preferredDate"
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-[#FAF7F2] border border-[#D4AF37]/40 rounded-xl text-[#142B1A] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
                  />
                  {errors.preferredDate && (
                    <p className="text-[11px] text-red-600 mt-1">{errors.preferredDate}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="preferredTimeSlot" className="block text-xs font-semibold text-[#55473C] mb-1">
                    Time Window
                  </label>
                  <select
                    id="preferredTimeSlot"
                    value={preferredTimeSlot}
                    onChange={(e) => setPreferredTimeSlot(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-[#FAF7F2] border border-[#D4AF37]/40 rounded-xl text-[#142B1A] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
                  >
                    <option value="morning">Morning (9:00 AM – 12:00 PM)</option>
                    <option value="afternoon">Afternoon (1:00 PM – 4:00 PM)</option>
                    <option value="evening">Evening (5:00 PM – 7:30 PM)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="clientTimezone" className="block text-xs font-semibold text-[#55473C] mb-1">
                    Your Timezone
                  </label>
                  <input
                    id="clientTimezone"
                    type="text"
                    value={timezone}
                    onChange={(e) => setTimezone(e.target.value)}
                    placeholder="e.g. GMT, EST, CAT"
                    className="w-full px-3 py-2 text-xs bg-[#FAF7F2] border border-[#D4AF37]/40 rounded-xl text-[#142B1A] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
                  />
                </div>
              </div>
            </div>

            {/* Step 3: Seeker Information */}
            <div className="space-y-4 pt-2 border-t border-[#EAE2D3]">
              <label className="block text-sm font-bold text-[#142B1A] uppercase tracking-wider">
                3. Your Confidential Details
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="fullName" className="block text-xs font-semibold text-[#55473C] mb-1">
                    Full Name / Preferred Name *
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Kwame or Amara"
                    className="w-full px-3.5 py-2.5 text-xs bg-[#FAF7F2] border border-[#D4AF37]/40 rounded-xl text-[#142B1A] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
                  />
                  {errors.fullName && <p className="text-[11px] text-red-600 mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label htmlFor="emailAddress" className="block text-xs font-semibold text-[#55473C] mb-1">
                    Email Address *
                  </label>
                  <input
                    id="emailAddress"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@domain.com"
                    className="w-full px-3.5 py-2.5 text-xs bg-[#FAF7F2] border border-[#D4AF37]/40 rounded-xl text-[#142B1A] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
                  />
                  {errors.email && <p className="text-[11px] text-red-600 mt-1">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="whatsappNumber" className="block text-xs font-semibold text-[#55473C] mb-1">
                  WhatsApp Contact Number * (with Country Code)
                </label>
                <input
                  id="whatsappNumber"
                  type="tel"
                  required
                  value={whatsappNumber}
                  onChange={(e) => setWhatsappNumber(e.target.value)}
                  placeholder="+254 700 000 000 or +1 415 000 0000"
                  className="w-full px-3.5 py-2.5 text-xs bg-[#FAF7F2] border border-[#D4AF37]/40 rounded-xl text-[#142B1A] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
                />
                <p className="text-[11px] text-[#7A4628] mt-1">
                  Used for confidential scheduling confirmations and link sharing.
                </p>
                {errors.whatsappNumber && (
                  <p className="text-[11px] text-red-600 mt-1">{errors.whatsappNumber}</p>
                )}
              </div>

              <div>
                <label htmlFor="intentions" className="block text-xs font-semibold text-[#55473C] mb-1">
                  Confidential Intention / Focus for the Elder (Optional)
                </label>
                <textarea
                  id="intentions"
                  rows={3}
                  value={intentions}
                  onChange={(e) => setIntentions(e.target.value)}
                  placeholder="Briefly describe what life transition, dream, or ancestral question you wish to explore..."
                  className="w-full px-3.5 py-2.5 text-xs bg-[#FAF7F2] border border-[#D4AF37]/40 rounded-xl text-[#142B1A] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
                />
              </div>
            </div>

            {/* Step 4: Mandatory Ethical & Medical Disclaimer Consent */}
            <div className="space-y-3 pt-2 border-t border-[#EAE2D3] bg-[#F4EFE6] p-4 rounded-2xl border border-[#D4AF37]/30">
              <div className="flex items-start gap-3">
                <input
                  id="consentMedical"
                  type="checkbox"
                  checked={consentMedical}
                  onChange={(e) => setConsentMedical(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-[#D4AF37] text-[#142B1A] focus:ring-[#D4AF37] accent-[#142B1A] cursor-pointer"
                />
                <label htmlFor="consentMedical" className="text-xs text-[#3E342D] leading-relaxed cursor-pointer">
                  <strong>Mandatory Ethical & Medical Acknowledgment:</strong> I understand that spiritual guidance, ancestral consultations, and herbal education provided by Gifted Roots do not replace qualified medical, psychiatric, or mental health care. I acknowledge that no supernatural outcomes, guaranteed fortunes, or medical cures are promised.
                </label>
              </div>
              {errors.consentMedical && (
                <p className="text-[11px] text-red-600 pl-7">{errors.consentMedical}</p>
              )}

              <div className="flex items-start gap-3 pt-2">
                <input
                  id="consentPrivacy"
                  type="checkbox"
                  checked={consentPrivacy}
                  onChange={(e) => setConsentPrivacy(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-[#D4AF37] text-[#142B1A] focus:ring-[#D4AF37] accent-[#142B1A] cursor-pointer"
                />
                <label htmlFor="consentPrivacy" className="text-xs text-[#3E342D] leading-relaxed cursor-pointer">
                  <strong>Confidential Privacy Consent:</strong> I agree to the{' '}
                  <button
                    type="button"
                    onClick={onOpenPrivacyPolicy}
                    className="text-[#7A4628] underline font-semibold hover:text-[#142B1A] cursor-pointer"
                  >
                    Sacred Privacy Pledge
                  </button>
                  . My information will never be sold, publicised, or shared.
                </label>
              </div>
              {errors.consentPrivacy && (
                <p className="text-[11px] text-red-600 pl-7">{errors.consentPrivacy}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-2 space-y-3">
              <button
                type="submit"
                className="w-full py-4 px-6 text-sm font-semibold text-[#142B1A] bg-[#D4AF37] hover:bg-[#E5C358] rounded-xl shadow-lg border border-[#B08D20] transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-[0.99]"
              >
                <Lock className="w-4 h-4" />
                <span>Submit Confidential Consultation Request</span>
              </button>

              <div className="text-center text-xs text-[#7A4628] flex items-center justify-center gap-1.5 pt-1">
                <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Prefer direct email? Reach the healer directly at{' '}
                  <a
                    href="mailto:healer@giftedrootsspiritualhealer.org"
                    className="font-semibold text-[#142B1A] hover:underline"
                  >
                    healer@giftedrootsspiritualhealer.org
                  </a>
                </span>
              </div>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};
