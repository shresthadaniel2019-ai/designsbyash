import { useState, type ComponentType } from "react";
import { Link } from "@tanstack/react-router";
import { Check, Rocket, X, Zap } from "lucide-react";

type FeatureKind = "orange" | "amber" | "x";
type Feature = { kind: FeatureKind; text: string };
type IconType = ComponentType<{ className?: string }>;
type Card = {
  title: string;
  price: string;
  priceSuffix: string;
  features: Feature[];
  cta: string;
  icon: IconType;
  recommended?: boolean;
};

const subStarter: Card = {
  title: "Small Business – Starter",
  price: "$175",
  priceSuffix: " /month",
  cta: "Start Building Today",
  icon: Zap,
  features: [
    { kind: "orange", text: "40+ Hours of Design & Development" },
    { kind: "orange", text: "Includes Hosting" },
    { kind: "orange", text: "Up to 5 Pages" },
    { kind: "orange", text: "Unlimited Edits" },
    { kind: "orange", text: "24/7 Support" },
    { kind: "orange", text: "$100/page after 5" },
    { kind: "orange", text: "Page Speed Guarantee" },
  ],
};

const subGrowth: Card = {
  title: "Small Business – Growth",
  price: "$275",
  priceSuffix: " /month",
  cta: "Start Growing Today",
  recommended: true,
  icon: Rocket,
  features: [
    { kind: "orange", text: "40+ Hours of Design & Development" },
    { kind: "orange", text: "Includes Hosting" },
    { kind: "orange", text: "Up to 10 Pages" },
    { kind: "orange", text: "Includes an Editable Blog" },
    { kind: "orange", text: "Unlimited Edits" },
    { kind: "orange", text: "Local SEO Service Pages" },
    { kind: "orange", text: "24/7 Support" },
    { kind: "orange", text: "Page Speed Guarantee" },
  ],
};

const lumpStarter: Card = {
  title: "Small Business – Starter",
  price: "$3,800",
  priceSuffix: " Lump Sum",
  cta: "Start Building Today",
  icon: Zap,
  features: [
    { kind: "orange", text: "Design & Development" },
    { kind: "orange", text: "$10/mo Hosting" },
    { kind: "orange", text: "Up to 5 Pages" },
    { kind: "orange", text: "$100/page after 5" },
    { kind: "amber", text: "+$50/mo Unlimited Edits" },
    { kind: "x", text: "24/7 Support" },
    { kind: "x", text: "Lifetime Updates" },
  ],
};

const lumpGrowth: Card = {
  title: "Small Business – Growth",
  price: "$5,000",
  priceSuffix: " Lump Sum",
  cta: "Start Growing Today",
  recommended: true,
  icon: Rocket,
  features: [
    { kind: "orange", text: "Design & Development" },
    { kind: "orange", text: "$10/mo Hosting" },
    { kind: "orange", text: "Up to 10 Pages" },
    { kind: "orange", text: "$100/page after 10" },
    { kind: "orange", text: "Includes an Editable Blog" },
    { kind: "amber", text: "+$75/mo Unlimited Edits" },
    { kind: "x", text: "24/7 Support" },
    { kind: "x", text: "Lifetime Updates" },
  ],
};

function FeatureIcon({ kind }: { kind: FeatureKind }) {
  if (kind === "x") return <X className="w-5 h-5 text-wood-600 flex-shrink-0 mt-0.5" />;
  const color = kind === "amber" ? "text-amber" : "text-orange";
  return <Check className={`w-5 h-5 ${color} flex-shrink-0 mt-0.5`} />;
}

function PricingCard({ card }: { card: Card }) {
  const Icon = card.icon;
  return (
    <div
      className={`relative bg-wood-900 border rounded-2xl p-8 w-full max-w-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-orange ${
        card.recommended ? "border-orange" : "border-wood-800"
      }`}
    >
      {card.recommended && (
        <span className="absolute -top-3 right-6 bg-orange text-white text-xs uppercase font-bold px-3 py-1 rounded-full animate-[badge-pulse_2s_ease-in-out_infinite]">
          Recommended
        </span>
      )}
      <Icon className="w-8 h-8 text-orange" />
      <h3 className="text-white font-bold text-xl mt-4">{card.title}</h3>
      <div className="mt-2">
        <span className="text-4xl font-bold text-white">{card.price}</span>
        <span className="text-wood-400 text-lg">{card.priceSuffix}</span>
      </div>
      <ul className="mt-6 flex flex-col gap-3">
        {card.features.map((f, i) => (
          <li key={i} className="flex items-start gap-2">
            <FeatureIcon kind={f.kind} />
            <span className="text-wood-300 text-sm">{f.text}</span>
          </li>
        ))}
      </ul>
      <Link
        to="/contact"
        className="mt-8 block bg-orange text-white w-full py-3 rounded-md font-semibold hover:bg-orange-hover transition text-center"
      >
        {card.cta}
      </Link>
    </div>
  );
}

export function PricingSection() {
  const [mode, setMode] = useState<"subscription" | "lump">("subscription");
  const cards =
    mode === "subscription" ? [subStarter, subGrowth] : [lumpStarter, lumpGrowth];

  return (
    <section className="bg-wood-950 py-20 px-6 lg:px-20">
      <p className="text-orange uppercase tracking-[0.2em] text-sm font-semibold text-center">
        Website Design Pricing
      </p>
      <h2 className="mt-2 text-white text-3xl lg:text-4xl font-bold text-center">
        Fair Prices. Beautiful Websites.
      </h2>
      <p className="mt-4 text-wood-400 text-lg max-w-2xl mx-auto text-center">
        Straightforward pricing, honest work. Great websites don't need
        expensive price tags — they just need to perform for your business.
      </p>

      <div className="mt-8 flex justify-center">
        <div className="relative bg-wood-800 rounded-full p-1 inline-flex w-[280px]">
          <span
            aria-hidden
            className="absolute top-1 bottom-1 left-1 rounded-full bg-orange transition-transform duration-300 ease-out"
            style={{
              width: "calc(50% - 0.25rem)",
              transform:
                mode === "lump" ? "translateX(100%)" : "translateX(0)",
            }}
          />
          <button
            type="button"
            onClick={() => setMode("subscription")}
            className={`relative z-10 flex-1 rounded-full py-2 font-semibold transition-colors ${
              mode === "subscription" ? "text-white" : "text-wood-400"
            }`}
          >
            Subscription
          </button>
          <button
            type="button"
            onClick={() => setMode("lump")}
            className={`relative z-10 flex-1 rounded-full py-2 font-semibold transition-colors ${
              mode === "lump" ? "text-white" : "text-wood-400"
            }`}
          >
            Lump Sum
          </button>
        </div>
      </div>

      <div
        key={mode}
        className="mt-10 flex flex-col lg:flex-row gap-8 justify-center max-w-4xl mx-auto animate-fade-in"
      >
        {cards.map((card) => (
          <PricingCard key={card.title + card.priceSuffix} card={card} />
        ))}
      </div>
    </section>
  );
}
