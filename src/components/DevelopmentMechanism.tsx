import { Building2, TrendingUp, Briefcase, CheckCircle, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const DevelopmentMechanism = () => {
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

  const phases = [
    {
      phase: "Phase 1",
      title: "Create Labuan Holding Company",
      description: "Establish Labuan IBFC presence with proper corporate structure and compliance framework.",
      icon: Building2,
    },
    {
      phase: "Phase 2",
      title: "Fund Management Companies",
      description: "Obtain fund management licenses and establish comprehensive fund operations and strategies.",
      icon: TrendingUp,
    },
    {
      phase: "Phase 3",
      title: "Labuan Investment Banking",
      description: "Expand to investment banking services with full regulatory approval and compliance.",
      icon: Briefcase,
    },
  ];

  const sectors = [
    {
      category: "Banking",
      items: ["Labuan Banking", "Labuan Islamic Banking", "Labuan Investment Banking", "Labuan Islamic Investment Banking"],
      color: "from-blue-500/20 to-blue-600/20",
    },
    {
      category: "Commodity Trading",
      items: ["Physical Commodity Trading", "Derivatives Trading"],
      color: "from-gold/20 to-yellow-600/20",
    },
    {
      category: "Wealth Management",
      items: ["Labuan Trusts", "Labuan Foundations", "Private Trust Companies"],
      color: "from-purple-500/20 to-purple-600/20",
    },
    {
      category: "Capital Market",
      items: ["Mutual Funds", "Fund Management Companies", "Offer of Securities / Sukuk", "Securities Licensees", "Labuan International Financial Exchange", "Money Broking"],
      color: "from-accent/20 to-blue-600/20",
    },
    {
      category: "Insurance",
      items: ["Insurance Business & Related Business", "General Takaful Business", "Financial Advisers"],
      color: "from-green-500/20 to-green-600/20",
    },
    {
      category: "Digital Financial Services",
      items: ["Digital Banking", "FinTech Solutions", "Digital Payment Systems"],
      color: "from-pink-500/20 to-pink-600/20",
    },
  ];

  return (
    <section ref={ref} id="development-mechanism" className={`py-8 sm:py-12 md:py-20 lg:py-32 bg-background ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-10 md:mb-16 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-accent/10 to-gold/10 rounded-full mb-6">
            <span className="text-sm font-semibold bg-gradient-to-r from-accent to-gold bg-clip-text text-transparent">Labuan Financial Services Authority</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-4 md:mb-6">
            Development Mechanism
          </h2>
          <div className="w-20 md:w-24 h-1 bg-gradient-accent mx-auto mb-4 md:mb-6"></div>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            In line with this evolution, Labuan FSA has revised the Guidelines to allow for qualified applicants to offer 
            banking products and services in Labuan IBFC. The licensing of these new players with the necessary expertise 
            or experience in financial and financial-related industry, coupled with good track record and sound financial 
            performance is expected to add dynamism to the banking landscape.
          </p>
        </div>

        {/* Phases */}
        <div className="max-w-6xl mx-auto mb-16 md:mb-24">
          <div className="relative">
            {/* Connection Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-accent via-accent/50 to-gold transform -translate-y-1/2"></div>
            
            <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-8">
              {phases.map((phase, index) => (
                <div key={phase.phase} className="relative">
                  <div className="bg-card p-6 md:p-8 rounded-2xl border-2 border-border hover:border-accent/50 shadow-medium hover:shadow-xl transition-all duration-500 animate-scale-in group cursor-pointer">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-xl gradient-accent flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <phase.icon className="w-8 h-8 text-white" />
                      </div>
                      <span className="text-2xl md:text-3xl font-heading font-bold text-primary">{phase.phase}</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-heading font-bold text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                      {phase.title}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {phase.description}
                    </p>
                    
                    {/* Arrow for mobile */}
                    {index < phases.length - 1 && (
                      <div className="lg:hidden flex justify-center mt-6">
                        <ArrowRight className="w-6 h-6 text-accent" />
                      </div>
                    )}
                  </div>
                  
                  {/* Phase Indicator (Desktop) */}
                  <div className="hidden lg:block absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-accent flex items-center justify-center shadow-lg">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Eligibility Section */}
        <div className="max-w-4xl mx-auto mb-6 sm:mb-10 md:mb-16">
          <div className="bg-card p-8 md:p-12 rounded-3xl shadow-medium border border-border">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-heading font-bold text-primary mb-6 text-center">
              Eligibility
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 bg-background rounded-xl border border-border hover:border-accent/50 transition-colors duration-300">
                <div className="w-5 h-5 rounded-full gradient-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-3 h-3 text-white" />
                </div>
                <p className="text-sm md:text-base text-muted-foreground">
                  Any licensed institutions under Financial Services Act 2013 with prior approval of Bank Negara Malaysia
                </p>
              </div>
              <div className="flex items-start gap-3 p-4 bg-background rounded-xl border border-border hover:border-accent/50 transition-colors duration-300">
                <div className="w-5 h-5 rounded-full gradient-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-3 h-3 text-white" />
                </div>
                <p className="text-sm md:text-base text-muted-foreground">
                  Any corporations with the necessary expertise or experience in the financial or financial-related industry 
                  with at least 3 years good track records and sound financial performance
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sectors & Offerings */}
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-12">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-heading font-bold text-primary mb-3">
              Sectors & Offerings
            </h3>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
              Comprehensive Labuan Financial Services Authority offerings
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {sectors.map((sector, index) => (
              <div
                key={sector.category}
                className={`bg-gradient-to-br ${sector.color} p-6 md:p-8 rounded-2xl border border-border hover:shadow-xl transition-all duration-500 animate-scale-in group cursor-pointer overflow-hidden`}
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <h3 className="text-lg md:text-xl font-heading font-bold text-primary mb-4 group-hover:text-accent transition-colors duration-300">
                  {sector.category}
                </h3>
                <ul className="space-y-2">
                  {sector.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span className="text-sm md:text-base text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevelopmentMechanism;
