import { useState } from 'react';
import { 
  type LucideIcon,
  Calculator, 
  Search, 
  FileCheck2, 
  Building2, 
  Award, 
  Store, 
  Receipt, 
  Users, 
  Wallet,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { SERVICES_LIST, BUSINESS_INFO } from '../data/businessData';
import { ServiceItem } from '../types';
import ServiceDetailModal from './ServiceDetailModal';

// Icon mapping helper
const serviceIcons: Record<string, LucideIcon> = {
  'accounting': Calculator,
  'auditing': FileCheck2,
  'itr': Receipt,
  'gst': FileCheck2,
  'pvt-llp': Building2,
  'udyam': Award,
  'gumasta': Store,
  'tds': Receipt,
  'pf-reg': Users,
  'pf-withdraw': Wallet,
};

export default function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'tax' | 'accounting' | 'registration' | 'compliance'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const filteredServices = SERVICES_LIST.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = 
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="services" className="py-20 bg-[#f8fafc] border-y border-[#e2e8f0] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl space-y-3">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase text-[#1d4ed8] tracking-widest">
              <span className="w-6 h-[1.5px] bg-[#1d4ed8]"></span>
              <span>Comprehensive Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#0f172a] tracking-tight">
              Ten services. One point of contact.
            </h2>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              Every registration, monthly return, and statutory audit your enterprise requires - prepared, verified, and submitted by Sajid Tax Consultant in Opera House, Mumbai.
            </p>
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#94a3b8]" />
            <input
              id="service-search"
              name="search"
              aria-label="Search taxation and accounting services"
              type="text"
              placeholder="Search service (e.g. GST, ITR, PF, Gumasta)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-white border border-[#e2e8f0] rounded-lg text-xs sm:text-sm text-[#0f172a] placeholder:text-[#94a3b8] focus:outline-none focus:border-[#1d4ed8] focus:ring-1 focus:ring-[#1d4ed8] shadow-xs transition-all"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 pb-8 border-b border-[#e2e8f0] text-xs font-medium">
          <button
            onClick={() => setActiveCategory('all')}
            aria-pressed={activeCategory === 'all'}
            className={`px-4 py-2 rounded-lg font-mono uppercase tracking-wider transition-all ${
              activeCategory === 'all'
                ? 'bg-[#1d4ed8] text-white font-bold shadow-xs'
                : 'bg-white text-[#475569] hover:bg-[#f8fafc] border border-[#e2e8f0]'
            }`}
          >
            All 10 Services
          </button>
          <button
            onClick={() => setActiveCategory('tax')}
            aria-pressed={activeCategory === 'tax'}
            className={`px-4 py-2 rounded-lg font-mono uppercase tracking-wider transition-all ${
              activeCategory === 'tax'
                ? 'bg-[#1d4ed8] text-white font-bold shadow-xs'
                : 'bg-white text-[#475569] hover:bg-[#f8fafc] border border-[#e2e8f0]'
            }`}
          >
            Taxation &amp; GST ({SERVICES_LIST.filter(s => s.category === 'tax').length})
          </button>
          <button
            onClick={() => setActiveCategory('accounting')}
            aria-pressed={activeCategory === 'accounting'}
            className={`px-4 py-2 rounded-lg font-mono uppercase tracking-wider transition-all ${
              activeCategory === 'accounting'
                ? 'bg-[#1d4ed8] text-white font-bold shadow-xs'
                : 'bg-white text-[#475569] hover:bg-[#f8fafc] border border-[#e2e8f0]'
            }`}
          >
            Accounting &amp; Audit ({SERVICES_LIST.filter(s => s.category === 'accounting').length})
          </button>
          <button
            onClick={() => setActiveCategory('registration')}
            aria-pressed={activeCategory === 'registration'}
            className={`px-4 py-2 rounded-lg font-mono uppercase tracking-wider transition-all ${
              activeCategory === 'registration'
                ? 'bg-[#1d4ed8] text-white font-bold shadow-xs'
                : 'bg-white text-[#475569] hover:bg-[#f8fafc] border border-[#e2e8f0]'
            }`}
          >
            Company &amp; Licences ({SERVICES_LIST.filter(s => s.category === 'registration').length})
          </button>
          <button
            onClick={() => setActiveCategory('compliance')}
            aria-pressed={activeCategory === 'compliance'}
            className={`px-4 py-2 rounded-lg font-mono uppercase tracking-wider transition-all ${
              activeCategory === 'compliance'
                ? 'bg-[#1d4ed8] text-white font-bold shadow-xs'
                : 'bg-white text-[#475569] hover:bg-[#f8fafc] border border-[#e2e8f0]'
            }`}
          >
            PF &amp; Labour ({SERVICES_LIST.filter(s => s.category === 'compliance').length})
          </button>
        </div>

        {/* Services Grid (Clean 2-row/5-col or responsive masonry) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 pt-8">
          {filteredServices.map((service) => {
            const Icon = serviceIcons[service.id] || Calculator;
            return (
              <div
                key={service.id}
                className="bg-white rounded-xl border border-[#e2e8f0] hover:border-[#1d4ed8] p-5 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-md group relative shadow-xs"
              >
                <div>
                  {/* Top bar with Index and Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-[#1d4ed8] transition-colors">
                      {service.number}
                    </span>
                    {service.badge && (
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-50 text-[#1d4ed8] border border-blue-200">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Service Icon */}
                  <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1d4ed8] group-hover:bg-[#1d4ed8] group-hover:text-white transition-colors mb-3">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-base sm:text-lg text-[#0f172a] leading-snug group-hover:text-[#1d4ed8] transition-colors mb-2">
                    {service.title}
                  </h3>

                  {/* Tagline / short description */}
                  <p className="text-xs text-[#475569] line-clamp-3 leading-relaxed mb-4">
                    {service.tagline}
                  </p>
                </div>

                {/* Bottom Actions */}
                <div className="pt-3 border-t border-[#e2e8f0] flex items-center justify-between">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-[#475569] hover:text-[#1d4ed8] transition-colors"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={`https://wa.me/${BUSINESS_INFO.phoneClean.replace('+', '')}?text=${encodeURIComponent(`Hi Sajid Sir, I need assistance with ${service.title}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-semibold text-[#047857] hover:text-[#065f46] hover:underline"
                    title="Quick Inquiry on WhatsApp"
                  >
                    Inquire &rarr;
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12 bg-white rounded-xl border border-dashed border-[#e2e8f0] my-8">
            <p className="text-[#64748b] font-mono text-sm">No services match "{searchQuery}".</p>
            <button
              onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
              className="mt-3 text-xs font-semibold text-[#1d4ed8] hover:text-[#1e40af] underline"
            >
              Reset filters
            </button>
          </div>
        )}

        {/* Bottom Fast Action Banner */}
        <div className="mt-12 bg-[#0f172a] text-white p-6 sm:p-8 rounded-xl shadow-md flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800">
          <div className="space-y-1 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 text-blue-400 font-mono text-xs uppercase tracking-wider font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>Need Multiple Filings / Complete Annual Retainership?</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-display font-bold text-white">
              Get an all-inclusive custom corporate compliance package
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              We bundle Accounting + GST + TDS + PF + ITR into an affordable monthly retainer for Mumbai businesses.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="px-5 py-3 rounded-lg bg-[#1d4ed8] hover:bg-[#1e40af] text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md"
            >
              Call {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>

      </div>

      {/* Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </section>
  );
}
