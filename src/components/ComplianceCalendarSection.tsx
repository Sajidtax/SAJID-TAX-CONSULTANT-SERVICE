import { useState } from 'react';
import { Calendar, AlertCircle, Clock, ShieldAlert, ArrowUpRight } from 'lucide-react';
import { COMPLIANCE_CALENDAR, BUSINESS_INFO } from '../data/businessData';

export default function ComplianceCalendarSection() {
  const [selectedCategory, setSelectedCategory] = useState<'ALL' | 'GST' | 'ITR' | 'TDS' | 'PF'>('ALL');

  const filteredDeadlines = selectedCategory === 'ALL'
    ? COMPLIANCE_CALENDAR
    : COMPLIANCE_CALENDAR.filter(item => item.category === selectedCategory);

  return (
    <section id="due-dates" className="py-20 bg-[#0A0A0A] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase text-[#D4AF37] tracking-widest">
            <span className="w-6 h-[1.5px] bg-[#D4AF37]"></span>
            <span>Statutory Compliance Calendar</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#F5F2ED] tracking-tight">
            Upcoming Deadlines &amp; Filing Timelines
          </h2>
          <p className="text-sm sm:text-base text-[#A3A3A3] leading-relaxed">
            Avoid heavy government penalties, late filing fees, and blocked Input Tax Credit (ITC). We track every deadline on your behalf.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {(['ALL', 'GST', 'ITR', 'TDS', 'PF'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded text-xs font-mono font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-[#D4AF37] text-[#0A0A0A] font-bold shadow-sm'
                  : 'bg-[#171717] border border-[#ffffff15] text-[#D4D4D4] hover:bg-[#262626]'
              }`}
            >
              {cat === 'ALL' ? 'All Deadlines' : `${cat} Filings`}
            </button>
          ))}
        </div>

        {/* Deadlines Table/Grid */}
        <div className="bg-[#141414] rounded-lg border border-[#ffffff18] shadow-xl overflow-hidden">
          <div className="divide-y divide-[#ffffff10]">
            {filteredDeadlines.map((item) => (
              <div
                key={item.id}
                className="p-5 sm:p-6 hover:bg-[#1A1A1A] transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="space-y-1 max-w-xl">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-mono text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-[#262626] text-[#D4D4D4] border border-white/5">
                      {item.category}
                    </span>
                    <span className="text-xs font-mono text-[#A3A3A3]">
                      {item.frequency}
                    </span>
                    {item.importance === 'urgent' && (
                      <span className="flex items-center gap-1 font-mono text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-[#9B2C2C]/30 text-red-300 border border-[#9B2C2C]/50">
                        <AlertCircle className="w-3 h-3" />
                        Critical
                      </span>
                    )}
                  </div>
                  <h3 className="font-display font-bold text-base sm:text-lg text-[#F5F2ED]">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A3A3A3] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center sm:items-end md:flex-col justify-between shrink-0 gap-3 border-t md:border-t-0 pt-3 md:pt-0 border-dashed border-[#ffffff15]">
                  <div className="text-left md:text-right">
                    <div className="text-[10px] font-mono uppercase text-[#A3A3A3] font-semibold">
                      Statutory Due Date
                    </div>
                    <div className="text-sm sm:text-base font-mono font-bold text-[#D4AF37]">
                      {item.dueDate}
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/${BUSINESS_INFO.phoneClean.replace('+', '')}?text=${encodeURIComponent(`Hello Sajid Sir, I need help filing ${item.title} before the due date.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold px-3.5 py-2 rounded bg-[#D4AF37] hover:bg-[#E5C158] text-[#0A0A0A] transition-colors shadow-sm"
                  >
                    <span>File with Sajid</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Penalty Warning Callout */}
        <div className="mt-6 p-4 rounded bg-[#171717] border border-[#D4AF37]/40 flex items-start gap-3 text-xs text-[#D4D4D4]">
          <ShieldAlert className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
          <div>
            <strong className="text-[#F5F2ED]">Notice on Late Fees &amp; Interest:</strong> Non-filing or late filing of GST attracts daily fees up to ₹50/day plus 18% annual interest. Delayed TDS payments incur 1.5% interest per month. Contact our Opera House office at <a href={`tel:${BUSINESS_INFO.phoneClean}`} className="underline font-bold text-[#D4AF37]">{BUSINESS_INFO.phone}</a> to avoid penal actions.
          </div>
        </div>

      </div>
    </section>
  );
}
