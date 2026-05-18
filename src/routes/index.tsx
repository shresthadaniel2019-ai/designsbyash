import { useRef } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  PlayCircle,
  Star,
} from "lucide-react";

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

function Hero() {
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

function TestimonialsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: 1 | -1) => {
    const el = scrollRef.current;
    if (!el) return;
    const first = el.firstElementChild as HTMLElement | null;
    const cardWidth = first?.offsetWidth ?? 560;
    el.scrollBy({ left: direction * (cardWidth + 24), behavior: "smooth" });
  };

  return (
    <section className="bg-wood-50 py-20 px-6 lg:px-20">
      <h2 className="text-wood-950 text-3xl lg:text-4xl font-bold text-center max-w-3xl mx-auto">
        The Proof Is in the Pudding... Let's Hear From Our Clients
      </h2>

      <div className="mt-12 relative">
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide pb-2"
        >
          {Array.from({ length: 7 }).map((_, i) => (
            <article
              key={i}
              className="bg-white rounded-xl shadow-md p-5 snap-start flex-shrink-0 flex flex-col md:flex-row min-w-[90vw] md:min-w-[560px]"
            >
              <div className="w-full md:w-[280px] aspect-video bg-wood-900 rounded-lg flex items-center justify-center">
                <Play className="w-10 h-10 text-wood-500" />
              </div>
              <div className="pt-4 pl-0 md:pt-0 md:pl-6 flex-1">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="w-5 h-5 fill-amber text-amber" />
                  ))}
                </div>
                <p className="mt-3 text-wood-600 italic text-sm">
                  Client video testimonial coming soon.
                </p>
                <p className="mt-3 text-wood-950 font-semibold text-sm">
                  — Client Name, Business Name
                </p>
              </div>
            </article>
          ))}
        </div>

        <button
          type="button"
          aria-label="Previous testimonial"
          onClick={() => scrollByCard(-1)}
          className="hidden md:flex absolute top-1/2 -translate-y-1/2 -left-4 bg-orange text-white w-10 h-10 rounded-full shadow-lg hover:bg-orange-hover transition items-center justify-center"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          type="button"
          aria-label="Next testimonial"
          onClick={() => scrollByCard(1)}
          className="hidden md:flex absolute top-1/2 -translate-y-1/2 -right-4 bg-orange text-white w-10 h-10 rounded-full shadow-lg hover:bg-orange-hover transition items-center justify-center"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}

function YouTubeExplainer() {
  return (
    <section className="bg-wood-950 py-20 px-6 lg:px-20">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2">
          <p className="text-orange uppercase tracking-[0.2em] text-sm font-semibold">
            See It In Action
          </p>
          <h2 className="mt-3 text-white text-3xl lg:text-4xl font-bold">
            Watch How We Build Websites That Work
          </h2>
          <p className="mt-4 text-wood-400 text-lg leading-relaxed">
            See the difference a hand-coded website can make for your business.
            No page builders, no templates — just clean, efficient code built to
            convert.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-block text-orange font-semibold hover:text-amber transition"
          >
            Start Today →
          </Link>
        </div>

        <div className="lg:w-1/2 w-full">
          <div className="w-full aspect-video bg-wood-900 rounded-xl border border-wood-800 flex flex-col items-center justify-center">
            <PlayCircle className="w-16 h-16 text-wood-500" />
            <span className="mt-3 text-wood-500 text-sm">
              YouTube Video Coming Soon
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <>
      <Hero />
      <TestimonialsCarousel />
      <YouTubeExplainer />
    </>
  );
}
