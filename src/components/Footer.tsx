import { Link } from "@tanstack/react-router";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/pricing", label: "Pricing" },
  { to: "/contact", label: "Contact" },
] as const;

export function Footer() {
  return (
    <footer className="bg-wood-950 pt-16 pb-8 px-6 lg:px-20">
      <div className="h-32 bg-wood-900 rounded-md mb-12 flex items-center justify-center">
        <span className="text-wood-600 text-sm italic">
          Treeline Silhouette Image
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <span className="text-xl font-bold text-white">
            Designsby<span className="text-orange">ASH</span>
          </span>
          <p className="text-wood-400 text-sm mt-3">
            Hand-Coded Websites for Canadian Businesses
          </p>
        </div>

        <div>
          <h3 className="text-wood-50 font-semibold mb-4">Quick Links</h3>
          <div className="flex flex-col gap-2 text-sm">
            {quickLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-wood-400 hover:text-orange transition"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-wood-50 font-semibold mb-4">Contact</h3>
          <div className="flex flex-col gap-2 text-sm text-wood-400">
            <span>M–F 9am – 5pm MST</span>
            <span>(XXX) XXX-XXXX</span>
            <span>hello@designsbyash.com</span>
            <span>Edmonton, AB, Canada</span>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-wood-800 flex flex-col sm:flex-row justify-between gap-2">
        <span className="text-wood-500 text-sm">© 2025 DesignsbyASH</span>
        <span className="text-wood-500 text-sm">
          Privacy Policy | Terms of Service
        </span>
      </div>
    </footer>
  );
}
