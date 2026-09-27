export default function TrustBar() {
  return (
    <div className="bg-[#f8fafc] text-[#475569] py-3.5 px-4 border-y border-[#e2e8f0] relative z-10 shadow-xs">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-y-2 gap-x-4 text-xs sm:text-[13px] font-mono tracking-wider font-medium uppercase">
        <span className="flex items-center gap-2 text-[#0f172a] font-bold">
          <span className="text-amber-500">★</span>
          <span>4.9 RATING (184+ REVIEWS)</span>
        </span>
        <span className="text-[#cbd5e1] hidden md:inline">/</span>
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#1d4ed8]"></span>
          <span>14+ YEARS TAX EXPERTISE</span>
        </span>
        <span className="text-[#cbd5e1] hidden md:inline">/</span>
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#1d4ed8]"></span>
          <span>100% AUDIT-PROOF FILINGS</span>
        </span>
        <span className="text-[#cbd5e1] hidden md:inline">/</span>
        <span className="text-[#1d4ed8] font-bold flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#1d4ed8] animate-pulse"></span>
          <span>YOUR GROWTH, OUR RESPONSIBILITY</span>
        </span>
      </div>
    </div>
  );
}
