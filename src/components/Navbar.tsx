import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "古商道", href: "#trade-route" },
  { label: "水井", href: "#well" },
  { label: "骆驼队", href: "#camel-caravan" },
  { label: "防风民居", href: "#dwelling" },
  { label: "文物画廊", href: "#relic-gallery" },
  { label: "旅行指南", href: "#travel-guide" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-sand-800/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        <a
          href="#"
          className={`font-display text-xl md:text-2xl font-bold transition-colors ${
            scrolled ? "text-sand-50" : "text-sand-50"
          }`}
        >
          沙漠驿站
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sand-100/80 hover:text-sand-50 font-body text-sm transition-colors duration-300 hover:tracking-wider"
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          className="md:hidden text-sand-50"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="菜单"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-sand-800/95 backdrop-blur-md border-t border-sand-600/30 animate-fade-in">
          <div className="flex flex-col py-4 px-6 gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-sand-100/80 hover:text-sand-50 font-body text-base transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
