import React from 'react';
import { Compass, BookOpen, Heart, Eye, Sparkles } from 'lucide-react';
import elderMeditationImg from '../assets/images/ancestral_meditation_elder_1793325508246.jpg';
import sanctuarySpaceImg from '../assets/images/healer_sanctuary_space_1793325506206.jpg';

export const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <p className="text-xs uppercase tracking-widest text-[#7A4628] font-bold">
            The Living Lineage of Gifted Roots
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#142B1A] tracking-tight">
            Answering the Sacred Call of the Ancestors
          </h2>
          <div className="w-16 h-1 bg-[#D4AF37] mx-auto rounded-full" />
          <p className="text-base text-[#4A3D33] leading-relaxed">
            In African cosmology, spiritual healing is not a commercial craft or a theatrical display. It is a lifelong discipline of listening, learning from the soil, and honoring the continuity between past, present, and future generations.
          </p>
        </div>

        {/* 2-Column Split: Imagery & Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Images Grid */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-lg">
              <img
                src={elderMeditationImg}
                alt="African spiritual elder seated in serene meditation under tree"
                referrerPolicy="no-referrer"
                className="w-full h-[380px] sm:h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#142B1A]/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-[#FAF7F2]">
                <p className="font-serif text-sm italic">
                  "We do not invent the wisdom. We simply polish the mirror of the ancestral stream."
                </p>
                <p className="text-xs text-[#D4AF37] mt-1 font-medium">
                  Elder Spiritual Custodian · Gifted Roots
                </p>
              </div>
            </div>

            {/* Secondary Sanctuary Vignette */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden border border-[#D4AF37]/30 shadow-sm relative h-48">
                <img
                  src={sanctuarySpaceImg}
                  alt="Traditional African spiritual consultation sanctuary"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-[#F1EBD8] rounded-xl p-5 border border-[#D4AF37]/20 flex flex-col justify-center">
                <p className="text-xs font-bold uppercase tracking-wider text-[#7A4628]">
                  The Sanctuary Atmosphere
                </p>
                <p className="text-xs text-[#3E342D] mt-2 leading-relaxed">
                  A tranquil place of earthen clay, fragrant imphepho smoke, and undisturbed quiet where every voice is heard in confidence.
                </p>
              </div>
            </div>
          </div>

          {/* Narrative & Values */}
          <div className="lg:col-span-6 space-y-6 text-[#3E342D]">
            <div className="space-y-4">
              <h3 className="text-2xl font-serif font-bold text-[#142B1A]">
                Preserving Ancient African Wisdom in a Fragmented Era
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-[#4A3D33]">
                Gifted Roots was founded with a singular conviction: that traditional African spiritual wisdom holds essential remedies for the fragmentation, anxiety, and uprootedness of modern life.
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-[#4A3D33]">
                Trained in the oral traditions of African spiritual custodianship, our work centers around <em>Ubuntu</em> ("I am because we are") and <em>Sankofa</em> ("reach back and retrieve what is valuable"). We walk alongside seekers—whether from the continent or the global diaspora—who wish to restore spiritual balance and remember who they are.
              </p>
            </div>

            {/* Core Tenets of our Healers */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5 p-4 bg-[#F4EFE6] rounded-xl border border-[#D4AF37]/20">
                <Heart className="w-5 h-5 text-[#7A4628] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#142B1A]">Compassionate, Unhurried Listening</h4>
                  <p className="text-xs text-[#55473C] mt-0.5 leading-relaxed">
                    Every consultation begins with patient, respectful listening. We believe speaking your truth in a sacred environment is the initial step of realignment.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 bg-[#F4EFE6] rounded-xl border border-[#D4AF37]/20">
                <Eye className="w-5 h-5 text-[#7A4628] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#142B1A]">Reverence for Ancestral Continuity</h4>
                  <p className="text-xs text-[#55473C] mt-0.5 leading-relaxed">
                    We guide you in understanding the blessings and lessons inherited from your lineage, fostering reconciliation rather than fear.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 bg-[#F4EFE6] rounded-xl border border-[#D4AF37]/20">
                <BookOpen className="w-5 h-5 text-[#7A4628] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#142B1A]">Cultural Authenticity & Ethical Boundaries</h4>
                  <p className="text-xs text-[#55473C] mt-0.5 leading-relaxed">
                    We maintain unbending boundaries: no manipulative predictions, no exploitative fees, and complete transparency regarding the cultural and spiritual nature of our work.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
