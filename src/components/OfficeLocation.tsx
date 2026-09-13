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
    <section id="office" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase text-blue-700 tracking-widest">
            <span className="w-6 h-[1.5px] bg-blue-600"></span>
            <span>Physical Office &amp; Working Hours</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight">
            Visit Our Opera House Office
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Centrally situated near Prasad Chamber at Opera House in South Mumbai. You are welcome to visit for in-person consultations during office hours or connect digitally.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Office Address Details Card */}
          <div className="lg:col-span-7 bg-white rounded-xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
            
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-200 text-blue-700 flex items-center justify-center shrink-0 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-mono text-xs font-bold text-blue-700 uppercase tracking-wider">
                    Registered Office Address
                  </div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900 mt-1">
                    {BUSINESS_INFO.name}
                  </h3>
                </div>
              </div>

              <button
                onClick={handleCopyAddress}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-mono font-medium hover:bg-slate-100 text-slate-700 transition-all shrink-0"
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
            <div className="bg-slate-50 p-4 sm:p-5 rounded-xl border border-slate-200 space-y-1.5 text-sm sm:text-base text-slate-700">
              <p className="font-bold text-slate-900">{BUSINESS_INFO.address.line1}</p>
              <p>{BUSINESS_INFO.address.line2}</p>
              <p className="font-semibold text-blue-700">{BUSINESS_INFO.address.area} - {BUSINESS_INFO.address.pincode}</p>
              <p className="text-xs font-mono text-slate-500">{BUSINESS_INFO.address.state}</p>
            </div>

            {/* Local Areas Served for Google Local SEO */}
            <div className="pt-1">
              <div className="text-[11px] font-mono uppercase text-slate-500 font-semibold mb-2">
                Serving Clients Across South Mumbai &amp; Maharashtra:
              </div>
              <div className="flex flex-wrap gap-1.5 text-[11px] font-mono text-slate-600">
                {["Opera House (400004)", "Charni Road", "Girgaon", "Grant Road", "Lamington Road", "Marine Lines", "Kalbadevi", "Churchgate / Fort"].map((area) => (
                  <span key={area} className="px-2 py-0.5 rounded-md bg-slate-100 border border-slate-200 text-slate-600">
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
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm transition-all shadow-xs"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions (Google Maps)</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-xs sm:text-sm transition-all shadow-2xs"
              >
                <Phone className="w-4 h-4 text-blue-600" />
                <span>Call: {BUSINESS_INFO.phone}</span>
              </a>
            </div>

            {/* Digital UPI Payment Details from Screenshot */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700 shrink-0">
                  <QrCode className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase text-slate-500 font-bold">
                    Official Consultation UPI ID
                  </div>
                  <div className="font-mono text-xs sm:text-sm font-bold text-slate-900">
                    {BUSINESS_INFO.upiId}
                  </div>
                </div>
              </div>

              <button
                onClick={handleCopyUpi}
                aria-label="Copy consultation UPI ID"
                className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-300 text-xs font-mono font-semibold hover:bg-slate-100 text-slate-700 transition-all self-start sm:self-auto shadow-2xs"
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
          <div className="lg:col-span-5 bg-white rounded-xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
            
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 border border-blue-200 flex items-center justify-center">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-slate-900">
                    Working Hours
                  </h3>
                  <p className="text-xs text-slate-500">Official Operational Timings</p>
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
                      ? 'bg-slate-50 border border-slate-100 text-slate-700' 
                      : 'bg-slate-50 border border-slate-100 text-red-600 font-semibold'
                  }`}
                >
                  <span className="font-medium">{item.day}</span>
                  <span className={item.isOpen ? 'text-slate-900 font-bold' : 'text-red-600 uppercase font-bold'}>
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>

            {/* Contact Note */}
            <div className="pt-2 border-t border-slate-100 text-xs text-slate-500 space-y-1">
              <p className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-blue-600" />
                <span>Email: <a href={`mailto:${BUSINESS_INFO.email}`} className="font-mono font-semibold text-blue-700 hover:underline">{BUSINESS_INFO.email}</a></span>
              </p>
              <p className="text-[11px] text-slate-400">
                * Sunday appointments can be arranged upon prior phone confirmation for urgent tax filing deadlines.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
