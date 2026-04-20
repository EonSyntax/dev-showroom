import AdminSideBar from "@/app/ui-components/AdminSideBar";
import DesktopNavbar from "@/app/ui-components/DesktopNavbar";
import SideBar from "@/app/ui-components/SideBar";
import React from "react";

export default function Submissions() {
  return (
    <div>
      <DesktopNavbar />
      <AdminSideBar />
      {/* <!-- Main Content Shell --> */}
      <main className="ml-44 min-h-screen relative bg-surface-dim">
        {/* <!-- CTO Canvas --> */}
        <div className="mt-15 pt-5 space-y-12 px-10">
          {/* <!-- Approval Hero Section --> */}
          <section>
            <div className="flex items-end justify-between mb-8">
              <div>
                <h2 className="text-4xl font-headline font-bold tracking-tight text-white">
                  Pending Approvals
                </h2>
                <p className="text-zinc-500 font-geist mt-1 text-sm">
                  Review component submissions from the engineering core.
                </p>
              </div>
              <div className="flex gap-2">
                <span className="bg-surface-container-high text-zinc-400 px-4 py-1 rounded-full text-xs font-medium">
                  3 Pending
                </span>
                <span className="bg-secondary/10 text-secondary border border-secondary/20 px-4 py-1 rounded-full text-xs font-medium">
                  High Priority
                </span>
              </div>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
              {/* <!-- Component Card 1 --> */}
              <div className="glass-panel p-6 rounded-[3rem] border border-white/5 hover:border-primary/30 transition-all group relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                  <span className="material-symbols-outlined text-primary text-4xl">
                    inventory_2
                  </span>
                </div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary-container/20 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined fill">
                      widgets
                    </span>
                  </div>
                  <div>
                    <h3 className="font-headline font-bold text-on-surface">
                      DataGrid Pro
                    </h3>
                    <p className="text-[10px] font-geist text-zinc-500">
                      Submitted by @sarah_dev
                    </p>
                  </div>
                </div>
                <div className="bg-surface-container-lowest/50 rounded-full p-4 mb-6 border border-white/5">
                  <div className="flex justify-between text-[11px] mb-2">
                    <span className="text-zinc-500 font-geist">SIZE</span>
                    <span className="text-zinc-300 font-geist">42.4 KB</span>
                  </div>
                  <div className="flex justify-between text-[11px] mb-2">
                    <span className="text-zinc-500 font-geist">DEPS</span>
                    <span className="text-zinc-300 font-geist">
                      D3.js, Tailwind
                    </span>
                  </div>
                  <div className="flex justify-between text-[11px]">
                    <span className="text-zinc-500 font-geist">COVERAGE</span>
                    <span className="text-lime-400 font-geist">98.2%</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button className="flex-1 bg-primary text-on-primary font-bold py-2 rounded-full text-sm hover:brightness-110 active:scale-95 transition-all neon-glow-primary">
                    Approve
                  </button>
                  <button className="flex-1 bg-surface-container-highest text-on-surface-variant font-bold py-2 rounded-full text-sm hover:bg-error-container hover:text-on-error-container transition-all">
                    Reject
                  </button>
                </div>
              </div>
              {/* <!-- Component Card 2 --> */}
              <div className="glass-panel p-6 rounded-[3rem] border border-white/5 hover:border-primary/30 transition-all group relative overflow-hidden">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-tertiary-container/20 flex items-center justify-center text-tertiary">
                    <span className="material-symbols-outlined fill">
                      terminal
                    </span>
                  </div>
                  <div>
                    <h3 className="font-headline font-bold text-on-surface">
                      AuthHook v2
                    </h3>
                    <p className="text-[10px] font-geist text-zinc-500">
                      Submitted by @marcus_eng
                    </p>
                  </div>
                </div>
                <div className="bg-surface-container-lowest/50 rounded-full p-4 mb-6 border border-white/5">
                  <div className="flex justify-between text-[11px] mb-2">
                    <span className="text-zinc-500 font-geist">SIZE</span>
                    <span className="text-zinc-300 font-geist">12.1 KB</span>
                  </div>
                  <div className="flex justify-between text-[11px] mb-2">
                    <span className="text-zinc-500 font-geist">DEPS</span>
                    <span className="text-zinc-300 font-geist">JWT-Decode</span>
                  </div>
                  <div className="flex justify-between text-[11px]">
                    <span className="text-zinc-500 font-geist">SECURITY</span>
                    <span className="text-primary font-geist">LEVEL_4</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button className="flex-1 bg-primary text-on-primary font-bold py-2 rounded-full text-sm hover:brightness-110 active:scale-95 transition-all neon-glow-primary">
                    Approve
                  </button>
                  <button className="flex-1 bg-surface-container-highest text-on-surface-variant font-bold py-2 rounded-full text-sm hover:bg-error-container hover:text-on-error-container transition-all">
                    Reject
                  </button>
                </div>
              </div>
              {/* <!-- Component Card 3 --> */}
              <div className="glass-panel p-6 rounded-[3rem] border border-white/5 hover:border-primary/30 transition-all group relative overflow-hidden">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary">
                    <span className="material-symbols-outlined fill">
                      animation
                    </span>
                  </div>
                  <div>
                    <h3 className="font-headline font-bold text-on-surface">
                      LottieModule
                    </h3>
                    <p className="text-[10px] font-geist text-zinc-500">
                      Submitted by @pixel_master
                    </p>
                  </div>
                </div>
                <div className="bg-surface-container-lowest/50 rounded-full p-4 mb-6 border border-white/5">
                  <div className="flex justify-between text-[11px] mb-2">
                    <span className="text-zinc-500 font-geist">SIZE</span>
                    <span className="text-zinc-300 font-geist">245.0 KB</span>
                  </div>
                  <div className="flex justify-between text-[11px] mb-2">
                    <span className="text-zinc-500 font-geist">DEPS</span>
                    <span className="text-zinc-300 font-geist">
                      React-Lottie
                    </span>
                  </div>
                  <div className="flex justify-between text-[11px]">
                    <span className="text-zinc-500 font-geist">PERF</span>
                    <span className="text-error font-geist">WARN</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button className="flex-1 bg-primary text-on-primary font-bold py-2 rounded-full text-sm hover:brightness-110 active:scale-95 transition-all neon-glow-primary">
                    Approve
                  </button>
                  <button className="flex-1 bg-surface-container-highest text-on-surface-variant font-bold py-2 rounded-full text-sm hover:bg-error-container hover:text-on-error-container transition-all">
                    Reject
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* <!-- Developers Canvas --> */}
        <div className="pt-24 pb-12 px-10">
          {/* <!-- Header Section --> */}
          <div className="flex justify-between items-end mb-10">
            <div>
              <nav className="flex items-center gap-2 text-xs font-geist text-zinc-500 mb-2">
                <span className="hover:text-lime-400 cursor-pointer">
                  ADMIN
                </span>
                <span
                  className="material-symbols-outlined text-[10px]"
                  data-icon="chevron_right"
                >
                  chevron_right
                </span>
                <span className="text-zinc-300">SUBMISSIONS</span>
              </nav>
              <h2 className="text-4xl font-black tracking-tighter text-on-surface uppercase">
                Submissions Matrix
              </h2>
              <p className="text-zinc-400 mt-2 font-geist text-sm">
                Managing 142 architectural modules in the stable branch.
              </p>
            </div>
            <button className="flex items-center gap-3 bg-secondary text-on-secondary px-8 py-3.5 rounded-full font-bold shadow-[0_0_20px_rgba(192,226,47,0.2)] hover:shadow-[0_0_30px_rgba(192,226,47,0.4)] transition-all active:scale-[0.98]">
              <span
                className="material-symbols-outlined fill"
                data-icon="add_circle"
              >
                add_circle
              </span>
              CREATE COMPONENT
            </button>
          </div>
          {/* <!-- Management Tools / Filters --> */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <div className="flex items-center gap-2 bg-surface-container-high px-4 py-2 rounded-full border border-white/5">
              <span
                className="material-symbols-outlined text-sm text-zinc-500"
                data-icon="filter_alt"
              >
                filter_alt
              </span>
              <select className="bg-transparent border-none focus:ring-0 text-sm font-grotesk font-medium p-0 text-on-surface">
                <option>All Categories</option>
                <option>Navigation</option>
                <option>Data Display</option>
                <option>Forms</option>
                <option>Feedback</option>
              </select>
            </div>
            <div className="flex items-center gap-2 bg-surface-container-high px-4 py-2 rounded-full border border-white/5">
              <span
                className="material-symbols-outlined text-sm text-zinc-500"
                data-icon="stacks"
              >
                stacks
              </span>
              <select className="bg-transparent border-none focus:ring-0 text-sm font-grotesk font-medium p-0 text-on-surface">
                <option>All Statuses</option>
                <option>Approved</option>
                <option>Pending</option>
                <option>Draft</option>
              </select>
            </div>
            <div className="flex items-center gap-2 bg-surface-container-high px-4 py-2 rounded-full border border-white/5">
              <span
                className="material-symbols-outlined text-sm text-zinc-500"
                data-icon="history"
              >
                history
              </span>
              <select className="bg-transparent border-none focus:ring-0 text-sm font-grotesk font-medium p-0 text-on-surface">
                <option>Last 30 Days</option>
                <option>This Quarter</option>
                <option>Legacy</option>
              </select>
            </div>
            <div className="ml-auto flex items-center gap-2">
              <span className="text-xs font-geist text-zinc-500">
                Sorted by:
              </span>
              <button className="text-xs font-geist text-on-surface border-b border-secondary">
                Recently Updated
              </button>
            </div>
          </div>
          {/* <!-- Component Table --> */}
          <div className="bg-surface-container-low rounded-[3rem] overflow-hidden border border-white/5">
            <table className="w-full text-left border-collapse">
              <thead className="bg-surface-container-high/50 border-b border-white/10">
                <tr>
                  <th className="px-6 py-4 text-[10px] font-geist text-zinc-500 uppercase tracking-widest">
                    Name
                  </th>
                  <th className="px-6 py-4 text-[10px] font-geist text-zinc-500 uppercase tracking-widest">
                    Category
                  </th>
                  <th className="px-6 py-4 text-[10px] font-geist text-zinc-500 uppercase tracking-widest">
                    Subcategory
                  </th>
                  <th className="px-6 py-4 text-[10px] font-geist text-zinc-500 uppercase tracking-widest text-center">
                    Status
                  </th>
                  <th className="px-6 py-4 text-[10px] font-geist text-zinc-500 uppercase tracking-widest">
                    Author
                  </th>
                  <th className="px-6 py-4 text-[10px] font-geist text-zinc-500 uppercase tracking-widest text-right">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {/* <!-- Row 1 --> */}
                <tr className="hover:bg-white/2 transition-colors group">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                        <span
                          className="material-symbols-outlined text-lg"
                          data-icon="layers"
                        >
                          layers
                        </span>
                      </div>
                      <span className="font-grotesk font-bold text-on-surface tracking-tight">
                        BentoGridCore
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="text-xs font-geist text-zinc-400">
                      Layout
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <span className="text-xs font-geist text-zinc-400">
                      Dashboard
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex justify-center">
                      <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-secondary-container/20 text-secondary-fixed border border-secondary/20 uppercase tracking-wider">
                        Approved
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center overflow-hidden">
                        <img
                          alt="Author avatar"
                          className="w-full h-full object-cover"
                          data-alt="close up of a person wearing a futuristic tech visor with neon reflections"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDF5N5rc2nCiQSk1zFfAt5UB6nlawHpvOPE291Y8lIxyAmpJLEpV9XHlhbkc-hnIWD87E96XmXWGLNM4bJTtN7ATS_LZAPrWQ2F3yYh0k2TzHjUNRZk9nlsQjNZeq1lvsLpwGKt9BdEPS6WCU4zAggxu_jEGUPjzOGe7qjFZwCEjGbd7laaEzQLkeB98Ou5UaJQsjd_gJsOZfZUaz5Rv-NRx-NPSma3UaVNe7uHnmwYMbGfygilJkBWFOwMngxvzrgkm531z7HXc_zi"
                        />
                      </div>
                      <span className="text-xs font-grotesk font-medium text-on-surface-variant">
                        e.codes
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 rounded-lg hover:bg-zinc-800 text-zinc-400 hover:text-primary transition-all">
                        <span
                          className="material-symbols-outlined text-lg"
                          data-icon="edit"
                        >
                          edit
                        </span>
                      </button>
                      <button className="p-2 rounded-lg hover:bg-zinc-800 text-zinc-400 hover:text-white transition-all">
                        <span
                          className="material-symbols-outlined text-lg"
                          data-icon="visibility"
                        >
                          visibility
                        </span>
                      </button>
                      <button className="p-2 rounded-lg hover:bg-zinc-800 text-zinc-400 hover:text-error transition-all">
                        <span
                          className="material-symbols-outlined text-lg"
                          data-icon="delete"
                        >
                          delete
                        </span>
                      </button>
                    </div>
                  </td>
                </tr>
                {/* <!-- Row 2 --> */}
                <tr className="hover:bg-white/2 transition-colors group">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-tertiary/10 flex items-center justify-center text-tertiary border border-tertiary/20">
                        <span
                          className="material-symbols-outlined text-lg"
                          data-icon="monitoring"
                        >
                          monitoring
                        </span>
                      </div>
                      <span className="font-grotesk font-bold text-on-surface tracking-tight">
                        KineticChart_v2
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="text-xs font-geist text-zinc-400">
                      Data Visualization
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <span className="text-xs font-geist text-zinc-400">
                      Analytics
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex justify-center">
                      <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-primary-container/20 text-primary-fixed-dim border border-primary/20 uppercase tracking-wider">
                        Pending
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center overflow-hidden">
                        <img
                          alt="Author avatar"
                          className="w-full h-full object-cover"
                          data-alt="cyberpunk profile avatar with colorful digital glitches and purple lighting"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoY2YcExJ4xpsG6GBAFpSUNACiMLca6n9aeoY2OMHL615MZzOpqU-ENrjctOX3yeosyvHaWqJudvdWHQttCL3CNbKvOfsvf9iASU-yHm1xJevChbyzfMTTTZk8V_kvy6taOlLY_XM4wgmEyzJyIbFAzHD6Fzxq9qLMgw7iCfxtRXpTtkiAhXtWJ9ZLgjXFC3kuxk6rB8mLoZxRuOtZiywP1eT5CXbzi4fHnwZzz1zMsXMdYhzwXIsNBdKySNLUtBpC-qVznL7S-SuV"
                        />
                      </div>
                      <span className="text-xs font-grotesk font-medium text-on-surface-variant">
                        archi_tect
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 rounded-lg hover:bg-zinc-800 text-zinc-400 hover:text-primary transition-all">
                        <span
                          className="material-symbols-outlined text-lg"
                          data-icon="edit"
                        >
                          edit
                        </span>
                      </button>
                      <button className="p-2 rounded-lg hover:bg-zinc-800 text-zinc-400 hover:text-white transition-all">
                        <span
                          className="material-symbols-outlined text-lg"
                          data-icon="visibility"
                        >
                          visibility
                        </span>
                      </button>
                      <button className="p-2 rounded-lg hover:bg-zinc-800 text-zinc-400 hover:text-error transition-all">
                        <span
                          className="material-symbols-outlined text-lg"
                          data-icon="delete"
                        >
                          delete
                        </span>
                      </button>
                    </div>
                  </td>
                </tr>
                {/* <!-- Row 3 --> */}
                <tr className="hover:bg-white/2 transition-colors group">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-on-surface-variant/10 flex items-center justify-center text-on-surface-variant border border-white/10">
                        <span
                          className="material-symbols-outlined text-lg"
                          data-icon="input"
                        >
                          input
                        </span>
                      </div>
                      <span className="font-grotesk font-bold text-on-surface tracking-tight">
                        NeonInputGroup
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="text-xs font-geist text-zinc-400">
                      Forms
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <span className="text-xs font-geist text-zinc-400">
                      Authentication
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex justify-center">
                      <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-surface-container-highest/50 text-zinc-500 border border-white/5 uppercase tracking-wider">
                        Draft
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center overflow-hidden">
                        <img
                          alt="Author avatar"
                          className="w-full h-full object-cover"
                          data-alt="pixel art style portrait of a developer with a green cap and glasses"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvBw6ySOFfiwwK0sfmKcZ0EPwXipQ-R30CydwejVVIMbOI8mvvmi5aMeniD3VOq79YqkkrO0RabOAaNRvOfVq6sTd4YzeC41TPwg0plIbC-SsvL71AeGOK52_ENR3BMybcUGJOCuiiRLK57xnjDUzk4WkjATG2NjYMSYcNZTTm_iJZ_gtV55wxXVsDzmTL6nPI_r71boV6Kh5SVbMt37SHIzt8C6pWk7YD0qj7qaWNAg4xWMAfejbiEQVzptHSA0FjWIhNA1WW70S-"
                        />
                      </div>
                      <span className="text-xs font-grotesk font-medium text-on-surface-variant">
                        pixel_pusher
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 rounded-lg hover:bg-zinc-800 text-zinc-400 hover:text-primary transition-all">
                        <span
                          className="material-symbols-outlined text-lg"
                          data-icon="edit"
                        >
                          edit
                        </span>
                      </button>
                      <button className="p-2 rounded-lg hover:bg-zinc-800 text-zinc-400 hover:text-white transition-all">
                        <span
                          className="material-symbols-outlined text-lg"
                          data-icon="visibility"
                        >
                          visibility
                        </span>
                      </button>
                      <button className="p-2 rounded-lg hover:bg-zinc-800 text-zinc-400 hover:text-error transition-all">
                        <span
                          className="material-symbols-outlined text-lg"
                          data-icon="delete"
                        >
                          delete
                        </span>
                      </button>
                    </div>
                  </td>
                </tr>
                {/* <!-- Row 4 --> */}
                <tr className="hover:bg-white/2 transition-colors group">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary border border-secondary/20">
                        <span
                          className="material-symbols-outlined text-lg"
                          data-icon="navigation"
                        >
                          navigation
                        </span>
                      </div>
                      <span className="font-grotesk font-bold text-on-surface tracking-tight">
                        OrbitalSideNav
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="text-xs font-geist text-zinc-400">
                      Navigation
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <span className="text-xs font-geist text-zinc-400">
                      Shell
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex justify-center">
                      <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-secondary-container/20 text-secondary-fixed border border-secondary/20 uppercase tracking-wider">
                        Approved
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center overflow-hidden">
                        <img
                          alt="Author avatar"
                          className="w-full h-full object-cover"
                          data-alt="hyper-realistic portrait of a tech professional in a dark room with subtle blue and lime neon lighting reflecting on their face"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuClvPJgH4XQIz8ZrV_sywpOhqOOTZKFc-t8OUZlmmSdMYwCPK8aPFupxkJZxn5_wKjUIg3igzJix3CarqReTdZGyT5EO3_8FCZtTqWtZpcWZCfskeUFkkNGwf64NTSNwd3A7U1O78Jc-TyVGGJ7J5Cea7RRtB879K0JgpFggCv2XG_YwSSJnYaj86X8e183Ab6WWvAqdLQMUQn_ZrcJGm-6OV7U5MlPsX5_NMViL2YoggZgXYpFqHVgNn6w3YuCYYP04hnPHP9ni4iW"
                        />
                      </div>
                      <span className="text-xs font-grotesk font-medium text-on-surface-variant">
                        e.codes
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 rounded-lg hover:bg-zinc-800 text-zinc-400 hover:text-primary transition-all">
                        <span
                          className="material-symbols-outlined text-lg"
                          data-icon="edit"
                        >
                          edit
                        </span>
                      </button>
                      <button className="p-2 rounded-lg hover:bg-zinc-800 text-zinc-400 hover:text-white transition-all">
                        <span
                          className="material-symbols-outlined text-lg"
                          data-icon="visibility"
                        >
                          visibility
                        </span>
                      </button>
                      <button className="p-2 rounded-lg hover:bg-zinc-800 text-zinc-400 hover:text-error transition-all">
                        <span
                          className="material-symbols-outlined text-lg"
                          data-icon="delete"
                        >
                          delete
                        </span>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            {/* <!-- Pagination --> */}
            <div className="bg-surface-container-high/30 px-6 py-4 flex items-center justify-between border-t border-white/5">
              <span className="text-xs font-geist text-zinc-500">
                Showing <span className="text-on-surface">1-4</span> of 142
                architectural modules
              </span>
              <div className="flex items-center gap-1">
                <button className="w-8 h-8 flex items-center justify-center rounded bg-zinc-900 border border-white/5 text-zinc-500 hover:text-white transition-all">
                  <span
                    className="material-symbols-outlined text-sm"
                    data-icon="chevron_left"
                  >
                    chevron_left
                  </span>
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-full bg-secondary text-on-secondary font-bold text-xs">
                  1
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded bg-zinc-900 border border-white/5 text-zinc-400 text-xs hover:text-white transition-all">
                  2
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded bg-zinc-900 border border-white/5 text-zinc-400 text-xs hover:text-white transition-all">
                  3
                </button>
                <span className="px-2 text-zinc-600">...</span>
                <button className="w-8 h-8 flex items-center justify-center rounded bg-zinc-900 border border-white/5 text-zinc-400 text-xs hover:text-white transition-all">
                  36
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded bg-zinc-900 border border-white/5 text-zinc-500 hover:text-white transition-all">
                  <span
                    className="material-symbols-outlined text-sm"
                    data-icon="chevron_right"
                  >
                    chevron_right
                  </span>
                </button>
              </div>
            </div>
          </div>
          {/* <!-- Dashboard Stats Bento Grid (Mini) --> */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-surface-container-low p-5 rounded-full border border-white/5">
              <p className="text-[10px] font-geist text-zinc-500 uppercase tracking-widest mb-1">
                Total Build Size
              </p>
              <div className="flex items-end justify-between">
                <h4 className="text-2xl font-black text-on-surface">
                  124.5
                  <span className="text-sm font-geist font-normal text-zinc-500 ml-1">
                    KB
                  </span>
                </h4>
                <span className="text-[10px] font-geist text-lime-400">
                  -12% optimized
                </span>
              </div>
            </div>
            <div className="bg-surface-container-low p-5 rounded-full border border-white/5">
              <p className="text-[10px] font-geist text-zinc-500 uppercase tracking-widest mb-1">
                Global Imports
              </p>
              <div className="flex items-end justify-between">
                <h4 className="text-2xl font-black text-on-surface">2,842</h4>
                <span className="text-[10px] font-geist text-blue-400">
                  +142 this week
                </span>
              </div>
            </div>
            <div className="bg-surface-container-low p-5 rounded-full border border-white/5">
              <p className="text-[10px] font-geist text-zinc-500 uppercase tracking-widest mb-1">
                Average Perf Score
              </p>
              <div className="flex items-end justify-between">
                <h4 className="text-2xl font-black text-on-surface">98</h4>
                <div className="flex items-center text-lime-400">
                  <span
                    className="material-symbols-outlined fill text-sm"
                    data-icon="bolt"
                  >
                    bolt
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-low p-5 rounded-full border border-white/5">
              <p className="text-[10px] font-geist text-zinc-500 uppercase tracking-widest mb-1">
                Active Submissions
              </p>
              <div className="flex items-end justify-between">
                <h4 className="text-2xl font-black text-on-surface">12</h4>
                <span className="text-[10px] font-geist text-zinc-500">
                  Wait time: 2h
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
