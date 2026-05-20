import { useEffect, useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import { BottomCTA, PageHero } from "@/components/PageBits";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — DesignsbyASH" },
      {
        name: "description",
        content:
          "Answers to common questions about our web design services, pricing, and process.",
      },
    ],
  }),
  component: FAQPage,
});

type QA = { q: string; a: string };
type TabKey = "finances" | "packages" | "websites";

const TABS: { key: TabKey; label: string }[] = [
  { key: "finances", label: "Finances & Payments" },
  { key: "packages", label: "Package Details" },
  { key: "websites", label: "Websites" },
];

const DATA: Record<TabKey, QA[]> = {
  finances: [
    { q: "What's the minimum subscription commitment?", a: "Our subscription plans start with a 12-month minimum. After that initial period, your plan continues month-to-month and you're free to cancel at any time without penalty." },
    { q: "What if I want to return after cancelling?", a: "You'd simply sign a new 12-month agreement to restart your subscription." },
    { q: "What happens if I cancel before the 12-month minimum?", a: "Early cancellation means you'd owe the remaining balance of the standard project cost ($3,800) minus whatever you've already paid. We structure our pricing around long-term partnerships, and this policy reflects that commitment." },
    { q: "How are late payments handled?", a: "Invoices unpaid after 7 days incur a $25 late fee. If subscription payments go overdue for multiple months without communication, we reserve the right to end the agreement, with the full project cost becoming due. That said, we're flexible — just keep us in the loop if something comes up." },
    { q: "What payment methods do you accept?", a: "We send invoices through Square, which provides a secure payment link. Subscriptions are billed to a credit or debit card (all major cards accepted). Lump sum projects use ACH bank transfer to minimize processing fees. We do not accept money orders or checks." },
    { q: "Is the $100 per additional page a recurring charge?", a: "No — it's strictly a one-time fee. If you need two extra pages beyond your plan, that's $200 total, not $200 per month." },
    { q: "What's your refund policy?", a: "Refunds are available during the design phase. If we can't arrive at a design you're fully satisfied with and you'd rather not move forward, we'll refund what you've paid to that point. Once development begins, refunds are handled at our discretion." },
    { q: "After 12 months, do payments continue?", a: "Yes — subscriptions are ongoing after the minimum period. We price subscriptions this way because it typically takes several years to earn the equivalent of a lump-sum project. By that point, your website will be generating significantly more value than the monthly fee, and you'll continue receiving hosting, edits, and support as part of the package." },
    { q: "Can I buy out my subscription after the minimum?", a: "We don't currently offer a buyout option. Our business model is built around long-term client relationships — the recurring revenue allows us to focus on delivering great service to existing clients rather than constantly chasing new ones." },
    { q: "Can I add unlimited edits to a lump sum plan?", a: "Yes — we offer a $50/month add-on for unlimited edits and support, with its own 12-month minimum. Once ended, restarting requires a new 12-month commitment." },
    { q: "What's the real difference between subscription and lump sum?", a: "Cash flow and long-term cost. Subscriptions mean smaller monthly payments but cost more over time. Lump sum requires a bigger upfront investment but saves money in the long run. If you prefer ongoing managed service with predictable monthly costs, go subscription. If you'd rather pay once and handle things more independently, lump sum is the way to go." },
  ],
  packages: [
    { q: "Is SEO included in your packages?", a: "Partially. Every site we build includes foundational on-page SEO — optimized load speed, proper meta tags, accessible markup, Google Search Console integration, XML sitemaps, and content structured for search engines. For a comprehensive SEO strategy including off-page optimization, content campaigns, and backlink development, we offer separate dedicated SEO packages." },
    { q: "Do you build e-commerce sites on the subscription plan?", a: "Not under the standard subscription. E-commerce requires significantly more development and ongoing maintenance than a typical business site. If you need an online store, reach out directly and we'll scope a custom solution for your needs." },
    { q: "If I cancel my subscription, do I keep my domain?", a: "Always. Your domain belongs to you regardless of which plan you're on." },
  ],
  websites: [
    { q: "What's the typical timeline for a website project?", a: "Most websites are completed in 2–4 weeks from kickoff. The exact timeframe depends on how quickly you provide content and images, and our current project load. In some cases we can deliver in as little as two weeks." },
    { q: "Do I keep the website if I end my subscription?", a: "The website itself stays with us — that's how the subscription model works. However, you retain full ownership of your domain name and any content or images you've provided." },
    { q: "Do I own my domain name?", a: "Absolutely. Even if we purchased the domain on your behalf, we'll transfer it to you if you decide to part ways. We never hold domains hostage." },
    { q: "Do you use WordPress or page builders?", a: "Never. Every website is hand-coded from scratch — no templates, no themes, no bloated page builders. This approach delivers faster load times, stronger security, and far greater customization than any off-the-shelf platform." },
    { q: "What advantages does custom code have over WordPress?", a: "Better security (no databases to hack, no plugins to exploit), faster performance, lower maintenance overhead, greater design flexibility, and zero dependency on third-party updates. Our sites are inherently more secure because there simply aren't the attack vectors that WordPress sites constantly need to patch against." },
    { q: "What if something happens to your team? Are there safeguards?", a: "Yes. We have trusted colleagues who understand our development approach and are ready to step in if needed. Your site will always have someone available to keep things running." },
    { q: "How do I request changes to my website?", a: "Send an email to designsbyash0@gmail.com or call (437)-985-2163. Your request gets logged in our tracking system and handled from submission through completion — most updates ship within 24 hours." },
  ],
};

function FAQItem({
  q,
  a,
  isOpen,
  onToggle,
  delay,
}: {
  q: string;
  a: string;
  isOpen: boolean;
  onToggle: () => void;
  delay: number;
}) {
  const ref = useScrollReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal reveal-delay-${Math.min(delay, 5)} border-b border-wood-200 dark:border-wood-700`}
    >
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left py-5 gap-4"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-wood-950 dark:text-white">{q}</span>
        <ChevronDown
          className={`w-5 h-5 flex-shrink-0 text-wood-500 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p
            className={`pb-5 pr-8 text-wood-600 dark:text-wood-300 leading-relaxed transition-opacity duration-200 ${
              isOpen ? "opacity-100 delay-100" : "opacity-0"
            }`}
          >
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}

function FAQPage() {
  const [tab, setTab] = useState<TabKey>("finances");
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [pill, setPill] = useState<{ left: number; width: number }>({ left: 0, width: 0 });
  const [contentVisible, setContentVisible] = useState(true);
  const tabRefs = useRef<Record<TabKey, HTMLButtonElement | null>>({
    finances: null,
    packages: null,
    websites: null,
  });

  useEffect(() => {
    const update = () => {
      const el = tabRefs.current[tab];
      if (el) setPill({ left: el.offsetLeft, width: el.offsetWidth });
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [tab]);

  useEffect(() => {
    setContentVisible(false);
    const t = window.setTimeout(() => setContentVisible(true), 50);
    return () => window.clearTimeout(t);
  }, [tab]);

  const handleTab = (next: TabKey) => {
    if (next === tab) return;
    setTab(next);
    setOpenIdx(null);
  };

  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        description="Web development can feel like a mystery. We've compiled answers to the questions we hear most. If yours isn't here, reach out — we're always happy to chat."
      />
      <section className="bg-wood-50 dark:bg-wood-900 py-20 px-6 lg:px-20">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center mb-10">
            <div className="relative inline-flex bg-wood-200 dark:bg-wood-800 rounded-full p-1">
              <span
                aria-hidden
                className="absolute top-1 bottom-1 bg-orange rounded-full"
                style={{
                  left: pill.left,
                  width: pill.width,
                  transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              />
              {TABS.map((t) => (
                <button
                  key={t.key}
                  ref={(el) => {
                    tabRefs.current[t.key] = el;
                  }}
                  type="button"
                  onClick={() => handleTab(t.key)}
                  className={`relative z-10 px-4 sm:px-6 py-2 rounded-full text-sm font-semibold transition-colors duration-300 ${
                    tab === t.key
                      ? "text-white"
                      : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          <div
            key={tab}
            className="flex flex-col transition-opacity duration-200"
            style={{ opacity: contentVisible ? 1 : 0 }}
          >
            {DATA[tab].map((item, i) => (
              <FAQItem
                key={item.q}
                q={item.q}
                a={item.a}
                isOpen={openIdx === i}
                onToggle={() => setOpenIdx(openIdx === i ? null : i)}
                delay={i + 1}
              />
            ))}
          </div>
        </div>
      </section>
      <BottomCTA />
    </>
  );
}
