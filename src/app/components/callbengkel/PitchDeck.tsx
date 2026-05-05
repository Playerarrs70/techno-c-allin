import { Target, Lightbulb, TrendingUp, Users, Award, ChevronRight } from "lucide-react";

export function PitchDeck() {
  const slides = [
    {
      number: "01",
      icon: <Target className="w-5 h-5" />,
      title: "Problem",
      color: "#EF4444",
      bg: "#FEF2F2",
      content: [
        "120M+ kendaraan di Indonesia tanpa layanan darurat on-demand",
        "Rata-rata 45 menit menunggu bantuan saat kendaraan mogok",
        "73% pengguna merasa dirugikan soal transparansi harga",
        "85.000 bengkel di Indonesia tidak punya sistem digital",
      ],
    },
    {
      number: "02",
      icon: <Lightbulb className="w-5 h-5" />,
      title: "Solution",
      color: "#F59E0B",
      bg: "#FFFBEB",
      content: [
        "Platform on-demand menghubungkan user ↔ montir terdekat",
        "GPS matching + estimasi harga transparan sebelum konfirmasi",
        "Real-time tracking, chat, dan pembayaran digital terintegrasi",
        "Dashboard digital gratis untuk mitra bengkel",
      ],
    },
    {
      number: "03",
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Market Size",
      color: "#3B82F6",
      bg: "#EFF6FF",
      content: [
        "TAM: Rp 28 Triliun (pasar servis kendaraan Indonesia)",
        "SAM: Rp 4.2T (segmen darurat & mobile service)",
        "SOM: Rp 840M (target 3 tahun, 5 kota besar)",
        "CAGR industri otomotif Indonesia: 8.3% per tahun",
      ],
    },
    {
      number: "04",
      icon: <Users className="w-5 h-5" />,
      title: "Business Model",
      color: "#8B5CF6",
      bg: "#F5F3FF",
      content: [
        "15-20% komisi per transaksi (revenue utama)",
        "Subscription mitra premium: Rp 99K–299K/bulan",
        "User membership: Rp 29K–79K/bulan",
        "Marketplace sparepart: 8-12% komisi",
      ],
    },
    {
      number: "05",
      icon: <Award className="w-5 h-5" />,
      title: "Traction & Validation",
      color: "#10B981",
      bg: "#ECFDF5",
      content: [
        "500+ validasi survei: 89% WTP bayar komisi servis darurat",
        "LOI dari 20 bengkel di Jakarta & Surabaya",
        "Pilot 3 bulan: 312 order, 4.9 rating, 0 komplain serius",
        "Menang 2 kompetisi startup: IdeaFest & Technopreneur 2024",
      ],
    },
    {
      number: "06",
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Financials & Ask",
      color: "#FF5722",
      bg: "#FFF3F0",
      content: [
        "Target fundraise: Rp 3 Miliar (Seed Round)",
        "Runway: 18 bulan untuk launch & scaling 5 kota",
        "Break-even: Bulan ke-18 pada 5.000 MAU",
        "Projected 3Y Revenue: Rp 18 Miliar (2027)",
      ],
    },
  ];

  const team = [
    {
      name: "Rafi Abdinegara",
      role: "CEO & Co-Founder",
      bg: "Mantan Product Manager Gojek, 6 tahun experience",
      icon: "👔",
    },
    {
      name: "Putri Handayani",
      role: "CTO & Co-Founder",
      bg: "Ex-Senior Engineer Tokopedia, spesialis real-time system",
      icon: "💻",
    },
    {
      name: "Dimas Kurniawan",
      role: "COO & Co-Founder",
      bg: "Eks-Kepala Operasional bengkel franchise nasional 5 tahun",
      icon: "⚙️",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4"
            style={{ background: "#FFF3F0", border: "1px solid #FFD5CC" }}
          >
            <span className="text-sm">🎯</span>
            <span
              className="text-xs tracking-wider uppercase"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, color: "#FF5722" }}
            >
              Investor Pitch Summary
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
            Pitch Deck{" "}
            <span style={{ color: "#FF5722" }}>Ready Summary</span>
          </h2>
          <p
            className="text-[#64748B] max-w-xl mx-auto"
            style={{ fontFamily: "Inter, sans-serif", fontSize: "16px", lineHeight: "1.7" }}
          >
            Ringkasan komprehensif untuk presentasi ke investor, juri lomba startup, atau kompetisi inovasi.
          </p>
        </div>

        {/* One-liner */}
        <div
          className="text-center p-8 rounded-3xl mb-12"
          style={{
            background: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
            border: "1px solid rgba(255,87,34,0.2)",
          }}
        >
          <p
            className="text-white/50 text-sm mb-3"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
          >
            One-liner Pitch
          </p>
          <p
            className="text-white max-w-3xl mx-auto"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.1rem, 3vw, 1.6rem)",
              lineHeight: "1.4",
            }}
          >
            "CallBengkel adalah{" "}
            <span style={{ color: "#FF5722" }}>Gojek untuk darurat kendaraan</span>
            {" "}— platform AI-powered yang menghubungkan 120 juta pengguna kendaraan Indonesia dengan 85.000 bengkel lokal, real-time, transparan, dan dalam 15 menit."
          </p>
        </div>

        {/* Pitch Slides */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {slides.map((slide) => (
            <div
              key={slide.number}
              className="p-6 rounded-2xl border border-[#E2E8F0] hover:shadow-lg transition-all group"
            >
              {/* Slide header */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: slide.bg, color: slide.color }}
                >
                  {slide.icon}
                </div>
                <div>
                  <p
                    className="text-[#94A3B8] text-[10px]"
                    style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
                  >
                    SLIDE {slide.number}
                  </p>
                  <p
                    className="text-[#0F172A]"
                    style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "15px", color: slide.color }}
                  >
                    {slide.title}
                  </p>
                </div>
              </div>

              {/* Points */}
              <ul className="space-y-2">
                {slide.content.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <ChevronRight
                      className="w-3.5 h-3.5 flex-shrink-0 mt-0.5"
                      style={{ color: slide.color }}
                    />
                    <span
                      className="text-[#374151] text-xs leading-relaxed"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Team */}
        <div
          className="rounded-3xl p-8"
          style={{ background: "#F8FAFC", border: "1px solid #E2E8F0" }}
        >
          <h3
            className="text-[#0F172A] text-center mb-8"
            style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "20px" }}
          >
            👥 Founding Team
          </h3>
          <div className="grid md:grid-cols-3 gap-5">
            {team.map((t) => (
              <div
                key={t.name}
                className="text-center p-6 bg-white rounded-2xl border border-[#E2E8F0] hover:shadow-md transition-all"
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4"
                  style={{ background: "#FFF3F0" }}
                >
                  {t.icon}
                </div>
                <h4
                  className="text-[#0F172A] mb-1"
                  style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "16px" }}
                >
                  {t.name}
                </h4>
                <p
                  className="text-[#FF5722] text-sm mb-2"
                  style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
                >
                  {t.role}
                </p>
                <p
                  className="text-[#64748B] text-xs leading-relaxed"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {t.bg}
                </p>
              </div>
            ))}
          </div>

          {/* Investors & Awards */}
          <div className="mt-8 pt-8 border-t border-[#E2E8F0] text-center">
            <p
              className="text-[#64748B] text-sm mb-4"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
            >
              🏆 Awards & Recognition
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "🥇 Winner IdeaFest 2024",
                "🚀 Top 10 Startup Technopreneur",
                "💡 INDEF Innovation Award",
                "🌟 Forbes 30 Under 30 Nominee",
              ].map((award) => (
                <div
                  key={award}
                  className="px-4 py-2 bg-white rounded-full border border-[#E2E8F0] text-[#374151] text-xs"
                  style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
                >
                  {award}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
