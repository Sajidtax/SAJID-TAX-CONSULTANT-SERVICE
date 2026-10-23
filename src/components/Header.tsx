import { useState } from 'react';
import { PhoneIcon, MenuIcon, XIcon, MapPinIcon, SparklesIcon } from './CriticalIcons';
import { BUSINESS_INFO } from '../data/businessData';
import { getOfficeStatus } from '../utils/timeHelper';
import AiTaxAssistantModal from './AiTaxAssistantModal';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aiModalOpen, setAiModalOpen] = useState(false);
  const status = getOfficeStatus();

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-[#e2e8f0] shadow-xs transition-all sticky-header">
      <a href="#services" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:p-3 focus:bg-[#1d4ed8] focus:text-white focus:font-bold focus:rounded-md shadow-lg">
        Skip to main content
      </a>
      
      {/* Top micro-bar for quick contact & office status */}
      <div className="bg-[#f8fafc] text-[#475569] text-xs py-2 px-4 border-b border-[#e2e8f0] hidden sm:block">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${status.isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`}></span>
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        {/* Brand identity */}
        <a href="#" aria-label="Sajid Tax Consultant Service Home" className="flex items-center gap-3 group text-left min-w-0">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden bg-white border border-[#cbd5e1] shadow-xs shrink-0 flex items-center justify-center p-0.5 group-hover:border-[#1d4ed8] group-hover:scale-105 transition-all">
            <img
              src="/images/logo-128.png"
              alt="Sajid Tax Consultant Official Logo"
              className="w-full h-full object-contain"
              width="44"
              height="44"
              loading="eager"
            />
          </div>
          <div className="min-w-0">
            <div className="font-display font-bold text-sm sm:text-base md:text-lg text-[#0f172a] group-hover:text-[#1d4ed8] leading-tight tracking-tight truncate">
              {BUSINESS_INFO.name}
            </div>
            <div className="text-[10px] sm:text-[11px] text-[#1d4ed8] font-mono font-semibold tracking-wide uppercase truncate">
              Opera House, Mumbai • Est. 2010
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-5 text-xs font-semibold text-[#334155]">
          <a href="#services" className="hover:text-[#1d4ed8] transition-colors py-1">Tax Services</a>
          <a href="#services" className="hover:text-[#1d4ed8] transition-colors py-1 flex items-center gap-1">
            <span>Web Solutions</span>
            <span className="px-1.5 py-0.2 rounded text-[9px] font-mono bg-blue-100 text-[#1d4ed8] font-bold">TECH</span>
          </a>
          <a href="#tax-calculator" className="hover:text-[#1d4ed8] transition-colors py-1 flex items-center gap-1">
            <span>Calculator</span>
            <span className="px-1.5 py-0.2 rounded text-[9px] font-mono bg-emerald-100 text-[#065f46] font-bold">NEW</span>
          </a>
          <a href="#consultant-profile" className="hover:text-[#1d4ed8] transition-colors py-1">Meet Sajid</a>
          <a href="#due-dates" className="hover:text-[#1d4ed8] transition-colors py-1">Tax Calendar</a>
          <a href="#why-us" className="hover:text-[#1d4ed8] transition-colors py-1">Why Us</a>
          <a href="#reviews" className="hover:text-[#1d4ed8] transition-colors py-1">Reviews</a>
          <a href="#office-location" className="hover:text-[#1d4ed8] transition-colors py-1">Chamber &amp; Map</a>
          <a href="#faq" className="hover:text-[#1d4ed8] transition-colors py-1">FAQs</a>
        </nav>

        {/* Header Action Controls */}
        <div className="flex items-center gap-2.5 shrink-0">
          
          {/* Quick AI Advisor Trigger */}
          <button
            onClick={() => setAiModalOpen(true)}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono font-semibold rounded-lg bg-blue-50 text-[#1d4ed8] border border-blue-200 hover:bg-blue-100 transition-all"
            title="Ask Tax Questions to AI Assistant"
          >
            <SparklesIcon className="w-3.5 h-3.5 text-amber-500" />
            <span>AI Tax Guide</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#0f172a] hover:bg-[#f8fafc] hover:text-[#1d4ed8] rounded-lg border border-[#e2e8f0] transition-all flex items-center justify-center shrink-0"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <XIcon className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#e2e8f0] px-6 py-5 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-3 text-sm font-medium text-[#334155]">
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 border-b border-slate-100 hover:text-[#1d4ed8]"
            >
              📋 All Core Services &amp; Licences
            </a>
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 border-b border-slate-100 hover:text-[#1d4ed8]"
            >
              🌐 Sajid Web Solutions &amp; Tech
            </a>
            <a 
              href="#tax-calculator" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 border-b border-slate-100 hover:text-[#1d4ed8] font-bold text-[#1d4ed8] flex items-center justify-between"
            >
              <span>🧮 Old vs New Tax Calculator</span>
              <span className="text-[10px] bg-blue-100 text-[#1d4ed8] px-2 py-0.5 rounded font-mono">POPULAR</span>
            </a>
            <a 
              href="#consultant-profile" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 border-b border-slate-100 hover:text-[#1d4ed8]"
            >
              👤 Meet Consultant Sajid
            </a>
            <a 
              href="#due-dates" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 border-b border-slate-100 hover:text-[#1d4ed8]"
            >
              📅 Indian Tax Due Dates
            </a>
            <a 
              href="#why-us" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 border-b border-slate-100 hover:text-[#1d4ed8]"
            >
              🛡️ Why Choose Sajid
            </a>
            <a 
              href="#reviews" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 border-b border-slate-100 hover:text-[#1d4ed8]"
            >
              ⭐ Client Reviews (4.9 Rating)
            </a>
            <a 
              href="#office-location" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 border-b border-slate-100 hover:text-[#1d4ed8]"
            >
              📍 Opera House Office &amp; Timings
            </a>
            <a 
              href="#faq" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 border-b border-slate-100 hover:text-[#1d4ed8]"
            >
              ❓ Frequently Asked Questions
            </a>

            <div className="pt-3 flex flex-col gap-2">
              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="w-full py-2.5 rounded-lg border border-[#e2e8f0] text-[#0f172a] font-bold text-center text-xs flex items-center justify-center gap-2 hover:bg-slate-50"
              >
                <PhoneIcon className="w-3.5 h-3.5 text-[#1d4ed8]" />
                <span>Call Directly: {BUSINESS_INFO.phone}</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setAiModalOpen(true);
                }}
                className="w-full py-2.5 rounded-lg bg-blue-50 text-[#1d4ed8] border border-blue-200 font-bold text-xs flex items-center justify-center gap-2"
              >
                <SparklesIcon className="w-3.5 h-3.5 text-amber-500" />
                <span>Ask AI Tax Guide</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* AI Tax Assistant Modal */}
      <AiTaxAssistantModal
        isOpen={aiModalOpen}
        onClose={() => setAiModalOpen(false)}
      />
    </header>
  );
}
