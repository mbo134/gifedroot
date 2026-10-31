import React, { useState } from 'react';
import { MessageCircle, X, Send, Copy, Check, Sparkles } from 'lucide-react';

interface WhatsAppWidgetProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

export const WhatsAppWidget: React.FC<WhatsAppWidgetProps> = ({ isOpen, onClose, onOpen }) => {
  const [selectedTemplate, setSelectedTemplate] = useState('guidance');
  const [customNote, setCustomNote] = useState('');
  const [copied, setCopied] = useState(false);

  const templates: Record<string, string> = {
    guidance: "Hello Gifted Roots, I would like to inquire about scheduling a Traditional Spiritual Guidance session. I am seeking clarity on a personal life transition.",
    ancestral: "Greetings Gifted Roots, I wish to learn more about an Ancestral Heritage Consultation to honor my family lineage and roots in a traditional way.",
    dream: "Hello, I am reaching out to request assistance with Traditional Dream Interpretation regarding recurring ancestral symbols.",
    general: "Greetings Elder, I would like to inquire about your consultation availability and session guidelines."
  };

  const getFullMessage = () => {
    const base = templates[selectedTemplate] || templates.general;
    if (customNote.trim()) {
      return `${base}\n\nNote: ${customNote.trim()}`;
    }
    return base;
  };

  const handleLaunchWhatsApp = () => {
    const encoded = encodeURIComponent(getFullMessage());
    window.open(`https://api.whatsapp.com/send?text=${encoded}`, '_blank');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getFullMessage());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* Floating Sticky Button for Quick WhatsApp Access */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={onOpen}
          aria-label="Open WhatsApp Consultation Assistant"
          className="flex items-center gap-2.5 px-4 py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold text-xs sm:text-sm rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 border-2 border-white/40 cursor-pointer"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          <span className="hidden sm:inline">WhatsApp Inquiry</span>
        </button>
      </div>

      {/* Modal / Flyout when triggered */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-end sm:items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-[#FAF7F2] border border-[#D4AF37]/50 rounded-2xl sm:rounded-3xl max-w-lg w-full shadow-2xl overflow-hidden text-[#2C241E]">
            {/* Header */}
            <div className="bg-[#142B1A] px-6 py-4 flex items-center justify-between text-[#FAF7F2]">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#25D366] flex items-center justify-center text-white">
                  <MessageCircle className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-base text-[#FAF7F2]">
                    WhatsApp Direct Inquiry
                  </h3>
                  <p className="text-[11px] text-[#D4AF37]">
                    Gifted Roots Sanctuary Desk
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                aria-label="Close WhatsApp dialog"
                className="text-[#FAF7F2]/70 hover:text-white p-1 rounded-lg cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 space-y-4">
              <p className="text-xs text-[#4A3D33] leading-relaxed">
                Connect directly with our sanctuary coordination desk. Select an inquiry template or add your personal question:
              </p>

              {/* Inquiry Type Selector */}
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedTemplate('guidance')}
                  className={`p-2.5 text-xs text-left rounded-xl border transition-all cursor-pointer ${
                    selectedTemplate === 'guidance'
                      ? 'bg-[#142B1A] border-[#D4AF37] text-[#FAF7F2]'
                      : 'bg-[#F4EFE6] border-[#D4AF37]/20 text-[#3E342D] hover:bg-[#EAE2D3]'
                  }`}
                >
                  Spiritual Guidance
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedTemplate('ancestral')}
                  className={`p-2.5 text-xs text-left rounded-xl border transition-all cursor-pointer ${
                    selectedTemplate === 'ancestral'
                      ? 'bg-[#142B1A] border-[#D4AF37] text-[#FAF7F2]'
                      : 'bg-[#F4EFE6] border-[#D4AF37]/20 text-[#3E342D] hover:bg-[#EAE2D3]'
                  }`}
                >
                  Ancestral Heritage
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedTemplate('dream')}
                  className={`p-2.5 text-xs text-left rounded-xl border transition-all cursor-pointer ${
                    selectedTemplate === 'dream'
                      ? 'bg-[#142B1A] border-[#D4AF37] text-[#FAF7F2]'
                      : 'bg-[#F4EFE6] border-[#D4AF37]/20 text-[#3E342D] hover:bg-[#EAE2D3]'
                  }`}
                >
                  Dream Interpretation
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedTemplate('general')}
                  className={`p-2.5 text-xs text-left rounded-xl border transition-all cursor-pointer ${
                    selectedTemplate === 'general'
                      ? 'bg-[#142B1A] border-[#D4AF37] text-[#FAF7F2]'
                      : 'bg-[#F4EFE6] border-[#D4AF37]/20 text-[#3E342D] hover:bg-[#EAE2D3]'
                  }`}
                >
                  General Availability
                </button>
              </div>

              {/* Preview Box */}
              <div className="p-3.5 bg-[#F4EFE6] rounded-xl border border-[#D4AF37]/30 text-xs font-mono text-[#3E342D] whitespace-pre-wrap leading-relaxed">
                {templates[selectedTemplate]}
              </div>

              {/* Custom message note */}
              <div>
                <label htmlFor="customNoteInput" className="block text-xs font-semibold text-[#55473C] mb-1">
                  Add Confidential Note (Optional)
                </label>
                <input
                  id="customNoteInput"
                  type="text"
                  value={customNote}
                  onChange={(e) => setCustomNote(e.target.value)}
                  placeholder="e.g. Preferred time: weekday mornings"
                  className="w-full px-3 py-2 text-xs bg-[#FAF7F2] border border-[#D4AF37]/40 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
                />
              </div>

              <div className="text-[11px] text-[#7A4628] leading-tight flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                <span>Responses are delivered with traditional unhurried consideration within 24 hours.</span>
              </div>
            </div>

            {/* Actions */}
            <div className="px-6 py-4 bg-[#F4EFE6] border-t border-[#EAE2D3] flex items-center justify-between gap-3">
              <button
                onClick={handleCopy}
                className="px-3 py-2 text-xs font-medium text-[#7A4628] hover:text-[#142B1A] flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy Text'}</span>
              </button>

              <button
                onClick={handleLaunchWhatsApp}
                className="px-5 py-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold text-xs rounded-xl flex items-center gap-2 shadow-sm transition-all cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Open WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
