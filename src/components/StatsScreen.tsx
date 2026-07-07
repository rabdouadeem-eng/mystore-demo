import { useState } from "react";

const days = ["سبت", "أحد", "اثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة"];
const data = [40, 65, 45, 80, 55, 90, 70];

export default function StatsScreen() {
  const [period, setPeriod] = useState<"week" | "month" | "year">("week");
  const max = Math.max(...data);

  return (
    <div className="px-4 pt-3 pb-4 space-y-4">
      <div className="bg-gradient-to-br from-violet-600 to-indigo-700 rounded-2xl p-4 text-white relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full"></div>
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-pink-400/15 rounded-full"></div>
        <div className="relative">
          <p className="text-[11px] text-white/80">إجمالي المبيعات</p>
          <h3 className="text-2xl font-bold mt-1">12,450 ر.س</h3>
          <div className="flex items-center gap-1 mt-1">
            <span className="text-[10px] bg-green-400/30 px-1.5 py-0.5 rounded-full font-semibold">
              ↑ 12.5%
            </span>
            <span className="text-[10px] text-white/70">مقارنة بالشهر الماضي</span>
          </div>

          <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-white/15">
            <div>
              <p className="text-[10px] text-white/70">الطلبات</p>
              <p className="text-sm font-bold mt-0.5">248</p>
            </div>
            <div>
              <p className="text-[10px] text-white/70">العملاء</p>
              <p className="text-sm font-bold mt-0.5">156</p>
            </div>
            <div>
              <p className="text-[10px] text-white/70">التقييم</p>
              <p className="text-sm font-bold mt-0.5">4.8★</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex bg-slate-100 p-1 rounded-xl">
        {(["week", "month", "year"] as const).map((p) => (
          <button
            key={p}
            onClick={() => setPeriod(p)}
            className={`flex-1 py-1.5 text-[11px] font-semibold rounded-lg transition ${
              period === p ? "bg-white text-violet-600 shadow-sm" : "text-slate-500"
            }`}
          >
            {p === "week" ? "أسبوع" : p === "month" ? "شهر" : "سنة"}
          </button>
        ))}
      </div>

      <div className="bg-white border border-slate-100 rounded-2xl p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-bold text-slate-800">نشاطك الأسبوعي</h3>
          <span className="text-[10px] text-slate-400">آخر 7 أيام</span>
        </div>
        <div className="flex items-end justify-between gap-1.5 h-32">
          {data.map((value, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <div className="w-full flex flex-col items-center justify-end h-full">
                <div
                  className={`w-full rounded-t-lg transition-all duration-700 ${
                    i === 5 ? "bg-gradient-to-t from-violet-500 to-pink-500" : "bg-gradient-to-t from-violet-200 to-violet-300"
                  }`}
                  style={{ height: `${(value / max) * 100}%` }}
                ></div>
              </div>
              <span className="text-[9px] text-slate-500 font-medium">{days[i]}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2.5">
        <div className="bg-gradient-to-br from-pink-50 to-rose-50 border border-pink-100 rounded-2xl p-3">
          <div className="w-9 h-9 bg-pink-500 rounded-xl flex items-center justify-center mb-2">
            <span className="text-white text-base">💰</span>
          </div>
          <p className="text-[10px] text-slate-500">الأرباح</p>
          <p className="text-base font-bold text-slate-800">8,920</p>
          <p className="text-[10px] text-green-600 font-semibold">+18%</p>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-3">
          <div className="w-9 h-9 bg-blue-500 rounded-xl flex items-center justify-center mb-2">
            <span className="text-white text-base">👥</span>
          </div>
          <p className="text-[10px] text-slate-500">متابعين جدد</p>
          <p className="text-base font-bold text-slate-800">+342</p>
          <p className="text-[10px] text-green-600 font-semibold">+24%</p>
        </div>
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100 rounded-2xl p-3">
          <div className="w-9 h-9 bg-amber-500 rounded-xl flex items-center justify-center mb-2">
            <span className="text-white text-base">⭐</span>
          </div>
          <p className="text-[10px] text-slate-500">التقييمات</p>
          <p className="text-base font-bold text-slate-800">4.8/5</p>
          <p className="text-[10px] text-green-600 font-semibold">+0.2</p>
        </div>
        <div className="bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-100 rounded-2xl p-3">
          <div className="w-9 h-9 bg-emerald-500 rounded-xl flex items-center justify-center mb-2">
            <span className="text-white text-base">📦</span>
          </div>
          <p className="text-[10px] text-slate-500">الطلبات</p>
          <p className="text-base font-bold text-slate-800">248</p>
          <p className="text-[10px] text-green-600 font-semibold">+9%</p>
        </div>
      </div>
    </div>
  );
            }
