import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Products } from "@/components/site/Products";
import { Trust } from "@/components/site/Trust";
import { Gallery } from "@/components/site/Gallery";
import { WhyUs } from "@/components/site/WhyUs";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingCTA } from "@/components/site/FloatingCTA";

export const Route = createFileRoute("/")({
  component: Index,


  head: () => ({
    meta: [
      { title: "Icon Computers | Laptop Repair, CCTV & PC Sales in Kandivali West Mumbai" },

      {
        name: "description",
        content:
          "Icon Computers in Kandivali West Mumbai — Laptop repair, CCTV installation, desktop sales & networking. Trusted by 1000+ customers.",
      },

      {
        name: "keywords",
        content:
          "Laptop repair Kandivali, CCTV installation Mumbai, computer shop Kandivali West, PC sales Mumbai",
      },

      { name: "author", content: "Icon Computers" },

      // Open Graph
      { property: "og:title", content: "Icon Computers - Best Computer Shop in Kandivali West" },
      { property: "og:description", content: "Laptop Repair, CCTV, PC Sales & Networking services in Mumbai." },
      { property: "og:image", content: "/og-image.jpg" },
      { property: "og:type", content: "website" },

      // Twitter
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Icon Computers Mumbai" },
      { name: "twitter:description", content: "Laptop Repair & CCTV Services in Kandivali West" },
      { name: "twitter:image", content: "/og-image.jpg" },

      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
    ],

    links: [
      { rel: "icon", href: "/favicon.ico" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      { rel: "manifest", href: "/site.webmanifest" },
    ],
  }),
});

function Index() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Icon Computers",
    image: "https://example.com/og.jpg",
    telephone: "+91-99999-99999",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Shop No. 5, M.G. Road",
      addressLocality: "Kandivali West",
      addressRegion: "Mumbai",
      postalCode: "400067",
      addressCountry: "IN",
    },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "84" },
    openingHours: "Mo-Su 10:00-21:00",
  };

  return (
    <div className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <Header />
      <main>
        <Hero />
        <Services />
        <Products />
        <Trust />
        <Gallery />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
