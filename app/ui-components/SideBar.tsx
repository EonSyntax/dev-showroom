import Link from "next/link";

export default function SideBar() {
  return (
    <aside className="fixed left-0 top-16 h-[calc(100vh-64px)] w-44 bg-slate-950 hidden md:flex flex-col py-6 overflow-y-auto scrollbar-hide">
      <div className="px-6 mb-8">
        <h3 className="font-geist text-xs uppercase tracking-widest text-secondary mb-1">
          Library
        </h3>
        <p className="text-[10px] text-outline-variant font-geist">v2.4.0</p>
      </div>
      <nav className="flex flex-col gap-1">
        <div className="px-6 py-2">
          <span className="text-[10px] uppercase font-bold tracking-tighter text-outline-variant">
            Frameworks
          </span>
        </div>
        <Link
          className="flex items-center gap-3 px-6 py-2 text-white font-geist text-xs uppercase tracking-widest hover:bg-[#2c2831] hover:text-primary transition-all duration-300 ease-in-out"
          href="/components"
        >
          <span
            className="material-symbols-outlined text-sm text-white"
            data-icon="allergy"
          >
            allergy
          </span>
          All
        </Link>
        <a
          className="flex items-center gap-3 px-6 py-2 text-white font-geist text-xs uppercase tracking-widest hover:bg-[#2c2831] hover:text-primary transition-all duration-300 ease-in-out"
          href="#"
        >
          <span
            className="material-symbols-outlined text-sm text-white"
            data-icon="code"
          >
            code
          </span>
          CSS
        </a>
        <a
          className="flex items-center gap-3 px-6 py-2 text-white font-geist text-xs uppercase tracking-widest hover:bg-[#2c2831] hover:text-primary transition-all duration-300 ease-in-out"
          href="#"
        >
          <span
            className="material-symbols-outlined text-sm text-white"
            data-icon="animation"
          >
            animation
          </span>
          GSAP
          <span className="ml-auto bg-primary/10 text-primary text-[8px] px-1.5 py-0.5 rounded-full">
            NEW
          </span>
        </a>
        <a
          className="flex items-center gap-3 px-6 py-2 text-white font-geist text-xs uppercase tracking-widest hover:bg-[#2c2831] hover:text-primary transition-all duration-300 ease-in-out"
          href="#"
        >
          <span
            className="material-symbols-outlined text-sm text-white"
            data-icon="auto_awesome"
          >
            auto_awesome
          </span>
          Motion
        </a>
        <a
          className="flex items-center gap-3 px-6 py-2 text-white font-geist text-xs uppercase tracking-widest hover:bg-[#2c2831] hover:text-primary transition-all duration-300 ease-in-out"
          href="#"
        >
          <span
            className="material-symbols-outlined text-sm text-white"
            data-icon="reorder"
          >
            reorder
          </span>
          AOS
        </a>
        <a
          className="flex items-center gap-3 px-6 py-2 text-white font-geist text-xs uppercase tracking-widest hover:bg-[#2c2831] hover:text-primary transition-all duration-300 ease-in-out"
          href="#"
        >
          <span
            className="material-symbols-outlined text-sm text-white"
            data-icon="view_in_ar"
          >
            view_in_ar
          </span>
          Three.js
        </a>
        <div className="mt-4">
          <div className="px-6 py-2 flex items-center justify-between">
            <span className="text-[10px] uppercase font-bold tracking-tighter text-outline-variant">
              Components
            </span>
          </div>
          <div className="flex flex-col">
            <button className="flex items-center justify-between px-6 py-2 text-slate-400 text-xs font-medium">
              <span className="flex items-center gap-3">
                <span className="material-symbols-outlined text-sm">
                  dashboard
                </span>
                Cards
              </span>
              <span className="material-symbols-outlined text-xs">
                expand_more
              </span>
            </button>
            <div className="flex flex-col">
              <a
                className="pl-14 pr-6 py-2 text-slate-500 text-xs hover:text-primary transition-colors flex items-center justify-between"
                href="#"
              >
                Simple Card
                <span className="bg-secondary/20 text-secondary text-[8px] px-1.5 py-0.5 rounded-full">
                  UPDATED
                </span>
              </a>
              <a
                className="pl-14 pr-6 py-2 text-secondary border-l-2 border-secondary bg-linear-to-r from-secondary/10 to-transparent text-xs font-semibold"
                href="#"
              >
                Electric Border
              </a>
              <a
                className="pl-14 pr-6 py-2 text-slate-500 text-xs hover:text-primary transition-colors"
                href="#"
              >
                Glassmorphic
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className="mt-auto pt-6 flex flex-col gap-1">
        <a
          className="flex items-center gap-3 px-6 py-2 text-slate-500 font-geist text-xs uppercase tracking-widest hover:bg-[#2c2831] hover:text-primary transition-all duration-300"
          href="#"
        >
          <span
            className="material-symbols-outlined text-sm"
            data-icon="settings"
          >
            settings
          </span>
          Settings
        </a>
        <a
          className="flex items-center gap-3 px-6 py-2 text-slate-500 font-geist text-xs uppercase tracking-widest hover:bg-[#2c2831] hover:text-primary transition-all duration-300"
          href="#"
        >
          <span className="material-symbols-outlined text-sm" data-icon="help">
            help
          </span>
          Support
        </a>
      </div>
    </aside>
  );
}
