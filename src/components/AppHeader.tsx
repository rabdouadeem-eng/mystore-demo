import { Screen } from "../App";

type Props = {
  activeScreen: Screen;
  onScreenChange: (s: Screen) => void;
};

const titles: Record<Screen, string> = {
  home: "متجري",
  stats: "الإحصائيات",
  profile: "حسابي",
};

export default function AppHeader({ activeScreen }: Props) {
  return (
    <div className="bg-gradient-to-l from-violet-600 to-purple-600 px-4 pt-3 pb-4 relative z-20">
      <div className="flex items-center justify-between">
        <button className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center active:scale-90 transition">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </button>
        <div className="text-center">
          <p className="text-white text-sm font-bold">
            {activeScreen === "home" ? "👋 مرحباً، أحمد" : titles[activeScreen]}
          </p>
          {activeScreen === "home" && (
            <p className="text-white/80 text-[10px]">اكتشف أفضل العروض اليوم</p>
          )}
        </div>
        <button className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center active:scale-90 transition relative">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
          <span className="absolute top-0.5 right-0.5 w-2 h-2 bg-red-500 rounded-full border border-violet-600"></span>
        </button>
      </div>
    </div>
  );
    }
