import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rizky Pratama",
    role: "Karyawan Swasta, Jakarta",
    avatar: "👨‍💼",
    rating: 5,
    text: "Motor saya mati mendadak di tengah jalan tol dalam kota jam 8 pagi. Panik banget! Buka CallBengkel, dalam 11 menit montir sudah datang. Yang bikin tenang — harga sudah kelihatan dari awal, jadi tidak ada drama.",
    tag: "Mesin mati mendadak",
    time: "11 menit respons",
  },
  {
    name: "Sari Dewi",
    role: "Ibu Rumah Tangga, Surabaya",
    avatar: "👩",
    rating: 5,
    text: "Sebagai perempuan yang sering naik motor sendiri, saya selalu khawatir kalau tiba-tiba mogok. Dengan CallBengkel, ada fitur emergency yang langsung kirim notif ke suami saya. Sangat peace of mind!",
    tag: "Ban bocor malam hari",
    time: "8 menit respons",
  },
  {
    name: "Budi Santoso",
    role: "Pemilik Bengkel, Bandung",
    avatar: "🧑‍🔧",
    rating: 5,
    text: "Saya montir freelance yang sebelumnya susah dapat pelanggan baru. Sejak gabung CallBengkel, order saya naik 300% dalam 2 bulan. Dashboard-nya memudahkan saya kelola semua order dan pendapatan.",
    tag: "Mitra Bengkel",
    time: "300% order naik",
    isPartner: true,
  },
  {
    name: "Ahmad Fauzi",
    role: "Driver Ojol, Medan",
    avatar: "🏍️",
    rating: 5,
    text: "Motor adalah alat kerja saya. Kalau mogok, pendapatan stop. CallBengkel jadi lifesaver — ada membership khusus driver yang harganya terjangkau dan prioritas montir. Game changer buat saya!",
    tag: "Aki soak di tengah jalan",
    time: "10 menit respons",
  },
  {
    name: "Pak Hendra",
    role: "Manajer Bengkel, Semarang",
    avatar: "👨‍🔧",
    rating: 5,
    text: "Bengkel saya sudah punya 5 montir tapi sebelumnya tidak ada sistem yang rapih. Dengan CallBengkel Business, semua terkelola — dari order, jadwal, sampai laporan bulanan. Profesional banget!",
    tag: "Mitra Bengkel Premium",
    time: "8x lebih efisien",
    isPartner: true,
  },
  {
    name: "Melani Putri",
    role: "Mahasiswi, Yogyakarta",
    avatar: "👩‍🎓",
    rating: 5,
    text: "Motor saya ban bocor di depan kampus jam 10 malam. Takut minta tolong orang yang tidak dikenal. Pakai CallBengkel — montir terverifikasi, bisa lihat profil dan rating-nya dulu. Aman dan cepat!",
    tag: "Ban bocor malam hari",
    time: "14 menit respons",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 md:py-28" style={{ background: "#F8FAFC" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4"
            style={{ background: "#FFFBEB", border: "1px solid #FDE68A" }}
          >
            <Star className="w-4 h-4 text-[#F59E0B]" fill="#F59E0B" />
            <span
              className="text-xs tracking-wider uppercase"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, color: "#D97706" }}
            >
              Social Proof
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
            Dipercaya Ribuan{" "}
            <span style={{ color: "#FF5722" }}>Pengguna & Mitra</span>
          </h2>
          <p
            className="text-[#64748B] max-w-xl mx-auto"
            style={{ fontFamily: "Inter, sans-serif", fontSize: "16px", lineHeight: "1.7" }}
          >
            Dari driver ojol hingga ibu rumah tangga — CallBengkel hadir untuk semua yang butuh bantuan kendaraan cepat.
          </p>

          {/* Rating Summary */}
          <div className="flex items-center justify-center gap-6 mt-6">
            <div className="text-center">
              <div
                className="text-[#0F172A]"
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "32px" }}
              >
                4.9
              </div>
              <div className="flex gap-0.5 justify-center mb-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-4 h-4 text-[#F59E0B]" fill="#F59E0B" />
                ))}
              </div>
              <p className="text-[#64748B] text-xs" style={{ fontFamily: "Inter, sans-serif" }}>
                Rating App Store
              </p>
            </div>
            <div className="w-px h-12 bg-[#E2E8F0]" />
            <div className="text-center">
              <div
                className="text-[#0F172A]"
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "32px" }}
              >
                50K+
              </div>
              <p className="text-[#64748B] text-xs" style={{ fontFamily: "Inter, sans-serif" }}>
                Ulasan Pengguna
              </p>
            </div>
            <div className="w-px h-12 bg-[#E2E8F0]" />
            <div className="text-center">
              <div
                className="text-[#0F172A]"
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "32px" }}
              >
                98%
              </div>
              <p className="text-[#64748B] text-xs" style={{ fontFamily: "Inter, sans-serif" }}>
                Kepuasan Pengguna
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className={`relative p-6 rounded-2xl border transition-all hover:shadow-lg ${
                t.isPartner
                  ? "border-[#10B981]/30 bg-gradient-to-br from-[#ECFDF5] to-white"
                  : "border-[#E2E8F0] bg-white"
              }`}
            >
              {/* Quote icon */}
              <Quote
                className="absolute top-4 right-4 w-8 h-8 opacity-10"
                style={{ color: t.isPartner ? "#10B981" : "#FF5722" }}
              />

              {/* Tag */}
              <div className="flex items-center gap-2 mb-4">
                <div
                  className="px-2.5 py-1 rounded-full text-[10px]"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 600,
                    background: t.isPartner ? "#ECFDF5" : "#FFF3F0",
                    color: t.isPartner ? "#059669" : "#FF5722",
                  }}
                >
                  {t.tag}
                </div>
                <div
                  className="px-2.5 py-1 rounded-full text-[10px] bg-[#F8FAFC]"
                  style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, color: "#64748B" }}
                >
                  ⚡ {t.time}
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-3.5 h-3.5 text-[#F59E0B]" fill="#F59E0B" />
                ))}
              </div>

              {/* Text */}
              <p
                className="text-[#374151] text-sm leading-relaxed mb-4"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#E2E8F0]">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xl"
                  style={{ background: t.isPartner ? "#ECFDF5" : "#FFF3F0" }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p
                    className="text-[#0F172A] text-sm"
                    style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}
                  >
                    {t.name}
                  </p>
                  <p className="text-[#64748B] text-xs" style={{ fontFamily: "Inter, sans-serif" }}>
                    {t.role}
                  </p>
                </div>
                {t.isPartner && (
                  <div className="ml-auto">
                    <div
                      className="text-[10px] px-2 py-0.5 rounded-full"
                      style={{ background: "#ECFDF5", color: "#059669", fontFamily: "Inter, sans-serif", fontWeight: 700 }}
                    >
                      🏅 Mitra Terverifikasi
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Media & Awards */}
        <div className="mt-16 text-center">
          <p className="text-[#94A3B8] text-xs uppercase tracking-wider mb-6" style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}>
            Diliput oleh media terkemuka
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-40 grayscale">
            {["Kompas.com", "TechInAsia", "Detik.com", "IDN Times", "Bisnis.com", "Forbes Indonesia"].map((media) => (
              <span
                key={media}
                className="text-[#0F172A] text-sm"
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
              >
                {media}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
