const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-6 md:py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-8 h-8 rounded-lg gradient-accent flex items-center justify-center">
              <span className="text-lg font-heading font-bold text-white">Q</span>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-xs sm:text-sm text-primary">
                QUANTSMITH VENTURES SDN BHD
              </span>
              <span className="text-xs text-muted-foreground">Accelerating Your Growth</span>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-xs sm:text-sm text-muted-foreground">
              © {currentYear} Quantsmith Ventures SDN BHD. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Licensed under Capital Markets Services Act (CMSA 2007)
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
