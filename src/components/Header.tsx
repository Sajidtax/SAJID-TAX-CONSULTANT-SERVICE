import { useState } from 'react';
import { PhoneIcon, MessageSquareIcon, MenuIcon, XIcon, MapPinIcon } from './CriticalIcons';
import { BUSINESS_INFO } from '../data/businessData';
import { getOfficeStatus } from '../utils/timeHelper';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const status = getOfficeStatus();

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#e2e8f0] shadow-xs transition-all">
      <a href="#services" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:p-3 focus:bg-[#1d4ed8] focus:text-white focus:font-bold focus:rounded-md shadow-lg">
        Skip to main content
      </a>
      {/* Top micro-bar for quick contact & office status */}
      <div className="bg-[#f8fafc] text-[#475569] text-xs py-2 px-4 border-b border-[#e2e8f0] hidden sm:block">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${status.isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-slate-400'}`}></span>
              <span className={`font-mono text-[11px] uppercase tracking-wider font-semibold ${status.isOpen ? 'text-[#065f46]' : 'text-[#334155]'}`}>
                {status.text}
              </span>
              <span className="text-[#475569] text-[11px]">({status.detail})</span>
            </div>
            <div className="flex items-center gap-1.5 text-[#334155] text-[11px]">
              <MapPinIcon className="w-3.5 h-3.5 text-[#1d4ed8]" />
              <span>Opera House, Mumbai - 400004</span>
            </div>
          </div>
          <div className="flex items-center gap-5 font-mono text-[11px]">
            <a
              href={`mailto:${BUSINESS_INFO.email}`}
              className="text-[#334155] hover:text-[#1d4ed8] transition-colors flex items-center gap-1"
            >
              <span>{BUSINESS_INFO.email}</span>
            </a>
            <span className="text-[#cbd5e1]" aria-hidden="true">|</span>
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="font-semibold text-[#1d4ed8] hover:text-[#1e40af] transition-colors flex items-center gap-1"
            >
              <PhoneIcon className="w-3 h-3" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-4">
        {/* Brand identity */}
        <a href="#" aria-label="Sajid Tax Consultant Service Home" className="flex items-center gap-3 group text-left">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden bg-black border-2 border-amber-500/50 shadow-md ring-1 ring-amber-400/20 shrink-0 flex items-center justify-center group-hover:border-amber-400 group-hover:scale-105 transition-all">
            <img
              src="/images/logo-128.png"
              alt="Sajid Tax Consultant Official Logo"
              className="w-full h-full object-cover"
              width="44"
              height="44"
              loading="eager"
            />
          </div>
          <div>
            <div className="font-display font-bold text-lg sm:text-xl text-[#0f172a] group-hover:text-[#1d4ed8] leading-tight tracking-tight">
              {BUSINESS_INFO.name}
            </div>
            <div className="text-[11px] text-[#1d4ed8] font-semibold tracking-wide uppercase">
              Opera House, Mumbai
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-7 text-[14.5px] font-medium text-[#475569]">
          <a href="#services" className="hover:text-[#1d4ed8] transition-colors py-1">Services</a>
          <a href="#due-dates" className="hover:text-[#1d4ed8] transition-colors py-1">Due Dates</a>
          <a href="#process" className="hover:text-[#1d4ed8] transition-colors py-1">How It Works</a>
          <a href="#why-us" className="hover:text-[#1d4ed8] transition-colors py-1">Why Us</a>
          <a href="#office" className="hover:text-[#1d4ed8] transition-colors py-1">Office &amp; Hours</a>
          <a href="#faq" className="hover:text-[#1d4ed8] transition-colors py-1">FAQ</a>
        </nav>

        {/* Single Sleek Desktop CTA */}
        <div className="hidden lg:flex items-center">
          <a
            href={`https://wa.me/${BUSINESS_INFO.phoneClean.replace('+', '')}?text=Hello%20Sajid%20Tax%20Consultant,%20I%20would%20like%20to%20book%20a%20consultation.`}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider rounded-lg bg-[#1d4ed8] text-white hover:bg-[#1e40af] transition-all shadow-xs"
          >
            <span>Book Consultation</span>
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 text-[#0f172a] lg:hidden hover:bg-[#f8fafc] rounded-lg border border-[#e2e8f0]"
          aria-label="Toggle Navigation"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {mobileMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div id="mobile-menu" className="lg:hidden border-t border-[#e2e8f0] bg-white px-5 py-5 space-y-4 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-[#e2e8f0] text-xs">
            <span className="font-mono text-[#475569]">Hours: Mon-Sat 11 AM - 7 PM</span>
            <span className={`font-mono font-bold ${status.isOpen ? 'text-[#047857]' : 'text-[#475569]'}`}>
              {status.text}
            </span>
          </div>

          <div className="flex flex-col space-y-2 text-base font-medium">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-2 text-[#0f172a] hover:text-[#1d4ed8] hover:bg-[#f8fafc] rounded-md"
            >
              Services (10 Essential Offerings)
            </a>
            <a
              href="#due-dates"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-2 text-[#0f172a] hover:text-[#1d4ed8] hover:bg-[#f8fafc] rounded-md"
            >
              Compliance Calendar &amp; Due Dates
            </a>
            <a
              href="#process"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-2 text-[#0f172a] hover:text-[#1d4ed8] hover:bg-[#f8fafc] rounded-md"
            >
              Our Process
            </a>
            <a
              href="#why-us"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-2 text-[#0f172a] hover:text-[#1d4ed8] hover:bg-[#f8fafc] rounded-md"
            >
              Why Choose Us
            </a>
            <a
              href="#office"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-2 text-[#0f172a] hover:text-[#1d4ed8] hover:bg-[#f8fafc] rounded-md"
            >
              Opera House Office &amp; Hours
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-2 text-[#0f172a] hover:text-[#1d4ed8] hover:bg-[#f8fafc] rounded-md"
            >
              Frequently Asked Questions (FAQ)
            </a>
          </div>

          <div className="pt-3 border-t border-[#e2e8f0] flex flex-col gap-2.5">
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="flex items-center justify-center gap-2 py-3 bg-[#1d4ed8] text-white hover:bg-[#1e40af] font-bold text-sm rounded-lg shadow-sm"
            >
              <PhoneIcon className="w-4 h-4" />
              <span>Call: {BUSINESS_INFO.phone}</span>
            </a>
            <a
              href={`https://wa.me/${BUSINESS_INFO.phoneClean.replace('+', '')}?text=Hello%20Sajid%20Tax%20Consultant,%20I%20need%20help%20with%20tax%20and%20accounting.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 bg-[#047857] hover:bg-[#065f46] text-white font-semibold text-sm rounded-lg shadow-sm border border-emerald-700/20"
            >
              <MessageSquareIcon className="w-4 h-4" />
              <span>WhatsApp Direct Message</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
