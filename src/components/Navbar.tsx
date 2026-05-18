import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/pricing", label: "Pricing" },
  { to: "/contact", label: "Contact" },
] as const;

function Logo() {
  return (
    <span className="text-xl font-bold text-white">
      Designsby<span className="text-orange">ASH</span>
    </span>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-wood-950 w-full h-20 px-6 lg:px-20 flex items-center justify-between transition-shadow ${
        scrolled ? "shadow-lg" : ""
      }`}
    >
      <Link to="/" className="flex items-center">
        <Logo />
      </Link>

      <nav className="hidden md:flex items-center gap-8">
        {links.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            activeOptions={{ exact: l.to === "/" }}
            activeProps={{ className: "text-orange" }}
            className="text-wood-300 hover:text-orange transition text-sm font-medium"
          >
            {l.label}
          </Link>
        ))}
      </nav>

      <div className="hidden md:block">
        <Link
          to="/contact"
          className="bg-orange text-white px-5 py-2.5 rounded-md font-semibold hover:bg-orange-hover transition"
        >
          Get a Quote
        </Link>
      </div>

      <button
        type="button"
        onClick={() => setOpen(true)}
        className="md:hidden text-white"
        aria-label="Open menu"
      >
        <Menu className="h-6 w-6" />
      </button>

      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setOpen(false)}
          />
          <aside className="absolute inset-y-0 right-0 w-full bg-wood-950 px-6 py-6 flex flex-col">
            <div className="flex items-center justify-between h-20 -mt-6">
              <Logo />
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="text-white"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="flex flex-col gap-6 mt-8">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  activeOptions={{ exact: l.to === "/" }}
                  activeProps={{ className: "text-orange" }}
                  onClick={() => setOpen(false)}
                  className="text-wood-300 hover:text-orange transition text-lg font-medium"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="bg-orange text-white px-5 py-2.5 rounded-md font-semibold hover:bg-orange-hover transition text-center mt-4"
              >
                Get a Quote
              </Link>
            </nav>
          </aside>
        </div>
      )}
    </header>
  );
}
