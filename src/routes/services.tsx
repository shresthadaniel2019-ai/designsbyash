import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — DesignsbyASH" },
      { name: "description", content: "Web design services from DesignsbyASH." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <h1 className="text-wood-950 py-32 text-center text-4xl font-bold">
      Services — Coming Soon
    </h1>
  );
}
