import { useState, useEffect } from "react";

const SplashScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Smooth progress animation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    // Start exit animation
    const startExit = setTimeout(() => {
      setIsExiting(true);
    }, 1300);

    // Complete and remove from DOM
    const removeTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);

    return () => {
      clearInterval(interval);
      clearTimeout(startExit);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] bg-primary transition-all duration-500 ease-in-out ${
        isExiting ? "opacity-0 scale-105" : "opacity-100 scale-100"
      }`}
    >
      {/* Solid Background with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/95" />
      
      {/* Subtle Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "0.5s" }} />
      </div>

      {/* Main Content - Perfectly Centered for Mobile */}
      <div className="relative z-10 h-full w-full flex flex-col items-center justify-center px-4 sm:px-6">
        {/* Logo with smooth animation - Centered Container */}
        <div className="flex flex-col items-center justify-center mb-3 sm:mb-4 md:mb-6">
          {/* Logo Box */}
          <div className="relative mb-3 sm:mb-4 md:mb-6">
            {/* Glow Effect */}
            <div className="absolute inset-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-accent/20 rounded-2xl blur-2xl animate-pulse" />
            
            {/* Main Logo - Perfectly Centered */}
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-xl sm:rounded-2xl gradient-accent flex items-center justify-center shadow-2xl transform transition-all duration-700 animate-scale-in mx-auto">
              <span className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white">Q</span>
            </div>
          </div>

          {/* Company Name - fade in with delay - Centered */}
          <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-white tracking-tight mb-1 sm:mb-2 animate-fade-in text-center w-full max-w-[90%] sm:max-w-none">
            QUANTSMITH VENTURES
          </h1>
          
          {/* Tagline - Centered */}
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/80 font-medium animate-fade-in text-center w-full max-w-[260px] sm:max-w-none px-2" style={{ animationDelay: "0.2s" }}>
            Accelerating Your Growth
          </p>
        </div>

        {/* Modern Loading Bar - Centered */}
        <div className="w-[180px] sm:w-56 md:w-64 h-1 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-accent via-gold to-accent rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Footer - Bottom */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-0 right-0 text-center px-4">
        <div className="space-y-0.5 sm:space-y-1">
          <p className="text-[10px] sm:text-xs md:text-sm text-white/60 font-medium">
            Capital Markets Services Licensed
          </p>
          <p className="text-[9px] sm:text-[10px] md:text-xs text-white/40">
            Securities Commission Malaysia • CMSRL
          </p>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;

