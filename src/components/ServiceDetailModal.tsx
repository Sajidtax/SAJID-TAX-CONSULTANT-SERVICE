import { useEffect } from 'react';
import { X, CheckCircle, Check, FileText, Clock, Phone, MessageSquare } from 'lucide-react';
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
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [service, onClose]);

  if (!service) return null;

  const whatsappMessage = encodeURIComponent(
    `Hello Sajid Sir, I am interested in your service: "${service.title}". Please let me know the requirements and fee details.`
  );

  return (
    <div 
      className="fixed inset-0 z-[90] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-service-title"
    >
      <div 
        className="bg-white rounded-xl border border-[#e2e8f0] shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative animate-in zoom-in-95 duration-200 text-[#0f172a]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#f8fafc] p-6 sticky top-0 z-10 flex items-start justify-between border-b border-[#e2e8f0]">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-[#1d4ed8] font-bold tracking-widest uppercase">
                Service #{service.number}
              </span>
              {service.badge && (
                <span className="bg-blue-50 text-[#1d4ed8] border border-blue-200 text-[10px] uppercase font-mono px-2 py-0.5 rounded font-semibold">
                  {service.badge}
                </span>
              )}
            </div>
            <h3 id="modal-service-title" className="text-2xl font-display font-bold mt-1 text-[#0f172a]">
              {service.title}
            </h3>
            <p className="text-[#475569] text-xs sm:text-sm mt-1">
              {service.tagline}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-[#475569] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6">
          {/* Overview */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase text-[#1d4ed8] tracking-wider mb-2">
              Service Scope &amp; Description
            </h4>
            <p className="text-sm sm:text-[15px] text-[#475569] leading-relaxed">
              {service.description}
            </p>
          </div>

          {/* Deliverables */}
          <div className="bg-[#f8fafc] p-4 rounded-xl border border-[#e2e8f0]">
            <h4 className="text-xs font-mono font-bold uppercase text-[#0f172a] tracking-wider mb-3 flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-[#047857]" />
              <span>What We Deliver for You</span>
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#475569]">
              {service.deliverables.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-[#047857] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Required Documents checklist */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase text-[#1d4ed8] tracking-wider mb-3 flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-[#1d4ed8]" />
              <span>Documents Required From You</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
              {service.documentsRequired.map((doc, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2.5 rounded-lg bg-[#f8fafc] border border-[#e2e8f0]">
                  <span className="w-4 h-4 rounded-full bg-blue-50 text-[#1d4ed8] text-[10px] font-bold flex items-center justify-center shrink-0 border border-blue-200">
                    {idx + 1}
                  </span>
                  <span className="text-[#0f172a] font-medium">{doc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Turnaround Time */}
          <div className="flex items-center gap-2 text-xs font-mono text-[#475569] bg-blue-50/70 border border-blue-200 p-3 rounded-lg">
            <Clock className="w-4 h-4 text-[#1d4ed8] shrink-0" />
            <span><strong className="text-[#0f172a]">Turnaround Time:</strong> {service.turnaroundTime}</span>
          </div>

          {/* Fast Actions */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3 border-t border-[#e2e8f0]">
            <a
              href={`https://wa.me/${BUSINESS_INFO.phoneClean.replace('+', '')}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:flex-1 py-3 px-4 rounded-lg bg-[#047857] hover:bg-[#065f46] text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-xs"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Inquire via WhatsApp</span>
            </a>
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="w-full sm:flex-1 py-3 px-4 rounded-lg bg-[#1d4ed8] hover:bg-[#1e40af] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-xs"
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
