import { ShieldCheck, Award, MapPin, Phone, MessageSquare, CheckCircle2, UserCheck } from 'lucide-react';
import { BUSINESS_INFO, CONSULTANT_PROFILE } from '../data/businessData';

export default function ConsultantProfile() {
  return (
    <section id="consultant-profile" className="py-20 bg-white border-t border-[#e2e8f0] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase text-[#1d4ed8] tracking-widest">
              <span className="w-6 h-[1.5px] bg-[#1d4ed8]"></span>
              <span>Personal Accountability &amp; Integrity</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#0f172a] tracking-tight">
              Meet Your Consultant: Direct One-on-One Representation
            </h2>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              When you hire a tax consultant, you deserve an experienced professional who personally knows your file — not an outsourced call center or automated algorithm.
            </p>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <div className="px-4 py-2 rounded-xl bg-blue-50 border border-blue-200 text-xs font-mono font-bold text-[#1d4ed8]">
              📍 Opera House, Mumbai (400004)
            </div>
            <div className="px-4 py-2 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-mono font-bold text-[#065f46]">
              ★ 14+ Years Tax Advisory
            </div>
          </div>
        </div>

        {/* Profile Card & Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Consultant Photo & Live Desk Card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-[#f8fafc] rounded-2xl border border-[#e2e8f0] overflow-hidden shadow-sm">
            <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[340px] bg-slate-900 overflow-hidden group">
              <img
                src={CONSULTANT_PROFILE.deskPhoto}
                alt="Consultant Sajid Husain actively filing ITR and GST returns on dual monitors at Opera House office"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                width="768"
                height="512"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/20 to-transparent"></div>
              
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/90 text-white text-[11px] font-mono font-bold uppercase tracking-wider mb-1.5">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                  <span>Principal Advisor</span>
                </div>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                  {CONSULTANT_PROFILE.name}
                </h3>
                <p className="text-xs text-slate-200 font-mono mt-0.5">
                  Senior Tax &amp; Statutory Compliance Practitioner
                </p>
              </div>
            </div>

            {/* Quick Metrics under Photo */}
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-3 gap-2 text-center py-2 border-b border-[#e2e8f0]">
                <div>
                  <div className="font-mono text-xl font-black text-[#1d4ed8]">14+</div>
                  <div className="text-[10px] font-mono text-[#475569] uppercase font-bold">Years Practice</div>
                </div>
                <div>
                  <div className="font-mono text-xl font-black text-[#0f172a]">8,500+</div>
                  <div className="text-[10px] font-mono text-[#475569] uppercase font-bold">Returns Filed</div>
                </div>
                <div>
                  <div className="font-mono text-xl font-black text-[#047857]">100%</div>
                  <div className="text-[10px] font-mono text-[#475569] uppercase font-bold">Filing Accuracy</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
                <a
                  href={`https://wa.me/${BUSINESS_INFO.phoneClean.replace('+', '')}?text=Hello%20Sajid%20Sir,%20I%20would%20like%20to%20consult%20with%20you%20regarding%20my%20tax%20filing.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-4 rounded-xl bg-[#047857] hover:bg-[#065f46] text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-xs"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Sajid Directly</span>
                </a>
                <a
                  href={`tel:${BUSINESS_INFO.phoneClean}`}
                  className="py-2.5 px-4 rounded-xl border border-[#e2e8f0] bg-white hover:bg-slate-100 text-[#0f172a] font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-xs"
                >
                  <Phone className="w-3.5 h-3.5 text-[#1d4ed8]" />
                  <span>Call: {BUSINESS_INFO.phone}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Personal Statement & Core Focus (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-[#e2e8f0] p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-sm">
            
            {/* The Consultant's Direct Letter to Clients */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-[#1d4ed8]" />
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#1d4ed8]">
                  Consultant&apos;s Personal Assurance
                </h4>
              </div>

              <blockquote className="text-base sm:text-lg text-[#0f172a] font-serif leading-relaxed italic border-l-4 border-[#1d4ed8] pl-4 py-1">
                &ldquo;{CONSULTANT_PROFILE.quote}&rdquo;
              </blockquote>

              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Operating from the diamond and financial hub of Opera House, South Mumbai, I assist salaried corporate employees with complex Form 16s, capital gains from equities and real estate, diamond brokers, textile merchants, doctors, and emerging MSME startups. Every client file receives personal scrutiny to claim maximum legal tax rebates without leaving room for scrutiny notices.
              </p>
            </div>

            {/* Core Practice Areas */}
            <div className="space-y-3 pt-4 border-t border-[#e2e8f0]">
              <div className="text-xs font-mono font-bold uppercase text-[#0f172a] tracking-wider">
                Key Advisory Disciplines Managed Personally:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#334155]">
                {CONSULTANT_PROFILE.specialties.map((spec, i) => (
                  <div key={i} className="flex items-start gap-2 bg-[#f8fafc] p-2.5 rounded-lg border border-[#e2e8f0]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#1d4ed8] shrink-0 mt-0.5" />
                    <span className="font-medium">{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* In-Person Chamber Visit Banner */}
            <div className="p-4 rounded-xl bg-blue-50/80 border border-blue-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-white border border-blue-200 text-[#1d4ed8] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#0f172a]">
                    Chamber Walk-in Appointments
                  </div>
                  <div className="text-[11px] text-[#475569]">
                    Mon - Sat (11:00 AM - 7:00 PM) • 3 mins from Charni Road Station
                  </div>
                </div>
              </div>
              <a
                href="#office-location"
                className="text-xs font-bold font-mono text-[#1d4ed8] hover:text-[#1e40af] hover:underline self-start sm:self-auto"
              >
                View Map &amp; Directions &rarr;
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
