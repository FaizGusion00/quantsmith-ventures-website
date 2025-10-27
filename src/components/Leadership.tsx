import TeamCard from "./TeamCard";
import { useEffect, useRef, useState } from "react";

const Leadership = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  const leaders = [
    {
      name: "MOHD AZMIR MOHD SHAHIDAN",
      title: "Founder / Chairman",
      qualifications: "CFA, CMSRL",
      description:
        "Over 18 years of professional experience in analysis, product research, and development. Extensively involved in Malaysian Capital and Financial markets, with expertise in Quantitative Strategies, Asset Allocation, Risk Management, and Attribution Analysis. Previously set Risk Appetite Statements (RAS) and Asset Liability Management (ALM) framework for regulatory compliance.",
    },
    {
      name: "MUHAMMAD SHAZREEN BIN MOHD SHAHIDAN",
      title: "Managing Director",
      qualifications: "BA (Hons) Industrial Management",
      description:
        "BA (Hons) in Industrial Management from University Selangor. Almost 10 years in construction and education sectors, specializing in forensic accounting and financial analysis. Previously Vice President at Ar-Rizqi Capital Berhad and Chief Financial Officer at Tanjak Mega Holding Berhad. Expertise in capital markets, investment strategies, and financial reporting.",
    },
    {
      name: "AZMY ABDUL RAHMAN",
      title: "Executive Director",
      qualifications: "Web & Design Background",
      description:
        "Results-driven professional with experience in corporate management, marketing, and market analysis. Academic background in Web and Design. Previously worked at Astro and Media Prima Bhd on content management and programming. Expertise in digital marketing strategies and creative approaches to growth with a focus on market analysis for capital markets.",
    },
    {
      name: "QURRASHIDAH ANIS BAHARUL HAFIDZ",
      title: "Executive Director",
      qualifications: "Bachelor of Economics",
      description:
        "Bachelor of Economics from University of Malaya. Previously Executive at UNITAR International University and Manager at Tanjak Mega Holding Berhad. Expertise in Financial Planning and Analysis, implementing economic frameworks, and developing business strategies. Skilled in budgeting and evaluating economic factors for business development.",
    },
    {
      name: "ROSLI MOHAMAD AMIN",
      title: "Director",
      qualifications: "MIA, MBA in Finance",
      description:
        "Over 25 years in financial management, treasury, auditing, taxation, and corporate reporting. Expertise in regulatory compliance, risk assessment, business strategy, and investment management across finance, education, pharmaceutical, and construction industries. Member of Malaysian Institute of Accountants. Proficient in SAP, Oracle, SQL Accounting.",
    },
  ];

  return (
    <section ref={ref} id="leadership" className={`py-16 sm:py-20 md:py-32 bg-background ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-4 md:mb-6">
            Leadership Team
          </h2>
          <div className="w-20 md:w-24 h-1 bg-gradient-accent mx-auto mb-4 md:mb-6"></div>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            Our experienced leadership team brings decades of combined expertise in financial management, 
            capital markets, and corporate strategy.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {leaders.map((leader, index) => (
            <div key={leader.name} style={{ animationDelay: `${index * 0.1}s` }}>
              <TeamCard {...leader} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
