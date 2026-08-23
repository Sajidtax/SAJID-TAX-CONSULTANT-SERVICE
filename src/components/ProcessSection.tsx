import { PhoneCall, FileUp, CheckCircle, ShieldCheck } from 'lucide-react';

export default function ProcessSection() {
  const steps = [
    {
      num: "01",
      title: "1. Free Initial Consultation",
      desc: "Connect via phone, WhatsApp, or visit our Opera House office. We analyze your requirements and specify exactly which filings or registrations apply.",
      icon: PhoneCall
    },
    {
      num: "02",
      title: "2. Document Verification",
      desc: "Share your bank statements, invoices, or identity proofs online or in person. We verify every record for 100% tax compliance.",
      icon: FileUp
    },
    {
      num: "03",
      title: "3. Computation & Filing",
      desc: "Our consultant drafts the returns/registrations, applies all statutory deductions, and files with the government portal before the due date.",
      icon: ShieldCheck
    },
    {
      num: "04",
      title: "4. Official Acknowledgement",
      desc: "You receive official government acknowledgement receipts (ITR-V, GSTR confirmation, Udyam / Gumasta certificates) for your permanent records.",
      icon: CheckCircle
    }
  ];

  return (
    <section id="process" className="py-20 bg-[#0D0D0D] border-t border-[#ffffff12]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="max-w-2xl mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase text-[#D4AF37] tracking-widest">
            <span className="w-6 h-[1.5px] bg-[#D4AF37]"></span>
            <span>Seamless Workflow</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#F5F2ED] tracking-tight">
            From first consultation to confirmed return
          </h2>
          <p className="text-sm sm:text-base text-[#A3A3A3] leading-relaxed">
            A transparent four-step process built so business owners never have to chase paperwork or worry about missed deadlines.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="bg-[#141414] rounded border border-[#ffffff12] hover:border-[#D4AF37]/60 p-6 space-y-4 hover:shadow-[0_8px_30px_rgb(0,0,0,0.5)] transition-all relative group"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-full bg-[#1C1C1C] border border-[#D4AF37]/50 text-[#D4AF37] flex items-center justify-center font-mono font-bold text-sm">
                    {step.num}
                  </div>
                  <Icon className="w-5 h-5 text-[#D4AF37] group-hover:text-[#E5C158] transition-colors" />
                </div>
                <h3 className="font-display font-bold text-lg text-[#F5F2ED]">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#A3A3A3] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
