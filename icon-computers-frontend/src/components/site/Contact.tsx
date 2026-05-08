import { FormEvent, useState } from "react";
import { Phone, MapPin, Clock, Mail, Send, Instagram } from "lucide-react";
import whatsappIcon from "@/assets/whatsapp.png";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

type ContactFormState = {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};

const initialFormState: ContactFormState = {
  name: "",
  phone: "",
  email: "",
  service: "",
  message: "",
};

export function Contact() {
  const [formData, setFormData] = useState<ContactFormState>(initialFormState);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const webhookUrl =
    import.meta.env.VITE_GOOGLE_SHEETS_WEBHOOK_URL?.trim() ||
    "https://script.google.com/macros/s/AKfycbwi03Z3chWrycZeXdWAT52ESP_wJQvK9Y2TW1AkGNaOO5F51s9NjPbIOrEJt9SjQl2t/exec";

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formData.name.trim() || !formData.phone.trim() || !formData.message.trim()) {
      setStatus("error");
      setStatusMessage("Please fill in name, phone number, and message.");
      return;
    }

    if (!webhookUrl) {
      setStatus("error");
      setStatusMessage("Form is not configured yet. Please add VITE_GOOGLE_SHEETS_WEBHOOK_URL.");
      return;
    }

    setStatus("submitting");
    setStatusMessage("");

try {
  await fetch(webhookUrl, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
    },
    body: JSON.stringify({
      ...formData,
      source: "icon-computers-website",
      submittedAt: new Date().toISOString(),
    }),
  });

  setStatus("success");

  setStatusMessage(
    "Thank you! We’ve received your details and will connect with you soon."
  );

  setFormData(initialFormState);

} catch (error) {
  console.error("FORM ERROR:", error);

  setStatus("error");

  setStatusMessage(
    "Submission failed. Please try again or contact us on WhatsApp."
  );
} };

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
              { icon: Phone, label: "Call Us", value: "+91 96654 05349 / +91 96199 10909", href: "tel:+919665405349" },
              // { icon: Phone, label: "Call Us", value: "+91 96199 10909", href: "tel:" },
              { icon: whatsappIcon, label: "WhatsApp", value: "Chat instantly", href: "https://wa.me/919665405349?text=Hi%20Icon%20Computers%2C%20I%20need%20help%20with%20your%20services" },
              { icon: Instagram, label: "Instagram", value: "@icon_computers49", href: "https://instagram.com/icon_computers49" },
              { icon: MapPin, label: "Visit the Shop", value: "D-1, Plot No.28 Nilkant Nagar Near Ganesh Nagar Kandivali West Mumbai-400067" },
              {
                icon: Clock,
                label: "Open Hours",
                value: (
                  <>
                    Mon - Sat · 10:30 AM - 10:30 PM <br />
                    Sun · 12:15 PM - 8:00 PM
                  </>
                ),
              },
              { icon: Mail, label: "Email", value: "iconcomputer49@gmail.com", href: "mailto:iconcomputer49@gmail.com" },
            ].map((c, index) => {
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
                <a key={`${c.label}-${index}`} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener" className="block">
                  {Inner}
                </a>
              ) : (
                <div key={`${c.label}-${index}`}>{Inner}</div>
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

        <div className="mt-10 rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-[var(--shadow-soft)]">
          <div className="max-w-2xl">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">Send Your Requirement</h3>
            <p className="mt-2 text-muted-foreground">
              Fill this form and we will add your request to our support queue immediately.
            </p>
          </div>
<form
  className="mt-8 grid gap-5 sm:grid-cols-2"
  onSubmit={handleSubmit}
>
  {/* Full Name */}
  <div className="space-y-2">
    <label
      htmlFor="contact-name"
      className="text-sm font-semibold text-foreground"
    >
      Full Name
    </label>

    <Input
      id="contact-name"
      value={formData.name}
      onChange={(event) =>
        setFormData((prev) => ({
          ...prev,
          name: event.target.value,
        }))
      }
      placeholder="Enter your full name"
      required
      className="h-12 rounded-xl border-border/60 bg-background/50 focus-visible:ring-2 focus-visible:ring-primary"
    />
  </div>

  {/* Phone */}
  <div className="space-y-2">
    <label
      htmlFor="contact-phone"
      className="text-sm font-semibold text-foreground"
    >
      Phone Number
    </label>

    <Input
      id="contact-phone"
      type="tel"
      value={formData.phone}
      onChange={(event) =>
        setFormData((prev) => ({
          ...prev,
          phone: event.target.value,
        }))
      }
      placeholder="+91 98765 43210"
      required
      className="h-12 rounded-xl border-border/60 bg-background/50 focus-visible:ring-2 focus-visible:ring-primary"
    />
  </div>

  {/* Email */}
  <div className="space-y-2">
    <label
      htmlFor="contact-email"
      className="text-sm font-semibold text-foreground"
    >
      Email Address
    </label>

    <Input
      id="contact-email"
      type="email"
      value={formData.email}
      onChange={(event) =>
        setFormData((prev) => ({
          ...prev,
          email: event.target.value,
        }))
      }
      placeholder="you@example.com"
      className="h-12 rounded-xl border-border/60 bg-background/50 focus-visible:ring-2 focus-visible:ring-primary"
    />
  </div>

  {/* Service */}
  <div className="space-y-2">
    <label
      htmlFor="contact-service"
      className="text-sm font-semibold text-foreground"
    >
      Service Required
    </label>

    <Input
      id="contact-service"
      value={formData.service}
      onChange={(event) =>
        setFormData((prev) => ({
          ...prev,
          service: event.target.value,
        }))
      }
      placeholder="Laptop Repair / CCTV / Networking"
      className="h-12 rounded-xl border-border/60 bg-background/50 focus-visible:ring-2 focus-visible:ring-primary"
    />
  </div>

  {/* Message */}
  <div className="sm:col-span-2 space-y-2">
    <label
      htmlFor="contact-message"
      className="text-sm font-semibold text-foreground"
    >
      Tell Us About Your Requirement
    </label>

    <Textarea
      id="contact-message"
      value={formData.message}
      onChange={(event) =>
        setFormData((prev) => ({
          ...prev,
          message: event.target.value,
        }))
      }
      placeholder="Describe your issue or requirement in detail..."
      className="min-h-[140px] rounded-2xl border-border/60 bg-background/50 resize-none focus-visible:ring-2 focus-visible:ring-primary"
      required
    />
  </div>

  {/* Footer */}
  <div className="sm:col-span-2 flex flex-col gap-4 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-between">
    <div>
      <p
        className={`text-sm font-medium ${
          status === "error"
            ? "text-destructive"
            : status === "success"
            ? "text-green-600"
            : "text-muted-foreground"
        }`}
      >
        {statusMessage ||
          "Your request will be securely submitted to our support team."}
      </p>

      <p className="mt-1 text-xs text-muted-foreground">
        Usually responds within 10–15 minutes during working hours.
      </p>
    </div>

    <Button
      type="submit"
      size="lg"
      disabled={status === "submitting"}
      className="h-12 rounded-xl px-6 text-sm font-semibold shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto"
    >
      {status === "submitting" ? (
        <>
          Sending...
          <Send className="h-4 w-4 animate-pulse" />
        </>
      ) : (
        <>
          Submit Request
          <Send className="h-4 w-4" />
        </>
      )}
    </Button>
  </div>
</form>
          
        </div>
      </div>
    </section>
  );
}
