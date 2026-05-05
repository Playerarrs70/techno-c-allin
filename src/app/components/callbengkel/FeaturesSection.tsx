import { useState } from "react";
import {
  MapPin, MessageCircle, CreditCard, Star, Clock, Shield,
  BarChart2, Bell, Navigation, Settings, TrendingUp, Users
} from "lucide-react";

export function FeaturesSection() {
  const [activeTab, setActiveTab] = useState<"user" | "partner">("user");

  const userFeatures = [
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "GPS Auto-detect",
      desc: "Lokasi terdeteksi otomatis. Tidak perlu ketik alamat manual.",
      color: "#FF5722",
      bg: "#FFF3F0",
    },
    {
      icon: <span className="text-xl">🆘</span>,
      title: "Emergency SOS",
      desc: "Satu tombol untuk panggil darurat. Notif dikirim ke kontak darurat.",
      color: "#EF4444",
      bg: "#FEF2F2",
    },
    {
      icon: <span className="text-xl">🔧</span>,
      title: "Pilih Masalah Kendaraan",
      desc: "Pilih masalah spesifik: ban bocor, aki, mesin, BBM, dll.",
      color: "#F59E0B",
      bg: "#FFFBEB",
    },
    {
      icon: <Navigation className="w-5 h-5" />,
      title: "Tracking Real-time",
      desc: "Pantau pergerakan montir di peta secara live hingga tiba.",
      color: "#3B82F6",
      bg: "#EFF6FF",
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      title: "Chat & Call Langsung",
      desc: "Komunikasi langsung dengan teknisi tanpa share nomor HP.",
      color: "#8B5CF6",
      bg: "#F5F3FF",
    },
    {
      icon: <span className="text-xl">💰</span>,
      title: "Estimasi Harga Transparan",
      desc: "Lihat estimasi biaya sebelum konfirmasi. Tidak ada biaya tersembunyi.",
      color: "#10B981",
      bg: "#ECFDF5",
    },
    {
      icon: <CreditCard className="w-5 h-5" />,
      title: "Pembayaran Digital",
      desc: "GoPay, OVO, DANA, transfer bank, kartu kredit, atau tunai.",
      color: "#06B6D4",
      bg: "#ECFEFF",
    },
    {
      icon: <Star className="w-5 h-5" />,
      title: "Rating & Review",
      desc: "Beri penilaian setelah servis. Jaga kualitas ekosistem platform.",
      color: "#F59E0B",
      bg: "#FFFBEB",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Riwayat Servis",
      desc: "Semua history servis tersimpan. Reminder servis berkala otomatis.",
      color: "#EC4899",
      bg: "#FDF2F8",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Montir Terverifikasi",
      desc: "Semua mitra sudah melalui proses verifikasi KTP, keahlian, dan background check.",
      color: "#10B981",
      bg: "#ECFDF5",
    },
    {
      icon: <span className="text-xl">🤖</span>,
      title: "AI Deteksi Kerusakan",
      desc: "Upload foto/rekam suara mesin — AI bantu identifikasi masalah kendaraan.",
      color: "#7C3AED",
      bg: "#F5F3FF",
    },
    {
      icon: <span className="text-xl">🎟️</span>,
      title: "Membership & Paket",
      desc: "Berlangganan bulanan untuk diskon servis, prioritas montir, dan benefit eksklusif.",
      color: "#FF5722",
      bg: "#FFF3F0",
    },
  ];

  const partnerFeatures = [
    {
      icon: <Bell className="w-5 h-5" />,
      title: "Dashboard Order Masuk",
      desc: "Terima notifikasi order real-time. Accept/reject dalam 60 detik.",
      color: "#FF5722",
      bg: "#FFF3F0",
    },
    {
      icon: <Navigation className="w-5 h-5" />,
      title: "Navigasi ke Pelanggan",
      desc: "Rute otomatis via Google Maps ke lokasi pengguna.",
      color: "#3B82F6",
      bg: "#EFF6FF",
    },
    {
      icon: <Settings className="w-5 h-5" />,
      title: "Kelola Layanan & Harga",
      desc: "Atur jenis layanan, harga, dan area jangkauan secara fleksibel.",
      color: "#8B5CF6",
      bg: "#F5F3FF",
    },
    {
      icon: <BarChart2 className="w-5 h-5" />,
      title: "Laporan Pendapatan",
      desc: "Laporan harian, mingguan, bulanan otomatis. Analitik performa lengkap.",
      color: "#10B981",
      bg: "#ECFDF5",
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Manajemen Performa",
      desc: "Pantau rating, tingkat penyelesaian, dan feedback pelanggan.",
      color: "#F59E0B",
      bg: "#FFFBEB",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Manajemen Tim Montir",
      desc: "Untuk bengkel besar: kelola beberapa montir dalam satu akun.",
      color: "#EC4899",
      bg: "#FDF2F8",
    },
    {
      icon: <CreditCard className="w-5 h-5" />,
      title: "Pencairan Otomatis",
      desc: "Dana cair ke rekening setiap hari atau sesuai jadwal yang dipilih.",
      color: "#06B6D4",
      bg: "#ECFEFF",
    },
    {
      icon: <span className="text-xl">🏆</span>,
      title: "Sistem Reward & Level",
      desc: "Semakin banyak order & rating bagus, naik level untuk komisi lebih rendah.",
      color: "#F59E0B",
      bg: "#FFFBEB",
    },
  ];

  const features = activeTab === "user" ? userFeatures : partnerFeatures;

  return (
    <section id="fitur" className="py-20 md:py-28" style={{ background: "#F8FAFC" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4"
            style={{ background: "#EFF6FF", border: "1px solid #BFDBFE" }}
          >
            <span className="text-sm">⚡</span>
            <span
              className="text-xs tracking-wider uppercase"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, color: "#3B82F6" }}
            >
              Fitur Unggulan
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
            Platform Lengkap untuk{" "}
            <span style={{ color: "#FF5722" }}>Semua Pihak</span>
          </h2>
          <p
            className="text-[#64748B] max-w-xl mx-auto mb-8"
            style={{ fontFamily: "Inter, sans-serif", fontSize: "16px", lineHeight: "1.7" }}
          >
            CallBengkel dirancang untuk memenuhi kebutuhan pengguna dan mitra bengkel secara menyeluruh.
          </p>

          {/* Tab Toggle */}
          <div className="inline-flex bg-white border border-[#E2E8F0] rounded-2xl p-1 shadow-sm">
            <button
              onClick={() => setActiveTab("user")}
              className={`px-6 py-2.5 rounded-xl text-sm transition-all duration-200 ${
                activeTab === "user"
                  ? "bg-[#FF5722] text-white shadow-md"
                  : "text-[#64748B] hover:text-[#0F172A]"
              }`}
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
            >
              🙍‍♂️ Untuk Pengguna
            </button>
            <button
              onClick={() => setActiveTab("partner")}
              className={`px-6 py-2.5 rounded-xl text-sm transition-all duration-200 ${
                activeTab === "partner"
                  ? "bg-[#FF5722] text-white shadow-md"
                  : "text-[#64748B] hover:text-[#0F172A]"
              }`}
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
            >
              🔧 Untuk Mitra Bengkel
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-5 bg-white rounded-2xl border border-[#E2E8F0] hover:border-transparent hover:shadow-lg transition-all duration-300 cursor-default"
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform"
                style={{ background: feature.bg, color: feature.color }}
              >
                {feature.icon}
              </div>
              <h4
                className="text-[#0F172A] mb-1.5"
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "13px" }}
              >
                {feature.title}
              </h4>
              <p
                className="text-[#64748B] text-xs leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-[#64748B] text-sm mb-4" style={{ fontFamily: "Inter, sans-serif" }}>
            Dan masih banyak fitur inovatif lainnya yang terus dikembangkan...
          </p>
          <button
            className="px-8 py-3 text-white rounded-2xl text-sm hover:opacity-90 transition-all"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              background: "linear-gradient(135deg, #FF5722, #FF8A50)",
              boxShadow: "0 4px 20px rgba(255,87,34,0.3)",
            }}
          >
            🚀 Coba Prototype Sekarang →
          </button>
        </div>
      </div>
    </section>
  );
}
