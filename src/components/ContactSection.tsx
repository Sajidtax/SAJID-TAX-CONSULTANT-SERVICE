import { useState, type FormEvent } from 'react';
import { Phone, Mail, MapPin, Send, MessageSquare, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO, SERVICES_LIST } from '../data/businessData';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: SERVICES_LIST[0].title,
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  // Helper to sanitize inputs and remove malicious characters
  const sanitizeText = (val: string, maxLen: number) => {
    return val.replace(/[<>]/g, '').trim().slice(0, maxLen);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const cleanName = sanitizeText(formData.name, 60);
    const cleanPhone = formData.phone.replace(/[^\d+()\s-]/g, '').trim().slice(0, 15);
    const cleanMsg = sanitizeText(formData.message, 500);

    setFormData(prev => ({
      ...prev,
      name: cleanName,
      phone: cleanPhone,
      message: cleanMsg,
    }));
    setSubmitted(true);
  };

  const handleSendViaWhatsApp = () => {
    const cleanName = sanitizeText(formData.name, 60);
    const cleanPhone = formData.phone.replace(/[^\d+()\s-]/g, '').trim().slice(0, 15);
    const cleanMsg = sanitizeText(formData.message, 500);

    const text = encodeURIComponent(
      `Hello Sajid Sir,\n\nName: ${cleanName || 'Client'}\nPhone: ${cleanPhone || 'N/A'}\nService Needed: ${formData.service}\nRequirement: ${cleanMsg || 'I need consultation for my tax/accounting work.'}`
    );
    window.open(`https://wa.me/${BUSINESS_INFO.phoneClean.replace('+', '')}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase text-blue-700 tracking-widest">
            <span className="w-6 h-[1.5px] bg-blue-600"></span>
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight">
            Let&apos;s sort your compliance out today.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Reach Consultant Sajid directly via phone, WhatsApp, email, or request a callback using the form below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-slate-50 rounded-xl border border-slate-200 p-6 sm:p-7 shadow-xs space-y-5">
              <h3 className="font-display font-bold text-xl text-slate-900">
                Direct Contact Points
              </h3>

              {/* Phone Card */}
              <div className="flex items-start gap-4 p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <div className="w-9 h-9 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0 font-bold">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="space-y-0.5">
                  <div className="font-mono text-[10px] uppercase font-bold text-slate-500">
                    Phone &amp; Direct Call
                  </div>
                  <a
                    href={`tel:${BUSINESS_INFO.phoneClean}`}
                    className="font-mono font-bold text-base text-slate-900 hover:text-blue-700 transition-colors block"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                  <p className="text-[11px] text-slate-500">Available Mon-Sat: 11 AM - 7 PM</p>
                </div>
              </div>

              {/* WhatsApp Card */}
              <div className="flex items-start gap-4 p-3.5 rounded-xl bg-white border border-emerald-200 shadow-2xs">
                <div className="w-9 h-9 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div className="space-y-0.5">
                  <div className="font-mono text-[10px] uppercase font-bold text-emerald-700">
                    WhatsApp Chat Support
                  </div>
                  <a
                    href={`https://wa.me/${BUSINESS_INFO.phoneClean.replace('+', '')}?text=Hello%20Sajid%20Tax%20Consultant,%20I%20need%20tax%20advice.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono font-bold text-base text-emerald-700 hover:underline block"
                  >
                    +91 {BUSINESS_INFO.phone}
                  </a>
                  <p className="text-[11px] text-slate-500">Quick document sharing &amp; chat</p>
                </div>
              </div>

              {/* Email Card */}
              <div className="flex items-start gap-4 p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-200 text-blue-700 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="space-y-0.5">
                  <div className="font-mono text-[10px] uppercase font-bold text-slate-500">
                    Official Email
                  </div>
                  <a
                    href={`mailto:${BUSINESS_INFO.email}`}
                    className="font-mono font-bold text-sm sm:text-base text-slate-900 hover:text-blue-700 transition-colors break-all block"
                  >
                    {BUSINESS_INFO.email}
                  </a>
                  <p className="text-[11px] text-slate-500">Send files, forms, and enquiries</p>
                </div>
              </div>

              {/* Office Address Card */}
              <div className="flex items-start gap-4 p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-200 text-blue-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="space-y-0.5 text-xs text-slate-600">
                  <div className="font-mono text-[10px] uppercase font-bold text-slate-500">
                    Office Location
                  </div>
                  <p className="font-bold text-slate-900">{BUSINESS_INFO.address.line1}</p>
                  <p>{BUSINESS_INFO.address.line2}, {BUSINESS_INFO.address.area} - {BUSINESS_INFO.address.pincode}</p>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Callback & Consultation Request Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-sm">
              <div className="border-b border-slate-100 pb-4 mb-6">
                <h3 className="font-display font-bold text-2xl text-slate-900">
                  Request a Free Callback
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Fill in your requirements. Consultant Sajid will review and contact you promptly.
                </p>
              </div>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center space-y-4 animate-in fade-in">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-display font-bold text-slate-900">
                    Consultation Request Received!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.name || 'Valued Client'}</strong>. We have logged your request for <strong>{formData.service}</strong>. We will call you at <strong>{formData.phone}</strong> shortly during business hours (11:00 AM - 7:00 PM).
                  </p>
                  <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
                    <button
                      onClick={handleSendViaWhatsApp}
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700 transition-all shadow-xs"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Also Send Directly on WhatsApp</span>
                    </button>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs text-slate-500 underline hover:text-slate-900 py-2"
                    >
                      Submit another inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-mono font-bold uppercase text-slate-700 mb-1.5">
                      Your Full Name <span className="text-blue-600">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      maxLength={60}
                      autoComplete="name"
                      placeholder="e.g. Rahul Sharma / Business Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 bg-white text-slate-900 placeholder:text-slate-400 shadow-2xs"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-mono font-bold uppercase text-slate-700 mb-1.5">
                      Mobile / Phone Number <span className="text-blue-600">*</span>
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      required
                      maxLength={15}
                      autoComplete="tel"
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 bg-white text-slate-900 placeholder:text-slate-400 shadow-2xs"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-service" className="block text-xs font-mono font-bold uppercase text-slate-700 mb-1.5">
                      Service Required <span className="text-blue-600">*</span>
                    </label>
                    <select
                      id="contact-service"
                      name="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 bg-white text-slate-900 shadow-2xs"
                    >
                      {SERVICES_LIST.map((srv) => (
                        <option key={srv.id} value={srv.title} className="bg-white text-slate-900">
                          {srv.number}. {srv.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-mono font-bold uppercase text-slate-700 mb-1.5">
                      Brief Message or Specific Query (Optional)
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={3}
                      maxLength={500}
                      placeholder="Describe your requirement (e.g. Need urgent GST registration for my new shop, or previous year ITR filing)..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 bg-white text-slate-900 placeholder:text-slate-400 shadow-2xs resize-none"
                    ></textarea>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      className="flex-1 py-3 px-5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-2 transition-all shadow-xs"
                    >
                      <Send className="w-4 h-4" />
                      <span>Request Callback</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleSendViaWhatsApp}
                      className="py-3 px-5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-xs border border-emerald-700/20"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>WhatsApp Directly</span>
                    </button>
                  </div>

                  <p className="text-[11px] text-slate-500 font-mono text-center pt-2">
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
