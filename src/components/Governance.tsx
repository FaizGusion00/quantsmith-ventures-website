import { FileCheck, Users, TrendingUp, Shield, Target } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Governance = () => {
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

  const governanceAreas = [
    {
      title: "Legal Matters",
      description: "Comprehensive legal oversight and compliance monitoring for all transactions.",
      icon: FileCheck,
    },
    {
      title: "Internal Audit & Compliance",
      description: "Regular audits and compliance reviews to ensure best practices are upheld.",
      icon: Shield,
    },
    {
      title: "Risk Management",
      description: "Proactive risk assessment and mitigation strategies across all operations.",
      icon: Target,
    },
    {
      title: "Investment Decision Making",
      description: "Structured processes and committee oversight for all investment activities.",
      icon: TrendingUp,
    },
  ];

  const principles = [
    {
      title: "Principle of Term & Condition",
      description: "Assurance to both parties 'Investor vs. Investee'",
      icon: FileCheck,
    },
    {
      title: "Portfolio Divergence",
      description: "Diversifying investment vehicles to limit exposure to any single asset or risk",
      icon: TrendingUp,
    },
    {
      title: "Risk Factors and Parameter",
      description: "Identifying potential unforeseen risk factors and effective mitigation strategies",
      icon: Target,
    },
  ];

  return (
    <section ref={ref} id="governance" className={`py-16 sm:py-20 md:py-32 bg-primary text-white relative overflow-hidden ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-1/3 h-full opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 md:w-96 md:h-96 rounded-full bg-accent blur-3xl"></div>
      </div>
      <div className="absolute bottom-0 right-0 w-1/3 h-full opacity-5">
        <div className="absolute bottom-20 right-20 w-64 h-64 md:w-96 md:h-96 rounded-full bg-gold blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-white/10 rounded-full mb-6">
            <span className="text-sm font-semibold text-white">Corporate Governance</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 md:mb-6">
            Our Corporate Governance & Compliance
          </h2>
          <div className="w-20 md:w-24 h-1 bg-gradient-accent mx-auto mb-4 md:mb-6"></div>
          <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-3xl mx-auto px-4">
            In fulfilling its duties, QSV's Board of Directors holds quarterly meetings to review performance 
            and documentation, ensuring best practices are upheld in all transactions.
          </p>
        </div>

        {/* Main Intensification Areas */}
        <div className="max-w-6xl mx-auto mb-16 md:mb-24">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {governanceAreas.map((area, index) => (
              <div
                key={area.title}
                className="bg-white/5 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-500 animate-slide-up group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl gradient-accent flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <area.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-heading font-bold mb-3 text-accent">
                  {area.title}
                </h3>
                <p className="text-sm md:text-base text-white/80 leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Investment Decision Making Process */}
        <div className="max-w-5xl mx-auto mb-12 md:mb-16">
          <div className="text-center mb-10 md:mb-12">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-heading font-bold mb-3">
              Investment Decision Making Processes
            </h3>
            <p className="text-sm md:text-base text-white/80 max-w-2xl mx-auto">
              The Investment Committee approves investment proposals based upon the recommendations of the 
              management team. When a delegation of authority from the Board of Directors exists, the 
              management team must undertake individual investment decisions within the scope of their 
              respective mandates.
            </p>
          </div>
        </div>

        {/* Responsibility & Accountability */}
        <div className="max-w-5xl mx-auto mb-12 md:mb-16">
          <div className="bg-white/5 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-white/10">
            <div className="text-center mb-8">
              <div className="w-16 h-1 bg-gradient-accent mx-auto mb-6" />
              <h3 className="text-xl md:text-2xl lg:text-3xl font-heading font-bold mb-4 text-accent">
                Responsibility & Accountability for the Investment Process
              </h3>
            </div>
            <p className="text-base md:text-lg text-white/90 leading-relaxed text-center">
              The management team is required to ensure relevant reporting and declarations are made in respect 
              to each transaction not limited to declaration of interest, non-disclosure, declaration of awareness 
              and etc. The overall responsibilities are shared among the Board of Directors, the Investment 
              Committee in accordance with the IC's & BOD's Terms of Reference.
            </p>
          </div>
        </div>

        {/* Core Principles */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 md:mb-12">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-heading font-bold mb-3">
              Main Intensification Principles
            </h3>
          </div>
          <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {principles.map((principle, index) => (
              <div
                key={principle.title}
                className="bg-white/5 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-500 animate-slide-up group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <principle.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-heading font-bold mb-3 text-accent">
                      {principle.title}
                    </h3>
                    <p className="text-sm md:text-base text-white/80 leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Governance;
