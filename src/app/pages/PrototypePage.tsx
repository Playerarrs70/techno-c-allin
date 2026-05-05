import { useState } from "react";
import { Link } from "react-router";
import {
  ArrowLeft, MapPin, ChevronLeft, ChevronRight, Star,
  MessageCircle, Phone, CreditCard, Clock, CheckCircle,
  Zap, Home, Map, ClipboardList, User, Bell
} from "lucide-react";

type Screen = "splash" | "login" | "home" | "booking" | "tracking" | "payment" | "review" | "history";

const SCREENS: Screen[] = ["splash", "login", "home", "booking", "tracking", "payment", "review", "history"];

const SCREEN_LABELS: Record<Screen, string> = {
  splash: "Splash Screen",
  login: "Login / Register",
  home: "Home",
  booking: "Booking Detail",
  tracking: "Real-time Tracking",
  payment: "Pembayaran",
  review: "Rating & Review",
  history: "Riwayat Servis",
};

function SplashScreen() {
  return (
    <div
      className="flex flex-col items-center justify-center h-full"
      style={{ background: "linear-gradient(145deg, #0F172A, #1E293B)" }}
    >
      <div
        className="w-20 h-20 rounded-3xl flex items-center justify-center mb-4 shadow-2xl"
        style={{
          background: "linear-gradient(135deg, #FF5722, #FF8A50)",
          boxShadow: "0 0 40px rgba(255,87,34,0.5)",
        }}
      >
        <span className="text-4xl">🔧</span>
      </div>
      <h1 className="text-white text-2xl mb-1" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800 }}>
        Call<span style={{ color: "#FF5722" }}>Bengkel</span>
      </h1>
      <p className="text-white/40 text-xs mb-12" style={{ fontFamily: "Inter, sans-serif" }}>
        Emergency Auto Service
      </p>
      <div className="w-48 h-1 rounded-full bg-white/10 overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{
            width: "70%",
            background: "linear-gradient(90deg, #FF5722, #FF8A50)",
            animation: "pulse 1.5s infinite",
          }}
        />
      </div>
      <p className="text-white/30 text-xs mt-4" style={{ fontFamily: "Inter, sans-serif" }}>
        Memuat...
      </p>
    </div>
  );
}

function LoginScreen() {
  return (
    <div className="h-full" style={{ background: "#0F172A" }}>
      <div className="relative h-48 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, #FF5722 0%, #FF8A50 100%)" }}
        />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle at 30% 50%, rgba(255,255,255,0.3) 0%, transparent 60%)",
          }}
        />
        <div className="relative flex flex-col items-center justify-center h-full">
          <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-2">
            <span className="text-3xl">🔧</span>
          </div>
          <h2 className="text-white text-xl" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800 }}>
            CallBengkel
          </h2>
          <p className="text-white/70 text-xs" style={{ fontFamily: "Inter, sans-serif" }}>
            Selamat Datang!
          </p>
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-white mb-1" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "16px" }}>
          Masuk ke Akun
        </h3>
        <p className="text-white/40 text-xs mb-5" style={{ fontFamily: "Inter, sans-serif" }}>
          Masuk dengan nomor HP Anda
        </p>

        <div className="mb-3">
          <label className="text-white/50 text-xs mb-1 block" style={{ fontFamily: "Inter, sans-serif" }}>
            Nomor HP
          </label>
          <div className="flex gap-2">
            <div className="bg-white/10 border border-white/20 rounded-xl px-3 py-2.5 text-white text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
              🇮🇩 +62
            </div>
            <div className="flex-1 bg-white/10 border border-white/20 rounded-xl px-3 py-2.5 text-white/50 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
              8xx-xxxx-xxxx
            </div>
          </div>
        </div>

        <button
          className="w-full py-3 rounded-xl text-white text-sm mb-3"
          style={{
            background: "linear-gradient(135deg, #FF5722, #FF8A50)",
            fontFamily: "Inter, sans-serif",
            fontWeight: 700,
          }}
        >
          Kirim Kode OTP
        </button>

        <div className="flex items-center gap-2 mb-3">
          <div className="flex-1 h-px bg-white/10" />
          <span className="text-white/30 text-xs" style={{ fontFamily: "Inter, sans-serif" }}>atau</span>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        <button className="w-full py-3 rounded-xl border border-white/20 text-white text-sm flex items-center justify-center gap-2" style={{ fontFamily: "Inter, sans-serif" }}>
          <span className="text-lg">🔍</span>
          Masuk dengan Google
        </button>

        <p className="text-center text-white/30 text-[10px] mt-4" style={{ fontFamily: "Inter, sans-serif" }}>
          Dengan masuk, Anda menyetujui{" "}
          <span className="text-[#FF5722]">Syarat & Ketentuan</span>
        </p>
      </div>
    </div>
  );
}

function HomeScreen() {
  return (
    <div className="h-full flex flex-col" style={{ background: "#0F172A" }}>
      {/* Header */}
      <div className="px-4 pt-3 pb-3">
        <div className="flex items-center justify-between mb-2">
          <div>
            <p className="text-white/40 text-[10px]" style={{ fontFamily: "Inter, sans-serif" }}>Selamat pagi,</p>
            <p className="text-white text-sm" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}>Ahmad Fauzi 👋</p>
          </div>
          <div className="relative">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
              <Bell className="w-4 h-4 text-white/60" />
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#FF5722] rounded-full text-[7px] text-white flex items-center justify-center">2</div>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-xl px-3 py-2">
          <MapPin className="w-3 h-3 text-[#FF5722]" />
          <span className="text-white/70 text-xs flex-1" style={{ fontFamily: "Inter, sans-serif" }}>Jl. Sudirman No. 23, Jakarta Pusat</span>
          <span className="text-white/40 text-[10px]" style={{ fontFamily: "Inter, sans-serif" }}>Ubah</span>
        </div>
      </div>

      {/* SOS Button Area */}
      <div className="flex flex-col items-center py-4 px-4">
        <div
          className="w-28 h-28 rounded-full flex items-center justify-center mb-2 cursor-pointer"
          style={{
            background: "radial-gradient(circle, #FF5722 0%, #C62400 100%)",
            boxShadow: "0 0 0 8px rgba(255,87,34,0.15), 0 0 0 16px rgba(255,87,34,0.06), 0 0 30px rgba(255,87,34,0.4)",
          }}
        >
          <div className="text-center">
            <div className="text-2xl">🆘</div>
            <div className="text-white text-xs mt-0.5" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800 }}>DARURAT</div>
          </div>
        </div>
        <p className="text-white/40 text-[9px]" style={{ fontFamily: "Inter, sans-serif" }}>Tekan tombol untuk panggil bantuan</p>
      </div>

      {/* Quick Issues */}
      <div className="px-4 mb-3">
        <p className="text-white/50 text-[10px] mb-2" style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}>MASALAH KENDARAAN</p>
        <div className="grid grid-cols-3 gap-1.5">
          {[
            { emoji: "🔋", label: "Aki Soak" },
            { emoji: "🛞", label: "Ban Bocor" },
            { emoji: "⚙️", label: "Mesin Mati" },
            { emoji: "⛽", label: "Habis BBM" },
            { emoji: "🔑", label: "Kunci Hilang" },
            { emoji: "🔧", label: "Servis Lain" },
          ].map((issue) => (
            <div
              key={issue.label}
              className="bg-white/5 border border-white/10 rounded-xl p-2 text-center cursor-pointer hover:border-[#FF5722]/50 active:scale-95 transition-all"
            >
              <div className="text-lg">{issue.emoji}</div>
              <div className="text-white/50 text-[8px] mt-0.5" style={{ fontFamily: "Inter, sans-serif" }}>{issue.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Nearby Mechanics */}
      <div className="px-4 flex-1">
        <p className="text-white/50 text-[10px] mb-2" style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}>MONTIR TERDEKAT</p>
        <div className="space-y-2">
          {[
            { name: "Budi Santoso", dist: "0.8 km", eta: "8 min", rating: "4.9", price: "Rp 50-120K", online: true },
            { name: "Rudi Hartono", dist: "1.2 km", eta: "12 min", rating: "4.8", price: "Rp 45-100K", online: true },
          ].map((m) => (
            <div
              key={m.name}
              className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl p-2.5"
            >
              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#FF5722] to-[#FF8A50] flex items-center justify-center text-sm">👨‍🔧</div>
                {m.online && <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-[#10B981] rounded-full border border-[#0F172A]" />}
              </div>
              <div className="flex-1">
                <p className="text-white text-xs" style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}>{m.name}</p>
                <p className="text-white/40 text-[9px]" style={{ fontFamily: "Inter, sans-serif" }}>
                  ⭐ {m.rating} • {m.dist} • ~{m.eta}
                </p>
              </div>
              <div className="text-right">
                <p className="text-[#FF5722] text-[9px]" style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}>{m.price}</p>
                <button className="text-[8px] bg-[#FF5722] text-white px-2 py-0.5 rounded-lg mt-0.5" style={{ fontFamily: "Inter, sans-serif" }}>Panggil</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="flex justify-around py-3 px-4 border-t border-white/10 mt-2">
        {[
          { icon: <Home className="w-4 h-4" />, label: "Beranda", active: true },
          { icon: <Map className="w-4 h-4" />, label: "Peta", active: false },
          { icon: <ClipboardList className="w-4 h-4" />, label: "Riwayat", active: false },
          { icon: <User className="w-4 h-4" />, label: "Profil", active: false },
        ].map((nav) => (
          <div key={nav.label} className={`flex flex-col items-center gap-0.5 cursor-pointer ${nav.active ? "text-[#FF5722]" : "text-white/30"}`}>
            {nav.icon}
            <span className="text-[8px]" style={{ fontFamily: "Inter, sans-serif" }}>{nav.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function BookingScreen() {
  return (
    <div className="h-full flex flex-col" style={{ background: "#F8FAFC" }}>
      {/* Header */}
      <div className="px-4 pt-3 pb-3 bg-white border-b border-[#E2E8F0]">
        <div className="flex items-center gap-2 mb-1">
          <ChevronLeft className="w-5 h-5 text-[#64748B]" />
          <p className="text-[#0F172A] text-sm" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}>Detail Booking</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
        {/* Mechanic Card */}
        <div className="bg-white rounded-2xl border border-[#E2E8F0] p-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FF5722] to-[#FF8A50] flex items-center justify-center text-xl">👨‍🔧</div>
            <div className="flex-1">
              <p className="text-[#0F172A] text-sm" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}>Budi Santoso</p>
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map(s=><Star key={s} className="w-3 h-3 text-[#F59E0B]" fill="#F59E0B" />)}
                </div>
                <span className="text-[#64748B] text-[10px]" style={{ fontFamily: "Inter, sans-serif" }}>4.9 (127 ulasan)</span>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="w-8 h-8 rounded-full bg-[#EFF6FF] flex items-center justify-center">
                <MessageCircle className="w-4 h-4 text-[#3B82F6]" />
              </div>
              <div className="w-8 h-8 rounded-full bg-[#ECFDF5] flex items-center justify-center">
                <Phone className="w-4 h-4 text-[#10B981]" />
              </div>
            </div>
          </div>
          <div className="flex gap-2 text-[10px]">
            <span className="bg-[#ECFDF5] text-[#059669] px-2 py-1 rounded-full" style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}>✓ Terverifikasi</span>
            <span className="bg-[#EFF6FF] text-[#3B82F6] px-2 py-1 rounded-full" style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}>0.8 km</span>
            <span className="bg-[#FFF3F0] text-[#FF5722] px-2 py-1 rounded-full" style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}>~8 menit</span>
          </div>
        </div>

        {/* Order Detail */}
        <div className="bg-white rounded-2xl border border-[#E2E8F0] p-4">
          <p className="text-[#0F172A] text-xs mb-3" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}>Detail Masalah</p>
          <div className="space-y-2">
            {[
              { label: "Kendaraan", value: "Honda Beat 2022 (Hitam)" },
              { label: "Masalah", value: "🔋 Aki Soak" },
              { label: "Lokasi", value: "Jl. Sudirman No. 23, Jakarta" },
            ].map(item => (
              <div key={item.label} className="flex justify-between">
                <span className="text-[#64748B] text-[11px]" style={{ fontFamily: "Inter, sans-serif" }}>{item.label}</span>
                <span className="text-[#0F172A] text-[11px]" style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Price Estimation */}
        <div className="bg-white rounded-2xl border border-[#E2E8F0] p-4">
          <p className="text-[#0F172A] text-xs mb-3" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}>Estimasi Biaya</p>
          <div className="space-y-2">
            {[
              { label: "Jasa servis", value: "Rp 50.000" },
              { label: "Aki baru (estimasi)", value: "Rp 250.000 - 400.000" },
              { label: "Biaya jarak", value: "Rp 5.000" },
            ].map(item => (
              <div key={item.label} className="flex justify-between">
                <span className="text-[#64748B] text-[11px]" style={{ fontFamily: "Inter, sans-serif" }}>{item.label}</span>
                <span className="text-[#0F172A] text-[11px]" style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}>{item.value}</span>
              </div>
            ))}
            <div className="border-t border-[#E2E8F0] pt-2 flex justify-between">
              <span className="text-[#0F172A] text-xs" style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}>Total Estimasi</span>
              <span className="text-[#FF5722] text-xs" style={{ fontFamily: "Inter, sans-serif", fontWeight: 800 }}>Rp 305K - 455K</span>
            </div>
          </div>
          <p className="text-[#94A3B8] text-[9px] mt-2" style={{ fontFamily: "Inter, sans-serif" }}>
            *Harga final setelah diagnosis. Tidak ada biaya tersembunyi.
          </p>
        </div>
      </div>

      <div className="px-4 pb-4 pt-2 bg-white border-t border-[#E2E8F0]">
        <button
          className="w-full py-3.5 text-white rounded-xl text-sm"
          style={{
            background: "linear-gradient(135deg, #FF5722, #FF8A50)",
            fontFamily: "Inter, sans-serif",
            fontWeight: 700,
          }}
        >
          ✓ Konfirmasi Panggil Montir
        </button>
      </div>
    </div>
  );
}

function TrackingScreen() {
  return (
    <div className="h-full flex flex-col" style={{ background: "#F8FAFC" }}>
      {/* Map Area (Simulated) */}
      <div
        className="flex-1 relative overflow-hidden"
        style={{
          background: "linear-gradient(145deg, #E8F0FE 0%, #D4E6FF 50%, #E8F5E9 100%)",
        }}
      >
        {/* Grid pattern for map effect */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "linear-gradient(#4a9eff20 1px, transparent 1px), linear-gradient(90deg, #4a9eff20 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />

        {/* Road simulation */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full h-full">
            {/* Road */}
            <div
              className="absolute"
              style={{
                top: "50%",
                left: 0,
                right: 0,
                height: "32px",
                background: "#94A3B8",
                transform: "translateY(-50%)",
              }}
            />
            <div
              className="absolute"
              style={{
                top: 0,
                bottom: 0,
                left: "35%",
                width: "28px",
                background: "#94A3B8",
              }}
            />

            {/* User Location Pin */}
            <div className="absolute" style={{ bottom: "30%", left: "33%" }}>
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-[#3B82F6] border-2 border-white shadow-lg flex items-center justify-center text-sm">📍</div>
                <div className="bg-white text-[#0F172A] text-[8px] px-1.5 py-0.5 rounded-lg shadow mt-1 whitespace-nowrap" style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}>
                  Lokasi Anda
                </div>
              </div>
            </div>

            {/* Mechanic Location Pin */}
            <div className="absolute" style={{ top: "25%", left: "55%" }}>
              <div className="flex flex-col items-center">
                <div
                  className="w-10 h-10 rounded-full border-2 border-[#FF5722] shadow-lg flex items-center justify-center text-base"
                  style={{ background: "linear-gradient(135deg, #FF5722, #FF8A50)" }}
                >
                  🏍️
                </div>
                <div className="bg-[#FF5722] text-white text-[8px] px-1.5 py-0.5 rounded-lg shadow mt-1 whitespace-nowrap" style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}>
                  Budi • ~4 min
                </div>
              </div>
            </div>

            {/* Route line */}
            <svg className="absolute inset-0 w-full h-full" style={{ overflow: "visible" }}>
              <path
                d="M 150 200 L 150 140 L 215 140"
                stroke="#FF5722"
                strokeWidth="3"
                strokeDasharray="6,4"
                fill="none"
                opacity="0.7"
              />
            </svg>
          </div>
        </div>

        {/* ETA Badge */}
        <div
          className="absolute top-3 left-3 right-3 bg-white rounded-2xl shadow-lg p-3"
          style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.12)" }}
        >
          <div className="flex items-center gap-2">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-sm"
              style={{ background: "linear-gradient(135deg, #FF5722, #FF8A50)" }}
            >
              👨‍🔧
            </div>
            <div className="flex-1">
              <p className="text-[#0F172A] text-xs" style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}>Budi Santoso dalam perjalanan</p>
              <p className="text-[#64748B] text-[10px]" style={{ fontFamily: "Inter, sans-serif" }}>⭐ 4.9 • Honda PCX merah</p>
            </div>
            <div className="text-right">
              <p className="text-[#FF5722] text-sm" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800 }}>4 min</p>
              <p className="text-[#94A3B8] text-[9px]" style={{ fontFamily: "Inter, sans-serif" }}>estimasi</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Panel */}
      <div className="bg-white rounded-t-3xl shadow-xl px-4 pt-4 pb-4">
        {/* Steps */}
        <div className="flex justify-between mb-4">
          {[
            { icon: "✓", label: "Order", done: true },
            { icon: "🏍️", label: "Menuju", active: true },
            { icon: "🔧", label: "Servis", done: false },
            { icon: "✅", label: "Selesai", done: false },
          ].map((step, idx) => (
            <div key={step.label} className="flex items-center">
              <div className="flex flex-col items-center">
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-[11px] ${
                    step.done ? "bg-[#10B981] text-white" :
                    step.active ? "bg-[#FF5722] text-white" :
                    "bg-[#F1F5F9] text-[#94A3B8]"
                  }`}
                >
                  {step.icon}
                </div>
                <span className="text-[9px] mt-1 text-[#64748B]" style={{ fontFamily: "Inter, sans-serif" }}>{step.label}</span>
              </div>
              {idx < 3 && <div className={`w-8 h-px mb-4 mx-1 ${step.done ? "bg-[#10B981]" : "bg-[#E2E8F0]"}`} />}
            </div>
          ))}
        </div>

        <div className="flex gap-2">
          <button className="flex-1 py-2.5 bg-[#EFF6FF] text-[#3B82F6] rounded-xl text-xs flex items-center justify-center gap-1.5" style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}>
            <MessageCircle className="w-3.5 h-3.5" /> Chat
          </button>
          <button className="flex-1 py-2.5 bg-[#ECFDF5] text-[#10B981] rounded-xl text-xs flex items-center justify-center gap-1.5" style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}>
            <Phone className="w-3.5 h-3.5" /> Telepon
          </button>
          <button className="flex-1 py-2.5 bg-[#FEF2F2] text-[#EF4444] rounded-xl text-xs flex items-center justify-center gap-1.5" style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}>
            ✕ Batal
          </button>
        </div>
      </div>
    </div>
  );
}

function PaymentScreen() {
  return (
    <div className="h-full flex flex-col" style={{ background: "#F8FAFC" }}>
      <div className="px-4 pt-3 pb-3 bg-white border-b border-[#E2E8F0]">
        <div className="flex items-center gap-2">
          <ChevronLeft className="w-5 h-5 text-[#64748B]" />
          <p className="text-[#0F172A] text-sm" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}>Pembayaran</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
        {/* Summary */}
        <div className="bg-white rounded-2xl border border-[#E2E8F0] p-4">
          <p className="text-[#0F172A] text-xs mb-3" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}>Ringkasan Servis</p>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-xl bg-[#FFF3F0] flex items-center justify-center text-base">🔋</div>
            <div>
              <p className="text-[#0F172A] text-xs" style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}>Servis Aki Soak</p>
              <p className="text-[#64748B] text-[10px]" style={{ fontFamily: "Inter, sans-serif" }}>Honda Beat • Budi Santoso</p>
            </div>
            <CheckCircle className="ml-auto w-4 h-4 text-[#10B981]" />
          </div>
          <div className="space-y-1.5">
            {[
              ["Jasa servis", "Rp 50.000"],
              ["Aki GS Astra 5Ah", "Rp 275.000"],
              ["Biaya jarak (0.8km)", "Rp 5.000"],
              ["Platform fee", "Rp 2.000"],
            ].map(([label, val]) => (
              <div key={label} className="flex justify-between">
                <span className="text-[#64748B] text-[10px]" style={{ fontFamily: "Inter, sans-serif" }}>{label}</span>
                <span className="text-[#0F172A] text-[10px]" style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}>{val}</span>
              </div>
            ))}
            <div className="border-t border-[#E2E8F0] pt-2 flex justify-between">
              <span className="text-[#0F172A] text-xs" style={{ fontFamily: "Inter, sans-serif", fontWeight: 800 }}>Total</span>
              <span className="text-[#FF5722] text-sm" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800 }}>Rp 332.000</span>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="bg-white rounded-2xl border border-[#E2E8F0] p-4">
          <p className="text-[#0F172A] text-xs mb-3" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}>Metode Pembayaran</p>
          {[
            { icon: "💚", name: "GoPay", bal: "Rp 450.000", active: true },
            { icon: "💜", name: "OVO", bal: "Rp 120.000", active: false },
            { icon: "💛", name: "DANA", bal: "Rp 85.000", active: false },
            { icon: "💵", name: "Tunai", bal: "", active: false },
          ].map(m => (
            <div
              key={m.name}
              className={`flex items-center gap-2.5 p-2.5 rounded-xl mb-1.5 cursor-pointer border ${
                m.active ? "border-[#FF5722] bg-[#FFF3F0]" : "border-transparent hover:bg-[#F8FAFC]"
              }`}
            >
              <div className="text-lg">{m.icon}</div>
              <div className="flex-1">
                <p className="text-[#0F172A] text-xs" style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}>{m.name}</p>
                {m.bal && <p className="text-[#64748B] text-[10px]" style={{ fontFamily: "Inter, sans-serif" }}>{m.bal}</p>}
              </div>
              <div className={`w-4 h-4 rounded-full border-2 ${m.active ? "border-[#FF5722] bg-[#FF5722]" : "border-[#CBD5E1]"}`}>
                {m.active && <div className="w-full h-full rounded-full flex items-center justify-center"><div className="w-1.5 h-1.5 bg-white rounded-full" /></div>}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="px-4 pb-4 pt-2 bg-white border-t border-[#E2E8F0]">
        <button
          className="w-full py-3.5 text-white rounded-xl text-sm flex items-center justify-center gap-2"
          style={{
            background: "linear-gradient(135deg, #FF5722, #FF8A50)",
            fontFamily: "Inter, sans-serif",
            fontWeight: 700,
          }}
        >
          <CreditCard className="w-4 h-4" />
          Bayar Rp 332.000
        </button>
      </div>
    </div>
  );
}

function ReviewScreen() {
  return (
    <div className="h-full flex flex-col" style={{ background: "#F8FAFC" }}>
      <div className="px-4 pt-3 pb-3 bg-white border-b border-[#E2E8F0]">
        <p className="text-[#0F172A] text-sm text-center" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}>
          Servis Selesai! ✅
        </p>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-4">
        {/* Success Badge */}
        <div className="text-center mb-6">
          <div className="w-20 h-20 rounded-full bg-[#ECFDF5] flex items-center justify-center mx-auto mb-3">
            <CheckCircle className="w-10 h-10 text-[#10B981]" />
          </div>
          <p className="text-[#0F172A] text-base" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800 }}>
            Pembayaran Berhasil!
          </p>
          <p className="text-[#64748B] text-xs mt-1" style={{ fontFamily: "Inter, sans-serif" }}>
            Kendaraan Anda sudah siap jalan lagi 🎉
          </p>
        </div>

        {/* Mechanic Review */}
        <div className="bg-white rounded-2xl border border-[#E2E8F0] p-4 mb-3">
          <p className="text-[#0F172A] text-xs mb-4 text-center" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}>
            Beri Rating untuk Budi Santoso
          </p>

          <div className="flex flex-col items-center">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FF5722] to-[#FF8A50] flex items-center justify-center text-2xl mb-2">
              👨‍🔧
            </div>
            <p className="text-[#0F172A] text-sm mb-3" style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}>Budi Santoso</p>

            <div className="flex gap-2 mb-4">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-8 h-8 text-[#F59E0B] cursor-pointer" fill="#F59E0B" />
              ))}
            </div>

            <div className="flex flex-wrap gap-1.5 mb-3 justify-center">
              {["Cepat!", "Ramah", "Profesional", "Harga Sesuai", "Bersih"].map(tag => (
                <span
                  key={tag}
                  className="bg-[#FFF3F0] text-[#FF5722] border border-[#FFD5CC] text-[10px] px-2.5 py-1 rounded-full cursor-pointer"
                  style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <textarea
              className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-3 py-2 text-[#0F172A] text-xs resize-none"
              placeholder="Tambahkan komentar (opsional)..."
              rows={2}
              style={{ fontFamily: "Inter, sans-serif" }}
              readOnly
            />
          </div>
        </div>

        {/* Receipt Summary */}
        <div className="bg-[#ECFDF5] border border-[#A7F3D0] rounded-xl p-3 text-center">
          <p className="text-[#059669] text-xs" style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}>
            Bukti servis dikirim ke email & WhatsApp ✓
          </p>
        </div>
      </div>

      <div className="px-4 pb-4 pt-2 bg-white border-t border-[#E2E8F0]">
        <button
          className="w-full py-3 text-white rounded-xl text-sm"
          style={{
            background: "linear-gradient(135deg, #FF5722, #FF8A50)",
            fontFamily: "Inter, sans-serif",
            fontWeight: 700,
          }}
        >
          Kirim Review & Selesai
        </button>
      </div>
    </div>
  );
}

function HistoryScreen() {
  const orders = [
    { date: "2 Mei 2025", issue: "Ban Bocor", mechanic: "Rudi H.", price: "Rp 75.000", status: "Selesai", rating: 5, icon: "🛞" },
    { date: "18 Apr 2025", issue: "Aki Soak", mechanic: "Budi S.", price: "Rp 332.000", status: "Selesai", rating: 5, icon: "🔋" },
    { date: "5 Mar 2025", issue: "Servis Rutin", mechanic: "Agus W.", price: "Rp 150.000", status: "Selesai", rating: 4, icon: "🔧" },
    { date: "22 Jan 2025", issue: "Mesin Mati", mechanic: "Hendra K.", price: "Rp 280.000", status: "Selesai", rating: 5, icon: "⚙️" },
  ];

  return (
    <div className="h-full flex flex-col" style={{ background: "#F8FAFC" }}>
      <div className="px-4 pt-3 pb-3 bg-white border-b border-[#E2E8F0]">
        <p className="text-[#0F172A] text-sm" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}>Riwayat Servis</p>
      </div>

      {/* Stats */}
      <div className="px-4 py-3 bg-white">
        <div className="grid grid-cols-3 gap-2">
          {[
            { val: "12", label: "Total Servis" },
            { val: "4.8★", label: "Avg Rating" },
            { val: "Rp 1.4JT", label: "Total Dihemat" },
          ].map(s => (
            <div key={s.label} className="text-center bg-[#F8FAFC] rounded-xl py-2">
              <p className="text-[#FF5722] text-sm" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800 }}>{s.val}</p>
              <p className="text-[#94A3B8] text-[9px]" style={{ fontFamily: "Inter, sans-serif" }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-2">
        {orders.map((order) => (
          <div key={order.date} className="bg-white rounded-2xl border border-[#E2E8F0] p-3">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-[#FFF3F0] flex items-center justify-center text-xl flex-shrink-0">
                {order.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-[#0F172A] text-xs" style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}>{order.issue}</p>
                    <p className="text-[#64748B] text-[10px]" style={{ fontFamily: "Inter, sans-serif" }}>{order.mechanic} • {order.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[#FF5722] text-xs" style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}>{order.price}</p>
                    <div className="flex gap-0.5 justify-end mt-0.5">
                      {Array.from({ length: order.rating }).map((_, i) => (
                        <Star key={i} className="w-2.5 h-2.5 text-[#F59E0B]" fill="#F59E0B" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Nav */}
      <div className="flex justify-around py-3 px-4 border-t border-[#E2E8F0] bg-white">
        {[
          { icon: <Home className="w-4 h-4" />, label: "Beranda", active: false },
          { icon: <Map className="w-4 h-4" />, label: "Peta", active: false },
          { icon: <ClipboardList className="w-4 h-4" />, label: "Riwayat", active: true },
          { icon: <User className="w-4 h-4" />, label: "Profil", active: false },
        ].map((nav) => (
          <div key={nav.label} className={`flex flex-col items-center gap-0.5 cursor-pointer ${nav.active ? "text-[#FF5722]" : "text-[#94A3B8]"}`}>
            {nav.icon}
            <span className="text-[8px]" style={{ fontFamily: "Inter, sans-serif" }}>{nav.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const SCREEN_COMPONENTS: Record<Screen, () => JSX.Element> = {
  splash: SplashScreen,
  login: LoginScreen,
  home: HomeScreen,
  booking: BookingScreen,
  tracking: TrackingScreen,
  payment: PaymentScreen,
  review: ReviewScreen,
  history: HistoryScreen,
};

export function PrototypePage() {
  const [currentIdx, setCurrentIdx] = useState(2);

  const currentScreen = SCREENS[currentIdx];
  const ScreenComponent = SCREEN_COMPONENTS[currentScreen];

  const prev = () => setCurrentIdx((i) => Math.max(0, i - 1));
  const next = () => setCurrentIdx((i) => Math.min(SCREENS.length - 1, i + 1));

  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)" }}>
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        {/* Header */}
        <div className="text-center mb-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white/80 text-sm mb-6 transition-colors"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Landing Page
          </Link>
          <h1
            className="text-white mb-3"
            style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "clamp(1.8rem, 4vw, 2.5rem)" }}
          >
            📱 App Prototype
          </h1>
          <p
            className="text-white/50 max-w-lg mx-auto"
            style={{ fontFamily: "Inter, sans-serif", fontSize: "15px" }}
          >
            Jelajahi semua layar aplikasi CallBengkel — dari splash screen hingga review pasca-servis.
          </p>
        </div>

        {/* Screen Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {SCREENS.map((screen, idx) => (
            <button
              key={screen}
              onClick={() => setCurrentIdx(idx)}
              className={`px-3 py-1.5 rounded-xl text-xs transition-all ${
                idx === currentIdx
                  ? "bg-[#FF5722] text-white shadow-lg"
                  : "bg-white/10 text-white/60 hover:bg-white/15 hover:text-white"
              }`}
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
            >
              {SCREEN_LABELS[screen]}
            </button>
          ))}
        </div>

        {/* Phone Mockup + Navigation */}
        <div className="flex items-center justify-center gap-6 md:gap-10">
          {/* Prev Button */}
          <button
            onClick={prev}
            disabled={currentIdx === 0}
            className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all disabled:opacity-20 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Phone Frame */}
          <div className="flex flex-col items-center">
            <div
              className="relative rounded-[44px] overflow-hidden shadow-2xl border-4 border-white/10"
              style={{
                width: "290px",
                height: "580px",
                background: "#0F172A",
                boxShadow: "0 40px 100px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.05), inset 0 1px 0 rgba(255,255,255,0.1)",
              }}
            >
              {/* Status bar */}
              <div className="bg-[#0F172A] px-6 pt-3 pb-1.5 flex justify-between items-center flex-shrink-0">
                <span className="text-white/50 text-[10px]" style={{ fontFamily: "Inter, sans-serif" }}>9:41</span>
                <div className="w-16 h-4 bg-black rounded-full" />
                <div className="flex items-center gap-1 text-white/50">
                  <span className="text-[9px]">5G</span>
                  <div className="w-3.5 h-2 border border-white/40 rounded-sm relative">
                    <div className="absolute left-0.5 top-0.5 bottom-0.5 right-1 bg-white/40 rounded-sm" />
                  </div>
                </div>
              </div>

              {/* Screen Content */}
              <div className="flex-1 overflow-hidden" style={{ height: "520px" }}>
                <ScreenComponent />
              </div>
            </div>

            {/* Screen Label */}
            <div className="mt-4 text-center">
              <p
                className="text-white"
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "15px" }}
              >
                {SCREEN_LABELS[currentScreen]}
              </p>
              <p className="text-white/40 text-xs mt-1" style={{ fontFamily: "Inter, sans-serif" }}>
                {currentIdx + 1} / {SCREENS.length}
              </p>
            </div>

            {/* Dots */}
            <div className="flex gap-1.5 mt-3">
              {SCREENS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIdx(idx)}
                  className={`h-1.5 rounded-full transition-all ${
                    idx === currentIdx ? "w-6 bg-[#FF5722]" : "w-1.5 bg-white/20"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={next}
            disabled={currentIdx === SCREENS.length - 1}
            className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all disabled:opacity-20 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Design Notes */}
        <div className="mt-16 max-w-3xl mx-auto">
          <h3
            className="text-white text-center mb-6"
            style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "18px" }}
          >
            🎨 Design System
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {/* Colors */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <p className="text-white text-xs mb-3" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}>Brand Colors</p>
              <div className="space-y-2">
                {[
                  { name: "Primary", color: "#FF5722", label: "#FF5722" },
                  { name: "Dark", color: "#0F172A", label: "#0F172A" },
                  { name: "Success", color: "#10B981", label: "#10B981" },
                  { name: "Warning", color: "#F59E0B", label: "#F59E0B" },
                ].map(c => (
                  <div key={c.name} className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg" style={{ background: c.color }} />
                    <span className="text-white/60 text-[10px]" style={{ fontFamily: "Inter, sans-serif" }}>{c.name}: {c.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Typography */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <p className="text-white text-xs mb-3" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}>Typography</p>
              <div className="space-y-2">
                <div>
                  <p className="text-white text-sm" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800 }}>Poppins</p>
                  <p className="text-white/40 text-[10px]" style={{ fontFamily: "Inter, sans-serif" }}>Heading • 700/800</p>
                </div>
                <div>
                  <p className="text-white text-sm" style={{ fontFamily: "Inter, sans-serif" }}>Inter</p>
                  <p className="text-white/40 text-[10px]" style={{ fontFamily: "Inter, sans-serif" }}>Body • 400/600</p>
                </div>
              </div>
            </div>

            {/* UX Style */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <p className="text-white text-xs mb-3" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}>UX Principles</p>
              <div className="space-y-1.5">
                {[
                  "Dark mode default",
                  "Rounded corners (xl)",
                  "Minimal taps to action",
                  "Clear visual hierarchy",
                  "High contrast CTAs",
                  "Micro-animation ready",
                ].map(p => (
                  <div key={p} className="flex items-center gap-1.5">
                    <Zap className="w-3 h-3 text-[#FF5722]" />
                    <span className="text-white/50 text-[10px]" style={{ fontFamily: "Inter, sans-serif" }}>{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0F172A]/95 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#FF5722] to-[#FF8A50] flex items-center justify-center">
              <span className="text-sm">🔧</span>
            </div>
            <span className="text-white" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "16px" }}>
              Call<span style={{ color: "#FF5722" }}>Bengkel</span>
            </span>
          </Link>
          <div className="flex gap-3">
            <Link
              to="/"
              className="px-3 py-2 text-white/60 hover:text-white text-xs border border-white/15 rounded-xl transition-all"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Landing Page
            </Link>
            <Link
              to="/partner-dashboard"
              className="px-3 py-2 text-white bg-[#FF5722] rounded-xl text-xs"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
            >
              Dashboard Mitra
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}