import { ShieldCheck, CheckCircle2, BadgeCheck, Building2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const SocialProof = () => {
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

  const items = [
    { icon: ShieldCheck, title: "CMSA 2007 Compliant", desc: "Capital Markets regulatory alignment" },
    { icon: BadgeCheck, title: "CMSRL Licensed", desc: "Licensed representatives for FM & CF" },
    { icon: Building2, title: "Labuan IBFC Ready", desc: "Sectors & offerings compliance" },
    { icon: CheckCircle2, title: "Fit & Proper Standards", desc: "Probity and financial integrity" },
  ];

  return (
    <section ref={ref} id="social-proof" className={`py-8 sm:py-12 md:py-20 lg:py-32 bg-background/50 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-10 md:mb-16">
          <div className="inline-block px-4 py-2 bg-gold/10 rounded-full mb-6">
            <span className="text-sm font-semibold text-gold">Trust & Certifications</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-4 md:mb-6">
            Social Proof & Compliance
          </h2>
          <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-gold via-accent to-gold mx-auto"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
          {items.map((it, idx) => (
            <div key={it.title} className="bg-card p-6 md:p-8 rounded-2xl border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-500 animate-scale-in" style={{ animationDelay: `${idx * 0.08}s` }}>
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl gradient-accent flex items-center justify-center mb-4 md:mb-6">
                <it.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-heading font-bold text-primary mb-2">{it.title}</h3>
              <p className="text-sm md:text-base text-muted-foreground">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
