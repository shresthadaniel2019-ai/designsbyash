import { useRef } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PricingSection } from "@/components/PricingSection";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useCountUp } from "@/hooks/useCountUp";
import {
  Check,
  ChevronLeft,
  ChevronRight,
  Monitor,
  Play,
  PlayCircle,
  Search,
  Settings,
  Smartphone,
  Star,
  Users,
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
          "Hand-coded, custom websites for small businesses — no upfront costs, starting at $175/month.",
      },
    ],
  }),
  component: Index,
});

function Hero() {
  const textRef = useScrollReveal();
  const mockupRef = useScrollReveal();
  return (
    <>
      <section className="bg-wood-950 min-h-[85vh] py-20 px-6 lg:px-20 flex items-center">
        <div className="w-full flex flex-col lg:flex-row items-center gap-12">
          <div ref={textRef} className="lg:w-3/5 reveal">
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

          <div
            ref={mockupRef}
            className="lg:w-2/5 flex items-center justify-center mt-12 lg:mt-0 w-full reveal reveal-delay-2"
          >
            <div className="w-full max-w-md aspect-[4/3] bg-wood-900 rounded-2xl border border-wood-800 overflow-hidden flex flex-col">
              <div className="flex items-center gap-1.5 px-4 py-3 bg-wood-800 border-b border-wood-700">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-yellow-500" />
                <span className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="flex-1" />
            </div>
          </div>
        </div>
      </section>

      <div className="hero-divider" aria-hidden />
    </>
  );
}

function YouTubeExplainer() {
  const textRef = useScrollReveal();
  const videoRef = useScrollReveal();
  return (
    <section className="bg-wood-950 py-20 px-6 lg:px-20">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div ref={textRef} className="lg:w-1/2 reveal">
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

        <div ref={videoRef} className="lg:w-1/2 w-full reveal reveal-delay-2">
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
    icon: Users,
    title: "Dedicated Partnership",
    desc: "You work directly with our team — no outsourcing, no runaround. When you reach out, a real person who knows your project responds.",
  },
];

function Services() {
  const headRef = useScrollReveal();
  return (
    <section className="bg-wood-950 py-20 px-6 lg:px-20">
      <div ref={headRef} className="reveal">
        <p className="text-orange uppercase tracking-[0.2em] text-sm font-semibold text-center">
          What We Offer
        </p>
        <h2 className="mt-2 text-white text-3xl lg:text-4xl font-bold text-center">
          We Handle Your Website So You Can Handle Business
        </h2>
        <p className="mt-4 text-wood-400 text-lg max-w-2xl mx-auto text-center">
          At DesignsbyASH, we handcraft superior websites for small business
          owners who demand performance, quality, and results.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(({ icon: Icon, title, desc }, i) => (
          <ServiceCard
            key={title}
            Icon={Icon}
            title={title}
            desc={desc}
            delay={(i % 3) + 1}
          />
        ))}
      </div>
    </section>
  );
}

function ServiceCard({
  Icon,
  title,
  desc,
  delay,
}: {
  Icon: LucideIcon;
  title: string;
  desc: string;
  delay: number;
}) {
  const ref = useScrollReveal();
  return (
    <article
      ref={ref}
      className={`reveal reveal-delay-${delay} bg-wood-900 border border-wood-800 rounded-xl p-6 hover:border-orange hover:-translate-y-2 hover:shadow-2xl transition-all duration-300`}
    >
      <div className="w-12 h-12 rounded-lg bg-orange/10 flex items-center justify-center">
        <Icon className="w-6 h-6 text-orange" />
      </div>
      <h3 className="mt-4 text-white font-bold text-lg">{title}</h3>
      <p className="mt-2 text-wood-400 text-sm leading-relaxed">{desc}</p>
    </article>
  );
}

function MeetTheTeam() {
  const photoRef = useScrollReveal();
  const textRef = useScrollReveal();
  return (
    <section className="bg-wood-50 py-20 px-6 lg:px-20">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div ref={photoRef} className="lg:w-2/5 w-full reveal">
          <div className="w-full max-w-sm aspect-[3/4] bg-wood-200 rounded-2xl flex items-center justify-center mx-auto">
            <span className="text-wood-400">Team Photo</span>
          </div>
          <p className="mt-4 text-center text-lg font-bold text-wood-950">
            Designsby<span className="text-orange">ASH</span>
          </p>
        </div>

        <div ref={textRef} className="lg:w-3/5 reveal reveal-delay-2">
          <p className="text-orange uppercase tracking-[0.2em] text-sm font-semibold">
            Meet the Team
          </p>
          <h2 className="mt-2 text-wood-950 text-3xl font-bold">
            The People Behind the Pixels
          </h2>
          <p className="mt-1 text-wood-500 text-lg">Design &amp; Development</p>
          <p className="mt-4 text-wood-600 leading-relaxed">
            We're a team of dedicated web designers and developers who
            specialize in hand-coded, lightning-fast websites for small
            businesses. Every project gets our full attention — your business
            deserves a website that works as hard as you do.
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
  { title: "Hosting Fees Included", desc: "One simple monthly payment covers everything." },
  { title: "24/7 Customer Service", desc: "Real people who know your business." },
  { title: "Unlimited Edits", desc: "Changes within 24 hours, no extra fees." },
  { title: "Custom Development & Design", desc: "40–50 hours crafting your perfect site." },
  { title: "Ongoing Maintenance", desc: "We track performance and optimize continuously." },
  { title: "Better Results", desc: "95+ Google speed scores mean more customers." },
];

const stats = [
  { value: "500K+", label: "Lines of Code Written" },
  { value: "100%", label: "Happy Customers" },
  { value: "5/5", label: "Google Reviews" },
];

function StatItem({ value, label }: { value: string; label: string }) {
  const { ref, display } = useCountUp<HTMLParagraphElement>(value);
  return (
    <div>
      <p ref={ref} className="text-4xl font-bold text-orange">
        {display}
      </p>
      <p className="text-wood-400 text-sm mt-1">{label}</p>
    </div>
  );
}

function FeatureItem({
  title,
  desc,
  delay,
}: {
  title: string;
  desc: string;
  delay: number;
}) {
  const ref = useScrollReveal();
  return (
    <div ref={ref} className={`reveal reveal-delay-${delay} flex`}>
      <div className="w-10 h-10 rounded-full bg-orange/10 text-orange flex items-center justify-center flex-shrink-0">
        <Check className="w-5 h-5" />
      </div>
      <div className="ml-4">
        <h3 className="text-white font-semibold">{title}</h3>
        <p className="text-wood-400 text-sm mt-1">{desc}</p>
      </div>
    </div>
  );
}

function FeaturesStats() {
  const headRef = useScrollReveal();
  const statsRef = useScrollReveal();
  return (
    <section className="bg-wood-950 py-20 px-6 lg:px-20">
      <div ref={headRef} className="reveal">
        <p className="text-orange uppercase tracking-[0.2em] text-sm font-semibold">
          What We Provide
        </p>
        <h2 className="mt-2 text-white text-3xl lg:text-4xl font-bold">
          Custom Website Design — $0 Down, $175 Per Month
        </h2>
        <p className="mt-4 max-w-2xl text-wood-400 text-lg">
          Launch a professional 5-page website with no upfront costs. No hidden
          fees. You own 100% of your domain and content. Cancel anytime after
          your initial term.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((f, i) => (
          <FeatureItem key={f.title} {...f} delay={(i % 3) + 1} />
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

      <div
        ref={statsRef}
        className="reveal mt-16 flex flex-col md:flex-row justify-center gap-8 md:gap-16 text-center"
      >
        {stats.map((s) => (
          <StatItem key={s.label} value={s.value} label={s.label} />
        ))}
      </div>
    </section>
  );
}

function PageSpeed() {
  const imgRef = useScrollReveal();
  const textRef = useScrollReveal();
  return (
    <section className="bg-wood-50 py-20 px-6 lg:px-20">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div ref={imgRef} className="lg:w-1/2 w-full reveal">
          <div className="w-full aspect-video bg-wood-200 rounded-xl border border-wood-200 flex items-center justify-center text-wood-400">
            Speed Test Screenshot
          </div>
        </div>
        <div ref={textRef} className="lg:w-1/2 reveal reveal-delay-2">
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

function VideoTestimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const headRef = useScrollReveal();

  const scrollByCard = (direction: 1 | -1) => {
    const el = scrollRef.current;
    if (!el) return;
    const first = el.firstElementChild as HTMLElement | null;
    const cardWidth = first?.offsetWidth ?? 350;
    el.scrollBy({ left: direction * (cardWidth + 24), behavior: "smooth" });
  };

  return (
    <section className="bg-wood-50 py-20 px-6 lg:px-20">
      <div ref={headRef} className="reveal text-center">
        <p className="text-orange uppercase tracking-[0.2em] text-sm font-semibold">
          Our Testimonials
        </p>
        <h2 className="mt-2 text-wood-950 text-3xl lg:text-4xl font-bold">
          See What Our Clients Have to Say
        </h2>
      </div>

      <div className="mt-12 relative">
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide pb-2"
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <article
              key={i}
              className="bg-white rounded-xl shadow-md p-5 snap-start flex-shrink-0 min-w-[85vw] md:min-w-[350px] hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-full aspect-video bg-wood-900 rounded-lg flex flex-col items-center justify-center">
                <PlayCircle className="w-12 h-12 text-wood-500" />
                <span className="mt-2 text-wood-500 text-xs">
                  Video testimonial coming soon
                </span>
              </div>
              <div className="mt-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="w-5 h-5 fill-amber text-amber" />
                ))}
              </div>
              <p className="mt-3 text-wood-600 italic text-sm">
                "Client video testimonial coming soon."
              </p>
              <p className="mt-3 text-wood-950 font-semibold text-sm">
                — Client Name, Business Name
              </p>
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

function MidScrollCTA() {
  const ref = useScrollReveal();
  return (
    <section className="bg-wood-950 py-20 px-6 lg:px-20">
      <div ref={ref} className="reveal max-w-2xl mx-auto text-center">
        <h2 className="text-white text-3xl lg:text-4xl font-bold">
          Convinced Yet?
        </h2>
        <p className="mt-4 text-wood-400 text-lg leading-relaxed">
          Why not hop on a call and hear it from us? No pressure, no pitch —
          just a conversation about what we can do for your business.
        </p>
        <Link
          to="/contact"
          className="mt-8 inline-block bg-orange text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-orange-hover hover:scale-105 transition-all duration-300"
        >
          Let's Talk
        </Link>
      </div>
    </section>
  );
}

function FinalCTA() {
  const ref = useScrollReveal();
  return (
    <section className="bg-wood-950 py-16 px-6 lg:px-20 text-center relative overflow-hidden">
      <div
        aria-hidden
        className="hidden lg:block absolute left-8 top-1/2 -translate-y-1/2 w-36 h-48 bg-wood-900 rounded-xl opacity-0"
      />
      <div
        aria-hidden
        className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 w-36 h-48 bg-wood-900 rounded-xl opacity-0"
      />
      <div ref={ref} className="reveal relative z-10">
        <p className="text-orange uppercase tracking-[0.2em] text-sm font-semibold">
          Reach Out Today
        </p>
        <h2 className="mt-3 text-white text-3xl lg:text-4xl font-bold">
          Let's Create the Website Your Business Deserves
        </h2>
        <Link
          to="/contact"
          className="mt-6 inline-block bg-orange text-white px-8 py-3.5 rounded-md font-semibold text-lg hover:bg-orange-hover hover:scale-105 transition-all"
        >
          Give Us a Call
        </Link>
      </div>
    </section>
  );
}

function Index() {
  return (
    <>
      <Hero />
      <YouTubeExplainer />
      <Services />
      <MeetTheTeam />
      <FeaturesStats />
      <PageSpeed />
      <PricingSection />
      <VideoTestimonials />
      <MidScrollCTA />
      <FinalCTA />
    </>
  );
}

{
  // Keep `Play` import referenced in case future use; silence unused
  void Play;
}
