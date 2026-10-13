import { useState, useId } from 'react';
import { Calculator, ArrowRight, CheckCircle2, ShieldCheck, HelpCircle, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export default function TaxRegimeCalculator() {
  const [grossIncome, setGrossIncome] = useState<number>(1000000);
  const [isSalaried, setIsSalaried] = useState<boolean>(true);
  const [deduction80C, setDeduction80C] = useState<number>(150000);
  const [deduction80D, setDeduction80D] = useState<number>(25000);
  const [deductionHomeLoan, setDeductionHomeLoan] = useState<number>(0);
  const [deductionNps, setDeductionNps] = useState<number>(0);
  const [showDeductionToggles, setShowDeductionToggles] = useState<boolean>(false);

  const grossIncomeInputId = useId();
  const salariedOptionId = useId();
  const nonSalariedOptionId = useId();
  const input80CId = useId();
  const input80DId = useId();
  const inputHomeLoanId = useId();
  const inputNpsId = useId();

  // Presets
  const incomePresets = [
    { label: "₹7.5 Lakhs", value: 750000 },
    { label: "₹10 Lakhs", value: 1000000 },
    { label: "₹12.5 Lakhs", value: 1250000 },
    { label: "₹15 Lakhs", value: 1500000 },
    { label: "₹20 Lakhs", value: 2000000 },
    { label: "₹25 Lakhs", value: 2500000 },
  ];

  // --- NEW REGIME CALCULATION (Budget 2024 / FY 2024-25) ---
  const standardDeductionNew = isSalaried ? 75000 : 0;
  const taxableIncomeNew = Math.max(0, grossIncome - standardDeductionNew);

  let taxNewBeforeRebate = 0;
  if (taxableIncomeNew <= 300000) {
    taxNewBeforeRebate = 0;
  } else if (taxableIncomeNew <= 700000) {
    taxNewBeforeRebate = (taxableIncomeNew - 300000) * 0.05;
  } else if (taxableIncomeNew <= 1000000) {
    taxNewBeforeRebate = 20000 + (taxableIncomeNew - 700000) * 0.10;
  } else if (taxableIncomeNew <= 1200000) {
    taxNewBeforeRebate = 20000 + 30000 + (taxableIncomeNew - 1000000) * 0.15;
  } else if (taxableIncomeNew <= 1500000) {
    taxNewBeforeRebate = 20000 + 30000 + 30000 + (taxableIncomeNew - 1200000) * 0.20;
  } else {
    taxNewBeforeRebate = 20000 + 30000 + 30000 + 60000 + (taxableIncomeNew - 1500000) * 0.30;
  }

  // Section 87A Rebate in New Regime (Full rebate if taxable income <= 7,00,000)
  const rebate87ANew = taxableIncomeNew <= 700000 ? taxNewBeforeRebate : 0;
  const netTaxNewBeforeCess = Math.max(0, taxNewBeforeRebate - rebate87ANew);
  const cessNew = Math.round(netTaxNewBeforeCess * 0.04);
  const totalTaxNew = netTaxNewBeforeCess + cessNew;

  // --- OLD REGIME CALCULATION ---
  const standardDeductionOld = isSalaried ? 50000 : 0;
  const totalOldDeductions = standardDeductionOld + Math.min(deduction80C, 150000) + Math.min(deduction80D, 100000) + Math.min(deductionHomeLoan, 200000) + Math.min(deductionNps, 50000);
  const taxableIncomeOld = Math.max(0, grossIncome - totalOldDeductions);

  let taxOldBeforeRebate = 0;
  if (taxableIncomeOld <= 250000) {
    taxOldBeforeRebate = 0;
  } else if (taxableIncomeOld <= 500000) {
    taxOldBeforeRebate = (taxableIncomeOld - 250000) * 0.05;
  } else if (taxableIncomeOld <= 1000000) {
    taxOldBeforeRebate = 12500 + (taxableIncomeOld - 500000) * 0.20;
  } else {
    taxOldBeforeRebate = 12500 + 100000 + (taxableIncomeOld - 1000000) * 0.30;
  }

  // Section 87A Rebate in Old Regime (Full rebate if taxable income <= 5,00,000)
  const rebate87AOld = taxableIncomeOld <= 500000 ? taxOldBeforeRebate : 0;
  const netTaxOldBeforeCess = Math.max(0, taxOldBeforeRebate - rebate87AOld);
  const cessOld = Math.round(netTaxOldBeforeCess * 0.04);
  const totalTaxOld = netTaxOldBeforeCess + cessOld;

  const difference = Math.abs(totalTaxNew - totalTaxOld);
  const isNewBetter = totalTaxNew <= totalTaxOld;

  const formatRupees = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Sajid Sir, I calculated my estimated tax on your website:
• Annual Income: ${formatRupees(grossIncome)}
• Status: ${isSalaried ? 'Salaried' : 'Business / Consultant'}
• New Regime Tax: ${formatRupees(totalTaxNew)}
• Old Regime Tax: ${formatRupees(totalTaxOld)}
• Recommended: ${isNewBetter ? 'New Regime' : 'Old Regime'} (Diff: ${formatRupees(difference)})
I would like your expert advice to verify my deductions and file my ITR.`
  );

  return (
    <section id="tax-calculator" className="py-20 bg-white border-b border-[#e2e8f0] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#1d4ed8] text-xs font-mono font-bold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Tool • FY 2024-25 &amp; FY 2025-26</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#0f172a] tracking-tight">
            Old vs. New Tax Regime Quick Estimator
          </h2>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            Drag your annual income to instantly see which tax regime saves you more money under latest Union Budget slabs. Every computation verified for maximum legitimate savings.
          </p>
        </div>

        {/* Main Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Inputs & Sliders (7 cols) */}
          <div className="lg:col-span-7 bg-[#f8fafc] rounded-2xl border border-[#e2e8f0] p-6 sm:p-8 space-y-6 shadow-xs">
            
            {/* Employment Status Selector */}
            <div className="flex items-center justify-between pb-4 border-b border-[#e2e8f0] flex-wrap gap-3">
              <div>
                <label className="text-xs font-mono font-bold uppercase text-[#334155]">
                  Select Employment Type
                </label>
                <div className="text-xs text-[#475569]">
                  Salaried gets standard deduction (₹75k in New, ₹50k in Old)
                </div>
              </div>
              <div className="flex items-center gap-1 bg-white p-1 rounded-lg border border-[#e2e8f0]">
                <button
                  type="button"
                  id={salariedOptionId}
                  onClick={() => setIsSalaried(true)}
                  aria-pressed={isSalaried}
                  className={`px-3 py-1.5 rounded-md text-xs font-semibold font-mono transition-all ${
                    isSalaried ? 'bg-[#1d4ed8] text-white shadow-xs' : 'text-[#475569] hover:text-[#0f172a]'
                  }`}
                >
                  Salaried
                </button>
                <button
                  type="button"
                  id={nonSalariedOptionId}
                  onClick={() => setIsSalaried(false)}
                  aria-pressed={!isSalaried}
                  className={`px-3 py-1.5 rounded-md text-xs font-semibold font-mono transition-all ${
                    !isSalaried ? 'bg-[#1d4ed8] text-white shadow-xs' : 'text-[#475569] hover:text-[#0f172a]'
                  }`}
                >
                  Business / Professional
                </button>
              </div>
            </div>

            {/* Income Slider & Direct Input */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label htmlFor={grossIncomeInputId} className="text-sm font-bold text-[#0f172a]">
                  Total Annual Gross Income (CTC / Turnover)
                </label>
                <span className="font-mono text-xl sm:text-2xl font-black text-[#1d4ed8] bg-blue-50 px-3 py-1 rounded-lg border border-blue-200">
                  {formatRupees(grossIncome)}
                </span>
              </div>

              <input
                id={grossIncomeInputId}
                aria-label="Total Annual Gross Income"
                type="range"
                min="300000"
                max="3500000"
                step="25000"
                value={grossIncome}
                onChange={(e) => setGrossIncome(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#1d4ed8]"
              />

              {/* Quick Presets */}
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="text-xs font-mono text-[#334155] self-center mr-1 font-semibold">Quick pick:</span>
                {incomePresets.map((preset) => (
                  <button
                    key={preset.value}
                    onClick={() => setGrossIncome(preset.value)}
                    className={`px-2.5 py-1 rounded-md text-xs font-mono font-medium border transition-all ${
                      grossIncome === preset.value
                        ? 'bg-[#1d4ed8] text-white border-[#1d4ed8]'
                        : 'bg-white text-[#334155] border-[#e2e8f0] hover:bg-slate-100'
                    }`}
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Deductions Toggle for Old Regime */}
            <div className="pt-2 border-t border-[#e2e8f0] space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs font-mono font-bold uppercase text-[#334155]">
                    Old Regime Deductions (Chapter VI-A)
                  </div>
                  <div className="text-xs text-[#475569]">
                    Claimed under 80C, 80D, Home Loan Interest 24(b)
                  </div>
                </div>
                <button
                  onClick={() => setShowDeductionToggles(!showDeductionToggles)}
                  className="text-xs font-semibold text-[#1d4ed8] hover:underline"
                >
                  {showDeductionToggles ? 'Hide Options ▲' : 'Customize Deductions ▼'}
                </button>
              </div>

              {showDeductionToggles && (
                <div className="space-y-4 pt-2 bg-white p-4 rounded-xl border border-[#e2e8f0] animate-in fade-in duration-200">
                  {/* 80C */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-medium">
                      <label htmlFor={input80CId} className="text-[#334155]">Section 80C (PPF, EPF, ELSS, Life Insurance)</label>
                      <span className="font-mono font-bold text-[#0f172a]">{formatRupees(deduction80C)}</span>
                    </div>
                    <input
                      id={input80CId}
                      aria-label="Section 80C Deduction"
                      type="range"
                      min="0"
                      max="150000"
                      step="10000"
                      value={deduction80C}
                      onChange={(e) => setDeduction80C(Number(e.target.value))}
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#1d4ed8]"
                    />
                  </div>

                  {/* 80D */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-medium">
                      <label htmlFor={input80DId} className="text-[#334155]">Section 80D (Health Insurance / Mediclaim)</label>
                      <span className="font-mono font-bold text-[#0f172a]">{formatRupees(deduction80D)}</span>
                    </div>
                    <input
                      id={input80DId}
                      aria-label="Section 80D Deduction"
                      type="range"
                      min="0"
                      max="75000"
                      step="5000"
                      value={deduction80D}
                      onChange={(e) => setDeduction80D(Number(e.target.value))}
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#1d4ed8]"
                    />
                  </div>

                  {/* Home Loan 24b */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-medium">
                      <label htmlFor={inputHomeLoanId} className="text-[#334155]">Section 24(b) (Home Loan Interest, max ₹2 Lakhs)</label>
                      <span className="font-mono font-bold text-[#0f172a]">{formatRupees(deductionHomeLoan)}</span>
                    </div>
                    <input
                      id={inputHomeLoanId}
                      aria-label="Section 24b Home Loan Deduction"
                      type="range"
                      min="0"
                      max="200000"
                      step="10000"
                      value={deductionHomeLoan}
                      onChange={(e) => setDeductionHomeLoan(Number(e.target.value))}
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#1d4ed8]"
                    />
                  </div>

                  {/* NPS 80CCD */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-medium">
                      <label htmlFor={inputNpsId} className="text-[#334155]">Section 80CCD(1B) (National Pension Scheme, max ₹50k)</label>
                      <span className="font-mono font-bold text-[#0f172a]">{formatRupees(deductionNps)}</span>
                    </div>
                    <input
                      id={inputNpsId}
                      aria-label="Section 80CCD 1B NPS Deduction"
                      type="range"
                      min="0"
                      max="50000"
                      step="5000"
                      value={deductionNps}
                      onChange={(e) => setDeductionNps(Number(e.target.value))}
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#1d4ed8]"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Consultant Note */}
            <div className="text-xs text-[#334155] bg-blue-50/60 p-3.5 rounded-xl border border-blue-100 flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-[#1d4ed8] shrink-0 mt-0.5" />
              <div>
                <strong>Zero Tax Threshold:</strong> Under New Regime Budget 2024, salaried individuals earning up to <strong>₹7,75,000</strong> pay <span className="text-[#047857] font-bold">₹0 tax</span> due to ₹75,000 standard deduction + Section 87A rebate!
              </div>
            </div>

          </div>

          {/* Right Column: Comparative Results & Savings (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* The Winner Card */}
            <div className={`p-6 rounded-2xl border-2 transition-all shadow-md ${
              isNewBetter 
                ? 'bg-gradient-to-br from-emerald-50 via-white to-blue-50/50 border-emerald-500' 
                : 'bg-gradient-to-br from-blue-50 via-white to-slate-50 border-[#1d4ed8]'
            }`}>
              
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-white border border-[#e2e8f0] text-[#0f172a] shadow-xs">
                  Optimal Recommendation
                </span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-100 text-[#065f46]">
                  {isNewBetter ? 'New Regime Wins' : 'Old Regime Wins'}
                </span>
              </div>

              <div className="space-y-1 mb-5">
                <div className="text-xs text-[#475569]">Potential Tax Difference:</div>
                <div className="text-2xl sm:text-3xl font-display font-black text-[#0f172a]">
                  Save {formatRupees(difference)}
                </div>
                <div className="text-xs text-[#065f46] font-semibold flex items-center gap-1 pt-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>
                    Choosing {isNewBetter ? 'New Tax Regime' : 'Old Tax Regime'} is financially beneficial for this income profile.
                  </span>
                </div>
              </div>

              {/* Side by side numbers */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[#e2e8f0] text-center">
                <div className={`p-3.5 rounded-xl border ${
                  isNewBetter ? 'bg-white border-emerald-300 shadow-xs' : 'bg-slate-50 border-[#e2e8f0]'
                }`}>
                  <div className="text-[11px] font-mono uppercase text-[#475569] font-bold">
                    New Regime Tax
                  </div>
                  <div className="text-xl font-mono font-black text-[#0f172a] mt-1">
                    {formatRupees(totalTaxNew)}
                  </div>
                  <div className="text-[10px] text-[#475569] mt-0.5">
                    Std. Ded: {formatRupees(standardDeductionNew)}
                  </div>
                </div>

                <div className={`p-3.5 rounded-xl border ${
                  !isNewBetter ? 'bg-white border-blue-300 shadow-xs' : 'bg-slate-50 border-[#e2e8f0]'
                }`}>
                  <div className="text-[11px] font-mono uppercase text-[#475569] font-bold">
                    Old Regime Tax
                  </div>
                  <div className="text-xl font-mono font-black text-[#0f172a] mt-1">
                    {formatRupees(totalTaxOld)}
                  </div>
                  <div className="text-[10px] text-[#475569] mt-0.5">
                    Deductions: {formatRupees(totalOldDeductions)}
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Call to Action */}
              <div className="mt-6 pt-5 border-t border-[#e2e8f0] space-y-3">
                <a
                  href={`https://wa.me/${BUSINESS_INFO.phoneClean.replace('+', '')}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-[#047857] hover:bg-[#065f46] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-sm hover:shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Calculation to Sajid on WhatsApp</span>
                </a>

                <div className="flex items-center justify-between text-[11px] text-[#475569] font-mono">
                  <span>• 100% Confidential</span>
                  <span>• Verified by Consultant</span>
                  <span>• Zero Obligation</span>
                </div>
              </div>

            </div>

            {/* Quick Consultation Promo Box */}
            <div className="bg-white p-5 rounded-2xl border border-[#e2e8f0] text-xs text-[#475569] space-y-2 shadow-xs">
              <div className="font-bold text-[#0f172a] flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4 text-[#1d4ed8]" />
                <span>Have Capital Gains, ESOPs or House Rent Allowance (HRA)?</span>
              </div>
              <p className="leading-relaxed">
                Rules can vary for equity capital gains (12.5% LTCG, 20% STCG) and business expenses. Let Consultant Sajid prepare your detailed statement to prevent defective return notices.
              </p>
              <a 
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="inline-flex items-center gap-1 font-semibold text-[#1d4ed8] hover:underline pt-1"
              >
                <span>Call Sajid directly for computation help &rarr;</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
