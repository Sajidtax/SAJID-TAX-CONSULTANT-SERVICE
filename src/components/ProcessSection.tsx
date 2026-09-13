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
    <section id="process" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="max-w-2xl mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase text-blue-700 tracking-widest">
            <span className="w-6 h-[1.5px] bg-blue-600"></span>
            <span>Seamless Workflow</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight">
            From first consultation to confirmed return
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            A transparent four-step process built so business owners never have to chase paperwork or worry about missed deadlines.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="bg-white rounded-xl border border-slate-200 hover:border-blue-500/60 p-6 space-y-4 hover:shadow-md transition-all relative group shadow-2xs"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-200 text-blue-700 flex items-center justify-center font-mono font-bold text-sm">
                    {step.num}
                  </div>
                  <Icon className="w-5 h-5 text-blue-600 group-hover:text-blue-700 transition-colors" />
                </div>
                <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-blue-700 transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
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
