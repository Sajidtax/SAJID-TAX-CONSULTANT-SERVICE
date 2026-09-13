export default function TrustBar() {
  return (
    <div className="bg-[#f8fafc] text-[#475569] py-3.5 px-4 border-y border-[#e2e8f0] relative z-10 shadow-xs">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-y-2 gap-x-4 text-xs sm:text-[13px] font-mono tracking-wider font-medium uppercase">
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#1d4ed8]"></span>
          RELIABLE SERVICE
        </span>
        <span className="text-[#cbd5e1] hidden md:inline">/</span>
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#1d4ed8]"></span>
          ACCURATE SOLUTIONS
        </span>
        <span className="text-[#cbd5e1] hidden md:inline">/</span>
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#1d4ed8]"></span>
          TIMELY SUPPORT
        </span>
        <span className="text-[#cbd5e1] hidden md:inline">/</span>
        <span className="text-[#1d4ed8] font-bold flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#1d4ed8] animate-pulse"></span>
          YOUR GROWTH, OUR RESPONSIBILITY
        </span>
      </div>
    </div>
  );
}
