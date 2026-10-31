import React from 'react';
import { ShieldAlert, HeartHandshake, CheckCircle2 } from 'lucide-react';

interface Props {
  variant?: 'banner' | 'card' | 'inline';
  className?: string;
}

export const MedicalDisclaimer: React.FC<Props> = ({ variant = 'card', className = '' }) => {
  if (variant === 'banner') {
    return (
      <aside aria-label="Spiritual and Medical Practice Boundary Disclaimer" className={`bg-[#142B1A] border-b border-[#D4AF37]/30 text-[#FAF7F2] py-2.5 px-4 text-xs ${className}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-[#D4AF37] shrink-0" />
            <p className="leading-snug">
              <span className="font-semibold text-[#D4AF37]">Ethical Practice Notice:</span> Spiritual guidance and ancestral consultations do not replace qualified medical, psychiatric, or mental health care. No supernatural outcomes or medical cures are promised.
            </p>
          </div>
          <a
            href="#disclaimer-full"
            className="hidden md:inline-block text-[#D4AF37] hover:underline whitespace-nowrap shrink-0 font-medium"
          >
            Read Full Policy
          </a>
        </div>
      </aside>
    );
  }

  return (
    <section aria-labelledby="disclaimer-heading" id="disclaimer-full" className={`bg-[#F4EFE6] border border-[#D4AF37]/30 rounded-2xl p-6 sm:p-8 ${className}`}>
      <div className="flex flex-col md:flex-row items-start gap-5">
        <div className="w-12 h-12 rounded-xl bg-[#142B1A] flex items-center justify-center shrink-0 text-[#D4AF37] shadow-sm">
          <HeartHandshake className="w-6 h-6" />
        </div>
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <h2 id="disclaimer-heading" className="text-lg font-serif text-[#142B1A] font-semibold">
              Our Ethical Foundation & Medical Care Boundary
            </h2>
            <span className="text-xs font-medium text-[#7A4628] bg-[#EAE2D3] px-2.5 py-0.5 rounded-full">
              Mandatory Care Policy
            </span>
          </div>
          <p className="text-sm text-[#4A3D33] leading-relaxed">
            Spiritual services, ancestral heritage consultations, and herbal education offered by <strong>Gifted Roots</strong> are rooted in traditional African cultural and contemplative philosophies. They are dedicated to personal enrichment, spiritual balance, lineage reflection, and cultural insight.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-[#3E342D]">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#1B3824] shrink-0 mt-0.5" />
              <span>We do <strong>not</strong> diagnose, prescribe, or provide clinical medical, psychological, or psychiatric therapy.</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#1B3824] shrink-0 mt-0.5" />
              <span>We do <strong>not</strong> promise supernatural outcomes, guaranteed fortunes, or medical cures of any condition.</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#1B3824] shrink-0 mt-0.5" />
              <span>Herbal heritage teachings are strictly educational regarding cultural lore and traditional aromatic preparation.</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#1B3824] shrink-0 mt-0.5" />
              <span>If you are experiencing acute medical or mental health distress, please consult a licensed medical professional immediately.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
