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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-service-title"
    >
      <div 
        className="bg-white rounded-xl border border-slate-200 shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative animate-in zoom-in-95 duration-200 text-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-slate-50 p-6 sticky top-0 z-10 flex items-start justify-between border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-blue-700 font-bold tracking-widest uppercase">
                Service #{service.number}
              </span>
              {service.badge && (
                <span className="bg-blue-50 text-blue-700 border border-blue-200 text-[10px] uppercase font-mono px-2 py-0.5 rounded font-semibold">
                  {service.badge}
                </span>
              )}
            </div>
            <h3 id="modal-service-title" className="text-2xl font-display font-bold mt-1 text-slate-900">
              {service.title}
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              {service.tagline}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-700 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6">
          {/* Overview */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase text-blue-700 tracking-wider mb-2">
              Service Scope &amp; Description
            </h4>
            <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed">
              {service.description}
            </p>
          </div>

          {/* Deliverables */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <h4 className="text-xs font-mono font-bold uppercase text-slate-900 tracking-wider mb-3 flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span>What We Deliver for You</span>
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
              {service.deliverables.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Required Documents checklist */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase text-blue-700 tracking-wider mb-3 flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-blue-600" />
              <span>Documents Required From You</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
              {service.documentsRequired.map((doc, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="w-4 h-4 rounded-full bg-blue-50 text-blue-700 text-[10px] font-bold flex items-center justify-center shrink-0 border border-blue-200">
                    {idx + 1}
                  </span>
                  <span className="text-slate-800 font-medium">{doc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Turnaround Time */}
          <div className="flex items-center gap-2 text-xs font-mono text-slate-700 bg-blue-50/70 border border-blue-200 p-3 rounded-lg">
            <Clock className="w-4 h-4 text-blue-600 shrink-0" />
            <span><strong className="text-slate-900">Turnaround Time:</strong> {service.turnaroundTime}</span>
          </div>

          {/* Fast Actions */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3 border-t border-slate-200">
            <a
              href={`https://wa.me/${BUSINESS_INFO.phoneClean.replace('+', '')}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:flex-1 py-3 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-xs border border-emerald-700/20"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Inquire via WhatsApp</span>
            </a>
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="w-full sm:flex-1 py-3 px-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-xs"
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
