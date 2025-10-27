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
    // If phone includes country code prefix, use as-is
    return `https://wa.me/${phone}?text=${text}`;
  }, [phone, message]);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <Button asChild size="lg" className="rounded-full shadow-xl bg-green-500 hover:bg-green-600 text-white">
        <a href={href} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
          <MessageCircle className="mr-2 h-5 w-5" /> WhatsApp Us
        </a>
      </Button>
    </div>
  );
};

export default WhatsAppButton;
