import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Check,
  ChevronDown,
  Code,
  FileText,
  MapPin,
  type LucideIcon,
} from "lucide-react";
import { BottomCTA, PageHero } from "@/components/PageBits";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const Route = createFileRoute("/seo-services")({
  head: () => ({
    meta: [
      { title: "SEO Services — DesignsbyASH" },
      {
        name: "description",
        content:
          "Small business SEO services that get you found on Google. Local SEO, content optimization, and technical SEO.",
      },
    ],
  }),
  component: SEOPage,
});

const pillars: { icon: LucideIcon; title: string; bullets: string[] }[] = [
  {
    icon: MapPin,
    title: "Local SEO",
    bullets: [
      "Google Business Profile optimization",
      "Local keyword research and targeting",
      "Citation building across directories",
      "Review generation strategy",
      "NAP consistency audits",
      "Location-based content optimization",
    ],
  },
  {
    icon: FileText,
    title: "Content & On-Page SEO",
    bullets: [
      "Monthly blog posts on high-value keywords",
      "Service pages built for conversions",
      "Keyword research and strategy",
      "Title and meta description optimization",
      "Internal linking strategy",
    ],
  },
  {
    icon: Code,
    title: "Technical SEO",
    bullets: [
      "Site speed optimization (95–100 PageSpeed)",
      "Mobile-first indexing alignment",
      "Schema markup implementation",
      "XML sitemap creation and submission",
      "Core Web Vitals monitoring",
      "HTTPS and site health checks",
    ],
  },
];

const standardFeatures = [
  "1–2 SEO Blog Posts Monthly",
  "Keyword Research & Strategy",
  "On-Page SEO Optimization",
  "Title & Meta Description Optimization",
  "Internal Linking Strategy",
  "Monthly Performance Reports",
  "Keyword Rank Tracking",
  "Quarterly Strategy Reviews",
];

const faqs = [
  { q: "How long does SEO take to show results?", a: "SEO is a long-term play. Most businesses see meaningful improvements within 3–6 months, with results compounding over time. Unlike paid ads, the organic traffic you build keeps working for you without ongoing ad spend." },
  { q: "Do I need a new website for SEO to work?", a: "Not necessarily — we can optimize existing sites. That said, if your current site is slow or built on a bloated platform, our hand-coded websites provide a much stronger technical foundation for SEO success." },
  { q: "What's the difference between local SEO and regular SEO?", a: "Local SEO targets searches with geographic intent — like 'plumber near me' or 'best restaurant in Edmonton.' It emphasizes Google Business Profile optimization, local citations, and location-based keywords. Regular SEO focuses on broader visibility regardless of location." },
  { q: "Do you offer link building?", a: "We focus on local SEO, technical SEO, and content optimization rather than link building. Quality link building typically costs $5,000–$25,000+ per month — well outside most small business budgets. For local businesses, strong technical SEO, great content, and local citations consistently deliver excellent results without expensive link campaigns." },
  { q: "Do you work with businesses outside Edmonton?", a: "Absolutely. While we're based in Edmonton, we work with small businesses everywhere. Our websites and SEO services are available regardless of your location." },
];

const steps = [
  { n: "01", title: "SEO Audit & Strategy", body: "We analyze your current search presence, study your competitors, and build a customized roadmap tailored to your goals and budget." },
  { n: "02", title: "Content & Optimization", body: "Our team creates targeted content, optimizes your pages, and implements the technical improvements needed to climb the rankings." },
  { n: "03", title: "Monitor & Grow", body: "We track your rankings, deliver monthly reports, and continuously refine your strategy so results keep improving over time." },
];

function Approach() {
  const ref = useScrollReveal<HTMLDivElement>();
  return (
    <section className="bg-wood-50 dark:bg-wood-900 py-20 px-6 lg:px-20">
      <div ref={ref} className="reveal max-w-3xl mx-auto">
        <h2 className="text-wood-950 dark:text-white text-3xl lg:text-4xl font-bold text-center">
          An SEO Strategy Built for Small Business
        </h2>
        <p className="mt-6 text-wood-600 dark:text-wood-300 leading-relaxed">
          Most SEO agencies sell enterprise-level packages to small business owners who don't need them. We focus exclusively on what actually drives results for businesses like yours — technical precision, local authority, and content that earns rankings.
        </p>
        <p className="mt-4 text-wood-600 dark:text-wood-300 leading-relaxed">
          Because our websites are hand-coded from the ground up, every site we build already includes the technical SEO foundation that most companies charge extra for. You're not starting from zero — you're building on a platform that search engines already respect. Sites that score 95–100 on PageSpeed, load in under a second, and deliver clean semantic HTML give your SEO a head start from day one.
        </p>
      </div>
    </section>
  );
}

function PillarCard({ icon: Icon, title, bullets, delay }: { icon: LucideIcon; title: string; bullets: string[]; delay: number }) {
  const ref = useScrollReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal reveal-delay-${delay} bg-wood-900 border border-wood-800 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-orange`}
    >
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange/10 text-orange">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="mt-4 text-white text-xl font-bold">{title}</h3>
      <ul className="mt-4 flex flex-col gap-2">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-2 text-wood-400">
            <Check className="w-4 h-4 text-orange flex-shrink-0 mt-1" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Pillars() {
  const headRef = useScrollReveal<HTMLDivElement>();
  return (
    <section className="bg-wood-950 py-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div ref={headRef} className="reveal text-center">
          <h2 className="text-white text-3xl lg:text-4xl font-bold">
            What Our SEO Services Cover
          </h2>
          <p className="mt-4 text-wood-400 text-lg max-w-2xl mx-auto">
            Three pillars that work together to grow your organic presence.
          </p>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <PillarCard key={p.title} {...p} delay={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PriceCard({
  title,
  price,
  features,
  extras,
  note,
  cta,
  recommended,
  delay,
}: {
  title: string;
  price: string;
  features: string[];
  extras?: string[];
  note?: string;
  cta: string;
  recommended?: boolean;
  delay: number;
}) {
  const ref = useScrollReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal reveal-delay-${delay} relative bg-wood-900 border rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-orange ${
        recommended ? "border-orange" : "border-wood-800"
      }`}
    >
      {recommended && (
        <span className="absolute -top-3 right-6 bg-orange text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full animate-[badge-pulse_2s_ease-in-out_infinite]">
          Recommended
        </span>
      )}
      <h3 className="text-white text-2xl font-bold">{title}</h3>
      <p className="mt-2 text-white">
        <span className="text-4xl font-bold">{price}</span>
        <span className="text-wood-400"> /month</span>
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        {[...features, ...(extras ?? [])].map((f) => (
          <li key={f} className="flex items-start gap-2 text-wood-300">
            <Check className="w-5 h-5 text-orange flex-shrink-0 mt-0.5" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      {note && <p className="mt-5 text-sm text-orange font-semibold">{note}</p>}
      <Link
        to="/contact"
        className="mt-8 block text-center bg-orange text-white px-6 py-3 rounded-md font-semibold transition-all duration-300 hover:bg-orange-hover hover:scale-[1.02]"
      >
        {cta}
      </Link>
    </div>
  );
}

function Pricing() {
  const headRef = useScrollReveal<HTMLDivElement>();
  return (
    <section className="bg-wood-50 dark:bg-wood-900 py-20 px-6 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <div ref={headRef} className="reveal text-center">
          <h2 className="text-wood-950 dark:text-white text-3xl lg:text-4xl font-bold">
            Transparent SEO Pricing
          </h2>
          <p className="mt-4 text-wood-600 dark:text-wood-300 text-lg max-w-2xl mx-auto">
            Professional SEO services priced for real small business budgets.
          </p>
        </div>
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <PriceCard
            title="Content & On-Page SEO"
            price="$750"
            features={standardFeatures}
            cta="Get Started Today"
            delay={1}
          />
          <PriceCard
            title="Website Client Discount"
            price="$350"
            features={standardFeatures}
            extras={["Priority Support & Integration"]}
            note="Exclusive to DesignsbyASH website clients — Save $400/month"
            cta="Add to Website Plan"
            recommended
            delay={2}
          />
        </div>
      </div>
    </section>
  );
}

function FAQItem({ q, a, delay }: { q: string; a: string; delay: number }) {
  const [open, setOpen] = useState(false);
  const ref = useScrollReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal reveal-delay-${Math.min(delay, 5)} border-b border-wood-800`}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between text-left py-5 gap-4"
        aria-expanded={open}
      >
        <span className="font-semibold text-wood-50">{q}</span>
        <ChevronDown
          className={`w-5 h-5 flex-shrink-0 text-wood-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden">
          <p
            className={`pb-5 pr-8 text-wood-400 leading-relaxed transition-opacity duration-200 ${open ? "opacity-100 delay-100" : "opacity-0"}`}
          >
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}

function FAQ() {
  const headRef = useScrollReveal<HTMLDivElement>();
  return (
    <section className="bg-wood-950 py-20 px-6 lg:px-20">
      <div className="max-w-3xl mx-auto">
        <div ref={headRef} className="reveal text-center">
          <h2 className="text-white text-3xl lg:text-4xl font-bold">
            Common SEO Questions
          </h2>
        </div>
        <div className="mt-12">
          {faqs.map((f, i) => (
            <FAQItem key={f.q} {...f} delay={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StepCard({ n, title, body, delay }: { n: string; title: string; body: string; delay: number }) {
  const ref = useScrollReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal reveal-delay-${delay} bg-white dark:bg-wood-800 rounded-xl shadow-md p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl`}
    >
      <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-orange text-white font-bold">
        {n}
      </div>
      <h3 className="mt-4 text-wood-950 dark:text-white text-xl font-bold">{title}</h3>
      <p className="mt-3 text-wood-600 dark:text-wood-300 leading-relaxed">{body}</p>
    </div>
  );
}

function Process() {
  const headRef = useScrollReveal<HTMLDivElement>();
  return (
    <section className="bg-wood-50 dark:bg-wood-900 py-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div ref={headRef} className="reveal text-center">
          <h2 className="text-wood-950 dark:text-white text-3xl lg:text-4xl font-bold">
            Start Growing Your Business in 3 Steps
          </h2>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <StepCard key={s.n} {...s} delay={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SEOPage() {
  return (
    <>
      <PageHero
        eyebrow="SEO Services"
        title="Small Business SEO That Actually Moves the Needle"
        description="We provide SEO services built for small businesses — not bloated enterprise strategies. Technical excellence, local visibility, and measurable results."
      />
      <Approach />
      <Pillars />
      <Pricing />
      <FAQ />
      <Process />
      <BottomCTA />
    </>
  );
}
