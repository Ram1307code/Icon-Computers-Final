import { MessageCircle, Phone } from "lucide-react";
import whatsappIcon from "../../assets/whatsapp.png";

export function FloatingCTA() {
  return (
    <>
    <a
  href="https://wa.me/919665405349?text=Hi%20Icon%20Computers%2C%20I%20need%20help%20with%20your%20services"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Chat on WhatsApp"
  className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-[var(--shadow-elevated)] hover:scale-110 transition-transform animate-[pulse-ring_2s_cubic-bezier(0.4,0,0.6,1)_infinite]"
>
        <img 
  src={whatsappIcon} 
  alt="WhatsApp"
  className="w-10 h-10 object-cover rounded-full"
/>
      </a>
      <a
        href="tel:+919665405349"
        aria-label="Call Now"
        className="fixed bottom-5 left-5 z-50 md:hidden grid h-14 w-14 place-items-center rounded-full [background-image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-elevated)] hover:scale-110 transition-transform"
      >
        <Phone className="h-6 w-6" />
      </a>
    </>
  );
}
