import { Phone, Mail, MapPin, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

const Contact = () => {
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
    <section ref={ref} id="contact" className={`py-16 sm:py-20 md:py-32 bg-primary text-white relative overflow-hidden ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-1/2 h-full opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 md:w-96 md:h-96 rounded-full bg-gold blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 md:mb-6">
            Get in Touch
          </h2>
          <div className="w-20 md:w-24 h-1 bg-gradient-accent mx-auto mb-4 md:mb-6"></div>
          <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-2xl mx-auto px-4">
            Ready to discuss your investment goals? Contact us today to learn more about how we can 
            help accelerate your growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6 md:space-y-8 animate-slide-up">
            <div className="bg-white/5 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-500">
              <h3 className="text-xl md:text-2xl font-heading font-bold mb-4 md:mb-6">Contact Information</h3>
              
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg gradient-accent flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium mb-1 text-sm md:text-base">Phone</p>
                    <a href="tel:+60355246495" className="text-white/80 hover:text-accent transition-all duration-300 text-sm md:text-base break-all">
                      +603 5524 6495
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg gradient-accent flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium mb-1 text-sm md:text-base">Email</p>
                    <a href="mailto:enquiry@quant-smith.com" className="text-white/80 hover:text-accent transition-all duration-300 text-sm md:text-base break-all">
                      enquiry@quant-smith.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg gradient-accent flex items-center justify-center flex-shrink-0">
                    <Globe className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium mb-1 text-sm md:text-base">Website</p>
                    <a href="https://www.quant-smith.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-accent transition-all duration-300 text-sm md:text-base break-all">
                      www.quant-smith.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg gradient-accent flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium mb-1 text-sm md:text-base">Address</p>
                    <p className="text-white/80 leading-relaxed text-sm md:text-base">
                      UNIT 18-35, PLAZA AZALEA<br />
                      Persiaran Bandaraya, Seksyen 14<br />
                      40200 Shah Alam, Selangor<br />
                      Malaysia
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-500">
              <h3 className="text-lg md:text-xl font-heading font-bold mb-2 md:mb-3">Licensed & Regulated</h3>
              <p className="text-white/80 leading-relaxed text-sm md:text-base">
                Capital Markets Services Representative Licence (CMSRL) under the Securities Commission Malaysia. 
                Compliant with Capital Markets and Services Act (CMSA 2007).
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col justify-center animate-scale-in">
            <div className="bg-white/5 backdrop-blur-sm p-6 md:p-10 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-500">
              <h3 className="text-xl md:text-2xl font-heading font-bold mb-4 md:mb-6">
                Ready to Start Your Journey?
              </h3>
              <p className="text-white/90 mb-6 md:mb-8 leading-relaxed text-sm md:text-base">
                Whether you're looking for corporate management services, investment advisory, or capital 
                market consultation, our expert team is ready to help you achieve your financial goals.
              </p>
              
              <div className="space-y-3 md:space-y-4">
                <Button 
                  size="lg"
                  className="w-full bg-accent hover:bg-accent/90 text-white text-sm md:text-base"
                  asChild
                >
                  <a href="mailto:enquiry@quant-smith.com">
                    <Mail className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                    Email Us
                  </a>
                </Button>
                
                <Button 
                  size="lg"
                  variant="outline"
                  className="w-full bg-white/10 border-white/30 text-white hover:bg-white/20 text-sm md:text-base"
                  asChild
                >
                  <a href="tel:+60355246495">
                    <Phone className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                    Call Now
                  </a>
                </Button>
              </div>

              <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-white/10 text-center">
                <p className="text-xs md:text-sm text-white/70">
                  Office Hours: Monday - Friday, 9:00 AM - 6:00 PM (MYT)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
