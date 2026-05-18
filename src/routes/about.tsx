import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — DesignsbyASH" },
      { name: "description", content: "About DesignsbyASH, a Canadian web design agency." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <h1 className="text-wood-950 py-32 text-center text-4xl font-bold">
      About — Coming Soon
    </h1>
  );
}
