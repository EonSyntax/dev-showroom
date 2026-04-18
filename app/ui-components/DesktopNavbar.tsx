export default function DesktopNavbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#15121a]/80 backdrop-blur-xl">
      <div className="flex justify-between items-center h-16 px-8 max-w-480 mx-auto">
        <div className="flex items-center gap-8">
          <span className="text-2xl font-black text-primary tracking-tighter font-grotesk">
            ImmanuelUI
          </span>
          {/* Add md:flex to make navlinks show theyre intentionally hidden now */}
          <nav className="hidden gap-6 items-center">
            <div className="group relative">
              <button className="flex items-center gap-1 text-slate-400 font-medium font-headline text-sm hover:text-primary transition-colors duration-200 py-1">
                Elements
                <span className="material-symbols-outlined text-xs">
                  expand_more
                </span>
              </button>
              {/* <!-- Dropdown Container --> */}
              <div className="absolute top-full left-0 mt-2 w-120 bg-[#15121a] border border-outline-variant/10 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 p-6 flex gap-8">
                {/* <!-- Left Columns: Categories --> */}
                <div className="flex-1 grid grid-cols-2 gap-x-8 gap-y-1">
                  <a
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-surface-container-high transition-colors text-on-surface-variant hover:text-on-surface"
                    href="#"
                  >
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-sm text-outline-variant">
                        dashboard
                      </span>
                      <span className="text-xs font-semibold">All</span>
                    </div>
                  </a>
                  <a
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-surface-container-high transition-colors text-on-surface-variant hover:text-on-surface"
                    href="#"
                  >
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-sm text-outline-variant">
                        smart_button
                      </span>
                      <span className="text-xs font-semibold">Buttons</span>
                    </div>
                    <span className="text-[10px] text-outline-variant">
                      2630
                    </span>
                  </a>
                  <a
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-surface-container-high transition-colors text-on-surface-variant hover:text-on-surface"
                    href="#"
                  >
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-sm text-outline-variant">
                        check_box
                      </span>
                      <span className="text-xs font-semibold">Checkboxes</span>
                    </div>
                    <span className="text-[10px] text-outline-variant">
                      324
                    </span>
                  </a>
                  <a
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-surface-container-high transition-colors text-on-surface-variant hover:text-on-surface"
                    href="#"
                  >
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-sm text-outline-variant">
                        toggle_on
                      </span>
                      <span className="text-xs font-semibold">
                        Toggle switches
                      </span>
                    </div>
                    <span className="text-[10px] text-outline-variant">
                      437
                    </span>
                  </a>
                  <a
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-surface-container-high transition-colors text-on-surface-variant hover:text-on-surface"
                    href="#"
                  >
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-sm text-outline-variant">
                        rectangle
                      </span>
                      <span className="text-xs font-semibold">Cards</span>
                    </div>
                    <span className="text-[10px] text-outline-variant">
                      1478
                    </span>
                  </a>
                  <a
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-surface-container-high transition-colors text-on-surface-variant hover:text-on-surface"
                    href="#"
                  >
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-sm text-outline-variant">
                        progress_activity
                      </span>
                      <span className="text-xs font-semibold">Loaders</span>
                    </div>
                    <span className="text-[10px] text-outline-variant">
                      1183
                    </span>
                  </a>
                  <a
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-surface-container-high transition-colors text-on-surface-variant hover:text-on-surface"
                    href="#"
                  >
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-sm text-outline-variant">
                        edit_square
                      </span>
                      <span className="text-xs font-semibold">Inputs</span>
                    </div>
                    <span className="text-[10px] text-outline-variant">
                      362
                    </span>
                  </a>
                  <a
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-surface-container-high transition-colors text-on-surface-variant hover:text-on-surface"
                    href="#"
                  >
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-sm text-outline-variant">
                        radio_button_checked
                      </span>
                      <span className="text-xs font-semibold">
                        Radio buttons
                      </span>
                    </div>
                    <span className="text-[10px] text-outline-variant">
                      199
                    </span>
                  </a>
                  <a
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-surface-container-high transition-colors text-on-surface-variant hover:text-on-surface"
                    href="#"
                  >
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-sm text-outline-variant">
                        assignment
                      </span>
                      <span className="text-xs font-semibold">Forms</span>
                    </div>
                    <span className="text-[10px] text-outline-variant">
                      246
                    </span>
                  </a>
                  <a
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-surface-container-high transition-colors text-on-surface-variant hover:text-on-surface"
                    href="#"
                  >
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-sm text-outline-variant">
                        texture
                      </span>
                      <span className="text-xs font-semibold">Patterns</span>
                    </div>
                    <span className="text-[10px] text-outline-variant">
                      279
                    </span>
                  </a>
                  <a
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-surface-container-high transition-colors text-on-surface-variant hover:text-on-surface"
                    href="#"
                  >
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-sm text-outline-variant">
                        info
                      </span>
                      <span className="text-xs font-semibold">Tooltips</span>
                    </div>
                    <span className="text-[10px] text-outline-variant">
                      135
                    </span>
                  </a>
                  <a
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-surface-container-high transition-colors text-on-surface-variant hover:text-on-surface border-t border-outline-variant/10 mt-2"
                    href="#"
                  >
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-sm text-outline-variant">
                        bookmark
                      </span>
                      <span className="text-xs font-semibold text-primary">
                        My favorites
                      </span>
                    </div>
                    <span className="material-symbols-outlined text-xs text-outline-variant">
                      lock
                    </span>
                  </a>
                </div>
                {/* <!-- Right: Social Promo Card --> */}
                <div className="w-56 bg-linear-to-br from-primary-container/20 to-tertiary-container/20 rounded-xl p-6 flex flex-col items-center text-center">
                  <div className="relative mb-4">
                    <img
                      alt="Social Media"
                      className="w-24 h-24 object-contain rounded-full"
                      src="https://lh3.googleusercontent.com/aida/ADBb0ughfkgrGhL0GIclCfg0o8rcm9eCuMb1hFCKypD6dizp8pZrc-PVDN6OgobBieiCROceUiM5DuipCfkbPhygc5-56vd3gw-HEqTxjrVPuZfEuF87QeS9zy8JSjFFE6KsVeKtEuowXfM-gzO_Lo_wd6NZAV_hOFf29swy_WGWpTmkccNXKH-0XJl56u1SftxBlNNXKdR52EwsmIpjAub6283KHeP--EgkbfZPt4cZ7-5oAU5zGfLnx93xsdTv4qpl-8EpjBT7yImvSRw"
                    />
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-secondary rounded-full border-2 border-[#15121a]"></div>
                  </div>
                  <h4 className="text-sm font-bold font-headline mb-2">
                    We're on Social Media!
                  </h4>
                  <p className="text-[10px] text-on-surface-variant mb-6">
                    Follow us to find out about new challenges, updates and
                    posts
                  </p>
                  <div className="flex gap-3">
                    <a
                      className="w-8 h-8 bg-surface-container-high rounded flex items-center justify-center hover:bg-primary/20 transition-colors"
                      href="#"
                    >
                      <span className="material-symbols-outlined text-sm">
                        discord
                      </span>
                    </a>
                    <a
                      className="w-8 h-8 bg-surface-container-high rounded flex items-center justify-center hover:bg-primary/20 transition-colors"
                      href="#"
                    >
                      <span className="material-symbols-outlined text-sm">
                        close
                      </span>
                    </a>
                    <a
                      className="w-8 h-8 bg-surface-container-high rounded flex items-center justify-center hover:bg-primary/20 transition-colors"
                      href="#"
                    >
                      <span className="material-symbols-outlined text-sm">
                        photo_camera
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <a
              className="text-slate-400 font-medium font-grotesk text-sm hover:text-primary transition-colors duration-200"
              href="#"
            >
              Docs
            </a>
            <a
              className="text-secondary border-b-2 border-secondary pb-1 font-grotesk text-sm transition-colors duration-200"
              href="#"
            >
              Showcase
            </a>
            <a
              className="text-slate-400 font-medium font-grotesk text-sm hover:text-primary transition-colors duration-200"
              href="#"
            >
              Tools
            </a>
            <a
              className="text-slate-400 font-medium font-grotesk text-sm hover:text-primary transition-colors duration-200"
              href="#"
            >
              Sponsors
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative group hidden lg:block">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant text-sm">
              search
            </span>
            <input
              className="bg-surface-container-high text-xs py-2 pl-10 pr-4 rounded-full border-none focus:ring-1 focus:ring-primary w-64 transition-all duration-300"
              placeholder="Search components..."
              type="text"
            />
          </div>
          <div className="flex items-center gap-4">
            <button className="flex overflow-hidden items-center gap-1 text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-surface-container-high text-white shadow hover:bg-black/90 h-8 px-4 py-2 max-w-52 whitespace-pre md:flex group relative w-full justify-center rounded-full transition-all duration-300 ease-out hover:ring-2 hover:ring-black hover:ring-offset-2">
              <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"></span>
              <div className="flex items-center">
                <svg
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 438.549 438.549"
                >
                  <path d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"></path>
                </svg>
                <span className="ml-1 text-white">Star on GitHub</span>
              </div>
              <div className="ml-2 flex items-center gap-1 text-sm md:flex">
                <svg
                  className="w-4 h-4 text-gray-500 transition-all duration-300 group-hover:text-yellow-300"
                  data-slot="icon"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    fillRule="evenodd"
                  ></path>
                </svg>
                <span className="inline-block tabular-nums tracking-wider font-display font-medium text-white">
                  6
                </span>
              </div>
            </button>
            <div className="h-5 w-px bg-outline-variant/60"></div>
            <button className="flex items-center justify-center h-8 w-full rounded-full bg-surface-container-high">
              <span className="material-symbols-outlined text-white text-sm">
                add
              </span>
              <span className="text-[75%] text-white">Join the Community</span>
            </button>
            <button className="p-0.5 rounded-full border border-outline-variant/30 hover:border-primary transition-colors overflow-hidden">
              <img
                alt="Profile"
                className="w-20 h-auto object-cover rounded-full"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBk7tEY3Acnx_0sLbvHBuROrlIBOkY3Sip97JOqYjCDu6F7iaRiU6rw6Jn0Ir--zNHIgbDYEHSDatXmAL302nE8Rgr0z-hMOZOnDnAKFgLpC9fViam7bppvIxEdmdOvC0wqqK7KqRr0JWLgOuguv2QuZ-_FR7RUTH-yYkNDYju0DJ5n06c1qMgeqBlvzo70-mFdZco-zh873IaW_Zal4ijL1PI0BHAQeJ03pLmuRZpQOcAQQFfAdujzV5QheZMWu8kakhKFMk2eLr38"
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
