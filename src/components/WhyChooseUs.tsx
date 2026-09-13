import { ShieldCheck, Clock, UserCheck, Banknote } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export default function WhyChooseUs() {
  const reasons = [
    {
      letter: "A",
      title: "One Firm, Every Filing",
      desc: "Accounting, Auditing, GST, TDS, PF, Gumasta, and MCA registrations all handled under one roof. No juggling between separate agents or fragmented consultants.",
      icon: ShieldCheck
    },
    {
      letter: "B",
      title: "Deadlines Tracked For You",
      desc: "We actively monitor statutory cutoff dates and send timely reminders, protecting your business from late fees, interest, and blocked Input Tax Credit (ITC).",
      icon: Clock
    },
    {
      letter: "C",
      title: "Direct Access to Consultant Sajid",
      desc: "Speak directly with the professional analyzing your accounts and filing your returns - not an outsourced call center or junior ticket desk.",
      icon: UserCheck
    },
    {
      letter: "D",
      title: "Clear, Upfront Pricing & Ethics",
      desc: "Transparent quotes with no hidden charges. Full confidentiality of client financial records with complete integrity.",
      icon: Banknote
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-white border-t border-[#e2e8f0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Heading & Value Prop */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase text-[#1d4ed8] tracking-widest">
              <span className="w-6 h-[1.5px] bg-[#1d4ed8]"></span>
              <span>Why Choose Sajid Tax Consultant</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#0f172a] leading-tight">
              Built for business owners who value accuracy, time, and peace of mind.
            </h2>
            
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              Operating centrally from Opera House, Mumbai, we combine rigorous compliance expertise with personal accountability to empower local enterprises and individual taxpayers.
            </p>

            <div className="p-5 rounded-xl bg-blue-50/70 border border-blue-200 shadow-xs space-y-3">
              <div className="text-xs font-mono font-bold uppercase text-[#047857]">
                Client Commitment
              </div>
              <p className="text-xs sm:text-sm text-[#475569] italic">
                &ldquo;Every return we file is treated with the highest standard of accuracy as if it were our own. Your growth is our responsibility.&rdquo;
              </p>
              <div className="text-xs font-bold text-[#1d4ed8]">
                - Sajid (Tax &amp; Accounting Consultant)
              </div>
            </div>

            <div className="pt-2">
              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#1d4ed8] text-white font-bold text-xs sm:text-sm hover:bg-[#1e40af] transition-all shadow-xs"
              >
                <span>Consult with Sajid: {BUSINESS_INFO.phone}</span>
              </a>
            </div>
          </div>

          {/* Right Column: 4 Distinct Pillars */}
          <div className="lg:col-span-7 space-y-4">
            {reasons.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.letter}
                  className="bg-white rounded-xl p-5 sm:p-6 border border-[#e2e8f0] hover:border-[#1d4ed8] transition-all shadow-xs flex items-start gap-4 group hover:shadow-md"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center font-mono font-bold text-[#1d4ed8] shrink-0 group-hover:bg-[#1d4ed8] group-hover:text-white transition-colors">
                    {item.letter}
                  </div>
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-display font-bold text-base sm:text-lg text-[#0f172a] group-hover:text-[#1d4ed8] transition-colors">
                        {item.title}
                      </h3>
                      <Icon className="w-4 h-4 text-slate-400 group-hover:text-[#1d4ed8] transition-colors" />
                    </div>
                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
