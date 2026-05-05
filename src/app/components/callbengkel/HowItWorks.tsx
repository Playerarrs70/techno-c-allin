import { ArrowRight } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      step: "01",
      emoji: "📍",
      title: "Aktifkan Lokasi",
      desc: "Buka app CallBengkel. GPS otomatis mendeteksi posisi Anda secara real-time dengan akurasi tinggi.",
      color: "#FF5722",
      bg: "#FFF3F0",
    },
    {
      step: "02",
      emoji: "🔧",
      title: "Pilih Masalah & Jenis Kendaraan",
      desc: "Pilih masalah kendaraan (ban bocor, aki soak, mesin mati, dll) dan jenis kendaraan Anda.",
      color: "#F59E0B",
      bg: "#FFFBEB",
    },
    {
      step: "03",
      emoji: "👨‍🔧",
      title: "Montir Ditemukan",
      desc: "Sistem AI mencocokkan dengan montir/bengkel terdekat yang tersedia. Tampil estimasi waktu & biaya.",
      color: "#3B82F6",
      bg: "#EFF6FF",
    },
    {
      step: "04",
      emoji: "🗺️",
      title: "Tracking Real-time",
      desc: "Lacak pergerakan montir menuju lokasi Anda secara live. Chat & telepon langsung dari app.",
      color: "#8B5CF6",
      bg: "#F5F3FF",
    },
    {
      step: "05",
      emoji: "✅",
      title: "Servis Selesai & Bayar",
      desc: "Montir tiba, kerjakan servis, bayar dengan harga transparan via dompet digital, transfer, atau tunai.",
      color: "#10B981",
      bg: "#ECFDF5",
    },
    {
      step: "06",
      emoji: "⭐",
      title: "Rating & Review",
      desc: "Berikan rating dan ulasan untuk montir. Riwayat servis tersimpan otomatis untuk referensi berikutnya.",
      color: "#EC4899",
      bg: "#FDF2F8",
    },
  ];

  return (
    <section id="cara-kerja" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4"
            style={{ background: "#FFF3F0", border: "1px solid #FFD5CC" }}
          >
            <span className="text-sm">🚀</span>
            <span
              className="text-xs tracking-wider uppercase"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, color: "#FF5722" }}
            >
              How It Works
            </span>
          </div>
          <h2
            className="text-[#0F172A] mb-4"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              lineHeight: "1.2",
            }}
          >
            Bantuan Datang dalam{" "}
            <span style={{ color: "#FF5722" }}>6 Langkah Mudah</span>
          </h2>
          <p
            className="text-[#64748B] max-w-xl mx-auto"
            style={{ fontFamily: "Inter, sans-serif", fontSize: "16px", lineHeight: "1.7" }}
          >
            Dari kendaraan mogok hingga bantuan tiba — semua bisa dilakukan hanya dari genggaman tangan Anda.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div key={step.step} className="relative group">
              <div
                className="p-6 rounded-2xl border border-[#E2E8F0] hover:border-transparent hover:shadow-xl transition-all duration-300 h-full"
                style={{ background: "white" }}
              >
                {/* Step number */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl"
                    style={{ background: step.bg }}
                  >
                    {step.emoji}
                  </div>
                  <span
                    className="text-4xl opacity-10"
                    style={{ fontFamily: "Poppins, sans-serif", fontWeight: 900, color: step.color }}
                  >
                    {step.step}
                  </span>
                </div>

                {/* Color bar */}
                <div
                  className="w-8 h-1 rounded-full mb-3 transition-all duration-300 group-hover:w-16"
                  style={{ background: step.color }}
                />

                <h3
                  className="text-[#0F172A] mb-2"
                  style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "15px" }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-[#64748B] text-sm leading-relaxed"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {step.desc}
                </p>
              </div>

              {/* Arrow connector - desktop only */}
              {index < steps.length - 1 && (index + 1) % 3 !== 0 && (
                <div className="hidden lg:flex absolute top-1/2 -right-3 -translate-y-1/2 z-10">
                  <ArrowRight className="w-5 h-5 text-[#CBD5E1]" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Timeline for Partner */}
        <div
          className="mt-16 p-8 rounded-3xl"
          style={{
            background: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
          }}
        >
          <div className="text-center mb-8">
            <h3
              className="text-white mb-2"
              style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "20px" }}
            >
              Alur untuk Mitra Bengkel
            </h3>
            <p className="text-white/50 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
              Cara kerja dashboard mitra — kelola order lebih mudah
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
            {[
              { icon: "📥", title: "Terima Notifikasi", desc: "Order masuk real-time" },
              { icon: "✅", title: "Terima / Tolak", desc: "Dalam 60 detik" },
              { icon: "🗺️", title: "Navigasi ke User", desc: "GPS otomatis" },
              { icon: "🔧", title: "Kerjakan Servis", desc: "Update status live" },
              { icon: "💰", title: "Terima Pembayaran", desc: "Cair ke rekening" },
            ].map((item, idx) => (
              <div key={item.title} className="flex items-center">
                <div className="flex flex-col items-center text-center px-4">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl mb-2"
                    style={{ background: "rgba(255,87,34,0.15)", border: "1px solid rgba(255,87,34,0.3)" }}
                  >
                    {item.icon}
                  </div>
                  <p
                    className="text-white text-xs mb-1"
                    style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
                  >
                    {item.title}
                  </p>
                  <p className="text-white/40 text-[10px]" style={{ fontFamily: "Inter, sans-serif" }}>
                    {item.desc}
                  </p>
                </div>
                {idx < 4 && (
                  <ArrowRight className="hidden md:block w-4 h-4 text-white/20 flex-shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
