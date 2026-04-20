import AdminSideBar from "@/app/ui-components/AdminSideBar";
import DesktopNavbar from "@/app/ui-components/DesktopNavbar";
import React from "react";

export default function Notifications() {
  return (
    <div className="bg-background text-on-surface">
      <DesktopNavbar />
      <AdminSideBar />
      <div className="md:ml-54 pt-24 px-4 md:px-12 pb-12">
        <header className="mb-12">
          <div className="flex items-end gap-2 mb-2">
            <span className="text-secondary font-mono text-sm tracking-widest">
              /SYSTEM/NOTIFICATIONS
            </span>
            <div className="h-px flex-1 bg-linear-to-r from-secondary/30 to-transparent mb-2"></div>
          </div>
          <h1 className="text-5xl md:text-6xl font-headline font-bold tracking-tighter text-on-surface">
            Event Log
          </h1>
          <p className="text-on-surface-variant mt-4 max-w-xl font-body">
            Manage system alerts, social interactions, and architectural
            deployments from your unified notification core.
          </p>
        </header>
        {/* <!-- Bento Layout for Categories --> */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
          {/* <!-- Summary Stats (Bento Cell) --> */}
          <div className="lg:col-span-4 bg-surface-container-low rounded-[3rem] p-8 border-l-4 border-primary shadow-xl flex flex-col justify-between">
            <div>
              <h3 className="font-headline text-lg font-bold mb-1">
                UNREAD_LOAD
              </h3>
              <div className="font-mono text-4xl text-primary font-bold">
                128_MS
              </div>
            </div>
            <div className="mt-8 flex gap-2">
              <div className="h-1 flex-1 bg-primary rounded-full"></div>
              <div className="h-1 flex-1 bg-primary/20 rounded-full"></div>
              <div className="h-1 flex-1 bg-primary/20 rounded-full"></div>
            </div>
          </div>
          {/* <!-- Category Filter (Bento Cell) --> */}
          <div className="lg:col-span-8 glass-panel rounded-[3rem] p-6 flex items-center gap-4 overflow-x-auto whitespace-nowrap">
            <button className="px-6 py-3 bg-secondary text-on-secondary rounded-full font-headline font-bold text-xs uppercase tracking-widest">
              All Events
            </button>
            <button className="px-6 py-3 bg-surface-container-highest text-on-surface-variant rounded-full font-headline font-bold text-xs uppercase tracking-widest hover:text-primary transition-colors">
              System
            </button>
            <button className="px-6 py-3 bg-surface-container-highest text-on-surface-variant rounded-full font-headline font-bold text-xs uppercase tracking-widest hover:text-primary transition-colors">
              Social
            </button>
            <button className="px-6 py-3 bg-surface-container-highest text-on-surface-variant rounded-full font-headline font-bold text-xs uppercase tracking-widest hover:text-primary transition-colors">
              Gifts
            </button>
          </div>
        </div>
        {/* <!-- Notifications List --> */}
        <div className="space-y-4">
          {/* <!-- Notification Item: System --> */}
          <div className="group relative bg-surface-container-low hover:bg-surface-container-high transition-all duration-300 rounded-4xl p-6 flex flex-col md:flex-row items-start md:items-center gap-6 overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary group-hover:w-2 transition-all"></div>
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <span className="material-symbols-outlined fill text-3xl">
                terminal
              </span>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-1">
                <span className="font-mono text-[10px] text-primary bg-primary/10 px-2 py-0.5 rounded-full uppercase tracking-widest">
                  System
                </span>
                <span className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest">
                  2 MIN AGO
                </span>
              </div>
              <h3 className="text-xl font-headline font-semibold text-on-surface">
                Component submission "Glow Button" approved
              </h3>
              <p className="text-on-surface-variant text-sm font-body mt-1">
                Manifest valid. The component has been merged into the main
                production branch.
              </p>
            </div>
            <div className="flex items-center gap-3 mt-4 md:mt-0">
              <button className="px-5 py-2.5 rounded-full border border-outline-variant text-xs font-headline font-bold uppercase tracking-widest hover:bg-surface-container-highest transition-colors">
                View Pull Request
              </button>
              <button className="material-symbols-outlined text-on-surface-variant hover:text-error transition-colors">
                delete
              </button>
            </div>
          </div>
          {/* <!-- Notification Item: Social --> */}
          <div className="group relative bg-surface-container-low hover:bg-surface-container-high transition-all duration-300 rounded-4xl p-6 flex flex-col md:flex-row items-start md:items-center gap-6 overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-secondary group-hover:w-2 transition-all"></div>
            <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
              <span className="material-symbols-outlined text-3xl">work</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-1">
                <span className="font-mono text-[10px] text-secondary bg-secondary/10 px-2 py-0.5 rounded-full uppercase tracking-widest">
                  Social
                </span>
                <span className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest">
                  1 HOUR AGO
                </span>
              </div>
              <h3 className="text-xl font-headline font-semibold text-on-surface">
                New Job offer request from TechCorp
              </h3>
              <p className="text-on-surface-variant text-sm font-body mt-1">
                TechCorp is interested in your 'Architectural Motion'
                implementation. Immediate interview requested.
              </p>
            </div>
            <div className="flex items-center gap-3 mt-4 md:mt-0">
              <button className="px-5 py-2.5 rounded-full bg-secondary text-on-secondary text-xs font-headline font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-[0_0_15px_rgba(192,226,47,0.3)]">
                Review Offer
              </button>
              <button className="material-symbols-outlined text-on-surface-variant hover:text-error transition-colors">
                delete
              </button>
            </div>
          </div>
          {/* <!-- Notification Item: Gifts --> */}
          <div className="group relative bg-surface-container-low hover:bg-surface-container-high transition-all duration-300 rounded-4xl p-6 flex flex-col md:flex-row items-start md:items-center gap-6 overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-tertiary-container group-hover:w-2 transition-all"></div>
            <div className="w-14 h-14 rounded-full bg-tertiary-container/10 flex items-center justify-center text-tertiary-container shrink-0">
              <span className="material-symbols-outlined text-3xl">coffee</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-1">
                <span className="font-mono text-[10px] text-tertiary-container bg-tertiary-container/10 px-2 py-0.5 rounded-full uppercase tracking-widest">
                  Gifts
                </span>
                <span className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest">
                  3 HOURS AGO
                </span>
              </div>
              <h3 className="text-xl font-headline font-semibold text-on-surface">
                Received a "Coffee Gift" from Sarah
              </h3>
              <p className="text-on-surface-variant text-sm font-body mt-1">
                "Thanks for the amazing documentation on the Glassmorphism
                module!"
              </p>
            </div>
            <div className="flex items-center gap-3 mt-4 md:mt-0">
              <button className="px-5 py-2.5 rounded-full border border-outline-variant text-xs font-headline font-bold uppercase tracking-widest hover:bg-surface-container-highest transition-colors">
                Say Thanks
              </button>
              <button className="material-symbols-outlined text-on-surface-variant hover:text-error transition-colors">
                delete
              </button>
            </div>
          </div>
          {/* <!-- Notification Item: System (Low Priority) --> */}
          <div className="group bg-surface-container-low/50 hover:bg-surface-container-low transition-all duration-300 rounded-4xl p-6 flex flex-col md:flex-row items-start md:items-center gap-6 opacity-60 hover:opacity-100">
            <div className="w-14 h-14 rounded-full bg-outline-variant/10 flex items-center justify-center text-outline-variant shrink-0">
              <span className="material-symbols-outlined text-3xl">update</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-1">
                <span className="font-mono text-[10px] text-outline-variant bg-outline-variant/10 px-2 py-0.5 rounded-full uppercase tracking-widest">
                  System
                </span>
                <span className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest">
                  YESTERDAY
                </span>
              </div>
              <h3 className="text-xl font-headline font-semibold text-on-surface">
                Weekly security scan completed
              </h3>
              <p className="text-on-surface-variant text-sm font-body mt-1">
                0 vulnerabilities found across 42 active deployments. Next scan
                scheduled for next Monday.
              </p>
            </div>
            <div className="flex items-center gap-3 mt-4 md:mt-0">
              <button className="px-5 py-2.5 rounded-full border border-outline-variant text-xs font-headline font-bold uppercase tracking-widest hover:bg-surface-container-highest transition-colors">
                Log Details
              </button>
              <button className="material-symbols-outlined text-on-surface-variant hover:text-error transition-colors">
                delete
              </button>
            </div>
          </div>
        </div>
        {/* <!-- Pagination/Footer Actions --> */}
        <div className="mt-12 flex justify-between items-center py-6 border-t border-slate-900">
          <div className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">
            SHOWING 4 OF 248 EVENTS
          </div>
          <div className="flex gap-4">
            <button
              className="p-2 rounded-lg border border-outline-variant hover:bg-surface-container-highest disabled:opacity-30"
              disabled
            >
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="p-2 rounded-lg border border-outline-variant hover:bg-surface-container-highest">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
      </div>

      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-slate-950 flex justify-around items-center h-16 z-50 border-t border-slate-900">
        <button className="material-symbols-outlined text-slate-500">
          dashboard
        </button>
        <button className="material-symbols-outlined text-slate-500">
          bar_chart
        </button>
        <button className="material-symbols-outlined text-lime-400">
          notifications
        </button>
        <button className="material-symbols-outlined text-slate-500">
          group
        </button>
      </nav>
    </div>
  );
}
