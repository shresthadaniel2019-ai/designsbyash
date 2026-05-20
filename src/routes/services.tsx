import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Monitor, Search, type LucideIcon } from "lucide-react";
import { BottomCTA, PageHero } from "@/components/PageBits";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — DesignsbyASH" },
      {
        name: "description",
        content:
          "Custom website development, SEO, and Google Business Profile management for small businesses.",
      },
    ],
  }),
  component: ServicesPage,
});

type Service = {
  to: "/web-design-service" | "/google-business-profile" | "/seo-services";
  icon: LucideIcon;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    to: "/web-design-service",
    icon: Monitor,
    title: "Custom Web Design",
    description:
      "Hand-coded websites engineered for speed, security, and conversions. No templates, no page builders — just clean code built around your business.",
  },
  {
    to: "/google-business-profile",
    icon: MapPin,
    title: "Google Business Profile Management",
    description:
      "Complete profile management including weekly posts, review automation, and local SEO optimization to help customers find you on Google.",
  },
  {
    to: "/seo-services",
    icon: Search,
    title: "SEO Services",
    description:
      "Search optimization built for small businesses. Local SEO, content strategy, and technical foundations that drive real organic growth.",
  },
];

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const ref = useScrollReveal<HTMLAnchorElement>();
  const Icon = service.icon;
  const reverse = index % 2 === 1;
  return (
    <Link
      ref={ref}
      to={service.to}
      className={`reveal reveal-delay-${(index % 3) + 1} group block bg-white dark:bg-wood-800 rounded-xl shadow-md p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
    >
      <div
        className={`flex flex-col gap-8 items-center ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"}`}
      >
        <div className="lg:w-1/2 w-full">
          <div className="w-full aspect-video bg-wood-200 dark:bg-wood-700 rounded-xl flex items-center justify-center text-wood-400 text-sm">
            Service Image
          </div>
        </div>
        <div className="lg:w-1/2">
          <Icon className="w-8 h-8 text-orange" />
          <h2 className="mt-4 text-wood-950 dark:text-white text-2xl font-bold">
            {service.title}
          </h2>
          <p className="mt-3 text-wood-600 dark:text-wood-300 leading-relaxed">
            {service.description}
          </p>
          <span className="mt-4 inline-block text-orange font-semibold group-hover:text-amber transition-colors">
            Learn More →
          </span>
        </div>
      </div>
    </Link>
  );
}

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Everything Your Business Needs Online"
        description="From custom web design to SEO and Google Business Profile management — we handle it all so you can focus on what matters."
      />

      <section className="bg-wood-50 dark:bg-wood-900 py-20 px-6 lg:px-20">
        <div className="flex flex-col gap-8 max-w-6xl mx-auto">
          {services.map((s, i) => (
            <ServiceCard key={s.to} service={s} index={i} />
          ))}
        </div>
      </section>

      <BottomCTA />
    </>
  );
}
