import { Phone, MessageSquare, ArrowRight, ShieldCheck, CheckCircle2, FileText, Calendar } from 'lucide-react';
import { BUSINESS_INFO, COMPLIANCE_CALENDAR } from '../data/businessData';

export default function Hero() {
  const topUpcomingDueDates = COMPLIANCE_CALENDAR.slice(0, 5);

  return (
    <section className="relative pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden">
      {/* Background decorative watermark */}
      <div className="absolute top-0 right-0 -z-10 translate-x-1/4 -translate-y-1/4 opacity-[0.03] pointer-events-none select-none">
        <span className="text-[480px] font-display font-bold text-[#D4AF37]">SJ</span>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Hero Copy & Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-mono font-semibold tracking-wider uppercase">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Registered Tax &amp; Accounting Practice · Opera House Mumbai</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-display font-bold text-[#F5F2ED] leading-[1.08] tracking-tight">
              Compliance handled. <br />
              <span className="text-[#D4AF37] italic">Growth</span>, uninterrupted.
            </h1>

            {/* Subtitle / Lead text */}
            <p className="text-base sm:text-lg text-[#A3A3A3] leading-relaxed max-w-xl">
              From day-to-day bookkeeping to GST filing, ITR computation to company registration, Gumasta licences to PF withdrawals — one expert team in Opera House, Mumbai for every number your business answers for.
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded bg-[#D4AF37] text-[#0A0A0A] font-bold text-sm hover:bg-[#E5C158] transition-all shadow-[3px_3px_0px_rgba(255,255,255,0.15)] hover:translate-x-[-2px] hover:translate-y-[-2px]"
              >
                <span>Book Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded border border-[#D4AF37]/50 text-[#D4AF37] bg-[#171717] hover:bg-[#D4AF37] hover:text-[#0A0A0A] font-bold text-sm transition-all shadow-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>

              <a
                href={`https://wa.me/${BUSINESS_INFO.phoneClean.replace('+', '')}?text=Hello%20Sajid%20Tax%20Consultant,%20I%20would%20like%20to%20consult%20regarding%20tax%20and%20accounting%20services.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded border border-[#195E3E]/60 text-emerald-400 bg-[#195E3E]/20 hover:bg-[#195E3E] hover:text-white font-semibold text-xs transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Chat</span>
              </a>
            </div>

            {/* Metric Strips */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#ffffff15] max-w-lg">
              <div>
                <div className="text-2xl sm:text-3xl font-mono font-bold text-[#D4AF37]">10+</div>
                <div className="text-[11px] sm:text-xs font-mono text-[#A3A3A3] uppercase tracking-wider mt-0.5">
                  Core Services
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-mono font-bold text-[#F5F2ED]">100%</div>
                <div className="text-[11px] sm:text-xs font-mono text-[#A3A3A3] uppercase tracking-wider mt-0.5">
                  Filing Accuracy
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-mono font-bold text-emerald-400">Mon–Sat</div>
                <div className="text-[11px] sm:text-xs font-mono text-[#A3A3A3] uppercase tracking-wider mt-0.5">
                  11 AM – 7 PM
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Live Compliance Ledger & Official Seal Card */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            {/* The Floating Seal */}
            <div className="absolute -top-7 -right-4 sm:-right-6 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#171717] border-2 border-[#D4AF37] shadow-2xl flex items-center justify-center text-center p-2 z-20 rotate-[-12deg] hover:rotate-0 transition-transform duration-300">
              <div className="border border-dashed border-[#D4AF37]/50 w-full h-full rounded-full flex flex-col items-center justify-center font-mono text-[9px] sm:text-[10px] text-[#D4AF37] font-bold uppercase tracking-tight leading-tight">
                <span>Reliable</span>
                <span className="text-xs sm:text-sm font-black text-amber-300 my-0.5">ACCURATE</span>
                <span>Timely</span>
              </div>
            </div>

            {/* Ledger Card */}
            <div className="bg-[#141414] rounded border border-[#ffffff18] shadow-2xl p-6 sm:p-7 relative z-10 overflow-hidden">
              <div className="flex items-center justify-between border-b border-dashed border-[#ffffff15] pb-4 mb-4">
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-wider font-semibold text-[#D4AF37] block">
                    Statutory Compliance Calendar
                  </span>
                  <h3 className="font-display font-bold text-lg text-[#F5F2ED] mt-0.5">
                    Critical Indian Tax Due Dates
                  </h3>
                </div>
                <div className="p-2 rounded bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/20">
                  <Calendar className="w-5 h-5" />
                </div>
              </div>

              {/* Rows */}
              <div className="space-y-3">
                {topUpcomingDueDates.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between text-xs sm:text-sm py-2 border-b border-dashed border-[#ffffff10] last:border-0 hover:bg-[#1f1f1f] px-2 rounded transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full ${item.importance === 'urgent' ? 'bg-[#C53030]' : 'bg-emerald-400'}`}></span>
                      <span className="font-medium text-[#E5E5E5]">{item.title}</span>
                    </div>
                    <span className={`font-mono text-xs font-semibold px-2 py-0.5 rounded ${
                      item.importance === 'urgent' 
                        ? 'bg-[#9B2C2C]/30 text-red-300 border border-[#9B2C2C]/50' 
                        : 'bg-[#195E3E]/30 text-emerald-300 border border-[#195E3E]/50'
                    }`}>
                      {item.dueDate}
                    </span>
                  </div>
                ))}
              </div>

              {/* Card Footer notice */}
              <div className="mt-5 pt-4 border-t border-[#ffffff15] flex items-center justify-between text-[11px] text-[#A3A3A3] font-mono">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Tracked Automatically</span>
                </span>
                <a href="#due-dates" className="text-[#D4AF37] hover:text-[#E5C158] underline font-semibold">
                  View Full Schedule &rarr;
                </a>
              </div>
            </div>

            {/* Card Backdrop shadow styling */}
            <div className="absolute inset-0 bg-[#1f1f1f] rounded -rotate-1 translate-x-2 translate-y-2 -z-0 border border-[#ffffff10]"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
