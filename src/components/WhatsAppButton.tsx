import { useMemo } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  phone?: string; // E.164 without +, e.g., 60355246495 or 60123456789
  message?: string;
}

const WhatsAppButton = ({ phone = "60355246495", message = "Hello, I'd like to know more about your services." }: WhatsAppButtonProps) => {
  const href = useMemo(() => {
    const text = encodeURIComponent(message);
    return `https://wa.me/${phone}?text=${text}`;
  }, [phone, message]);

  return (
    <div className="fixed bottom-4 right-1 sm:right-3 md:right-4 sm:bottom-6 z-50 safe-area-inset-right">
      {/* WhatsApp Button with Gradient & Glossy Effect */}
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label="Chat on WhatsApp"
        className="group relative block"
        style={{
          paddingBottom: 'env(safe-area-inset-bottom)',
          marginRight: 'env(safe-area-inset-right)',
        }}
      >
        <div className="relative rounded-full shadow-2xl overflow-hidden transition-all duration-300 animate-bounce-subtle
          h-12 w-12 sm:h-14 sm:w-14 
          md:h-auto md:min-w-[180px] 
          md:px-5 md:py-3 
          bg-gradient-to-br from-green-500 via-green-400 to-green-600 
          hover:from-green-600 hover:via-green-500 hover:to-green-700
          active:scale-95"
        >
          {/* Glossy Shine Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-1000 ease-in-out" />
          
          {/* Content */}
          <div className="relative z-10 flex items-center justify-center h-full gap-2 md:gap-2.5">
            <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 md:h-5 md:w-5 group-hover:scale-110 transition-transform duration-300" />
            <span className="hidden md:inline font-semibold text-sm tracking-wide">WhatsApp Us</span>
          </div>
        </div>

        {/* Mobile Badge */}
        <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-red-500 text-white text-[10px] sm:text-xs font-bold rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center animate-pulse sm:hidden z-20 shadow-lg">
          <span className="text-[8px] sm:text-xs">1</span>
        </div>

        {/* Desktop Pulse Ring */}
        <div className="hidden md:block absolute inset-0 rounded-full bg-green-500/40 animate-ping opacity-75 -z-10" style={{ animationDuration: '2s' }} />
      </a>
    </div>
  );
};

export default WhatsAppButton;
