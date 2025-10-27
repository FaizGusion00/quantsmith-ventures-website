import { 
  Building2, 
  TrendingUp, 
  LineChart, 
  Shield, 
  Target, 
  BarChart3, 
  CheckCircle2, 
  FileSearch 
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Services = () => {
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
  const mainServices = [
    {
      title: "Corporate Management Services",
      description: "Comprehensive corporate management and general services management for optimal organizational efficiency.",
      icon: Building2,
    },
    {
      title: "Business Investment Development",
      description: "Strategic investment portfolio development and services tailored to drive business growth and expansion.",
      icon: TrendingUp,
    },
    {
      title: "Financial & Capital Market Consultation",
      description: "Expert consultation services in financial markets and capital allocation strategies for maximum returns.",
      icon: LineChart,
    },
  ];

  const features = [
    { title: "Capital Market Services License", icon: CheckCircle2 },
    { title: "Asset Allocation Recommendation", icon: Target },
    { title: "Risk Management & Attribution Analysis", icon: Shield },
    { title: "Portfolio Optimization & Analysis", icon: BarChart3 },
    { title: "Legal & Compliance Guidelines", icon: FileSearch },
    { title: "Investment Performance", icon: TrendingUp },
    { title: "Due Diligence Process", icon: FileSearch },
    { title: "Financial Forensic", icon: LineChart },
  ];

  const sectors = [
    "Banking",
    "Commodity Trading",
    "Wealth Management",
    "Capital Market",
    "Insurance",
    "Digital Financial Services",
  ];

  return (
    <section ref={ref} id="services" className={`py-16 sm:py-20 md:py-32 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block px-4 py-2 bg-accent/10 rounded-full mb-6">
            <span className="text-sm font-semibold text-accent">What We Offer</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-4 md:mb-6">
            Our Services
          </h2>
          <div className="w-20 md:w-24 h-1 bg-gradient-accent mx-auto mb-4 md:mb-6"></div>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Providing comprehensive management services and investment mandates with reliable asset class expertise 
            and high-value investment intelligence.
          </p>
        </div>

        {/* Main Services - Dark Background Section */}
        <div className="relative py-20 md:py-32 bg-primary text-white rounded-3xl md:rounded-[3rem] overflow-hidden mb-16 md:mb-24">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 left-0 w-1/3 h-full opacity-5">
            <div className="absolute top-20 left-20 w-96 h-96 rounded-full bg-accent blur-3xl"></div>
          </div>
          <div className="absolute bottom-0 right-0 w-1/3 h-full opacity-5">
            <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-gold blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
              {mainServices.map((service, index) => (
                <div
                  key={service.title}
                  className="group relative bg-white/5 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-500 animate-slide-up cursor-pointer overflow-hidden"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Decorative Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                  
                  {/* Icon Container */}
                  <div className="relative z-10 mb-6">
                    <div className="relative w-16 h-16 rounded-2xl gradient-accent flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      <service.icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-500" />
                      {/* Glow Effect */}
                      <div className="absolute inset-0 rounded-2xl bg-accent/30 blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-xl md:text-2xl font-heading font-bold mb-3 group-hover:text-accent transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-sm md:text-base text-white/80 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-accent/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Choose Us - Redesigned */}
        <div className="max-w-6xl mx-auto mb-16 md:mb-24">
          <div className="text-center mb-10 md:mb-12">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-heading font-bold text-primary mb-3">
              Why Choose Our Services?
            </h3>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions backed by expertise, integrity, and results
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group relative bg-card dark:bg-white/10 p-5 rounded-2xl shadow-md border border-border/50 dark:border-white/20 hover:shadow-xl hover:border-accent/50 dark:hover:bg-white/15 transition-all duration-500 animate-scale-in cursor-pointer"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                {/* Icon with Animated Background */}
                <div className="flex items-start gap-3 mb-3">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-gradient-accent group-hover:scale-110 transition-all duration-500">
                      <feature.icon className="w-5 h-5 text-accent group-hover:text-white transition-colors duration-500" />
                    </div>
                    {/* Pulse Effect */}
                    <div className="absolute inset-0 rounded-xl bg-accent/20 animate-ping opacity-0 group-hover:opacity-100" />
                  </div>
                </div>
                
                {/* Feature Title */}
                <span className="text-xs md:text-sm font-semibold text-foreground dark:text-white/90 group-hover:text-accent transition-colors duration-300">
                  {feature.title}
                </span>

                {/* Hover Line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-accent group-hover:w-full transition-all duration-500 rounded-full" />
              </div>
            ))}
          </div>
        </div>

        {/* Sectors - Modern Badge Design */}
        <div className="max-w-5xl mx-auto mb-16 md:mb-24">
          <div className="text-center mb-10 md:mb-12">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-heading font-bold text-primary mb-3">
              Sectors We Serve
            </h3>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
              Specialized expertise across diverse financial sectors
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {sectors.map((sector, index) => (
              <div
                key={sector}
                className="group relative px-6 py-3 bg-white rounded-full shadow-md border border-border/50 hover:shadow-lg hover:border-accent hover:scale-105 transition-all duration-500 cursor-pointer overflow-hidden"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/0 to-accent/0 group-hover:from-accent/10 group-hover:via-accent/5 group-hover:to-accent/10 transition-all duration-500 rounded-full" />
                
                {/* Content */}
                <span className="relative z-10 text-sm md:text-base font-semibold text-primary group-hover:text-accent transition-colors duration-300">
                  {sector}
                </span>

                {/* Decorative Dots */}
                <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-accent rounded-full opacity-0 group-hover:opacity-100 animate-pulse" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-gold rounded-full opacity-0 group-hover:opacity-100 animate-pulse" style={{ animationDelay: "0.2s" }} />
              </div>
            ))}
          </div>
        </div>

        {/* Tagline - Enhanced CTA */}
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-primary/5 to-gold/10 rounded-3xl blur-2xl" />
          <div className="relative bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-accent/20 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
            <div className="text-center">
              <div className="inline-block w-16 h-1 bg-gradient-accent rounded-full mb-6" />
              <p className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-primary mb-3">
                Your Goals, Our Commitment
              </p>
              <p className="text-lg md:text-xl text-accent font-semibold">
                Beyond Benchmark, We Care
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
