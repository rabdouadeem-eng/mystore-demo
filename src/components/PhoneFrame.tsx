import { ReactNode } from "react";

export default function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div className="relative z-10 animate-fade-in">
      <div className="relative mx-auto" style={{ width: "min(360px, 90vw)", height: "min(740px, 85vh)" }}>
        <div className="absolute -inset-4 bg-gradient-to-br from-purple-500/30 via-pink-500/20 to-blue-500/30 rounded-[3.5rem] blur-2xl"></div>

        <div className="relative h-full w-full rounded-[2.8rem] bg-gradient-to-b from-slate-800 to-slate-900 p-3 shadow-2xl">
          <div className="relative h-full w-full rounded-[2.3rem] bg-black overflow-hidden">
            <div className="relative h-full w-full rounded-[2.3rem] overflow-hidden flex flex-col bg-white">
              {children}
            </div>

            <div className="absolute top-0 left-1/2 -translate-x-1/2 z-30">
              <div className="w-28 h-7 bg-black rounded-b-2xl flex items-center justify-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-700"></div>
                <div className="w-2 h-2 rounded-full bg-slate-800 ring-1 ring-slate-700"></div>
              </div>
            </div>

            <div className="absolute top-32 -right-[3px] w-[3px] h-12 bg-slate-700 rounded-l"></div>

            <div className="absolute top-24 -left-[3px] w-[3px] h-8 bg-slate-700 rounded-r"></div>
            <div className="absolute top-36 -left-[3px] w-[3px] h-12 bg-slate-700 rounded-r"></div>
            <div className="absolute top-52 -left-[3px] w-[3px] h-12 bg-slate-700 rounded-r"></div>
          </div>
        </div>

        <div className="absolute inset-3 rounded-[2.3rem] pointer-events-none bg-gradient-to-tr from-transparent via-white/5 to-white/10 mix-blend-overlay"></div>
      </div>
    </div>
  );
                }
