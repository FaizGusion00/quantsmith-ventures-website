import { Lightbulb, Handshake, Network, TrendingUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const VisionMission = () => {
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
  const pillars = [
    {
      number: "01",
      title: "Knowledge Platform",
      description: "Building the epicenter of knowledge for unique mandates and corporate strategy management.",
      icon: Lightbulb,
    },
    {
      number: "02",
      title: "Compliance Culture",
      description: "Maintaining the highest standards of regulatory compliance and professional ethics.",
      icon: Handshake,
    },
    {
      number: "03",
      title: "Niche Portfolio",
      description: "Specialized portfolio management across diverse asset classes and market sectors.",
      icon: Network,
    },
    {
      number: "04",
      title: "Fund Stability & Consistency",
      description: "Delivering stable performance and consistent returns through all market conditions.",
      icon: TrendingUp,
    },
  ];

  return (
    <section ref={ref} id="vision" className={`py-8 sm:py-12 md:py-20 lg:py-32 bg-primary text-white relative overflow-hidden ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5">
        <div className="absolute top-20 right-20 w-64 h-64 md:w-96 md:h-96 rounded-full bg-accent blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-12 max-w-6xl mx-auto mb-12 md:mb-20 animate-fade-in">
          <div className="bg-white/5 backdrop-blur-sm p-6 md:p-10 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-500 group cursor-pointer">
            <h3 className="text-xl md:text-2xl font-heading font-bold mb-3 md:mb-4 text-accent">Our Vision</h3>
            <p className="text-sm md:text-lg text-white/90 leading-relaxed">
              The epicenter of knowledge platform for unique mandate and corporate strategy management.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm p-6 md:p-10 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-500 group cursor-pointer">
            <h3 className="text-xl md:text-2xl font-heading font-bold mb-3 md:mb-4 text-gold">Our Mission</h3>
            <p className="text-sm md:text-lg text-white/90 leading-relaxed">
              To shape and driven high volatility excellence essential value proposition to collaborators 
              for knowledge-creation and enhancement.
            </p>
          </div>
        </div>

        {/* Core Pillars */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6 sm:mb-10 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-3 md:mb-4">
              Our Core Pillars
            </h2>
            <div className="w-20 md:w-24 h-1 bg-gradient-accent mx-auto"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {pillars.map((pillar, index) => (
              <div
                key={pillar.number}
                className="bg-white/5 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-500 animate-slide-up group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4 md:mb-6">
                  <span className="text-4xl md:text-5xl font-heading font-bold text-accent/30 group-hover:text-accent/50 transition-colors duration-300">
                    {pillar.number}
                  </span>
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg gradient-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <pillar.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-heading font-semibold mb-2 md:mb-3">{pillar.title}</h3>
                <p className="text-sm md:text-base text-white/80 leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
