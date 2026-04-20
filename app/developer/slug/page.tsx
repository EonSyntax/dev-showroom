"use client";
import { useState } from "react";
import DesktopNavbar from "../../ui-components/DesktopNavbar";
import SideBar from "@/app/ui-components/SideBar";

export default function ComponentPage() {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");
  const [activeCode, setActiveCode] = useState<"react" | "tailwind" | "css">(
    "react",
  );

  const codeString = `
  import React from 'react';

  // Electric Border Component
  export const ElectricBorder = ({ children, intensity = 0.8 }) => {
    return (
      <div className="relative p-0.5 rounded-lg group">
        <div
          className="absolute inset-0 bg-linear-to-tr from-primary-container via-primary to-primary-container rounded-lg transition-opacity"
          style={{ opacity: intensity }}
        />
        <div className="relative bg-surface-container-lowest p-8 rounded-[7px]">
          {children}
        </div>
      </div>
    );
  };
  `;

  return (
    <div className="bg-surface text-on-surface selection:bg-primary/30 selection:text-secondary min-h-screen overflow-x-hidden">
      {/* <!-- TopNavBar --> */}
      <DesktopNavbar />
      <div className="pt-16 flex min-h-screen">
        {/* <!-- SideBar (Left) --> */}
        <SideBar />
        {/* <!-- Center Panel --> */}
        <main className="flex-1 md:ml-44 lg:mr-80 p-8 lg:p-12 overflow-y-auto">
          <div className="mx-auto">
            {/* <!-- Header --> */}
            <div className="mb-10">
              <div className="flex items-center gap-2 text-outline-variant text-xs font-geist mb-4 uppercase tracking-wider">
                <span>Components</span>
                <span className="material-symbols-outlined text-[10px]">
                  chevron_right
                </span>
                <span>Cards</span>
                <span className="material-symbols-outlined text-[10px]">
                  chevron_right
                </span>
                <span className="text-secondary">Electric Border</span>
              </div>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                  <h1 className="text-5xl font-black font-grotesk tracking-tighter text-on-surface mb-2">
                    Electric Border
                  </h1>
                  <p className="text-on-surface-variant max-w-xl">
                    A high-performance animated border component using CSS
                    variables and SVG filters to create a dynamic electric glow
                    effect.
                  </p>
                </div>
                <div className="flex items-center bg-surface-container-high p-1 rounded-full w-fit">
                  <button
                    type="button"
                    onClick={() => setActiveTab("preview")}
                    className={`px-6 py-2 rounded-full text-xs font-bold transition-all ${
                      activeTab === "preview"
                        ? "bg-primary text-on-primary electric-glow"
                        : "text-on-surface-variant hover:text-on-surface"
                    }`}
                  >
                    Preview
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("code")}
                    className={`px-6 py-2 rounded-full text-xs font-bold transition-all ${
                      activeTab === "code"
                        ? "bg-primary text-on-primary electric-glow"
                        : "text-on-surface-variant hover:text-on-surface"
                    }`}
                  >
                    Code
                  </button>
                </div>
              </div>
            </div>
            {/* <!-- Main Preview / Code Toggle Container --> */}
            <div className="relative">
              <div
                className={`transition-opacity duration-300 ${
                  activeTab === "preview"
                    ? "opacity-100"
                    : "opacity-0 absolute inset-0"
                }`}
              >
                {/* <!-- Main Preview Area --> */}
                <div className="aspect-video w-full rounded-[6rem] glass-panel relative overflow-hidden flex items-center justify-center border border-outline-variant/10">
                  {/* <!-- Background aesthetic --> */}
                  <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 blur-[100px]"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 blur-[120px]"></div>
                  </div>
                  {/* <!-- Electric Card --> */}
                  <div className="relative p-0.5 rounded-lg group">
                    {/* <!-- Simulated Electric Border Glow --> */}
                    <div className="absolute inset-0 bg-linear-to-tr from-primary-container via-primary to-primary-container rounded-lg opacity-75 blur-md group-hover:opacity-100 transition-opacity"></div>
                    <div className="absolute inset-0 bg-linear-to-tr from-primary-container via-primary to-primary-container rounded-lg"></div>
                    <div className="relative bg-surface-container-lowest p-8 rounded-[7px] w-80 text-center">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <span className="material-symbols-outlined fill text-primary">
                          bolt
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-3 font-grotesk">
                        Premium Access
                      </h3>
                      <p className="text-sm text-on-surface-variant mb-8 leading-relaxed">
                        Unlock the full potential of your development workflow
                        with our pro toolkit.
                      </p>
                      <button className="w-full py-3 bg-primary text-on-primary font-bold rounded-lg hover:scale-[0.98] transition-transform electric-glow">
                        Get Started
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={`transition-opacity duration-300 ${
                  activeTab === "code"
                    ? "opacity-100"
                    : "opacity-0 absolute inset-0"
                }`}
              >
                {/* <!-- Main Code Area --> */}
                <div className="w-full rounded-xl bg-[#0c0a0f] border border-outline-variant/10 overflow-hidden flex flex-col min-h-125">
                  {/* <!-- Code Tabs --> */}
                  <div className="flex items-center justify-between px-6 py-3 border-b border-outline-variant/10 bg-surface-container-low">
                    <div className="flex items-center gap-6 z-10">
                      <button
                        type="button"
                        onClick={() => setActiveCode("react")}
                        className={`text-xs font-mono tracking-wider uppercase ${activeCode === "react" ? "text-primary border-b-2 border-primary pb-1 font-bold" : "text-outline-variant hover:text-on-surface transition-colors"}`}
                      >
                        React
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveCode("tailwind")}
                        className={`text-xs font-mono tracking-wider uppercase ${activeCode === "tailwind" ? "text-primary border-b-2 border-primary pb-1 font-bold" : "text-outline-variant hover:text-on-surface transition-colors"}`}
                      >
                        Tailwind
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveCode("css")}
                        className={`text-xs font-mono tracking-wider uppercase ${activeCode === "css" ? "text-primary border-b-2 border-primary pb-1 font-bold" : "text-outline-variant hover:text-on-surface transition-colors"}`}
                      >
                        CSS
                      </button>
                    </div>
                    <button className="flex items-center gap-2 px-3 py-1.5 text-primary bg-surface-container-high rounded-full text-[10px] font-mono hover:text-white border border-outline-variant/10 transition-all">
                      <span className="material-symbols-outlined ">
                        content_copy
                      </span>
                      Copy Code
                    </button>
                  </div>
                  {/* <!-- Editor Panel --> */}
                  <div className="flex-1 overflow-auto font-mono text-sm leading-relaxed relative code-shadow">
                    <pre className="text-[#c2c6d6]">
                      <code>{codeString}</code>
                    </pre>
                    <div className="absolute bottom-6 right-6 pointer-events-none opacity-5">
                      <span className="material-symbols-outlined text-9xl">
                        terminal
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Documentation Grid (Bento Style) --> */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 bg-surface-container-low p-8 rounded-4xl border border-outline-variant/5">
                <h4 className="font-grotesk font-bold text-lg mb-4">
                  Implementation
                </h4>
                <div className="font-geist text-xs text-on-surface-variant leading-relaxed bg-surface-container-lowest p-4 rounded-4xl border border-outline-variant/10">
                  <span className="text-secondary">&lt;ElectricBorder&gt;</span>
                  <br />
                    variant=<span className="text-primary">"glowing"</span>
                  <br />
                    color=<span className="text-primary">"#2e73ea"</span>
                  <br />
                    intensity={<span className="text-tertiary">0.8</span>}
                  <br />
                  <span className="text-secondary">
                    &lt;/ElectricBorder&gt;
                  </span>
                </div>
              </div>
              <div className="bg-surface-container-low p-8 rounded-[4rem] border border-outline-variant/5 flex flex-col items-center text-center justify-center">
                <span className="text-secondary font-geist text-2xl font-black mb-1">
                  0.4kb
                </span>
                <p className="text-on-surface-variant text-sm">
                  Gzipped weight for minimal impact on bundle size.
                </p>
              </div>
            </div>
          </div>
        </main>
        {/* <!-- Right Sidebar --> */}
        <aside className="fixed right-0 top-16 h-[calc(100vh-64px)] w-80 bg-surface hidden lg:flex flex-col p-8 gap-8 border-l border-outline-variant/5">
          {/* <!-- Buy Coffee Card --> */}
          <div className="relative p-6 rounded-4xl bg-surface-container-low border border-outline-variant/10 group">
            <div className="relative z-10">
              <div className="w-10 h-10 bg-brand-blue/10 rounded-full flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-brand-blue">
                  local_cafe
                </span>
              </div>
              <h3 className="text-lg font-black font-grotesk text-white mb-2 leading-tight">
                Fuel the craft.
              </h3>
              <p className="text-on-surface-variant text-xs mb-6 leading-relaxed">
                If you find these components useful, consider supporting the
                work. Buy me a coffee!
              </p>
              <button className="w-full py-3 bg-brand-blue hover:bg-brand-lime hover:text-black text-white font-bold rounded-lg text-sm transition-all duration-300 flex items-center justify-center gap-2">
                Buy developer a coffee
              </button>
            </div>
            <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform duration-500">
              <span className="material-symbols-outlined text-[100px]">
                coffee
              </span>
            </div>
          </div>

          {/* <!-- Sponsors Section --> */}
          <div>
            <h4 className="text-[10px] uppercase font-geist tracking-widest text-outline-variant mb-6 flex items-center gap-2">
              <span className="w-8 h-px bg-outline-variant/20"></span>
              Sponsors
              <span className="flex-1 h-px bg-outline-variant/20"></span>
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-video bg-surface-container-high rounded-full flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-pointer border border-outline-variant/10">
                <div className="w-8 h-8 bg-on-surface-variant/20 rounded-full"></div>
              </div>
              <div className="aspect-video bg-surface-container-high rounded-full flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-pointer border border-outline-variant/10">
                <div className="w-8 h-8 bg-on-surface-variant/20 rounded-full"></div>
              </div>
              <div className="aspect-video bg-surface-container-high rounded-full flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-pointer border border-outline-variant/10">
                <div className="w-8 h-8 bg-on-surface-variant/20 rounded-full"></div>
              </div>
              <div className="aspect-video bg-surface-container-high rounded-full flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-pointer border border-outline-variant/10">
                <div className="w-8 h-8 bg-on-surface-variant/20 rounded-full"></div>
              </div>
            </div>
            <button className="w-full mt-6 py-2 border border-outline-variant/20 text-[10px] uppercase font-geist tracking-widest text-on-surface-variant hover:border-secondary hover:text-secondary transition-all rounded-full">
              Become a Sponsor
            </button>
          </div>
          {/* <!-- Get Pro Card --> */}
          <div className="relative p-6 rounded-[3rem] overflow-hidden group">
            <div className="absolute inset-0 bg-linear-to-br from-primary-container via-[#1d1a22] to-secondary/30 opacity-90"></div>
            <img
              className="absolute inset-0 object-cover w-full h-full mix-blend-overlay opacity-50 grayscale group-hover:grayscale-0 transition-all duration-500"
              data-alt="Abstract vibrant wave patterns with neon blue and lime green light trails on a dark background"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBk7tEY3Acnx_0sLbvHBuROrlIBOkY3Sip97JOqYjCDu6F7iaRiU6rw6Jn0Ir--zNHIgbDYEHSDatXmAL302nE8Rgr0z-hMOZOnDnAKFgLpC9fViam7bppvIxEdmdOvC0wqqK7KqRr0JWLgOuguv2QuZ-_FR7RUTH-yYkNDYju0DJ5n06c1qMgeqBlvzo70-mFdZco-zh873IaW_Zal4ijL1PI0BHAQeJ03pLmuRZpQOcAQQFfAdujzV5QheZMWu8kakhKFMk2eLr38"
            />
            <div className="relative z-10">
              <span className="uppercase bg-secondary text-on-secondary-fixed text-[10px] font-bold px-2 py-0.5 rounded-full mb-4 inline-block">
                Get PRO
              </span>
              <h3 className="text-xl font-black font-grotesk text-white mb-2 leading-tight">
                Unlock All 200+ Components
              </h3>
              <button className="w-full py-3 bg-white text-surface-dim font-bold rounded-full text-sm hover:bg-secondary transition-colors">
                Upgrade to Pro
              </button>
              <p className="text-white/70 text-xs mb-6 leading-relaxed">
                Get lifetime access to premium layouts, animations, and source
                files.
              </p>
            </div>
          </div>
          {/* <!-- Stats --> */}
          <div className="mt-auto bg-surface-container-low p-4 rounded-full border border-outline-variant/5">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs font-geist text-outline-variant">
                Total Downloads
              </span>
              <span className="text-xs font-geist text-secondary">142.8k</span>
            </div>
            <div className="w-full bg-surface-container-highest h-1 rounded-full overflow-hidden">
              <div className="bg-secondary h-full w-[85%]"></div>
            </div>
          </div>
        </aside>
      </div>
      {/* <!-- Mobile BottomNavBar --> */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-[#1d1a22]/90 backdrop-blur-xl border-t border-outline-variant/10 z-50">
        <div className="flex justify-around items-center h-16">
          <button className="flex flex-col items-center gap-1 text-on-surface-variant">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="text-[10px]">Showcase</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-secondary">
            <span className="material-symbols-outlined fill">widgets</span>
            <span className="text-[10px]">Components</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-on-surface-variant">
            <span className="material-symbols-outlined">menu_book</span>
            <span className="text-[10px]">Docs</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-on-surface-variant">
            <span className="material-symbols-outlined">person</span>
            <span className="text-[10px]">Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
}
