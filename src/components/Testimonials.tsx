import { useEffect, useRef, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Star } from "lucide-react";

const Testimonials = () => {
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

  const testimonials = [
    {
      name: "Institutional Client",
      role: "Asset Management",
      quote:
        "Their disciplined process and transparent reporting helped us navigate volatile markets while meeting our mandate.",
    },
    {
      name: "Corporate Client",
      role: "Capital Markets",
      quote:
        "Professional, responsive, and data-driven. The team’s insights on risk and allocation are top tier.",
    },
    {
      name: "Private Client",
      role: "Wealth Advisory",
      quote:
        "Clear strategy, consistent communication, excellent results. Highly recommended for serious investors.",
    },
  ];

  return (
    <section ref={ref} id="testimonials" className={`py-16 sm:py-20 md:py-32 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block px-4 py-2 bg-accent/10 rounded-full mb-6">
            <span className="text-sm font-semibold text-accent">Testimonials</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-4 md:mb-6">
            What Our Clients Say
          </h2>
          <div className="w-20 md:w-24 h-1 bg-gradient-accent mx-auto"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Carousel className="px-10">
            <CarouselContent>
              {testimonials.map((t) => (
                <CarouselItem key={t.name}>
                  <div className="bg-card p-8 md:p-10 rounded-2xl border border-border shadow-medium">
                    <div className="flex items-center gap-1 mb-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-gold" />
                      ))}
                    </div>
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">“{t.quote}”</p>
                    <div>
                      <p className="text-sm md:text-base font-semibold text-primary">{t.name}</p>
                      <p className="text-xs md:text-sm text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
