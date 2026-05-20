import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

type SubItem = { to: string; label: string };
type NavItem =
  | { kind: "link"; to: string; label: string }
  | { kind: "menu"; label: string; items: SubItem[] };

const NAV: NavItem[] = [
  { kind: "link", to: "/", label: "Home" },
  {
    kind: "menu",
    label: "About",
    items: [
      { to: "/about", label: "Meet the Team" },
      { to: "/faq", label: "FAQ" },
      { to: "/reviews", label: "Reviews" },
    ],
  },
  {
    kind: "menu",
    label: "Services",
    items: [
      { to: "/web-design-service", label: "Web Design" },
      { to: "/google-business-profile", label: "Google Business Profile" },
      { to: "/seo-services", label: "SEO Services" },
    ],
  },
  { kind: "link", to: "/pricing", label: "Pricing" },
  { kind: "link", to: "/contact", label: "Contact" },
];

function Logo() {
  return (
    <span className="text-lg font-bold text-white whitespace-nowrap">
      Designsby<span className="text-orange">ASH</span>
    </span>
  );
}

function QuoteButton({ onClick, className = "" }: { onClick?: () => void; className?: string }) {
  return (
    <Link
      to="/contact"
      onClick={onClick}
      className={`relative overflow-hidden bg-orange text-white px-5 py-2 rounded-md font-semibold group inline-block ${className}`}
    >
      <span className="absolute inset-0 bg-orange-hover transform scale-x-0 origin-left transition-transform duration-[400ms] ease-out group-hover:scale-x-100" />
      <span className="relative z-10">Get a Quote</span>
    </Link>
  );
}

function DesktopDropdown({ label, items }: { label: string; items: SubItem[] }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className="flex items-center gap-1 text-sm font-medium text-zinc-300 hover:text-white transition-colors"
      >
        {label}
        <ChevronDown
          className={`w-3 h-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`absolute left-1/2 -translate-x-1/2 top-full pt-2 ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className={`bg-zinc-900/90 backdrop-blur-xl rounded-xl border border-white/10 shadow-xl p-2 min-w-[220px] transition-all duration-200 ease-out ${
            open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
          }`}
        >
          {items.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="block rounded-lg px-4 py-2.5 text-sm text-zinc-300 hover:text-white hover:bg-white/10 transition-colors duration-200 whitespace-nowrap"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [expanded, setExpanded] = useState<string | null>(null);
  return (
    <div
      className={`fixed inset-0 z-[60] md:hidden transition-opacity duration-300 ${
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <aside
        className={`absolute inset-y-0 right-0 w-full bg-zinc-900/95 backdrop-blur-xl px-6 py-6 flex flex-col transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between h-14">
          <Logo />
          <button type="button" onClick={onClose} className="text-white" aria-label="Close menu">
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="flex flex-col gap-2 mt-8 flex-1">
          {NAV.map((item) => {
            if (item.kind === "link") {
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  activeOptions={{ exact: item.to === "/" }}
                  activeProps={{ className: "text-orange" }}
                  onClick={onClose}
                  className="text-zinc-200 hover:text-orange transition text-lg font-medium py-2"
                >
                  {item.label}
                </Link>
              );
            }
            const isOpen = expanded === item.label;
            return (
              <div key={item.label}>
                <button
                  type="button"
                  onClick={() => setExpanded(isOpen ? null : item.label)}
                  className="w-full flex items-center justify-between text-zinc-200 hover:text-orange transition text-lg font-medium py-2"
                >
                  {item.label}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pl-4 flex flex-col gap-2 py-1">
                      {item.items.map((sub) => (
                        <Link
                          key={sub.to}
                          to={sub.to}
                          onClick={onClose}
                          className="text-zinc-400 hover:text-white transition text-base py-1.5"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </nav>
        <div className="mt-6">
          <QuoteButton onClick={onClose} className="w-full text-center" />
        </div>
      </aside>
    </div>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 h-14 px-4 md:px-6 flex items-center gap-4 md:gap-6 rounded-full bg-zinc-900/85 backdrop-blur-xl border border-white/10 transition-shadow duration-300 ${
          scrolled ? "shadow-xl shadow-black/40" : "shadow-lg shadow-black/20"
        }`}
      >
        <Link to="/" className="flex items-center">
          <Logo />
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {NAV.map((item) =>
            item.kind === "link" ? (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-orange" }}
                className="text-sm font-medium text-zinc-300 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <DesktopDropdown key={item.label} label={item.label} items={item.items} />
            )
          )}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <ThemeToggle />
          <QuoteButton />
        </div>

        <div className="md:hidden flex items-center gap-2 ml-auto">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="text-white"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
