import { AlertTriangle, TrendingDown, Users, DollarSign } from "lucide-react";

const mechanicImg = "https://images.unsplash.com/photo-1766902378649-5e5d15543dd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWNoYW5pYyUyMGZpeGluZyUyMG1vdG9yY3ljbGUlMjByb2Fkc2lkZXxlbnwxfHx8fDE3Nzc4MjAzMTF8MA&ixlib=rb-4.1.0&q=80&w=1080";
const carBreakdownImg = "https://images.unsplash.com/photo-1773408285431-cfd94cc861be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBicmVha2Rvd24lMjBlbWVyZ2VuY3klMjByb2FkJTIwaGVscHxlbnwxfHx8fDE3Nzc4MjAzMTF8MA&ixlib=rb-4.1.0&q=80&w=1080";

export function ProblemSection() {
  const userProblems = [
    {
      icon: "🚗",
      title: "Panik Saat Mogok",
      desc: "Kendaraan tiba-tiba mati di jalan raya yang ramai. Tidak tahu harus menghubungi siapa atau ke mana.",
      stat: "68% pengemudi pernah mengalami ini",
    },
    {
      icon: "📍",
      title: "Sulit Cari Bantuan",
      desc: "Tidak tahu bengkel terdekat. Harus googling satu per satu dan tidak yakin bengkel mana yang bisa datang.",
      stat: "45 menit rata-rata waktu tunggu saat ini",
    },
    {
      icon: "💸",
      title: "Harga Tidak Transparan",
      desc: "Sering dikenakan harga 'situasional' yang mahal karena kondisi darurat. Tidak ada acuan harga yang jelas.",
      stat: "73% merasa dirugikan soal harga",
    },
    {
      icon: "😰",
      title: "Tidak Aman & Terpercaya",
      desc: "Khawatir dengan keamanan saat meminta bantuan orang asing di lokasi terpencil atau malam hari.",
      stat: "81% pengguna perempuan merasa tidak aman",
    },
  ];

  const partnerProblems = [
    {
      icon: <TrendingDown className="w-5 h-5" />,
      title: "Pelanggan Tidak Stabil",
      desc: "Order tidak menentu, kadang sepi berhari-hari. Susah prediksi pendapatan bulanan.",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Sulit Ekspansi Pelanggan",
      desc: "Hanya mengandalkan pelanggan tetap dari sekitar. Tidak ada cara efektif menjangkau pelanggan baru.",
    },
    {
      icon: <DollarSign className="w-5 h-5" />,
      title: "Tidak Ada Sistem Digital",
      desc: "Semua masih manual. Tidak ada sistem tracking order, invoice digital, atau laporan keuangan otomatis.",
    },
    {
      icon: <AlertTriangle className="w-5 h-5" />,
      title: "Kalah Saing Bengkel Besar",
      desc: "Bengkel kecil/montir freelance tidak bisa bersaing dengan bengkel resmi yang punya branding kuat.",
    },
  ];

  return (
    <section id="masalah" className="py-20 md:py-28 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 rounded-full px-4 py-1.5 mb-4">
            <AlertTriangle className="w-4 h-4 text-red-500" />
            <span className="text-red-600 text-xs tracking-wider uppercase" style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}>
              Problem Statement
            </span>
          </div>
          <h2
            className="text-[#0F172A] mb-4"
            style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "clamp(1.8rem, 4vw, 2.8rem)", lineHeight: "1.2" }}
          >
            Masalah Nyata yang{" "}
            <span style={{ color: "#FF5722" }}>Terjadi Setiap Hari</span>
          </h2>
          <p
            className="text-[#64748B] max-w-2xl mx-auto"
            style={{ fontFamily: "Inter, sans-serif", fontSize: "16px", lineHeight: "1.7" }}
          >
            Di Indonesia, ada <strong>120+ juta kendaraan bermotor</strong> — dan jutanya pernah mengalami 
            kondisi darurat di jalan tanpa tahu harus berbuat apa.
          </p>
        </div>

        {/* Two-side problems */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* User Side */}
          <div>
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-2xl bg-[#FFF3F0] flex items-center justify-center">
                  <span className="text-xl">🙍‍♂️</span>
                </div>
                <div>
                  <h3
                    style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "18px", color: "#0F172A" }}
                  >
                    Pain Point: Pengguna Kendaraan
                  </h3>
                  <p className="text-[#64748B] text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
                    Motor & Mobil Indonesia
                  </p>
                </div>
              </div>

              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden h-48 mb-6">
                <img src={carBreakdownImg} alt="Car breakdown" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-3 py-2">
                    <p className="text-white text-sm" style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}>
                      "Mogok di jalan tol jam 10 malam… tidak tahu mau telepon siapa 😱"
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-3">
              {userProblems.map((problem) => (
                <div
                  key={problem.title}
                  className="flex gap-4 p-4 bg-white rounded-2xl border border-[#E2E8F0] hover:border-[#FF5722]/30 hover:shadow-md transition-all"
                >
                  <div className="text-2xl flex-shrink-0">{problem.icon}</div>
                  <div className="flex-1">
                    <h4
                      className="text-[#0F172A] mb-1"
                      style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "14px" }}
                    >
                      {problem.title}
                    </h4>
                    <p
                      className="text-[#64748B] text-xs mb-2 leading-relaxed"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {problem.desc}
                    </p>
                    <div className="inline-flex items-center bg-red-50 rounded-full px-2.5 py-1">
                      <span className="text-red-600 text-[10px]" style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}>
                        📊 {problem.stat}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Partner Side */}
          <div>
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-2xl bg-[#F0FDF4] flex items-center justify-center">
                  <span className="text-xl">🔧</span>
                </div>
                <div>
                  <h3
                    style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "18px", color: "#0F172A" }}
                  >
                    Pain Point: Mitra Bengkel
                  </h3>
                  <p className="text-[#64748B] text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
                    Bengkel & Montir Freelance
                  </p>
                </div>
              </div>

              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden h-48 mb-6">
                <img src={mechanicImg} alt="Mechanic" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-3 py-2">
                    <p className="text-white text-sm" style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}>
                      "Bengkel saya sepi karena tidak punya cara promosi digital 😔"
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-3">
              {partnerProblems.map((problem) => (
                <div
                  key={problem.title}
                  className="flex gap-4 p-4 bg-white rounded-2xl border border-[#E2E8F0] hover:border-[#10B981]/30 hover:shadow-md transition-all"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#F0FDF4] flex items-center justify-center text-[#10B981]">
                    {problem.icon}
                  </div>
                  <div className="flex-1">
                    <h4
                      className="text-[#0F172A] mb-1"
                      style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "14px" }}
                    >
                      {problem.title}
                    </h4>
                    <p
                      className="text-[#64748B] text-xs leading-relaxed"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {problem.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Market Size */}
            <div
              className="mt-4 p-5 rounded-2xl"
              style={{
                background: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
              }}
            >
              <h4
                className="text-white mb-3"
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "14px" }}
              >
                📊 Market Opportunity
              </h4>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { val: "Rp 28T", label: "TAM Pasar Servis" },
                  { val: "85.000+", label: "Bengkel di RI" },
                  { val: "120M+", label: "Kendaraan Aktif" },
                ].map((item) => (
                  <div key={item.label} className="text-center">
                    <div
                      className="text-[#FF5722]"
                      style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "16px" }}
                    >
                      {item.val}
                    </div>
                    <div className="text-white/50 text-[10px]" style={{ fontFamily: "Inter, sans-serif" }}>
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
