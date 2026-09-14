import { useState } from 'react';
import { PhoneIcon, MessageSquareIcon, MenuIcon, XIcon, MapPinIcon, SparklesIcon } from './CriticalIcons';
import { BUSINESS_INFO } from '../data/businessData';
import { getOfficeStatus } from '../utils/timeHelper';
import AiTaxAssistantModal from './AiTaxAssistantModal';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aiModalOpen, setAiModalOpen] = useState(false);
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
      <div className="max-w-6xl mx-auto px-3 sm:px-6 py-2.5 sm:py-3.5 flex items-center justify-between gap-2 sm:gap-4">
        {/* Brand identity */}
        <a href="#" aria-label="Sajid Tax Consultant Service Home" className="flex items-center gap-2 sm:gap-3 group text-left min-w-0">
          <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full overflow-hidden bg-black border-2 border-amber-500/50 shadow-md ring-1 ring-amber-400/20 shrink-0 flex items-center justify-center group-hover:border-amber-400 group-hover:scale-105 transition-all">
            <img
              src="/images/logo-128.png"
              alt="Sajid Tax Consultant Official Logo"
              className="w-full h-full object-cover"
              width="44"
              height="44"
              loading="eager"
            />
          </div>
          <div className="min-w-0">
            <div className="font-display font-bold text-sm sm:text-lg md:text-xl text-[#0f172a] group-hover:text-[#1d4ed8] leading-tight tracking-tight truncate">
              {BUSINESS_INFO.name}
            </div>
            <div className="text-[10px] sm:text-[11px] text-[#1d4ed8] font-semibold tracking-wide uppercase truncate">
              Opera House, Mumbai
            </div>
          </div>
        </a>

        {/* Action Controls: AI Assistant (left) + 3-Row Menu (right) */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          {/* AI Assistant Button (placed directly to the left of 3-row menu) */}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              setAiModalOpen(true);
            }}
            className="group inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 text-xs font-bold rounded-lg bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-700 hover:via-indigo-700 hover:to-violet-700 text-white shadow-xs hover:shadow-md transition-all active:scale-95 shrink-0"
            aria-label="Open AI Tax Assistant"
          >
            <SparklesIcon className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
            <span className="tracking-wide">AI</span>
            <span className="hidden sm:inline font-normal text-blue-100">Tax Help</span>
          </button>

          {/* 3-Row / Hamburger Menu Toggle */}
          <button
            onClick={() => {
              setAiModalOpen(false);
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="p-2 sm:p-2.5 text-[#0f172a] hover:bg-[#f8fafc] hover:text-[#1d4ed8] rounded-lg border border-[#e2e8f0] transition-all flex items-center justify-center shadow-2xs shrink-0"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="navigation-menu"
          >
            {mobileMenuOpen ? <XIcon className="w-5 h-5 sm:w-6 sm:h-6" /> : <MenuIcon className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>
      </div>

      {/* Responsive Navigation Menu (Dropdown for all screen sizes) */}
      {mobileMenuOpen && (
        <div id="navigation-menu" className="border-t border-[#e2e8f0] bg-white shadow-xl animate-in slide-in-from-top duration-200">
          <div className="max-w-6xl mx-auto px-5 sm:px-6 py-6 space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-[#e2e8f0] text-xs">
              <span className="font-mono text-[#475569]">Working Hours: Mon-Sat 11 AM - 7 PM</span>
              <span className={`font-mono font-bold ${status.isOpen ? 'text-[#047857]' : 'text-[#475569]'}`}>
                {status.text}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 text-base font-medium">
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 text-[#0f172a] hover:text-[#1d4ed8] hover:bg-[#f8fafc] rounded-lg border border-transparent hover:border-[#e2e8f0] transition-all flex items-center justify-between group"
              >
                <span>Services (10 Essential Offerings)</span>
                <span className="text-xs font-mono text-[#1d4ed8] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </a>
              <a
                href="#due-dates"
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 text-[#0f172a] hover:text-[#1d4ed8] hover:bg-[#f8fafc] rounded-lg border border-transparent hover:border-[#e2e8f0] transition-all flex items-center justify-between group"
              >
                <span>Compliance Calendar &amp; Due Dates</span>
                <span className="text-xs font-mono text-[#1d4ed8] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </a>
              <a
                href="#process"
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 text-[#0f172a] hover:text-[#1d4ed8] hover:bg-[#f8fafc] rounded-lg border border-transparent hover:border-[#e2e8f0] transition-all flex items-center justify-between group"
              >
                <span>Our Process</span>
                <span className="text-xs font-mono text-[#1d4ed8] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </a>
              <a
                href="#why-us"
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 text-[#0f172a] hover:text-[#1d4ed8] hover:bg-[#f8fafc] rounded-lg border border-transparent hover:border-[#e2e8f0] transition-all flex items-center justify-between group"
              >
                <span>Why Choose Us</span>
                <span className="text-xs font-mono text-[#1d4ed8] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </a>
              <a
                href="#office"
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 text-[#0f172a] hover:text-[#1d4ed8] hover:bg-[#f8fafc] rounded-lg border border-transparent hover:border-[#e2e8f0] transition-all flex items-center justify-between group"
              >
                <span>Opera House Office &amp; Hours</span>
                <span className="text-xs font-mono text-[#1d4ed8] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 text-[#0f172a] hover:text-[#1d4ed8] hover:bg-[#f8fafc] rounded-lg border border-transparent hover:border-[#e2e8f0] transition-all flex items-center justify-between group"
              >
                <span>Frequently Asked Questions (FAQ)</span>
                <span className="text-xs font-mono text-[#1d4ed8] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </a>
            </div>

            <div className="pt-4 border-t border-[#e2e8f0] flex flex-col sm:flex-row items-center gap-3">
              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 py-3 px-5 bg-[#1d4ed8] text-white hover:bg-[#1e40af] font-bold text-sm rounded-lg shadow-sm transition-all"
              >
                <PhoneIcon className="w-4 h-4" />
                <span>Call: {BUSINESS_INFO.phone}</span>
              </a>
              <a
                href={`https://wa.me/${BUSINESS_INFO.phoneClean.replace('+', '')}?text=Hello%20Sajid%20Tax%20Consultant,%20I%20would%20like%20to%20book%20a%20consultation.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 py-3 px-5 bg-[#047857] hover:bg-[#065f46] text-white font-semibold text-sm rounded-lg shadow-sm border border-emerald-700/20 transition-all"
              >
                <MessageSquareIcon className="w-4 h-4" />
                <span>WhatsApp Consultation</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* AI Tax & Compliance Assistant Dialog */}
      <AiTaxAssistantModal isOpen={aiModalOpen} onClose={() => setAiModalOpen(false)} />
    </header>
  );
}
