import { lazy, Suspense, useState, useEffect } from "react";
import SplashScreen from "@/components/SplashScreen";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Lazy load components for better performance
const Hero = lazy(() => import("@/components/Hero"));
const About = lazy(() => import("@/components/About"));
const VisionMission = lazy(() => import("@/components/VisionMission"));
const Leadership = lazy(() => import("@/components/Leadership"));
const InvestmentCommittee = lazy(() => import("@/components/InvestmentCommittee"));
const ResponsiblePersons = lazy(() => import("@/components/ResponsiblePersons"));
const Consultants = lazy(() => import("@/components/Consultants"));
const Services = lazy(() => import("@/components/Services"));
const CMSA = lazy(() => import("@/components/CMSA"));
const Governance = lazy(() => import("@/components/Governance"));
const DevelopmentMechanism = lazy(() => import("@/components/DevelopmentMechanism"));
const AccurateStageProcessing = lazy(() => import("@/components/AccurateStageProcessing"));
const Contact = lazy(() => import("@/components/Contact"));

// Loading placeholder
const SectionPlaceholder = () => (
  <div className="min-h-[400px] bg-gradient-to-b from-transparent to-primary/5 animate-pulse" />
);

const Index = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Show content with delay after splash screen
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      <SplashScreen />
      <div 
        className={`transition-opacity duration-700 ease-out ${
          showContent ? "opacity-100" : "opacity-0"
        }`}
      >
        <Navigation />
        <main>
          <Suspense fallback={<SectionPlaceholder />}>
            <Hero />
          </Suspense>
          <Suspense fallback={<SectionPlaceholder />}>
            <About />
          </Suspense>
          <Suspense fallback={<SectionPlaceholder />}>
            <VisionMission />
          </Suspense>
          <Suspense fallback={<SectionPlaceholder />}>
            <Leadership />
          </Suspense>
          <Suspense fallback={<SectionPlaceholder />}>
            <InvestmentCommittee />
          </Suspense>
          <Suspense fallback={<SectionPlaceholder />}>
            <ResponsiblePersons />
          </Suspense>
          <Suspense fallback={<SectionPlaceholder />}>
            <Consultants />
          </Suspense>
          <Suspense fallback={<SectionPlaceholder />}>
            <Services />
          </Suspense>
          <Suspense fallback={<SectionPlaceholder />}>
            <CMSA />
          </Suspense>
          <Suspense fallback={<SectionPlaceholder />}>
            <Governance />
          </Suspense>
          <Suspense fallback={<SectionPlaceholder />}>
            <DevelopmentMechanism />
          </Suspense>
          <Suspense fallback={<SectionPlaceholder />}>
            <AccurateStageProcessing />
          </Suspense>
          <Suspense fallback={<SectionPlaceholder />}>
            <Contact />
          </Suspense>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
