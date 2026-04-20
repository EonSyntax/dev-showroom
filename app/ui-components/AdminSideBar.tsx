import Link from "next/link";
import React from "react";

export default function AdminSideBar() {
  return (
    <aside className="hidden md:flex flex-col gap-1 w-54 h-screen fixed left-0 top-0 pt-20 bg-[#15121a] no-border font-['Space_Grotesk'] text-sm tracking-wide z-40">
      <div className="px-6 mb-8">
        <h2 className="text-lg font-black text-white">XoCode</h2>
        <p className="text-zinc-500 text-xs">System Architect</p>
      </div>
      <nav className="flex flex-col">
        <Link
          className="border-l-2 border-[#c0e22f] bg-linear-to-r from-[#afc6ff]/10 to-transparent text-[#afc6ff] font-bold px-6 py-3 flex items-center gap-3 hover:text-zinc-100 hover:bg-[#2c2831]/50 transition-colors"
          href="/admin-panel"
        >
          <span className="material-symbols-outlined">dashboard</span> Dashboard
        </Link>
        <Link
          className="text-zinc-500 font-medium px-6 py-3 flex items-center gap-3 hover:text-zinc-100 hover:bg-[#2c2831]/50 transition-colors"
          href="/admin-panel/submissions"
        >
          <span className="material-symbols-outlined">send</span> Submissions
        </Link>
        <Link
          className="text-zinc-500 font-medium px-6 py-3 flex items-center gap-3 hover:text-zinc-100 hover:bg-[#2c2831]/50 transition-colors"
          href="/admin-panel/frameworks"
        >
          <span className="material-symbols-outlined">category</span> Frameworks
        </Link>
        <Link
          className="text-zinc-500 font-medium px-6 py-3 flex items-center gap-3 hover:text-zinc-100 hover:bg-[#2c2831]/50 transition-colors"
          href="/admin-panel/developers"
        >
          <span className="material-symbols-outlined">group</span> Developers
        </Link>
      </nav>
    </aside>
  );
}
