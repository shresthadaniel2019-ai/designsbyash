import { createFileRoute, Link } from "@tanstack/react-router";
import { BottomCTA, PageHero } from "@/components/PageBits";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — DesignsbyASH" },
      {
        name: "description",
        content:
          "Custom website development, SEO, and ongoing management for Canadian small businesses.",
      },
    ],
  }),
  component: ServicesPage,
});

const rows = [
  {
    title: "Custom Website Development",
    p1: "Every site we build is hand-coded from scratch — no templates, no page builders, no shortcuts. The result is a website that looks the way you want and runs as fast as the web allows.",
    p2: "We design around your business, not the other way around. From sitemap to launch, you get a custom build crafted to convert.",
  },
  {
    title: "Search Engine Optimization",
    p1: "Great design only matters if customers can find you. Our SEO work blends keyword research, on-page optimization, and clean technical foundations so your site climbs the rankings.",
    p2: "We focus on the metrics that move business — calls, bookings, and form submissions — not vanity numbers.",
  },
  {
    title: "Website Management & Support",
    p1: "Once your site is live, we keep it healthy. Unlimited edits, proactive maintenance, and 24/7 support are all baked in — no surprise invoices.",
    p2: "When you need a change, you message us. Most updates ship within 24 hours so your site stays current as your business grows.",
  },
];

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Everything Your Business Needs Online"
        description="From custom design to ongoing management — we handle it all."
      />

      <section className="bg-wood-50 dark:bg-wood-900 py-16 px-6 lg:px-20">
        <div className="flex flex-col">
          {rows.map((row, i) => (
            <div
              key={row.title}
              className={`flex flex-col items-center gap-12 py-12 ${
                i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
              }`}
            >
              <div className="lg:w-1/2 w-full">
                <div className="w-full aspect-video bg-wood-200 dark:bg-wood-800 rounded-xl flex items-center justify-center text-wood-400 text-sm">
                  Service Image
                </div>
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-wood-950 dark:text-white text-2xl font-bold">{row.title}</h2>
                <p className="mt-4 text-wood-600 dark:text-wood-300 leading-relaxed">{row.p1}</p>
                <p className="mt-3 text-wood-600 dark:text-wood-300 leading-relaxed">{row.p2}</p>
                <Link
                  to="/contact"
                  className="mt-4 inline-block text-orange font-semibold hover:text-amber transition"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <BottomCTA />
    </>
  );
}
