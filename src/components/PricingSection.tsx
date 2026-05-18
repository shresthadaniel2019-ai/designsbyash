import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Check, Rocket, X } from "lucide-react";

type FeatureKind = "orange" | "amber" | "x";
type Feature = { kind: FeatureKind; text: string };
type Card = {
  title: string;
  price: string;
  priceSuffix: string;
  features: Feature[];
  cta: string;
  recommended?: boolean;
};

const subStarter: Card = {
  title: "Small Business – Starter",
  price: "$175",
  priceSuffix: " /month",
  cta: "Start Building Today",
  features: [
    { kind: "orange", text: "40+ Hours of Design & Development" },
    { kind: "orange", text: "Includes Hosting" },
    { kind: "orange", text: "Up to 5 Pages" },
    { kind: "orange", text: "+$250 To Add A Blog" },
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
  features: [
    { kind: "orange", text: "Design & Development" },
    { kind: "orange", text: "$10/mo Hosting" },
    { kind: "orange", text: "Up to 5 Pages" },
    { kind: "orange", text: "$100/page after 5" },
    { kind: "orange", text: "+$250 To Add A Blog" },
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
  features: [
    { kind: "orange", text: "Design & Development" },
    { kind: "orange", text: "$10/mo Hosting" },
    { kind: "orange", text: "Up to 10 Pages" },
    { kind: "orange", text: "$100/page after 10" },
    { kind: "orange", text: "+$250 To Add A Blog" },
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
  return (
    <div
      className={`relative bg-wood-900 border rounded-2xl p-8 w-full max-w-md ${
        card.recommended ? "border-orange" : "border-wood-800"
      }`}
    >
      {card.recommended && (
        <span className="absolute -top-3 right-6 bg-orange text-white text-xs uppercase font-bold px-3 py-1 rounded-full">
          Recommended
        </span>
      )}
      <Rocket className="w-8 h-8 text-orange" />
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

  const tabClass = (active: boolean) =>
    `rounded-full px-6 py-2 font-semibold transition ${
      active
        ? "bg-orange text-white"
        : "bg-transparent text-wood-400 hover:text-wood-200"
    }`;

  return (
    <section className="bg-wood-950 py-20 px-6 lg:px-20">
      <p className="text-orange uppercase tracking-[0.2em] text-sm font-semibold text-center">
        Canadian Website Design
      </p>
      <h2 className="mt-2 text-white text-3xl lg:text-4xl font-bold text-center">
        Fair Prices. Beautiful Websites.
      </h2>
      <p className="mt-4 text-wood-400 text-lg max-w-2xl mx-auto text-center">
        Straightforward pricing, honest work. Good websites don't need expensive
        price tags.
      </p>

      <div className="mt-8 flex justify-center">
        <div className="bg-wood-800 rounded-full p-1 inline-flex">
          <button
            type="button"
            onClick={() => setMode("subscription")}
            className={tabClass(mode === "subscription")}
          >
            Subscription
          </button>
          <button
            type="button"
            onClick={() => setMode("lump")}
            className={tabClass(mode === "lump")}
          >
            Lump Sum
          </button>
        </div>
      </div>

      <div className="mt-10 flex flex-col lg:flex-row gap-8 justify-center max-w-4xl mx-auto">
        {cards.map((card) => (
          <PricingCard key={card.title + card.priceSuffix} card={card} />
        ))}
      </div>
    </section>
  );
}
