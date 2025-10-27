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

      {/* Main Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center">
        {/* Logo with smooth animation */}
        <div className="flex flex-col items-center mb-8">
          {/* Logo Box */}
          <div className="relative mb-6">
            {/* Glow Effect */}
            <div className="absolute inset-0 w-24 h-24 bg-accent/20 rounded-2xl blur-2xl animate-pulse" />
            
            {/* Main Logo */}
            <div className="relative w-24 h-24 rounded-2xl gradient-accent flex items-center justify-center shadow-2xl transform transition-all duration-700 animate-scale-in">
              <span className="text-5xl font-heading font-bold text-white">Q</span>
            </div>
          </div>

          {/* Company Name - fade in with delay */}
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-white tracking-tight mb-2 animate-fade-in text-center">
            QUANTSMITH VENTURES
          </h1>
          
          {/* Tagline */}
          <p className="text-base md:text-lg text-white/80 font-medium animate-fade-in text-center" style={{ animationDelay: "0.2s" }}>
            Accelerating Your Growth
          </p>
        </div>

        {/* Modern Loading Bar */}
        <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden mb-12">
          <div
            className="h-full bg-gradient-to-r from-accent via-gold to-accent rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Footer - Bottom */}
      <div className="absolute bottom-8 left-0 right-0 text-center">
        <div className="space-y-1">
          <p className="text-xs md:text-sm text-white/60 font-medium">
            Capital Markets Services Licensed
          </p>
          <p className="text-[10px] md:text-xs text-white/40">
            Securities Commission Malaysia • CMSRL
          </p>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;

