import { Phone, MessageSquare, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export default function FloatingContactBar() {
  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col sm:flex-row items-end sm:items-center gap-2.5">
      {/* WhatsApp Quick Trigger */}
      <a
        href={`https://wa.me/${BUSINESS_INFO.phoneClean.replace('+', '')}?text=Hello%20Sajid%20Tax%20Consultant,%20I%20need%20assistance%20with%20tax%20and%20accounting.`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-3 rounded-full bg-[#195E3E] text-white shadow-2xl hover:bg-[#1e734c] transition-all hover:scale-105 active:scale-95 group font-semibold text-xs sm:text-sm border border-emerald-400/30"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare className="w-5 h-5" />
        <span className="hidden sm:inline">WhatsApp Sajid</span>
      </a>

      {/* Call Quick Trigger */}
      <a
        href={`tel:${BUSINESS_INFO.phoneClean}`}
        className="flex items-center gap-2 px-4 py-3 rounded-full bg-[#D4AF37] text-[#0A0A0A] shadow-2xl hover:bg-[#E5C158] transition-all hover:scale-105 active:scale-95 group font-bold text-xs sm:text-sm border border-[#D4AF37]/60"
        aria-label="Call Now"
      >
        <Phone className="w-5 h-5" />
        <span className="hidden sm:inline">Call {BUSINESS_INFO.phone}</span>
      </a>
    </div>
  );
}
