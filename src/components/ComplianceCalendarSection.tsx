import { useState } from 'react';
import { AlertCircle, ShieldAlert, ArrowUpRight } from 'lucide-react';
import { COMPLIANCE_CALENDAR, BUSINESS_INFO } from '../data/businessData';

export default function ComplianceCalendarSection() {
  const [selectedCategory, setSelectedCategory] = useState<'ALL' | 'GST' | 'ITR' | 'TDS' | 'PF'>('ALL');

  const filteredDeadlines = selectedCategory === 'ALL'
    ? COMPLIANCE_CALENDAR
    : COMPLIANCE_CALENDAR.filter(item => item.category === selectedCategory);

  return (
    <section id="due-dates" className="py-20 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase text-blue-700 tracking-widest">
            <span className="w-6 h-[1.5px] bg-blue-600"></span>
            <span>Statutory Compliance Calendar</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight">
            Upcoming Deadlines &amp; Filing Timelines
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Avoid heavy government penalties, late filing fees, and blocked Input Tax Credit (ITC). We track every deadline on your behalf.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {(['ALL', 'GST', 'ITR', 'TDS', 'PF'] as const).map((cat) => (
            <button
              key={cat}
              aria-pressed={selectedCategory === cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white font-bold shadow-xs'
                  : 'bg-slate-50 border border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
            >
              {cat === 'ALL' ? 'All Deadlines' : `${cat} Filings`}
            </button>
          ))}
        </div>

        {/* Deadlines Table/Grid */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="divide-y divide-slate-100">
            {filteredDeadlines.map((item) => (
              <div
                key={item.id}
                className="p-5 sm:p-6 hover:bg-slate-50 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="space-y-1 max-w-xl">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-mono text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                      {item.category}
                    </span>
                    <span className="text-xs font-mono text-slate-500">
                      {item.frequency}
                    </span>
                    {item.importance === 'urgent' && (
                      <span className="flex items-center gap-1 font-mono text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-red-50 text-red-700 border border-red-200">
                        <AlertCircle className="w-3 h-3" />
                        Critical
                      </span>
                    )}
                  </div>
                  <h3 className="font-display font-bold text-base sm:text-lg text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center sm:items-end md:flex-col justify-between shrink-0 gap-3 border-t md:border-t-0 pt-3 md:pt-0 border-dashed border-slate-200">
                  <div className="text-left md:text-right">
                    <div className="text-[10px] font-mono uppercase text-slate-500 font-semibold">
                      Statutory Due Date
                    </div>
                    <div className="text-sm sm:text-base font-mono font-bold text-blue-700">
                      {item.dueDate}
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/${BUSINESS_INFO.phoneClean.replace('+', '')}?text=${encodeURIComponent(`Hello Sajid Sir, I need help filing ${item.title} before the due date.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold px-3.5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors shadow-xs"
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
        <div className="mt-6 p-4 rounded-xl bg-amber-50/80 border border-amber-200 flex items-start gap-3 text-xs text-amber-900">
          <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div>
            <strong className="text-amber-950 font-bold">Notice on Late Fees &amp; Interest:</strong> Non-filing or late filing of GST attracts daily fees up to ₹50/day plus 18% annual interest. Delayed TDS payments incur 1.5% interest per month. Contact our Opera House office at <a href={`tel:${BUSINESS_INFO.phoneClean}`} className="underline font-bold text-blue-700">{BUSINESS_INFO.phone}</a> to avoid penal actions.
          </div>
        </div>

      </div>
    </section>
  );
}
