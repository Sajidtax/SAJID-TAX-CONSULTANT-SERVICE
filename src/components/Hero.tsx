import { PhoneIcon, MessageSquareIcon, ArrowRightIcon, ShieldCheckIcon, CheckCircle2Icon, CalendarIcon } from './CriticalIcons';
import { BUSINESS_INFO, COMPLIANCE_CALENDAR } from '../data/businessData';

export default function Hero() {
  const topUpcomingDueDates = COMPLIANCE_CALENDAR.slice(0, 5);

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-[#0F172A] text-white">
      {/* Background: Pure CSS Corporate Gradient on Mobile (0KB, Instant FCP/LCP) & Photography on Desktop */}
      <div className="absolute inset-0 z-0">
        <picture className="w-full h-full hidden sm:block">
          <img
            src="/images/tax-hero-bg.jpg"
            alt="Sajid Tax Consultant reviewing financial paperwork and tax calculations in office"
            className="w-full h-full object-cover object-center brightness-[0.80]"
            width="1376"
            height="768"
            loading="eager"
            fetchPriority="high"
          />
        </picture>
        {/* Multilayer gradient: deep corporate navy with subtle ambient radial illumination */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/95 to-[#0F172A]/70 sm:from-[#0F172A]/95 sm:via-[#0F172A]/85 sm:to-[#0F172A]/50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-[#0F172A]/40"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Hero Copy & Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Eyebrow badge from user reference: SAJID TAX CONSULTANT */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs font-mono font-bold tracking-widest uppercase backdrop-blur-md shadow-xs">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" aria-hidden="true"></span>
              <span>SAJID TAX CONSULTANT</span>
              <span className="text-blue-400/50 hidden sm:inline" aria-hidden="true">|</span>
              <span className="text-blue-100 hidden sm:inline text-[11px] font-normal">Opera House, Mumbai</span>
            </div>

            {/* Main Headline: Maximize Your Tax Savings */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-[58px] font-display font-bold text-white leading-[1.08] tracking-tight">
                Maximize Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-100 to-white">Tax Savings</span>.
                <span className="sr-only"> - Sajid Tax Consultant in Opera House, Mumbai</span>
              </h1>
              {/* Subtle decorative divider inspired by reference */}
              <div className="w-24 h-1 bg-gradient-to-r from-[#1d4ed8] to-blue-400 rounded-full"></div>
            </div>

            {/* Subtitle / Lead text */}
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-xl font-normal">
              From GST filing and tax auditing to individual ITR, company incorporation, Gumasta licences, and PF claims — one trusted consultancy in Opera House, Mumbai to protect your business and eliminate penalties.
            </p>

            {/* Quick Action Buttons - Harmonious, uniform height, perfectly aligned */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 pt-2">
              <a
                href={`https://wa.me/${BUSINESS_INFO.phoneClean.replace('+', '')}?text=Hello%20Sajid%20Tax%20Consultant,%20I%20would%20like%20to%20book%20a%20free%20consultation.`}
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 px-6 rounded-lg bg-[#1d4ed8] hover:bg-[#1e40af] text-white font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 whitespace-nowrap"
              >
                <span>Book Free Consultation</span>
                <ArrowRightIcon className="w-4 h-4" />
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="h-12 px-5 rounded-lg border border-white/25 text-white bg-white/10 hover:bg-white/20 backdrop-blur-md font-semibold text-sm flex items-center justify-center gap-2 transition-all shadow-xs hover:-translate-y-0.5 whitespace-nowrap"
              >
                <PhoneIcon className="w-4 h-4 text-blue-300" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>

              <a
                href={`https://wa.me/${BUSINESS_INFO.phoneClean.replace('+', '')}?text=Hello%20Sajid%20Tax%20Consultant,%20I%20would%20like%20to%20consult%20regarding%20tax%20and%20accounting%20services.`}
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 px-5 rounded-lg bg-[#047857] hover:bg-[#065f46] text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all shadow-md hover:-translate-y-0.5 whitespace-nowrap"
              >
                <MessageSquareIcon className="w-4 h-4 text-white" />
                <span>WhatsApp Chat</span>
              </a>
            </div>

            {/* Metric Strips */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/15 max-w-lg">
              <div>
                <div className="text-2xl sm:text-3xl font-mono font-bold text-blue-300">10+</div>
                <div className="text-[11px] sm:text-xs font-mono text-slate-300 uppercase tracking-wider mt-0.5">
                  Core Services
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-mono font-bold text-white">100%</div>
                <div className="text-[11px] sm:text-xs font-mono text-slate-300 uppercase tracking-wider mt-0.5">
                  Filing Accuracy
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-mono font-bold text-emerald-400">Mon-Sat</div>
                <div className="text-[11px] sm:text-xs font-mono text-slate-300 uppercase tracking-wider mt-0.5">
                  11 AM - 7 PM
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Live Compliance Ledger & Official Seal Card */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            {/* The Floating Seal */}
            <div className="absolute -top-7 -right-4 sm:-right-6 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white border-2 border-[#1d4ed8] shadow-2xl flex items-center justify-center text-center p-2 z-20 rotate-[-12deg] hover:rotate-0 transition-transform duration-300">
              <div className="border border-dashed border-blue-300 w-full h-full rounded-full flex flex-col items-center justify-center font-mono text-[9px] sm:text-[10px] text-[#1d4ed8] font-bold uppercase tracking-tight leading-tight">
                <span>Reliable</span>
                <span className="text-xs sm:text-sm font-black text-[#1d4ed8] my-0.5">ACCURATE</span>
                <span>Timely</span>
              </div>
            </div>

            {/* Ledger Card */}
            <div className="bg-white text-[#0f172a] rounded-2xl border border-white/80 shadow-2xl p-6 sm:p-7 relative z-10 overflow-hidden">
              <div className="flex items-center justify-between border-b border-dashed border-[#e2e8f0] pb-4 mb-4">
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-wider font-semibold text-[#1d4ed8] block">
                    Statutory Compliance Calendar
                  </span>
                  <h2 className="font-display font-bold text-lg text-[#0f172a] mt-0.5">
                    Critical Indian Tax Due Dates
                  </h2>
                </div>
                <div className="p-2 rounded-lg bg-blue-50 text-[#1d4ed8] border border-blue-200">
                  <CalendarIcon className="w-5 h-5" />
                </div>
              </div>

              {/* Rows */}
              <div className="space-y-3">
                {topUpcomingDueDates.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between text-xs sm:text-sm py-2 border-b border-dashed border-[#f1f5f9] last:border-0 hover:bg-[#f8fafc] px-2 rounded-md transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${item.importance === 'urgent' ? 'bg-red-500' : 'bg-emerald-500'}`}></span>
                      <span className="font-medium text-[#0f172a]">{item.title}</span>
                    </div>
                    <span className={`font-mono text-xs font-semibold px-2 py-0.5 rounded ${
                      item.importance === 'urgent' 
                        ? 'bg-red-50 text-red-700 border border-red-200' 
                        : 'bg-emerald-50 text-[#065f46] border border-emerald-200'
                    }`}>
                      {item.dueDate}
                    </span>
                  </div>
                ))}
              </div>

              {/* Card Footer notice */}
              <div className="mt-5 pt-4 border-t border-[#e2e8f0] flex items-center justify-between text-xs text-[#475569] font-mono">
                <span className="flex items-center gap-1.5 text-[#065f46] font-semibold">
                  <CheckCircle2Icon className="w-3.5 h-3.5" />
                  <span>Tracked Automatically</span>
                </span>
                <a href="#due-dates" className="text-[#1d4ed8] hover:text-[#1e40af] underline font-semibold">
                  View Full Schedule &rarr;
                </a>
              </div>
            </div>

            {/* Card Backdrop shadow styling */}
            <div className="absolute inset-0 bg-blue-600/20 rounded-2xl -rotate-1 translate-x-2 translate-y-2 -z-0 border border-blue-400/20 backdrop-blur-xs"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
