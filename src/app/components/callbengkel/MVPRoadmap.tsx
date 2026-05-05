import { CheckCircle, Circle, Clock } from "lucide-react";

export function MVPRoadmap() {
  const mvpFeatures = [
    { label: "Login/Register (Phone OTP)", priority: "WAJIB" },
    { label: "GPS & Deteksi Lokasi", priority: "WAJIB" },
    { label: "Pilih masalah & jenis kendaraan", priority: "WAJIB" },
    { label: "Matching & tampilkan montir terdekat", priority: "WAJIB" },
    { label: "Accept/reject order (mitra)", priority: "WAJIB" },
    { label: "Tracking montir real-time", priority: "WAJIB" },
    { label: "Chat in-app", priority: "WAJIB" },
    { label: "Estimasi harga otomatis", priority: "WAJIB" },
    { label: "Pembayaran (COD + GoPay/OVO)", priority: "WAJIB" },
    { label: "Rating & review pasca-servis", priority: "WAJIB" },
    { label: "Dashboard mitra (order & pendapatan)", priority: "WAJIB" },
    { label: "Notifikasi push (FCM)", priority: "WAJIB" },
  ];

  const laterFeatures = [
    { label: "AI deteksi kerusakan dari foto/suara", note: "v2.0" },
    { label: "Marketplace sparepart", note: "v2.0" },
    { label: "Membership & langganan", note: "v1.5" },
    { label: "Multi-montir per bengkel", note: "v1.5" },
    { label: "Fleet management B2B", note: "v3.0" },
    { label: "Integrasi asuransi kendaraan", note: "v3.0" },
    { label: "EV charging station finder", note: "v2.5" },
    { label: "Video call diagnosis", note: "v2.0" },
  ];

  const techStack = [
    { layer: "Mobile App", tech: "React Native (iOS + Android)", icon: "📱" },
    { layer: "Web Admin", tech: "React.js + TypeScript", icon: "🖥️" },
    { layer: "Backend API", tech: "Node.js + Express / NestJS", icon: "⚙️" },
    { layer: "Database", tech: "PostgreSQL + Redis (cache)", icon: "🗄️" },
    { layer: "Real-time", tech: "Socket.io + WebSocket", icon: "⚡" },
    { layer: "Maps & GPS", tech: "Google Maps API", icon: "🗺️" },
    { layer: "Payment", tech: "Midtrans / Xendit", icon: "💳" },
    { layer: "Push Notif", tech: "Firebase Cloud Messaging", icon: "🔔" },
    { layer: "Cloud", tech: "AWS / GCP (auto-scaling)", icon: "☁️" },
    { layer: "AI/ML", tech: "TensorFlow + Python", icon: "🤖" },
  ];

  const team = [
    { role: "CEO / Co-Founder", desc: "Produk & strategi bisnis", icon: "👔" },
    { role: "CTO / Co-Founder", desc: "Arsitektur teknis & tim dev", icon: "💻" },
    { role: "Lead Mobile Dev", desc: "React Native iOS + Android", icon: "📱" },
    { role: "Backend Engineer", desc: "API, DB, real-time system", icon: "⚙️" },
    { role: "UI/UX Designer", desc: "Design sistem & user research", icon: "🎨" },
    { role: "Growth / Marketing", desc: "Akuisisi user & mitra", icon: "📈" },
    { role: "Ops / Partnership", desc: "Rekrut & onboard bengkel", icon: "🤝" },
  ];

  const roadmap = [
    {
      month: "Bulan 1",
      phase: "Foundation",
      color: "#FF5722",
      tasks: [
        "Setup tim & infrastruktur teknis",
        "Desain UI/UX semua halaman",
        "Backend API: auth, user, mitra",
        "Integrasi GPS & Google Maps",
        "Database schema & deployment",
      ],
    },
    {
      month: "Bulan 2",
      phase: "Core Features",
      color: "#3B82F6",
      tasks: [
        "Matching algorithm montir-user",
        "Real-time tracking (Socket.io)",
        "In-app chat & notifikasi",
        "Sistem estimasi harga",
        "Integrasi payment gateway",
        "Dashboard mitra basic",
      ],
    },
    {
      month: "Bulan 3",
      phase: "Launch & Iterate",
      color: "#10B981",
      tasks: [
        "Rating & review system",
        "Beta testing 100 user & 20 mitra",
        "Bug fixing & optimization",
        "Onboarding 50+ mitra bengkel",
        "Soft launch di 1 kota (Jakarta)",
        "Monitoring & analytics setup",
      ],
    },
  ];

  return (
    <section className="py-20 md:py-28" style={{ background: "#F8FAFC" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4"
            style={{ background: "#F5F3FF", border: "1px solid #DDD6FE" }}
          >
            <Clock className="w-4 h-4 text-[#7C3AED]" />
            <span
              className="text-xs tracking-wider uppercase"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, color: "#7C3AED" }}
            >
              MVP & Roadmap
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
            Dari Ide ke Produk dalam{" "}
            <span style={{ color: "#FF5722" }}>90 Hari</span>
          </h2>
          <p
            className="text-[#64748B] max-w-xl mx-auto"
            style={{ fontFamily: "Inter, sans-serif", fontSize: "16px", lineHeight: "1.7" }}
          >
            Roadmap MVP yang realistis, terstruktur, dan fokus pada value delivery secepat mungkin.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* MVP Features */}
          <div>
            <h3
              className="text-[#0F172A] mb-4"
              style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "18px" }}
            >
              ✅ Fitur MVP (Harus Ada)
            </h3>
            <div className="space-y-2">
              {mvpFeatures.map((f) => (
                <div
                  key={f.label}
                  className="flex items-center gap-3 p-3 bg-white rounded-xl border border-[#E2E8F0] hover:border-[#10B981]/30 transition-all"
                >
                  <CheckCircle className="w-4 h-4 text-[#10B981] flex-shrink-0" />
                  <span
                    className="text-[#374151] text-sm flex-1"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {f.label}
                  </span>
                  <span
                    className="text-[9px] px-2 py-0.5 rounded-full bg-[#FFF3F0] text-[#FF5722]"
                    style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}
                  >
                    {f.priority}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Later Features + Tech Stack */}
          <div className="space-y-8">
            <div>
              <h3
                className="text-[#0F172A] mb-4"
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "18px" }}
              >
                ⏳ Fitur Bisa Ditunda (v1.5+)
              </h3>
              <div className="space-y-2">
                {laterFeatures.map((f) => (
                  <div
                    key={f.label}
                    className="flex items-center gap-3 p-3 bg-white rounded-xl border border-[#E2E8F0] opacity-70"
                  >
                    <Circle className="w-4 h-4 text-[#94A3B8] flex-shrink-0" />
                    <span
                      className="text-[#64748B] text-sm flex-1"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {f.label}
                    </span>
                    <span
                      className="text-[9px] px-2 py-0.5 rounded-full bg-[#F8FAFC] text-[#64748B]"
                      style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}
                    >
                      {f.note}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Minimum Team */}
            <div>
              <h3
                className="text-[#0F172A] mb-4"
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "18px" }}
              >
                👥 Tim Minimum
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {team.map((t) => (
                  <div
                    key={t.role}
                    className="flex items-center gap-2 p-2.5 bg-white rounded-xl border border-[#E2E8F0]"
                  >
                    <span className="text-lg">{t.icon}</span>
                    <div>
                      <p
                        className="text-[#0F172A] text-xs"
                        style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}
                      >
                        {t.role}
                      </p>
                      <p className="text-[#94A3B8] text-[10px]" style={{ fontFamily: "Inter, sans-serif" }}>
                        {t.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Roadmap Timeline */}
        <div className="mb-12">
          <h3
            className="text-[#0F172A] text-center mb-8"
            style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "20px" }}
          >
            🗓️ Roadmap 3 Bulan Menuju Launch
          </h3>
          <div className="grid md:grid-cols-3 gap-5">
            {roadmap.map((phase) => (
              <div
                key={phase.month}
                className="rounded-2xl overflow-hidden border border-[#E2E8F0] bg-white"
              >
                {/* Header */}
                <div
                  className="px-5 py-4"
                  style={{ background: phase.color }}
                >
                  <p
                    className="text-white/70 text-xs mb-1"
                    style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
                  >
                    {phase.month}
                  </p>
                  <p
                    className="text-white"
                    style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "18px" }}
                  >
                    {phase.phase}
                  </p>
                </div>
                {/* Tasks */}
                <div className="p-4 space-y-2">
                  {phase.tasks.map((task) => (
                    <div key={task} className="flex items-start gap-2">
                      <div
                        className="w-4 h-4 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center"
                        style={{ background: `${phase.color}20`, border: `1px solid ${phase.color}50` }}
                      >
                        <div
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ background: phase.color }}
                        />
                      </div>
                      <span
                        className="text-[#374151] text-xs leading-relaxed"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        {task}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div
          className="rounded-3xl p-8"
          style={{ background: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)" }}
        >
          <h3
            className="text-white mb-6 text-center"
            style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "20px" }}
          >
            🛠️ Tech Stack Rekomendasi
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {techStack.map((t) => (
              <div
                key={t.layer}
                className="p-3 rounded-xl text-center border border-white/10 bg-white/5"
              >
                <div className="text-xl mb-1">{t.icon}</div>
                <p
                  className="text-white/50 text-[9px] mb-1"
                  style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
                >
                  {t.layer}
                </p>
                <p
                  className="text-white text-[10px]"
                  style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
                >
                  {t.tech}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
