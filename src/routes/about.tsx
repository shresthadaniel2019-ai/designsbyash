import { createFileRoute } from "@tanstack/react-router";
import { Check, Mail, MapPin, Phone, type LucideIcon } from "lucide-react";
import { BottomCTA, PageHero } from "@/components/PageBits";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — DesignsbyASH" },
      {
        name: "description",
        content:
          "Meet the team behind DesignsbyASH — a hand-coded web design team building fast, custom websites for businesses that demand quality.",
      },
    ],
  }),
  component: AboutPage,
});

const values = [
  "100% Hand-Coded",
  "Performance Obsessed",
  "Client-First Always",
];

const steps = [
  {
    n: "01",
    title: "Book a Free Consultation",
    body: "There's no harm in reaching out. Let's chat and see if we're a good fit.",
  },
  {
    n: "02",
    title: "Develop the Vision",
    body: "We collaborate to identify the styles, colors, and layouts that represent your brand.",
  },
  {
    n: "03",
    title: "Deploy Your Site",
    body: "We refine the design to your preferences. Nothing is off limits until you're completely satisfied.",
  },
];

const contacts: { icon: LucideIcon; label: string; value: string; href: string }[] = [
  { icon: Phone, label: "Phone", value: "(437)-985-2163", href: "tel:+14379852163" },
  { icon: Mail, label: "Email", value: "designsbyash0@gmail.com", href: "mailto:designsbyash0@gmail.com" },
  { icon: MapPin, label: "Location", value: "Edmonton, AB", href: "#" },
];

function OurStory() {
  const imgRef = useScrollReveal<HTMLDivElement>();
  const textRef = useScrollReveal<HTMLDivElement>();
  return (
    <section className="bg-wood-50 dark:bg-wood-900 py-20 px-6 lg:px-20">
      <div className="flex flex-col lg:flex-row gap-12 items-center max-w-7xl mx-auto">
        <div ref={imgRef} className="reveal lg:w-1/2 w-full">
          <div className="w-full max-w-md aspect-square bg-wood-200 dark:bg-wood-800 rounded-2xl flex items-center justify-center mx-auto">
            <span className="text-wood-400">Team Photo</span>
          </div>
        </div>
        <div ref={textRef} className="reveal reveal-delay-1 lg:w-1/2">
          <h2 className="text-wood-950 dark:text-white text-3xl font-bold">
            Hand-Coded Websites That Deliver Results
          </h2>
          <p className="mt-4 text-wood-600 dark:text-wood-300 leading-relaxed">
            DesignsbyASH was founded on a straightforward belief: small business owners shouldn't have to settle for cookie-cutter websites or blow their budget on a big agency. Every business has a story worth telling properly — and that starts with a website built from the ground up.
          </p>
          <p className="mt-4 text-wood-600 dark:text-wood-300 leading-relaxed">
            We saw too many business owners wrestling with clunky page builders, paying for sites that loaded slowly and looked like everyone else's. So we took a different approach — hand-written code, custom design, and a process built around actually listening to what our clients need.
          </p>
          <p className="mt-4 text-wood-600 dark:text-wood-300 leading-relaxed">
            Today we partner with businesses across industries, designing and developing custom sites that load fast, rank well, and turn visitors into customers. Every project gets the same attention to detail, from your first conversation to the day we hit publish.
          </p>
          <ul className="mt-6 flex flex-col gap-3">
            {values.map((v) => (
              <li key={v} className="flex items-center gap-3">
                <Check className="w-5 h-5 text-orange flex-shrink-0" />
                <span className="text-wood-950 dark:text-white font-semibold">{v}</span>
              </li>
            ))}
          </ul>
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
      className={`reveal reveal-delay-${delay} bg-wood-900 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl`}
    >
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-orange text-white font-bold text-lg">
        {n}
      </div>
      <h3 className="mt-5 text-white text-xl font-bold">{title}</h3>
      <p className="mt-3 text-wood-400 leading-relaxed">{body}</p>
    </div>
  );
}

function OurProcess() {
  const headRef = useScrollReveal<HTMLDivElement>();
  return (
    <section className="bg-wood-950 py-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div ref={headRef} className="reveal text-center">
          <h2 className="text-white text-3xl lg:text-4xl font-bold">
            Simple, Customized & Beautiful
          </h2>
          <p className="mt-4 text-wood-400 text-lg max-w-2xl mx-auto">
            Every business is different. We recognize this and work directly with our clients.
          </p>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <StepCard key={s.n} n={s.n} title={s.title} body={s.body} delay={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  icon: Icon,
  label,
  value,
  href,
  delay,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string;
  delay: number;
}) {
  const ref = useScrollReveal<HTMLAnchorElement>();
  return (
    <a
      ref={ref}
      href={href}
      className={`reveal reveal-delay-${delay} bg-white dark:bg-wood-800 rounded-xl shadow-md p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl block`}
    >
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange/10 text-orange mb-4">
        <Icon className="w-6 h-6" />
      </div>
      <p className="text-wood-500 dark:text-wood-400 text-sm uppercase tracking-wider">{label}</p>
      <p className="mt-2 text-wood-950 dark:text-white font-semibold">{value}</p>
    </a>
  );
}

function ContactSection() {
  const headRef = useScrollReveal<HTMLDivElement>();
  return (
    <section className="bg-wood-50 dark:bg-wood-900 py-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div ref={headRef} className="reveal text-center">
          <h2 className="text-wood-950 dark:text-white text-3xl lg:text-4xl font-bold">
            Get in Touch
          </h2>
          <p className="mt-4 text-wood-600 dark:text-wood-300 text-lg max-w-2xl mx-auto">
            We're a team of passionate designers and developers ready to bring your vision to life.
          </p>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {contacts.map((c, i) => (
            <ContactCard key={c.label} {...c} delay={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Meet the Team Behind DesignsbyASH"
        description="A dedicated web design team building hand-coded websites for businesses that demand quality, speed, and results."
      />
      <OurStory />
      <OurProcess />
      <ContactSection />
      <BottomCTA />
    </>
  );
}
