import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { BottomCTA, PageHero } from "@/components/PageBits";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — DesignsbyASH" },
      {
        name: "description",
        content:
          "Get in touch with DesignsbyASH. We respond to every message within 24 hours.",
      },
    ],
  }),
  component: ContactPage,
});

const inputClass =
  "bg-white dark:bg-wood-800 border border-wood-200 dark:border-wood-700 rounded-md px-4 py-3 w-full text-wood-950 dark:text-white placeholder:text-wood-400 dark:placeholder:text-wood-500 focus:border-orange focus:ring-1 focus:ring-orange outline-none transition-colors duration-200";

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-wood-950 dark:text-white font-semibold text-sm mb-1">
        {label}
      </span>
      {children}
    </label>
  );
}

function ContactPage() {
  const formRef = useScrollReveal<HTMLDivElement>();
  const infoRef = useScrollReveal<HTMLDivElement>();
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Talk About Your Project"
        description="Reach out and we'll get back to you within 24 hours."
      />

      <section className="bg-wood-50 dark:bg-wood-900 py-20 px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto">
          <div ref={formRef} className="reveal lg:w-1/2">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-4"
            >
              <Field label="Name">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className={inputClass}
                />
              </Field>
              <Field label="Email">
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className={inputClass}
                />
              </Field>
              <Field label="Phone">
                <input
                  type="tel"
                  name="phone"
                  placeholder="(XXX) XXX-XXXX"
                  className={inputClass}
                />
              </Field>
              <Field label="Message">
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell us about your project..."
                  className={inputClass}
                />
              </Field>
              <button
                type="submit"
                className="bg-orange text-white w-full py-3 rounded-md font-semibold mt-2 transition-all duration-300 hover:bg-orange-hover hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]"
              >
                Send Message
              </button>
            </form>
          </div>

          <div ref={infoRef} className="reveal reveal-delay-1 lg:w-1/2">
            <h3 className="text-wood-950 dark:text-white font-bold text-xl">Book a Call</h3>
            <p className="text-wood-600 dark:text-wood-300 mt-2">
              Calendly integration coming soon.
            </p>
            <div className="mt-4 w-full h-64 bg-wood-100 dark:bg-wood-800 rounded-xl border-2 border-dashed border-wood-300 dark:border-wood-600 flex items-center justify-center text-wood-400">
              Calendly Embed Placeholder
            </div>

            <h3 className="mt-8 text-wood-950 dark:text-white font-bold text-xl">
              Contact Info
            </h3>
            <ul className="mt-4 flex flex-col gap-3 text-wood-600 dark:text-wood-300">
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-orange flex-shrink-0" />
                <span>M–F 8am – 5:00pm</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-orange flex-shrink-0" />
                <a href="tel:+14379852163" className="hover:text-orange transition-colors">(437)-985-2163</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-orange flex-shrink-0" />
                <a href="mailto:designsbyash0@gmail.com" className="hover:text-orange transition-colors">designsbyash0@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-orange flex-shrink-0" />
                <span>Edmonton, AB</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <BottomCTA />
    </>
  );
}
