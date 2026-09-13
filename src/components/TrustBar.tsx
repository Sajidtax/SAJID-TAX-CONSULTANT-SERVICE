export default function TrustBar() {
  return (
    <div className="bg-slate-50 text-slate-700 py-3.5 px-4 border-y border-slate-200 relative z-10 shadow-2xs">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-y-2 gap-x-4 text-xs sm:text-[13px] font-mono tracking-wider font-medium uppercase">
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
          RELIABLE SERVICE
        </span>
        <span className="text-slate-300 hidden md:inline">/</span>
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
          ACCURATE SOLUTIONS
        </span>
        <span className="text-slate-300 hidden md:inline">/</span>
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
          TIMELY SUPPORT
        </span>
        <span className="text-slate-300 hidden md:inline">/</span>
        <span className="text-blue-700 font-bold flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
          YOUR GROWTH, OUR RESPONSIBILITY
        </span>
      </div>
    </div>
  );
}
