import { useState, useEffect, useRef } from 'react';
import { XIcon, MessageSquareIcon, SparklesIcon, PhoneIcon } from './CriticalIcons';
import { BUSINESS_INFO } from '../data/businessData';

interface Message {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  actionText?: string;
  whatsappQuery?: string;
}

interface AiTaxAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QUICK_PROMPTS = [
  "New vs Old Tax Regime 2025?",
  "Documents for GST Registration?",
  "How to solve PF claim rejection?",
  "Gumasta license in Mumbai?",
  "What is the penalty for late ITR?",
  "Where is your Opera House office?"
];

function generateAiResponse(input: string): { text: string; whatsappQuery: string } {
  const query = input.toLowerCase().trim();

  // 1. New vs Old Tax Regime / Slabs
  if (query.includes('regime') || query.includes('slab') || query.includes('80c') || query.includes('tax rate') || query.includes('deduction')) {
    return {
      text: `Under the New Tax Regime (FY 2024-25 / AY 2025-26):
• ₹0 - ₹3,00,000: Nil (0%)
• ₹3,00,001 - ₹7,00,000: 5%
• ₹7,00,001 - ₹10,00,000: 10%
• ₹10,00,001 - ₹12,00,000: 15%
• ₹12,00,001 - ₹15,00,000: 20%
• Above ₹15,00,000: 30%

⭐ Tax Rebate: Under Section 87A, salaried individuals with taxable income up to ₹7.75 Lakhs pay ₹0 Tax (thanks to the ₹75,000 Standard Deduction + Rebate)!

Old Regime is only better if you have large deductions (Home Loan Interest >₹2L, HRA, 80C/80D) exceeding ₹3.75 Lakhs.`,
      whatsappQuery: "Hello Sajid Sir, please calculate which tax regime (Old vs New) saves me more tax."
    };
  }

  // 2. GST Registration & Thresholds
  if (query.includes('gst') || query.includes('gstin') || query.includes('turnover')) {
    return {
      text: `Goods & Services Tax (GST) in India:
• Turnover Threshold for Goods: ₹40 Lakhs (Normal States) / ₹20 Lakhs for services.
• Mandatory GST: Required for Interstate supply (selling outside state) or E-Commerce sellers regardless of turnover.
• Documents Required:
  1. PAN & Aadhaar Card of Proprietor / Partners / Directors
  2. Electricity bill / Rent agreement of business place
  3. Cancelled Cheque or Bank Statement
  4. Passport photo of applicant

We process new GST registrations within 3 to 7 working days with 100% government approval.`,
      whatsappQuery: "Hello Sajid Sir, I need new GST registration / monthly GST return filing assistance."
    };
  }

  // 3. PF / EPF Withdrawal & Rejection Fix
  if (query.includes('pf') || query.includes('epf') || query.includes('epfo') || query.includes('form 19') || query.includes('form 10c') || query.includes('uan')) {
    return {
      text: `EPFO / PF Withdrawal & Dispute Solutions:
• Form 19: Full & final PF provident fund settlement (after leaving job for 2 months).
• Form 10C: Pension fund withdrawal benefit.
• Form 31: Advance withdrawal for illness, marriage, or home purchase.

Common Rejection Reasons We Fix:
1. Missing or incorrect "Date of Exit" marked by previous employer.
2. Father's name or Member name mismatch between Aadhaar and EPFO.
3. Bank passbook photo unclear or cancelled cheque without printed name.
4. Duplicate UAN or KYC bank rejection.

We track your claim and resolve rejections so your money credits directly into your bank account.`,
      whatsappQuery: "Hello Sajid Sir, my PF claim was rejected / I need help with PF withdrawal."
    };
  }

  // 4. Gumasta License in Mumbai
  if (query.includes('gumasta') || query.includes('shop') || query.includes('bmc') || query.includes('establishment')) {
    return {
      text: `Gumasta License (Maharashtra Shop & Establishment Act):
• Mandatory in Mumbai for all commercial offices, traders, and consultancies.
• Required by banks (HDFC, ICICI, SBI) to open a Current Account.
• 0-9 Employees: Online Intimation Certificate (Form F) with lifetime validity.
• 10+ Employees: Official Registration Certificate (Form G).

Required Documents:
• Electricity bill of office / shop
• Rent agreement / NOC from owner
• Aadhaar & PAN Card of owner
• Photo of establishment with Marathi signboard on display.`,
      whatsappQuery: "Hello Sajid Sir, I need to obtain a Gumasta license in Mumbai for my office/business."
    };
  }

  // 5. ITR Filing & Penalties
  if (query.includes('itr') || query.includes('income tax') || query.includes('penalty') || query.includes('deadline') || query.includes('due date')) {
    return {
      text: `Income Tax Return (ITR) Compliance & Deadlines:
• Due Date for Individuals & Non-Audit: 31st July of Assessment Year.
• Due Date for Tax Audit (Section 44AB): 31st October.
• Late Filing Penalty (Section 234F):
  - Income up to ₹5,00,000: ₹1,000 late fee
  - Income above ₹5,00,000: ₹5,000 late fee + 1% monthly interest under Section 234A.
• Documents to Share: Form 16, Bank Statements, PAN, Aadhaar, and Investment Proofs.

Our team files your ITR within 24 to 48 hours and maximizes your legitimate refunds.`,
      whatsappQuery: "Hello Sajid Sir, I want to file my Income Tax Return (ITR). Please let me know the process."
    };
  }

  // 6. Company Incorporation / Pvt Ltd / LLP
  if (query.includes('company') || query.includes('pvt ltd') || query.includes('llp') || query.includes('incorporation') || query.includes('mca')) {
    return {
      text: `Company Incorporation with MCA (Ministry of Corporate Affairs):
• Private Limited (Pvt Ltd): Ideal for startups, high growth, and raising investment (Min 2 directors).
• Limited Liability Partnership (LLP): Lower compliance burden, ideal for professional services.
• Step-by-Step Incorporation:
  1. Digital Signature Certificate (DSC) & Director Identification Number (DIN)
  2. SPICe+ Part A: Name Reservation
  3. SPICe+ Part B: Drafting MOA, AOA, PAN, TAN, EPFO, ESIC & GSTIN
  4. Certificate of Incorporation (COI) issued by Registrar of Companies (ROC).`,
      whatsappQuery: "Hello Sajid Sir, I want to incorporate a new Pvt Ltd company / LLP."
    };
  }

  // 7. Office Location & Contact
  if (query.includes('office') || query.includes('location') || query.includes('address') || query.includes('where') || query.includes('timing') || query.includes('hours') || query.includes('phone') || query.includes('sajid')) {
    return {
      text: `Sajid Tax Consultant Service Office Details:
📍 Address: Office No.114A, 2nd Floor, Paras Juice Building, Tata Road No.2, Near Prasad Chamber, Opera House, Mumbai - 400004 (Just 5 mins from Charni Road Station).
⏰ Working Hours: Monday to Saturday, 11:00 AM to 7:00 PM (Sunday Closed).
📞 Direct Phone: +91 77620 67143
✉️ Email: workwithsajid@zohomail.in

You are welcome to visit our Opera House office in person or consult digitally via WhatsApp!`,
      whatsappQuery: "Hello Sajid Sir, I would like to visit your Opera House office for a tax consultation."
    };
  }

  // Default smart tax advice
  return {
    text: `Thank you for your query regarding "${input}".
Sajid Tax Consultant Service specializes in:
1. Income Tax Return (ITR-1 to ITR-7) & Notice handling
2. GST Registration, Monthly GSTR-1/3B & Annual Audit
3. EPF / PF Claim Settlements & Rejections
4. BMC Gumasta License (Mumbai Shop & Establishment)
5. MCA Pvt Ltd / LLP Incorporation & TDS Filings

Would you like Consultant Sajid to review your documents and provide a customized solution?`,
    whatsappQuery: `Hello Sajid Sir, I have a query regarding: "${input}". Please guide me.`
  };
}

export default function AiTaxAssistantModal({ isOpen, onClose }: AiTaxAssistantModalProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'ai',
      text: `Namaste! 🙏 I am the Sajid Tax AI Assistant.

I can help you with:
• New vs Old Tax Regime slabs & 87A rebate
• GST registration turnover & documents
• PF withdrawal & rejection fixes
• Mumbai Gumasta License (Shop & Establishment)
• MCA Pvt Ltd & LLP registration

Tap any quick topic below or type your question!`
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping, isOpen]);

  const handleSend = (textToSend?: string) => {
    const prompt = textToSend || inputValue;
    if (!prompt.trim()) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: prompt.trim()
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) setInputValue('');
    setIsTyping(true);

    // Simulate realistic AI analysis time
    setTimeout(() => {
      const response = generateAiResponse(prompt);
      const aiMessage: Message = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: response.text,
        actionText: 'Message Sajid on WhatsApp',
        whatsappQuery: response.whatsappQuery
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 350);
  };

  return (
    <div
      className={`fixed inset-0 z-50 transition-all duration-300 ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="ai-assistant-title"
    >
      {/* Dark backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs transition-opacity duration-300"
        onClick={onClose}
      ></div>

      {/* Smooth Slide-Over Panel from Right */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-full sm:max-w-md bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-out transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header - Always 100% visible at the top */}
        <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 p-4 sm:p-5 text-white flex items-center justify-between border-b border-white/10 shrink-0 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-500 via-indigo-500 to-amber-400 flex items-center justify-center shadow-md ring-2 ring-white/20">
              <SparklesIcon className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 id="ai-assistant-title" className="font-display font-bold text-base sm:text-lg text-white leading-tight">
                  Sajid Tax AI Advisor
                </h3>
                <span className="px-1.5 py-0.5 text-[9px] font-mono font-bold uppercase rounded bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                  Active
                </span>
              </div>
              <p className="text-[11px] text-blue-200/90 font-mono">
                ITR, GST, EPFO &amp; Mumbai Regulations
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close AI Assistant"
          >
            <XIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Chat Messages Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 bg-[#f8fafc]">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[88%] sm:max-w-[85%] rounded-2xl p-3.5 sm:p-4 text-xs sm:text-sm leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-[#1d4ed8] text-white rounded-br-xs shadow-xs'
                    : 'bg-white text-slate-800 border border-slate-200 shadow-xs rounded-bl-xs'
                }`}
              >
                <div className="whitespace-pre-line font-sans">{msg.text}</div>

                {msg.whatsappQuery && (
                  <div className="mt-3 pt-3 border-t border-slate-100 flex flex-col sm:flex-row gap-2">
                    <a
                      href={`https://wa.me/${BUSINESS_INFO.phoneClean.replace('+', '')}?text=${encodeURIComponent(msg.whatsappQuery)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-[#047857] hover:bg-[#065f46] text-white font-semibold text-xs shadow-xs transition-all"
                    >
                      <MessageSquareIcon className="w-3.5 h-3.5" />
                      <span>{msg.actionText || 'Message on WhatsApp'}</span>
                    </a>
                    <a
                      href={`tel:${BUSINESS_INFO.phoneClean}`}
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-all"
                    >
                      <PhoneIcon className="w-3 h-3 text-[#1d4ed8]" />
                      <span>Call {BUSINESS_INFO.phone}</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white border border-slate-200 rounded-2xl rounded-bl-xs p-3.5 flex items-center gap-1.5 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-bounce"></span>
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-bounce [animation-delay:0.4s]"></span>
                <span className="text-xs text-slate-400 font-mono ml-2">Consultant AI calculating...</span>
              </div>
            </div>
          )}

          <div ref={chatBottomRef}></div>
        </div>

        {/* Quick Suggestion Chips (Clean pills with no ugly scrollbar) */}
        <div 
          className="px-4 py-2.5 bg-white border-t border-slate-200/80 flex items-center gap-1.5 overflow-x-auto text-xs shrink-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <span className="text-[10px] font-mono uppercase font-bold text-slate-400 shrink-0 mr-1">
            Topics:
          </span>
          {QUICK_PROMPTS.map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(prompt)}
              className="shrink-0 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-blue-50 hover:text-[#1d4ed8] hover:border-blue-200 border border-slate-200 text-slate-700 text-[11px] font-medium transition-all active:scale-95"
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="p-3 sm:p-4 bg-white border-t border-slate-200 flex items-center gap-2 shrink-0"
        >
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type your question (e.g. New slab, GST, PF)..."
            className="flex-1 px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-hidden focus:border-[#1d4ed8] focus:ring-2 focus:ring-blue-100 transition-all placeholder:text-slate-400 bg-slate-50/50 focus:bg-white"
          />
          <button
            type="submit"
            disabled={!inputValue.trim() || isTyping}
            className="px-4 py-2.5 bg-[#1d4ed8] hover:bg-[#1e40af] disabled:opacity-50 text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-xs flex items-center gap-1.5 shrink-0 active:scale-95"
          >
            <span>Ask</span>
            <SparklesIcon className="w-3.5 h-3.5 text-amber-300" />
          </button>
        </form>
      </div>
    </div>
  );
}
