import { Component, ErrorInfo, ReactNode, lazy, Suspense } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';

// Lazy load below-the-fold components for peak mobile performance & 0ms TBT
const ServicesSection = lazy(() => import('./components/ServicesSection'));
const ComplianceCalendarSection = lazy(() => import('./components/ComplianceCalendarSection'));
const ProcessSection = lazy(() => import('./components/ProcessSection'));
const WhyChooseUs = lazy(() => import('./components/WhyChooseUs'));
const OfficeLocation = lazy(() => import('./components/OfficeLocation'));
const ContactSection = lazy(() => import('./components/ContactSection'));
const FaqSection = lazy(() => import('./components/FaqSection'));
const Footer = lazy(() => import('./components/Footer'));
const FloatingContactBar = lazy(() => import('./components/FloatingContactBar'));

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Application error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-[#0A0A0A] text-[#F5F2ED] p-6">
          <div className="max-w-md w-full bg-[#141414] border border-[#D4AF37]/50 rounded-lg p-8 text-center space-y-4 shadow-2xl">
            <div className="w-12 h-12 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/40 flex items-center justify-center mx-auto text-xl font-bold">
              SJ
            </div>
            <h2 className="text-2xl font-display font-bold text-[#F5F2ED]">
              Sajid Tax Consultant Service
            </h2>
            <p className="text-sm text-[#A3A3A3]">
              Something went wrong loading this view. Please refresh or contact us directly.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="w-full py-2.5 px-4 rounded bg-[#D4AF37] hover:bg-[#E5C158] text-[#0A0A0A] font-bold text-sm transition-all"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen flex flex-col bg-[#0A0A0A] text-[#F5F2ED] font-sans selection:bg-[#D4AF37] selection:text-[#0A0A0A] bg-grid-pattern">
        {/* Top Navigation */}
        <Header />

        {/* Main Content Sections */}
        <main id="main-content" className="flex-1">
          {/* Hero with Value proposition & upcoming due dates card */}
          <Hero />

          {/* Official Motto / Trust Bar */}
          <TrustBar />

          {/* Below-the-fold sections with Suspense */}
          <Suspense fallback={<div className="py-12 text-center text-xs font-mono text-[#D4AF37] animate-pulse">Loading compliance services...</div>}>
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
          </Suspense>
        </main>

        <Suspense fallback={null}>
          {/* Footer */}
          <Footer />

          {/* Floating Call & WhatsApp Triggers */}
          <FloatingContactBar />
        </Suspense>
      </div>
    </ErrorBoundary>
  );
}
