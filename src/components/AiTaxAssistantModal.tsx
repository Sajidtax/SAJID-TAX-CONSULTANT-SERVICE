import { useState, useEffect, useRef } from 'react';
import { XIcon, MessageSquareIcon, SparklesIcon, PhoneIcon, SendIcon } from './CriticalIcons';
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
  "Fees kitna lagta hai?",
  "Documents for GST Registration?",
  "PF claim rejection solution?",
  "Mumbai Gumasta license?",
  "Opera House office timing?"
];

function generateAiResponse(input: string): { text: string; whatsappQuery: string } {
  const q = input.toLowerCase().trim();

  // 1. Greetings / Help
  if (
    q === 'hi' || q === 'hello' || q === 'hey' || q.includes('namaste') ||
    q.includes('salam') || q.includes('kaise ho') || q.includes('kya haal') ||
    q.includes('who are you') || q.includes('kya karte ho') || q.includes('help')
  ) {
    return {
      text: `Namaste! 🙏 Main Sajid Tax Consultant Service ka Official AI Tax Advisor hoon.

Main aapki in cheezon me madad kar sakta hoon:
1. Income Tax Return (ITR) & New vs Old Tax Slab
2. GST Registration & Monthly Return Filing
3. PF / EPF Withdrawal & Rejection Problem Solution
4. Mumbai BMC Gumasta License (Shop & Establishment)
5. Pvt Ltd & LLP Company Registration with MCA
6. Office Timings, Fees & Document checklist

Aap apna sawaal neeche type kar sakte hain ya quick topics par tap karein!`,
      whatsappQuery: "Hello Sajid Sir, I have a tax and compliance query. Please assist me."
    };
  }

  // 2. Fees / Pricing / Cost
  if (
    q.includes('fee') || q.includes('fees') || q.includes('charge') || q.includes('charges') ||
    q.includes('cost') || q.includes('price') || q.includes('rate') || q.includes('kitna lagega') ||
    q.includes('kitna paisa') || q.includes('kitna kharcha') || q.includes('paisa') || q.includes('kharch')
  ) {
    return {
      text: `💰 Sajid Tax Consultant Service Pricing & Fee Structure:

• Initial Consultation: 100% FREE!
• Salaried ITR Filing (ITR-1): Very affordable, starting from ₹500 onwards.
• Business / Freelancer ITR (ITR-3 / 44AD): Based on turnover and computation complexity.
• GST Registration: Standard government + processing charge with 100% approval.
• Mumbai Gumasta License: Complete BMC intimation & registration service.
• PF Claim Settlement: Zero advance risk, complete guidance till money arrives in bank account.

Hum transparent aur genuine fees quote karte hain bina kisi hidden charges ke.`,
      whatsappQuery: "Hello Sajid Sir, please let me know your fees for tax filing / compliance services."
    };
  }

  // 3. New vs Old Tax Regime / Slabs / Savings
  if (
    q.includes('regime') || q.includes('slab') || q.includes('slabs') || q.includes('80c') ||
    q.includes('deduction') || q.includes('saving') || q.includes('tax rate') ||
    q.includes('tax kitna') || q.includes('tax bachao') || q.includes('new regime') ||
    q.includes('old regime') || q.includes('7.75') || q.includes('7 lakh') || q.includes('rebate')
  ) {
    return {
      text: `📊 New Tax Regime Slabs (FY 2024-25 / AY 2025-26):
• ₹0 - ₹3,00,000: Nil (0%)
• ₹3,00,001 - ₹7,00,000: 5%
• ₹7,00,001 - ₹10,00,000: 10%
• ₹10,00,001 - ₹12,00,000: 15%
• ₹12,00,001 - ₹15,00,000: 20%
• Above ₹15,00,000: 30%

⭐ Section 87A Tax Rebate Benefit:
Salaried individuals with total income up to ₹7.75 Lakhs pay ZERO TAX (due to ₹75,000 standard deduction + 87A rebate)!

💡 Kaunsa Regime Better Hai?
Agar aapke paas Home Loan Interest (>₹2 Lakhs), HRA, aur 80C/80D mila kar ₹3.75 Lakhs se zyada deduction nahi hai, to NEW REGIME aapke liye best aur sabse zyada tax bachayega!`,
      whatsappQuery: "Hello Sajid Sir, please calculate which tax regime (Old vs New) saves me more tax."
    };
  }

  // 4. GST Registration & Filing
  if (
    q.includes('gst') || q.includes('gstin') || q.includes('turnover') || q.includes('gstr') ||
    q.includes('gst number') || q.includes('invoice') || q.includes('e-way')
  ) {
    return {
      text: `🧾 GST Registration & Compliance Rules:

• Turnover Threshold:
  - Goods Traders / Manufacturers: ₹40 Lakhs (Normal States)
  - Service Providers / Freelancers: ₹20 Lakhs
  - Interstate (Doosre state me bechna) ya E-commerce: Registration MANDATORY chahe turnover kitna bhi ho!

• Required Documents:
  1. PAN Card & Aadhaar Card (Owner/Partners/Directors)
  2. Electricity Bill / Rent Agreement of Business Place
  3. Cancelled Cheque / Bank Statement
  4. Passport Size Photo

Hum 3 se 7 dino ke andar new GSTIN generate karwa dete hain aur monthly GSTR-1 / 3B filing karte hain.`,
      whatsappQuery: "Hello Sajid Sir, I need GST registration / monthly GST return filing assistance."
    };
  }

  // 5. PF / EPF Withdrawal & Rejection Fix
  if (
    q.includes('pf') || q.includes('epf') || q.includes('epfo') || q.includes('uan') ||
    q.includes('form 19') || q.includes('form 10c') || q.includes('form 31') ||
    q.includes('rejection') || q.includes('reject') || q.includes('date of exit') ||
    q.includes('paisa fas') || q.includes('claim')
  ) {
    return {
      text: `🏦 EPFO / PF Withdrawal & Dispute Solutions:

• Form 19: Full & final PF provident fund settlement (job chhodne ke 2 mahine baad).
• Form 10C: Pension fund withdrawal benefit.
• Form 31: Emergency advance withdrawal (bimari, shaadi, ya ghar ke liye).

🚨 PF Rejection ke Common Reasons Jo Hum Solve Karte Hain:
1. "Date of Exit" na hona ya galat hona (hum online update karwate hain).
2. Naam / Pitaji ke naam ki spelling Aadhaar aur EPFO me mismatch hona.
3. Bank KYC approved na hona ya passbook photo clear na hona.
4. Duplicate UAN ya member ID issue.

Hum aapke claim ko track karke paise bank me aane tak poora help karte hain.`,
      whatsappQuery: "Hello Sajid Sir, my PF claim was rejected / I need help with PF withdrawal."
    };
  }

  // 6. Gumasta License (Mumbai Shop & Establishment)
  if (
    q.includes('gumasta') || q.includes('shop') || q.includes('bmc') ||
    q.includes('establishment') || q.includes('dukan') || q.includes('licence') || q.includes('license')
  ) {
    return {
      text: `🏢 Gumasta License (Maharashtra Shop & Establishment Act):

• Mumbai me kisi bhi dukaan, commercial office, consultancy ya trading ke liye Gumasta License ZAROORI hai.
• Bank me Current Account kholne ke liye Gumasta certificate sabse pehla document maanga jata hai.
• 0-9 Employees: Form F Intimation (Lifetime validity, koi renewal jhanjhat nahi).
• 10+ Employees: Form G Registration certificate.

Zaroori Documents:
• Electricity bill of office/shop & Rent Agreement/NOC
• Owner ka PAN aur Aadhaar Card
• Dukaan/Office ka photo Marathi signboard ke sath.`,
      whatsappQuery: "Hello Sajid Sir, I need to obtain a Gumasta license in Mumbai for my office/business."
    };
  }

  // 7. Income Tax Return (ITR) Filing & Deadlines
  if (
    q.includes('itr') || q.includes('income tax') || q.includes('return') ||
    q.includes('penalty') || q.includes('deadline') || q.includes('due date') ||
    q.includes('form 16') || q.includes('notice') || q.includes('refund')
  ) {
    return {
      text: `📑 Income Tax Return (ITR) Filing & Due Dates:

• Due Date for Individuals & Salaried: 31st July.
• Due Date for Tax Audit (Section 44AB): 31st October.
• Late Filing Penalty (Section 234F):
  - Income up to ₹5 Lakhs: ₹1,000 late fee
  - Income above ₹5 Lakhs: ₹5,000 late fee + 1% monthly interest (Sec 234A).
• Documents Needed:
  - Form 16 (for salaried)
  - Bank Statements (April to March)
  - PAN Card & Aadhaar Card
  - Capital Gains / Crypto / Dividend statement (if any)

Humara office 24-48 ghante me accuracy ke sath ITR file karke instant acknowledgement provide karta hai.`,
      whatsappQuery: "Hello Sajid Sir, I want to file my Income Tax Return (ITR). Please let me know the process."
    };
  }

  // 8. Company Registration / Pvt Ltd / LLP
  if (
    q.includes('company') || q.includes('pvt ltd') || q.includes('llp') ||
    q.includes('incorporation') || q.includes('mca') || q.includes('startup') ||
    q.includes('firm') || q.includes('partnership')
  ) {
    return {
      text: `🏛️ MCA Company Incorporation Services:

• Private Limited (Pvt Ltd): Investors, funding aur brand value ke liye sabse best (Min 2 directors).
• Limited Liability Partnership (LLP): Low compliance aur professional partners ke liye best.
• Complete Step-by-Step Package:
  1. Digital Signature (DSC) & Director Identification Number (DIN)
  2. MCA SPICe+ Name Approval & Company Registration
  3. Drafting of MOA & AOA
  4. PAN, TAN, EPFO, ESIC & GSTIN registration
  5. Certificate of Incorporation (COI) issued by ROC.`,
      whatsappQuery: "Hello Sajid Sir, I want to incorporate a new Pvt Ltd company / LLP."
    };
  }

  // 9. Office Location, Contact & Timings
  if (
    q.includes('office') || q.includes('location') || q.includes('address') ||
    q.includes('where') || q.includes('timing') || q.includes('hours') ||
    q.includes('phone') || q.includes('call') || q.includes('number') ||
    q.includes('opera house') || q.includes('charni road') || q.includes('kahan')
  ) {
    return {
      text: `📍 Sajid Tax Consultant Service Office Details:

• Address: Office No.114A, 2nd Floor, Paras Juice Building, Tata Road No.2, Near Prasad Chamber, Opera House, Mumbai - 400004.
• Landmark: Charni Road Railway Station se sirf 5 minute walking distance.
• Working Hours: Monday to Saturday, 11:00 AM to 7:00 PM (Sunday Closed).
• Direct Phone: +91 77620 67143
• Email: workwithsajid@zohomail.in

Aap office me aakar face-to-face mil sakte hain ya WhatsApp par documents bhej kar ghar baithe kaam karwa sakte hain!`,
      whatsappQuery: "Hello Sajid Sir, I would like to visit your Opera House office for consultation."
    };
  }

  // 10. Audit, Accounting & Tally
  if (
    q.includes('audit') || q.includes('44ab') || q.includes('accounts') ||
    q.includes('bookkeeping') || q.includes('tally') || q.includes('balance sheet') ||
    q.includes('pnl') || q.includes('ledger')
  ) {
    return {
      text: `📊 Accounting, Bookkeeping & Tax Audit Services:

• Tally, Zoho Books, & QuickBooks daily/monthly ledger maintenance.
• Bank Reconciliation, Debtors & Creditors ageing analysis.
• Balance Sheet, Profit & Loss Statement preparation.
• Tax Audit under Section 44AB for business turnover exceeding ₹1 Crore (or ₹10 Crore digital transactions).
• TDS & TCS computation, deduction, and quarterly return filing (Form 24Q/26Q).`,
      whatsappQuery: "Hello Sajid Sir, I need accounting, bookkeeping, or tax audit services."
    };
  }

  // Default Smart Tax Advice
  return {
    text: `Aapke sawaal "${input}" ke silsile me:

Sajid Tax Consultant Service (Opera House, Mumbai) aapko complete guidance provide karta hai:
1. Income Tax Return (ITR) & Tax Saving Planning
2. GST Registration & Monthly Compliance
3. PF / EPF Claim Settlement & Rejection Fix
4. Mumbai BMC Gumasta License
5. Pvt Ltd & LLP Company Incorporation

Aap direct Consultant Sajid se WhatsApp par baat karke apne documents share kar sakte hain!`,
    whatsappQuery: `Hello Sajid Sir, I have a query regarding: "${input}". Please guide me.`
  };
}

export default function AiTaxAssistantModal({ isOpen, onClose }: AiTaxAssistantModalProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'ai',
      text: `Namaste! 🙏 Main Sajid Tax Consultant ka AI Advisor hoon.

Aap mujhse pooch sakte hain:
• New vs Old Tax Regime me kitna tax bachega?
• GST Registration ke liye kya documents chahiye?
• PF rejection kaise theek hoga?
• Mumbai Gumasta License kaise banega?
• Opera House office timings & consultation fees?

Neeche kisi bhi topic par tap karein ya apna sawaal type karein!`
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatBottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
      setTimeout(() => {
        inputRef.current?.focus();
      }, 200);
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

  // CRITICAL: When closed, render NOTHING so 0 horizontal space or touch issues occur
  if (!isOpen) return null;

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
    }, 300);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200 overflow-hidden"
      role="dialog"
      aria-modal="true"
      aria-labelledby="ai-assistant-title"
      onClick={onClose}
    >
      {/* Slide-over drawer container */}
      <div
        className="relative w-full sm:max-w-md h-[100dvh] bg-white shadow-2xl flex flex-col animate-in slide-in-from-right duration-250 text-[#0f172a]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header (Pinned at top with guaranteed visibility) */}
        <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 p-3.5 sm:p-4 text-white flex items-center justify-between border-b border-white/10 shrink-0 shadow-xs">
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-blue-500 via-indigo-500 to-amber-400 flex items-center justify-center shadow-md ring-2 ring-white/20 shrink-0">
              <SparklesIcon className="w-5 h-5 text-white" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h3 id="ai-assistant-title" className="font-display font-bold text-sm sm:text-base text-white leading-tight truncate">
                  Sajid Tax AI Advisor
                </h3>
                <span className="px-1.5 py-0.2 text-[9px] font-mono font-bold uppercase rounded bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 shrink-0">
                  Online
                </span>
              </div>
              <p className="text-[10.5px] sm:text-[11px] text-blue-200/90 font-mono truncate">
                ITR, GST, EPFO &amp; Mumbai Regulations
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 sm:p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors shrink-0"
            aria-label="Close AI Assistant"
          >
            <XIcon className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Chat Messages Body */}
        <div className="flex-1 overflow-y-auto p-3.5 sm:p-4 space-y-3.5 bg-[#f8fafc] overscroll-contain">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[88%] sm:max-w-[85%] rounded-2xl p-3 sm:p-3.5 text-xs sm:text-sm leading-relaxed ${
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
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-[#047857] hover:bg-[#065f46] text-white font-semibold text-xs shadow-xs transition-all active:scale-95"
                    >
                      <MessageSquareIcon className="w-3.5 h-3.5" />
                      <span>{msg.actionText || 'Message on WhatsApp'}</span>
                    </a>
                    <a
                      href={`tel:${BUSINESS_INFO.phoneClean}`}
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-all active:scale-95"
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
              <div className="bg-white border border-slate-200 rounded-2xl rounded-bl-xs p-3 flex items-center gap-1.5 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-bounce"></span>
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-bounce [animation-delay:0.4s]"></span>
                <span className="text-xs text-slate-400 font-mono ml-2">Analyzing tax laws...</span>
              </div>
            </div>
          )}

          <div ref={chatBottomRef}></div>
        </div>

        {/* Quick Suggestion Chips (Smooth pills without native scrollbar) */}
        <div 
          className="px-3 py-2 bg-white border-t border-slate-200/80 flex items-center gap-1.5 overflow-x-auto text-xs shrink-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <span className="text-[10px] font-mono uppercase font-bold text-slate-400 shrink-0 mr-1">
            Topics:
          </span>
          {QUICK_PROMPTS.map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(prompt)}
              className="shrink-0 px-2.5 py-1 rounded-full bg-slate-100 hover:bg-blue-50 hover:text-[#1d4ed8] hover:border-blue-200 border border-slate-200 text-slate-700 text-[11px] font-medium transition-all active:scale-95"
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
          className="p-2.5 sm:p-3 bg-white border-t border-slate-200 flex items-center gap-2 shrink-0 pb-[max(0.75rem,env(safe-area-inset-bottom))]"
        >
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type question (e.g. Fees, Tax slab, PF, GST)..."
            className="flex-1 px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-hidden focus:border-[#1d4ed8] focus:ring-2 focus:ring-blue-100 transition-all placeholder:text-slate-400 bg-slate-50/50 focus:bg-white"
          />
          <button
            type="submit"
            disabled={!inputValue.trim() || isTyping}
            className="px-3.5 py-2 bg-[#1d4ed8] hover:bg-[#1e40af] disabled:opacity-50 text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-xs flex items-center gap-1 shrink-0 active:scale-95"
            aria-label="Send query"
          >
            <span>Ask</span>
            <SendIcon className="w-3.5 h-3.5 text-white" />
          </button>
        </form>
      </div>
    </div>
  );
}
