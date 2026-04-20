import AdminSideBar from "@/app/ui-components/AdminSideBar";
import DesktopNavbar from "@/app/ui-components/DesktopNavbar";

export default function Developers() {
  return (
    <div>
      <DesktopNavbar />
      <AdminSideBar />
      {/* <!-- Main Content Shell --> */}
      <main className="ml-44 min-h-screen relative bg-surface-dim">
        {/* <!-- CTO Canvas --> */}
        <div className="mt-15 pt-5 space-y-12 px-10">
          {/* <!-- User Management Section --> */}
          <section>
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-headline font-bold tracking-tight text-white">
                  Ecosystem Fleet
                </h2>
                <p className="text-zinc-500 font-geist mt-1 text-sm">
                  Managing the nodes and architects of the Kinetic Engine.
                </p>
              </div>
              <button className="flex items-center gap-2 bg-surface-container-high hover:bg-surface-bright text-on-surface-variant px-6 py-2 rounded-full transition-all border border-white/5 font-bold text-sm">
                <span className="material-symbols-outlined text-sm">
                  person_add
                </span>
                Provision User
              </button>
            </div>
            <div className="surface-container-low rounded-4xl overflow-hidden border border-white/5 shadow-2xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-surface-container-highest/30 border-b border-white/5">
                      <th className="px-6 py-4 text-xs font-geist text-zinc-500 uppercase tracking-widest">
                        Architect
                      </th>
                      <th className="px-6 py-4 text-xs font-geist text-zinc-500 uppercase tracking-widest">
                        Digital Address
                      </th>
                      <th className="px-6 py-4 text-xs font-geist text-zinc-500 uppercase tracking-widest">
                        Directive Role
                      </th>
                      <th className="px-6 py-4 text-xs font-geist text-zinc-500 uppercase tracking-widest">
                        Link Status
                      </th>
                      <th className="px-6 py-4 text-xs font-geist text-zinc-500 uppercase tracking-widest text-right">
                        Ops
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {/* <!-- User Row 1 --> */}
                    <tr className="hover:bg-white/2 transition-colors group">
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary ring-2 ring-primary/20">
                            <img
                              alt="Lead Architect"
                              className="w-full h-full object-cover"
                              data-alt="Portrait of a young male software engineer with sharp features and futuristic spectacles"
                              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqeQy1SeZJigtHgK__5v2aXFJHKudoa8Nw7w7b1xDEIhhJRvmeXD_xgP0kxC3GTK0D784lNeBspjEYP2Nj2PTYUF4GUA82vq5xOXcevpPwj69d15Cgcgm9N-SPMEnaOL1hIoi6zspDTK4rseAtdhchc4SJ-JLc1gRs4fyLRzdkqERy-A1quyX-4xX2UDspZAyowvgOXjAE4ivQ7hLqcTK8mvDMRbSRjtY1Ox02rYw4GLmu-Molp7WgjNuk-AA7cLhJwuCIqAyri7Uu"
                            />
                          </div>
                          <div>
                            <p className="font-headline font-bold text-white text-sm">
                              Emmanuel
                            </p>
                            <p className="text-[10px] text-zinc-500 font-geist">
                              #USR-8821
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-5 text-sm font-geist text-zinc-400">
                        emmanuel@kinetic.io
                      </td>
                      <td className="px-6 py-5">
                        <div className="relative w-max">
                          <select className="bg-secondary/10 text-secondary border border-secondary/20 rounded-full text-[11px] font-bold py-1 px-3 appearance-none focus:ring-1 focus:ring-secondary outline-none pr-8">
                            <option value="cto">CTO</option>
                            <option value="dev">Developer</option>
                          </select>
                          <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-secondary text-[14px] pointer-events-none">
                            expand_more
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                          <span className="text-[11px] font-bold text-on-surface tracking-wide">
                            ACTIVE
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-5 text-right">
                        <button className="material-symbols-outlined text-zinc-600 hover:text-primary transition-colors">
                          tune
                        </button>
                      </td>
                    </tr>
                    {/* <!-- User Row 2 --> */}
                    <tr className="hover:bg-white/2 transition-colors">
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-outline-variant">
                            <img
                              alt="Core Developer"
                              className="w-full h-full object-cover"
                              data-alt="Cyberpunk style female developer with neon hair highlights working at a terminal"
                              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9LtAwIUNw8WdTqNxPWi4CslWU2KLAXDQQgfREhqbKi46ZiQppt9BSqbFjKgYU_0NCjU6OceQmNW_GLVmItUrhiWv320lVV1PCohO77Hsdp_AkLdPbw-322eX5qGf51iRAQNGMK1y1FlJztJFqM8_GSTmC-cEh6FXWh8FniBBnUmH8gZ5XTARxrdLBDtxKOUnr1K0LLO7P7pJPYmqNh_70_5Z21qjhmZWtZz2FAOf3ht7eKhHQ7P3RoX0wfEO3kgDiQMiewRGR5l0H"
                            />
                          </div>
                          <div>
                            <p className="font-headline font-bold text-white text-sm">
                              Sarah Jenkins
                            </p>
                            <p className="text-[10px] text-zinc-500 font-geist">
                              #USR-1204
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-5 text-sm font-geist text-zinc-400">
                        s.jenkins@kinetic.io
                      </td>
                      <td className="px-6 py-5">
                        <div className="relative w-max text-tertiary">
                          <select className="bg-tertiary/10 text-tertiary border border-tertiary/20 rounded-full text-[11px] font-bold py-1 px-3 appearance-none focus:ring-1 focus:ring-tertiary outline-none pr-8">
                            <option value="cto">CTO</option>
                            <option value="dev">DEVELOPER</option>
                          </select>
                          <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-[14px] pointer-events-none">
                            expand_more
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                          <span className="text-[11px] font-bold text-on-surface tracking-wide">
                            BUSY
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-5 text-right">
                        <button className="material-symbols-outlined text-zinc-600 hover:text-primary transition-colors">
                          tune
                        </button>
                      </td>
                    </tr>
                    {/* <!-- User Row 3 --> */}
                    <tr className="hover:bg-white/2 transition-colors">
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-outline-variant">
                            <img
                              alt="Junior Dev"
                              className="w-full h-full object-cover"
                              data-alt="Candid photo of a young male intern focused on code in a sleek dark workstation"
                              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcjTEMQu7c1H_9mGHMbQXT4lT3MC8qUOfuO7ezkgFwaBYIEncG0q2wBoS7JYnGmw6M8PC647mi9NNtVKe-VUXuckWe53b6IvQNq7XGyOpS2uQqL0y3SQpkZUevXlGOV5hj8DBBAsc7hVqRTwQoiOGETl-Klyr_UeKekDUpLOTU0j5ut8tM6L7WRJ_UbSjHeTLhO-zxfIeZQHnJ-_ZFPT6135zP1gXT0DAdZBY0TgQsDMc2v8Umxos44D1nBb4k6MJ4NrDXUhSwUT0_"
                            />
                          </div>
                          <div>
                            <p className="font-headline font-bold text-white text-sm">
                              Marcus Vance
                            </p>
                            <p className="text-[10px] text-zinc-500 font-geist">
                              #USR-4402
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-5 text-sm font-geist text-zinc-400">
                        m.vance@kinetic.io
                      </td>
                      <td className="px-6 py-5">
                        <div className="relative w-max text-tertiary">
                          <select className="bg-tertiary/10 text-tertiary border border-tertiary/20 rounded-full text-[11px] font-bold py-1 px-3 appearance-none focus:ring-1 focus:ring-tertiary outline-none pr-8">
                            <option value="cto">CTO</option>
                            <option value="dev">DEVELOPER</option>
                          </select>
                          <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-[14px] pointer-events-none">
                            expand_more
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-zinc-600"></span>
                          <span className="text-[11px] font-bold text-zinc-500 tracking-wide">
                            OFFLINE
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-5 text-right">
                        <button className="material-symbols-outlined text-zinc-600 hover:text-primary transition-colors">
                          tune
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-surface-container-highest/20 px-6 py-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs font-geist text-zinc-500">
                  Showing 3 of 14 Fleet Members
                </span>
                <div className="flex gap-1">
                  <button className="w-8 h-8 rounded bg-surface-container-high border border-white/5 flex items-center justify-center text-zinc-400 hover:text-white transition-all">
                    <span className="material-symbols-outlined text-sm">
                      chevron_left
                    </span>
                  </button>
                  <button className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center text-xs font-bold font-geist">
                    1
                  </button>
                  <button className="w-8 h-8 rounded bg-surface-container-high border border-white/5 flex items-center justify-center text-zinc-400 hover:text-white transition-all text-xs font-bold font-geist">
                    2
                  </button>
                  <button className="w-8 h-8 rounded bg-surface-container-high border border-white/5 flex items-center justify-center text-zinc-400 hover:text-white transition-all">
                    <span className="material-symbols-outlined text-sm">
                      chevron_right
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
