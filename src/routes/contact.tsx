import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — DesignsbyASH" },
      { name: "description", content: "Get in touch with DesignsbyASH for a quote." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <h1 className="text-wood-950 py-32 text-center text-4xl font-bold">
      Contact — Coming Soon
    </h1>
  );
}
