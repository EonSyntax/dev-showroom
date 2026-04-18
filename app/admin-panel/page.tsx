import React from "react";
import DesktopNavbar from "../ui-components/DesktopNavbar";

export default function Admin() {
  return (
    <div className="bg-background text-on-surface">
      {/* <!-- TopNavBar --> */}
      <DesktopNavbar />
      {/* <!-- SideNavBar --> */}
      <aside className="hidden md:flex flex-col gap-1 w-64 h-screen fixed left-0 top-0 pt-20 bg-[#15121a] bg-[#1d1a22] no-border font-['Space_Grotesk'] text-sm tracking-wide z-40">
        <div className="px-6 mb-8">
          <h2 className="text-lg font-black text-white">Emmanuel</h2>
          <p className="text-zinc-500 text-xs">System Architect</p>
        </div>
        <nav className="flex flex-col">
          <a
            className="border-l-2 border-[#c0e22f] bg-gradient-to-r from-[#afc6ff]/10 to-transparent text-[#afc6ff] font-bold px-6 py-3 flex items-center gap-3 hover:text-zinc-100 hover:bg-[#2c2831]/50 transition-colors"
            href="#"
          >
            <span className="material-symbols-outlined">dashboard</span>{" "}
            Dashboard
          </a>
          <a
            className="text-zinc-500 font-medium px-6 py-3 flex items-center gap-3 hover:text-zinc-100 hover:bg-[#2c2831]/50 transition-colors"
            href="#"
          >
            <span className="material-symbols-outlined">extension</span>{" "}
            Components
          </a>
          <a
            className="text-zinc-500 font-medium px-6 py-3 flex items-center gap-3 hover:text-zinc-100 hover:bg-[#2c2831]/50 transition-colors"
            href="#"
          >
            <span className="material-symbols-outlined">inventory_2</span> My
            Components
          </a>
          <a
            className="text-zinc-500 font-medium px-6 py-3 flex items-center gap-3 hover:text-zinc-100 hover:bg-[#2c2831]/50 transition-colors"
            href="#"
          >
            <span className="material-symbols-outlined">send</span> Submissions
          </a>
          <a
            className="text-zinc-500 font-medium px-6 py-3 flex items-center gap-3 hover:text-zinc-100 hover:bg-[#2c2831]/50 transition-colors"
            href="#"
          >
            <span className="material-symbols-outlined">category</span>{" "}
            Categories
          </a>
          <a
            className="text-zinc-500 font-medium px-6 py-3 flex items-center gap-3 hover:text-zinc-100 hover:bg-[#2c2831]/50 transition-colors"
            href="#"
          >
            <span className="material-symbols-outlined">group</span> Users
          </a>
          <a
            className="text-zinc-500 font-medium px-6 py-3 flex items-center gap-3 hover:text-zinc-100 hover:bg-[#2c2831]/50 transition-colors"
            href="#"
          >
            <span className="material-symbols-outlined">settings</span> Settings
          </a>
        </nav>
      </aside>
      {/* <!-- Main Canvas --> */}
      <main className="md:ml-64 pt-16 min-h-screen bg-background">
        {/* <!-- Hero Section --> */}
        <section className="relative w-full h-[300px] overflow-hidden">
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
              <div className="flex items-center gap-3">
                <h1 className="text-4xl font-headline font-bold tracking-tight text-white">
                  XoCode
                </h1>
                <button className="text-zinc-500 hover:text-secondary transition-colors">
                  <span className="material-symbols-outlined">edit</span>
                </button>
              </div>
              <p className="text-zinc-400 mt-1 max-w-lg font-body">
                I am 16, a passionate Fullstack Engineer pushing the boundaries
                of web interactivity. Building the future of Emmanuel.codes!
              </p>
            </div>
            <div className="flex gap-3 pb-4">
              <div className="bg-surface-container-high px-4 py-2 rounded-full flex items-center gap-2 border border-outline-variant/30">
                <span className="material-symbols-outlined fill text-secondary">
                  verified
                </span>
                <span className="text-sm font-label font-medium text-on-surface">
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
            <button className="pb-4 text-secondary border-b-2 border-secondary font-headline font-bold text-lg px-2">
              My Components
            </button>
            <button className="pb-4 text-zinc-500 hover:text-on-surface transition-colors font-headline font-medium text-lg px-2">
              Bookmarked
            </button>
          </div>
          {/* <!-- Grid Layout --> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10">
            {/* <!-- Card 1 --> */}
            <div className="group surface-container-low rounded-xl overflow-hidden hover:translate-y-[-4px] transition-all duration-300 shadow-xl border border-outline-variant/10">
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
                <h3 className="text-xl font-headline font-bold text-white mb-2">
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
            <div className="group surface-container-low rounded-xl overflow-hidden hover:translate-y-[-4px] transition-all duration-300 shadow-xl border border-outline-variant/10">
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
                <h3 className="text-xl font-headline font-bold text-white mb-2">
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
            <div className="group surface-container-low rounded-xl overflow-hidden hover:translate-y-[-4px] transition-all duration-300 shadow-xl border border-outline-variant/10">
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
                <h3 className="text-xl font-headline font-bold text-white mb-2">
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
                  <h2 className="text-3xl font-headline font-extrabold text-white mb-4">
                    Dark Matter IDE Shell
                  </h2>
                  <p className="text-zinc-400 mb-6 font-body">
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
                  <div className="absolute inset-0 bg-gradient-to-r from-surface-container-high via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
            {/* <!-- Quick Stats Bento --> */}
            <div className="surface-container-highest p-8 rounded-xl border border-outline-variant/10 flex flex-col justify-between">
              <div>
                <h4 className="text-zinc-400 font-headline font-bold text-sm uppercase tracking-widest mb-6">
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
