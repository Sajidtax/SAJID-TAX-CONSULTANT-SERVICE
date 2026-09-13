import { useState } from 'react';
import { PhoneIcon, MessageSquareIcon, MenuIcon, XIcon, MapPinIcon } from './CriticalIcons';
import { BUSINESS_INFO } from '../data/businessData';
import { getOfficeStatus } from '../utils/timeHelper';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const status = getOfficeStatus();

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs transition-all">
      <a href="#services" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:p-3 focus:bg-blue-700 focus:text-white focus:font-bold focus:rounded-md shadow-lg">
        Skip to main content
      </a>
      {/* Top micro-bar for quick contact & office status */}
      <div className="bg-slate-50 text-slate-700 text-xs py-2 px-4 border-b border-slate-200 hidden sm:block">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${status.isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-slate-400'}`}></span>
              <span className={`font-mono text-[11px] uppercase tracking-wider font-semibold ${status.isOpen ? 'text-emerald-700' : 'text-slate-600'}`}>
                {status.text}
              </span>
              <span className="text-slate-500 text-[11px]">({status.detail})</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-600 text-[11px]">
              <MapPinIcon className="w-3.5 h-3.5 text-blue-600" />
              <span>Opera House, Mumbai - 400004</span>
            </div>
          </div>
          <div className="flex items-center gap-5 font-mono text-[11px]">
            <a
              href={`mailto:${BUSINESS_INFO.email}`}
              className="text-slate-600 hover:text-blue-700 transition-colors flex items-center gap-1"
            >
              <span>{BUSINESS_INFO.email}</span>
            </a>
            <span className="text-slate-300">|</span>
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="font-semibold text-blue-700 hover:text-blue-800 transition-colors flex items-center gap-1"
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
          <div className="w-10 h-10 rounded-full border border-blue-200 bg-blue-50 flex items-center justify-center font-display font-bold text-blue-700 text-lg shadow-xs group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
            SJ
          </div>
          <div>
            <div className="font-display font-bold text-lg sm:text-xl text-slate-900 group-hover:text-blue-900 leading-tight tracking-tight">
              {BUSINESS_INFO.name}
            </div>
            <div className="text-[11px] text-blue-700 font-semibold tracking-wide uppercase">
              Opera House, Mumbai
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-7 text-[14.5px] font-medium text-slate-600">
          <a href="#services" className="hover:text-blue-700 transition-colors py-1">Services</a>
          <a href="#due-dates" className="hover:text-blue-700 transition-colors py-1">Due Dates</a>
          <a href="#process" className="hover:text-blue-700 transition-colors py-1">How It Works</a>
          <a href="#why-us" className="hover:text-blue-700 transition-colors py-1">Why Us</a>
          <a href="#office" className="hover:text-blue-700 transition-colors py-1">Office &amp; Hours</a>
          <a href="#faq" className="hover:text-blue-700 transition-colors py-1">FAQ</a>
          <a href="#contact" className="hover:text-blue-700 transition-colors py-1">Contact</a>
        </nav>

        {/* Fast Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={`https://wa.me/${BUSINESS_INFO.phoneClean.replace('+', '')}?text=Hello%20Sajid%20Tax%20Consultant,%20I%20need%20assistance%20with%20accounting%20and%20tax%20services.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition-all shadow-xs border border-emerald-700/20"
          >
            <MessageSquareIcon className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>
          <a
            href={`tel:${BUSINESS_INFO.phoneClean}`}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all shadow-xs"
          >
            <PhoneIcon className="w-3.5 h-3.5" />
            <span>Call {BUSINESS_INFO.phone}</span>
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 text-slate-700 lg:hidden hover:bg-slate-100 rounded-lg border border-slate-200"
          aria-label="Toggle Navigation"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {mobileMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div id="mobile-menu" className="lg:hidden border-t border-slate-200 bg-white px-5 py-5 space-y-4 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 text-xs">
            <span className="font-mono text-slate-500">Hours: Mon-Sat 11 AM - 7 PM</span>
            <span className={`font-mono font-bold ${status.isOpen ? 'text-emerald-600' : 'text-slate-600'}`}>
              {status.text}
            </span>
          </div>

          <div className="flex flex-col space-y-2 text-base font-medium">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-2 text-slate-800 hover:text-blue-700 hover:bg-slate-50 rounded-md"
            >
              Services (10 Essential Offerings)
            </a>
            <a
              href="#due-dates"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-2 text-slate-800 hover:text-blue-700 hover:bg-slate-50 rounded-md"
            >
              Compliance Calendar &amp; Due Dates
            </a>
            <a
              href="#process"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-2 text-slate-800 hover:text-blue-700 hover:bg-slate-50 rounded-md"
            >
              Our Process
            </a>
            <a
              href="#why-us"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-2 text-slate-800 hover:text-blue-700 hover:bg-slate-50 rounded-md"
            >
              Why Choose Us
            </a>
            <a
              href="#office"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-2 text-slate-800 hover:text-blue-700 hover:bg-slate-50 rounded-md"
            >
              Opera House Office &amp; Hours
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-2 text-slate-800 hover:text-blue-700 hover:bg-slate-50 rounded-md"
            >
              Frequently Asked Questions (FAQ)
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-2 text-slate-800 hover:text-blue-700 hover:bg-slate-50 rounded-md"
            >
              Contact &amp; Callback
            </a>
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="flex items-center justify-center gap-2 py-3 bg-blue-600 text-white hover:bg-blue-700 font-bold text-sm rounded-lg shadow-sm"
            >
              <PhoneIcon className="w-4 h-4" />
              <span>Call: {BUSINESS_INFO.phone}</span>
            </a>
            <a
              href={`https://wa.me/${BUSINESS_INFO.phoneClean.replace('+', '')}?text=Hello%20Sajid%20Tax%20Consultant,%20I%20need%20help%20with%20tax%20and%20accounting.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm rounded-lg shadow-sm border border-emerald-700/20"
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
