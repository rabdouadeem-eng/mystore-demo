import { useState, useEffect } from "react";
import PhoneFrame from "./components/PhoneFrame";
import StatusBar from "./components/PhoneStatusBar";
import AppHeader from "./components/AppHeader";
import HomeScreen from "./components/HomeScreen";
import StatsScreen from "./components/StatsScreen";
import ProfileScreen from "./components/ProfileScreen";
import BottomNav from "./components/BottomNav";
import NotificationToast from "./components/NotificationToast";

export type Screen = "home" | "stats" | "profile";

export default function App() {
  const [activeScreen, setActiveScreen] = useState<Screen>("home");
  const [showNotification, setShowNotification] = useState(false);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 60000);
    const notifTimer = setTimeout(() => setShowNotification(true), 2500);
    const hideTimer = setTimeout(() => setShowNotification(false), 6500);
    return () => {
      clearInterval(timer);
      clearTimeout(notifTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  const renderScreen = () => {
    switch (activeScreen) {
      case "home":
        return <HomeScreen />;
      case "stats":
        return <StatsScreen />;
      case "profile":
        return <ProfileScreen />;
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4 md:p-8 overflow-hidden relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="absolute top-6 md:top-10 left-0 right-0 text-center z-10 px-4">
        <h1 className="text-white text-xl md:text-2xl font-bold mb-1">
          📱 تطبيق الموبايل التجريبي
        </h1>
        <p className="text-slate-300 text-xs md:text-sm">
          تفاعل مع التطبيق من خلال شاشة الهاتف
        </p>
      </div>

      <PhoneFrame>
        <StatusBar time={time} />
        <AppHeader
          activeScreen={activeScreen}
          onScreenChange={setActiveScreen}
        />
        <div className="flex-1 overflow-y-auto overflow-x-hidden no-scrollbar bg-gradient-to-b from-slate-50 to-white">
          {renderScreen()}
        </div>
        <BottomNav activeScreen={activeScreen} onScreenChange={setActiveScreen} />
        {showNotification && <NotificationToast />}
      </PhoneFrame>

      <div className="absolute bottom-4 md:bottom-8 left-0 right-0 text-center z-10 px-4">
        <div className="inline-flex flex-wrap items-center justify-center gap-2 md:gap-4 text-slate-300 text-xs md:text-sm">
          <span className="flex items-center gap-1.5 bg-white/5 backdrop-blur px-3 py-1.5 rounded-full">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            اضغط على الأزرار
          </span>
          <span className="flex items-center gap-1.5 bg-white/5 backdrop-blur px-3 py-1.5 rounded-full">
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
            اسحب للأعلى
          </span>
          <span className="flex items-center gap-1.5 bg-white/5 backdrop-blur px-3 py-1.5 rounded-full">
            <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
            تنقل بين الشاشات
          </span>
        </div>
      </div>
    </div>
  );
      }
