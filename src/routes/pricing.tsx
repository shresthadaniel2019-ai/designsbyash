import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import { BottomCTA, PageHero } from "@/components/PageBits";
import { PricingSection } from "@/components/PricingSection";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — DesignsbyASH" },
      {
        name: "description",
        content:
          "Simple, transparent pricing for hand-coded websites. Subscription or lump sum — your choice.",
      },
    ],
  }),
  component: PricingPage,
});

const faqs = [
  {
    q: "What's included in the monthly price?",
    a: "Hosting, unlimited edits, 24/7 support, and ongoing maintenance — all in one simple payment.",
  },
  {
    q: "Is there a minimum commitment?",
    a: "Subscription plans start with a 12-month minimum. After that, it continues month-to-month and you can cancel anytime.",
  },
  {
    q: "How long does a website take?",
    a: "Most sites are completed within 2–4 weeks, depending on content delivery and project scope.",
  },
  {
    q: "Do I own my domain and content?",
    a: "Yes. You own 100% of your domain and all content, no matter which plan you choose.",
  },
  {
    q: "What's the difference between subscription and lump sum?",
    a: "Subscription means smaller monthly payments with ongoing service included. Lump sum is a larger one-time investment that saves money long-term. Choose based on your cash flow and whether you want ongoing managed support.",
  },
];

function FAQItem({ q, a, delay }: { q: string; a: string; delay: number }) {
  const [open, setOpen] = useState(false);
  const ref = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`reveal reveal-delay-${delay} border-b border-wood-200 dark:border-wood-700 py-4`}
    >
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex justify-between items-center text-left text-wood-950 dark:text-white font-semibold cursor-pointer"
        aria-expanded={open}
      >
        <span>{q}</span>
        <ChevronDown
          className={`w-5 h-5 text-wood-600 dark:text-wood-400 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p
            className={`text-wood-600 dark:text-wood-300 text-sm pt-2 transition-opacity duration-200 delay-100 ${
              open ? "opacity-100" : "opacity-0"
            }`}
          >
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}

function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Simple, Transparent Pricing"
        description="No hidden fees. No surprises. Just honest pricing for honest work."
      />

      <PricingSection />

      <section className="bg-wood-50 dark:bg-wood-900 py-16 px-6 lg:px-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-wood-950 dark:text-white text-2xl font-bold mb-8">
            Common Questions
          </h2>
          {faqs.map((f, i) => (
            <FAQItem key={f.q} q={f.q} a={f.a} delay={(i % 5) + 1} />
          ))}
          <a
            href="/faq"
            className="mt-8 inline-block text-orange font-semibold hover:underline"
          >
            Have more questions? Visit our full FAQ page →
          </a>
        </div>
      </section>

      <BottomCTA />
    </>
  );
}
