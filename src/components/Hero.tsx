import { PhoneIcon, MessageSquareIcon, ArrowRightIcon, ShieldCheckIcon, CheckCircle2Icon, CalendarIcon } from './CriticalIcons';
import { BUSINESS_INFO, COMPLIANCE_CALENDAR } from '../data/businessData';

export default function Hero() {
  const topUpcomingDueDates = COMPLIANCE_CALENDAR.slice(0, 5);

  return (
    <section className="relative pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden bg-white">
      {/* Background decorative watermark */}
      <div aria-hidden="true" className="absolute top-0 right-0 -z-10 translate-x-1/4 -translate-y-1/4 opacity-[0.03] pointer-events-none select-none">
        <span className="text-[480px] font-display font-bold text-blue-900">SJ</span>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Hero Copy & Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-mono font-semibold tracking-wider uppercase shadow-2xs">
              <ShieldCheckIcon className="w-3.5 h-3.5 text-blue-600" />
              <span>Registered Tax &amp; Accounting Practice | Opera House Mumbai</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-display font-bold text-slate-900 leading-[1.08] tracking-tight">
              Compliance handled. <br />
              <span className="text-blue-600 italic">Growth</span>, uninterrupted.
              <span className="sr-only"> - Sajid Tax Consultant in Opera House, Mumbai</span>
            </h1>

            {/* Subtitle / Lead text */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              From day-to-day bookkeeping to GST filing, ITR computation to company registration, Gumasta licences to PF withdrawals - one expert team in Opera House, Mumbai for every number your business answers for.
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                <span>Book Free Consultation</span>
                <ArrowRightIcon className="w-4 h-4" />
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg border border-slate-300 text-slate-700 bg-white hover:bg-slate-50 font-bold text-sm transition-all shadow-xs"
              >
                <PhoneIcon className="w-4 h-4 text-blue-600" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>

              <a
                href={`https://wa.me/${BUSINESS_INFO.phoneClean.replace('+', '')}?text=Hello%20Sajid%20Tax%20Consultant,%20I%20would%20like%20to%20consult%20regarding%20tax%20and%20accounting%20services.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-lg border border-emerald-200 text-emerald-800 bg-emerald-50 hover:bg-emerald-100 font-semibold text-xs transition-all shadow-2xs"
              >
                <MessageSquareIcon className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp Chat</span>
              </a>
            </div>

            {/* Metric Strips */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200 max-w-lg">
              <div>
                <div className="text-2xl sm:text-3xl font-mono font-bold text-blue-700">10+</div>
                <div className="text-[11px] sm:text-xs font-mono text-slate-500 uppercase tracking-wider mt-0.5">
                  Core Services
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-mono font-bold text-slate-900">100%</div>
                <div className="text-[11px] sm:text-xs font-mono text-slate-500 uppercase tracking-wider mt-0.5">
                  Filing Accuracy
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-mono font-bold text-emerald-600">Mon-Sat</div>
                <div className="text-[11px] sm:text-xs font-mono text-slate-500 uppercase tracking-wider mt-0.5">
                  11 AM - 7 PM
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Live Compliance Ledger & Official Seal Card */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            {/* The Floating Seal */}
            <div className="absolute -top-7 -right-4 sm:-right-6 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white border-2 border-blue-600 shadow-xl flex items-center justify-center text-center p-2 z-20 rotate-[-12deg] hover:rotate-0 transition-transform duration-300">
              <div className="border border-dashed border-blue-300 w-full h-full rounded-full flex flex-col items-center justify-center font-mono text-[9px] sm:text-[10px] text-blue-800 font-bold uppercase tracking-tight leading-tight">
                <span>Reliable</span>
                <span className="text-xs sm:text-sm font-black text-blue-600 my-0.5">ACCURATE</span>
                <span>Timely</span>
              </div>
            </div>

            {/* Ledger Card */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-lg p-6 sm:p-7 relative z-10 overflow-hidden">
              <div className="flex items-center justify-between border-b border-dashed border-slate-200 pb-4 mb-4">
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-wider font-semibold text-blue-700 block">
                    Statutory Compliance Calendar
                  </span>
                  <h3 className="font-display font-bold text-lg text-slate-900 mt-0.5">
                    Critical Indian Tax Due Dates
                  </h3>
                </div>
                <div className="p-2 rounded-lg bg-blue-50 text-blue-700 border border-blue-200">
                  <CalendarIcon className="w-5 h-5" />
                </div>
              </div>

              {/* Rows */}
              <div className="space-y-3">
                {topUpcomingDueDates.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between text-xs sm:text-sm py-2 border-b border-dashed border-slate-100 last:border-0 hover:bg-slate-50 px-2 rounded-md transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${item.importance === 'urgent' ? 'bg-red-500' : 'bg-emerald-500'}`}></span>
                      <span className="font-medium text-slate-800">{item.title}</span>
                    </div>
                    <span className={`font-mono text-xs font-semibold px-2 py-0.5 rounded ${
                      item.importance === 'urgent' 
                        ? 'bg-red-50 text-red-700 border border-red-200' 
                        : 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                    }`}>
                      {item.dueDate}
                    </span>
                  </div>
                ))}
              </div>

              {/* Card Footer notice */}
              <div className="mt-5 pt-4 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span className="flex items-center gap-1.5 text-emerald-600 font-semibold">
                  <CheckCircle2Icon className="w-3.5 h-3.5" />
                  <span>Tracked Automatically</span>
                </span>
                <a href="#due-dates" className="text-blue-700 hover:text-blue-800 underline font-semibold">
                  View Full Schedule &rarr;
                </a>
              </div>
            </div>

            {/* Card Backdrop shadow styling */}
            <div className="absolute inset-0 bg-slate-100 rounded-xl -rotate-1 translate-x-2 translate-y-2 -z-0 border border-slate-200"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
