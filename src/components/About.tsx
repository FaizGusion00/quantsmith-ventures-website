import { TrendingUp, Shield, Target, Award, CheckCircle2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const About = () => {
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

  const services = [
    {
      icon: TrendingUp,
      title: "Corporate Management Services",
      description: "Comprehensive corporate management and general services management for optimal organizational efficiency."
    },
    {
      icon: Award,
      title: "Business Investment Development",
      description: "Strategic investment portfolio development and services tailored to drive business growth and expansion."
    },
    {
      icon: Target,
      title: "Financial & Capital Market Consultation",
      description: "Expert consultation services in financial markets and capital allocation strategies for maximum returns."
    }
  ];

  const expertAreas = [
    {
      number: "01",
      title: "Practice",
      description: "More than 20-years of professional experience encompassing areas of analysis investment research and focused on managing the funds of a proprietary equities and cash book",
      icon: Award
    },
    {
      number: "02",
      title: "Responsibility",
      description: "Expert in identifies potential areas of compliance vulnerability & risk development/implementation of corrective action plan for resolution of such vulnerabilities.",
      icon: Shield
    },
    {
      number: "03",
      title: "Governance",
      description: "Expert in conduct periodic review of internal audit framework, process & procedure (P&P) to assess its continued relevance & effectiveness standards, strategic direction of the company & changes in legal & regulatory requirements",
      icon: CheckCircle2
    },
    {
      number: "04",
      title: "Value-Added",
      description: "Expert managing in all aspects of back-office operations for investment portfolios, for both endowed & non-endowed funds, to include overview of custody, accounting, reporting, transaction processing, data management, cash flow reporting, performance reporting; analyze endowment management issues; assist with operational due diligence & new investment account set up.",
      icon: Target
    }
  ];

  return (
    <section ref={ref} id="about" className={`py-8 sm:py-12 md:py-20 lg:py-32 gradient-subtle ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Company Overview */}
        <div className="max-w-4xl mx-auto text-center mb-6 sm:mb-10 md:mb-16 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-accent/10 rounded-full mb-6">
            <span className="text-sm font-semibold text-accent">About Us</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-4 md:mb-6">
            QUANTSMITH VENTURES SDN. BHD.
          </h2>
          <div className="w-20 md:w-24 h-1 bg-gradient-accent mx-auto mb-6 md:mb-8"></div>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed px-4">
            QUANTSMITH VENTURES SDN. BHD. Management Group is a group established with Corporate 
            Management in General Services Management, Financial and Capital Market experienced focus in 3 
            main portfolios with the impartial of realizing stability management flow, consistent returns 
            advisory and long-term capital gains for its client. Our Philosophy "Maximizing value for 
            clients" growth by offering value added services & consistent returns.
          </p>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed px-4 mt-4">
            The company is engaged in the provision of management services and as an investment mandate 
            to provide corporate management with reliable various asset classes and high value investment 
            intelligence, planned allocation, portfolios market research strategy recommendation and risk 
            management attribution analysis.
          </p>
        </div>

        {/* Philosophy */}
        <div className="max-w-3xl mx-auto mb-6 sm:mb-10 md:mb-16 p-6 md:p-8 bg-card rounded-2xl shadow-medium border border-border animate-slide-up hover:shadow-large transition-all duration-500">
          <div className="text-center">
            <h3 className="text-xl md:text-2xl font-heading font-semibold text-primary mb-3 md:mb-4">Our Philosophy</h3>
            <p className="text-base md:text-lg text-foreground italic">
              "Maximizing value for clients' growth by offering value-added services and consistent returns."
            </p>
          </div>
        </div>

        {/* Main Services */}
        <div className="max-w-6xl mx-auto mb-16 md:mb-24">
          <div className="text-center mb-10 md:mb-12">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-heading font-bold text-primary mb-3">
              Our Core Services
            </h3>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions tailored to your business needs
            </p>
          </div>
          <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div key={service.title} className="bg-card p-6 md:p-8 rounded-2xl shadow-soft border border-border hover:shadow-medium hover:border-accent/30 transition-all duration-500 animate-scale-in group cursor-pointer" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl gradient-accent flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-heading font-semibold text-primary mb-2 md:mb-3">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Proficient Expert Section */}
        <div className="max-w-6xl mx-auto mb-6 sm:mb-10 md:mb-16">
          <div className="text-center mb-10 md:mb-12">
            <div className="inline-block px-4 py-2 bg-purple-500/10 rounded-full mb-6">
              <span className="text-sm font-semibold text-purple-500">Our Proficient Expert</span>
            </div>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-heading font-bold text-primary mb-3">
              Why Choose Our Services?
            </h3>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions backed by expertise, integrity, and results
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
            {expertAreas.map((area, index) => (
              <div key={area.number} className="bg-card p-6 md:p-8 rounded-2xl shadow-soft border border-border hover:shadow-medium hover:border-accent/30 transition-all duration-500 animate-scale-in group cursor-pointer" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 rounded-xl gradient-accent flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-heading font-bold text-white">{area.number}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-heading font-semibold text-primary mb-2">
                      {area.title}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {area.description}
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

export default About;
