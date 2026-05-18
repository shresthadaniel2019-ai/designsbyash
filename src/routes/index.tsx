import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DesignsbyASH — Small Business Website Design That Delivers" },
      {
        name: "description",
        content:
          "Hand-coded, custom websites for Canadian small businesses — no upfront costs, starting at $175/month.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="bg-wood-950 min-h-[85vh] py-20 px-6 lg:px-20 flex items-center">
        <div className="w-full flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-3/5">
            <p className="text-orange uppercase tracking-[0.2em] text-sm font-semibold">
              Hand-Coded, Custom Designs
            </p>
            <h1 className="mt-4 text-white text-4xl lg:text-6xl font-bold leading-tight">
              Small Business Website Design That Delivers
            </h1>
            <p className="mt-6 text-wood-400 text-lg leading-relaxed max-w-xl">
              Get a website designed to attract customers, drive business, and
              impress — all without the burden of upfront costs. We offer 100%
              hand-coded websites, starting at just $175/month.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-block bg-orange text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-orange-hover hover:scale-105 transition-all duration-300"
            >
              Get a Quote
            </Link>
          </div>

          <div className="lg:w-2/5 flex items-center justify-center mt-12 lg:mt-0 w-full">
            <div className="w-full max-w-md aspect-[4/3] bg-wood-900 rounded-2xl border border-wood-800 flex items-center justify-center">
              <span className="text-wood-500 text-sm">Device Mockup Image</span>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-24 bg-wood-50 relative">
        <div className="w-full h-24 bg-gradient-to-b from-wood-950 to-transparent opacity-20 flex items-center justify-center">
          <span className="text-wood-400 text-xs">
            Treeline Divider — replace with SVG
          </span>
        </div>
      </div>
    </>
  );
}
