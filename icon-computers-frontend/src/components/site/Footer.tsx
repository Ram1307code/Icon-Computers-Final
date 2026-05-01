import { Monitor, Phone, MapPin, Star } from "lucide-react";
import logo from "../../assets/logo.jpeg";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <img 
  src={logo} 
  alt="Icon Computers Logo"
  className="h-10 w-10 rounded-lg object-cover shadow-[var(--shadow-soft)]"
/>
              <span className="font-bold text-lg">Icon Computers</span>
            </div>
            <p className="mt-4 text-background/70 max-w-md">
              Kandivali West's most trusted computer shop. Repairs, sales, CCTV & networking — done right since 2012.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-sm">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              4.8 · 84+ Google reviews
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-background/70 text-sm">
              {[
                ["Services", "#services"],
                ["Products", "#products"],
                ["Gallery", "#gallery"],
                ["Why Choose Us", "#why"],
                ["Contact", "#contact"],
              ].map(([l, h]) => (
                <li key={l}><a href={h} className="hover:text-primary-foreground transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Reach Us</h4>
            <ul className="space-y-3 text-background/70 text-sm">
              <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 shrink-0" /><a href="tel:+91 96654 05349" className="hover:text-primary-foreground">+91 96654 05349</a></li>
              <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 shrink-0" /><a href="tel:+91 96199 10909" className="hover:text-primary-foreground">+91 96199 10909</a></li>
              <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0" /> D-1, Plot No.28 Nilkant Nagar Near Ganesh Nagar Kandivali West Mumbai-400067</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-background/60">
          <div>© {new Date().getFullYear()} Icon Computers. All rights reserved.</div>
          <div><a href ="https://workholicagency.vercel.app/" target="_blank">Made By Team Workholic  </a></div>
        </div>
      </div>
    </footer>
  );
}
