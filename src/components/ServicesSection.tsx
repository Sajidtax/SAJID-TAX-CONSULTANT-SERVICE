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
    <section id="services" className="py-20 bg-slate-50 border-y border-slate-200 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl space-y-3">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase text-blue-700 tracking-widest">
              <span className="w-6 h-[1.5px] bg-blue-600"></span>
              <span>Comprehensive Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight">
              Ten services. One point of contact.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Every registration, monthly return, and statutory audit your enterprise requires - prepared, verified, and submitted by Sajid Tax Consultant in Opera House, Mumbai.
            </p>
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              id="service-search"
              name="search"
              aria-label="Search taxation and accounting services"
              type="text"
              placeholder="Search service (e.g. GST, ITR, PF, Gumasta)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-white border border-slate-300 rounded-lg text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 shadow-2xs transition-all"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 pb-8 border-b border-slate-200 text-xs font-medium">
          <button
            onClick={() => setActiveCategory('all')}
            aria-pressed={activeCategory === 'all'}
            className={`px-4 py-2 rounded-lg font-mono uppercase tracking-wider transition-all ${
              activeCategory === 'all'
                ? 'bg-blue-600 text-white font-bold shadow-xs'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            All 10 Services
          </button>
          <button
            onClick={() => setActiveCategory('tax')}
            aria-pressed={activeCategory === 'tax'}
            className={`px-4 py-2 rounded-lg font-mono uppercase tracking-wider transition-all ${
              activeCategory === 'tax'
                ? 'bg-blue-600 text-white font-bold shadow-xs'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Taxation &amp; GST ({SERVICES_LIST.filter(s => s.category === 'tax').length})
          </button>
          <button
            onClick={() => setActiveCategory('accounting')}
            aria-pressed={activeCategory === 'accounting'}
            className={`px-4 py-2 rounded-lg font-mono uppercase tracking-wider transition-all ${
              activeCategory === 'accounting'
                ? 'bg-blue-600 text-white font-bold shadow-xs'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Accounting &amp; Audit ({SERVICES_LIST.filter(s => s.category === 'accounting').length})
          </button>
          <button
            onClick={() => setActiveCategory('registration')}
            aria-pressed={activeCategory === 'registration'}
            className={`px-4 py-2 rounded-lg font-mono uppercase tracking-wider transition-all ${
              activeCategory === 'registration'
                ? 'bg-blue-600 text-white font-bold shadow-xs'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Company &amp; Licences ({SERVICES_LIST.filter(s => s.category === 'registration').length})
          </button>
          <button
            onClick={() => setActiveCategory('compliance')}
            aria-pressed={activeCategory === 'compliance'}
            className={`px-4 py-2 rounded-lg font-mono uppercase tracking-wider transition-all ${
              activeCategory === 'compliance'
                ? 'bg-blue-600 text-white font-bold shadow-xs'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
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
                className="bg-white rounded-xl border border-slate-200 hover:border-blue-500/60 p-5 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-md group relative shadow-2xs"
              >
                <div>
                  {/* Top bar with Index and Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-blue-700 transition-colors">
                      {service.number}
                    </span>
                    {service.badge && (
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Service Icon */}
                  <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-700 group-hover:bg-blue-600 group-hover:text-white transition-colors mb-3">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 leading-snug group-hover:text-blue-700 transition-colors mb-2">
                    {service.title}
                  </h3>

                  {/* Tagline / short description */}
                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                    {service.tagline}
                  </p>
                </div>

                {/* Bottom Actions */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-slate-700 hover:text-blue-700 transition-colors"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={`https://wa.me/${BUSINESS_INFO.phoneClean.replace('+', '')}?text=${encodeURIComponent(`Hi Sajid Sir, I need assistance with ${service.title}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-semibold text-emerald-700 hover:text-emerald-800 hover:underline"
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
          <div className="text-center py-12 bg-white rounded-xl border border-dashed border-slate-300 my-8">
            <p className="text-slate-500 font-mono text-sm">No services match "{searchQuery}".</p>
            <button
              onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
              className="mt-3 text-xs font-semibold text-blue-700 hover:text-blue-800 underline"
            >
              Reset filters
            </button>
          </div>
        )}

        {/* Bottom Fast Action Banner */}
        <div className="mt-12 bg-gradient-to-r from-blue-900 to-slate-900 text-white p-6 sm:p-8 rounded-xl shadow-lg flex flex-col md:flex-row items-center justify-between gap-6 border border-blue-800">
          <div className="space-y-1 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 text-blue-300 font-mono text-xs uppercase tracking-wider font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-blue-300" />
              <span>Need Multiple Filings / Complete Annual Retainership?</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-display font-bold text-white">
              Get an all-inclusive custom corporate compliance package
            </h4>
            <p className="text-xs sm:text-sm text-blue-100/80 max-w-xl">
              We bundle Accounting + GST + TDS + PF + ITR into an affordable monthly retainer for Mumbai businesses.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="px-5 py-3 rounded-lg bg-white hover:bg-slate-100 text-blue-950 font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md"
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
