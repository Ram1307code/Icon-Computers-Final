import { Phone, MapPin, Clock, MessageCircle, Mail } from "lucide-react";
import whatsappIcon from "@/assets/whatsapp.png";

export function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Get in Touch</span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Visit us, call us, or message us.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            We respond within minutes on WhatsApp during shop hours.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            {[
              { icon: Phone, label: "Call Us", value: "+91 96654 05349", href: "tel:+919665405349" },
              { icon: Phone, label: "Call Us", value: "+91 96199 10909", href: "tel:+919619910909" },
              { icon: whatsappIcon , label: "WhatsApp", value: "Chat instantly", href: "https://wa.me/919665405349?text=Hi%20Icon%20Computers%2C%20I%20need%20help%20with%20your%20services" },  
              { icon: MapPin, label: "Visit the Shop", value: "D-1, Plot No.28 Nilkant Nagar Near Ganesh Nagar Kandivali West Mumbai-400067" },
   {
  icon: Clock,
  label: "Open Hours",
  value: (
    <>
      Mon – Sun · 10:30 AM – 10:30 PM <br />
      Sun · 12:15 PM – 8:00 PM
    </>
  )
},
              { icon: Mail, label: "Email", value: "iconcomputer49@gmail.com", href: "mailto:iconcomputer49@gmail.com" },
            ].map((c) => {
              const Inner = (
                <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 sm:p-6 hover:border-primary/40 hover:shadow-[var(--shadow-soft)] transition-all">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl [background-image:var(--gradient-primary)] text-primary-foreground">
                    {typeof c.icon === "string" ? (
  <img src={c.icon} alt={c.label} className="h-5 w-5 object-contain" />
) : (
  <c.icon className="h-5 w-5" />
)}
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">{c.label}</div>
                    <div className="mt-0.5 font-semibold text-base sm:text-lg">{c.value}</div>
                  </div>
                </div>
              );
              return c.href ? (
                <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener" className="block">
                  {Inner}
                </a>
              ) : (
                <div key={c.label}>{Inner}</div>
              );
            })}
          </div>
<div className="rounded-2xl overflow-hidden border border-border shadow-[var(--shadow-soft)] min-h-[400px] bg-card">
  <iframe
    title="Icon Computers location in Kandivali West"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.8149171718487!2d72.826525!3d19.2032846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b6b8edaaaabd%3A0xd38c66c98948170a!2sIcon%20Computers!5e0!3m2!1sen!2sin!4v1777543110934!5m2!1sen!2sin"
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    className="w-full h-full border-0"
  />
</div>
        </div>
      </div>
    </section>
  );
}
