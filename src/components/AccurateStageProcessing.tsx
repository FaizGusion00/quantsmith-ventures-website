import { Search, Users, FileCheck, CheckCircle, ClipboardList, Search as MagnifyingGlass } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const AccurateStageProcessing = () => {
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

  const stages = [
    {
      number: "01",
      title: "Data Collection & Information Gathering",
      description: "We guide and review of Client's supporting documents for the drafting and preparation for right direction and follow regulation requirement.",
      icon: Search,
    },
    {
      number: "02",
      title: "Setup Board of Director (BOD) & Committee Meeting",
      description: "We offer an impartial and knowledgeable assessment of a proposed business plan or decision. We also offer a wide range of financial advisory and guidance solutions.",
      icon: Users,
    },
    {
      number: "03",
      title: "Submission to Regulatory",
      description: "We creating control risk management perspective and compliance goal to be used as a fundamental reference tool.",
      icon: FileCheck,
    },
    {
      number: "04",
      title: "Creation of Policies and Procedure",
      description: "We promoting a culture of compliance, professionalism, ethical standards and responsible conduct.",
      icon: ClipboardList,
    },
  ];

  const services = [
    {
      title: "Corporate Management Services",
      items: [
        "Capital Market Services License",
        "Asset Allocation Recommendation",
        "Risk Management & Attribution Analysis",
        "Portfolio Optimization & Analysis",
        "Legal & Compliance Guidelines",
        "Investment Performance",
        "Due Diligence Process",
        "Financial Forensic",
      ],
    },
    {
      title: "Business Investment Development",
      items: [
        "Portfolio & Services Development",
        "Strategic Investment Planning",
        "Market Research & Analysis",
        "Investment Strategy Formulation",
      ],
    },
    {
      title: "Financial & Capital Market Consultation",
      items: [
        "Financial Advisory Services",
        "Capital Market Consultation",
        "Investment Guidance",
        "Risk Assessment & Mitigation",
      ],
    },
  ];

  return (
    <section ref={ref} id="stage-processing" className={`py-16 sm:py-20 md:py-32 bg-primary text-white relative overflow-hidden ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5">
        <div className="absolute top-20 right-20 w-64 h-64 md:w-96 md:h-96 rounded-full bg-accent blur-3xl"></div>
      </div>
      <div className="absolute bottom-0 left-0 w-1/3 h-full opacity-5">
        <div className="absolute bottom-20 left-20 w-64 h-64 md:w-96 md:h-96 rounded-full bg-gold blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-white/10 rounded-full mb-6">
            <span className="text-sm font-semibold text-white">Our Process</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 md:mb-6">
            We Have Accurate Stage Processing
          </h2>
          <div className="w-20 md:w-24 h-1 bg-gradient-accent mx-auto mb-4 md:mb-6"></div>
          <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-3xl mx-auto px-4">
            Our Financial Consultation Services Encompass comprehensive support throughout the entire process
          </p>
        </div>

        {/* Stages */}
        <div className="max-w-6xl mx-auto mb-16 md:mb-24">
          <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
            {stages.map((stage, index) => (
              <div
                key={stage.number}
                className="bg-white/5 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-500 animate-slide-up group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 rounded-xl gradient-accent flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-heading font-bold text-white">{stage.number}</span>
                  </div>
                  <div className="flex-1">
                    <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-3 group-hover:bg-white/20 transition-colors duration-300">
                      <stage.icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-lg md:text-xl font-heading font-bold mb-3 text-accent">
                      {stage.title}
                    </h3>
                    <p className="text-sm md:text-base text-white/80 leading-relaxed">
                      {stage.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Services Summary */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 md:mb-12">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-heading font-bold mb-3">
              Our Services Encompass
            </h3>
            <p className="text-sm md:text-base text-white/80 max-w-2xl mx-auto">
              Comprehensive financial and investment services tailored to your needs
            </p>
          </div>
          <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="bg-white/5 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-500 animate-scale-in group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-lg md:text-xl font-heading font-bold mb-4 text-accent group-hover:text-gold transition-colors duration-300">
                  {service.title}
                </h3>
                <ul className="space-y-2">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm md:text-base text-white/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="max-w-4xl mx-auto mt-16 md:mt-24">
          <div className="bg-white/5 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-white/10 text-center">
            <div className="inline-block w-16 h-1 bg-gradient-accent rounded-full mb-6" />
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold mb-6 text-accent">
              Your Goals, Our Commitment
            </h3>
            <p className="text-xl md:text-2xl text-gold font-semibold">
              Beyond Benchmark, We Care
            </p>
            <p className="text-base md:text-lg text-white/80 leading-relaxed mt-6 max-w-2xl mx-auto">
              Our focused investment strategy in encompassing areas on managing the funds of a 
              proprietary equities and treasury investment. We target 8% - 18% annualized Total Return 
              in Ringgit terms through sound understanding of various investment styles and approaches.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccurateStageProcessing;
