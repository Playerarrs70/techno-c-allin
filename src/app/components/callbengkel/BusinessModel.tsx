import { TrendingUp, DollarSign, Layers, Globe } from "lucide-react";

export function BusinessModel() {
  const revenues = [
    {
      icon: "💸",
      title: "Komisi Transaksi",
      percentage: "15-20%",
      desc: "Komisi dari setiap transaksi servis yang selesai. Sumber pendapatan utama yang scalable seiring tumbuhnya volume order.",
      color: "#FF5722",
      bg: "#FFF3F0",
      contribution: "55%",
    },
    {
      icon: "⭐",
      title: "Subscription Mitra Premium",
      percentage: "Rp 99K–299K/bulan",
      desc: "Paket premium untuk bengkel yang ingin fitur lebih: manajemen tim, laporan advanced, prioritas listing, dan API integrasi.",
      color: "#8B5CF6",
      bg: "#F5F3FF",
      contribution: "20%",
    },
    {
      icon: "🎟️",
      title: "User Membership",
      percentage: "Rp 29K–79K/bulan",
      desc: "Membership pengguna: diskon servis 10-20%, prioritas montir, reminder servis gratis, dan garansi harga terendah.",
      color: "#3B82F6",
      bg: "#EFF6FF",
      contribution: "12%",
    },
    {
      icon: "🛒",
      title: "Marketplace Sparepart",
      percentage: "8-12% komisi",
      desc: "Platform jual-beli sparepart dan aksesori kendaraan. Montir bisa order langsung dari app untuk pelanggan.",
      color: "#10B981",
      bg: "#ECFDF5",
      contribution: "8%",
    },
    {
      icon: "📢",
      title: "Iklan & Featured Listing",
      percentage: "CPC / CPM",
      desc: "Slot iklan untuk bengkel resmi, produsen sparepart, dan brand otomotif yang ingin menjangkau pengguna aktif.",
      color: "#F59E0B",
      bg: "#FFFBEB",
      contribution: "5%",
    },
  ];

  const financials = [
    { year: "2025 (MVP)", users: "10K", gmv: "Rp 850JT", revenue: "Rp 127JT", partners: "200" },
    { year: "2026 (Scale)", users: "150K", gmv: "Rp 18M", revenue: "Rp 2.7M", partners: "2.500" },
    { year: "2027 (Expand)", users: "800K", gmv: "Rp 120M", revenue: "Rp 18M", partners: "15.000" },
    { year: "2028 (IPO Ready)", users: "3M", gmv: "Rp 600M", revenue: "Rp 90M", partners: "60.000" },
  ];

  const scalingStrategies = [
    {
      icon: <Globe className="w-5 h-5" />,
      title: "Kota ke Kota",
      desc: "Mulai dari Jakarta, Surabaya, Bandung → ekspansi ke 47 kota Indonesia dalam 3 tahun.",
    },
    {
      icon: <Layers className="w-5 h-5" />,
      title: "Ekspansi Vertikal",
      desc: "Dari kendaraan roda dua & empat → truk, alat berat, kendaraan listrik (EV).",
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Regional Southeast Asia",
      desc: "Replikasi model ke Malaysia, Vietnam, Filipina — pasar dengan masalah serupa.",
    },
    {
      icon: <DollarSign className="w-5 h-5" />,
      title: "B2B Enterprise",
      desc: "Solusi fleet management untuk perusahaan logistik, ojol, dan rental kendaraan.",
    },
  ];

  return (
    <section id="bisnis" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4"
            style={{ background: "#ECFDF5", border: "1px solid #A7F3D0" }}
          >
            <DollarSign className="w-4 h-4 text-[#059669]" />
            <span
              className="text-xs tracking-wider uppercase"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, color: "#059669" }}
            >
              Business Model
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
            Model Bisnis yang{" "}
            <span style={{ color: "#FF5722" }}>Kuat & Berkelanjutan</span>
          </h2>
          <p
            className="text-[#64748B] max-w-xl mx-auto"
            style={{ fontFamily: "Inter, sans-serif", fontSize: "16px", lineHeight: "1.7" }}
          >
            5 sumber pendapatan terdiversifikasi dengan unit economics yang sehat sejak hari pertama.
          </p>
        </div>

        {/* Revenue Streams */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {revenues.map((rev) => (
            <div
              key={rev.title}
              className="p-5 rounded-2xl border border-[#E2E8F0] hover:shadow-lg transition-all group"
            >
              <div className="flex items-start justify-between mb-3">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-xl"
                  style={{ background: rev.bg }}
                >
                  {rev.icon}
                </div>
                <div
                  className="text-xs px-2 py-1 rounded-full"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 700,
                    background: rev.bg,
                    color: rev.color,
                  }}
                >
                  {rev.contribution} kontribusi
                </div>
              </div>
              <h4
                className="text-[#0F172A] mb-1"
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "14px" }}
              >
                {rev.title}
              </h4>
              <div
                className="text-sm mb-2"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, color: rev.color }}
              >
                {rev.percentage}
              </div>
              <p
                className="text-[#64748B] text-xs leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {rev.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Financial Projections */}
        <div
          className="rounded-3xl p-8 mb-12"
          style={{ background: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)" }}
        >
          <h3
            className="text-white mb-2 text-center"
            style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "20px" }}
          >
            📊 Proyeksi Pertumbuhan
          </h3>
          <p
            className="text-white/50 text-sm text-center mb-8"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Target realistis berbasis growth rate platform serupa di Asia Tenggara
          </p>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px]">
              <thead>
                <tr>
                  <th
                    className="text-left text-white/50 text-xs pb-3 pr-4"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Tahun
                  </th>
                  <th
                    className="text-center text-white/50 text-xs pb-3 px-2"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Pengguna Aktif
                  </th>
                  <th
                    className="text-center text-white/50 text-xs pb-3 px-2"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    GMV
                  </th>
                  <th
                    className="text-center text-white/50 text-xs pb-3 px-2"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Revenue
                  </th>
                  <th
                    className="text-center text-white/50 text-xs pb-3 px-2"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Mitra Bengkel
                  </th>
                </tr>
              </thead>
              <tbody>
                {financials.map((f, idx) => (
                  <tr key={f.year} className="border-t border-white/5">
                    <td className="py-3 pr-4">
                      <span
                        className="text-white text-sm"
                        style={{ fontFamily: "Poppins, sans-serif", fontWeight: idx === 3 ? 800 : 600 }}
                      >
                        {f.year}
                      </span>
                    </td>
                    <td className="py-3 px-2 text-center">
                      <span
                        className="text-[#FF5722] text-sm"
                        style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
                      >
                        {f.users}
                      </span>
                    </td>
                    <td className="py-3 px-2 text-center">
                      <span
                        className="text-white/80 text-sm"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        {f.gmv}
                      </span>
                    </td>
                    <td className="py-3 px-2 text-center">
                      <span
                        className="text-[#10B981] text-sm"
                        style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
                      >
                        {f.revenue}
                      </span>
                    </td>
                    <td className="py-3 px-2 text-center">
                      <span
                        className="text-white/70 text-sm"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        {f.partners}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Scaling Strategy */}
        <div>
          <h3
            className="text-[#0F172A] text-center mb-8"
            style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "20px" }}
          >
            Strategi Scaling
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {scalingStrategies.map((s) => (
              <div
                key={s.title}
                className="p-5 rounded-2xl border border-[#E2E8F0] text-center hover:border-[#FF5722]/30 hover:shadow-md transition-all"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3 text-[#FF5722]"
                  style={{ background: "#FFF3F0" }}
                >
                  {s.icon}
                </div>
                <h4
                  className="text-[#0F172A] mb-2"
                  style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "13px" }}
                >
                  {s.title}
                </h4>
                <p
                  className="text-[#64748B] text-xs leading-relaxed"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
