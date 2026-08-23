import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import ServicesSection from './components/ServicesSection';
import ComplianceCalendarSection from './components/ComplianceCalendarSection';
import ProcessSection from './components/ProcessSection';
import WhyChooseUs from './components/WhyChooseUs';
import OfficeLocation from './components/OfficeLocation';
import ContactSection from './components/ContactSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import FloatingContactBar from './components/FloatingContactBar';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A0A] text-[#F5F2ED] font-sans selection:bg-[#D4AF37] selection:text-[#0A0A0A] bg-grid-pattern">
      {/* Top Navigation */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero with Value proposition & upcoming due dates card */}
        <Hero />

        {/* Official Motto / Trust Bar */}
        <TrustBar />

        {/* 10 Core Services Catalog */}
        <ServicesSection />

        {/* Indian Statutory Compliance Deadlines */}
        <ComplianceCalendarSection />

        {/* Workflow & Process */}
        <ProcessSection />

        {/* Why Choose Sajid Tax Consultant */}
        <WhyChooseUs />

        {/* Opera House Office, Map & Timings from Photo */}
        <OfficeLocation />

        {/* Callback Request & Direct Contacts */}
        <ContactSection />

        {/* Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Call & WhatsApp Triggers */}
      <FloatingContactBar />
    </div>
  );
}
