import { useState } from "react";
import { Link } from "react-router";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line
} from "recharts";
import {
  Bell, Settings, ChevronDown, MapPin, Phone, MessageCircle,
  TrendingUp, Star, Clock, CheckCircle, XCircle, AlertCircle,
  Package, Wallet, Users, BarChart2, Home, ClipboardList, User, Wrench
} from "lucide-react";

const revenueData = [
  { day: "Sen", revenue: 185000, orders: 3 },
  { day: "Sel", revenue: 320000, orders: 5 },
  { day: "Rab", revenue: 275000, orders: 4 },
  { day: "Kam", revenue: 450000, orders: 7 },
  { day: "Jum", revenue: 520000, orders: 8 },
  { day: "Sab", revenue: 680000, orders: 11 },
  { day: "Min", revenue: 390000, orders: 6 },
];

const weeklyData = [
  { week: "W1", revenue: 2100000 },
  { week: "W2", revenue: 2800000 },
  { week: "W3", revenue: 3200000 },
  { week: "W4", revenue: 3820000 },
];

const pendingOrders = [
  {
    id: "#CB2025001",
    user: "Ahmad F.",
    issue: "Ban Bocor",
    icon: "🛞",
    distance: "0.8 km",
    time: "5 menit lalu",
    price: "Rp 75.000",
    urgency: "tinggi",
    vehicleType: "Motor",
    location: "Jl. Sudirman No. 23",
  },
  {
    id: "#CB2025002",
    user: "Sari D.",
    issue: "Aki Soak",
    icon: "🔋",
    distance: "1.4 km",
    time: "2 menit lalu",
    price: "Rp 280.000",
    urgency: "sedang",
    vehicleType: "Motor",
    location: "Jl. Thamrin No. 5",
  },
];

const activeOrders = [
  {
    id: "#CB2024987",
    user: "Rizky P.",
    issue: "Mesin Mati",
    icon: "⚙️",
    status: "on_the_way",
    eta: "3 menit",
    price: "Rp 200.000",
  },
];

const completedOrders = [
  { id: "#CB2024980", user: "Dewi R.", issue: "Servis Rutin", price: "Rp 150.000", rating: 5, time: "1 jam lalu" },
  { id: "#CB2024975", user: "Budi S.", issue: "Ban Bocor", price: "Rp 75.000", rating: 4, time: "3 jam lalu" },
  { id: "#CB2024960", user: "Hendra K.", issue: "Aki Soak", price: "Rp 320.000", rating: 5, time: "5 jam lalu" },
];

export function PartnerDashboardPage() {
  const [activeTab, setActiveTab] = useState<"dashboard" | "orders" | "earnings" | "profile">("dashboard");
  const [selectedOrder, setSelectedOrder] = useState<string | null>(null);

  const stats = [
    { icon: <Wallet className="w-5 h-5" />, label: "Pendapatan Hari Ini", value: "Rp 820.000", change: "+12%", color: "#10B981", bg: "#ECFDF5" },
    { icon: <Package className="w-5 h-5" />, label: "Order Hari Ini", value: "13", change: "+4 dari kemarin", color: "#3B82F6", bg: "#EFF6FF" },
    { icon: <Star className="w-5 h-5" />, label: "Rating Bulan Ini", value: "4.92", change: "↑ 0.1", color: "#F59E0B", bg: "#FFFBEB" },
    { icon: <TrendingUp className="w-5 h-5" />, label: "Tingkat Penerimaan", value: "94%", change: "Sangat Baik", color: "#8B5CF6", bg: "#F5F3FF" },
  ];

  return (
    <div className="min-h-screen bg-[#F0F4F8]">
      {/* Top Navbar */}
      <nav className="bg-white border-b border-[#E2E8F0] sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#FF5722] to-[#FF8A50] flex items-center justify-center">
                <Wrench className="w-4 h-4 text-white" />
              </div>
              <div>
                <span className="text-[#0F172A]" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "15px" }}>
                  Call<span style={{ color: "#FF5722" }}>Bengkel</span>
                </span>
                <span className="text-[#94A3B8] text-[10px] ml-2" style={{ fontFamily: "Inter, sans-serif" }}>
                  Mitra Dashboard
                </span>
              </div>
            </Link>

            {/* Status & Actions */}
            <div className="flex items-center gap-3">
              {/* Online Status Toggle */}
              <div className="flex items-center gap-2 bg-[#ECFDF5] border border-[#A7F3D0] rounded-xl px-3 py-2 cursor-pointer">
                <div className="w-2 h-2 bg-[#10B981] rounded-full animate-pulse" />
                <span className="text-[#059669] text-xs" style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}>Online</span>
                <ChevronDown className="w-3 h-3 text-[#059669]" />
              </div>

              {/* Notifications */}
              <div className="relative">
                <button className="w-9 h-9 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center">
                  <Bell className="w-4 h-4 text-[#64748B]" />
                </button>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#FF5722] rounded-full text-white text-[8px] flex items-center justify-center" style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}>
                  2
                </div>
              </div>

              {/* Profile */}
              <div className="flex items-center gap-2 cursor-pointer">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FF5722] to-[#FF8A50] flex items-center justify-center text-white text-sm">
                  B
                </div>
                <div className="hidden md:block">
                  <p className="text-[#0F172A] text-xs" style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}>Budi Santoso</p>
                  <p className="text-[#94A3B8] text-[10px]" style={{ fontFamily: "Inter, sans-serif" }}>⭐ 4.92 • Level Platinum</p>
                </div>
                <ChevronDown className="w-4 h-4 text-[#94A3B8] hidden md:block" />
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex gap-6">
          {/* Sidebar */}
          <div className="hidden lg:flex flex-col w-52 flex-shrink-0 gap-1">
            {[
              { id: "dashboard", icon: <Home className="w-4 h-4" />, label: "Dashboard" },
              { id: "orders", icon: <ClipboardList className="w-4 h-4" />, label: "Order Masuk" },
              { id: "earnings", icon: <BarChart2 className="w-4 h-4" />, label: "Pendapatan" },
              { id: "profile", icon: <User className="w-4 h-4" />, label: "Profil & Layanan" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id as typeof activeTab)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-all ${
                  activeTab === item.id
                    ? "bg-[#FF5722] text-white shadow-md"
                    : "text-[#64748B] hover:bg-white hover:text-[#0F172A]"
                }`}
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
              >
                {item.icon}
                {item.label}
                {item.id === "orders" && pendingOrders.length > 0 && (
                  <span className={`ml-auto text-[10px] w-5 h-5 rounded-full flex items-center justify-center ${activeTab === item.id ? "bg-white text-[#FF5722]" : "bg-[#FF5722] text-white"}`}>
                    {pendingOrders.length}
                  </span>
                )}
              </button>
            ))}

            {/* Quick Stats in Sidebar */}
            <div className="mt-4 p-4 bg-gradient-to-br from-[#FF5722] to-[#FF8A50] rounded-2xl text-white">
              <p className="text-white/70 text-[10px] mb-1" style={{ fontFamily: "Inter, sans-serif" }}>Pendapatan Bulan Ini</p>
              <p style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "18px" }}>Rp 11.9JT</p>
              <p className="text-white/70 text-[10px] mt-1 flex items-center gap-1" style={{ fontFamily: "Inter, sans-serif" }}>
                <TrendingUp className="w-3 h-3" /> +22% vs bulan lalu
              </p>
            </div>

            <div className="mt-3 p-3 bg-white rounded-2xl border border-[#E2E8F0]">
              <p className="text-[#64748B] text-[10px] mb-2" style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}>LEVEL AKUN</p>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">🏆</span>
                <span className="text-[#F59E0B] text-xs" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800 }}>Platinum</span>
              </div>
              <div className="w-full h-1.5 bg-[#E2E8F0] rounded-full">
                <div className="w-3/4 h-full bg-[#F59E0B] rounded-full" />
              </div>
              <p className="text-[#94A3B8] text-[9px] mt-1" style={{ fontFamily: "Inter, sans-serif" }}>750/1000 poin ke Diamond</p>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 space-y-5">
            {/* === DASHBOARD TAB === */}
            {activeTab === "dashboard" && (
              <>
                {/* Stats Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-white rounded-2xl border border-[#E2E8F0] p-5 hover:shadow-md transition-all"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: stat.bg, color: stat.color }}>
                          {stat.icon}
                        </div>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-[#F0FDF4] text-[#10B981]" style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}>
                          {stat.change}
                        </span>
                      </div>
                      <p style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "20px", color: "#0F172A" }}>
                        {stat.value}
                      </p>
                      <p className="text-[#94A3B8] text-xs mt-0.5" style={{ fontFamily: "Inter, sans-serif" }}>{stat.label}</p>
                    </div>
                  ))}
                </div>

                {/* Incoming Orders Alert */}
                {pendingOrders.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <AlertCircle className="w-4 h-4 text-[#FF5722]" />
                      <h3 className="text-[#0F172A] text-sm" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}>
                        Order Masuk ({pendingOrders.length})
                      </h3>
                      <span className="bg-[#FF5722] text-white text-[10px] px-2 py-0.5 rounded-full animate-pulse" style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}>
                        Perlu Respons!
                      </span>
                    </div>

                    <div className="space-y-3">
                      {pendingOrders.map((order) => (
                        <div
                          key={order.id}
                          className="bg-white rounded-2xl border-2 border-[#FF5722]/30 p-5 hover:border-[#FF5722]/60 transition-all"
                          style={{ boxShadow: "0 4px 20px rgba(255,87,34,0.08)" }}
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex items-start gap-3">
                              <div className="w-12 h-12 rounded-2xl bg-[#FFF3F0] flex items-center justify-center text-2xl flex-shrink-0">
                                {order.icon}
                              </div>
                              <div>
                                <div className="flex items-center gap-2 mb-1">
                                  <span className="text-[#0F172A] text-sm" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}>{order.issue}</span>
                                  <span
                                    className={`text-[9px] px-1.5 py-0.5 rounded-full ${
                                      order.urgency === "tinggi" ? "bg-[#FEF2F2] text-[#EF4444]" : "bg-[#FFFBEB] text-[#D97706]"
                                    }`}
                                    style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}
                                  >
                                    {order.urgency === "tinggi" ? "🔴 Darurat" : "🟡 Normal"}
                                  </span>
                                </div>
                                <p className="text-[#64748B] text-xs" style={{ fontFamily: "Inter, sans-serif" }}>
                                  {order.vehicleType} • {order.user}
                                </p>
                                <div className="flex items-center gap-3 mt-1.5 text-[10px] text-[#94A3B8]" style={{ fontFamily: "Inter, sans-serif" }}>
                                  <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {order.distance}</span>
                                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {order.time}</span>
                                  <span className="text-[#FF5722] font-bold">{order.price}</span>
                                </div>
                                <p className="text-[#64748B] text-[10px] mt-1" style={{ fontFamily: "Inter, sans-serif" }}>
                                  📍 {order.location}
                                </p>
                              </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col gap-2 flex-shrink-0">
                              <button
                                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-white text-xs"
                                style={{
                                  background: "linear-gradient(135deg, #FF5722, #FF8A50)",
                                  fontFamily: "Inter, sans-serif",
                                  fontWeight: 700,
                                  boxShadow: "0 4px 15px rgba(255,87,34,0.3)",
                                }}
                              >
                                <CheckCircle className="w-3.5 h-3.5" />
                                Terima
                              </button>
                              <button
                                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-[#94A3B8] bg-[#F8FAFC] border border-[#E2E8F0] text-xs"
                                style={{ fontFamily: "Inter, sans-serif" }}
                              >
                                <XCircle className="w-3.5 h-3.5" />
                                Tolak
                              </button>
                              <div className="flex gap-1.5">
                                <button className="flex-1 py-1.5 bg-[#EFF6FF] rounded-xl flex items-center justify-center">
                                  <Phone className="w-3.5 h-3.5 text-[#3B82F6]" />
                                </button>
                                <button className="flex-1 py-1.5 bg-[#ECFDF5] rounded-xl flex items-center justify-center">
                                  <MessageCircle className="w-3.5 h-3.5 text-[#10B981]" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Revenue Chart */}
                <div className="bg-white rounded-2xl border border-[#E2E8F0] p-5">
                  <div className="flex items-center justify-between mb-5">
                    <h3 className="text-[#0F172A] text-sm" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}>
                      Pendapatan 7 Hari Terakhir
                    </h3>
                    <span className="text-[#10B981] text-xs bg-[#ECFDF5] px-2.5 py-1 rounded-full" style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}>
                      Total: Rp 2.82JT ↑
                    </span>
                  </div>
                  <ResponsiveContainer width="100%" height={180}>
                    <BarChart data={revenueData} barSize={28}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" />
                      <XAxis dataKey="day" tick={{ fontSize: 11, fontFamily: "Inter, sans-serif", fill: "#94A3B8" }} axisLine={false} tickLine={false} />
                      <YAxis hide />
                      <Tooltip
                        contentStyle={{ background: "#0F172A", border: "none", borderRadius: "12px", color: "white" }}
                        formatter={(value) => [`Rp ${Number(value).toLocaleString("id-ID")}`, "Pendapatan"]}
                        labelStyle={{ color: "rgba(255,255,255,0.6)", fontFamily: "Inter, sans-serif", fontSize: 11 }}
                      />
                      <Bar dataKey="revenue" fill="#FF5722" radius={[6, 6, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                {/* Active + Completed Grid */}
                <div className="grid lg:grid-cols-2 gap-5">
                  {/* Active Orders */}
                  <div className="bg-white rounded-2xl border border-[#E2E8F0] p-5">
                    <h3 className="text-[#0F172A] text-sm mb-4" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}>
                      🏍️ Order Aktif ({activeOrders.length})
                    </h3>
                    {activeOrders.map((order) => (
                      <div key={order.id} className="flex items-center gap-3 p-3 rounded-xl bg-[#FFFBEB] border border-[#FDE68A]">
                        <div className="text-2xl">{order.icon}</div>
                        <div className="flex-1">
                          <p className="text-[#0F172A] text-xs" style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}>{order.issue}</p>
                          <p className="text-[#64748B] text-[10px]" style={{ fontFamily: "Inter, sans-serif" }}>{order.user} • {order.id}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-[#F59E0B] text-xs" style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}>ETA {order.eta}</p>
                          <p className="text-[#64748B] text-[10px]" style={{ fontFamily: "Inter, sans-serif" }}>{order.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Recently Completed */}
                  <div className="bg-white rounded-2xl border border-[#E2E8F0] p-5">
                    <h3 className="text-[#0F172A] text-sm mb-4" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}>
                      ✅ Baru Diselesaikan
                    </h3>
                    <div className="space-y-2.5">
                      {completedOrders.map((order) => (
                        <div key={order.id} className="flex items-center gap-3 pb-2.5 border-b border-[#F1F5F9] last:border-0">
                          <CheckCircle className="w-4 h-4 text-[#10B981] flex-shrink-0" />
                          <div className="flex-1">
                            <p className="text-[#0F172A] text-xs" style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}>{order.issue}</p>
                            <p className="text-[#94A3B8] text-[10px]" style={{ fontFamily: "Inter, sans-serif" }}>{order.user} • {order.time}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-[#10B981] text-xs" style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}>+{order.price}</p>
                            <div className="flex gap-0.5 justify-end">
                              {Array.from({ length: order.rating }).map((_, i) => (
                                <Star key={i} className="w-2.5 h-2.5 text-[#F59E0B]" fill="#F59E0B" />
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* === EARNINGS TAB === */}
            {activeTab === "earnings" && (
              <div className="space-y-5">
                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    { label: "Bulan Ini", value: "Rp 11.9JT", sub: "44 order selesai", color: "#FF5722" },
                    { label: "Bulan Lalu", value: "Rp 9.8JT", sub: "38 order selesai", color: "#64748B" },
                    { label: "Total Semua", value: "Rp 87.2JT", sub: "Sejak bergabung", color: "#10B981" },
                  ].map(s => (
                    <div key={s.label} className="bg-white rounded-2xl border border-[#E2E8F0] p-5">
                      <p className="text-[#94A3B8] text-xs mb-1" style={{ fontFamily: "Inter, sans-serif" }}>{s.label}</p>
                      <p style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "22px", color: s.color }}>{s.value}</p>
                      <p className="text-[#94A3B8] text-xs" style={{ fontFamily: "Inter, sans-serif" }}>{s.sub}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-white rounded-2xl border border-[#E2E8F0] p-5">
                  <h3 className="text-[#0F172A] text-sm mb-5" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}>
                    Tren Pendapatan Mingguan
                  </h3>
                  <ResponsiveContainer width="100%" height={200}>
                    <LineChart data={weeklyData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" />
                      <XAxis dataKey="week" tick={{ fontSize: 11, fontFamily: "Inter, sans-serif", fill: "#94A3B8" }} axisLine={false} tickLine={false} />
                      <YAxis hide />
                      <Tooltip
                        contentStyle={{ background: "#0F172A", border: "none", borderRadius: "12px" }}
                        formatter={(value) => [`Rp ${Number(value).toLocaleString("id-ID")}`, "Pendapatan"]}
                        labelStyle={{ color: "rgba(255,255,255,0.6)", fontFamily: "Inter, sans-serif", fontSize: 11 }}
                      />
                      <Line type="monotone" dataKey="revenue" stroke="#FF5722" strokeWidth={3} dot={{ fill: "#FF5722", r: 5 }} activeDot={{ r: 7 }} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>

                {/* Pencairan */}
                <div className="bg-white rounded-2xl border border-[#E2E8F0] p-5">
                  <h3 className="text-[#0F172A] text-sm mb-4" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}>
                    💳 Saldo & Pencairan
                  </h3>
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-[#FF5722]/10 to-[#FF8A50]/5 rounded-2xl border border-[#FF5722]/20 mb-4">
                    <div>
                      <p className="text-[#64748B] text-xs" style={{ fontFamily: "Inter, sans-serif" }}>Saldo Tersedia</p>
                      <p style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "24px", color: "#FF5722" }}>Rp 4.285.000</p>
                    </div>
                    <button
                      className="px-5 py-2.5 text-white rounded-xl text-sm"
                      style={{
                        background: "linear-gradient(135deg, #FF5722, #FF8A50)",
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 700,
                      }}
                    >
                      Cairkan
                    </button>
                  </div>
                  <p className="text-[#94A3B8] text-xs" style={{ fontFamily: "Inter, sans-serif" }}>
                    ✓ BCA ****2341 • Pencairan otomatis setiap Jumat
                  </p>
                </div>
              </div>
            )}

            {/* === ORDERS TAB === */}
            {activeTab === "orders" && (
              <div className="space-y-5">
                <div className="bg-white rounded-2xl border border-[#E2E8F0] p-5">
                  <h3 className="text-[#0F172A] text-sm mb-4" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}>
                    Semua Order Hari Ini
                  </h3>
                  <div className="space-y-3">
                    {[...pendingOrders.map(o => ({ ...o, status: "pending" })), ...completedOrders.map(o => ({ ...o, status: "done", icon: "✅", distance: "", time: o.time, urgency: "selesai", vehicleType: "Motor", location: "" }))].map((order) => (
                      <div
                        key={order.id}
                        onClick={() => setSelectedOrder(selectedOrder === order.id ? null : order.id)}
                        className={`border rounded-2xl p-4 cursor-pointer transition-all ${
                          selectedOrder === order.id
                            ? "border-[#FF5722] bg-[#FFF3F0]"
                            : "border-[#E2E8F0] bg-[#F8FAFC] hover:border-[#FF5722]/40"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-xl">{order.icon}</span>
                          <div className="flex-1">
                            <p className="text-[#0F172A] text-xs" style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}>{order.issue}</p>
                            <p className="text-[#94A3B8] text-[10px]" style={{ fontFamily: "Inter, sans-serif" }}>{order.id} • {order.user}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-[#FF5722] text-xs" style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}>{order.price}</p>
                            <span
                              className={`text-[9px] px-1.5 py-0.5 rounded-full ${
                                order.status === "pending"
                                  ? "bg-[#FEF2F2] text-[#EF4444]"
                                  : "bg-[#ECFDF5] text-[#059669]"
                              }`}
                              style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
                            >
                              {order.status === "pending" ? "Menunggu" : "Selesai"}
                            </span>
                          </div>
                        </div>

                        {selectedOrder === order.id && order.status === "pending" && (
                          <div className="flex gap-2 mt-3 pt-3 border-t border-[#FF5722]/20">
                            <button
                              className="flex-1 py-2 text-white rounded-xl text-xs"
                              style={{ background: "#FF5722", fontFamily: "Inter, sans-serif", fontWeight: 700 }}
                            >
                              ✓ Terima Order
                            </button>
                            <button
                              className="flex-1 py-2 text-[#64748B] bg-white border border-[#E2E8F0] rounded-xl text-xs"
                              style={{ fontFamily: "Inter, sans-serif" }}
                            >
                              ✕ Tolak
                            </button>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* === PROFILE TAB === */}
            {activeTab === "profile" && (
              <div className="space-y-5">
                {/* Profile Card */}
                <div className="bg-white rounded-2xl border border-[#E2E8F0] p-5">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FF5722] to-[#FF8A50] flex items-center justify-center text-3xl">
                      👨‍🔧
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[#0F172A]" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "18px" }}>Budi Santoso</h3>
                      <p className="text-[#64748B] text-sm" style={{ fontFamily: "Inter, sans-serif" }}>ID: CB-PARTNER-001241</p>
                      <div className="flex gap-2 mt-2">
                        <span className="bg-[#FFFBEB] text-[#D97706] text-xs px-2.5 py-1 rounded-full" style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}>🏆 Platinum</span>
                        <span className="bg-[#ECFDF5] text-[#059669] text-xs px-2.5 py-1 rounded-full" style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}>✓ Terverifikasi</span>
                      </div>
                    </div>
                    <button className="p-2 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                      <Settings className="w-4 h-4 text-[#64748B]" />
                    </button>
                  </div>

                  <div className="grid grid-cols-4 gap-3 p-4 bg-[#F8FAFC] rounded-2xl">
                    {[
                      { val: "4.92", label: "Rating" },
                      { val: "284", label: "Total Order" },
                      { val: "94%", label: "Penerimaan" },
                      { val: "18 bln", label: "Bergabung" },
                    ].map(s => (
                      <div key={s.label} className="text-center">
                        <p style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "16px", color: "#FF5722" }}>{s.val}</p>
                        <p className="text-[#94A3B8] text-[10px]" style={{ fontFamily: "Inter, sans-serif" }}>{s.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Services */}
                <div className="bg-white rounded-2xl border border-[#E2E8F0] p-5">
                  <h3 className="text-[#0F172A] text-sm mb-4" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}>
                    🔧 Layanan yang Tersedia
                  </h3>
                  <div className="space-y-2">
                    {[
                      { name: "Tambal Ban (Motor)", price: "Rp 20.000", active: true },
                      { name: "Ganti Ban (Motor)", price: "Rp 30.000 + sparepart", active: true },
                      { name: "Servis Aki (Motor)", price: "Rp 50.000 + sparepart", active: true },
                      { name: "Servis Mesin Ringan", price: "Rp 75.000 - 150.000", active: true },
                      { name: "Kehabisan Bensin", price: "Rp 15.000 + bensin", active: false },
                    ].map(service => (
                      <div
                        key={service.name}
                        className="flex items-center justify-between p-3 rounded-xl border border-[#E2E8F0] hover:border-[#FF5722]/30 transition-all"
                      >
                        <div>
                          <p className="text-[#0F172A] text-xs" style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}>{service.name}</p>
                          <p className="text-[#64748B] text-[10px]" style={{ fontFamily: "Inter, sans-serif" }}>{service.price}</p>
                        </div>
                        <div
                          className={`w-10 h-5 rounded-full transition-all cursor-pointer ${service.active ? "bg-[#10B981]" : "bg-[#E2E8F0]"}`}
                          style={{ position: "relative" }}
                        >
                          <div
                            className="absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-all"
                            style={{ left: service.active ? "calc(100% - 18px)" : "2px" }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Bottom Nav */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-[#E2E8F0] flex justify-around py-2 px-4 shadow-xl">
        {[
          { id: "dashboard", icon: <Home className="w-5 h-5" />, label: "Home" },
          { id: "orders", icon: <ClipboardList className="w-5 h-5" />, label: "Order" },
          { id: "earnings", icon: <BarChart2 className="w-5 h-5" />, label: "Pendapatan" },
          { id: "profile", icon: <User className="w-5 h-5" />, label: "Profil" },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id as typeof activeTab)}
            className={`flex flex-col items-center gap-0.5 px-3 py-1 rounded-xl ${activeTab === item.id ? "text-[#FF5722]" : "text-[#94A3B8]"}`}
          >
            {item.icon}
            <span className="text-[9px]" style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}>{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
