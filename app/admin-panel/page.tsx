import React from "react";
import DesktopNavbar from "../ui-components/DesktopNavbar";
import AdminSideBar from "../ui-components/AdminSideBar";

export default function Admin() {
  return (
    <div className="bg-background text-on-surface">
      {/* <!-- TopNavBar --> */}
      <DesktopNavbar />
      {/* <!-- AdminSideBar --> */}
      <AdminSideBar />
      {/* <!-- Main Canvas --> */}
      <main className="md:ml-44 pt-16 min-h-screen bg-background">
        {/* <!-- CTO Welcome Header --> */}
        <div className="mb-20 md:ml-10">
          <div className="mb-10">
            <h1 className="text-4xl font-extrabold tracking-tighter text-on-surface mb-2">
              Systems Overview
            </h1>
            <p className="text-on-surface-variant font-mono text-sm max-w-2xl">
              Real-time infrastructure health and contribution analytics for the
              kinetic architecture framework.
            </p>
          </div>
          {/* <!-- Stat Cards: Bento Grid --> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {/* <!-- Total Components --> */}
            <div className="surface-container-low p-6 rounded-full border border-white/5 relative overflow-hidden group hover:border-primary/30 transition-all duration-300">
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/10 blur-3xl rounded-full group-hover:bg-primary/20 transition-all"></div>
              <p className="text-xs font-mono text-primary-fixed uppercase tracking-widest mb-2">
                Total Components
              </p>
              <div className="flex items-end justify-between">
                <span className="text-4xl font-bold tracking-tighter font-headline text-on-surface">
                  1,284
                </span>
                <span className="text-secondary font-mono text-sm flex items-center mb-1">
                  <span className="material-symbols-outlined text-xs mr-1">
                    trending_up
                  </span>
                  +12.4%
                </span>
              </div>
            </div>
            {/* <!-- Pending Approvals --> */}
            <div className="surface-container-low p-6 rounded-full border border-white/5 relative overflow-hidden group hover:border-tertiary/30 transition-all duration-300">
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-tertiary/10 blur-3xl rounded-full group-hover:bg-tertiary/20 transition-all"></div>
              <p className="text-xs font-mono text-tertiary-fixed uppercase tracking-widest mb-2">
                Pending Approvals
              </p>
              <div className="flex items-end justify-between">
                <span className="text-4xl font-bold tracking-tighter font-headline text-on-surface">
                  42
                </span>
                <span className="text-error font-mono text-sm flex items-center mb-1">
                  <span className="material-symbols-outlined text-xs mr-1">
                    history
                  </span>
                  High Priority
                </span>
              </div>
            </div>
            {/* <!-- Approved --> */}
            <div className="surface-container-low p-6 rounded-full border border-white/5 relative overflow-hidden group hover:border-secondary/30 transition-all duration-300">
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-secondary/10 blur-3xl rounded-full group-hover:bg-secondary/20 transition-all"></div>
              <p className="text-xs font-mono text-secondary-fixed uppercase tracking-widest mb-2">
                Approved Units
              </p>
              <div className="flex items-end justify-between">
                <span className="text-4xl font-bold tracking-tighter font-headline text-on-surface">
                  1,102
                </span>
                <span className="text-zinc-500 font-mono text-sm mb-1 italic">
                  Verified
                </span>
              </div>
            </div>
            {/* <!-- Total Developers --> */}
            <div className="surface-container-low p-6 rounded-full border border-white/5 relative overflow-hidden group hover:border-white/20 transition-all duration-300">
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/5 blur-3xl rounded-full group-hover:bg-white/10 transition-all"></div>
              <p className="text-xs font-mono text-outline uppercase tracking-widest mb-2">
                Total Developers
              </p>
              <div className="flex items-end justify-between">
                <span className="text-4xl font-bold tracking-tighter font-headline text-on-surface">
                  856
                </span>
                <span className="text-secondary font-mono text-sm flex items-center mb-1">
                  <span className="material-symbols-outlined text-xs mr-1">
                    add_circle
                  </span>
                  +48
                </span>
              </div>
            </div>
          </div>
          {/* <!-- Charts Section --> */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
            {/* <!-- Component Creation Over Time --> */}
            <div className="lg:col-span-2 surface-container-low rounded-[3rem] p-8 border border-white/5 shadow-2xl">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-xl font-bold tracking-tight">
                    Component Creation Over Time
                  </h3>
                  <p className="text-xs font-mono text-zinc-500 uppercase">
                    Quarterly velocity report
                  </p>
                </div>
                <div className="flex space-x-2">
                  <span className="px-3 py-1 bg-zinc-900 rounded-full text-[10px] font-mono text-zinc-400 border border-white/5 cursor-pointer hover:text-white">
                    WEEKLY
                  </span>
                  <span className="px-3 py-1 bg-primary text-on-primary rounded-full text-[10px] font-mono font-bold cursor-pointer">
                    MONTHLY
                  </span>
                </div>
              </div>
              {/* <!-- Line Chart Visualization (SVG) --> */}
              <div className="h-64 w-full relative flex items-end overflow-hidden">
                <svg className="w-full h-full" viewBox="0 0 1000 300">
                  {/* <!-- Grid Lines --> */}
                  <line
                    stroke="#333"
                    strokeWidth="1"
                    x1="0"
                    x2="1000"
                    y1="280"
                    y2="280"
                  ></line>
                  <line
                    stroke="#222"
                    strokeWidth="1"
                    x1="0"
                    x2="1000"
                    y1="200"
                    y2="200"
                  ></line>
                  <line
                    stroke="#222"
                    strokeWidth="1"
                    x1="0"
                    x2="1000"
                    y1="120"
                    y2="120"
                  ></line>
                  <line
                    stroke="#222"
                    strokeWidth="1"
                    x1="0"
                    x2="1000"
                    y1="40"
                    y2="40"
                  ></line>
                  {/* <!-- Main Area/Line --> */}
                  <path
                    d="M0 280 L100 240 L200 260 L300 180 L400 200 L500 120 L600 150 L700 80 L800 100 L900 40 L1000 60 V300 H0 Z"
                    fill="url(#grad1)"
                    fillOpacity="0.2"
                  ></path>
                  <path
                    d="M0 280 L100 240 L200 260 L300 180 L400 200 L500 120 L600 150 L700 80 L800 100 L900 40 L1000 60"
                    fill="none"
                    stroke="#afc6ff"
                    strokeLinecap="round"
                    strokeWidth="4"
                  ></path>
                  {/* <!-- Highlight Point --> */}
                  <circle
                    className="animate-pulse"
                    cx="900"
                    cy="40"
                    fill="#c0e22f"
                    r="6"
                  ></circle>
                  <defs>
                    <linearGradient
                      id="grad1"
                      x1="0%"
                      x2="0%"
                      y1="0%"
                      y2="100%"
                    >
                      <stop
                        offset="0%"
                        className="[stop-color: #afc6ff] [stop-opacity: 1]"
                      ></stop>
                      <stop
                        offset="100%"
                        className="[stop-color: #15121a] [stop-opacity: 0]"
                      ></stop>
                    </linearGradient>
                  </defs>
                </svg>
                {/* <!-- X-Axis Labels --> */}
                <div className="absolute bottom-0 w-full flex justify-between px-2 font-mono text-[10px] text-zinc-600">
                  <span>JAN</span>
                  <span>FEB</span>
                  <span>MAR</span>
                  <span>APR</span>
                  <span>MAY</span>
                  <span>JUN</span>
                  <span>JUL</span>
                  <span>AUG</span>
                  <span>SEP</span>
                  <span>OCT</span>
                </div>
              </div>
            </div>
            {/* <!-- Category Distribution --> */}
            <div className="surface-container-low rounded-xl p-8 border border-white/5">
              <h3 className="text-xl font-bold tracking-tight mb-8">
                Category Distribution
              </h3>
              <div className="relative flex justify-center mb-8">
                {/* <!-- Circular Gauge / Donut Pie Chart Simulation --> */}
                <svg
                  className="w-48 h-48 transform -rotate-90"
                  viewBox="0 0 100 100"
                >
                  <circle
                    cx="50"
                    cy="50"
                    fill="transparent"
                    r="40"
                    stroke="#2c2831"
                    strokeWidth="8"
                  ></circle>
                  {/* <!-- Nav section (Blue) --> */}
                  <circle
                    cx="50"
                    cy="50"
                    fill="transparent"
                    r="40"
                    stroke="#afc6ff"
                    strokeDasharray="251.2"
                    strokeDashoffset="62.8"
                    strokeWidth="12"
                  ></circle>
                  {/* <!-- Shell section (Lime) --> */}
                  <circle
                    cx="50"
                    cy="50"
                    fill="transparent"
                    r="40"
                    stroke="#c0e22f"
                    strokeDasharray="251.2"
                    strokeDashoffset="188.4"
                    strokeWidth="12"
                  ></circle>
                  {/* <!-- Layout section (Purple) --> */}
                  <circle
                    cx="50"
                    cy="50"
                    fill="transparent"
                    r="40"
                    stroke="#ddb7ff"
                    strokeDasharray="251.2"
                    strokeDashoffset="226.1"
                    strokeWidth="12"
                  ></circle>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <span className="text-3xl font-bold font-headline">128</span>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                    Active Types
                  </span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                    <span className="text-xs font-mono">
                      Navigation Clusters
                    </span>
                  </div>
                  <span className="text-xs font-mono font-bold">45%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-secondary"></div>
                    <span className="text-xs font-mono">Design Shells</span>
                  </div>
                  <span className="text-xs font-mono font-bold">30%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-tertiary"></div>
                    <span className="text-xs font-mono">Layout Modules</span>
                  </div>
                  <span className="text-xs font-mono font-bold">25%</span>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Activity Feed Section --> */}
          <div className="surface-container-low rounded-xl border border-white/5 overflow-hidden">
            <div className="px-8 py-6 border-b border-white/5 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold tracking-tight">
                  System Activity Log
                </h3>
                <p className="text-xs font-mono text-zinc-500 uppercase">
                  Recent Submissions &amp; CTO Clearances
                </p>
              </div>
              <button className="text-xs font-mono text-primary hover:text-white transition-colors flex items-center">
                VIEW ALL LOGS
                <span className="material-symbols-outlined text-sm ml-2">
                  open_in_new
                </span>
              </button>
            </div>
            <div className="divide-y divide-white/5">
              {/* <!-- Activity Item 1 --> */}
              <div className="px-8 py-4 flex items-center justify-between hover:bg-white/5 transition-colors group">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary border border-secondary/20">
                    <span className="material-symbols-outlined">verified</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium">
                      Kinetic Sidebar v3.1 approved for production
                    </p>
                    <p className="text-[10px] font-mono text-zinc-500">
                      By <span className="text-blue-400">Admin/CTO</span> • 12
                      minutes ago
                    </p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-[10px] font-bold uppercase tracking-widest">
                  Clearance High
                </span>
              </div>
              {/* <!-- Activity Item 2 --> */}
              <div className="px-8 py-4 flex items-center justify-between hover:bg-white/5 transition-colors group">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                    <span className="material-symbols-outlined">
                      add_circle
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-medium">
                      New Submission: "Glassmorphic Bento Card" by
                      <span className="text-blue-400">@alex_dev</span>
                    </p>
                    <p className="text-[10px] font-mono text-zinc-500">
                      Waiting for CTO Review • 45 minutes ago
                    </p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-surface-container-highest text-zinc-400 rounded-full text-[10px] font-bold uppercase tracking-widest">
                  Pending
                </span>
              </div>
              {/* <!-- Activity Item 3 --> */}
              <div className="px-8 py-4 flex items-center justify-between hover:bg-white/5 transition-colors group">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-tertiary/10 flex items-center justify-center text-tertiary border border-tertiary/20">
                    <span className="material-symbols-outlined">terminal</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium">
                      Global CSS variables updated for
                      <span className="text-lime-400">
                        The Kinetic Architect
                      </span>
                    </p>
                    <p className="text-[10px] font-mono text-zinc-500">
                      System Core Update • 2 hours ago
                    </p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-tertiary-container text-on-tertiary-container rounded-full text-[10px] font-bold uppercase tracking-widest">
                  Core Update
                </span>
              </div>
              {/* <!-- Activity Item 4 --> */}
              <div className="px-8 py-4 flex items-center justify-between hover:bg-white/5 transition-colors group">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-error-container/10 flex items-center justify-center text-error border border-error/20">
                    <span className="material-symbols-outlined">
                      report_problem
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-medium">
                      Failed build detected: "Legacy Footer Refactor"
                    </p>
                    <p className="text-[10px] font-mono text-zinc-500">
                      Contributor: <span className="text-error">@guest_99</span>{" "}
                      • 4 hours ago
                    </p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-error-container text-on-error-container rounded-full text-[10px] font-bold uppercase tracking-widest">
                  Fatal
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Hero Section --> */}
        <section className="relative w-full h-75 overflow-hidden">
          <img
            className="w-full h-full object-cover"
            data-alt="abstract digital landscape with neon circuit lines and flowing particles in electric blue and deep purple gradients"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSALnr1FZmzkDE1sFm6Z7IYPegyAvIHh4Ibda6Cxpl0XcFBo8RL1RTuI2LRGUh_7UTzuVXvVJpRDXveezKVLjsAhYRSx3z9-Vec-O0Tln9zFF27zYl_guETufQvKu7HB15GXz-LeM0NJhb3P7DjCLtd95y9gTCOnwQ4_1HW3Ui4e-ULTxwzSm7GVN-wbU4cIRo7wLP6pg0S8wa0vyP9iZpJ1QNyJhsl8M_KtaWfF_X6T9KBFgBD9ahYFnLPrhG9LxgM4gdVV4H-JJp"
          />
          <div className="absolute inset-0 bg-linear-to-t from-background to-transparent"></div>
          <button className="flex absolute top-6 right-6 p-3 rounded-full bg-surface-container-high/60 backdrop-blur-md text-white hover:bg-primary transition-all">
            <span className="material-symbols-outlined">edit</span>
          </button>
        </section>
        {/* <!-- Profile Header --> */}
        <div className="max-w-6xl mx-auto px-6 -mt-24 relative z-10">
          <div className="flex flex-col md:flex-row items-end gap-6">
            <div className="relative">
              <div className="w-40 h-40 rounded-full border-4 border-background bg-surface-container-highest overflow-hidden shadow-xl">
                <img
                  className="w-full h-full object-cover"
                  data-alt="stylized 3D render of a futuristic avatar character wearing techwear and glowing glasses on a dark background"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKOBsjG_76m5tbWani8oo2csJ9M2pcL2rmAC9mFzzpk9fTcsGEDI39F5EwEbxpEnk9bkIUDKbD49SRU6SDrsaIyBjmVYbj8mDhIaT3jMbXYUaovsNmIFsIA-mEp2fB7gI4mCAGGldjneH0HzHOXcFqi5lCkUSJzwNsoBjoVkTlmG9edWI6mRnKau6tH-pW_McbU72BaZC1Ti01KlZgB6tg3QjTRhMU5h5f2vU6M8-0PuT6FsRuvZJnr9s2Axo3I5C9mmAy9XkEJD8e"
                />
              </div>
              <button className="flex items-center justify-center absolute bottom-2 right-2 p-2 rounded-full bg-secondary text-on-secondary-container shadow-lg hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-sm">
                  photo_camera
                </span>
              </button>
            </div>
            <div className="flex-1 pb-4">
              <div className="flex items-center gap-1">
                <h1 className="text-4xl font-grotesk font-bold tracking-tight text-white">
                  XoCode
                </h1>
                <p className="text-zinc-300 text-xs">System Architect</p>
                <button className="text-zinc-500 pl-3 hover:text-secondary transition-colors">
                  <span className="material-symbols-outlined">edit</span>
                </button>
              </div>
              <p className="text-zinc-400 mt-1 max-w-lg font-inter">
                I am 36, a passionate Fullstack Engineer pushing the boundaries
                of web interactivity. Building the future of Dev Showroom!
              </p>
            </div>
            <div className="flex gap-3 pb-4">
              <div className="bg-surface-container-high px-4 py-2 rounded-full flex items-center gap-2 border border-outline-variant/30">
                <span className="material-symbols-outlined fill text-secondary">
                  verified
                </span>
                <span className="text-sm font-grotesk font-medium text-on-surface">
                  Active Curator
                </span>
              </div>
              <div className="bg-primary/10 border border-primary/20 px-4 py-2 rounded-full flex items-center gap-2">
                <span className="text-xs font-bold geist-mono text-primary">
                  RANK #105
                </span>
              </div>
            </div>
          </div>
          {/* <!-- Tabbed Interface --> */}
          <div className="mt-12 flex gap-8 border-b border-outline-variant/20">
            <button className="pb-4 text-secondary border-b-2 border-secondary font-grotesk font-bold text-lg px-2">
              My Components
            </button>
            <button className="pb-4 text-zinc-500 hover:text-on-surface transition-colors font-grotesk font-medium text-lg px-2">
              Bookmarked
            </button>
          </div>
          {/* <!-- Grid Layout --> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10">
            {/* <!-- Card 1 --> */}
            <div className="group surface-container-low rounded-xl overflow-hidden hover:translate-y-1 transition-all duration-300 shadow-xl border border-outline-variant/10">
              <div className="h-48 overflow-hidden relative">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  data-alt="clean user interface design showcasing glassmorphism effects with vibrant colored circles in the background"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBa--AM3D7-D24u3o5jsAWlal3KfpsmXh1O4iOwedU79LXScJJeKEpwWZRcR__B8zfBjrf9AQMeK6sBMJLQwnvy6LLXu-Mzph8onHw9mXKSEVzRtzHxdVrUxcb2o_L7q0wPR9omGHvtq7arRLCh3c10pa175Pvzo7FNWYw75g--0xYQYEXUi-LskefFBzet1TK9Ws_HeZhvj2-B2k_k0Mw5See6SMEOIqvQFnTvW9fUATmXhGyG032TOAIPv-Q1rcnJCbdalKCUPNSc"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <button className="p-3 bg-primary text-on-primary rounded-full">
                    <span className="material-symbols-outlined">
                      visibility
                    </span>
                  </button>
                  <button className="p-3 bg-secondary text-on-secondary rounded-full">
                    <span className="material-symbols-outlined">favorite</span>
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-grotesk font-bold text-white mb-2">
                  Kinetic Sidebar Engine
                </h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-surface-variant overflow-hidden">
                      <img
                        data-alt="minimalist user icon placeholder"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVRcTTlvLMHSXEHKpX4uqS0u1Rauvc5WnjGB1fsLcNhHR6_mg8NfM40nUJivbxH-fDrjFpebuWP4nirWkvCt_c7sJsMvM_t0DFPamOOLk_NaOuZf0jgh0PqxjGAcV9czBLrxcLsVVO3FOKj5mRYWLA4CeAbiehEdOI7zm6JmmCsqSoL_JEPaEOGP9UYV1Iv4RBlcymBRnO_1hSkuxIAvnq5FKRXJYVNrELx1FOBDGVDFH2rsHzEs1hFbFXqNQOvNZpn6R4y_QVMMoN"
                      />
                    </div>
                    <span className="text-sm text-zinc-400 font-medium">
                      XoCode
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-zinc-500 geist-mono text-xs">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">
                        visibility
                      </span>
                      1.2k
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">
                        favorite
                      </span>
                      84
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Card 2 --> */}
            <div className="group surface-container-low rounded-xl overflow-hidden hover:translate-y-1 transition-all duration-300 shadow-xl border border-outline-variant/10">
              <div className="h-48 overflow-hidden relative">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  data-alt="modern bento grid layout presentation for a web dashboard with dark sleek modules and neon accents"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqEo87ceIvySzbsPjgz5XV0w7oCjV32SiETXfsVjXe6b0htp9N6TZW62PberqU2poTeSc3V40nlUMoCtH0QIA_UJpBUKMQ3Zi9gnoVDdYjGpvP6Jgzw3opndb7X4s_rn8nyy-wZ5QjGD1LlR7g14FNm7sFtpERcSZ1TXxDxW8dKt423UErBFHeuREy9LYOOlZpYmFXHRMVgwyY36DM8RHvDR7Qi4IqZ7KwhtPaFUb1Gc_eVm3sOQEh8vy5_exRwC6CpGwM_T8rzf6v"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <button className="p-3 bg-primary text-on-primary rounded-full">
                    <span className="material-symbols-outlined">
                      visibility
                    </span>
                  </button>
                  <button className="p-3 bg-secondary text-on-secondary rounded-full">
                    <span className="material-symbols-outlined">favorite</span>
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-grotesk font-bold text-white mb-2">
                  Bento Grid Template v2
                </h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-surface-variant overflow-hidden">
                      <img
                        data-alt="minimalist user icon placeholder"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDc2oPl-lbMGB_wtMPtS1VyfW38KIJWx5wCSUhOWmtD8N6LqcXPoJ3MX4htkPCHBXfXrRIAgqEeH-Sgv_qN584cQF2ScyoWq3q9EwPrwDkoHRcDzytzrzIfRWEEe-mj9zefCoX8Sxdpwvt9scGS45CW-MwYziq4tLAjErQg9Tws3xhRzLAyHDp88UZPJxq9ZRj5-fKHdut0_GDOROVsQvHz0X0ncEv3tJe4btlulnLxhf4BWet2GHEjdPsyxCvZcyjKwvQCzhghcElT"
                      />
                    </div>
                    <span className="text-sm text-zinc-400 font-medium">
                      XoCode
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-zinc-500 geist-mono text-xs">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">
                        visibility
                      </span>
                      3.5k
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">
                        favorite
                      </span>
                      210
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Card 3 --> */}
            <div className="group surface-container-low rounded-xl overflow-hidden hover:translate-y-1 transition-all duration-300 shadow-xl border border-outline-variant/10">
              <div className="h-48 overflow-hidden relative">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  data-alt="collection of neon glowing buttons in various colors on a pitch black background with realistic light bloom"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvIP9wdwkpB-BSJ1bLWeXlUxKLKiMC_pj-ysp6ZCQfkHc4QyzibVyUkoq3byp_DvoSt35nnTY1AV7kLJjWQ0BUxHnd7M8HHNT2YpzLjj7ZnZyFmcTmadUldri1Jcfb0NDmOpHwHrAnlVHYgIf9d2HfAvw7DbjSVcNEWfkv6gZU5Vrbin5QhdbUP6-q2voe1bPHN2zRX92pN0NXt1g4JSBg3Ty6DWsB-oZBdrgyKkhY1rP-vHJV5aFDRkvzqRyxJrnKkggLQnKDPMbo"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <button className="p-3 bg-primary text-on-primary rounded-full">
                    <span className="material-symbols-outlined">
                      visibility
                    </span>
                  </button>
                  <button className="p-3 bg-secondary text-on-secondary rounded-full">
                    <span className="material-symbols-outlined">favorite</span>
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-grotesk font-bold text-white mb-2">
                  Neon Trigger Library
                </h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-surface-variant overflow-hidden">
                      <img
                        data-alt="minimalist user icon placeholder"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGEOeajbINPLQ5CR-ML3mvGIvLFyDymhdMgAWaMN6tN-9lbMNyiU_8ybIf28Wsybd2l8r6VfmP4kw72SNwmPd8LljtK7w0A6clcKalNi3--laxk85IoIOc522RaEwMdVaCQ4mCqiG4USYe-D4LfQtqzhhOKz9fSBeUh6Z8LwscqkZIFlPU92QE6xVzxSDnmArLkyODUKApVD_mSmXphg-56Xv4izLFBSeOTdM2n3pnNXGM-m7Sy78DKgVSeGclt1uKEAXBAnnFxrYs"
                      />
                    </div>
                    <span className="text-sm text-zinc-400 font-medium">
                      XoCode
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-zinc-500 geist-mono text-xs">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">
                        visibility
                      </span>
                      850
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">
                        favorite
                      </span>
                      45
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Bento Card Large --> */}
            <div className="lg:col-span-2 group glass-panel rounded-xl overflow-hidden border border-primary/20 hover:border-primary/40 transition-all duration-300 shadow-2xl relative">
              <div className="flex flex-col md:flex-row h-full">
                <div className="flex-1 p-8 flex flex-col justify-center">
                  <span className="text-secondary font-bold geist-mono text-xs mb-2 tracking-[0.2em] uppercase">
                    Featured Work
                  </span>
                  <h2 className="text-3xl font-grotesk font-extrabold text-white mb-4">
                    Dark Matter IDE Shell
                  </h2>
                  <p className="text-zinc-400 mb-6 font-inter">
                    A high-fidelity dashboard shell designed for developers.
                    Features native-feel transitions and a custom glassmorphism
                    engine.
                  </p>
                  <div className="flex gap-4">
                    <button className="bg-primary text-on-primary font-bold px-6 py-2.5 rounded-lg flex items-center gap-2 hover:shadow-[0_0_15px_rgba(175,198,255,0.4)] transition-all">
                      View Project
                      <span className="material-symbols-outlined text-sm">
                        arrow_forward
                      </span>
                    </button>
                    <button className="border border-secondary text-on-surface font-bold px-6 py-2.5 rounded-lg hover:bg-secondary/10 transition-all">
                      Clone Repo
                    </button>
                  </div>
                </div>
                <div className="flex-1 relative overflow-hidden h-64 md:h-auto">
                  <img
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    data-alt="complex code editor interface with vibrant syntax highlighting and semi-transparent panels on a dark high-tech background"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfb3TsV7k6AkndY6-sA42h_TCvfJ5VNaL8cEPnLPEvfGZGUaDwfq8mwU7aY9nwIItdpj6XLuA5oUK3wpttdAKjeWKInYUroE1Yt7hfe-SBczsQQOnPIxK2GTOA9_oPzPd-56RVSzSzKfboileYhfQpE3LntzwpLzzV-1yJVwbJJaW0KrBPmaOsodR41ncP8hFjovwDBjZ3t9Oy-tubeBlxl7kmFti8C2ubtWsIX-s2ahG0yp8B9-wUvWc7Q1WLxeoFvGbJjt2MAdRt"
                  />
                  <div className="absolute inset-0 bg-linear-to-r from-surface-container-high via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
            {/* <!-- Quick Stats Bento --> */}
            <div className="surface-container-highest p-8 rounded-xl border border-outline-variant/10 flex flex-col justify-between">
              <div>
                <h4 className="text-zinc-400 font-grotesk font-bold text-sm uppercase tracking-widest mb-6">
                  System Health
                </h4>
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-on-surface/70 text-sm">Uptime</span>
                    <span className="geist-mono text-secondary">99.9%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-on-surface/70 text-sm">
                      Bandwidth
                    </span>
                    <span className="geist-mono text-primary">4.2 TB/s</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-on-surface/70 text-sm">Nodes</span>
                    <span className="geist-mono text-on-surface">
                      12 Active
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-outline-variant/10">
                <button className="w-full py-3 bg-surface-variant hover:bg-surface-bright transition-colors rounded-lg text-sm font-bold text-center">
                  Open Console
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* <!-- FAB (Suppressed based on context: Dashboard page usually has it, but Profile edit/view often avoids clutter unless performing a primary action) --> */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="w-16 h-16 rounded-full bg-secondary text-on-secondary shadow-[0_0_20px_rgba(192,226,47,0.3)] flex items-center justify-center hover:scale-110 active:scale-95 transition-all">
          <span className="material-symbols-outlined text-3xl">add</span>
        </button>
      </div>
    </div>
  );
}
