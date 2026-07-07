import { useState } from "react";

const settingsGroups = [
  {
    title: "عام",
    items: [
      { icon: "🌐", name: "اللغة", value: "العربية", color: "bg-blue-500" },
      { icon: "🌙", name: "الوضع الليلي", value: "مفعّل", color: "bg-purple-500", toggle: true },
      { icon: "🔔", name: "الإشعارات", value: "الكل", color: "bg-pink-500" },
    ],
  },
  {
    title: "الحساب",
    items: [
      { icon: "💳", name: "طرق الدفع", value: "3 بطاقات", color: "bg-emerald-500" },
      { icon: "📍", name: "العناوين", value: "5 عناوين", color: "bg-orange-500" },
      { icon: "🔒", name: "الخصوصية والأمان", value: "", color: "bg-red-500" },
    ],
  },
  {
    title: "الدعم",
    items: [
      { icon: "❓", name: "مركز المساعدة", value: "", color: "bg-cyan-500" },
      { icon: "💬", name: "تواصل معنا", value: "", color: "bg-indigo-500" },
      { icon: "⭐", name: "تقييم التطبيق", value: "", color: "bg-amber-500" },
    ],
  },
];

export default function ProfileScreen() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className="pb-4">
      <div className="px-4 pt-4 pb-2">
        <div className="bg-gradient-to-br from-violet-600 via-purple-600 to-pink-600 rounded-2xl p-4 text-white relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-yellow-300/10 rounded-full"></div>

          <div className="relative flex items-center gap-3">
            <div className="relative">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-300 to-pink-400 flex items-center justify-center text-2xl font-bold border-2 border-white/30">
                أ
              </div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-white"></div>
            </div>
            <div className="flex-1">
              <h3 className="text-base font-bold">أحمد محمد</h3>
              <p className="text-[11px] text-white/80">ahmed@example.com</p>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-[9px] bg-white/20 px-1.5 py-0.5 rounded-full font-semibold">
                  ✨ عضو ذهبي
                </span>
              </div>
            </div>
            <button className="w-8 h-8 bg-white/15 rounded-full flex items-center justify-center active:scale-90">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
              </svg>
            </button>
          </div>

          <div className="relative grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-white/15">
            <div className="text-center">
              <p className="text-base font-bold">28</p>
              <p className="text-[10px] text-white/80">طلب</p>
            </div>
            <div className="text-center border-x border-white/15">
              <p className="text-base font-bold">156</p>
              <p className="text-[10px] text-white/80">متابع</p>
            </div>
            <div className="text-center">
              <p className="text-base font-bold">4.8</p>
              <p className="text-[10px] text-white/80">تقييم</p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 mt-2 space-y-3">
        {settingsGroups.map((group, gi) => (
          <div key={gi}>
            <h4 className="text-[11px] font-bold text-slate-500 mb-1.5 px-1">{group.title}</h4>
            <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
              {group.items.map((item, i) => (
                <button
                  key={i}
                  className="w-full flex items-center gap-3 p-2.5 active:bg-slate-50 transition border-b border-slate-50 last:border-0"
                >
                  <div className={`w-8 h-8 ${item.color} rounded-xl flex items-center justify-center text-sm`}>
                    {item.icon}
                  </div>
                  <span className="flex-1 text-right text-[12px] font-semibold text-slate-700">
                    {item.name}
                  </span>
                  {item.name === "الوضع الليلي" ? (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setDarkMode(!darkMode);
                      }}
                      className={`w-9 h-5 rounded-full transition relative ${
                        darkMode ? "bg-violet-500" : "bg-slate-300"
                      }`}
                    >
                      <span
                        className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition-all ${
                          darkMode ? "right-0.5" : "right-[18px]"
                        }`}
                      ></span>
                    </button>
                  ) : (
                    <div className="flex items-center gap-1.5">
                      {item.value && (
                        <span className="text-[10px] text-slate-400">{item.value}</span>
                      )}
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2">
                        <polyline points="9 18 15 12 9 6"/>
                      </svg>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        ))}

        <button className="w-full bg-red-50 border border-red-100 text-red-500 rounded-2xl p-2.5 text-[12px] font-bold active:scale-95 transition mt-2">
          تسجيل الخروج 🚪
        </button>
      </div>
    </div>
  );
  }
