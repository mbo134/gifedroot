import React from 'react';
import { X, ShieldCheck, Lock, Heart, CheckCircle2 } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-[#FAF7F2] border border-[#D4AF37]/40 rounded-2xl sm:rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl relative text-[#2C241E]">
        {/* Header */}
        <div className="sticky top-0 bg-[#FAF7F2]/95 backdrop-blur-md px-6 py-5 border-b border-[#EAE2D3] flex items-center justify-between z-10">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#142B1A] text-[#D4AF37] flex items-center justify-center">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg text-[#142B1A]">
                The Sacred Privacy & Confidentiality Pledge
              </h3>
              <p className="text-xs text-[#7A4628]">Gifted Roots Ethical Standards</p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close privacy modal"
            className="p-1.5 rounded-lg text-[#7A4628] hover:bg-[#EAE2D3] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6 text-xs sm:text-sm text-[#4A3D33] leading-relaxed">
          <p>
            At <strong>Gifted Roots Spiritual Healer</strong>, spiritual inquiry is treated with the ancient reverence accorded to sacred council. We believe that true healing and discernment require absolute trust.
          </p>

          <div className="space-y-4">
            <div className="p-4 bg-[#F4EFE6] rounded-xl border border-[#D4AF37]/25 space-y-1.5">
              <div className="flex items-center gap-2 font-bold text-[#142B1A]">
                <CheckCircle2 className="w-4 h-4 text-[#1B3824]" />
                <span>1. Sanctity of Conversation & Ancestral Inquiries</span>
              </div>
              <p className="text-xs text-[#55473C]">
                Whatever you disclose during a consultation—including dreams, personal fears, relational concerns, or ancestral questions—remains strictly between you and the practitioner. Sessions are never recorded without explicit, informed consent.
              </p>
            </div>

            <div className="p-4 bg-[#F4EFE6] rounded-xl border border-[#D4AF37]/25 space-y-1.5">
              <div className="flex items-center gap-2 font-bold text-[#142B1A]">
                <CheckCircle2 className="w-4 h-4 text-[#1B3824]" />
                <span>2. Zero Commercial Exploitation</span>
              </div>
              <p className="text-xs text-[#55473C]">
                We do not sell, rent, license, or exchange your personal information (name, email address, WhatsApp contact, or spiritual intentions) with marketing agencies, advertisers, or any third parties.
              </p>
            </div>

            <div className="p-4 bg-[#F4EFE6] rounded-xl border border-[#D4AF37]/25 space-y-1.5">
              <div className="flex items-center gap-2 font-bold text-[#142B1A]">
                <CheckCircle2 className="w-4 h-4 text-[#1B3824]" />
                <span>3. Privacy-Conscious Data Retention</span>
              </div>
              <p className="text-xs text-[#55473C]">
                Your booking requests are retained solely to coordinate your appointment. You hold the unconditional right to request the immediate erasure of your contact details and notes from our correspondence logs by writing to <a href="mailto:healer@giftedrootsspiritualhealer.org" className="text-[#142B1A] font-semibold underline">healer@giftedrootsspiritualhealer.org</a> at any time.
              </p>
            </div>

            <div className="p-4 bg-[#F4EFE6] rounded-xl border border-[#D4AF37]/25 space-y-1.5">
              <div className="flex items-center gap-2 font-bold text-[#142B1A]">
                <CheckCircle2 className="w-4 h-4 text-[#1B3824]" />
                <span>4. Health & Medical Distinction</span>
              </div>
              <p className="text-xs text-[#55473C]">
                Our records reflect spiritual contemplation and cultural consultations. They are distinct from medical healthcare records. In instances where an individual discloses immediate risk of harm to self or others, ethical duty may require advising immediate emergency medical intervention.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-[#F4EFE6] border-t border-[#EAE2D3] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-[#FAF7F2] bg-[#142B1A] hover:bg-[#1B3824] rounded-xl transition-all cursor-pointer"
          >
            I Understand & Agree
          </button>
        </div>
      </div>
    </div>
  );
};
