import { useState } from "react";

const categories = [
  { id: 1, name: "الكل", icon: "🌟" },
  { id: 2, name: "طعام", icon: "🍔" },
  { id: 3, name: "أزياء", icon: "👕" },
  { id: 4, name: "إلكترونيات", icon: "📱" },
  { id: 5, name: "كتب", icon: "📚" },
];

const products = [
  {
    id: 1,
    name: "سماعات لاسلكية",
    price: "299",
    oldPrice: "450",
    rating: 4.8,
    reviews: 234,
    image: "🎧",
    color: "from-blue-400 to-indigo-500",
    badge: "خصم 33%",
  },
  {
    id: 2,
    name: "ساعة ذكية",
    price: "899",
    oldPrice: "1200",
    rating: 4.9,
    reviews: 567,
    image: "⌚",
    color: "from-pink-400 to-rose-500",
    badge: "الأكثر مبيعاً",
  },
  {
    id: 3,
    name: "حقيبة ظهر",
    price: "180",
    oldPrice: "250",
    rating: 4.6,
    reviews: 189,
    image: "🎒",
    color: "from-amber-400 to-orange-500",
    badge: "جديد",
  },
  {
    id: 4,
    name: "كاميرا احترافية",
    price: "2499",
    oldPrice: "3200",
    rating: 4.9,
    reviews: 432,
    image: "📷",
    color: "from-purple-400 to-violet-500",
    badge: "خصم 22%",
  },
];

export default function HomeScreen() {
  const [activeCat, setActiveCat] = useState(1);
  const [favorites, setFavorites] = useState<number[]>([2]);

  const toggleFav = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="px-4 pt-3 pb-4 space-y-4">
      <div className="relative">
        <input
          type="text"
          placeholder="ابحث عن منتج..."
          className="w-full bg-slate-100 rounded-2xl py-2.5 px-10 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400 transition"
        />
        <svg className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8"/>
          <line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
        <button className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 bg-violet-500 rounded-xl flex items-center justify-center text-white active:scale-90 transition">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="3" y1="6" x2="21" y2="6"/>
            <line x1="3" y1="12" x2="15" y2="12"/>
            <line x1="3" y1="18" x2="9" y2="18"/>
          </svg>
        </button>
      </div>

      <div className="relative rounded-2xl bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 p-4 text-white overflow-hidden active:scale-[0.98] transition cursor-pointer">
        <div className="absolute -top-5 -right-5 w-24 h-24 bg-white/15 rounded-full"></div>
        <div className="absolute -bottom-8 -left-2 w-20 h-20 bg-yellow-300/20 rounded-full"></div>
        <div className="relative">
          <span className="text-[10px] bg-white/25 backdrop-blur px-2 py-0.5 rounded-full">عرض محدود</span>
          <h3 className="text-lg font-bold mt-1.5">خصم حتى 50%</h3>
          <p className="text-[11px] text-white/90 mt-0.5">على جميع المنتجات الإلكترونية</p>
          <button className="mt-2 bg-white text-purple-600 text-[11px] font-bold px-3 py-1 rounded-full">
            تسوق الآن ←
          </button>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-bold text-slate-800">الفئات</h3>
          <button className="text-[11px] text-violet-600 font-medium">عرض الكل</button>
        </div>
        <div className="flex gap-2 overflow-x-auto no-scrollbar -mx-4 px-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCat(cat.id)}
              className={`flex-shrink-0 flex flex-col items-center gap-1 px-3 py-2 rounded-2xl transition active:scale-90 ${
                activeCat === cat.id
                  ? "bg-violet-500 text-white shadow-lg shadow-violet-200"
                  : "bg-white text-slate-600 border border-slate-100"
              }`}
            >
              <span className="text-lg">{cat.icon}</span>
              <span className="text-[10px] font-semibold">{cat.name}</span>
            </button>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-bold text-slate-800">الأكثر شعبية 🔥</h3>
          <button className="text-[11px] text-violet-600 font-medium">المزيد</button>
        </div>
        <div className="grid grid-cols-2 gap-2.5">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-100 active:scale-95 transition cursor-pointer"
            >
              <div className={`relative h-24 bg-gradient-to-br ${product.color} flex items-center justify-center`}>
                <span className="text-4xl">{product.image}</span>
                <span className="absolute top-1.5 right-1.5 text-[9px] bg-white/95 text-slate-800 px-1.5 py-0.5 rounded-full font-bold">
                  {product.badge}
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFav(product.id);
                  }}
                  className="absolute top-1.5 left-1.5 w-6 h-6 bg-white/90 rounded-full flex items-center justify-center active:scale-90"
                >
                  <svg width="11" height="11" viewBox="0 0 24 24" fill={favorites.includes(product.id) ? "#ef4444" : "none"} stroke={favorites.includes(product.id) ? "#ef4444" : "#64748b"} strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                </button>
              </div>
              <div className="p-2">
                <h4 className="text-[11px] font-bold text-slate-800 truncate">{product.name}</h4>
                <div className="flex items-center gap-0.5 mt-0.5">
                  <span className="text-yellow-500 text-[10px]">★</span>
                  <span className="text-[9px] text-slate-600">{product.rating}</span>
                  <span className="text-[9px] text-slate-400">({product.reviews})</span>
                </div>
                <div className="flex items-center justify-between mt-1">
                  <div>
                    <span className="text-[12px] font-bold text-violet-600">{product.price} ر.س</span>
                    <span className="text-[9px] text-slate-400 line-through mr-1">{product.oldPrice}</span>
                  </div>
                  <button className="w-6 h-6 bg-violet-500 rounded-lg flex items-center justify-center text-white active:scale-90">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <line x1="12" y1="5" x2="12" y2="19"/>
                      <line x1="5" y1="12" x2="19" y2="12"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
    }
