import AdminSideBar from "@/app/ui-components/AdminSideBar";
import DesktopNavbar from "@/app/ui-components/DesktopNavbar";
import React from "react";

export default function Frameworks() {
  return (
    <div>
        <DesktopNavbar />
        <AdminSideBar />
      <main className="flex-1 ml-50 min-h-screen flex flex-col bg-surface-dim text-on-surface">
        <div className="p-8 space-y-8 max-w-full mx-auto w-full mt-10">
          {/* <!-- Page Header --> */}
          <div className="flex justify-between items-end">
            <div>
              <h2 className="text-4xl font-black text-on-surface font-grotesk tracking-tighter">
                System Orchestration
              </h2>
              <p className="text-outline mt-1 font-inter">
                Manage core architectural building blocks and global modular
                definitions.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="px-4 py-2 bg-surface-container-low rounded-full border border-white/5 flex items-center gap-4">
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 rounded-full border border-surface-dim bg-primary/20 flex items-center justify-center text-[10px] font-geist">
                    JS
                  </div>
                  <div className="w-6 h-6 rounded-full border border-surface-dim bg-secondary/20 flex items-center justify-center text-[10px] font-geist">
                    CS
                  </div>
                  <div className="w-6 h-6 rounded-full border border-surface-dim bg-tertiary/20 flex items-center justify-center text-[10px] font-geist">
                    TH
                  </div>
                </div>
                <span className="text-xs font-geist text-outline uppercase tracking-widest">
                  Active Engines: 12
                </span>
              </div>
            </div>
          </div>
          {/* <!-- Bento Grid Layout --> */}
          <div className="grid grid-cols-12 gap-6">
            {/* <!-- Section 1: Framework Management (Large Bento Cell) --> */}
            <div className="col-span-12 lg:col-span-8 bg-surface-container-low rounded-4xl p-6 border border-white/5 flex flex-col">
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-8 bg-primary rounded-full"></div>
                  <h3 className="text-xl font-bold text-on-surface font-grotesk">
                    Framework Management
                  </h3>
                </div>
                <button className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-full border border-outline-variant text-sm font-geist text-on-surface transition-all flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">
                    add_circle
                  </span>
                  Add Framework
                </button>
              </div>
              <div className="overflow-hidden">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-white/5 text-[10px] font-geist text-outline uppercase tracking-widest">
                      <th className="pb-4 font-normal">Framework</th>
                      <th className="pb-4 font-normal">Integration</th>
                      <th className="pb-4 font-normal">Status</th>
                      <th className="pb-4 font-normal">Load Time</th>
                      <th className="pb-4 font-normal text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {/* <!-- Row: CSS --> */}
                    <tr className="group hover:bg-white/2 transition-colors">
                      <td className="py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-[#264de4]/20 flex items-center justify-center text-[#264de4]">
                            <span className="material-symbols-outlined">
                              css
                            </span>
                          </div>
                          <span className="font-bold text-on-surface">
                            Tailwind CSS
                          </span>
                        </div>
                      </td>
                      <td className="py-4 font-geist text-sm text-outline">
                        PostCSS / JIT
                      </td>
                      <td className="py-4">
                        <span className="inline-flex items-center px-2 py-1 rounded-full bg-secondary/10 text-secondary text-[10px] font-bold uppercase tracking-tighter">
                          <span className="w-1 h-1 rounded-full bg-secondary mr-1.5"></span>
                          Stable
                        </span>
                      </td>
                      <td className="py-4 font-geist text-sm text-primary">
                        0.12ms
                      </td>
                      <td className="py-4 text-right">
                        <div className="flex justify-end gap-2">
                          <button className="p-2 text-outline hover:text-primary transition-colors">
                            <span className="material-symbols-outlined text-lg">
                              edit
                            </span>
                          </button>
                          <button className="p-2 text-outline hover:text-error transition-colors">
                            <span className="material-symbols-outlined text-lg">
                              delete
                            </span>
                          </button>
                        </div>
                      </td>
                    </tr>
                    {/* <!-- Row: GSAP --> */}
                    <tr className="group hover:bg-white/2 transition-colors">
                      <td className="py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                            <span className="material-symbols-outlined">
                              auto_graph
                            </span>
                          </div>
                          <span className="font-bold text-on-surface">
                            GSAP
                          </span>
                        </div>
                      </td>
                      <td className="py-4 font-geist text-sm text-outline">
                        JS Plugin
                      </td>
                      <td className="py-4">
                        <span className="inline-flex items-center px-2 py-1 rounded-full bg-secondary/10 text-secondary text-[10px] font-bold uppercase tracking-tighter">
                          <span className="w-1 h-1 rounded-full bg-secondary mr-1.5"></span>
                          Active
                        </span>
                      </td>
                      <td className="py-4 font-geist text-sm text-primary">
                        1.45ms
                      </td>
                      <td className="py-4 text-right">
                        <div className="flex justify-end gap-2">
                          <button className="p-2 text-outline hover:text-primary transition-colors">
                            <span className="material-symbols-outlined text-lg">
                              edit
                            </span>
                          </button>
                          <button className="p-2 text-outline hover:text-error transition-colors">
                            <span className="material-symbols-outlined text-lg">
                              delete
                            </span>
                          </button>
                        </div>
                      </td>
                    </tr>
                    {/* <!-- Row: Framer Motion --> */}
                    <tr className="group hover:bg-white/2 transition-colors">
                      <td className="py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                            <span className="material-symbols-outlined">
                              animation
                            </span>
                          </div>
                          <span className="font-bold text-on-surface">
                            Motion
                          </span>
                        </div>
                      </td>
                      <td className="py-4 font-geist text-sm text-outline">
                        React / SVG
                      </td>
                      <td className="py-4">
                        <span className="inline-flex items-center px-2 py-1 rounded-full bg-secondary/10 text-secondary text-[10px] font-bold uppercase tracking-tighter">
                          <span className="w-1 h-1 rounded-full bg-secondary mr-1.5"></span>
                          Ready
                        </span>
                      </td>
                      <td className="py-4 font-geist text-sm text-primary">
                        0.88ms
                      </td>
                      <td className="py-4 text-right">
                        <div className="flex justify-end gap-2">
                          <button className="p-2 text-outline hover:text-primary transition-colors">
                            <span className="material-symbols-outlined text-lg">
                              edit
                            </span>
                          </button>
                          <button className="p-2 text-outline hover:text-error transition-colors">
                            <span className="material-symbols-outlined text-lg">
                              delete
                            </span>
                          </button>
                        </div>
                      </td>
                    </tr>
                    {/* <!-- Row: Three.js --> */}
                    <tr className="group hover:bg-white/2 transition-colors">
                      <td className="py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white">
                            <span className="material-symbols-outlined">
                              deployed_code
                            </span>
                          </div>
                          <span className="font-bold text-on-surface">
                            Three.js
                          </span>
                        </div>
                      </td>
                      <td className="py-4 font-geist text-sm text-outline">
                        WebGL / GLSL
                      </td>
                      <td className="py-4">
                        <span className="inline-flex items-center px-2 py-1 rounded-full bg-error/10 text-error text-[10px] font-bold uppercase tracking-tighter">
                          <span className="w-1 h-1 rounded-full bg-error mr-1.5"></span>
                          Updating
                        </span>
                      </td>
                      <td className="py-4 font-geist text-sm text-primary">
                        12.4ms
                      </td>
                      <td className="py-4 text-right">
                        <div className="flex justify-end gap-2">
                          <button className="p-2 text-outline hover:text-primary transition-colors">
                            <span className="material-symbols-outlined text-lg">
                              edit
                            </span>
                          </button>
                          <button className="p-2 text-outline hover:text-error transition-colors">
                            <span className="material-symbols-outlined text-lg">
                              delete
                            </span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* <!-- Section 2: Global Sub-categories (Side Bento Cell) --> */}
            <div className="col-span-12 lg:col-span-4 space-y-6">
              <div className="bg-surface-container-high rounded-[3rem] p-6 border border-primary/20 relative overflow-hidden">
                {/* <!-- Decorative Glow --> */}
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/20 blur-[60px] rounded-full"></div>
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-xl font-bold font-grotesk text-on-surface leading-none">
                        Global Sub-categories
                      </h3>
                      <p className="text-xs text-primary mt-2 font-geist uppercase tracking-widest">
                        Cross-Platform Sync Enabled
                      </p>
                    </div>
                    <span
                      className="material-symbols-outlined fill text-primary"
                    >
                      public
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {/* <!-- Category Cards --> */}
                    <div className="flex flex-col items-center justify-center glass-card p-4 rounded-full border border-white/5 hover:border-primary/40 transition-all cursor-pointer group">
                      <span className="material-symbols-outlined text-secondary text-sm mb-2">
                        style
                      </span>
                      <p className="font-bold text-sm">Cards</p>
                      <p className="text-[10px] text-outline font-geist">
                        14 Variants
                      </p>
                    </div>
                    <div className="flex flex-col items-center justify-center glass-card p-4 rounded-full border border-white/5 hover:border-primary/40 transition-all cursor-pointer group">
                      <span className="material-symbols-outlined text-secondary text-sm mb-2">
                        ads_click
                      </span>
                      <p className="font-bold text-sm">Buttons</p>
                      <p className="text-[10px] text-outline font-geist">
                        22 Variants
                      </p>
                    </div>
                    <div className="flex flex-col items-center justify-center glass-card p-4 rounded-full border border-white/5 hover:border-primary/40 transition-all cursor-pointer group">
                      <span className="material-symbols-outlined text-secondary text-sm mb-2">
                        movie
                      </span>
                      <p className="font-bold text-sm">Animations</p>
                      <p className="text-[10px] text-outline font-geist">
                        08 Variants
                      </p>
                    </div>
                    <div className="flex flex-col items-center justify-center glass-card p-4 rounded-full border border-white/5 hover:border-primary/40 transition-all cursor-pointer group">
                      <span className="material-symbols-outlined text-secondary text-sm mb-2">
                        progress_activity
                      </span>
                      <p className="font-bold text-sm">Loaders</p>
                      <p className="text-[10px] text-outline font-geist">
                        11 Variants
                      </p>
                    </div>
                    <div className="glass p-4 rounded-4xl border border-white/5 hover:border-primary/40 transition-all cursor-pointer group col-span-2">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-bold text-sm">Hero Sections</p>
                          <p className="text-[10px] text-outline font-geist">
                            05 Variants
                          </p>
                        </div>
                        <span className="material-symbols-outlined text-secondary">
                          view_quilt
                        </span>
                      </div>
                    </div>
                  </div>
                  <button className="w-full py-3 rounded-full border border-secondary/50 text-on-surface font-geist text-xs uppercase tracking-widest hover:bg-secondary hover:text-on-secondary transition-all flex items-center justify-center gap-2 group">
                    <span className="material-symbols-outlined text-sm transition-transform group-hover:rotate-90">
                      add
                    </span>
                    Add Sub-category
                  </button>
                </div>
              </div>
              {/* <!-- Quick Stats / System Health --> */}
              <div className="bg-surface-container-low rounded-xl p-6 border border-white/5">
                <h4 className="text-xs font-geist text-outline uppercase tracking-widest mb-4">
                  System Status
                </h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-inter">
                      Global API Latency
                    </span>
                    <span className="text-sm font-geist text-secondary">
                      24ms
                    </span>
                  </div>
                  <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                    <div className="h-full bg-secondary w-4/5"></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-inter">
                      Storage Utilization
                    </span>
                    <span className="text-sm font-geist text-primary">
                      64.2GB
                    </span>
                  </div>
                  <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-2/3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Informational Footer / Global Hint --> */}
          <div className="bg-primary-container/10 border border-primary/20 rounded-full p-4 flex items-center gap-4">
            <span className="material-symbols-outlined fill text-primary">
              info
            </span>
            <p className="text-sm text-primary-fixed leading-relaxed">
              <strong className="font-bold">Architectural Note: </strong>
              Sub-categories are
              <span className="font-geist text-primary">{" "}GLOBAL</span>. Modifying
              or adding a sub-category will propagate schemas across all linked
              frameworks including CSS, JS, and WebGL modules.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
