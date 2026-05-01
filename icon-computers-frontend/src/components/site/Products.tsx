import { MessageCircle } from "lucide-react";
import laptopPhoto from "@/assets/laptop.jpeg";
import monitorPhoto from "@/assets/monitor.jpeg";
import keyboardPhoto from "@/assets/keyboard.jpeg";
import mousePhoto from "@/assets/mouse.jpeg";
import printerPhoto from "@/assets/printer.jpg";
import scannerPhoto from "@/assets/scanner.png";
import computerHardwarePhoto from "@/assets/computerhardware.jpeg";
import networkingSolutionsPhoto from "@/assets/networkingsolutions.jpeg";
import storageSolutionsPhoto from "@/assets/storagesolutions.jpeg";
import modemPhoto from "@/assets/modem.jpg";
import switchesPhoto from "@/assets/switches.jpg";
import networkingCablesPhoto from "@/assets/networking cables.jpg";
import networkingAccessoriesPhoto from "@/assets/Accessories.jpg";
import hddPhoto from "@/assets/hdd.jpeg";
import ssdPhoto from "@/assets/ssd.jpeg";
import externalStorageDevicesPhoto from "@/assets/External Storage Devices.jpeg";
import antivirusPhoto from "@/assets/antivirus.webp";
import operatingSystemPhoto from "@/assets/operating system.jpg";
import productivityToolsPhoto from "@/assets/proctivity tools.jpeg";
import bulletCameraPhoto from "@/assets/bullet camera.jpeg";
import domeCamerasPhoto from "@/assets/dome cameras.jpeg";
import dvrSystemPhoto from "@/assets/dvr system.jpeg";
import nvrSystemPhoto from "@/assets/nvr system.jpeg";
import cpu from "@/assets/product-cpu.jpg";
import router from "@/assets/product-router.jpg";
import cctv from "@/assets/product-cctv.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import heroShop from "@/assets/hero-shop.jpg";

const PRODUCTS = [
  {
    name: "Computer Hardware",
    tag: "Core Systems",
    emoji: "",
    categoryImg: computerHardwarePhoto,
    desc: "Desktops, Laptops, Monitors, Keyboards, Mouse, Printers & Scanners",
    items: [
      { name: "Desktops", img: cpu },
      { name: "Laptops", img: laptopPhoto },
      { name: "Monitors", img: monitorPhoto },
      { name: "Keyboards", img: keyboardPhoto },
      { name: "Mouse", img: mousePhoto },
      { name: "Printers", img: printerPhoto },
      { name: "Scanners", img: scannerPhoto },
    ],
  },
  {
    name: "Networking Devices",
    tag: "Connectivity",
    emoji: "",
    categoryImg: networkingSolutionsPhoto,
    desc: "Routers, Modems, Switches, Network Cables & Accessories",
    items: [
      { name: "Routers", img: router },
      { name: "Modems", img: modemPhoto },
      { name: "Switches", img: switchesPhoto },
      { name: "Network Cables", img: networkingCablesPhoto },
      { name: "Accessories", img: networkingAccessoriesPhoto },
    ],
  },
  {
    name: "Storage Solutions",
    tag: "Data Storage",
    emoji: "",
    categoryImg: storageSolutionsPhoto,
    desc: "HDD, SSD, External Storage Devices",
    items: [
      { name: "HDD", img: hddPhoto },
      { name: "SSD", img: ssdPhoto },
      { name: "External Storage Devices", img: externalStorageDevicesPhoto },
    ],
  },
  {
    name: "Software Solutions",
    tag: "Licensed Software",
    emoji: "",
    desc: "Antivirus, Operating Systems, Productivity Tools",
    items: [
      { name: "Antivirus", img: antivirusPhoto },
      { name: "Operating Systems", img: operatingSystemPhoto },
      { name: "Productivity Tools", img: productivityToolsPhoto },
    ],
  },
  {
    name: "CCTV & Surveillance",
    tag: "Security",
    emoji: "",
    categoryImg: cctv,
    desc: "Bullet Cameras, Dome Cameras, DVR & NVR Systems, Accessories",
    items: [
      { name: "Bullet Cameras", img: bulletCameraPhoto },
      { name: "Dome Cameras", img: domeCamerasPhoto },
      { name: "DVR Systems", img: dvrSystemPhoto },
      { name: "NVR Systems", img: nvrSystemPhoto },
      { name: "Accessories (Cables, Adapters, Power Supply)", img: networkingAccessoriesPhoto },
    ],
  },
  {
    name: "IT Services",
    tag: "Support",
    emoji: "",
    desc: "Computer Repair & Maintenance, Networking Setup, CCTV Installation & Support",
    items: [
      { name: "Computer Repair & Maintenance", img: heroShop },
      { name: "Networking Setup", img: router },
      { name: "CCTV Installation & Support", img: cctv },
    ],
  },
];

const WHATSAPP_NUMBER = "919665405349";

function getWhatsAppLink(productName: string) {
  const message = `Hi Icon Computers, I need help with your ${productName}.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function getQuoteLink() {
  const message = "Hi Icon Computers, I need help with your products.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function getFallbackImage(label: string) {
  const safeLabel = label.replace(/&/g, "and");
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
      <defs>
        <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="#dbeafe" />
          <stop offset="100%" stop-color="#e2e8f0" />
        </linearGradient>
      </defs>
      <rect width="800" height="600" fill="url(#bg)" />
      <g fill="#0f172a" fill-opacity="0.2">
        <circle cx="120" cy="100" r="60" />
        <circle cx="700" cy="520" r="90" />
      </g>
      <text x="400" y="305" text-anchor="middle" font-family="Arial, sans-serif" font-size="44" font-weight="700" fill="#0f172a">${safeLabel}</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

export function Products() {
  return (
    <section id="products" className="py-20 sm:py-28 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Product Categories</span>
            <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Complete tech categories for business, security, and support
            </h2>
          </div>
          <a
            href={getQuoteLink()}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            Ask for a quote <MessageCircle className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-12 space-y-5 sm:space-y-6">
          {PRODUCTS.map((p) => (
            <article
              key={p.name}
              className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
            >
              <div className="flex flex-col lg:flex-row">
                <div className="shrink-0 border-b border-border bg-secondary/35 p-4 sm:p-5 lg:w-[300px] lg:border-b-0 lg:border-r">
                  {p.categoryImg && (
                    <div className="mb-3 overflow-hidden rounded-xl border border-border bg-secondary/20">
                      <img
                        src={p.categoryImg}
                        alt={`${p.name} category`}
                        loading="lazy"
                        width={800}
                        height={500}
                        className="h-28 w-full object-cover"
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = getFallbackImage(p.name);
                        }}
                      />
                    </div>
                  )}
                  {p.tag && (
                    <span className="inline-flex rounded-full bg-primary/10 px-2.5 py-1 text-[10px] font-semibold text-primary sm:text-xs">
                      {p.tag}
                    </span>
                  )}
                  <h3 className="mt-3 text-lg font-bold tracking-tight sm:text-xl">
                    <span className="mr-2 align-middle text-base opacity-80">{p.emoji}</span>
                    {p.name}
                  </h3>
                  <p className="mt-2 text-xs leading-6 text-muted-foreground sm:text-sm">{p.desc}</p>
                  <a
                    href={getWhatsAppLink(p.name)}
                    target="_blank"
                    rel="noopener"
                    className="mt-4 inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-foreground px-4 py-2 text-xs font-semibold text-background transition-colors hover:bg-primary sm:text-sm"
                  >
                    Enquire Category
                  </a>
                </div>

                <div className="min-w-0 flex-1 p-4 sm:p-5">
                  <div className="flex gap-3 overflow-x-auto pb-1 sm:gap-4">
                    {p.items.map((item) => (
                      <div
                        key={`${p.name}-${item.name}`}
                        className="min-w-[180px] max-w-[180px] overflow-hidden rounded-xl border border-border bg-background sm:min-w-[210px] sm:max-w-[210px]"
                      >
                        <div className="aspect-[4/3] overflow-hidden bg-secondary/30">
                          <img
                            src={item.img}
                            alt={item.name}
                            loading="lazy"
                            width={480}
                            height={360}
                            className="h-full w-full object-cover"
                            onError={(e) => {
                              e.currentTarget.onerror = null;
                              e.currentTarget.src = getFallbackImage(item.name);
                            }}
                          />
                        </div>
                        <div className="p-3">
                          <p className="line-clamp-2 min-h-[2.5rem] text-xs font-semibold text-foreground sm:text-sm">
                            {item.name}
                          </p>
                          <a
                            href={getWhatsAppLink(`${p.name} - ${item.name}`)}
                            target="_blank"
                            rel="noopener"
                            className="mt-3 inline-flex w-full items-center justify-center rounded-md border border-border px-3 py-1.5 text-[11px] font-semibold text-foreground transition-colors hover:border-primary hover:text-primary sm:text-xs"
                          >
                            Enquire
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
