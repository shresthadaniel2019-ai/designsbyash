import { useRef } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PricingSection } from "@/components/PricingSection";
import {
  Check,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Monitor,
  Play,
  PlayCircle,
  Search,
  Settings,
  Smartphone,
  Star,
  Zap,
  type LucideIcon,
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

const featuredProjects = [
  { n: "01", title: "Project Name" },
  { n: "02", title: "Project Name" },
  { n: "03", title: "Project Name" },
] as const;

function FeaturedWork() {
  return (
    <section className="bg-wood-50 py-20 px-6 lg:px-20">
      <p className="text-orange uppercase tracking-[0.2em] text-sm font-semibold text-center">
        Featured Work
      </p>
      <h2 className="mt-2 text-wood-950 text-3xl lg:text-4xl font-bold text-center">
        Custom Websites Built From Scratch
      </h2>
      <p className="mt-4 text-wood-600 text-lg max-w-2xl mx-auto text-center">
        No templates. No page builders. Just clean, efficient code that delivers
        blazing-fast websites for small businesses.
      </p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {featuredProjects.map((p) => (
          <article
            key={p.n}
            className="relative bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <span className="absolute top-4 left-4 z-10 bg-orange text-white font-bold text-sm w-10 h-10 rounded-full flex items-center justify-center">
              {p.n}
            </span>
            <div className="w-full aspect-[4/3] bg-wood-100 flex items-center justify-center text-wood-400 text-sm">
              Project Screenshot
            </div>
            <div className="p-5">
              <h3 className="text-wood-950 font-bold text-lg">{p.title}</h3>
              <p className="text-wood-600 text-sm mt-2 line-clamp-2">
                Custom website for a small business client. Details coming soon.
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

const services: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Monitor,
    title: "Custom Website Development",
    desc: "Every website is hand-coded from scratch. We design a site that captures what makes your business unique.",
  },
  {
    icon: Search,
    title: "Search Engine Optimization",
    desc: "Professional keyword research and content strategy so search engines find your business easily.",
  },
  {
    icon: Smartphone,
    title: "Mobile First Design",
    desc: "Built for mobile screens first — fast, clean, no bloated code weighing things down.",
  },
  {
    icon: Settings,
    title: "Website Management",
    desc: "A hand-coded site that ranks higher, loads fast, and meets modern standards — managed by us.",
  },
  {
    icon: Zap,
    title: "Lightning Fast Speeds",
    desc: "Our sites score 95+ on Google speed tests, bringing more customers to your door.",
  },
  {
    icon: MapPin,
    title: "Canadian Crafted",
    desc: "Our team works right here in Canada. When you need us, we're in your time zone.",
  },
];

function Services() {
  return (
    <section className="bg-wood-950 py-20 px-6 lg:px-20">
      <p className="text-orange uppercase tracking-[0.2em] text-sm font-semibold text-center">
        What We Offer
      </p>
      <h2 className="mt-2 text-white text-3xl lg:text-4xl font-bold text-center">
        We Handle Your Website So You Can Handle Business
      </h2>
      <p className="mt-4 text-wood-400 text-lg max-w-2xl mx-auto text-center">
        At DesignsbyASH, we handcraft superior websites for small business owners
        across Canada and beyond.
      </p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(({ icon: Icon, title, desc }) => (
          <article
            key={title}
            className="bg-wood-900 border border-wood-800 rounded-xl p-6 hover:border-orange transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-lg bg-orange/10 flex items-center justify-center">
              <Icon className="w-6 h-6 text-orange" />
            </div>
            <h3 className="mt-4 text-white font-bold text-lg">{title}</h3>
            <p className="mt-2 text-wood-400 text-sm leading-relaxed">{desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function MeetTheTeam() {
  return (
    <section className="bg-wood-50 py-20 px-6 lg:px-20">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-2/5 w-full">
          <div className="w-full max-w-sm aspect-[3/4] bg-wood-200 rounded-2xl flex items-center justify-center mx-auto">
            <span className="text-wood-400">Team Photo</span>
          </div>
          <p className="mt-4 text-center text-lg font-bold text-wood-950">
            Designsby<span className="text-orange">ASH</span>
          </p>
        </div>

        <div className="lg:w-3/5">
          <p className="text-orange uppercase tracking-[0.2em] text-sm font-semibold">
            Meet the Team
          </p>
          <h2 className="mt-2 text-wood-950 text-3xl font-bold">
            The People Behind the Pixels
          </h2>
          <p className="mt-1 text-wood-500 text-lg">Design &amp; Development</p>
          <p className="mt-4 text-wood-600 leading-relaxed">
            We're a team of passionate web designers and developers based in
            Edmonton, Alberta. We specialize in hand-coded, lightning-fast
            websites for small businesses across Canada and internationally.
            Every project gets our full attention — your business deserves a
            website that works as hard as you do.
          </p>
          <Link
            to="/about"
            className="mt-6 inline-block text-orange font-semibold hover:text-amber transition"
          >
            Learn More About Us →
          </Link>
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    title: "Hosting Fees Included",
    desc: "One simple monthly payment covers everything.",
  },
  {
    title: "24/7 Customer Service",
    desc: "Real people who know your business.",
  },
  {
    title: "Unlimited Edits",
    desc: "Changes within 24 hours, no extra fees.",
  },
  {
    title: "Custom Development & Design",
    desc: "40–50 hours crafting your perfect site.",
  },
  {
    title: "Ongoing Maintenance",
    desc: "We track performance and optimize continuously.",
  },
  {
    title: "Better Results",
    desc: "95+ Google speed scores mean more customers.",
  },
];

const stats = [
  { value: "500K+", label: "Lines of Code Written" },
  { value: "100%", label: "Happy Customers" },
  { value: "5/5", label: "Google Reviews" },
];

function FeaturesStats() {
  return (
    <section className="bg-wood-950 py-20 px-6 lg:px-20">
      <p className="text-orange uppercase tracking-[0.2em] text-sm font-semibold">
        What We Provide
      </p>
      <h2 className="mt-2 text-white text-3xl lg:text-4xl font-bold">
        Custom Website Design — $0 Down, $175 Per Month
      </h2>
      <p className="mt-4 max-w-2xl text-wood-400 text-lg">
        Launch a professional 5-page website with no upfront costs. No hidden
        fees. You own 100% of your domain and content. Cancel anytime.
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((f) => (
          <div key={f.title} className="flex">
            <div className="w-10 h-10 rounded-full bg-orange/10 text-orange flex items-center justify-center flex-shrink-0">
              <Check className="w-5 h-5" />
            </div>
            <div className="ml-4">
              <h3 className="text-white font-semibold">{f.title}</h3>
              <p className="text-wood-400 text-sm mt-1">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <Link
          to="/contact"
          className="inline-block bg-orange text-white px-8 py-3.5 rounded-md font-semibold hover:bg-orange-hover transition"
        >
          Get Started
        </Link>
      </div>

      <div className="mt-16 flex flex-col md:flex-row justify-center gap-8 md:gap-16 text-center">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="text-4xl font-bold text-orange">{s.value}</p>
            <p className="text-wood-400 text-sm mt-1">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function PageSpeed() {
  return (
    <section className="bg-wood-50 py-20 px-6 lg:px-20">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2 w-full">
          <div className="w-full aspect-video bg-wood-200 rounded-xl border border-wood-200 flex items-center justify-center text-wood-400">
            Speed Test Screenshot
          </div>
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-wood-950 text-3xl font-bold">
            Page Speed Matters — Lightning-Fast Websites That Convert
          </h2>
          <p className="mt-4 text-wood-600 leading-relaxed">
            Our sites achieve perfect 100/100 speed scores. While most sites
            take 3+ seconds to load, ours load in under a second. Even a
            1-second delay reduces conversions by 7%.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-block bg-orange text-white px-6 py-3 rounded-md font-semibold hover:bg-orange-hover transition"
          >
            Schedule a Call
          </Link>
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
      <FeaturedWork />
      <Services />
      <MeetTheTeam />
      <FeaturesStats />
      <PageSpeed />
      <PricingSection />
    </>
  );
}
