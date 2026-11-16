import { Navbar } from './components/landing/Navbar';
import { Hero } from './components/landing/Hero';
import { TrustBar } from './components/landing/TrustBar';
import { Features } from './components/landing/Features';
import { HowItWorks } from './components/landing/HowItWorks';
import { TemplateGallery } from './components/landing/TemplateGallery';
import { Pricing } from './components/landing/Pricing';
import { Testimonials } from './components/landing/Testimonials';
import { Faq } from './components/landing/Faq';
import { ClosingCta } from './components/landing/ClosingCta';
import { Footer } from './components/landing/Footer';
import { EditorPage } from './components/pages/EditorPage';
import { TemplatesPage } from './components/pages/TemplatesPage';
import { useAppRoute } from './lib/router';

export default function App() {
  const { route, query } = useAppRoute();

  if (route === '/editor') {
    return (
      <div className="min-h-screen bg-[#FAF6EE] text-[#231915]">
        <Navbar isSubpage />
        <EditorPage
          initialTemplate={query.get('template')}
          initialPlan={query.get('plan')}
        />
        <Footer />
      </div>
    );
  }

  if (route === '/templates') {
    return (
      <div className="min-h-screen bg-[#FAF6EE] text-[#231915]">
        <Navbar isSubpage />
        <TemplatesPage />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF6EE] text-[#231915]">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Features />
        <HowItWorks />
        <TemplateGallery />
        <Pricing />
        <Testimonials />
        <Faq />
        <ClosingCta />
      </main>
      <Footer />
    </div>
  );
}
