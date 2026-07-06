export default function StatusBar({ time }: { time: Date }) {
  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");

  return (
    <div className="flex items-center justify-between px-6 pt-2 pb-1 text-[11px] font-semibold text-slate-900 bg-white z-20 relative">
      <span className="font-bold tracking-tight">{hours}:{minutes}</span>
      <div className="flex items-center gap-1.5">
        <svg width="16" height="11" viewBox="0 0 16 11" fill="currentColor">
          <rect x="0" y="7" width="3" height="4" rx="0.5"/>
          <rect x="4.5" y="5" width="3" height="6" rx="0.5"/>
          <rect x="9" y="2.5" width="3" height="8.5" rx="0.5"/>
          <rect x="13.5" y="0" width="3" height="11" rx="0.5" className="opacity-40"/>
        </svg>
        <svg width="14" height="10" viewBox="0 0 14 10" fill="currentColor">
          <path d="M7 8.5a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z"/>
          <path d="M3.5 5.5a4.95 4.95 0 017 0l-1.05 1.05a3.45 3.45 0 00-4.9 0L3.5 5.5z" opacity="0.85"/>
          <path d="M0.5 2.5a8.95 8.95 0 0113 0l-1.05 1.05a7.45 7.45 0 00-10.9 0L0.5 2.5z" opacity="0.6"/>
        </svg>
        <div className="flex items-center">
          <div className="relative h-2.5 w-5 border border-slate-900 rounded-[2.5px]">
            <div className="absolute inset-0.5 bg-slate-900 rounded-[1px]" style={{ width: "78%" }}></div>
          </div>
          <div className="w-0.5 h-1.5 bg-slate-900 rounded-r ml-0.5"></div>
        </div>
      </div>
    </div>
  );
      }
