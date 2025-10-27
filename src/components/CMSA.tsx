import { Shield, FileCheck, Award, TrendingUp, CheckCircle2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const CMSA = () => {
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

  const licensingServices = [
    {
      title: "Fund Management Company (FMC) Licensing",
      description: "Licensed under CMSA 2007 for fund management services with comprehensive regulatory compliance.",
      icon: TrendingUp,
    },
    {
      title: "Venture Capital Management Corporations (VCMC) Licensing",
      description: "Specialized licensing for venture capital operations and investment activities.",
      icon: Award,
    },
    {
      title: "Private Equity Management Corporations (PEMC) Licensing",
      description: "Licensing services for private equity management and investment operations.",
      icon: Shield,
    },
    {
      title: "Peer-to-Peer Financing (P2P) Licensing",
      description: "Licensing support for P2P financing platforms and regulatory compliance.",
      icon: FileCheck,
    },
  ];

  const factors = [
    "Probity - Honesty and integrity in all dealings",
    "Ability to perform functions efficiently, honestly and fairly",
    "Financial status and stability",
    "Reputation, character, financial integrity and reliability"
  ];

  return (
    <section ref={ref} id="cmsa" className={`py-16 sm:py-20 md:py-32 bg-background/50 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-blue-500/10 rounded-full mb-6">
            <span className="text-sm font-semibold text-blue-500">Regulatory Compliance</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-4 md:mb-6">
            Capital Markets and Services Act
          </h2>
          <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-blue-500 via-accent to-blue-500 mx-auto mb-4 md:mb-6"></div>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            Rules and Regulations Licensing ensures an adequate level of investor protection, including the provision 
            of sufficient safeguards to protect investors from default by market intermediaries or problems arising 
            from the insolvency of such intermediaries. More importantly, it instills confidence among investors 
            that the organizations and people they deal with will treat them fairly and are efficient, honest and 
            financially sound.
          </p>
        </div>

        {/* Licensing Services */}
        <div className="grid sm:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto mb-12 md:mb-16">
          {licensingServices.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-card p-6 md:p-8 rounded-2xl border border-border hover:shadow-xl hover:border-accent/50 transition-all duration-500 animate-scale-in cursor-pointer overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-accent/0 group-hover:from-blue-500/5 group-hover:to-accent/5 transition-all duration-500" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 md:mb-6 group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:to-accent transition-all duration-500 group-hover:scale-110">
                  <service.icon className="w-6 h-6 md:w-7 md:h-7 text-blue-500 group-hover:text-white transition-colors duration-500" />
                </div>
                
                <h3 className="text-lg md:text-xl font-heading font-bold text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Fit and Proper Factors */}
        <div className="max-w-4xl mx-auto bg-card p-8 md:p-12 rounded-3xl shadow-medium border border-border">
          <div className="text-center mb-8">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-heading font-bold text-primary mb-3">
              Fit and Proper Assessment
            </h3>
            <p className="text-sm md:text-base text-muted-foreground">
              The Securities Commission Malaysia considers the following factors in licensing:
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            {factors.map((factor, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-background rounded-xl border border-border hover:border-accent/50 transition-colors duration-300">
                <div className="w-5 h-5 rounded-full gradient-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3 h-3 text-white" />
                </div>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{factor}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CMSA;
