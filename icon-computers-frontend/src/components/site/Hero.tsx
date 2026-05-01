import { MessageCircle, Phone, Star, ShieldCheck, Zap, MapPin } from "lucide-react";
import heroImg from "@/assets/hero-shop.jpg";
import whatsappIcon from "@/assets/whatsapp.png";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex items-center pt-20 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Icon Computers shop in Kandivali West, Mumbai"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
        />
        {/* Strong readability gradient — dark on left, fading right */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
        {/* Subtle brand tint */}
        <div className="absolute inset-0 [background-image:var(--gradient-hero)] opacity-40 mix-blend-multiply" />
      </div>

      {/* Decorative glow */}
      <div className="pointer-events-none absolute -top-20 -right-20 h-96 w-96 rounded-full bg-primary-glow/30 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-3xl text-white animate-[fade-up_0.8s_ease-out]">
          {/* Top badges */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 px-3 py-1.5 text-xs font-semibold">
              <Star className="h-3.5 w-3.5 fill-yellow-300 text-yellow-300" />
              4.8 ★ Google Rated
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 px-3 py-1.5 text-xs font-semibold">
              <MapPin className="h-3.5 w-3.5 text-blue-200" />
              Kandivali West, Mumbai
            </span>
          </div>

          <h1 className="mt-5 text-[2.25rem] leading-[1.1] sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Mumbai's #1
            <span className="block bg-gradient-to-r from-blue-200 via-white to-blue-300 bg-clip-text text-transparent font-semibold">
              Computer Shop
            </span>
          </h1>

        <p className="mt-5 text-base sm:text-lg text-white/85 max-w-2xl font-normal">
  Sales & Service of Laptop, Desktop, CCTV & Networking Equipment.
  <span className="block mt-1 text-white/70 text-sm sm:text-base font-light">
    Serving since 2012 · Genuine Parts · Fast & Reliable Service
  </span>
</p>
          {/* CTAs */}
          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <a
  href="https://wa.me/919665405349?text=Hi%20Icon%20Computers%2C%20I%20need%20your%20services"
  target="_blank"
  rel="noopener"
  className="group inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp text-whatsapp-foreground px-7 py-4 text-base font-bold shadow-[var(--shadow-elevated)] hover:scale-[1.03] active:scale-[0.98] transition-all"
>
  <img
    src={whatsappIcon}
    alt="WhatsApp"
    className="h-5 w-5 object-contain group-hover:scale-110 transition-transform"
  />
  WhatsApp Now
</a>
            <a
              href="tel:+919665405349"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-primary px-7 py-4 text-base font-bold shadow-[var(--shadow-elevated)] hover:bg-white/95 hover:scale-[1.03] active:scale-[0.98] transition-all"
            >
              <Phone className="h-5 w-5" />
              Call: +91 96654 05349
            </a>
          </div>

          {/* Trust stats */}
          <div className="mt-8 sm:mt-10 grid grid-cols-3 gap-2.5 sm:gap-4 max-w-xl">
            {[
  { icon: Star, label: "4.8★", sub: "80+ Google reviews" },
  { icon: ShieldCheck, label: "1000+", sub: "Happy customers" },
  { icon: Zap, label: "Since 2012", sub: "Trusted service" },
].map((s, i) => (
              <div
                key={i}
                className="rounded-xl bg-white/10 backdrop-blur-md border border-white/20 p-3 sm:p-4 hover:bg-white/15 transition-colors"
              >
                <s.icon className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-300" />
                <div className="mt-1.5 text-base sm:text-xl font-extrabold leading-tight">{s.label}</div>
                <div className="text-[10px] sm:text-xs text-white/75 leading-tight">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-1 text-white/60">
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <div className="h-8 w-[2px] bg-gradient-to-b from-white/60 to-transparent" />
      </div>
    </section>
  );
}
