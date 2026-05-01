import { Laptop, Monitor, Camera, HardDrive, Wifi, Wrench } from "lucide-react";

const SERVICES = [
  { icon: Laptop, title: "Laptop Repair", desc: "Screen, motherboard, battery, keyboard — all brands fixed fast." },
  { icon: Monitor, title: "Desktop Sales & Setup", desc: "Custom-built PCs and pre-configured desktops for home & office." },
  { icon: Camera, title: "CCTV Installation", desc: "HD camera systems with remote viewing for home, shop & office." },
  { icon: HardDrive, title: "Data Recovery", desc: "Recover photos, files & documents from damaged drives." },
  { icon: Wifi, title: "Networking Solutions", desc: "Wi-Fi setup, LAN, routers & enterprise-grade network design." },
  { icon: Wrench, title: "Support", desc: "Annual maintenance contracts for businesses across Mumbai." },
];

export function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Services</span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Everything tech, under <span className="text-primary">one roof</span>.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            From quick laptop fixes to full office IT setups — we handle it all with genuine parts and honest pricing.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => (
            <div
              key={s.title}
              className="group relative rounded-2xl border border-border bg-card p-6 sm:p-7 hover:border-primary/40 hover:shadow-[var(--shadow-elevated)] hover:-translate-y-1 transition-all duration-300"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <div className="absolute inset-0 rounded-2xl [background-image:var(--gradient-primary)] opacity-0 group-hover:opacity-[0.03] transition-opacity" />
              <div className="grid h-12 w-12 place-items-center rounded-xl [background-image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-soft)] group-hover:scale-110 transition-transform">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
