import { useState, type FormEvent } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO, SERVICES_LIST } from '../data/businessData';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: SERVICES_LIST[0].title,
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleSendViaWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Sajid Sir,\n\nName: ${formData.name || 'Client'}\nPhone: ${formData.phone || 'N/A'}\nService Needed: ${formData.service}\nRequirement: ${formData.message || 'I need consultation for my tax/accounting work.'}`
    );
    window.open(`https://wa.me/${BUSINESS_INFO.phoneClean.replace('+', '')}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-[#0A0A0A] border-t border-[#ffffff12]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase text-[#D4AF37] tracking-widest">
            <span className="w-6 h-[1.5px] bg-[#D4AF37]"></span>
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#F5F2ED] tracking-tight">
            Let&apos;s sort your compliance out today.
          </h2>
          <p className="text-sm sm:text-base text-[#A3A3A3] leading-relaxed">
            Reach Consultant Sajid directly via phone, WhatsApp, email, or request a callback using the form below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-[#141414] rounded-lg border border-[#ffffff15] p-6 sm:p-7 shadow-xl space-y-5">
              <h3 className="font-display font-bold text-xl text-[#F5F2ED]">
                Direct Contact Points
              </h3>

              {/* Phone Card */}
              <div className="flex items-start gap-4 p-3.5 rounded bg-[#1A1A1A] border border-[#ffffff12]">
                <div className="w-9 h-9 rounded bg-[#D4AF37] text-[#0A0A0A] flex items-center justify-center shrink-0 font-bold">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="space-y-0.5">
                  <div className="font-mono text-[10px] uppercase font-bold text-[#A3A3A3]">
                    Phone &amp; Direct Call
                  </div>
                  <a
                    href={`tel:${BUSINESS_INFO.phoneClean}`}
                    className="font-mono font-bold text-base text-[#F5F2ED] hover:text-[#D4AF37] transition-colors block"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                  <p className="text-[11px] text-[#737373]">Available Mon–Sat: 11 AM – 7 PM</p>
                </div>
              </div>

              {/* WhatsApp Card */}
              <div className="flex items-start gap-4 p-3.5 rounded bg-[#1A1A1A] border border-[#195E3E]/40">
                <div className="w-9 h-9 rounded bg-[#195E3E] text-white flex items-center justify-center shrink-0">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div className="space-y-0.5">
                  <div className="font-mono text-[10px] uppercase font-bold text-emerald-400">
                    WhatsApp Chat Support
                  </div>
                  <a
                    href={`https://wa.me/${BUSINESS_INFO.phoneClean.replace('+', '')}?text=Hello%20Sajid%20Tax%20Consultant,%20I%20need%20tax%20advice.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono font-bold text-base text-emerald-400 hover:underline block"
                  >
                    +91 {BUSINESS_INFO.phone}
                  </a>
                  <p className="text-[11px] text-[#737373]">Quick document sharing &amp; chat</p>
                </div>
              </div>

              {/* Email Card */}
              <div className="flex items-start gap-4 p-3.5 rounded bg-[#1A1A1A] border border-[#ffffff12]">
                <div className="w-9 h-9 rounded bg-[#262626] border border-[#D4AF37]/30 text-[#D4AF37] flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="space-y-0.5">
                  <div className="font-mono text-[10px] uppercase font-bold text-[#A3A3A3]">
                    Official Email
                  </div>
                  <a
                    href={`mailto:${BUSINESS_INFO.email}`}
                    className="font-mono font-bold text-sm sm:text-base text-[#F5F2ED] hover:text-[#D4AF37] transition-colors break-all block"
                  >
                    {BUSINESS_INFO.email}
                  </a>
                  <p className="text-[11px] text-[#737373]">Send files, forms, and enquiries</p>
                </div>
              </div>

              {/* Office Address Card */}
              <div className="flex items-start gap-4 p-3.5 rounded bg-[#1A1A1A] border border-[#ffffff12]">
                <div className="w-9 h-9 rounded bg-[#262626] border border-[#D4AF37]/30 text-[#D4AF37] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="space-y-0.5 text-xs text-[#D4D4D4]">
                  <div className="font-mono text-[10px] uppercase font-bold text-[#A3A3A3]">
                    Office Location
                  </div>
                  <p className="font-semibold text-[#F5F2ED]">{BUSINESS_INFO.address.line1}</p>
                  <p>{BUSINESS_INFO.address.line2}, {BUSINESS_INFO.address.area} - {BUSINESS_INFO.address.pincode}</p>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Callback & Consultation Request Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#141414] rounded-lg border border-[#ffffff15] p-6 sm:p-8 shadow-xl">
              <div className="border-b border-[#ffffff12] pb-4 mb-6">
                <h3 className="font-display font-bold text-2xl text-[#F5F2ED]">
                  Request a Free Callback
                </h3>
                <p className="text-xs sm:text-sm text-[#A3A3A3] mt-1">
                  Fill in your requirements. Consultant Sajid will review and contact you promptly.
                </p>
              </div>

              {submitted ? (
                <div className="bg-[#1A1A1A] border border-emerald-500/40 rounded-lg p-6 text-center space-y-4 animate-in fade-in">
                  <div className="w-12 h-12 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-display font-bold text-[#F5F2ED]">
                    Consultation Request Received!
                  </h4>
                  <p className="text-xs sm:text-sm text-[#D4D4D4] max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.name || 'Valued Client'}</strong>. We have logged your request for <strong>{formData.service}</strong>. We will call you at <strong>{formData.phone}</strong> shortly during business hours (11:00 AM – 7:00 PM).
                  </p>
                  <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
                    <button
                      onClick={handleSendViaWhatsApp}
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded bg-[#195E3E] text-white text-xs font-semibold hover:bg-[#1e734c] transition-all"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Also Send Directly on WhatsApp</span>
                    </button>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs text-[#A3A3A3] underline hover:text-[#F5F2ED] py-2"
                    >
                      Submit another inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase text-[#D4D4D4] mb-1.5">
                      Your Full Name <span className="text-[#D4AF37]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma / Business Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded border border-[#ffffff18] text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] bg-[#171717] text-[#F5F2ED] placeholder:text-[#737373]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase text-[#D4D4D4] mb-1.5">
                      Mobile / Phone Number <span className="text-[#D4AF37]">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded border border-[#ffffff18] text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] bg-[#171717] text-[#F5F2ED] placeholder:text-[#737373]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase text-[#D4D4D4] mb-1.5">
                      Service Required <span className="text-[#D4AF37]">*</span>
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded border border-[#ffffff18] text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] bg-[#171717] text-[#F5F2ED]"
                    >
                      {SERVICES_LIST.map((srv) => (
                        <option key={srv.id} value={srv.title} className="bg-[#171717] text-[#F5F2ED]">
                          {srv.number}. {srv.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase text-[#D4D4D4] mb-1.5">
                      Brief Message or Specific Query (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Describe your requirement (e.g. Need urgent GST registration for my new shop, or previous year ITR filing)..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded border border-[#ffffff18] text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] bg-[#171717] text-[#F5F2ED] placeholder:text-[#737373] resize-none"
                    ></textarea>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      className="flex-1 py-3 px-5 rounded bg-[#D4AF37] hover:bg-[#E5C158] text-[#0A0A0A] font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-2 transition-all shadow-[2px_2px_0px_rgba(255,255,255,0.15)]"
                    >
                      <Send className="w-4 h-4" />
                      <span>Request Callback</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleSendViaWhatsApp}
                      className="py-3 px-5 rounded bg-[#195E3E] hover:bg-[#1e734c] text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>WhatsApp Directly</span>
                    </button>
                  </div>

                  <p className="text-[11px] text-[#737373] font-mono text-center pt-2">
                    🔒 100% Client Data Confidentiality Assured. We do not share your contact details.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
