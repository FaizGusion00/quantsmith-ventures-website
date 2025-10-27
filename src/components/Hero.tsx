import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-cityscape.jpg";

const Hero = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    const img = new window.Image();
    img.src = heroImage;
    img.onload = () => setIsImageLoaded(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {isImageLoaded ? (
          <img
            src={heroImage}
            alt="Modern cityscape representing financial excellence"
            className="w-full h-full object-cover"
            loading="eager"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary via-primary/90 to-primary/80 animate-pulse" />
        )}
        {/* Enhanced Overlay for Better Contrast - Different for Dark Mode */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-primary/85 dark:from-black/20 dark:via-black/15 dark:to-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent dark:from-black/10"></div>
        {/* Additional Dark Gradient at Bottom */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 pointer-events-none"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20 mt-16 md:mt-20">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="inline-block mb-4 sm:mb-6 md:mb-8">
            <span className="px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 bg-white/15 backdrop-blur-sm border border-white/30 rounded-full text-white font-semibold text-[10px] sm:text-xs md:text-sm shadow-lg">
              Capital Markets Services Licensed
            </span>
          </div>
          
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white mb-3 sm:mb-5 md:mb-6 lg:mb-8 leading-tight drop-shadow-2xl text-center">
            Accelerating Your Growth
          </h1>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/95 mb-4 sm:mb-6 md:mb-8 lg:mb-10 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-lg text-center">
            Expert corporate management and capital market consultation delivering stability, 
            consistent returns, and long-term capital gains.
          </p>

          <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 md:gap-4 mb-4 sm:mb-6 md:mb-8 lg:mb-12 justify-center items-stretch sm:items-center">
            <Button
              size="lg"
              onClick={() => scrollToSection("services")}
              className="bg-accent hover:bg-accent/90 text-white shadow-large group text-xs sm:text-sm md:text-base w-full sm:w-auto justify-center"
            >
              Explore Our Services
              <ArrowRight className="ml-2 h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-all duration-300" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm text-xs sm:text-sm md:text-base w-full sm:w-auto justify-center"
            >
              Get in Touch
            </Button>
          </div>

          {/* Stats - Enhanced Visibility */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 pt-6 sm:pt-8 md:pt-10 border-t border-white/30">
            <div className="group">
              <div className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-accent mb-1 group-hover:scale-110 transition-transform duration-300">18+</div>
              <div className="text-xs md:text-sm text-white/90 font-medium">Years Experience</div>
            </div>
            <div className="group">
              <div className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-accent mb-1 group-hover:scale-110 transition-transform duration-300">CFA</div>
              <div className="text-xs md:text-sm text-white/90 font-medium">Certified Team</div>
            </div>
            <div className="group">
              <div className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-accent mb-1 group-hover:scale-110 transition-transform duration-300">8-18%</div>
              <div className="text-xs md:text-sm text-white/90 font-medium">Target Returns</div>
            </div>
            <div className="group">
              <div className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-accent mb-1 group-hover:scale-110 transition-transform duration-300">SC</div>
              <div className="text-xs md:text-sm text-white/90 font-medium">Malaysia Licensed</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 md:h-3 bg-white/70 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
