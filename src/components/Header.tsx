import { useState } from 'react';
import { Phone, MessageSquare, Clock, Menu, X, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import { getOfficeStatus } from '../utils/timeHelper';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const status = getOfficeStatus();

  return (
    <header className="sticky top-0 z-40 bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#ffffff15] transition-all">
      {/* Top micro-bar for quick contact & office status */}
      <div className="bg-[#111111] text-[#E5E5E5] text-xs py-2 px-4 border-b border-white/5 hidden sm:block">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${status.isOpen ? 'bg-emerald-400 animate-pulse' : 'bg-[#D4AF37]'}`}></span>
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#D4AF37]">
                {status.text}
              </span>
              <span className="text-[#A3A3A3] text-[11px]">({status.detail})</span>
            </div>
            <div className="flex items-center gap-1.5 text-[#A3A3A3] text-[11px]">
              <MapPin className="w-3 h-3 text-[#D4AF37]" />
              <span>Opera House, Mumbai - 400004</span>
            </div>
          </div>
          <div className="flex items-center gap-5 font-mono text-[11px]">
            <a
              href={`mailto:${BUSINESS_INFO.email}`}
              className="text-[#D4D4D4] hover:text-[#D4AF37] transition-colors flex items-center gap-1"
            >
              <span>{BUSINESS_INFO.email}</span>
            </a>
            <span className="text-[#404040]">|</span>
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="font-semibold text-[#D4AF37] hover:text-[#E5C158] transition-colors flex items-center gap-1"
            >
              <Phone className="w-3 h-3" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-4">
        {/* Brand identity */}
        <a href="#" className="flex items-center gap-3 group text-left">
          <div className="w-10 h-10 rounded-full border border-[#D4AF37]/60 bg-[#171717] flex items-center justify-center font-display font-bold text-[#D4AF37] text-lg shadow-sm group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#0A0A0A] transition-all">
            SJ
          </div>
          <div>
            <div className="font-display font-bold text-lg sm:text-xl text-[#F5F2ED] leading-tight tracking-tight">
              {BUSINESS_INFO.name}
            </div>
            <div className="text-[11px] text-[#D4AF37] font-semibold tracking-wide uppercase">
              Opera House, Mumbai
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-[14.5px] font-medium text-[#D4D4D4]">
          <a href="#services" className="hover:text-[#D4AF37] transition-colors py-1">Services</a>
          <a href="#due-dates" className="hover:text-[#D4AF37] transition-colors py-1">Due Dates</a>
          <a href="#process" className="hover:text-[#D4AF37] transition-colors py-1">How It Works</a>
          <a href="#why-us" className="hover:text-[#D4AF37] transition-colors py-1">Why Us</a>
          <a href="#office" className="hover:text-[#D4AF37] transition-colors py-1">Office &amp; Hours</a>
          <a href="#contact" className="hover:text-[#D4AF37] transition-colors py-1">Contact</a>
        </nav>

        {/* Fast Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={`https://wa.me/${BUSINESS_INFO.phoneClean.replace('+', '')}?text=Hello%20Sajid%20Tax%20Consultant,%20I%20need%20assistance%20with%20accounting%20and%20tax%20services.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded bg-[#195E3E] text-white hover:bg-[#1f754d] transition-all shadow-sm border border-[#195E3E]/40"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>
          <a
            href={`tel:${BUSINESS_INFO.phoneClean}`}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider rounded bg-[#D4AF37] text-[#0A0A0A] hover:bg-[#E5C158] transition-all shadow-[2px_2px_0px_rgba(255,255,255,0.15)] hover:translate-x-[-1px] hover:translate-y-[-1px]"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call {BUSINESS_INFO.phone}</span>
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 text-[#F5F2ED] lg:hidden hover:bg-[#262626] rounded border border-white/10"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#ffffff15] bg-[#121212] px-5 py-5 space-y-4 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-[#ffffff10] text-xs">
            <span className="font-mono text-[#A3A3A3]">Hours: Mon-Sat 11 AM - 7 PM</span>
            <span className={`font-mono font-bold ${status.isOpen ? 'text-emerald-400' : 'text-[#D4AF37]'}`}>
              {status.text}
            </span>
          </div>

          <div className="flex flex-col space-y-3 text-base font-medium">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-[#F5F2ED] hover:text-[#D4AF37]"
            >
              Services (10 Essential Offerings)
            </a>
            <a
              href="#due-dates"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-[#F5F2ED] hover:text-[#D4AF37]"
            >
              Compliance Calendar &amp; Due Dates
            </a>
            <a
              href="#process"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-[#F5F2ED] hover:text-[#D4AF37]"
            >
              Our Process
            </a>
            <a
              href="#why-us"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-[#F5F2ED] hover:text-[#D4AF37]"
            >
              Why Choose Us
            </a>
            <a
              href="#office"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-[#F5F2ED] hover:text-[#D4AF37]"
            >
              Opera House Office &amp; Hours
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-[#F5F2ED] hover:text-[#D4AF37]"
            >
              Contact &amp; Callback
            </a>
          </div>

          <div className="pt-3 border-t border-[#ffffff10] flex flex-col gap-2.5">
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="flex items-center justify-center gap-2 py-3 bg-[#D4AF37] text-[#0A0A0A] font-bold text-sm rounded shadow-[2px_2px_0px_rgba(255,255,255,0.1)]"
            >
              <Phone className="w-4 h-4" />
              <span>Call: {BUSINESS_INFO.phone}</span>
            </a>
            <a
              href={`https://wa.me/${BUSINESS_INFO.phoneClean.replace('+', '')}?text=Hello%20Sajid%20Tax%20Consultant,%20I%20need%20help%20with%20tax%20and%20accounting.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 bg-[#195E3E] text-white font-semibold text-sm rounded border border-[#195E3E]/40"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Direct Message</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
