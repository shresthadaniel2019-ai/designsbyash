import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DesignsbyASH — Hand-Coded Websites for Canadian Businesses" },
      {
        name: "description",
        content:
          "Hand-coded, custom websites for Canadian small businesses. Built in Edmonton, AB.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <section className="flex items-center justify-center py-32 px-6">
      <p className="text-wood-950 text-lg">Home — sections coming soon</p>
    </section>
  );
}
