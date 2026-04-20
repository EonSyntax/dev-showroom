import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="bg-surface text-on-surface selection:bg-primary/30 selection:text-secondary">
      {/* <!-- Background Elements --> */}
      <div className="fixed inset-0 noise-overlay z-0"></div>
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="data-fragment top-1/4 left-1/4 opacity-20"></div>
        <div
          className="data-fragment top-1/2 right-1/3 opacity-40"
          style={{ width: '200px' }}
        ></div>
        <div className="data-fragment bottom-1/4 left-1/2 opacity-10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-primary/5 rounded-full blur-[120px]"></div>
      </div>
      {/* <!-- Main Content --> */}
      <main className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6">
        <div className="text-center">
          {/* <!-- Label --> */}
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full bg-white/5 border border-white/10">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
            <span className="font-geist text-xs tracking-[0.2em] text-secondary uppercase">
              SYSTEM ERROR: 404
            </span>
          </div>
          {/* <!-- Large 404 --> */}
          <h1 className="text-[12rem] md:text-[20rem] font-black tracking-normal leading-none glitch-text select-none">
            <span className="text-white">4</span>
            <span className="text-primary/90">0</span>
            <span className="text-white">4</span>
          </h1>
          {/* <!-- Subtext --> */}
          <div className="max-w-md mx-auto mt-4 mb-12">
            <p className="text-on-surface-variant font-body text-lg md:text-xl">
              Oops! You've drifted{" "}
              <span className="text-white font-semibold">
                beyond the core architecture.
              </span>
            </p>
            <p className="font-geist text-[10px] text-zinc-600 mt-4 uppercase tracking-widest">
              Coordinate Mismatch: NULL_POINTER_EXCEPTION //
              SEGMENT_FAULT_CORE_01
            </p>
          </div>
          {/* <!-- CTA --> */}
          <Link
            className="group relative inline-flex items-center justify-center"
            href="/"
          >
            <div className="absolute inset-0 bg-primary/20 blur-xl group-hover:bg-primary/40 transition-all rounded-full"></div>
            <button className="relative px-10 py-5 bg-surface-dim border-2 border-primary text-primary font-grotesk font-bold text-lg rounded-full tracking-tight hover:bg-primary hover:text-surface-dim transition-all duration-300 active:scale-95 glow-blue">
              Return to Home Base
            </button>
          </Link>
        </div>
        {/* <!-- System Visual Decor --> */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 w-full max-w-4xl px-8 hidden md:block">
          <div className="flex justify-between items-end border-b border-white/5 pb-4">
            <div className="flex gap-12">
              <div>
                <div className="font-geist text-[10px] text-zinc-500 uppercase">
                  Latency
                </div>
                <div className="font-geist text-sm text-secondary">0.00ms</div>
              </div>
              <div>
                <div className="font-geist text-[10px] text-zinc-500 uppercase">
                  Sector
                </div>
                <div className="font-geist text-sm text-white">VOID_04</div>
              </div>
            </div>
            <div className="flex gap-1">
              <div className="w-1 h-4 bg-secondary"></div>
              <div className="w-1 h-3 bg-white/20"></div>
              <div className="w-1 h-5 bg-white/20"></div>
              <div className="w-1 h-2 bg-secondary/50"></div>
              <div className="w-1 h-4 bg-white/20"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
