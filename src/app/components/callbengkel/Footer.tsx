import { Link } from "react-router";
import { Wrench, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer
      className="pt-16 pb-8"
      style={{ background: "#080E1A" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-4 w-fit">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#FF5722] to-[#FF8A50] flex items-center justify-center">
                <Wrench className="w-5 h-5 text-white" />
              </div>
              <div>
                <span
                  className="text-white"
                  style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "18px" }}
                >
                  Call<span className="text-[#FF5722]">Bengkel</span>
                </span>
              </div>
            </Link>
            <p
              className="text-white/40 text-sm mb-6 max-w-xs leading-relaxed"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Platform darurat kendaraan pertama di Indonesia. Menghubungkan pengguna dengan montir terdekat dalam hitungan menit.
            </p>
            <p
              className="text-white/60 text-xs mb-3"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
            >
              Ikuti Kami
            </p>
            <div className="flex gap-3">
              {[
                { icon: <Instagram className="w-4 h-4" />, label: "Instagram" },
                { icon: <Twitter className="w-4 h-4" />, label: "Twitter/X" },
                { icon: <Linkedin className="w-4 h-4" />, label: "LinkedIn" },
                { icon: <Youtube className="w-4 h-4" />, label: "YouTube" },
              ].map((social) => (
                <button
                  key={social.label}
                  className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all"
                  title={social.label}
                >
                  {social.icon}
                </button>
              ))}
            </div>
          </div>

          {/* Produk */}
          <div>
            <h4
              className="text-white mb-4 text-sm"
              style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
            >
              Produk
            </h4>
            <ul className="space-y-2.5">
              {[
                "Cara Kerja",
                "Fitur Pengguna",
                "Mitra Bengkel",
                "Membership & Paket",
                "Emergency SOS",
                "Deteksi AI",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-white/40 hover:text-white/80 text-sm transition-colors"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Perusahaan */}
          <div>
            <h4
              className="text-white mb-4 text-sm"
              style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
            >
              Perusahaan
            </h4>
            <ul className="space-y-2.5">
              {[
                "Tentang Kami",
                "Tim",
                "Karir",
                "Blog & Berita",
                "Press Kit",
                "Investor Relations",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-white/40 hover:text-white/80 text-sm transition-colors"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h4
              className="text-white mb-4 text-sm"
              style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
            >
              Kontak
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-[#FF5722] flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:hello@callbengkel.id"
                  className="text-white/40 hover:text-white/80 text-sm transition-colors"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  hello@callbengkel.id
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-[#FF5722] flex-shrink-0 mt-0.5" />
                <a
                  href="tel:08001234567"
                  className="text-white/40 hover:text-white/80 text-sm transition-colors"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  0800-BENGKEL (Gratis)
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#FF5722] flex-shrink-0 mt-0.5" />
                <span
                  className="text-white/40 text-sm"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Wisma Satya Lt. 12, Jl. Sudirman, Jakarta Selatan
                </span>
              </li>
            </ul>

            <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10">
              <p
                className="text-white/70 text-xs mb-1"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
              >
                🏢 PT CallBengkel Indonesia
              </p>
              <p className="text-white/30 text-[10px]" style={{ fontFamily: "Inter, sans-serif" }}>
                Terdaftar di Kemenkumham RI
              </p>
            </div>
          </div>
        </div>

        {/* App Store Badges */}
        <div className="flex flex-wrap gap-3 mb-10">
          <div
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 bg-white/5 cursor-pointer hover:bg-white/8 transition-all"
          >
            <span className="text-xl">🍎</span>
            <div>
              <div className="text-white/30 text-[9px]" style={{ fontFamily: "Inter, sans-serif" }}>Download di</div>
              <div className="text-white text-xs" style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}>App Store</div>
            </div>
          </div>
          <div
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 bg-white/5 cursor-pointer hover:bg-white/8 transition-all"
          >
            <span className="text-xl">🤖</span>
            <div>
              <div className="text-white/30 text-[9px]" style={{ fontFamily: "Inter, sans-serif" }}>Tersedia di</div>
              <div className="text-white text-xs" style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}>Google Play</div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p
              className="text-white/20 text-xs text-center"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              © 2025 PT CallBengkel Indonesia. Semua hak dilindungi.
            </p>
            <div className="flex gap-6">
              {["Kebijakan Privasi", "Syarat & Ketentuan", "Cookie Policy"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-white/20 hover:text-white/50 text-xs transition-colors"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div className="text-center mt-6">
            <p
              className="text-white/10 text-[10px]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Dibuat dengan ❤️ di Jakarta, Indonesia 🇮🇩
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
