import { useState } from 'react';
import { MapPin, Clock, Copy, Check, Navigation, Phone, QrCode, Mail } from 'lucide-react';
import { BUSINESS_INFO, WORKING_HOURS } from '../data/businessData';
import { getOfficeStatus } from '../utils/timeHelper';

export default function OfficeLocation() {
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [copiedUpi, setCopiedUpi] = useState(false);
  const status = getOfficeStatus();

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(BUSINESS_INFO.address.full);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2500);
  };

  const handleCopyUpi = () => {
    navigator.clipboard.writeText(BUSINESS_INFO.upiId);
    setCopiedUpi(true);
    setTimeout(() => setCopiedUpi(false), 2500);
  };

  return (
    <section id="office" className="py-20 bg-[#0D0D0D] border-t border-[#ffffff12]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase text-[#D4AF37] tracking-widest">
            <span className="w-6 h-[1.5px] bg-[#D4AF37]"></span>
            <span>Physical Office &amp; Working Hours</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#F5F2ED] tracking-tight">
            Visit Our Opera House Office
          </h2>
          <p className="text-sm sm:text-base text-[#A3A3A3] leading-relaxed">
            Centrally situated near Prasad Chamber at Opera House in South Mumbai. You are welcome to visit for in-person consultations during office hours or connect digitally.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Office Address Details Card */}
          <div className="lg:col-span-7 bg-[#141414] rounded-lg border border-[#ffffff15] shadow-xl p-6 sm:p-8 space-y-6">
            
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded bg-[#1C1C1C] border border-[#D4AF37]/30 text-[#D4AF37] flex items-center justify-center shrink-0 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-mono text-xs font-bold text-[#D4AF37] uppercase tracking-wider">
                    Registered Office Address
                  </div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-[#F5F2ED] mt-1">
                    {BUSINESS_INFO.name}
                  </h3>
                </div>
              </div>

              <button
                onClick={handleCopyAddress}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded border border-[#ffffff18] text-xs font-mono font-medium hover:bg-[#262626] text-[#D4D4D4] transition-all shrink-0"
                title="Copy full address"
              >
                {copiedAddress ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#A3A3A3]" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>
            </div>

            {/* Address Breakdown */}
            <div className="bg-[#1A1A1A] p-4 sm:p-5 rounded border border-[#ffffff12] space-y-1.5 text-sm sm:text-base text-[#D4D4D4]">
              <p className="font-semibold text-[#F5F2ED]">{BUSINESS_INFO.address.line1}</p>
              <p>{BUSINESS_INFO.address.line2}</p>
              <p className="font-medium text-[#D4AF37]">{BUSINESS_INFO.address.area} - {BUSINESS_INFO.address.pincode}</p>
              <p className="text-xs font-mono text-[#A3A3A3]">{BUSINESS_INFO.address.state}</p>
            </div>

            {/* Quick action buttons for location */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#D4AF37] hover:bg-[#E5C158] text-[#0A0A0A] font-bold text-xs sm:text-sm transition-all shadow-[2px_2px_0px_rgba(255,255,255,0.15)]"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions (Google Maps)</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded border border-[#ffffff18] bg-[#1A1A1A] hover:bg-[#262626] text-[#F5F2ED] font-semibold text-xs sm:text-sm transition-all"
              >
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <span>Call: {BUSINESS_INFO.phone}</span>
              </a>
            </div>

            {/* Digital UPI Payment Details from Screenshot */}
            <div className="pt-4 border-t border-[#ffffff10] flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#1A1A1A] p-4 rounded border border-[#ffffff12]">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-[#262626] border border-[#ffffff18] flex items-center justify-center text-[#D4AF37] shrink-0">
                  <QrCode className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase text-[#A3A3A3] font-bold">
                    Official Consultation UPI ID
                  </div>
                  <div className="font-mono text-xs sm:text-sm font-bold text-[#F5F2ED]">
                    {BUSINESS_INFO.upiId}
                  </div>
                </div>
              </div>

              <button
                onClick={handleCopyUpi}
                className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded bg-[#262626] border border-[#ffffff20] text-xs font-mono font-semibold hover:bg-[#333333] text-[#F5F2ED] transition-all self-start sm:self-auto"
              >
                {copiedUpi ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">UPI Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#A3A3A3]" />
                    <span>Copy UPI</span>
                  </>
                )}
              </button>
            </div>

          </div>

          {/* Right Column: Working Hours Matrix Card */}
          <div className="lg:col-span-5 bg-[#141414] rounded-lg border border-[#ffffff15] shadow-xl p-6 sm:p-8 space-y-6">
            
            <div className="flex items-center justify-between border-b border-[#ffffff12] pb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded bg-[#1C1C1C] text-[#D4AF37] border border-[#D4AF37]/30 flex items-center justify-center">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-[#F5F2ED]">
                    Working Hours
                  </h3>
                  <p className="text-xs text-[#A3A3A3]">Official Operational Timings</p>
                </div>
              </div>

              <div className={`px-2.5 py-1 rounded text-xs font-mono font-bold uppercase border ${
                status.isOpen ? 'bg-emerald-950/80 text-emerald-400 border-emerald-500/30' : 'bg-amber-950/80 text-amber-400 border-amber-500/30'
              }`}>
                {status.text}
              </div>
            </div>

            {/* Days Schedule List */}
            <div className="space-y-2 text-xs sm:text-sm font-mono">
              {WORKING_HOURS.map((item) => (
                <div
                  key={item.day}
                  className={`flex items-center justify-between py-2 px-3 rounded transition-colors ${
                    item.isOpen 
                      ? 'bg-[#1A1A1A] border border-[#ffffff10] text-[#D4D4D4]' 
                      : 'bg-[#1A1A1A] border border-[#ffffff10] text-red-400 font-semibold'
                  }`}
                >
                  <span className="font-medium">{item.day}</span>
                  <span className={item.isOpen ? 'text-[#F5F2ED] font-bold' : 'text-red-400 uppercase'}>
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>

            {/* Contact Note */}
            <div className="pt-2 border-t border-[#ffffff12] text-xs text-[#A3A3A3] space-y-1">
              <p className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Email: <a href={`mailto:${BUSINESS_INFO.email}`} className="font-mono font-semibold text-[#D4AF37] hover:underline">{BUSINESS_INFO.email}</a></span>
              </p>
              <p className="text-[11px] text-[#737373]">
                * Sunday appointments can be arranged upon prior phone confirmation for urgent tax filing deadlines.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
