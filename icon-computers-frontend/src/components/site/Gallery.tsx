import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";

const IMAGES = [
  { src: g3, alt: "Laptops on display in Icon Computers shop", caption: "In-Store Laptops" },
  { src: g1, alt: "Laptop motherboard repair", caption: "Expert Repairs" },
  { src: g2, alt: "CCTV camera installation", caption: "CCTV Installation" },
  { src: g4, alt: "Custom built gaming PC", caption: "Custom PC Builds" },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-20 sm:py-28 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Inside Our Shop</span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            See our work, our store, our standards.
          </h2>
        </div>
      </div>

      <div className="mt-10 overflow-x-auto scrollbar-hide pb-4">
        <div className="flex gap-4 sm:gap-6 px-4 sm:px-6 lg:px-8 min-w-max">
          {IMAGES.concat(IMAGES).map((img, i) => (
            <figure
              key={i}
              className="group relative w-[80vw] sm:w-[420px] aspect-[4/3] rounded-2xl overflow-hidden shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elevated)] transition-all"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                width={1024}
                height={768}
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5 text-white font-semibold">
                {img.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
