import { useState } from 'react';
import { 
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
  Sparkles,
  Info
} from 'lucide-react';
import { SERVICES_LIST, BUSINESS_INFO } from '../data/businessData';
import { ServiceItem } from '../types';
import ServiceDetailModal from './ServiceDetailModal';

// Icon mapping helper
const serviceIcons: Record<string, any> = {
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
    <section id="services" className="py-20 bg-[#0D0D0D] border-y border-[#ffffff12] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl space-y-3">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase text-[#D4AF37] tracking-widest">
              <span className="w-6 h-[1.5px] bg-[#D4AF37]"></span>
              <span>Comprehensive Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#F5F2ED] tracking-tight">
              Ten services. One point of contact.
            </h2>
            <p className="text-sm sm:text-base text-[#A3A3A3] leading-relaxed">
              Every registration, monthly return, and statutory audit your enterprise requires - prepared, verified, and submitted by Sajid Tax Consultant in Opera House, Mumbai.
            </p>
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#A3A3A3]" />
            <input
              type="text"
              placeholder="Search service (e.g. GST, ITR, PF, Gumasta)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-[#171717] border border-[#ffffff18] rounded text-xs sm:text-sm text-[#F5F2ED] placeholder:text-[#737373] focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 pb-8 border-b border-[#ffffff12] text-xs font-medium">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded font-mono uppercase tracking-wider transition-all ${
              activeCategory === 'all'
                ? 'bg-[#D4AF37] text-[#0A0A0A] font-bold shadow-sm'
                : 'bg-[#171717] text-[#D4D4D4] hover:bg-[#262626] border border-white/5'
            }`}
          >
            All 10 Services
          </button>
          <button
            onClick={() => setActiveCategory('tax')}
            className={`px-4 py-2 rounded font-mono uppercase tracking-wider transition-all ${
              activeCategory === 'tax'
                ? 'bg-[#D4AF37] text-[#0A0A0A] font-bold shadow-sm'
                : 'bg-[#171717] text-[#D4D4D4] hover:bg-[#262626] border border-white/5'
            }`}
          >
            Taxation &amp; GST ({SERVICES_LIST.filter(s => s.category === 'tax').length})
          </button>
          <button
            onClick={() => setActiveCategory('accounting')}
            className={`px-4 py-2 rounded font-mono uppercase tracking-wider transition-all ${
              activeCategory === 'accounting'
                ? 'bg-[#D4AF37] text-[#0A0A0A] font-bold shadow-sm'
                : 'bg-[#171717] text-[#D4D4D4] hover:bg-[#262626] border border-white/5'
            }`}
          >
            Accounting &amp; Audit ({SERVICES_LIST.filter(s => s.category === 'accounting').length})
          </button>
          <button
            onClick={() => setActiveCategory('registration')}
            className={`px-4 py-2 rounded font-mono uppercase tracking-wider transition-all ${
              activeCategory === 'registration'
                ? 'bg-[#D4AF37] text-[#0A0A0A] font-bold shadow-sm'
                : 'bg-[#171717] text-[#D4D4D4] hover:bg-[#262626] border border-white/5'
            }`}
          >
            Company &amp; Licences ({SERVICES_LIST.filter(s => s.category === 'registration').length})
          </button>
          <button
            onClick={() => setActiveCategory('compliance')}
            className={`px-4 py-2 rounded font-mono uppercase tracking-wider transition-all ${
              activeCategory === 'compliance'
                ? 'bg-[#D4AF37] text-[#0A0A0A] font-bold shadow-sm'
                : 'bg-[#171717] text-[#D4D4D4] hover:bg-[#262626] border border-white/5'
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
                className="bg-[#141414] rounded border border-[#ffffff12] hover:border-[#D4AF37]/70 p-5 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.5)] group relative"
              >
                <div>
                  {/* Top bar with Index and Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-[#D4AF37] transition-colors">
                      {service.number}
                    </span>
                    {service.badge && (
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Service Icon */}
                  <div className="w-10 h-10 rounded bg-[#1C1C1C] border border-[#ffffff10] flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#0A0A0A] transition-colors mb-3">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-base sm:text-lg text-[#F5F2ED] leading-snug group-hover:text-[#D4AF37] transition-colors mb-2">
                    {service.title}
                  </h3>

                  {/* Tagline / short description */}
                  <p className="text-xs text-[#A3A3A3] line-clamp-3 leading-relaxed mb-4">
                    {service.tagline}
                  </p>
                </div>

                {/* Bottom Actions */}
                <div className="pt-3 border-t border-[#ffffff10] flex items-center justify-between">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-[#D4D4D4] hover:text-[#D4AF37] transition-colors"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={`https://wa.me/${BUSINESS_INFO.phoneClean.replace('+', '')}?text=${encodeURIComponent(`Hi Sajid Sir, I need assistance with ${service.title}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-semibold text-emerald-400 hover:text-emerald-300 hover:underline"
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
          <div className="text-center py-12 bg-[#141414] rounded border border-dashed border-[#ffffff20] my-8">
            <p className="text-[#A3A3A3] font-mono text-sm">No services match "{searchQuery}".</p>
            <button
              onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
              className="mt-3 text-xs font-semibold text-[#D4AF37] underline"
            >
              Reset filters
            </button>
          </div>
        )}

        {/* Bottom Fast Action Banner */}
        <div className="mt-12 bg-gradient-to-r from-[#141414] to-[#1A1A1A] text-white p-6 sm:p-8 rounded-lg shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 border border-[#D4AF37]/40">
          <div className="space-y-1 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 text-[#D4AF37] font-mono text-xs uppercase tracking-wider font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Need Multiple Filings / Complete Annual Retainership?</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-display font-bold text-[#F5F2ED]">
              Get an all-inclusive custom corporate compliance package
            </h4>
            <p className="text-xs sm:text-sm text-[#A3A3A3] max-w-xl">
              We bundle Accounting + GST + TDS + PF + ITR into an affordable monthly retainer for Mumbai businesses.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="px-5 py-3 rounded bg-[#D4AF37] hover:bg-[#E5C158] text-[#0A0A0A] font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-[2px_2px_0px_rgba(255,255,255,0.15)]"
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
