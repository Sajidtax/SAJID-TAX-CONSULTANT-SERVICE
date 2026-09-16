import { useState } from 'react';
import { MapPin, Copy, Check, Navigation, Phone, QrCode, Mail, Clock } from 'lucide-react';
import { BUSINESS_INFO, WORKING_HOURS } from '../data/businessData';
import { getOfficeStatus } from '../utils/timeHelper';

export default function OfficeLocation() {
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [copiedUpi, setCopiedUpi] = useState(false);
  const status = getOfficeStatus();

  const copyToClipboard = async (text: string, onSuccess: () => void) => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        onSuccess();
      } else {
        // Fallback for older browsers or non-secure contexts
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        textArea.remove();
        onSuccess();
      }
    } catch {
      // Fallback
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      document.execCommand('copy');
      textArea.remove();
      onSuccess();
    }
  };

  const handleCopyAddress = () => {
    copyToClipboard(BUSINESS_INFO.address.full, () => {
      setCopiedAddress(true);
      setTimeout(() => setCopiedAddress(false), 2500);
    });
  };

  const handleCopyUpi = () => {
    copyToClipboard(BUSINESS_INFO.upiId, () => {
      setCopiedUpi(true);
      setTimeout(() => setCopiedUpi(false), 2500);
    });
  };

  return (
    <section id="office" className="py-20 bg-[#f8fafc] border-t border-[#e2e8f0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase text-[#1d4ed8] tracking-widest">
            <span className="w-6 h-[1.5px] bg-[#1d4ed8]"></span>
            <span>Physical Office &amp; Working Hours</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#0f172a] tracking-tight">
            Visit Our Opera House Office
          </h2>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            Centrally situated near Prasad Chamber at Opera House in South Mumbai. You are welcome to visit for in-person consultations during office hours or connect digitally.
          </p>
        </div>

        {/* Real Office & Operations Photography Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12">
          
          {/* Card 1: Wide Office Workstation & Team (Image 2) */}
          <div className="md:col-span-7 bg-white rounded-2xl border border-[#e2e8f0] shadow-sm overflow-hidden flex flex-col group hover:shadow-md transition-all">
            <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
              <picture className="w-full h-full block">
                <source media="(max-width: 640px)" srcSet="/images/office-team-mobile.jpg" />
                <img
                  src="/images/office-team.jpg"
                  alt="Sajid Tax Consultant Service modern Opera House office and accounting team in Mumbai"
                  className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                  width="1024"
                  height="682"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
              <div className="absolute top-3 left-3 bg-[#0F172A]/85 backdrop-blur-md text-white text-[11px] font-mono font-bold px-3 py-1 rounded-full border border-white/20 flex items-center gap-1.5 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true"></span>
                <span>Opera House Consultation Suite</span>
              </div>
            </div>
            <div className="p-5 sm:p-6 space-y-2">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <h3 className="font-display font-bold text-lg sm:text-xl text-[#0f172a]">
                  Corporate Office &amp; Accounting Operations
                </h3>
                <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 text-[#1d4ed8] border border-blue-200">
                  Opera House, Mumbai
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Our dedicated accounting and tax advisory team actively working on GST returns, corporate balance sheets, and company registrations. Centrally situated near Prasad Chamber.
              </p>
            </div>
          </div>

          {/* Card 2: Dedicated Tax Consultant Filing Desk (Image 1) */}
          <div className="md:col-span-5 bg-white rounded-2xl border border-[#e2e8f0] shadow-sm overflow-hidden flex flex-col group hover:shadow-md transition-all">
            <div className="relative aspect-[16/10] md:aspect-auto md:h-[295px] overflow-hidden bg-slate-900">
              <picture className="w-full h-full block">
                <source media="(max-width: 640px)" srcSet="/images/consultant-desk-mobile.jpg" />
                <img
                  src="/images/consultant-desk.jpg"
                  alt="Consultant Sajid actively filing ITR and GST returns on dual monitors"
                  className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                  width="768"
                  height="1024"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
              <div className="absolute top-3 left-3 bg-[#0F172A]/85 backdrop-blur-md text-white text-[11px] font-mono font-bold px-3 py-1 rounded-full border border-white/20 flex items-center gap-1.5 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-blue-400" aria-hidden="true"></span>
                <span>Live e-Filing &amp; Audit Desk</span>
              </div>
            </div>
            <div className="p-5 sm:p-6 space-y-2">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <h3 className="font-display font-bold text-lg sm:text-xl text-[#0f172a]">
                  Direct Tax Preparation &amp; Filing
                </h3>
                <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-[#065f46] border border-emerald-200">
                  100% Verified
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Direct access to Consultant Sajid reviewing books and submitting returns via official Income Tax &amp; GST government portals with zero delay.
              </p>
            </div>
          </div>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Office Address Details Card */}
          <div className="lg:col-span-7 bg-white rounded-xl border border-[#e2e8f0] shadow-sm p-6 sm:p-8 space-y-6">
            
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-200 text-[#1d4ed8] flex items-center justify-center shrink-0 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-mono text-xs font-bold text-[#1d4ed8] uppercase tracking-wider">
                    Registered Office Address
                  </div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-[#0f172a] mt-1">
                    {BUSINESS_INFO.name}
                  </h3>
                </div>
              </div>

              <button
                onClick={handleCopyAddress}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#e2e8f0] text-xs font-mono font-medium hover:bg-[#f8fafc] text-[#475569] transition-all shrink-0"
                title="Copy full address"
                aria-label="Copy full office address"
              >
                {copiedAddress ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-400" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>
            </div>

            {/* Address Breakdown */}
            <div className="bg-[#f8fafc] p-4 sm:p-5 rounded-xl border border-[#e2e8f0] space-y-1.5 text-sm sm:text-base text-[#475569]">
              <p className="font-bold text-[#0f172a]">{BUSINESS_INFO.address.line1}</p>
              <p>{BUSINESS_INFO.address.line2}</p>
              <p className="font-semibold text-[#1d4ed8]">{BUSINESS_INFO.address.area} - {BUSINESS_INFO.address.pincode}</p>
              <p className="text-xs font-mono text-[#64748b]">{BUSINESS_INFO.address.state}</p>
            </div>

            {/* Local Areas Served for Google Local SEO */}
            <div className="pt-1">
              <div className="text-[11px] font-mono uppercase text-[#64748b] font-semibold mb-2">
                Serving Clients Across South Mumbai &amp; Maharashtra:
              </div>
              <div className="flex flex-wrap gap-1.5 text-[11px] font-mono text-[#475569]">
                {["Opera House (400004)", "Charni Road", "Girgaon", "Grant Road", "Lamington Road", "Marine Lines", "Kalbadevi", "Churchgate / Fort"].map((area) => (
                  <span key={area} className="px-2 py-0.5 rounded-md bg-[#f8fafc] border border-[#e2e8f0] text-[#475569]">
                    📍 {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick action buttons for location */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#1d4ed8] hover:bg-[#1e40af] text-white font-bold text-xs sm:text-sm transition-all shadow-xs"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions (Google Maps)</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[#e2e8f0] bg-white hover:bg-[#f8fafc] text-[#0f172a] font-semibold text-xs sm:text-sm transition-all shadow-xs"
              >
                <Phone className="w-4 h-4 text-[#1d4ed8]" />
                <span>Call: {BUSINESS_INFO.phone}</span>
              </a>
            </div>

            {/* Digital UPI Payment Details from Screenshot */}
            <div className="pt-4 border-t border-[#e2e8f0] flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#f8fafc] p-4 rounded-xl border border-[#e2e8f0]">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-[#1d4ed8] shrink-0">
                  <QrCode className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase text-[#64748b] font-bold">
                    Official Consultation UPI ID
                  </div>
                  <div className="font-mono text-xs sm:text-sm font-bold text-[#0f172a]">
                    {BUSINESS_INFO.upiId}
                  </div>
                </div>
              </div>

              <button
                onClick={handleCopyUpi}
                aria-label="Copy consultation UPI ID"
                className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#e2e8f0] text-xs font-mono font-semibold hover:bg-slate-100 text-[#475569] transition-all self-start sm:self-auto shadow-xs"
              >
                {copiedUpi ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700">UPI Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-400" />
                    <span>Copy UPI</span>
                  </>
                )}
              </button>
            </div>

          </div>

          {/* Right Column: Working Hours Matrix Card */}
          <div className="lg:col-span-5 bg-white rounded-xl border border-[#e2e8f0] shadow-sm p-6 sm:p-8 space-y-6">
            
            <div className="flex items-center justify-between border-b border-[#e2e8f0] pb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#1d4ed8] border border-blue-200 flex items-center justify-center">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-[#0f172a]">
                    Working Hours
                  </h3>
                  <p className="text-xs text-[#64748b]">Official Operational Timings</p>
                </div>
              </div>

              <div className={`px-2.5 py-1 rounded-md text-xs font-mono font-bold uppercase border ${
                status.isOpen ? 'bg-emerald-50 text-emerald-800 border-emerald-300' : 'bg-amber-50 text-amber-800 border-amber-300'
              }`}>
                {status.text}
              </div>
            </div>

            {/* Days Schedule List */}
            <div className="space-y-2 text-xs sm:text-sm font-mono">
              {WORKING_HOURS.map((item) => (
                <div
                  key={item.day}
                  className={`flex items-center justify-between py-2 px-3 rounded-lg transition-colors ${
                    item.isOpen 
                      ? 'bg-[#f8fafc] border border-[#e2e8f0] text-[#475569]' 
                      : 'bg-[#f8fafc] border border-[#e2e8f0] text-red-600 font-semibold'
                  }`}
                >
                  <span className="font-medium">{item.day}</span>
                  <span className={item.isOpen ? 'text-[#0f172a] font-bold' : 'text-red-600 uppercase font-bold'}>
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>

            {/* Contact Note */}
            <div className="pt-2 border-t border-[#e2e8f0] text-xs text-[#64748b] space-y-1">
              <p className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#1d4ed8]" />
                <span>Email: <a href={`mailto:${BUSINESS_INFO.email}`} className="font-mono font-semibold text-[#1d4ed8] hover:underline">{BUSINESS_INFO.email}</a></span>
              </p>
              <p className="text-[11px] text-[#94a3b8]">
                * Sunday appointments can be arranged upon prior phone confirmation for urgent tax filing deadlines.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
