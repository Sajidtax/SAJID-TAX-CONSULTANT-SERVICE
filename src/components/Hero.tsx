import { useState } from 'react';
import { PhoneIcon, MessageSquareIcon, ArrowRightIcon, ShieldCheckIcon, CheckCircle2Icon, CalendarIcon } from './CriticalIcons';
import { BUSINESS_INFO, COMPLIANCE_CALENDAR } from '../data/businessData';
import { getOfficeStatus } from '../utils/timeHelper';

export default function Hero() {
  const topUpcomingDueDates = COMPLIANCE_CALENDAR.slice(0, 4);
  const status = getOfficeStatus();
  const [selectedQuickService, setSelectedQuickService] = useState('ITR Filing');

  const quickServices = [
    { label: "ITR Filing", query: "ITR e-Filing (Salaried / Business)" },
    { label: "GST Return", query: "GST Registration & Monthly Returns" },
    { label: "Tax Notice", query: "Income Tax or GST Notice Resolution" },
    { label: "Gumasta", query: "BMC Gumasta / Shop & Establishment Licence" },
    { label: "PF Claim", query: "PF Withdrawal & Rejection Settlement" },
  ];

  const getQuickWhatsAppUrl = (serviceName: string) => {
    return `https://wa.me/${BUSINESS_INFO.phoneClean.replace('+', '')}?text=${encodeURIComponent(
      `Hello Sajid Sir, I would like to consult with you regarding: "${serviceName}". Please share the required documents and fee details.`
    )}`;
  };

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-[#0F172A] text-white">
      {/* Background Photography & Multilayer Ambient Lighting */}
      <div className="absolute inset-0 z-0">
        <picture className="w-full h-full hidden sm:block">
          <img
            src="/images/tax-hero-bg.jpg"
            alt="Sajid Tax Consultant reviewing financial paperwork and tax calculations in office"
            className="w-full h-full object-cover object-center brightness-[0.75]"
            width="1376"
            height="768"
            loading="eager"
            fetchPriority="high"
          />
        </picture>
        {/* Subtle royal navy gradient with soft warm lighting */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/95 to-[#0F172A]/75 sm:from-[#0F172A]/95 sm:via-[#0F172A]/85 sm:to-[#0F172A]/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-[#0F172A]/40"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Human Editorial Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Eyebrow Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs font-mono font-bold tracking-wider uppercase backdrop-blur-md shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true"></span>
              <span>Personal Tax &amp; Statutory Advisory</span>
              <span className="text-blue-400/50 hidden sm:inline" aria-hidden="true">|</span>
              <span className="text-blue-100 hidden sm:inline text-[11px] font-normal">Opera House, Mumbai (400004)</span>
            </div>

            {/* Editorial Human Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-display font-bold text-white leading-[1.12] tracking-tight">
                <span className="text-white block">Taxes Handled Right.</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-100 to-white block mt-1">
                  Zero Stress. No Penalties.
                </span>
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-[#1d4ed8] to-blue-400 rounded-full"></div>
            </div>

            {/* Grounded Human Subtitle */}
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-xl font-normal">
              Direct personal representation by <strong>Consultant Sajid</strong>. Serving salaried taxpayers, Opera House diamond traders, Kalbadevi merchants, and Indian businesses since 2010. Every return is personally audited before submission.
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 pt-2">
              <a
                href={`https://wa.me/${BUSINESS_INFO.phoneClean.replace('+', '')}?text=${encodeURIComponent(
                  `Hello Sajid Sir, I would like to consult with you regarding ${selectedQuickService}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 px-6 rounded-xl bg-[#047857] hover:bg-[#065f46] text-white font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 whitespace-nowrap"
              >
                <MessageSquareIcon className="w-4 h-4 text-white" />
                <span>WhatsApp Consultant Sajid</span>
              </a>

              <a
                href="#tax-calculator"
                className="h-12 px-5 rounded-xl bg-[#1d4ed8] hover:bg-[#1e40af] text-white font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 whitespace-nowrap"
              >
                <span>Compare Tax Regimes</span>
                <ArrowRightIcon className="w-4 h-4" />
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="h-12 px-4 rounded-xl border border-white/20 text-white bg-white/10 hover:bg-white/20 backdrop-blur-md font-semibold text-sm flex items-center justify-center gap-2 transition-all shadow-xs hover:-translate-y-0.5 whitespace-nowrap"
              >
                <PhoneIcon className="w-4 h-4 text-blue-300" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
            </div>

            {/* Real Proof Metrics Strip */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/15 max-w-lg">
              <div>
                <div className="text-2xl sm:text-3xl font-mono font-bold text-blue-300">14+</div>
                <div className="text-[11px] sm:text-xs font-mono text-slate-300 uppercase tracking-wider mt-0.5">
                  Years Experience
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-mono font-bold text-white">8,500+</div>
                <div className="text-[11px] sm:text-xs font-mono text-slate-300 uppercase tracking-wider mt-0.5">
                  Filings Done
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-mono font-bold text-emerald-400">100%</div>
                <div className="text-[11px] sm:text-xs font-mono text-slate-300 uppercase tracking-wider mt-0.5">
                  Accuracy Record
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Live Chamber Status & Fast Consultation Launcher */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            
            {/* The Main Card */}
            <div className="bg-white text-[#0f172a] rounded-2xl border border-white/90 shadow-2xl p-6 sm:p-7 relative z-10 overflow-hidden">
              
              {/* Header: Live Office Availability */}
              <div className="flex items-center justify-between border-b border-[#e2e8f0] pb-4 mb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className={`w-2.5 h-2.5 rounded-full ${status.isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`}></span>
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#0f172a]">
                      {status.text}
                    </span>
                  </div>
                  <div className="text-xs text-[#475569] mt-0.5 font-mono">
                    Chamber: 11:00 AM - 7:00 PM (Mon-Sat)
                  </div>
                </div>

                <div className="px-2.5 py-1 rounded-md bg-blue-50 border border-blue-200 text-[#1d4ed8] text-[11px] font-mono font-bold">
                  Opera House
                </div>
              </div>

              {/* Fast Consultation Selector */}
              <div className="space-y-3 mb-5">
                <div className="text-xs font-mono font-bold uppercase text-[#334155] tracking-wide">
                  Select What You Need Help With:
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {quickServices.map((qs) => (
                    <button
                      key={qs.label}
                      type="button"
                      onClick={() => setSelectedQuickService(qs.query)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all border ${
                        selectedQuickService === qs.query
                          ? 'bg-[#1d4ed8] text-white border-[#1d4ed8] shadow-xs'
                          : 'bg-[#f8fafc] text-[#334155] border-[#e2e8f0] hover:bg-slate-100'
                      }`}
                    >
                      {qs.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Live Indian Compliance Due Dates Ticker */}
              <div className="space-y-2 mb-5">
                <div className="flex items-center justify-between text-xs font-mono text-[#334155] font-bold">
                  <span>Upcoming Statutory Deadlines:</span>
                  <a href="#due-dates" className="text-[#1d4ed8] hover:underline font-semibold">View all &rarr;</a>
                </div>

                <div className="space-y-1.5">
                  {topUpcomingDueDates.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between text-xs py-1.5 px-2.5 rounded-lg bg-[#f8fafc] border border-[#e2e8f0]"
                    >
                      <div className="flex items-center gap-2 truncate">
                        <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${item.importance === 'urgent' ? 'bg-red-500' : 'bg-emerald-500'}`}></span>
                        <span className="font-medium text-[#0f172a] truncate">{item.title}</span>
                      </div>
                      <span className="font-mono text-[11px] font-bold text-[#1d4ed8] shrink-0 ml-2">
                        {item.dueDate}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct 1-Click Launch Button */}
              <a
                href={getQuickWhatsAppUrl(selectedQuickService)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-[#047857] hover:bg-[#065f46] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-xs"
              >
                <MessageSquareIcon className="w-4 h-4 text-white" />
                <span>Start Direct Inquiry for {selectedQuickService.split(' ')[0]}</span>
              </a>

              <div className="mt-3 flex items-center justify-between text-[11px] text-[#475569] font-mono">
                <span className="flex items-center gap-1 text-[#065f46] font-semibold">
                  <CheckCircle2Icon className="w-3.5 h-3.5" />
                  <span>No Junior Intermediaries</span>
                </span>
                <span>Response in &lt; 15 mins</span>
              </div>

            </div>

            {/* Subtle background glow */}
            <div className="absolute inset-0 bg-blue-600/20 rounded-2xl -rotate-1 translate-x-2 translate-y-2 -z-0 border border-blue-400/20 backdrop-blur-xs"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
