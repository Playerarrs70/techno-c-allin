import { Check, X, Minus } from "lucide-react";

export function WhyDifferent() {
  const comparisonPoints = [
    "Layanan darurat on-demand",
    "Montir datang ke lokasi",
    "GPS real-time tracking",
    "Harga transparan & estimasi",
    "Fokus 100% otomotif",
    "AI deteksi kerusakan",
    "Mitra bengkel lokal terverifikasi",
    "Membership servis berkala",
    "Emergency SOS button",
    "Riwayat servis digital",
    "Rating sistem terbuka",
    "Chat langsung dengan teknisi",
  ];

  const competitors = [
    {
      name: "CallBengkel",
      logo: "🔧",
      color: "#FF5722",
      bgColor: "#FFF3F0",
      borderColor: "#FF5722",
      isBest: true,
      values: [true, true, true, true, true, true, true, true, true, true, true, true],
    },
    {
      name: "Gojek / Grab",
      logo: "🛵",
      color: "#00ADE8",
      bgColor: "#EFF9FF",
      borderColor: "#CBD5E1",
      isBest: false,
      values: [false, false, false, false, false, false, false, false, false, false, true, false],
    },
    {
      name: "Bengkel Biasa",
      logo: "🏭",
      color: "#64748B",
      bgColor: "#F8FAFC",
      borderColor: "#CBD5E1",
      isBest: false,
      values: [false, false, false, false, true, false, false, false, false, false, false, false],
    },
    {
      name: "Tukang Tambal",
      logo: "🛠️",
      color: "#94A3B8",
      bgColor: "#F8FAFC",
      borderColor: "#CBD5E1",
      isBest: false,
      values: [null, true, false, false, false, false, false, false, false, false, false, false],
    },
  ];

  const advantages = [
    {
      icon: "🎯",
      title: "Spesialis, Bukan Generalis",
      desc: "Tidak seperti Gojek/Grab yang fokus logistik, CallBengkel 100% fokus pada servis kendaraan darurat. Fitur, UX, dan ekosistemnya dirancang khusus untuk kebutuhan ini.",
    },
    {
      icon: "🤝",
      title: "Ekosistem Win-Win",
      desc: "Pengguna mendapat bantuan cepat + harga adil. Mitra bengkel mendapat penghasilan stabil + tool digital gratis. Platform tumbuh bersama semua pihak.",
    },
    {
      icon: "🤖",
      title: "AI-Powered Matching",
      desc: "Algoritma cerdas mencocokkan masalah kendaraan dengan montir yang paling ahli dan terdekat — bukan sekadar yang paling dekat secara geografis.",
    },
    {
      icon: "🛡️",
      title: "Trust & Safety First",
      desc: "Verifikasi KTP, sertifikasi keahlian, rating transparan, dan asuransi garansi pengerjaan. Keamanan pengguna adalah prioritas utama.",
    },
    {
      icon: "📱",
      title: "Super App Otomotif",
      desc: "Bukan hanya darurat — reminder servis berkala, deteksi kerusakan AI, riwayat kendaraan digital, dan marketplace sparepart lokal.",
    },
    {
      icon: "🌏",
      title: "Lokal, Tapi Scalable",
      desc: "Dimulai dari kota-kota tier 1 Indonesia, dengan model yang bisa diperluas ke seluruh Asia Tenggara di mana masalah ini juga ada.",
    },
  ];

  return (
    <section id="keunggulan" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4"
            style={{ background: "#ECFDF5", border: "1px solid #A7F3D0" }}
          >
            <span className="text-sm">🏆</span>
            <span
              className="text-xs tracking-wider uppercase"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, color: "#059669" }}
            >
              Competitive Advantage
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
            Kenapa CallBengkel{" "}
            <span style={{ color: "#FF5722" }}>Berbeda?</span>
          </h2>
          <p
            className="text-[#64748B] max-w-xl mx-auto"
            style={{ fontFamily: "Inter, sans-serif", fontSize: "16px", lineHeight: "1.7" }}
          >
            Perbandingan jujur dengan solusi yang sudah ada — dan kenapa CallBengkel unggul di setiap dimensi.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto mb-16">
          <div className="min-w-[640px]">
            {/* Table Header */}
            <div className="grid grid-cols-5 gap-2 mb-3">
              <div className="col-span-1" />
              {competitors.map((comp) => (
                <div key={comp.name} className="text-center">
                  <div
                    className={`rounded-2xl p-3 border-2 ${comp.isBest ? "shadow-lg" : ""}`}
                    style={{
                      background: comp.bgColor,
                      borderColor: comp.borderColor,
                    }}
                  >
                    <div className="text-2xl mb-1">{comp.logo}</div>
                    <p
                      className="text-xs"
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: comp.isBest ? 800 : 600,
                        color: comp.color,
                        fontSize: "11px",
                      }}
                    >
                      {comp.name}
                    </p>
                    {comp.isBest && (
                      <div
                        className="mt-1.5 text-[9px] text-white px-2 py-0.5 rounded-full"
                        style={{ background: "#FF5722", fontFamily: "Inter, sans-serif", fontWeight: 700 }}
                      >
                        ✓ TERBAIK
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Table Rows */}
            {comparisonPoints.map((point, idx) => (
              <div
                key={point}
                className={`grid grid-cols-5 gap-2 py-2.5 px-2 rounded-xl ${idx % 2 === 0 ? "bg-[#F8FAFC]" : ""}`}
              >
                <div className="col-span-1 flex items-center">
                  <span
                    className="text-[#0F172A] text-xs"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {point}
                  </span>
                </div>
                {competitors.map((comp) => (
                  <div key={comp.name} className="flex items-center justify-center">
                    {comp.values[idx] === true ? (
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center"
                        style={{ background: comp.isBest ? "#FFF3F0" : "#ECFDF5" }}
                      >
                        <Check
                          className="w-3.5 h-3.5"
                          style={{ color: comp.isBest ? "#FF5722" : "#10B981" }}
                        />
                      </div>
                    ) : comp.values[idx] === false ? (
                      <div className="w-6 h-6 rounded-full bg-[#FEF2F2] flex items-center justify-center">
                        <X className="w-3.5 h-3.5 text-[#EF4444]" />
                      </div>
                    ) : (
                      <div className="w-6 h-6 rounded-full bg-[#F8FAFC] flex items-center justify-center">
                        <Minus className="w-3.5 h-3.5 text-[#94A3B8]" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {advantages.map((adv) => (
            <div
              key={adv.title}
              className="group p-6 rounded-2xl border border-[#E2E8F0] hover:border-[#FF5722]/30 hover:shadow-lg transition-all"
            >
              <div className="text-3xl mb-3">{adv.icon}</div>
              <h4
                className="text-[#0F172A] mb-2"
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "15px" }}
              >
                {adv.title}
              </h4>
              <p
                className="text-[#64748B] text-sm leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {adv.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
