import { createFileRoute } from "@tanstack/react-router";
import { PricingSection } from "@/components/PricingSection";

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
  return <PricingSection />;
}
