import { TrendingUp, Shield, Target } from "lucide-react";
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

  return (
    <section ref={ref} id="about" className={`py-16 sm:py-20 md:py-32 gradient-subtle ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-4 md:mb-6">
            About Quantsmith Ventures
          </h2>
          <div className="w-20 md:w-24 h-1 bg-gradient-accent mx-auto mb-6 md:mb-8"></div>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed px-4">
            <strong className="text-foreground">QUANTSMITH VENTURES SDN. BHD.</strong> is a management group 
            established with expertise in Corporate Management, General Services Management, and Financial 
            and Capital Markets. We focus on three main portfolios with the impartial goal of realizing 
            stability management flow, consistent returns advisory, and long-term capital gains for our clients.
          </p>
        </div>

        {/* Philosophy */}
        <div className="max-w-3xl mx-auto mb-12 md:mb-16 p-6 md:p-8 bg-card rounded-2xl shadow-medium border border-border animate-slide-up hover:shadow-large transition-all duration-500">
          <div className="text-center">
            <h3 className="text-xl md:text-2xl font-heading font-semibold text-primary mb-3 md:mb-4">Our Philosophy</h3>
            <p className="text-base md:text-lg text-foreground italic">
              "Maximizing value for clients' growth by offering value-added services and consistent returns."
            </p>
          </div>
        </div>

        {/* Key Features */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          <div className="bg-card p-6 md:p-8 rounded-2xl shadow-soft border border-border hover:shadow-medium hover:border-accent/30 transition-all duration-500 animate-scale-in group cursor-pointer">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl gradient-accent flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
              <TrendingUp className="w-6 h-6 md:w-7 md:h-7 text-white" />
            </div>
            <h3 className="text-lg md:text-xl font-heading font-semibold text-primary mb-2 md:mb-3">
              Stability Management Flow
            </h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Comprehensive management services ensuring stable and reliable operational flow for sustainable growth.
            </p>
          </div>

          <div className="bg-card p-6 md:p-8 rounded-2xl shadow-soft border border-border hover:shadow-medium hover:border-accent/30 transition-all duration-500 animate-scale-in group cursor-pointer" style={{ animationDelay: "0.1s" }}>
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl gradient-accent flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
              <Shield className="w-6 h-6 md:w-7 md:h-7 text-white" />
            </div>
            <h3 className="text-lg md:text-xl font-heading font-semibold text-primary mb-2 md:mb-3">
              Consistent Returns Advisory
            </h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Expert advisory services focused on delivering consistent and reliable investment returns across market cycles.
            </p>
          </div>

          <div className="bg-card p-6 md:p-8 rounded-2xl shadow-soft border border-border hover:shadow-medium hover:border-accent/30 transition-all duration-500 animate-scale-in group cursor-pointer sm:col-span-2 lg:col-span-1" style={{ animationDelay: "0.2s" }}>
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl gradient-accent flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
              <Target className="w-6 h-6 md:w-7 md:h-7 text-white" />
            </div>
            <h3 className="text-lg md:text-xl font-heading font-semibold text-primary mb-2 md:mb-3">
              Long-Term Capital Gains
            </h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Strategic investment intelligence and portfolio management for sustainable long-term wealth creation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
