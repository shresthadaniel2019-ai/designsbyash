import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Check,
  Search,
  Shield,
  TrendingUp,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { BottomCTA, PageHero } from "@/components/PageBits";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const Route = createFileRoute("/web-design-service")({
  head: () => ({
    meta: [
      { title: "Web Design Service — DesignsbyASH" },
      {
        name: "description",
        content:
          "Professional web design company creating hand-coded websites that load in under 1 second. Custom development delivered in 2-4 weeks starting at $175/month.",
      },
    ],
  }),
  component: WebDesignPage,
});

const benefits: { icon: LucideIcon; title: string; bullets: string[] }[] = [
  {
    icon: Zap,
    title: "Blazing-Fast Performance",
    bullets: [
      "Google PageSpeed scores of 95–100",
      "Sub-second load times across devices",
      "Optimized Core Web Vitals scores",
      "Flawless responsive experience on mobile",
    ],
  },
  {
    icon: Search,
    title: "Built-In Search Advantage",
    bullets: [
      "Clean semantic HTML that search engines prefer",
      "Page speed as a confirmed Google ranking factor",
      "Mobile-first design aligned with Google's indexing",
      "Logical content hierarchy and heading structure",
    ],
  },
  {
    icon: Shield,
    title: "Rock-Solid Security",
    bullets: [
      "No databases or server-side attack vectors",
      "Zero reliance on third-party plugins",
      "Minimal surface area for threats",
      "Lower hosting overhead and costs",
    ],
  },
  {
    icon: TrendingUp,
    title: "Stronger Marketing ROI",
    bullets: [
      "Lower cost-per-click on ad platforms",
      "Higher Google Ads Quality Scores",
      "Improved conversion rates from fast pages",
      "Better overall return on ad spend",
    ],
  },
];

const steps = [
  {
    n: "01",
    title: "Consultation & Planning",
    body: "We start by understanding your goals, your audience, and what success looks like for your business. A quick conversation and a simple questionnaire get the ball rolling.",
  },
  {
    n: "02",
    title: "Design & Development",
    body: "Our team designs a custom layout that reflects your brand, then hand-codes every page for maximum speed, security, and usability.",
  },
  {
    n: "03",
    title: "Testing & Launch",
    body: "We test across every device and browser, run a final performance audit, and launch your site with ongoing support from day one.",
  },
];

const pricingPoints = [
  "$0 down payment to get started",
  "$175/month includes hosting, support, and unlimited edits",
  "No hidden charges or add-on fees",
  "Flexible terms that work for your business",
];

function Intro() {
  const imgRef = useScrollReveal<HTMLDivElement>();
  const textRef = useScrollReveal<HTMLDivElement>();
  return (
    <section className="bg-wood-50 dark:bg-wood-900 py-20 px-6 lg:px-20">
      <div className="flex flex-col lg:flex-row gap-12 items-center max-w-7xl mx-auto">
        <div ref={imgRef} className="reveal lg:w-1/2 w-full">
          <div className="w-full aspect-[4/3] bg-wood-200 dark:bg-wood-700 rounded-xl flex items-center justify-center text-wood-400">
            Service Image
          </div>
        </div>
        <div ref={textRef} className="reveal reveal-delay-1 lg:w-1/2">
          <h2 className="text-wood-950 dark:text-white text-3xl font-bold">
            Our Approach to Web Design
          </h2>
          <p className="mt-4 text-wood-600 dark:text-wood-300 leading-relaxed">
            We've built our entire practice around hand-coded development because it produces websites that outperform everything else on the market. No drag-and-drop editors, no theme libraries — every line of code is written with purpose.
          </p>
          <p className="mt-4 text-wood-600 dark:text-wood-300 leading-relaxed">
            Most projects wrap up in 2–4 weeks, and the end result is a site that loads instantly, looks polished on every screen, and gives search engines exactly what they want to see.
          </p>
        </div>
      </div>
    </section>
  );
}

function BenefitCard({ icon: Icon, title, bullets, delay }: { icon: LucideIcon; title: string; bullets: string[]; delay: number }) {
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

function Benefits() {
  const headRef = useScrollReveal<HTMLDivElement>();
  return (
    <section className="bg-wood-950 py-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div ref={headRef} className="reveal text-center">
          <h2 className="text-white text-3xl lg:text-4xl font-bold">
            Why Hand-Coded Websites Win
          </h2>
          <p className="mt-4 text-wood-400 text-lg max-w-2xl mx-auto">
            Every decision we make in development is driven by performance, security, and results.
          </p>
        </div>
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {benefits.map((b, i) => (
            <BenefitCard key={b.title} {...b} delay={(i % 4) + 1} />
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
            Your Website in 3 Simple Steps
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

function PricingPreview() {
  const ref = useScrollReveal<HTMLDivElement>();
  return (
    <section className="bg-wood-950 py-20 px-6 lg:px-20">
      <div ref={ref} className="reveal max-w-3xl mx-auto text-center">
        <h2 className="text-white text-3xl lg:text-4xl font-bold">
          Transparent, No-Surprise Pricing
        </h2>
        <ul className="mt-8 grid sm:grid-cols-2 gap-3 text-left">
          {pricingPoints.map((p) => (
            <li key={p} className="flex items-start gap-3 text-wood-300">
              <Check className="w-5 h-5 text-orange flex-shrink-0 mt-1" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
        <Link
          to="/contact"
          className="mt-10 inline-block bg-orange text-white px-8 py-4 rounded-md text-lg font-semibold transition-all duration-300 hover:scale-[1.02] hover:bg-orange-hover hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]"
        >
          Get Your Free Quote
        </Link>
      </div>
    </section>
  );
}

function WebDesignPage() {
  return (
    <>
      <PageHero
        eyebrow="Web Design"
        title="Hand-Coded Websites Built for Performance"
        description="We build custom websites from scratch — no templates, no page builders. Just clean code engineered to load fast, rank well, and convert visitors into customers."
      />
      <Intro />
      <Benefits />
      <Process />
      <PricingPreview />
      <BottomCTA />
    </>
  );
}
