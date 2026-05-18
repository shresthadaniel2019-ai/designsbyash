import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — DesignsbyASH" },
      { name: "description", content: "Pricing for DesignsbyASH web design packages." },
    ],
  }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <h1 className="text-wood-950 py-32 text-center text-4xl font-bold">
      Pricing — Coming Soon
    </h1>
  );
}
