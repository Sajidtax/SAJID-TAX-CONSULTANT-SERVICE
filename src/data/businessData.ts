import { ServiceItem, ComplianceDeadline, WorkingHourDay } from '../types';

export const BUSINESS_INFO = {
  name: "SAJID TAX CONSULTANT SERVICE",
  brandShort: "Sajid Tax Consultant",
  tagline: "Your Growth, Our Responsibility",
  subtitle: "Accounting, Auditing, GST, ITR & Compliance Services",
  handle: "workwithsajid",
  email: "workwithsajid@zohomail.in",
  phone: "77620 67143",
  phoneDisplay: "+91 77620 67143",
  phoneClean: "+917762067143",
  upiId: "7762067143@ybl",
  address: {
    line1: "Office No.114A, 2nd Floor, Paras Juice Building",
    line2: "Tata Road No.2, Near Prasad Chamber",
    area: "Opera House, Mumbai",
    pincode: "400004",
    state: "Maharashtra, India",
    full: "Office No.114A 2nd Floor Paras Juice Building Tata Road No.2 Near Prasad Chamber Opera House Mumbai-400004"
  },
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Paras+Juice+Building+Tata+Road+No+2+Prasad+Chamber+Opera+House+Mumbai+400004",
  experienceYears: "14+",
  clientsServed: "1,200+",
  filingsCompleted: "8,500+",
};

export const WORKING_HOURS: WorkingHourDay[] = [
  { day: "Monday", hours: "11:00 am - 7:00 pm", isOpen: true },
  { day: "Tuesday", hours: "11:00 am - 7:00 pm", isOpen: true },
  { day: "Wednesday", hours: "11:00 am - 7:00 pm", isOpen: true },
  { day: "Thursday", hours: "11:00 am - 7:00 pm", isOpen: true },
  { day: "Friday", hours: "11:00 am - 7:00 pm", isOpen: true },
  { day: "Saturday", hours: "11:00 am - 7:00 pm", isOpen: true },
  { day: "Sunday", hours: "Closed", isOpen: false },
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "accounting",
    number: "01",
    title: "Accounting & Bookkeeping",
    category: "accounting",
    tagline: "Day-to-day books, ledger maintenance & periodic MIS reporting",
    description: "Flawless computerized accounting on Tally/Zoho/QuickBooks, bank reconciliations, vendor ledgers, and profit & loss statements tailored to your business scale.",
    deliverables: [
      "Daily ledger posting & cash/bank book maintenance",
      "Monthly Bank & Credit Card Reconciliations",
      "Trial Balance, Profit & Loss Account & Balance Sheet",
      "Accounts Receivable & Accounts Payable aging analysis",
    ],
    documentsRequired: [
      "Bank statements (PDF / Excel / CSV)",
      "Sales invoices & Purchase bills / receipts",
      "Expense vouchers & petty cash statements",
      "Previous year's financial statements (if existing)",
    ],
    turnaroundTime: "Monthly / Quarterly continuous support",
    badge: "Essential"
  },
  {
    id: "auditing",
    number: "02",
    title: "Auditing Services",
    category: "accounting",
    tagline: "Statutory, Tax & Internal audits with complete verification",
    description: "Thorough auditing of books to ensure complete compliance with Indian accounting standards, statutory mandates, and internal fraud prevention.",
    deliverables: [
      "Tax Audit under Section 44AB of the Income Tax Act",
      "Statutory & Internal Audit reports for private companies",
      "Stock & inventory physical/book verification audits",
      "Compliance deficiency memo & optimization strategies",
    ],
    documentsRequired: [
      "Full year Tally/ERP ledger backup",
      "Statutory registers, shareholding certificates & MOA/AOA",
      "All GST and TDS returns filed during the financial year",
      "Fixed asset register & loan agreements",
    ],
    turnaroundTime: "5 - 10 working days",
  },
  {
    id: "itr",
    number: "03",
    title: "Income Tax (ITR) Filing",
    category: "tax",
    tagline: "Salaried, Business, Freelancer & Corporate returns with max refund optimization",
    description: "Error-free computation of income, tax-saving deductions under Chapter VI-A (80C, 80D, 80G), capital gains calculation, and prompt return submission with instant acknowledgement.",
    deliverables: [
      "Computation of total income & tax liability calculation",
      "ITR-1, ITR-2, ITR-3, ITR-4 (Presumptive 44AD/44ADA), ITR-5/6 filing",
      "Foreign income & AIS / TIS discrepancy resolution",
      "ITR-V acknowledgement & e-verification support",
    ],
    documentsRequired: [
      "PAN Card & Aadhaar Card",
      "Form 16 / Form 16A / Salary slips",
      "Annual Information Statement (AIS) & 26AS",
      "Bank account statements with interest certificates",
      "Investment proofs (LIC, PPF, Mutual Funds, Home loan interest)",
    ],
    turnaroundTime: "24 - 48 Hours",
    badge: "High Demand"
  },
  {
    id: "gst",
    number: "04",
    title: "GST Registration & Filing",
    category: "tax",
    tagline: "New GST number registration, monthly GSTR-1, 3B & annual GSTR-9 returns",
    description: "Complete GST management from initial application & GSTIN issuance to regular return filings, ITC reconciliation (2B vs books), and reply to GST department notices.",
    deliverables: [
      "GSTIN Registration Certificate with principal & additional place of business",
      "Monthly / Quarterly GSTR-1 (Sales) & GSTR-3B (Tax payment) filing",
      "Input Tax Credit (ITC) optimization & 2B vs Purchase matching",
      "GSTR-9 Annual Return & GSTR-9C Reconciliation certification",
    ],
    documentsRequired: [
      "PAN Card of Proprietor / Partners / Directors",
      "Aadhaar Card with mobile linkage for Aadhaar OTP authentication",
      "Electricity bill / Rent Agreement / NOC of business premises",
      "Cancelled cheque / Bank passbook copy",
    ],
    turnaroundTime: "3 - 7 days for Registration | Monthly for Filings",
    badge: "Popular"
  },
  {
    id: "pvt-llp",
    number: "05",
    title: "Pvt Ltd & LLP Registration",
    category: "registration",
    tagline: "Company incorporation with MCA, SPICe+ filing, DIN, DSC & PAN/TAN",
    description: "Launch your dream company or Limited Liability Partnership smoothly with end-to-end legal documentation, Name Approval (RUN/SPICe+), MOA/AOA drafting, and ROC compliance.",
    deliverables: [
      "Director Identification Numbers (DIN) & Digital Signature Certificates (DSC Class 3)",
      "Certificate of Incorporation (COI) issued by Ministry of Corporate Affairs",
      "Memorandum of Association (MOA) & Articles of Association (AOA)",
      "Company PAN, TAN, EPFO, ESIC & Bank Account Opening Documentation",
    ],
    documentsRequired: [
      "PAN Card & Aadhaar/Passport of all Directors/Partners",
      "Bank statements / Utility bills of all Directors (less than 2 months old)",
      "Passport size photographs",
      "Proof of Registered Office Address (Electricity bill + NOC / Rent Agreement)",
    ],
    turnaroundTime: "7 - 10 working days",
  },
  {
    id: "udyam",
    number: "06",
    title: "Udyam MSME Registration",
    category: "registration",
    tagline: "Government MSME certificate for subsidies, priority loans & tax benefits",
    description: "Get your business officially certified as Micro, Small or Medium Enterprise (MSME) under the Ministry of MSME to unlock lower interest rates, collateral-free loans, and payment protection.",
    deliverables: [
      "Official Udyam Registration Certificate with QR Code",
      "NIC Code classification for multiple business activities",
      "Guidance on MSME 45-day payment recovery rules (Section 43B(h))",
      "Access to Government tender exemptions & trademark subsidies",
    ],
    documentsRequired: [
      "Aadhaar Card of the Applicant / Authorised Partner",
      "PAN Card of the Business / Individual",
      "Bank Account details (Account number & IFSC code)",
      "Basic business details (Turnover, investment in plant & machinery)",
    ],
    turnaroundTime: "1 - 2 working days",
  },
  {
    id: "gumasta",
    number: "07",
    title: "Gumasta License (Shop & Establishment)",
    category: "registration",
    tagline: "Maharashtra Shop & Establishment Intimation & Registration in Mumbai",
    description: "Mandatory license for all shops, offices, commercial establishments, and service businesses operating within Maharashtra / BMC Mumbai limits to operate legally and open current accounts.",
    deliverables: [
      "Form A / Form F Gumasta Registration / Intimation Certificate",
      "BMC / Municipal Corporation compliance clearance",
      "Renewals and amendment of address/partner/nature of business",
      "Valid business proof for commercial bank current account opening",
    ],
    documentsRequired: [
      "Aadhaar & PAN card of Proprietor / Partners / Directors",
      "Shop / Office address proof (Electricity bill, Index II, or Rent Agreement)",
      "Photograph of the office / shop entrance showing Marathi name board",
      "Partnership deed / Certificate of Incorporation (if non-proprietorship)",
    ],
    turnaroundTime: "2 - 4 working days",
    badge: "Mumbai Local"
  },
  {
    id: "tds",
    number: "08",
    title: "TDS & TCS Compliance",
    category: "tax",
    tagline: "Monthly tax deduction computation, challan payment & quarterly return filing",
    description: "Never miss a TDS deduction rate or payment deadline. We handle salary TDS (Form 24Q), contractor/professional/rent TDS (Form 26Q), and issue Form 16/16A digitally.",
    deliverables: [
      "Monthly TDS calculation under 194C, 194J, 194I, 194H, 194Q & 192",
      "Online Challan (ITNS 281) generation & payment validation",
      "Quarterly TDS Return filing (Q1, Q2, Q3, Q4) with TRACES confirmation",
      "Form 16 (Part A & B) and Form 16A certificate generation from TRACES",
    ],
    documentsRequired: [
      "TAN Number details",
      "Monthly vendor expense sheets with PAN of deductees",
      "Salary register with employee deductions",
      "Challan payment receipts (CIN / BSR code details)",
    ],
    turnaroundTime: "Quarterly due date tracking",
  },
  {
    id: "pf-reg",
    number: "09",
    title: "PF Registration & Compliance",
    category: "compliance",
    tagline: "EPFO establishment code registration, monthly ECR filing & challan generation",
    description: "Employee Provident Fund (EPF) registration for businesses reaching threshold or voluntary coverage, member UAN generation, KYC updates, and monthly return submissions.",
    deliverables: [
      "EPFO Employer Registration Code issuance",
      "Employee Universal Account Number (UAN) generation & activation",
      "Monthly Electronic Challan cum Return (ECR) generation & filing",
      "Annual returns (Form 3A & Form 6A) and inspectorate compliance support",
    ],
    documentsRequired: [
      "Company PAN, Certificate of Incorporation / Partnership deed",
      "Address proof of establishment with GST & Gumasta",
      "Director / Partner KYC (PAN, Aadhaar, Digital Signature)",
      "Employee muster roll & salary breakup (Basic + DA)",
    ],
    turnaroundTime: "3 - 5 working days",
  },
  {
    id: "pf-withdraw",
    number: "10",
    title: "PF Withdrawal & Claims Settlement",
    category: "compliance",
    tagline: "Fast online PF claim filing (Form 19, 10C, 31), transfer & rejection resolutions",
    description: "Stuck PF money? We assist employees with smooth online PF withdrawals (Full & Final settlement, Pension withdrawal Form 10C, Advance Form 31), UAN date of exit marking, and error fixes.",
    deliverables: [
      "Online Form 19 (PF Settlement) & Form 10C (Pension Scheme) submission",
      "Form 31 (PF Advance for Medical / Housing / Marriage / Illness) filing",
      "EPF Member Passbook calculation & grievance redressal on EPFiGMS",
      "Date of Exit marking & previous employer transfer assistance",
    ],
    documentsRequired: [
      "UAN Number & Password (or mobile number linked with Aadhaar)",
      "Aadhaar Card & PAN Card linked with EPFO database",
      "Bank Account passbook or cancelled cheque with name & IFSC clearly printed",
      "Relieving letter / Service end date proof (for full settlement)",
    ],
    turnaroundTime: "24 - 48 Hours for filing | 7-15 days for EPFO bank credit",
    badge: "Direct Help"
  },
];

export const COMPLIANCE_CALENDAR: ComplianceDeadline[] = [
  {
    id: "gst-3b",
    title: "GSTR-3B Monthly Return",
    frequency: "Monthly",
    dueDate: "20th of Every Month",
    category: "GST",
    importance: "urgent",
    description: "Mandatory monthly summary return of outward and inward supplies along with tax payment."
  },
  {
    id: "gstr-1",
    title: "GSTR-1 Monthly Return",
    frequency: "Monthly / QRMP",
    dueDate: "11th / 13th of Month",
    category: "GST",
    importance: "regular",
    description: "Detailed statement of outward sales/supplies made during the tax period."
  },
  {
    id: "tds-deposit",
    title: "TDS / TCS Monthly Deposit",
    frequency: "Monthly",
    dueDate: "7th of Every Month",
    category: "TDS",
    importance: "urgent",
    description: "Deposit of TDS deducted in previous month to the central government via Challan 281."
  },
  {
    id: "pf-esic",
    title: "EPF & ESIC Monthly Contribution",
    frequency: "Monthly",
    dueDate: "15th of Every Month",
    category: "PF",
    importance: "urgent",
    description: "Deposit of employee & employer Provident Fund / ESIC contribution along with ECR filing."
  },
  {
    id: "itr-indiv",
    title: "Income Tax Return (Non-Audit)",
    frequency: "Annual",
    dueDate: "31st July",
    category: "ITR",
    importance: "urgent",
    description: "Annual return filing for individuals, salaried employees, HUFs and non-audit businesses."
  },
  {
    id: "itr-audit",
    title: "Tax Audit & Corporate ITR",
    frequency: "Annual",
    dueDate: "31st October",
    category: "ITR",
    importance: "regular",
    description: "Filing of Tax Audit Report u/s 44AB and corporate/business tax returns."
  },
  {
    id: "advance-tax",
    title: "Advance Tax Installments",
    frequency: "Quarterly",
    dueDate: "15 Jun, 15 Sep, 15 Dec, 15 Mar",
    category: "ITR",
    importance: "regular",
    description: "Quarterly installment payment of estimated income tax liability if tax exceeds ₹10,000."
  },
  {
    id: "tds-return",
    title: "Quarterly TDS Returns (24Q/26Q)",
    frequency: "Quarterly",
    dueDate: "31st July, 31st Oct, 31st Jan, 31st May",
    category: "TDS",
    importance: "regular",
    description: "Submission of quarterly TDS statements for salary and non-salary deductions."
  },
];

export const FAQS = [
  {
    q: "How quickly can you file my Income Tax Return (ITR)?",
    a: "Once you share your Form 16, bank statements, and PAN/Aadhaar details, our team prepares the computation and files your return within 24 to 48 hours, providing instant e-filing acknowledgement."
  },
  {
    q: "Is Gumasta license mandatory for a new business in Mumbai?",
    a: "Yes. In Maharashtra, under the Maharashtra Shops and Establishments Act, any commercial establishment or office must obtain either an Intimation or a Registration certificate. It is also required by banks to open your current account."
  },
  {
    q: "My PF claim was rejected by EPFO. Can you help resolve it?",
    a: "Absolutely. We specialize in fixing common PF rejection reasons like KYC mismatch, missing Date of Exit, name spelling errors, or bank account issues. We re-apply with corrected documents and track the claim until money is credited."
  },
  {
    q: "Do I need to visit your Opera House office physically?",
    a: "You are always welcome to visit our office in Opera House, Mumbai during working hours (11:00 AM to 7:00 PM, Mon-Sat). However, we also provide 100% digital service via WhatsApp and Email for your convenience."
  },
  {
    q: "What are the penalty consequences for late GST or TDS filing?",
    a: "Late GST filing incurs daily late fees plus 18% per annum interest on unpaid tax liability. Delayed TDS payments attract 1.5% interest per month and late filing fees of ₹200/day. We ensure all your due dates are mapped so you never pay penalties."
  },
];
