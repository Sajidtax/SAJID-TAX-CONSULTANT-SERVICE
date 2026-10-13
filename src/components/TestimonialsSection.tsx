import { Star, ShieldCheck, CheckCircle2, Quote } from 'lucide-react';
import { CLIENT_REVIEWS, BUSINESS_INFO } from '../data/businessData';

export default function TestimonialsSection() {
  return (
    <section id="reviews" className="py-20 bg-[#f8fafc] border-t border-[#e2e8f0] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#1d4ed8] text-xs font-mono font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Verified Client Experiences • South Mumbai &amp; India</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#0f172a] tracking-tight">
            Trusted by Mumbai Businesses &amp; Salaried Taxpayers
          </h2>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            From Opera House diamond merchants and Kalbadevi textile traders to BKC corporate executives, hear how Consultant Sajid delivers audit-proof peace of mind.
          </p>
        </div>

        {/* Rating Summary Strip */}
        <div className="bg-white rounded-2xl border border-[#e2e8f0] p-6 mb-10 shadow-xs flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-amber-50 border border-amber-200 flex flex-col items-center justify-center text-amber-700">
              <span className="font-mono text-2xl font-black leading-none">4.9</span>
              <span className="text-[10px] font-bold uppercase mt-0.5">/ 5.0</span>
            </div>
            <div>
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="text-xs font-bold text-[#0f172a] mt-1">
                Outstanding Client Satisfaction Rating
              </div>
              <div className="text-[11px] text-[#475569]">
                Based on 184+ direct consultations &amp; annual retainers
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-6 text-xs font-mono text-[#334155] border-t sm:border-t-0 sm:border-l border-[#e2e8f0] pt-3 sm:pt-0 sm:pl-6">
            <div>
              <div className="font-bold text-[#0f172a] text-sm">8,500+</div>
              <div className="text-[11px] text-[#475569]">Returns e-Filed</div>
            </div>
            <div className="w-[1px] h-8 bg-slate-200"></div>
            <div>
              <div className="font-bold text-[#047857] text-sm">100%</div>
              <div className="text-[11px] text-[#475569]">Zero Penalty Record</div>
            </div>
            <div className="w-[1px] h-8 bg-slate-200"></div>
            <div>
              <div className="font-bold text-[#1d4ed8] text-sm">14+ Years</div>
              <div className="text-[11px] text-[#475569]">Opera House Chamber</div>
            </div>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CLIENT_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl border border-[#e2e8f0] hover:border-[#1d4ed8] p-6 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-md relative group shadow-xs"
            >
              <div>
                {/* Header: Stars & Date */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono text-[#475569] uppercase font-medium">
                    {review.date}
                  </span>
                </div>

                {/* Service Tag */}
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-blue-50 text-[#1d4ed8] text-[11px] font-mono font-semibold mb-3">
                  <span>{review.service}</span>
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-[#334155] leading-relaxed mb-6 italic">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>

              {/* Author footer */}
              <div className="pt-4 border-t border-[#e2e8f0] flex items-center justify-between">
                <div>
                  <h4 className="font-display font-bold text-sm text-[#0f172a]">
                    {review.name}
                  </h4>
                  <div className="text-[11px] text-[#475569] font-medium">
                    {review.role}
                  </div>
                  <div className="text-[10px] text-[#1d4ed8] font-mono">
                    📍 {review.location}
                  </div>
                </div>

                {review.verified && (
                  <div className="flex items-center gap-1 text-[10px] font-mono text-[#065f46] bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 shrink-0 font-bold">
                    <CheckCircle2 className="w-3 h-3 text-[#047857]" />
                    <span>Verified</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom review invitation */}
        <div className="mt-10 text-center">
          <p className="text-xs text-[#475569]">
            Have you consulted with Sajid Tax Consultant? {' '}
            <a
              href={`https://wa.me/${BUSINESS_INFO.phoneClean.replace('+', '')}?text=Hello%20Sajid%20Sir,%20I%20would%20like%20to%20share%20my%20feedback%20regarding%20your%20tax%20service.`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#1d4ed8] hover:underline"
            >
              Share your feedback on WhatsApp &rarr;
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
