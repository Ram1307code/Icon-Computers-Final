import { useEffect, useState } from "react";
import { Phone, Menu, X, Monitor } from "lucide-react";
import logo from "../../assets/logo.jpeg";

const NAV = [
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "Gallery", href: "#gallery" },
  { label: "Why Us", href: "#why" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-background border-b border-border shadow-[var(--shadow-soft)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
      <a href="#top" className="flex items-center gap-2 group">
  <img 
    src={logo} 
    alt="Icon Computers Logo"
    className="h-10 w-10 rounded-lg object-contain bg-white p-1 shadow-sm"
  />

  <span className="font-bold text-lg tracking-tight text-foreground">
    Icon <span className="text-primary">Computers</span>
  </span>
</a>

          <nav className="hidden md:flex items-center gap-7">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <a
              href="tel:+919665405349"
              className="inline-flex items-center gap-2 rounded-full [background-image:var(--gradient-primary)] text-primary-foreground px-4 py-2 text-sm font-semibold shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elevated)] hover:-translate-y-0.5 transition-all"
            >
              <Phone className="h-4 w-4" /> Call Now
            </a>
          </div>

          <button
            className={`md:hidden p-2 rounded-md hover:bg-accent ${scrolled ? "text-foreground" : "text-white"}`}
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 animate-[fade-up_0.3s_ease-out]">
            <div className="flex flex-col gap-1 rounded-xl bg-background border border-border p-2 shadow-[var(--shadow-soft)]">
              {NAV.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2 rounded-lg text-sm font-medium hover:bg-accent"
                >
                  {n.label}
                </a>
              ))}
              <a
                href="tel:+919999999999"
                className="mt-1 inline-flex items-center justify-center gap-2 rounded-lg [background-image:var(--gradient-primary)] text-primary-foreground px-3 py-2.5 text-sm font-semibold"
              >
                <Phone className="h-4 w-4" /> Call Now
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
