import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import { PageHero } from "@/components/PageBits";
import { PricingSection } from "@/components/PricingSection";

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
    a: "Hosting, unlimited edits, 24/7 support, and ongoing maintenance — all in one payment.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. No contracts, no cancellation fees. Ever.",
  },
  {
    q: "How long does a website take?",
    a: "Most sites are completed within 2–3 weeks.",
  },
  {
    q: "Do I own my website?",
    a: "Yes. You own 100% of your domain and all content.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-wood-200 py-4">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex justify-between items-center text-left text-wood-950 font-semibold cursor-pointer"
        aria-expanded={open}
      >
        <span>{q}</span>
        <ChevronDown
          className={`w-5 h-5 text-wood-600 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && <p className="text-wood-600 text-sm mt-2">{a}</p>}
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

      <section className="bg-wood-50 py-16 px-6 lg:px-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-wood-950 text-2xl font-bold mb-8">
            Common Questions
          </h2>
          {faqs.map((f) => (
            <FAQItem key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
      </section>
    </>
  );
}
