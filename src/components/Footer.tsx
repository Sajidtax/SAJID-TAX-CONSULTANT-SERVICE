import { Phone, Mail, MapPin, Clock, ArrowUp, QrCode } from 'lucide-react';
import { BUSINESS_INFO, SERVICES_LIST } from '../data/businessData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0F172A] text-slate-400 pt-16 pb-12 border-t border-slate-800 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border-2 border-blue-500 bg-blue-950 text-blue-300 font-display font-bold text-lg flex items-center justify-center">
                SJ
              </div>
              <div>
                <div className="font-display font-bold text-xl text-white">
                  {BUSINESS_INFO.name}
                </div>
                <div className="font-mono text-xs text-blue-400 font-semibold tracking-wider uppercase">
                  Opera House, Mumbai
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Trusted Accounting, Tax preparation, GST filing, ROC company incorporation, Gumasta, and PF claims consultancy practice operating from Opera House, Mumbai.
            </p>

            <div className="pt-2 text-xs font-mono text-blue-300">
              {BUSINESS_INFO.tagline}
            </div>
          </div>

          {/* Col 2: Services Quick Links (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="font-mono text-xs uppercase font-bold text-white tracking-wider border-b border-slate-800 pb-2">
              Our 10 Core Services
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-1.5 text-xs text-slate-300">
              {SERVICES_LIST.map((s) => (
                <a
                  key={s.id}
                  href="#services"
                  className="hover:text-blue-400 transition-colors py-1 block"
                >
                  {s.title}
                </a>
              ))}
            </div>
          </div>

          {/* Col 3: Direct Contact & Office Hours (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="font-mono text-xs uppercase font-bold text-white tracking-wider border-b border-slate-800 pb-2">
              Office &amp; Contact
            </h3>
            
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address.full}</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phoneClean}`} className="font-mono font-bold text-white hover:text-blue-400">
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="font-mono text-white hover:text-blue-400 break-all">
                  {BUSINESS_INFO.email}
                </a>
              </div>

              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Mon-Sat: 11:00 AM - 7:00 PM</div>
                  <div className="text-slate-400">Sunday: Closed</div>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1 font-mono text-[11px] text-blue-400">
                <QrCode className="w-3.5 h-3.5" />
                <span>UPI ID: {BUSINESS_INFO.upiId}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright & back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-mono">
          <div>
            &copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. All Rights Reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="hidden md:inline text-slate-400">
              Opera House, Mumbai - 400004
            </span>
            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top of page"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-blue-400" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
