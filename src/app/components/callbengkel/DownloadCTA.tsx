const riderImg = "https://images.unsplash.com/photo-1761314489833-a5a969592f72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RvcmN5Y2xlJTIwcmlkZXIlMjB1cmJhbiUyMGNpdHklMjBzdHJlZXR8ZW58MXx8fHwxNzc3ODIwMzExfDA&ixlib=rb-4.1.0&q=80&w=1080";

export function DownloadCTA() {
  return (
    <section
      className="py-20 md:py-28 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)" }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={riderImg} alt="Rider" className="w-full h-full object-cover opacity-10" />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.9))" }}
        />
      </div>

      {/* Decorative elements */}
      <div
        className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #FF5722, transparent)" }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6"
          style={{ background: "rgba(255,87,34,0.15)", border: "1px solid rgba(255,87,34,0.3)" }}
        >
          <div className="w-2 h-2 bg-[#FF5722] rounded-full animate-pulse" />
          <span
            className="text-[#FF8A50] text-xs tracking-wider uppercase"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
          >
            Download Sekarang — Gratis!
          </span>
        </div>

        <h2
          className="text-white mb-6"
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 800,
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            lineHeight: "1.15",
          }}
        >
          Jangan Panik Lagi Saat{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #FF5722, #FF8A50)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Kendaraan Mogok
          </span>
        </h2>

        <p
          className="text-white/60 max-w-2xl mx-auto mb-10"
          style={{ fontFamily: "Inter, sans-serif", fontSize: "17px", lineHeight: "1.7" }}
        >
          Download CallBengkel sekarang dan dapatkan{" "}
          <strong className="text-white">3 panggilan darurat gratis</strong> untuk pengguna baru.
          Montir terverifikasi siap datang dalam 15 menit.
        </p>

        {/* Download Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#0F172A] rounded-2xl hover:bg-white/90 transition-all shadow-xl"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}
          >
            <span className="text-2xl">🍎</span>
            <div className="text-left">
              <div className="text-[10px] text-gray-500">Download di</div>
              <div className="text-sm">App Store</div>
            </div>
          </button>
          <button
            className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#0F172A] rounded-2xl hover:bg-white/90 transition-all shadow-xl"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}
          >
            <span className="text-2xl">🤖</span>
            <div className="text-left">
              <div className="text-[10px] text-gray-500">Tersedia di</div>
              <div className="text-sm">Google Play</div>
            </div>
          </button>
        </div>

        {/* Social Proof */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {["👨‍💼", "👩", "👨‍🔧", "👩‍💼", "🧑"].map((avatar, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-[#1E293B] border-2 border-[#0F172A] flex items-center justify-center text-sm"
                >
                  {avatar}
                </div>
              ))}
            </div>
            <div className="text-left">
              <p
                className="text-white text-sm"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}
              >
                100K+ Pengguna
              </p>
              <p className="text-white/40 text-xs" style={{ fontFamily: "Inter, sans-serif" }}>
                telah bergabung
              </p>
            </div>
          </div>

          <div className="hidden sm:block w-px h-10 bg-white/10" />

          <div className="text-center">
            <div className="flex gap-1 justify-center mb-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <span key={s} className="text-[#F59E0B] text-sm">★</span>
              ))}
            </div>
            <p className="text-white/60 text-xs" style={{ fontFamily: "Inter, sans-serif" }}>
              4.9/5 dari 50K+ ulasan
            </p>
          </div>

          <div className="hidden sm:block w-px h-10 bg-white/10" />

          <div className="text-center">
            <p
              className="text-white text-sm"
              style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
            >
              #1 App Servis Darurat
            </p>
            <p className="text-white/40 text-xs" style={{ fontFamily: "Inter, sans-serif" }}>
              Indonesia 2024-2025
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
