import { Link } from "@tanstack/react-router";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="bg-wood-950 py-20 px-6 lg:px-20 text-center">
      <p className="text-orange uppercase tracking-[0.2em] text-sm font-semibold">
        {eyebrow}
      </p>
      <h1 className="mt-3 text-white text-4xl font-bold">{title}</h1>
      <p className="mt-4 text-wood-400 text-lg max-w-2xl mx-auto">
        {description}
      </p>
    </section>
  );
}

export function BottomCTA() {
  return (
    <section className="bg-wood-950 py-12 text-center px-6">
      <h2 className="text-white text-2xl font-bold">Ready to Work Together?</h2>
      <Link
        to="/contact"
        className="inline-block mt-4 bg-orange text-white px-6 py-3 rounded-md font-semibold hover:bg-orange-hover transition"
      >
        Get in Touch
      </Link>
    </section>
  );
}
