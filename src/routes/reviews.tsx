import { createFileRoute } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { BottomCTA, PageHero } from "@/components/PageBits";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews — DesignsbyASH" },
      {
        name: "description",
        content:
          "Read what our clients have to say about working with DesignsbyASH.",
      },
    ],
  }),
  component: ReviewsPage,
});

type Review = {
  initials: string;
  name: string;
  role: string;
  quote: string;
};

const REVIEWS: Review[] = [
  { initials: "JM", name: "James M.", role: "Owner, Northside Coffee", quote: "The team at DesignsbyASH went above and beyond. Our new website loads in under a second and we've seen a noticeable increase in inquiries since launch." },
  { initials: "SR", name: "Sarah R.", role: "Owner, Bloom Studio", quote: "Professional, responsive, and incredibly talented. They took our vision and turned it into something better than we imagined." },
  { initials: "KP", name: "Kevin P.", role: "Owner, Pinepoint Realty", quote: "We switched from WordPress and the difference is night and day. Faster, cleaner, and we don't have to worry about plugin updates anymore." },
  { initials: "AL", name: "Anna L.", role: "Owner, Atelier Linen", quote: "From start to finish, the process was seamless. They kept us in the loop at every stage and delivered ahead of schedule. Highly recommend." },
  { initials: "TB", name: "Tom B.", role: "Owner, Brickyard Auto", quote: "Our old site was costing us customers. Since switching to DesignsbyASH, our bounce rate dropped and conversions are up significantly." },
  { initials: "MW", name: "Maria W.", role: "Owner, Westwood Bakery", quote: "Incredible work. Fast, beautiful, and it actually ranks on Google." },
  { initials: "RC", name: "Ryan C.", role: "Owner, Cascade Fitness", quote: "I was skeptical about the subscription model at first, but it's honestly the best decision we made. Unlimited edits, no surprise bills, and a website that genuinely performs. The team is always responsive and they truly understand small business needs." },
  { initials: "DP", name: "Diana P.", role: "Owner, Petal & Stem", quote: "Clean design, lightning-fast load times, and outstanding support. Everything we were looking for." },
  { initials: "NF", name: "Nick F.", role: "Owner, Forge Consulting", quote: "They don't just build websites — they build tools that drive business. Our site has become our top source of new leads and the ongoing support means we never have to worry about it falling behind." },
];

function ReviewCard({ review, delay }: { review: Review; delay: number }) {
  const ref = useScrollReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal reveal-delay-${Math.min(delay, 3)} break-inside-avoid mb-6 bg-white dark:bg-wood-800 rounded-xl shadow-md p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
    >
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-wood-200 dark:bg-wood-700 flex items-center justify-center font-bold text-wood-700 dark:text-wood-200">
          {review.initials}
        </div>
        <div>
          <p className="text-wood-950 dark:text-white font-bold">{review.name}</p>
          <p className="text-wood-500 dark:text-wood-400 text-sm">{review.role}</p>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <div className="flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber text-amber" />
          ))}
        </div>
        <span className="text-wood-500 dark:text-wood-400 text-sm font-semibold">5.0</span>
      </div>
      <p className="mt-4 italic text-wood-600 dark:text-wood-300 leading-relaxed">
        "{review.quote}"
      </p>
    </div>
  );
}

function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Client Reviews"
        title="Trusted Web Designer for Businesses Everywhere"
        description="We've helped small business owners build the websites they've always wanted. Here's what they have to say."
      />
      <section className="bg-wood-50 dark:bg-wood-900 py-20 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto columns-1 md:columns-2 lg:columns-3 gap-6">
          {REVIEWS.map((r, i) => (
            <ReviewCard key={r.initials} review={r} delay={(i % 3) + 1} />
          ))}
        </div>
      </section>
      <BottomCTA />
    </>
  );
}
