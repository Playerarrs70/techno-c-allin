import { Link } from "react-router";
import { ArrowRight, Star, DollarSign, Users } from "lucide-react";

const workshopImg = "https://images.unsplash.com/photo-1727413433599-496949ef8196?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvJTIwcmVwYWlyJTIwd29ya3Nob3AlMjBnYXJhZ2UlMjB0b29sc3xlbnwxfHx8fDE3Nzc4MjAzMTR8MA&ixlib=rb-4.1.0&q=80&w=1080";

export function PartnerCTA() {
  const benefits = [
    {
      icon: <DollarSign className="w-5 h-5" />,
      title: "Pendapatan Lebih Stabil",
      desc: "Rata-rata mitra aktif mendapat 15-25 order/bulan. Pendapatan tambahan Rp 3-8 juta/bulan.",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Jangkau Pelanggan Baru",
      desc: "Tampil di peta digital CallBengkel. Diekspos ke ribuan pengguna baru di sekitar lokasi Anda.",
    },
    {
      icon: <Star className="w-5 h-5" />,
      title: "Sistem Digital Gratis",
      desc: "Dashboard order, invoice digital, laporan keuangan, dan analitik performa — semua gratis.",
    },
    {
      icon: <span className="text-xl">🛡️</span>,
      title: "Proteksi & Garansi",
      desc: "Asuransi garansi pengerjaan, perlindungan pembayaran, dan support tim 24/7.",
    },
  ];

  const steps = [
    { num: "1", title: "Daftar Online", desc: "Isi form registrasi mitra di app atau website" },
    { num: "2", title: "Verifikasi", desc: "Upload KTP & bukti keahlian (1-2 hari kerja)" },
    { num: "3", title: "Training", desc: "Ikuti onboarding singkat via video call (1 jam)" },
    { num: "4", title: "Mulai Dapat Order!", desc: "Akun aktif, langsung terima order dari area Anda" },
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5"
              style={{ background: "#ECFDF5", border: "1px solid #A7F3D0" }}
            >
              <span className="text-sm">🔧</span>
              <span
                className="text-xs tracking-wider uppercase"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, color: "#059669" }}
              >
                Untuk Mitra Bengkel
              </span>
            </div>

            <h2
              className="text-[#0F172A] mb-4"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                lineHeight: "1.2",
              }}
            >
              Bergabung Jadi Mitra{" "}
              <span style={{ color: "#FF5722" }}>CallBengkel</span>{" "}
              — Gratis!
            </h2>
            <p
              className="text-[#64748B] mb-8"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "16px", lineHeight: "1.7" }}
            >
              Tidak perlu modal besar. Cukup keahlian dan smartphone. Kami bantu Anda dapat pelanggan lebih banyak, 
              pendapatan lebih stabil, dan kelola bengkel lebih profesional.
            </p>

            {/* Benefits */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((b) => (
                <div
                  key={b.title}
                  className="flex gap-3 p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#10B981]/40 transition-all"
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 text-[#10B981]"
                    style={{ background: "#ECFDF5" }}
                  >
                    {b.icon}
                  </div>
                  <div>
                    <h4
                      className="text-[#0F172A] mb-1"
                      style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "13px" }}
                    >
                      {b.title}
                    </h4>
                    <p
                      className="text-[#64748B] text-xs leading-relaxed"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {b.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Cara Daftar */}
            <div className="mb-8">
              <h4
                className="text-[#0F172A] mb-4"
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "15px" }}
              >
                Cara Bergabung:
              </h4>
              <div className="flex flex-col gap-3">
                {steps.map((step) => (
                  <div key={step.num} className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm"
                      style={{
                        background: "linear-gradient(135deg, #FF5722, #FF8A50)",
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: 800,
                      }}
                    >
                      {step.num}
                    </div>
                    <div>
                      <span
                        className="text-[#0F172A] text-sm"
                        style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}
                      >
                        {step.title}
                      </span>
                      <span className="text-[#64748B] text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
                        {" "}— {step.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/partner-dashboard"
                className="flex items-center justify-center gap-2 px-6 py-3.5 text-white rounded-xl text-sm font-semibold hover:opacity-90 transition-all"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 700,
                  background: "linear-gradient(135deg, #FF5722, #FF8A50)",
                  boxShadow: "0 4px 20px rgba(255,87,34,0.3)",
                }}
              >
                Lihat Dashboard Mitra
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                className="flex items-center justify-center gap-2 px-6 py-3.5 border border-[#E2E8F0] rounded-xl text-sm text-[#374151] hover:border-[#FF5722]/30 hover:bg-[#FFF3F0] transition-all"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                📞 Hubungi Tim Mitra
              </button>
            </div>
          </div>

          {/* Right: Image + Stats */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src={workshopImg}
                alt="Auto repair workshop"
                className="w-full h-[450px] object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(15,23,42,0.7) 100%)",
                }}
              />

              {/* Overlay Stats */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { val: "1.200+", label: "Mitra Aktif" },
                    { val: "Rp 5.2JT", label: "Avg Pendapatan/Bulan" },
                    { val: "4.8★", label: "Avg Rating Mitra" },
                  ].map((s) => (
                    <div
                      key={s.label}
                      className="text-center p-3 rounded-2xl backdrop-blur-sm"
                      style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)" }}
                    >
                      <div
                        className="text-white"
                        style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "14px" }}
                      >
                        {s.val}
                      </div>
                      <div className="text-white/70 text-[9px]" style={{ fontFamily: "Inter, sans-serif" }}>
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div
              className="absolute -top-4 -right-4 bg-[#10B981] text-white rounded-2xl px-4 py-3 shadow-xl"
              style={{ boxShadow: "0 8px 30px rgba(16,185,129,0.4)" }}
            >
              <p
                className="text-xs"
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800 }}
              >
                0% Biaya Pendaftaran
              </p>
              <p className="text-white/70 text-[10px]" style={{ fontFamily: "Inter, sans-serif" }}>
                Komisi hanya dari order selesai
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
