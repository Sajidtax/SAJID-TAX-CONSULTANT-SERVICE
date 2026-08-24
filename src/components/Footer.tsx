import { Phone, Mail, MapPin, Clock, ArrowUp, QrCode } from 'lucide-react';
import { BUSINESS_INFO, SERVICES_LIST } from '../data/businessData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A0A0A] text-[#A3A3A3] pt-16 pb-12 border-t border-[#D4AF37]/30 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#ffffff12]">
          
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border-2 border-[#D4AF37] bg-[#141414] text-[#D4AF37] font-display font-bold text-lg flex items-center justify-center">
                SJ
              </div>
              <div>
                <div className="font-display font-bold text-xl text-[#F5F2ED]">
                  {BUSINESS_INFO.name}
                </div>
                <div className="font-mono text-xs text-[#D4AF37] tracking-wider uppercase">
                  Opera House, Mumbai
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#A3A3A3] leading-relaxed">
              Trusted Accounting, Tax preparation, GST filing, ROC company incorporation, Gumasta, and PF claims consultancy practice operating from Opera House, Mumbai.
            </p>

            <div className="pt-2 text-xs font-mono text-[#D4AF37]">
              {BUSINESS_INFO.tagline}
            </div>
          </div>

          {/* Col 2: Services Quick Links (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-mono text-xs uppercase font-bold text-[#F5F2ED] tracking-wider border-b border-[#ffffff12] pb-2">
              Our 10 Core Services
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-1.5 text-xs text-[#D4D4D4]">
              {SERVICES_LIST.map((s) => (
                <a
                  key={s.id}
                  href="#services"
                  className="hover:text-[#D4AF37] transition-colors py-0.5 block"
                >
                  {s.title}
                </a>
              ))}
            </div>
          </div>

          {/* Col 3: Direct Contact & Office Hours (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-mono text-xs uppercase font-bold text-[#F5F2ED] tracking-wider border-b border-[#ffffff12] pb-2">
              Office &amp; Contact
            </h4>
            
            <div className="space-y-2.5 text-xs text-[#D4D4D4]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address.full}</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phoneClean}`} className="font-mono font-bold text-[#F5F2ED] hover:text-[#D4AF37]">
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="font-mono text-[#F5F2ED] hover:text-[#D4AF37] break-all">
                  {BUSINESS_INFO.email}
                </a>
              </div>

              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-[#F5F2ED]">Mon-Sat: 11:00 AM - 7:00 PM</div>
                  <div className="text-[#737373]">Sunday: Closed</div>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1 font-mono text-[11px] text-[#D4AF37]">
                <QrCode className="w-3.5 h-3.5" />
                <span>UPI ID: {BUSINESS_INFO.upiId}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright & back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#737373] font-mono">
          <div>
            &copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. All Rights Reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="hidden md:inline text-[#737373]">
              Opera House, Mumbai - 400004
            </span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#171717] hover:bg-[#262626] border border-[#ffffff15] text-[#F5F2ED] transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#D4AF37]" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
