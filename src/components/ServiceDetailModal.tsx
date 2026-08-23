import { useEffect } from 'react';
import { X, CheckCircle, FileText, Clock, Phone, MessageSquare } from 'lucide-react';
import { ServiceItem } from '../types';
import { BUSINESS_INFO } from '../data/businessData';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
}

export default function ServiceDetailModal({ service, onClose }: ServiceDetailModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (service) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  const whatsappMessage = encodeURIComponent(
    `Hello Sajid Sir, I am interested in your service: "${service.title}". Please let me know the requirements and fee details.`
  );

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="bg-[#141414] rounded-lg border border-[#ffffff20] shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative animate-in zoom-in-95 duration-200 text-[#F5F2ED]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#1C1C1C] text-white p-6 sticky top-0 z-10 flex items-start justify-between border-b border-[#ffffff15]">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-[#D4AF37] font-bold tracking-widest uppercase">
                Service #{service.number}
              </span>
              {service.badge && (
                <span className="bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/40 text-[10px] uppercase font-mono px-2 py-0.5 rounded font-semibold">
                  {service.badge}
                </span>
              )}
            </div>
            <h3 className="text-2xl font-display font-bold mt-1 text-[#F5F2ED]">
              {service.title}
            </h3>
            <p className="text-[#A3A3A3] text-xs sm:text-sm mt-1">
              {service.tagline}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6">
          {/* Overview */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase text-[#D4AF37] tracking-wider mb-2">
              Service Scope &amp; Description
            </h4>
            <p className="text-sm sm:text-[15px] text-[#D4D4D4] leading-relaxed">
              {service.description}
            </p>
          </div>

          {/* Deliverables */}
          <div className="bg-[#1A1A1A] p-4 rounded border border-[#ffffff12]">
            <h4 className="text-xs font-mono font-bold uppercase text-[#F5F2ED] tracking-wider mb-3 flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>What We Deliver for You</span>
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#D4D4D4]">
              {service.deliverables.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Required Documents checklist */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase text-[#D4AF37] tracking-wider mb-3 flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-[#D4AF37]" />
              <span>Documents Required From You</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
              {service.documentsRequired.map((doc, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2.5 rounded bg-[#1A1A1A] border border-[#ffffff12]">
                  <span className="w-4 h-4 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] text-[10px] font-bold flex items-center justify-center shrink-0 border border-[#D4AF37]/40">
                    {idx + 1}
                  </span>
                  <span className="text-[#E5E5E5] font-medium">{doc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Turnaround Time */}
          <div className="flex items-center gap-2 text-xs font-mono text-[#D4D4D4] bg-[#1A1A1A] border border-[#D4AF37]/30 p-3 rounded">
            <Clock className="w-4 h-4 text-[#D4AF37] shrink-0" />
            <span><strong className="text-[#F5F2ED]">Turnaround Time:</strong> {service.turnaroundTime}</span>
          </div>

          {/* Fast Actions */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3 border-t border-[#ffffff15]">
            <a
              href={`https://wa.me/${BUSINESS_INFO.phoneClean.replace('+', '')}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:flex-1 py-3 px-4 rounded bg-[#195E3E] hover:bg-[#1e734c] text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-sm border border-[#195E3E]/40"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Inquire via WhatsApp</span>
            </a>
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="w-full sm:flex-1 py-3 px-4 rounded bg-[#D4AF37] hover:bg-[#E5C158] text-[#0A0A0A] font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-[2px_2px_0px_rgba(255,255,255,0.1)]"
            >
              <Phone className="w-4 h-4" />
              <span>Call: {BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
