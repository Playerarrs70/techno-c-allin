import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, Wrench, Zap } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#masalah", label: "Masalah" },
    { href: "#cara-kerja", label: "Cara Kerja" },
    { href: "#fitur", label: "Fitur" },
    { href: "#keunggulan", label: "Keunggulan" },
    { href: "#bisnis", label: "Model Bisnis" },
  ];

  const isLanding = location.pathname === "/";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isLanding
          ? "bg-[#0F172A]/95 backdrop-blur-md shadow-2xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#FF5722] to-[#FF8A50] flex items-center justify-center shadow-lg shadow-orange-500/30 group-hover:scale-105 transition-transform">
              <Wrench className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col leading-none">
              <span
                className="text-white font-heading"
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "18px" }}
              >
                Call<span className="text-[#FF5722]">Bengkel</span>
              </span>
              <span className="text-[10px] text-white/40 tracking-wider uppercase" style={{ fontFamily: "Inter, sans-serif" }}>
                Emergency Auto Service
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          {isLanding && (
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-white/70 hover:text-white text-sm transition-colors rounded-lg hover:bg-white/5"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}

          {/* CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/prototype"
              className="px-4 py-2 text-sm text-white/80 hover:text-white border border-white/20 hover:border-white/40 rounded-xl transition-all"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Lihat Prototype
            </Link>
            <Link
              to="/partner-dashboard"
              className="px-4 py-2 text-sm text-white bg-gradient-to-r from-[#FF5722] to-[#FF8A50] rounded-xl hover:opacity-90 transition-all shadow-lg shadow-orange-500/25 flex items-center gap-1.5"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
            >
              <Zap className="w-3.5 h-3.5" />
              Daftar Mitra
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 pt-2 border-t border-white/10">
            {isLanding &&
              navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-white/70 hover:text-white text-sm transition-colors"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {link.label}
                </a>
              ))}
            <div className="flex flex-col gap-2 mt-3 px-4">
              <Link
                to="/prototype"
                onClick={() => setIsOpen(false)}
                className="py-2.5 text-sm text-center text-white border border-white/20 rounded-xl"
              >
                Lihat Prototype
              </Link>
              <Link
                to="/partner-dashboard"
                onClick={() => setIsOpen(false)}
                className="py-2.5 text-sm text-center text-white bg-gradient-to-r from-[#FF5722] to-[#FF8A50] rounded-xl"
                style={{ fontWeight: 600 }}
              >
                Daftar Mitra Bengkel
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
