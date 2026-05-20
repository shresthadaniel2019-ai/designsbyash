import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { BottomCTA, PageHero } from "@/components/PageBits";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — DesignsbyASH" },
      {
        name: "description",
        content:
          "Meet DesignsbyASH — a hand-coded web design team based in Edmonton, Alberta.",
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

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="The Team Behind DesignsbyASH"
        description="A passionate web design team based in Edmonton, Alberta, building hand-coded websites for businesses across Canada."
      />

      <section className="bg-wood-50 dark:bg-wood-900 py-16 px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2 w-full">
            <div className="w-full max-w-md aspect-square bg-wood-200 dark:bg-wood-800 rounded-2xl flex items-center justify-center mx-auto">
              <span className="text-wood-400">Team Photo</span>
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-wood-950 dark:text-white text-2xl font-bold">Our Story</h2>
            <p className="mt-4 text-wood-600 dark:text-wood-300 leading-relaxed">
              DesignsbyASH started with a simple idea: small business owners
              deserve websites that work as hard as they do. No bloated page
              builders, no expensive agency retainers — just clean,
              hand-written code crafted with care.
            </p>
            <p className="mt-4 text-wood-600 dark:text-wood-300 leading-relaxed">
              Today we partner with businesses across Canada and beyond,
              designing and developing custom sites that load fast, rank well,
              and turn visitors into customers. Every project gets the same
              attention to detail, from your first conversation to the day we
              hit publish.
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

      <BottomCTA />
    </>
  );
}
