import { Link } from "react-router";
import { Download, ChevronRight, Star, Shield, Clock, MapPin, Zap } from "lucide-react";

export function HeroSection() {
  const stats = [
    { value: "1.200+", label: "Montir Aktif", icon: "🔧" },
    { value: "47", label: "Kota Indonesia", icon: "📍" },
    { value: "4.9★", label: "Rating Rata-rata", icon: "⭐" },
    { value: "<15 Min", label: "Response Time", icon: "⚡" },
  ];

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0F172A 0%, #1E293B 40%, #0F1A2E 100%)",
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #FF5722 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full opacity-8"
          style={{
            background: "radial-gradient(circle, #3B82F6 0%, transparent 70%)",
          }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#FF5722] rounded-full opacity-60 animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-[#10B981] rounded-full opacity-60 animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-white rounded-full opacity-40 animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6">
              <div className="w-2 h-2 bg-[#10B981] rounded-full animate-pulse" />
              <span className="text-white/70 text-xs tracking-wider uppercase" style={{ fontFamily: "Inter, sans-serif" }}>
                #1 Platform Darurat Kendaraan Indonesia
              </span>
            </div>

            {/* Headline */}
            <h1
              className="text-white mb-6"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
                lineHeight: "1.15",
                letterSpacing: "-0.02em",
              }}
            >
              Kendaraan Mogok?{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #FF5722, #FF8A50)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Bantuan Datang
              </span>{" "}
              Dalam{" "}
              <span className="relative inline-block">
                <span
                  style={{
                    background: "linear-gradient(135deg, #FFD60A, #FFA000)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  15 Menit!
                </span>
              </span>
            </h1>

            <p
              className="text-white/60 mb-8 max-w-lg"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "clamp(1rem, 2vw, 1.15rem)",
                lineHeight: "1.7",
              }}
            >
              CallBengkel menghubungkan Anda dengan montir & bengkel terdekat secara real-time. 
              Tidak perlu panik saat ban bocor, aki soak, atau mesin mati mendadak.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {[
                { icon: <MapPin className="w-3 h-3" />, text: "GPS Real-time" },
                { icon: <Shield className="w-3 h-3" />, text: "Harga Transparan" },
                { icon: <Clock className="w-3 h-3" />, text: "24/7 Siaga" },
                { icon: <Star className="w-3 h-3" />, text: "Montir Terverifikasi" },
              ].map((pill) => (
                <div
                  key={pill.text}
                  className="flex items-center gap-1.5 bg-white/8 border border-white/10 rounded-full px-3 py-1.5 text-white/70 text-xs"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  <span className="text-[#FF5722]">{pill.icon}</span>
                  {pill.text}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                className="flex items-center justify-center gap-2 px-7 py-4 text-white rounded-2xl font-semibold shadow-2xl hover:opacity-90 hover:scale-105 transition-all"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 700,
                  fontSize: "15px",
                  background: "linear-gradient(135deg, #FF5722 0%, #FF8A50 100%)",
                  boxShadow: "0 8px 32px rgba(255, 87, 34, 0.4)",
                }}
              >
                <Download className="w-4 h-4" />
                Download Gratis
              </button>
              <Link
                to="/prototype"
                className="flex items-center justify-center gap-2 px-7 py-4 text-white border border-white/20 rounded-2xl hover:bg-white/5 transition-all"
                style={{ fontFamily: "Inter, sans-serif", fontSize: "15px" }}
              >
                Lihat Demo App
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* App Store badges */}
            <div className="flex items-center gap-4 mt-6">
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 cursor-pointer hover:bg-white/10 transition-all">
                <span className="text-2xl">🍎</span>
                <div>
                  <div className="text-white/40 text-[10px]" style={{ fontFamily: "Inter, sans-serif" }}>Download di</div>
                  <div className="text-white text-xs" style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}>App Store</div>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 cursor-pointer hover:bg-white/10 transition-all">
                <span className="text-2xl">🤖</span>
                <div>
                  <div className="text-white/40 text-[10px]" style={{ fontFamily: "Inter, sans-serif" }}>Tersedia di</div>
                  <div className="text-white text-xs" style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}>Google Play</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow effect */}
              <div
                className="absolute inset-0 blur-3xl opacity-30 rounded-full"
                style={{ background: "radial-gradient(circle, #FF5722, transparent)" }}
              />

              {/* Phone Frame */}
              <div
                className="relative w-64 md:w-72 rounded-[40px] overflow-hidden shadow-2xl border-4 border-white/10"
                style={{
                  background: "linear-gradient(145deg, #1E293B, #0F172A)",
                  boxShadow: "0 30px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05), inset 0 1px 0 rgba(255,255,255,0.1)",
                }}
              >
                {/* Status Bar */}
                <div className="bg-[#0F172A] px-6 pt-4 pb-2 flex justify-between items-center">
                  <span className="text-white/60 text-[11px]" style={{ fontFamily: "Inter, sans-serif" }}>9:41 AM</span>
                  <div className="w-20 h-5 bg-black rounded-full" />
                  <div className="flex gap-1 items-center">
                    <div className="w-3.5 h-2 border border-white/40 rounded-sm relative">
                      <div className="absolute left-0.5 top-0.5 bottom-0.5 right-1 bg-white/40 rounded-sm" />
                    </div>
                  </div>
                </div>

                {/* App Screen: Booking */}
                <div className="bg-[#0F172A] px-4 pb-4">
                  {/* Header */}
                  <div className="flex items-center justify-between py-3">
                    <div>
                      <p className="text-white/40 text-[10px]" style={{ fontFamily: "Inter, sans-serif" }}>Lokasi Anda</p>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#FF5722]" />
                        <p className="text-white text-xs" style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}>Jl. Sudirman, Jakarta</p>
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FF5722] to-[#FF8A50] flex items-center justify-center">
                      <Zap className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  {/* SOS Button */}
                  <div
                    className="relative mx-auto my-3 w-32 h-32 rounded-full flex items-center justify-center cursor-pointer"
                    style={{
                      background: "radial-gradient(circle, #FF5722 0%, #C62400 100%)",
                      boxShadow: "0 0 0 8px rgba(255,87,34,0.15), 0 0 0 16px rgba(255,87,34,0.08), 0 0 40px rgba(255,87,34,0.4)",
                    }}
                  >
                    <div className="text-center">
                      <div className="text-white text-2xl">🆘</div>
                      <div className="text-white text-sm mt-1" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800 }}>SOS</div>
                      <div className="text-white/70 text-[9px]" style={{ fontFamily: "Inter, sans-serif" }}>Tekan untuk Darurat</div>
                    </div>
                  </div>

                  {/* Quick Issues */}
                  <p className="text-white/50 text-[10px] text-center mb-2" style={{ fontFamily: "Inter, sans-serif" }}>Pilih Masalah Kendaraan</p>
                  <div className="grid grid-cols-3 gap-1.5 mb-3">
                    {[
                      { emoji: "🔋", label: "Aki Soak" },
                      { emoji: "🛞", label: "Ban Bocor" },
                      { emoji: "⚙️", label: "Mesin Mati" },
                      { emoji: "⛽", label: "Kehabisan BBM" },
                      { emoji: "🔑", label: "Kunci Hilang" },
                      { emoji: "🔧", label: "Servis Lain" },
                    ].map((issue) => (
                      <div
                        key={issue.label}
                        className="bg-white/5 border border-white/10 rounded-xl p-1.5 text-center cursor-pointer hover:border-[#FF5722]/50 transition-all"
                      >
                        <div className="text-base">{issue.emoji}</div>
                        <div className="text-white/60 text-[8px] mt-0.5" style={{ fontFamily: "Inter, sans-serif" }}>
                          {issue.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Nearby Mechanic */}
                  <div className="bg-gradient-to-r from-[#FF5722]/20 to-[#FF8A50]/10 border border-[#FF5722]/30 rounded-2xl p-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FF5722] to-[#FF8A50] flex items-center justify-center text-sm">👨‍🔧</div>
                      <div className="flex-1">
                        <p className="text-white text-[11px]" style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}>Budi Santoso</p>
                        <p className="text-white/50 text-[9px]" style={{ fontFamily: "Inter, sans-serif" }}>⭐ 4.9 • 0.8 km • ~8 min</p>
                      </div>
                      <button className="bg-[#FF5722] text-white text-[9px] px-2 py-1 rounded-lg" style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}>
                        Panggil
                      </button>
                    </div>
                  </div>

                  {/* Bottom Nav */}
                  <div className="flex justify-around mt-4 pt-3 border-t border-white/10">
                    {["🏠", "🗺️", "📋", "💬", "👤"].map((icon, i) => (
                      <div key={i} className={`text-base cursor-pointer ${i === 0 ? "opacity-100" : "opacity-40"}`}>
                        {icon}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Notification */}
              <div
                className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl px-3 py-2 min-w-44"
                style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.3)" }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-[#10B981] flex items-center justify-center text-sm">✓</div>
                  <div>
                    <p className="text-[10px] text-gray-800" style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}>Montir Ditemukan!</p>
                    <p className="text-[9px] text-gray-500" style={{ fontFamily: "Inter, sans-serif" }}>Tiba dalam 12 menit</p>
                  </div>
                </div>
              </div>

              {/* Floating Price Tag */}
              <div
                className="absolute -bottom-4 -left-6 bg-[#0F172A] border border-white/10 rounded-2xl shadow-xl px-3 py-2"
                style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.4)" }}
              >
                <p className="text-white/50 text-[9px]" style={{ fontFamily: "Inter, sans-serif" }}>Estimasi Biaya</p>
                <p className="text-[#FF5722]" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "14px" }}>Rp 85.000</p>
                <p className="text-white/40 text-[9px]" style={{ fontFamily: "Inter, sans-serif" }}>Sudah termasuk jasa</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-4 rounded-2xl border border-white/8 bg-white/3 hover:bg-white/5 transition-all"
            >
              <div className="text-2xl mb-1">{stat.icon}</div>
              <div
                className="text-white mb-0.5"
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "22px" }}
              >
                {stat.value}
              </div>
              <div className="text-white/40 text-xs" style={{ fontFamily: "Inter, sans-serif" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40">
        <span className="text-white text-[11px]" style={{ fontFamily: "Inter, sans-serif" }}>Scroll ke bawah</span>
        <div className="w-5 h-8 border border-white/30 rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-white/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
