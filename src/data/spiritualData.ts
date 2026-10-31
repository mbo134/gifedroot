import { ServiceItem, BotanicalItem, TestimonialItem, FaqItem } from '../types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'spiritual-guidance',
    title: 'Traditional Spiritual Guidance',
    category: 'guidance',
    shortDesc: 'A compassionate, grounded discernment session to navigate life transitions, relational decisions, and personal purpose through ancestral wisdom.',
    fullDesc: 'Traditional spiritual guidance is a sacred space of active listening, prayerful reflection, and deep dialogue. Rather than predicting fortunes, we examine the underlying spiritual currents in your life, identify blockages, and help you regain your personal grounding using time-tested African contemplative principles.',
    duration: '60 minutes',
    format: ['Secure Video Call', 'Confidential Phone', 'Sanctuary Visit'],
    keyBenefits: [
      'Clarity on complex life choices and personal transitions',
      'Renewed sense of inner peace and emotional grounding',
      'Identification of recurring life patterns and spiritual disharmony',
      'Practical contemplation practices tailored to your everyday life'
    ],
    whatToExpect: 'We begin with a brief moment of quiet grounding and ancestral acknowledgement. You will have uninterrupted time to share your questions, followed by guided reflection, symbolic inquiry, and grounding recommendations.',
    preparation: 'Find a quiet, private room with no interruptions. You may keep a glass of fresh water and a journal nearby for personal notes.',
    sacredSymbol: 'Sankofa'
  },
  {
    id: 'ancestral-consultation',
    title: 'Ancestral Heritage Consultations',
    category: 'guidance',
    shortDesc: 'Honor your lineage, explore remembrance rites, and cultivate a respectful relationship with the generations that came before you.',
    fullDesc: 'In African cosmological thought, our ancestors represent our living roots. When we disconnect from our history, we often feel uprooted. This consultation guides you in establishing respectful ancestral remembrance practices, understanding family lineage dynamics, and reconciling with your heritage in an ethical, grounded manner.',
    duration: '75 minutes',
    format: ['Secure Video Call', 'Confidential Phone', 'Sanctuary Visit'],
    keyBenefits: [
      'Understanding traditional ancestral veneration principles without dogmatism',
      'Guidance on setting up a respectful home remembrance space',
      'Gentle family heritage reflection and intergenerational awareness',
      'Cultivation of gratitude, belonging, and emotional resilience'
    ],
    whatToExpect: 'We explore your family roots, genealogical background, and any feelings of disconnection. We discuss respectful traditional ways to honor parents, grandparents, and forebears through simple daily acts of remembrance.',
    preparation: 'Reflect on names and memories of forebears you hold dear. Bring any family stories or questions about your heritage.',
    sacredSymbol: 'Duafe'
  },
  {
    id: 'dream-interpretation',
    title: 'Traditional Dream Interpretation',
    category: 'guidance',
    shortDesc: 'Explore recurring symbols, animal totems, and nocturnal visitations through African symbolic cosmology and intuitive reflection.',
    fullDesc: 'African traditions view dreams as vital dialogues between the waking consciousness, the ancestral realm, and the deeper subconscious. During this session, we unpack recurring dream motifs, animal archetypes, and nocturnal messages to uncover what your spirit is processing, steering clear of fear-based superstition.',
    duration: '50 minutes',
    format: ['Secure Video Call', 'Confidential Phone'],
    keyBenefits: [
      'Decoding recurring symbolic themes and cultural archetypes',
      'Distinguishing between everyday mental processing and spiritual dreams',
      'Unpacking messages from visiting forebears or guiding energies',
      'Developing a mindful dream-journaling practice'
    ],
    whatToExpect: 'You will narrate the dream in detail. We systematically examine the emotions, colors, directions, entities, and symbols present, placing them within traditional African symbology to draw practical wisdom.',
    preparation: 'Write down the dream immediately upon waking, noting colors, numbers, emotional tones, and any notable symbols.',
    sacredSymbol: 'Nyame Dua'
  },
  {
    id: 'herbal-education',
    title: 'Herbal Heritage Education',
    category: 'botanical',
    shortDesc: 'Explore indigenous African botanical lore, traditional aromatic teas, and sacred plant symbolism for mindful daily living.',
    fullDesc: 'Africa is home to one of the richest botanical pharmacopeias and sacred plant traditions on Earth. This session is strictly educational, dedicated to sharing cultural knowledge about revered African herbs such as Imphepho, Artemisia Afra, Moringa, and Baobab. Learn how ancestors revered plants as gifts of the earth for aroma, atmosphere, and holistic mindfulness.',
    duration: '60 minutes',
    format: ['Secure Video Call', 'Sanctuary Visit'],
    keyBenefits: [
      'Cultural understanding of traditional African sacred botanicals',
      'Knowledge of traditional aromatic steams, smudges, and teas',
      'Ethical harvesting practices and conservation awareness',
      'Safe, non-medical integration of mindful botanical rituals'
    ],
    whatToExpect: 'An interactive educational presentation and discussion covering botanical identification, cultural significance, historical preparation methods, and respectful stewardship.',
    preparation: 'Bring questions about traditional plants. Note: This session is strictly educational and does not provide medical diagnoses or prescriptions.',
    sacredSymbol: 'Asase Ye Duru'
  },
  {
    id: 'cultural-rituals',
    title: 'Cultural Rituals & Cleansing Practices',
    category: 'botanical',
    shortDesc: 'Traditional space clearing, water ceremonies, and intentional blessing rites to mark new beginnings and spiritual transitions.',
    fullDesc: 'Rituals provide an anchor during monumental life shifts—moving to a new home, beginning a union, processing a loss, or stepping into adulthood. We facilitate and instruct on age-old African ceremonial practices incorporating pure water, gentle aromatic incense, earth, and spoken blessings to restore harmony.',
    duration: '90 minutes',
    format: ['Sanctuary Visit', 'Guided Virtual Ceremony'],
    keyBenefits: [
      'Clearing stagnant or heavy atmospheres in living or workspace',
      'Sacred ceremonies to mark life transitions, marriages, or grief',
      'Traditional blessings of gratitude and renewal',
      'Creating intentional physical spaces that foster calm and peace'
    ],
    whatToExpect: 'Instruction and execution of traditional ceremonial protocols, including spoken invocations of light, libation of clean water to the earth, and fragrant botanical smoke.',
    preparation: 'Clarify your primary intention for the ritual (e.g. gratitude, closure, new home blessing) and wear comfortable, light-colored clothing.',
    sacredSymbol: 'Gye Nyame'
  },
  {
    id: 'mindful-meditation',
    title: 'Mindful Meditation & Breathwork',
    category: 'mindfulness',
    shortDesc: 'Grounding meditation guided by rhythmic African percussion, ancestral breath awareness, and restorative silence.',
    fullDesc: 'Modern life often pulls our energy upward and outward, creating scattered thoughts and chronic tension. Our ancestral meditation sessions draw upon the grounding cadence of African drums, earth-centered breath awareness, and deep silence to bring your consciousness back into your body and spirit.',
    duration: '45 minutes',
    format: ['Secure Video Call', 'Sanctuary Visit'],
    keyBenefits: [
      'Alleviation of daily mental fatigue and nervous tension',
      'Cultivation of steady, centered presence in times of pressure',
      'Connection to primal acoustic rhythms and gentle breath cadence',
      'Simple breathing techniques you can practice independently anywhere'
    ],
    whatToExpect: 'Begins with gentle posture alignment, followed by guided breathing exercises, resonant rhythm meditation, and five minutes of restorative stillness.',
    preparation: 'Sit in a quiet space on a floor cushion or supportive chair. Loosen any restrictive clothing.',
    sacredSymbol: 'Dwennimmen'
  }
];

export const BOTANICALS: BotanicalItem[] = [
  {
    id: 'imphepho',
    name: 'Imphepho (African Sage)',
    traditionalName: 'Helichrysum odoratissimum',
    botanicalName: 'Helichrysum species',
    region: 'Southern & Eastern Africa',
    significance: 'Considered among the most revered ceremonial plants in African traditional spiritual practice.',
    traditionalUse: 'Burned as a fragrant incense to clear negative atmospheres, induce calm contemplation, and invite peaceful ancestral communion.',
    wisdomNote: 'Emits a warm, sweet, herbaceous smoke known to quiet racing thoughts and settle an uneasy home.'
  },
  {
    id: 'artemisia-afra',
    name: 'Umhlonyane (African Wormwood)',
    traditionalName: 'Lengana / Umhlonyane',
    botanicalName: 'Artemisia afra',
    region: 'Southern & East Africa',
    significance: 'Known as a stalwart protector in indigenous homesteads, prized for its bitter, invigorating aroma.',
    traditionalUse: 'Traditionally used in aromatic herbal steams to clear the senses and invigorate tired spirits after long journeys.',
    wisdomNote: 'Taught by elders as a reminder of resilience: bitter on the tongue, but deeply strengthening to the spirit.'
  },
  {
    id: 'baobab',
    name: 'Baobab (Tree of Life)',
    traditionalName: 'Mbuyu / Adansonia digitata',
    botanicalName: 'Adansonia digitata',
    region: 'Sub-Saharan African Savannas',
    significance: 'The majestic sentinel tree beneath which village councils, elder councils, and spiritual assemblies meet.',
    traditionalUse: 'Bark fibers for sacred cords; dried fruit pulp mixed into cooling refreshments during long pilgrimages.',
    wisdomNote: 'Symbolizes immense patience, ancient memory, and the power of water held in drought.'
  },
  {
    id: 'moringa',
    name: 'Moringa (Nebedaye)',
    traditionalName: 'Nebedaye (Never Die)',
    botanicalName: 'Moringa oleifera',
    region: 'Western & Central Africa',
    significance: 'Revered as the miraculous green gift of the earth that flourishes in harsh arid climates.',
    traditionalUse: 'Leaves dried for nourishing daily tea infusions and cultural rituals of vitality and perseverance.',
    wisdomNote: 'Reminds us that true vitality comes from adaptability and giving generously to all around us.'
  },
  {
    id: 'luban',
    name: 'Luban (African Frankincense)',
    traditionalName: 'Luban / Olibanum',
    botanicalName: 'Boswellia sacra / frereana',
    region: 'Horn of Africa (Somalia, Ethiopia)',
    significance: 'Harvested from sacred desert trees, traded for millennia across ancestral spiritual routes.',
    traditionalUse: 'Burned on glowing charcoal during sacred ceremonies, morning prayers, and deep meditative stillness.',
    wisdomNote: 'Its citrusy-pine smoke rises straight upward, symbolizing pure intentions rising to the heavens.'
  },
  {
    id: 'rooibos',
    name: 'Red Bush (Rooibos)',
    traditionalName: 'Aspalathus linearis',
    botanicalName: 'Aspalathus linearis',
    region: 'Cederberg Region, South Africa',
    significance: 'Gift of the indigenous Khoisan peoples, naturally free of stimulants and deeply calming.',
    traditionalUse: 'Brewed as an evening communion tea to foster gentle storytelling, family warmth, and rest.',
    wisdomNote: 'A gentle teacher of rest: nourishment does not need to agitate or rush the heartbeat.'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't1',
    author: 'Amara K.',
    location: 'Nairobi / London',
    serviceTaken: 'Ancestral Heritage Consultation',
    period: 'Consulted in 2026',
    quote: 'During a deeply confusing period of career burnout and relocation, Gifted Roots offered a space of profound dignity. There was zero judgment, no superstitious fear-mongering—just honest ancestral grounding that helped me reconnect with where I come from. I left with calm and clarity.'
  },
  {
    id: 't2',
    author: 'Kwame O.',
    location: 'Accra / Atlanta',
    serviceTaken: 'Traditional Dream Interpretation',
    period: 'Consulted in 2026',
    quote: 'I had been waking up distressed for weeks by recurring dreams of water and elders. The session systematically decoded the symbols through our cultural cosmology. It felt thoughtful, measured, and completely demystified. It gave me the emotional insight I needed to make peace with my father.'
  },
  {
    id: 't3',
    author: 'Thandiwe M.',
    location: 'Johannesburg',
    serviceTaken: 'Herbal Heritage & Mindful Breathwork',
    period: 'Consulted in 2025',
    quote: 'What struck me most was the rigorous ethics and respect for modern medical boundaries. The healer explained traditional plant lore and breath rhythm with such reverence. The morning practices I learned continue to keep me calm and centered through corporate stress.'
  },
  {
    id: 't4',
    author: 'Malick S.',
    location: 'Dakar / Paris',
    serviceTaken: 'Traditional Spiritual Guidance',
    period: 'Consulted in 2026',
    quote: 'In a world full of hollow online spiritual trends, Gifted Roots is genuine. You can feel the weight of genuine elder wisdom and quiet integrity. They remind you that your choices belong to you, but the ancestors walk behind you. Invaluable guidance.'
  }
];

export const PHILOSOPHY_PILLARS = [
  {
    title: 'Sankofa: Honoring Our Roots',
    description: 'We believe you cannot know where you are going until you know who held the soil before you. Our guidance anchors modern questions into enduring ancestral wisdom.'
  },
  {
    title: 'Asase Ye Duru: Harmony with Nature',
    description: 'The Earth is not an object to consume, but a living sacred mother. Our herbal and ritual teachings observe seasonal cycles, respectful harvesting, and environmental reciprocity.'
  },
  {
    title: 'Human Agency & Discernment',
    description: 'A genuine spiritual guide never disempowers the seeker. We do not make decisions for you; we shine a lantern upon the paths so you may walk forward with free will and courage.'
  },
  {
    title: 'Ethical Integrity & Honest Boundaries',
    description: 'We hold strict confidentiality, never promise supernatural riches or medical cures, and actively encourage our community to value qualified medical and psychological care alongside spiritual balance.'
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-ancestor-what',
    category: 'ancestor',
    question: 'What is an Ancestor Consultation and why is it central to African spiritual tradition?',
    answer: 'In African cosmology, our ancestors are not distant historical figures; they represent our living roots and spiritual foundation. When we feel directionless, anxious, or ungrounded, it often reflects a disconnection from our ancestral lineage. An ancestor consultation provides a structured, sacred space to acknowledge your forebears, explore inherited spiritual patterns, and receive grounded ancestral perspective on current life dilemmas.',
    keyTakeaway: 'Re-establishes a conscious, reverent connection with your lineage to foster belonging, clarity, and peace of mind.',
    relevantServiceId: 'ancestral-consultation'
  },
  {
    id: 'faq-ancestor-unknown',
    category: 'ancestor',
    question: 'What if I was adopted, do not know my family tree, or come from the diaspora?',
    answer: 'Spiritual lineage is held in the blood, the spirit, and the earth—not merely on paper archives. In traditional African thought, your ancestors recognize you unconditionally regardless of whether you know their names, locations, or dates. During our consultation, we work with universal ancestral remembrance rites that honor both the known and the unnamed forebears who survived so you could live.',
    keyTakeaway: 'No genealogical documentation is required; ancestral reverence meets you wherever you are in your journey.',
    relevantServiceId: 'ancestral-consultation'
  },
  {
    id: 'faq-ancestor-trauma',
    category: 'ancestor',
    question: 'How do we handle painful family history or estrangement with relatives who passed?',
    answer: 'Ancestral consultations are grounded in compassionate discernment, not blind idolization. We acknowledge that human beings carry flaws and wounds. In traditional rites, we honor the benevolent, wise elder consciousness of our bloodline while establishing healthy spiritual boundaries with personal trauma. The objective is healing and peace for you, not reopening old wounds.',
    keyTakeaway: 'We honor the protective wisdom of the lineage while upholding healthy spiritual boundaries.',
    relevantServiceId: 'ancestral-consultation'
  },
  {
    id: 'faq-guidance-vs-psychic',
    category: 'guidance',
    question: 'How does Traditional Spiritual Guidance differ from fortune-telling or psychic readings?',
    answer: 'Gifted Roots does not practice sensational fortune-telling, sensational card tricks, or fatalistic future predictions. Traditional African guidance is reflective, intuitive, and philosophical—drawing from centuries-old proverbs, elemental balance, and deep listening. We examine the root causes of spiritual disharmony and illuminate options, but your free will, agency, and choices always remain entirely in your hands.',
    keyTakeaway: 'We illuminate your path through wisdom and active listening, never disempowering you with rigid prophecies.',
    relevantServiceId: 'spiritual-guidance'
  },
  {
    id: 'faq-guidance-religion',
    category: 'guidance',
    question: 'Can I seek traditional spiritual guidance if I practice Christianity, Islam, or have no formal religion?',
    answer: 'Yes. Reverence for ancestors and living in harmony with nature are universal human roots that predate sectarian divisions. We welcome seekers from all faiths and philosophical backgrounds. Our consultations do not require converting or renouncing your beliefs; they complement your existing spiritual journey by grounding you in cultural wisdom, family remembrance, and inner stillness.',
    keyTakeaway: 'Traditional guidance is welcoming and inclusive; it respects your faith and focuses on personal harmony.',
    relevantServiceId: 'spiritual-guidance'
  },
  {
    id: 'faq-guidance-cures',
    category: 'guidance',
    question: 'Do you promise supernatural outcomes, financial windfall spells, or medical cures?',
    answer: 'Never. In strict accordance with our traditional ethics and professional care boundaries, Gifted Roots refuses any form of superstitious exploitation. We never promise lottery winnings, guaranteed romantic coercion, or medical cures for physical or psychiatric illnesses. We view spiritual work as personal cultivation, emotional grounding, and ethical living.',
    keyTakeaway: 'Absolute ethical commitment: no superstitious promises, no miracle cures, and full honesty.',
    relevantServiceId: 'spiritual-guidance'
  },
  {
    id: 'faq-prep-session',
    category: 'ethics-prep',
    question: 'How should I prepare my mind and space for a consultation session?',
    answer: 'Ensure you are in a quiet, private room with no interruptions. We suggest drinking a glass of pure water beforehand, lighting a simple natural candle or botanical stick if available, and taking five minutes of slow, conscious breathing. Bring a notebook to record reflections, and approach the session with an open, honest heart.',
    keyTakeaway: 'A quiet room, undisturbed time, hydration, and a reflective mindset create the optimal sanctuary.',
    relevantServiceId: 'spiritual-guidance'
  },
  {
    id: 'faq-prep-virtual',
    category: 'ethics-prep',
    question: 'Are virtual video and phone consultations as effective as in-person sanctuary visits?',
    answer: 'In African traditional philosophy, spirit and prayerful intention transcend physical miles. Our virtual consultations follow the exact same reverent protocols, invocations of peaceful presence, and unhurried dialogue as an in-person meeting. Seekers throughout the African continent, Europe, the Americas, and Asia regularly experience deep grounding in our remote sessions.',
    keyTakeaway: 'Distance does not limit spiritual focus; virtual sessions follow complete sacred protocols.',
    relevantServiceId: 'spiritual-guidance'
  },
  {
    id: 'faq-prep-privacy',
    category: 'ethics-prep',
    question: 'How are my personal disclosures and spiritual inquiries protected?',
    answer: 'Traditional spiritual consultations are shielded by the ancient oath of sanctuary confidentiality. We treat your personal stories, family names, dreams, and life struggles with inviolable sanctity. We never record sessions without express consent, and we never share or sell contact details to third parties.',
    keyTakeaway: 'Your personal reflections and lineage discussions are guarded with strict, confidential trust.',
    relevantServiceId: 'ancestral-consultation'
  }
];
