import React from "react";
import DesktopNavbar from "../ui-components/DesktopNavbar";
import Link from "next/link";
import SideNavbar from "../ui-components/SideNavbar";

export default function Components() {
  return (
    <div className="bg-surface text-on-surface selection:bg-primary/30 selection:text-secondary">
      {/* <!-- TopNavBar --> */}
      <DesktopNavbar />
      {/* <!-- SideNavBar --> */}
      <SideNavbar />
      {/* <!-- Main Content Area --> */}
      <main className="md:ml-52 pt-24 px-6 md:px-10 pb-12 min-h-screen">
        {/* <!-- Header Section --> */}
        <header className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h1 className="text-4xl md:text-6xl font-headline font-black tracking-tighter text-on-surface mb-2">
              All <span className="text-primary">Components</span>
            </h1>
            <p className="text-outline font-mono text-sm">
              ARCHIVE_INDEX_01 // 1,284 MODULES LOADED
            </p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-outline text-xs uppercase tracking-widest font-grotesk">
              Sort by:
            </span>
            <div className="relative">
              <select className="appearance-none bg-surface-container-high text-on-surface border-none rounded-lg px-4 py-2 pr-10 text-sm focus:ring-2 focus:ring-primary cursor-pointer font-grotesk">
                <option>A-Z</option>
                <option>Newest First</option>
                <option>Most Popular</option>
                <option>Complex</option>
              </select>
              <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-outline">
                expand_more
              </span>
            </div>
          </div>
        </header>
        {/* <!-- Components Grid --> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* <!-- Card 1 --> */}
          <Link href="/developer/slug" className="group relative bg-surface-container-low rounded-xl overflow-hidden p-4 border border-outline-variant/10 hover:border-primary/30 transition-all duration-300">
            <div className="aspect-video rounded-lg mb-4 bg-slate-900 overflow-hidden relative group-hover:scale-[1.02] transition-transform duration-500">
              <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-2xl bg-surface-container-highest/50 backdrop-blur-xl border border-white/5 flex items-center justify-center neon-glow-blue">
                  <span
                    className="material-symbols-outlined text-primary text-3xl"
                    data-icon="mouse"
                  >
                    mouse
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-start">
                <h3 className="font-headline font-bold text-lg text-on-surface">
                  Aero Button
                </h3>
                <span className="text-[10px] font-mono text-secondary px-2 py-0.5 rounded bg-secondary/10">
                  GSAP
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded-full bg-surface-container-highest text-[10px] text-outline uppercase tracking-wider font-grotesk">
                  Buttons
                </span>
                <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
                <span className="text-[10px] text-outline font-mono">
                  v1.2.0
                </span>
              </div>
            </div>
          </Link>
          {/* <!-- Card 2 --> */}
          <div className="group relative bg-surface-container-low rounded-xl overflow-hidden p-4 border border-outline-variant/10 hover:border-secondary/30 transition-all duration-300">
            <div className="aspect-video rounded-lg mb-4 bg-slate-900 overflow-hidden relative group-hover:scale-[1.02] transition-transform duration-500">
              <div className="absolute inset-0 bg-linear-to-tr from-secondary/10 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-12 rounded-xl bg-surface-container-highest/50 backdrop-blur-xl border border-white/5 flex items-center justify-center neon-glow-lime gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary"></div>
                  <div className="w-8 h-1 rounded-full bg-outline-variant"></div>
                  <div className="w-2 h-2 rounded-full bg-outline-variant"></div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-start">
                <h3 className="font-headline font-bold text-lg text-on-surface">
                  Bento Grid
                </h3>
                <span className="text-[10px] font-mono text-primary px-2 py-0.5 rounded bg-primary/10">
                  React
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded-full bg-surface-container-highest text-[10px] text-outline uppercase tracking-wider font-grotesk">
                  Layouts
                </span>
                <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
                <span className="text-[10px] text-outline font-mono">
                  v2.0.4
                </span>
              </div>
            </div>
          </div>
          {/* <!-- Card 3 --> */}
          <div className="group relative bg-surface-container-low rounded-xl overflow-hidden p-4 border border-outline-variant/10 hover:border-primary/30 transition-all duration-300">
            <div className="aspect-video rounded-lg mb-4 bg-slate-900 overflow-hidden relative group-hover:scale-[1.02] transition-transform duration-500">
              <div className="absolute inset-0 bg-linear-to-b from-primary/5 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 border-2 border-primary/20 border-t-primary rounded-full animate-spin-slow"></div>
                <span
                  className="material-symbols-outlined absolute text-primary text-xl"
                  data-icon="bolt"
                >
                  bolt
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-start">
                <h3 className="font-headline font-bold text-lg text-on-surface">
                  Cyber Input
                </h3>
                <span className="text-[10px] font-mono text-secondary px-2 py-0.5 rounded bg-secondary/10">
                  Framer
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded-full bg-surface-container-highest text-[10px] text-outline uppercase tracking-wider font-grotesk">
                  Forms
                </span>
                <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
                <span className="text-[10px] text-outline font-mono">
                  v0.9.1
                </span>
              </div>
            </div>
          </div>
          {/* <!-- Card 4 --> */}
          <div className="group relative bg-surface-container-low rounded-xl overflow-hidden p-4 border border-outline-variant/10 hover:border-secondary/30 transition-all duration-300">
            <div className="aspect-video rounded-lg mb-4 bg-slate-900 overflow-hidden relative group-hover:scale-[1.02] transition-transform duration-500">
              <div className="absolute inset-0 bg-linear-to-tl from-secondary/5 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-2 opacity-60">
                  <div className="w-6 h-6 bg-secondary/40 rounded shadow-lg shadow-secondary/20"></div>
                  <div className="w-6 h-6 bg-surface-container-highest rounded"></div>
                  <div className="w-6 h-6 bg-surface-container-highest rounded"></div>
                  <div className="w-6 h-6 bg-surface-container-highest rounded"></div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-start">
                <h3 className="font-headline font-bold text-lg text-on-surface">
                  Draggable List
                </h3>
                <span className="text-[10px] font-mono text-primary px-2 py-0.5 rounded bg-primary/10">
                  Motion
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded-full bg-surface-container-highest text-[10px] text-outline uppercase tracking-wider font-grotesk">
                  Data UI
                </span>
                <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
                <span className="text-[10px] text-outline font-mono">
                  v1.4.2
                </span>
              </div>
            </div>
          </div>
          {/* <!-- Card 5 (Repeated pattern for grid fill) --> */}
          <div className="group relative bg-surface-container-low rounded-xl overflow-hidden p-4 border border-outline-variant/10 hover:border-primary/30 transition-all duration-300">
            <div className="aspect-video rounded-lg mb-4 bg-slate-900 overflow-hidden relative group-hover:scale-[1.02] transition-transform duration-500">
              <div className="absolute inset-0 flex items-center justify-center p-6">
                <div className="w-full h-full border border-dashed border-primary/20 rounded-lg flex items-center justify-center">
                  <span
                    className="material-symbols-outlined text-primary/40 text-4xl"
                    data-icon="3d_rotation"
                  >
                    3d_rotation
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-start">
                <h3 className="font-headline font-bold text-lg text-on-surface">
                  Vortex Scene
                </h3>
                <span className="text-[10px] font-mono text-secondary px-2 py-0.5 rounded bg-secondary/10">
                  Three.js
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded-full bg-surface-container-highest text-[10px] text-outline uppercase tracking-wider font-grotesk">
                  3D
                </span>
                <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
                <span className="text-[10px] text-outline font-mono">
                  v2.1.0
                </span>
              </div>
            </div>
          </div>
          {/* <!-- Card 6 --> */}
          <div className="group relative bg-surface-container-low rounded-xl overflow-hidden p-4 border border-outline-variant/10 hover:border-secondary/30 transition-all duration-300">
            <div className="aspect-video rounded-lg mb-4 bg-slate-900 overflow-hidden relative group-hover:scale-[1.02] transition-transform duration-500">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="space-y-1">
                  <div className="w-12 h-1 bg-secondary/60 rounded"></div>
                  <div className="w-12 h-1 bg-secondary/40 rounded"></div>
                  <div className="w-12 h-1 bg-secondary/20 rounded"></div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-start">
                <h3 className="font-headline font-bold text-lg text-on-surface">
                  Pulse Loader
                </h3>
                <span className="text-[10px] font-mono text-primary px-2 py-0.5 rounded bg-primary/10">
                  Tailwind
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded-full bg-surface-container-highest text-[10px] text-outline uppercase tracking-wider font-grotesk">
                  Loaders
                </span>
                <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
                <span className="text-[10px] text-outline font-mono">
                  v0.4.0
                </span>
              </div>
            </div>
          </div>
          {/* <!-- Card 7 --> */}
          <div className="group relative bg-surface-container-low rounded-xl overflow-hidden p-4 border border-outline-variant/10 hover:border-primary/30 transition-all duration-300">
            <div className="aspect-video rounded-lg mb-4 bg-slate-900 overflow-hidden relative group-hover:scale-[1.02] transition-transform duration-500">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded bg-surface-container-highest flex items-center justify-center">
                  <div className="w-6 h-6 border-2 border-primary/40 rounded-sm rotate-45"></div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-start">
                <h3 className="font-headline font-bold text-lg text-on-surface">
                  Neo Card
                </h3>
                <span className="text-[10px] font-mono text-secondary px-2 py-0.5 rounded bg-secondary/10">
                  CSS
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded-full bg-surface-container-highest text-[10px] text-outline uppercase tracking-wider font-grotesk">
                  Cards
                </span>
                <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
                <span className="text-[10px] text-outline font-mono">
                  v3.0.0
                </span>
              </div>
            </div>
          </div>
          {/* <!-- Card 8 --> */}
          <div className="group relative bg-surface-container-low rounded-xl overflow-hidden p-4 border border-outline-variant/10 hover:border-secondary/30 transition-all duration-300">
            <div className="aspect-video rounded-lg mb-4 bg-slate-900 overflow-hidden relative group-hover:scale-[1.02] transition-transform duration-500">
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className="material-symbols-outlined text-secondary/30 text-5xl"
                  data-icon="navigation"
                >
                  navigation
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-start">
                <h3 className="font-headline font-bold text-lg text-on-surface">
                  Orbit Menu
                </h3>
                <span className="text-[10px] font-mono text-primary px-2 py-0.5 rounded bg-primary/10">
                  GSAP
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded-full bg-surface-container-highest text-[10px] text-outline uppercase tracking-wider font-grotesk">
                  Navigation
                </span>
                <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
                <span className="text-[10px] text-outline font-mono">
                  v1.1.2
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Pagination Section --> */}
        <footer className="mt-16 pt-8 border-t border-outline-variant/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-outline text-xs font-mono">
            Showing <span className="text-on-surface">1-50</span> of
            <span className="text-on-surface">1,284</span> components
          </div>
          <div className="flex items-center gap-2">
            <button
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-surface-container-high text-outline hover:text-on-surface transition-colors disabled:opacity-30"
              disabled
            >
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <div className="flex items-center gap-1">
              <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-on-primary font-bold font-mono text-sm">
                1
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-surface-container-highest text-outline font-mono text-sm transition-colors">
                2
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-surface-container-highest text-outline font-mono text-sm transition-colors">
                3
              </button>
              <span className="px-2 text-outline">...</span>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-surface-container-highest text-outline font-mono text-sm transition-colors">
                26
              </button>
            </div>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-surface-container-high text-outline hover:text-on-surface transition-colors">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </footer>
      </main>
      {/* <!-- Bottom Navigation (Mobile Only) --> */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-slate-950/90 backdrop-blur-xl px-6 py-3 flex justify-between items-center z-50">
        <button className="flex flex-col items-center gap-1 text-primary">
          <span className="material-symbols-outlined" data-icon="widgets">
            widgets
          </span>
          <span className="text-[10px] uppercase font-bold">UI</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-slate-500">
          <span className="material-symbols-outlined" data-icon="search">
            search
          </span>
          <span className="text-[10px] uppercase">Find</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-slate-500">
          <span className="material-symbols-outlined" data-icon="bookmarks">
            bookmarks
          </span>
          <span className="text-[10px] uppercase">Saved</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-slate-500">
          <span className="material-symbols-outlined" data-icon="person">
            person
          </span>
          <span className="text-[10px] uppercase">Dev</span>
        </button>
      </nav>
      {/* <!-- Floating Action Button --> */}
      <button className="fixed bottom-24 right-8 w-14 h-14 bg-secondary text-on-secondary rounded-full shadow-xl shadow-secondary/20 flex items-center justify-center md:bottom-12 transition-transform hover:scale-110 active:scale-95 z-40">
        <span className="material-symbols-outlined" data-icon="add">
          add
        </span>
      </button>
    </div>
  );
}
