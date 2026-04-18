import Link from "next/link";
import DesktopNavbar from "./ui-components/DesktopNavbar";
import Footer from "./ui-components/Footer";

export default function Homee() {
  return (
    <div className="bg-surface text-on-surface selection:bg-primary/30 selection:text-secondary">
      <div className="fixed inset-0 noise-bg z-60"></div>
      {/* <!-- TopNavBar --> */}
      <DesktopNavbar />
      <main className="relative pt-20">
        {/* <!-- Hero Section --> */}
        <section className="relative min-h-230.25 flex items-center overflow-hidden px-8">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high border border-outline-variant/20 text-secondary font-geist text-xs mb-6">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                V2.0 NOW LIVE
              </div>
              <h1 className="text-6xl md:text-8xl font-black font-inter tracking-tighter leading-tight text-white mb-6">
                The Future of{" "}
                <span className="text-transparent font-inter bg-clip-text bg-linear-to-br from-primary to-primary-container">
                  Web Motion.
                </span>
              </h1>
              <p className="text-xl text-on-surface-variant max-w-lg mb-10 leading-relaxed">
                Premium animated components for high-performance interfaces.
                Engineered for velocity and aesthetic precision.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="#"
                  className="bg-primary text-on-primary px-8 py-4 rounded-full font-grotesk font-bold text-lg active:scale-95 duration-200 neon-glow-primary flex items-center gap-2"
                >
                  Browse Components
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </Link>
                <button className="border border-secondary/30 text-white px-8 py-4 rounded-full font-grotesk font-bold text-lg hover:bg-secondary/10 transition-colors duration-300 flex items-center gap-2">
                  View Docs
                  <span className="material-symbols-outlined fill">
                    terminal
                  </span>
                </button>
              </div>
            </div>
            <div className="relative lg:block hidden">
              <div className="glass-card p-1 rounded-[4rem] border border-white/10 rotate-3 shadow-2xl relative">
                <img
                  alt="Component Preview"
                  className="rounded-[4rem] w-full h-125 object-cover"
                  data-alt="Futuristic 3D abstract sculpture with iridescent metallic surfaces and neon blue lighting in a dark void"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3V1nUS3T9xdqYAN1DsUI__ayDIijraPEgKwZd_zKB3Q7zB6tqIyQEOdmlywtEVT9mGcupL6SyZP5JlnOTUtGtcsfLwc7dEqHKJmRRW3n_R_aH5cT3Sm1P02rG7OO1IKVlYnRXAIGiyRG1kDlVS8YMhnNGCv8DDxDYNfjTcSeo0IoqZBUbt2dYYl4hT7HfM93jzVZ-FXG6vP-BAAG_si1EHrmToOUO8DbmIRbXQJEwfY25I2D05eoSS04LI2FtF1MXi-xAJ4UCJ79p"
                />
                <div className="absolute -bottom-6 -left-6 glass-card p-6 rounded-full border border-white/10 shadow-xl max-w-xs -rotate-6">
                  <p className="font-geist text-secondary text-xs mb-2">
                    // Active_Interpolation
                  </p>
                  <div className="h-2 w-full bg-surface-container-high rounded-full overflow-hidden">
                    <div className="h-full bg-secondary w-3/4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Frameworks Section (Marquee Style) --> */}
        <section className="py-24 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-8">
            <p className="text-center font-geist text-zinc-500 uppercase tracking-widest text-sm mb-12">
              Engineered for the modern stack
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-12 items-center opacity-60">
              <div className="flex flex-col items-center gap-4">
                <span className="material-symbols-outlined fill text-4xl text-[#61DAFB]">
                  deployed_code
                </span>
                <span className="font-grotesk font-bold text-white">React</span>
              </div>
              <div className="flex flex-col items-center gap-4">
                <span className="material-symbols-outlined fill text-4xl text-[#c0e22f]">
                  precision_manufacturing
                </span>
                <span className="font-grotesk font-bold text-white">GSAP</span>
              </div>
              <div className="flex flex-col items-center gap-4">
                <span className="material-symbols-outlined fill text-4xl text-[#FF0080]">
                  auto_awesome
                </span>
                <span className="font-grotesk font-bold text-white">
                  Motion
                </span>
              </div>
              <div className="flex flex-col items-center gap-4">
                <span className="material-symbols-outlined fill text-4xl text-white">
                  view_in_ar
                </span>
                <span className="font-grotesk font-bold text-white">
                  Three.js
                </span>
              </div>
              <div className="flex flex-col items-center gap-4">
                <span className="material-symbols-outlined fill text-4xl text-primary">
                  bolt
                </span>
                <span className="font-grotesk font-bold text-white">AOS</span>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Feature Section (Bento Grid) --> */}
        <section className="py-32 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div className="max-w-2xl">
                <h2 className="text-4xl md:text-6xl font-black font-grotesk tracking-tighter text-white mb-6">
                  Designed for Performance. <br />
                  Built for Developers.
                </h2>
                <p className="text-on-surface-variant text-lg">
                  We prioritize lightweight architectures and buttery-smooth
                  120fps animations without bloating your bundle size.
                </p>
              </div>
              <div className="hidden md:block">
                <div className="font-geist text-secondary border border-secondary/20 px-4 py-2 rounded-full text-sm">
                  system_status: OPTIMIZED
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* <!-- Feature 1 --> */}
              <div className="md:col-span-2 group">
                <div className="bg-surface-container-low p-10 rounded-[4rem] h-full relative overflow-hidden transition-all duration-500 hover:bg-surface-container-high border border-outline-variant/10">
                  <div className="absolute top-0 right-0 p-8">
                    <span className="material-symbols-outlined text-7xl text-secondary opacity-10 group-hover:opacity-20 transition-opacity">
                      speed
                    </span>
                  </div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-8">
                      <span className="material-symbols-outlined fill text-secondary">
                        bolt
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold font-grotesk text-white mb-4">
                      High Performance
                    </h3>
                    <p className="text-on-surface-variant max-w-md leading-relaxed">
                      GPU-accelerated animations using `transform` and `opacity`
                      only. No layout thrashing, guaranteed 60fps+ on all mobile
                      devices.
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- Feature 2 --> */}
              <div className="group">
                <div className="bg-surface-container-low p-10 rounded-[4rem] h-full transition-all duration-500 hover:bg-surface-container-high border border-outline-variant/10">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-8">
                    <span className="material-symbols-outlined text-primary">
                      dynamic_form
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold font-grotesk text-white mb-4">
                    Framework Agnostic
                  </h3>
                  <p className="text-on-surface-variant leading-relaxed">
                    Use with React, Vue, Svelte, or vanilla HTML. Our components
                    work wherever the web lives.
                  </p>
                </div>
              </div>
              {/* <!-- Feature 3 --> */}
              <div className="group">
                <div className="bg-surface-container-low p-10 rounded-[4rem] h-full transition-all duration-500 hover:bg-surface-container-high border border-outline-variant/10">
                  <div className="w-12 h-12 rounded-full bg-tertiary/10 flex items-center justify-center mb-8">
                    <span className="material-symbols-outlined text-tertiary">
                      code
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold font-grotesk text-white mb-4">
                    Developer Centric
                  </h3>
                  <p className="text-on-surface-variant leading-relaxed">
                    Full TypeScript support, intuitive props, and comprehensive
                    documentation to get you up and running in minutes.
                  </p>
                </div>
              </div>
              {/* <!-- Large Visual Feature --> */}
              <div className="md:col-span-2 relative h-100 rounded-[4rem] overflow-hidden group">
                <img
                  alt="Technical Core"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  data-alt="Close up of a high-tech computer motherboard with glowing green neon lines tracing circuit paths"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD46KJ7YkowLlYJXPdXIqYH3dJYO-2xqdXUPjUInVjGuQwKKty3HXXG9jFtKv-343oCYffDs4kjvi89wwJIYjBnLJj8o-JmPZ8WalqucW-3EvxItXMjCew-bnUSQNPpgsSyuWSTUIr-KIm-s23mXcFI2DdnmYPWFyk_ZLJftkfOIXgfU6qCWFkGR_vphb6FBidky0EJy3SoW3WQ46m56MZtck88zcd_bWyTy3GFAGqigI2QlwWVnS8YbGOs0C4kR2-Ye4MZhHjb0SMm"
                />
                <div className="absolute inset-0 bg-linear-to-t from-surface via-surface/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-10">
                  <h3 className="text-3xl font-bold font-grotesk text-white mb-2">
                    Atomic Architecture
                  </h3>
                  <p className="text-on-surface-variant">
                    Modular components that scale with your project.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- CTA Section --> */}
        <section className="py-32 px-8">
          <div className="max-w-5xl mx-auto glass-card rounded-[4rem] p-16 text-center border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-secondary to-transparent"></div>
            <h2 className="text-4xl md:text-6xl font-black font-grotesk text-white mb-8 tracking-tighter">
              Ready to accelerate your workflow?
            </h2>
            <p className="text-xl text-on-surface-variant mb-12 max-w-2xl mx-auto">
              Join over 5,000 developers building the next generation of
              high-fidelity user interfaces.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-secondary text-on-secondary px-10 py-4 rounded-full font-grotesk font-bold text-lg active:scale-95 duration-200 neon-glow-secondary">
                Get Started for Free
              </button>
              <button className="bg-surface-container-highest text-white px-10 py-4 rounded-full font-grotesk font-bold text-lg border border-outline-variant/30 hover:bg-surface-variant transition-colors">
                View Pricing
              </button>
            </div>
          </div>
        </section>
      </main>
      {/* <!-- Footer --> */}
      <Footer />
    </div>
  );
}
