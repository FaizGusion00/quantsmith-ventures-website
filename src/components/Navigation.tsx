import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Detect scroll position for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 30;
      setIsScrolled(scrolled);

      // Detect active section
      const sections = ["about", "vision", "leadership", "investment-committee", "responsible-persons", "consultants", "services", "cmsa", "governance", "development-mechanism", "stage-processing", "contact"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 100;
        }
        return false;
      });

      setActiveSection(currentSection || "");
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const navItems = [
    { label: "About", id: "about" },
    { label: "Vision & Mission", id: "vision" },
    { label: "Leadership", id: "leadership" },
    { label: "Committee", id: "investment-committee" },
    { label: "Team", id: "responsible-persons" },
    { label: "Services", id: "services" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-background/50 backdrop-blur-sm z-40 md:hidden animate-fade-in"
          onClick={() => setIsOpen(false)}
        />
      )}

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          isScrolled
            ? "bg-background/98 backdrop-blur-lg shadow-lg border-b border-border/50"
            : "bg-background/95 backdrop-blur-md shadow-sm border-b border-border/30"
        }`}
      >
        <div className="container mx-auto px-3 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between transition-all duration-500 ease-out ${
              isScrolled ? "h-16 md:h-18" : "h-16 sm:h-18 md:h-22"
            }`}
          >
            {/* Logo - Enhanced */}
            <div
              className="flex items-center space-x-1.5 sm:space-x-2 md:space-x-3 cursor-pointer group"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <div className="w-9 h-9 sm:w-10 md:h-11 lg:h-12 rounded-xl gradient-accent flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg group-active:scale-95 flex-shrink-0">
                <span className="text-lg sm:text-xl md:text-2xl font-heading font-bold text-white">Q</span>
              </div>
              {/* Show abbreviated text on very small screens, full text on sm+ */}
              <div className="flex flex-col min-w-0">
                <span
                  className={`font-heading font-bold leading-tight text-primary transition-all duration-500 truncate ${
                    isScrolled ? "text-[9px] sm:text-xs md:text-sm" : "text-[9px] sm:text-sm md:text-base"
                  }`}
                >
                  <span className="sm:hidden">QSV</span>
                  <span className="hidden sm:inline md:hidden">QM</span>
                  <span className="hidden md:inline">QUANTSMITH</span>
                  <span className="hidden lg:inline"> VENTURES</span>
                </span>
                <span
                  className={`text-accent font-medium transition-all duration-500 ${
                    isScrolled ? "text-[7px] sm:text-[8px] md:text-[9px] lg:text-[10px]" : "text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs"
                  } hidden md:block`}
                >
                  Accelerating Your Growth
                </span>
              </div>
            </div>

            {/* Desktop Navigation - Enhanced with better iPad sizing */}
            <div className="hidden md:flex items-center gap-1.5 lg:gap-2">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  onClick={() => scrollToSection(item.id)}
                  className={`group relative text-xs lg:text-sm font-medium transition-all duration-300 px-2.5 lg:px-4 py-2 lg:py-2.5 rounded-lg ${
                    activeSection === item.id
                      ? "text-accent"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/10"
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 h-1 w-8 rounded-full bg-gradient-accent animate-fade-in" />
                  )}
                  <span className="absolute inset-0 rounded-lg bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>
              ))}
              
              {/* Theme Toggle */}
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button - Enhanced */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-1.5 sm:p-2 rounded-xl bg-accent/10 hover:bg-accent/20 transition-all duration-300 active:scale-95 border border-accent/20 hover:border-accent/40 flex-shrink-0"
              aria-label="Toggle menu"
              style={{
                marginLeft: 'auto',
                marginRight: '0.25rem'
              }}
            >
              <div className="relative w-5 h-5 sm:w-6 sm:h-6 flex flex-col justify-center gap-1">
                <span
                  className={`absolute w-4 sm:w-5 h-0.5 bg-foreground transition-all duration-300 origin-center ${
                    isOpen ? "rotate-45 translate-y-0" : "-translate-y-1.5"
                  }`}
                />
                <span
                  className={`w-4 sm:w-5 h-0.5 bg-foreground transition-all duration-300 ${
                    isOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute w-4 sm:w-5 h-0.5 bg-foreground transition-all duration-300 origin-center ${
                    isOpen ? "-rotate-45 translate-y-0" : "translate-y-1.5"
                  }`}
                />
              </div>
            </button>
          </div>

          {/* Mobile Menu - Enhanced with better animations */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
              isOpen ? "max-h-[600px] pb-4 border-t border-border/50 mt-1" : "max-h-0"
            }`}
          >
            <div className="flex flex-col space-y-1 pt-2">
              {navItems.map((item, index) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left justify-between items-center px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg transition-all duration-300 hover:bg-accent/10 group text-sm sm:text-base ${
                    activeSection === item.id
                      ? "text-accent bg-accent/10 border-l-4 border-accent font-semibold"
                      : "text-muted-foreground hover:text-foreground"
                  } transform translate-x-0 ${
                    isOpen ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    transitionDelay: `${isOpen ? index * 0.05 : 0}s`,
                  }}
                >
                  <span className="truncate">{item.label}</span>
                  {activeSection === item.id && (
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse flex-shrink-0 ml-2" />
                  )}
                  {!activeSection && (
                    <ChevronDown className="w-4 h-4 opacity-0 group-hover:opacity-50 transition-opacity flex-shrink-0 ml-2" />
                  )}
                </Button>
              ))}
              
              {/* Theme Toggle in Mobile Menu */}
              <div className="px-3 sm:px-4 py-2.5 sm:py-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-medium text-muted-foreground">Theme</span>
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
