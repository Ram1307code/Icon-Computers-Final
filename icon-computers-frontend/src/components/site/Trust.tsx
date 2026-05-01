import { Star, Quote } from "lucide-react";

const REVIEWS = [
  {
    name: "Mohammed Ehtishaam Shaikh",
    role: "2 reviews · 3 photos",
    text: "10/10 Service! Brought a mobo from them, wasn't available anywhere locally. Found them on Google, they arranged it in 5-6 hours and even stayed open till 12 AM for us. Excellent service!",
    stars: 5,
  },
  {
    name: "Aditya Sahani",
    role: "5 reviews",
    text: "Gave my HP Victus laptop for hinge fabrication. Work was quick, affordable and well explained. Highly recommended for laptop repairs.",
    stars: 5,
  },
  {
    name: "A Chkr",
    role: "Local Guide · 10 reviews",
    text: "Very good service. Got my HP laptop hinge repaired by next day. Reasonable pricing and highly recommended.",
    stars: 5,
  },
];

export function Trust() {
  return (
    <section className="py-20 sm:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Google Reviews
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            What Our Customers Say
          </h2>
          <p className="mt-3 text-muted-foreground">
            Rated 4.8★ by 80+ happy customers
          </p>
        </div>

        {/* Reviews */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
          {REVIEWS.map((r) => (
            <div
              key={r.name}
              className="relative rounded-2xl bg-card border border-border p-6 sm:p-7 hover:shadow-[var(--shadow-elevated)] hover:-translate-y-1 transition-all"
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/10" />

              <div className="flex gap-0.5">
                {Array.from({ length: r.stars }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="mt-4 text-foreground/90 leading-relaxed">
                "{r.text}"
              </p>

              <div className="mt-5 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-primary text-white font-bold">
                  {r.name[0]}
                </div>
                <div>
                  <div className="font-semibold">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">

          {/* Write Review */}
        <a
  href="https://www.google.com/maps/search/?api=1&query=Icon+Computers+Kandivali&query_place_id=0x3be7b6b8edaaaabd:0xd38c66c98948170a"
  target="_blank"
  rel="noopener noreferrer"
  className="px-6 py-3 rounded-full bg-primary text-white font-semibold shadow hover:scale-105 transition"
>
  ⭐ Write a Google Review
</a>
          {/* View All Reviews */}
          <a
            href="https://maps.app.goo.gl/GqanmsUr5fPgWh5r5"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full border border-border font-semibold hover:bg-accent transition"
          >
            View All Reviews
          </a>

        </div>

      </div>
    </section>
  );
}