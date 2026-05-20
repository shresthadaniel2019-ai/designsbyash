import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Check,
  CheckCircle,
  Eye,
  FileText,
  MessageSquare,
  Settings,
  Star,
  type LucideIcon,
} from "lucide-react";
import { BottomCTA, PageHero } from "@/components/PageBits";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const Route = createFileRoute("/google-business-profile")({
  head: () => ({
    meta: [
      { title: "Google Business Profile Management — DesignsbyASH" },
      {
        name: "description",
        content:
          "Professional Google Business Profile management that drives real results. Weekly posts, review management, and local SEO optimization.",
      },
    ],
  }),
  component: GBPPage,
});

const whyBlocks: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Eye,
    title: "Greater Local Visibility",
    body: "A professionally managed profile dramatically increases your chances of appearing in Google Maps and local search results. When nearby customers search for what you offer, we make sure your business shows up.",
  },
  {
    icon: MessageSquare,
    title: "More Engagement and Reviews",
    body: "Active profiles attract more phone calls, website visits, and foot traffic. Our management includes automated review generation and professional responses that show customers you care.",
  },
  {
    icon: CheckCircle,
    title: "Consistent Professional Presence",
    body: "Keeping your profile accurate and active takes consistent effort. We monitor for unauthorized changes, post fresh content weekly, and keep your business information up to date at all times.",
  },
];

const pillars: { icon: LucideIcon; title: string; bullets: string[] }[] = [
  {
    icon: Settings,
    title: "Profile Optimization & Setup",
    bullets: [
      "Complete business info optimization",
      "Professional description writing",
      "Category selection and optimization",
      "Hours, service area, and photo setup",
      "Verification assistance",
    ],
  },
  {
    icon: FileText,
    title: "Weekly Content & Posting",
    bullets: [
      "Weekly Google Posts with updates",
      "Service highlights and offers",
      "Community engagement content",
      "Seasonal and timely posts",
      "Copywriting in your brand voice",
    ],
  },
  {
    icon: Star,
    title: "Review Management & Automation",
    bullets: [
      "Automated review request systems",
      "Professional responses to all feedback",
      "Reputation monitoring",
      "Negative review mitigation",
      "Review generation campaigns",
    ],
  },
];

const standardFeatures = [
  "Complete Profile Optimization",
  "Weekly Google Posts",
  "Professional Review Responses",
  "Review Generation Automation",
  "Monthly Performance Reports",
  "Customer Q&A Management",
  "Photo & Image Management",
  "Local SEO Integration",
];

const steps = [
  {
    n: "01",
    title: "Profile Audit & Optimization",
    body: "We review your current profile and optimize every element for maximum visibility and customer engagement.",
  },
  {
    n: "02",
    title: "Weekly Posts & Content",
    body: "Fresh weekly content keeps your profile active, signaling to Google and customers that your business is thriving.",
  },
  {
    n: "03",
    title: "Review Management & Growth",
    body: "Automated review systems generate more positive reviews while professional responses demonstrate you value feedback.",
  },
];

function WhyBlock({ icon: Icon, title, body, delay }: { icon: LucideIcon; title: string; body: string; delay: number }) {
  const ref = useScrollReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={`reveal reveal-delay-${delay} flex gap-5`}>
      <div className="flex-shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange/10 text-orange">
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <h3 className="text-wood-950 dark:text-white text-xl font-bold">{title}</h3>
        <p className="mt-2 text-wood-600 dark:text-wood-300 leading-relaxed">{body}</p>
      </div>
    </div>
  );
}

function WhyMatters() {
  const headRef = useScrollReveal<HTMLDivElement>();
  return (
    <section className="bg-wood-50 dark:bg-wood-900 py-20 px-6 lg:px-20">
      <div className="max-w-4xl mx-auto">
        <div ref={headRef} className="reveal text-center">
          <h2 className="text-wood-950 dark:text-white text-3xl lg:text-4xl font-bold">
            Why Your Google Business Profile Matters
          </h2>
          <p className="mt-4 text-wood-600 dark:text-wood-300 text-lg">
            For many potential customers, your Google Business Profile is their very first impression of your business.
          </p>
        </div>
        <div className="mt-12 flex flex-col gap-10">
          {whyBlocks.map((b, i) => (
            <WhyBlock key={b.title} {...b} delay={i + 1} />
          ))}
        </div>
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

function Included() {
  const headRef = useScrollReveal<HTMLDivElement>();
  return (
    <section className="bg-wood-950 py-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div ref={headRef} className="reveal text-center">
          <h2 className="text-white text-3xl lg:text-4xl font-bold">
            Complete Google Business Profile Management
          </h2>
          <p className="mt-4 text-wood-400 text-lg max-w-2xl mx-auto">
            We handle every aspect of your profile so you never have to think about it.
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
      {note && (
        <p className="mt-5 text-sm text-orange font-semibold">{note}</p>
      )}
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
            Straightforward Pricing for Real Results
          </h2>
          <p className="mt-4 text-wood-600 dark:text-wood-300 text-lg max-w-2xl mx-auto">
            Comprehensive Google Business Profile management designed to be affordable while delivering professional-level results.
          </p>
        </div>
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <PriceCard
            title="Google Business Profile"
            price="$295"
            features={standardFeatures}
            cta="Get Started Today"
            delay={1}
          />
          <PriceCard
            title="Website Client Discount"
            price="$150"
            features={standardFeatures}
            extras={["Priority Support & Integration"]}
            note="Exclusive to DesignsbyASH website clients — Save $145/month"
            cta="Add to Website Plan"
            recommended
            delay={2}
          />
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
      className={`reveal reveal-delay-${delay} bg-wood-900 border border-wood-800 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:border-orange`}
    >
      <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-orange text-white font-bold">
        {n}
      </div>
      <h3 className="mt-4 text-white text-xl font-bold">{title}</h3>
      <p className="mt-3 text-wood-400 leading-relaxed">{body}</p>
    </div>
  );
}

function Process() {
  const headRef = useScrollReveal<HTMLDivElement>();
  return (
    <section className="bg-wood-950 py-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div ref={headRef} className="reveal text-center">
          <h2 className="text-white text-3xl lg:text-4xl font-bold">
            Get Started in 3 Steps
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

function GBPPage() {
  return (
    <>
      <PageHero
        eyebrow="Google Business Profile"
        title="Professional Google Business Profile Management"
        description="We handle everything from weekly posts and review management to local SEO optimization — so you can focus on running your business while more customers find you online."
      />
      <WhyMatters />
      <Included />
      <Pricing />
      <Process />
      <BottomCTA />
    </>
  );
}
