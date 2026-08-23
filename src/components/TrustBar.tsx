export default function TrustBar() {
  return (
    <div className="bg-[#121212] text-[#E5E5E5] py-3.5 px-4 border-y border-[#D4AF37]/30 relative z-10 shadow-inner">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-y-2 gap-x-4 text-xs sm:text-[13px] font-mono tracking-wider font-medium uppercase">
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
          RELIABLE SERVICE
        </span>
        <span className="text-[#D4AF37]/60 hidden md:inline">/</span>
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
          ACCURATE SOLUTIONS
        </span>
        <span className="text-[#D4AF37]/60 hidden md:inline">/</span>
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
          TIMELY SUPPORT
        </span>
        <span className="text-[#D4AF37]/60 hidden md:inline">/</span>
        <span className="text-[#D4AF37] font-semibold flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse"></span>
          YOUR GROWTH, OUR RESPONSIBILITY
        </span>
      </div>
    </div>
  );
}
