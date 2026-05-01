import { Zap, BadgeIndianRupee, ShieldCheck, MapPin, Clock, Award } from "lucide-react";

const REASONS = [
  { icon: Zap, title: "Fast Service", desc: "Most repairs done same day. No long waits." },
  { icon: BadgeIndianRupee, title: "Affordable Pricing", desc: "Honest quotes — no hidden charges, ever." },
  { icon: ShieldCheck, title: "Genuine Products", desc: "100% original parts with proper warranty." },
  { icon: MapPin, title: "Local & Trusted", desc: "Right here in Kandivali West for 5+ years." },
  { icon: Clock, title: "Open 7 Days", desc: "Walk in any day — we're here when you need us." },
  { icon: Award, title: "Expert Technicians", desc: "Certified pros with 10+ years of experience." },
];

export function WhyUs() {
  return (
    <section id="why" className="py-20 sm:py-28 bg-background relative overflow-hidden">
      <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full [background-image:var(--gradient-primary)] opacity-10 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-destructive/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Why Choose Us</span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            The reasons Mumbai keeps coming back.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {REASONS.map((r) => (
            <div
              key={r.title}
              className="flex gap-4 rounded-2xl border border-border bg-card p-5 sm:p-6 hover:border-primary/40 hover:shadow-[var(--shadow-soft)] transition-all"
            >
              <div className="shrink-0 grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                <r.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold">{r.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
