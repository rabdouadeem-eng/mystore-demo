import { Screen } from "../App";

type Props = {
  activeScreen: Screen;
  onScreenChange: (s: Screen) => void;
};

const items: { id: Screen; label: string; icon: string }[] = [
  { id: "home", label: "الرئيسية", icon: "🏠" },
  { id: "stats", label: "الإحصائيات", icon: "📊" },
  { id: "profile", label: "حسابي", icon: "👤" },
];

export default function BottomNav({ activeScreen, onScreenChange }: Props) {
  return (
    <div className="bg-white/95 backdrop-blur border-t border-slate-100 px-2 pt-1.5 pb-2 flex justify-around relative z-20">
      {items.map((item) => {
        const active = activeScreen === item.id;
        return (
          <button
            key={item.id}
            onClick={() => onScreenChange(item.id)}
            className="flex-1 flex flex-col items-center gap-0.5 py-1 active:scale-90 transition"
          >
            <div
              className={`px-3 py-1 rounded-full transition-all ${
                active ? "bg-gradient-to-r from-violet-500 to-purple-600 animate-pulse-soft" : ""
              }`}
            >
              <span className="text-base">{item.icon}</span>
            </div>
            <span
              className={`text-[9px] font-bold transition ${
                active ? "text-violet-600" : "text-slate-400"
              }`}
            >
              {item.label}
            </span>
          </button>
        );
      })}
    </div>
  );
                 }
