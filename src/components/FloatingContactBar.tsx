import { PhoneIcon, MessageSquareIcon } from './CriticalIcons';
import { BUSINESS_INFO } from '../data/businessData';

export default function FloatingContactBar() {
  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.phoneClean.replace('+', '')}?text=Hello%20Sajid%20Tax%20Consultant,%20I%20need%20assistance%20with%20tax%20and%20accounting.`;

  return (
    <>
      {/* Mobile Mode: Sticky Bottom CTA Bar (sm:hidden) */}
      <div className="fixed bottom-0 inset-x-0 z-40 sm:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 px-4 py-2.5 shadow-[0_-4px_16px_rgba(0,0,0,0.08)] flex items-center gap-3">
        {/* Call Trigger (Left CTA) */}
        <a
          href={`tel:${BUSINESS_INFO.phoneClean}`}
          className="flex-1 h-12 flex items-center justify-center gap-2 rounded-xl bg-[#1d4ed8] active:bg-[#1e40af] text-white font-bold text-sm shadow-sm transition-all active:scale-[0.98]"
          aria-label={`Call Sajid Tax Consultant at ${BUSINESS_INFO.phone}`}
        >
          <PhoneIcon className="w-4 h-4" />
          <span>Call Now</span>
        </a>

        {/* WhatsApp Trigger (Right CTA) */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 h-12 flex items-center justify-center gap-2 rounded-xl bg-[#047857] active:bg-[#065f46] text-white font-bold text-sm shadow-sm transition-all active:scale-[0.98]"
          aria-label="Chat with Sajid Tax Consultant on WhatsApp"
        >
          <MessageSquareIcon className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>
      </div>

      {/* Desktop Mode: Pinned Floating Badges (hidden sm:flex) */}
      <div className="hidden sm:flex fixed bottom-6 right-6 z-40 items-center gap-3">
        {/* WhatsApp Desktop Trigger */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-3 rounded-full bg-[#047857] text-white shadow-xl hover:bg-[#065f46] transition-all hover:scale-105 active:scale-95 group font-semibold text-sm border border-emerald-500/30"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquareIcon className="w-5 h-5" />
          <span>WhatsApp Sajid</span>
        </a>

        {/* Call Desktop Trigger */}
        <a
          href={`tel:${BUSINESS_INFO.phoneClean}`}
          className="flex items-center gap-2 px-5 py-3 rounded-full bg-[#1d4ed8] text-white shadow-xl hover:bg-[#1e40af] transition-all hover:scale-105 active:scale-95 group font-bold text-sm border border-blue-500/30"
          aria-label="Call Now"
        >
          <PhoneIcon className="w-5 h-5" />
          <span>Call {BUSINESS_INFO.phone}</span>
        </a>
      </div>
    </>
  );
}
