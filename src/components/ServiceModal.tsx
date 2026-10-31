import React from 'react';
import { X, Clock, Video, CheckCircle2, ShieldCheck, Sparkles, HelpCircle } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookNow: (serviceId: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose, onBookNow }) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-[#FAF7F2] border border-[#D4AF37]/40 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative text-[#2C241E]">
        {/* Header Bar */}
        <div className="sticky top-0 bg-[#FAF7F2]/95 backdrop-blur-md px-6 py-5 border-b border-[#EAE2D3] flex items-center justify-between gap-4 z-10">
          <div>
            <span className="text-xs font-semibold text-[#7A4628] uppercase tracking-wider">
              Service Details & Protocols
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#142B1A]">
              {service.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="p-2 rounded-xl text-[#7A4628] hover:bg-[#EAE2D3] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Metadata bar */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-[#55473C] border-b border-[#EAE2D3] pb-4">
            <span className="flex items-center gap-1.5 font-medium text-[#142B1A]">
              <Clock className="w-4 h-4 text-[#D4AF37]" />
              {service.duration}
            </span>
            <span aria-hidden="true" className="text-[#D4AF37]">·</span>
            <span>{service.format.join(' / ')}</span>
            <span aria-hidden="true" className="text-[#D4AF37]">·</span>
            <span>Symbol: {service.sacredSymbol}</span>
          </div>

          {/* Description */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#142B1A]">
              Overview & Sacred Purpose
            </h4>
            <p className="text-sm text-[#4A3D33] leading-relaxed">
              {service.fullDesc}
            </p>
          </div>

          {/* Key Benefits */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#142B1A]">
              Core Areas of Focus
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.keyBenefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-[#3E342D] bg-[#F4EFE6] p-2.5 rounded-lg border border-[#D4AF37]/20">
                  <CheckCircle2 className="w-4 h-4 text-[#1B3824] shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* What to expect & preparation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 bg-[#F1EBD8] rounded-xl border border-[#D4AF37]/20 space-y-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#7A4628]">
                What to Expect
              </span>
              <p className="text-xs text-[#4A3D33] leading-relaxed">
                {service.whatToExpect}
              </p>
            </div>
            <div className="p-4 bg-[#F1EBD8] rounded-xl border border-[#D4AF37]/20 space-y-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#7A4628]">
                How to Prepare
              </span>
              <p className="text-xs text-[#4A3D33] leading-relaxed">
                {service.preparation}
              </p>
            </div>
          </div>

          {/* Ethical disclaimer reminder */}
          <div className="flex items-start gap-2.5 p-3.5 bg-[#FAF7F2] rounded-xl border border-[#D4AF37]/40 text-xs text-[#55473C]">
            <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
            <p>
              All sessions are held in strict privacy. Spiritual guidance is complementary and does not replace medical or mental healthcare.
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-[#F4EFE6] border-t border-[#EAE2D3] flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2 text-xs font-medium text-[#7A4628] hover:text-[#142B1A] transition-colors cursor-pointer"
          >
            Close Overview
          </button>
          <button
            onClick={() => {
              onClose();
              onBookNow(service.id);
            }}
            className="w-full sm:w-auto px-6 py-2.5 text-sm font-semibold text-[#FAF7F2] bg-[#142B1A] hover:bg-[#1B3824] rounded-xl shadow-md border border-[#D4AF37]/40 transition-all cursor-pointer"
          >
            Request This Consultation
          </button>
        </div>
      </div>
    </div>
  );
};
