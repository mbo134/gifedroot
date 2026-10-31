export interface ServiceItem {
  id: string;
  title: string;
  category: 'guidance' | 'botanical' | 'mindfulness';
  shortDesc: string;
  fullDesc: string;
  duration: string;
  format: string[];
  keyBenefits: string[];
  whatToExpect: string;
  preparation: string;
  sacredSymbol: string;
}

export interface BotanicalItem {
  id: string;
  name: string;
  traditionalName: string;
  botanicalName: string;
  region: string;
  category?: 'ceremonial' | 'abundance';
  significance: string;
  traditionalUse: string;
  wisdomNote: string;
  placementTip?: string;
  energyQuality?: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  location: string;
  serviceTaken: string;
  period: string;
}

export interface BookingRequest {
  id: string;
  createdAt: string;
  serviceId: string;
  serviceTitle: string;
  format: 'virtual' | 'phone' | 'sanctuary';
  preferredDate: string;
  preferredTimeSlot: string;
  fullName: string;
  email: string;
  whatsappNumber: string;
  timezone: string;
  intentions: string;
  consentMedical: boolean;
  consentPrivacy: boolean;
  status: 'Received' | 'Confirmed' | 'Pending Review';
}

export interface FaqItem {
  id: string;
  category: 'guidance' | 'ancestor' | 'ethics-prep';
  question: string;
  answer: string;
  keyTakeaway: string;
  relevantServiceId?: string;
}
