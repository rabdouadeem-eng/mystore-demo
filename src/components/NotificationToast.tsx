export default function NotificationToast() {
  return (
    <div className="absolute top-10 left-3 right-3 z-40 animate-slide-up">
      <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl p-2.5 flex items-center gap-2.5 border border-slate-200/50">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white text-base flex-shrink-0">
          🔔
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-bold text-slate-800">تطبيق المتجر</p>
            <span className="text-[9px] text-slate-400">الآن</span>
          </div>
          <p className="text-[10px] text-slate-600 truncate">
            عرض جديد! خصم 50% على الإلكترونيات 🎉
          </p>
        </div>
      </div>
    </div>
  );
}
