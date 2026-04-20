
export default function Footer() {
  return (
    <footer className="bg-[#15121a] w-full py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="text-lg font-bold text-[#c0e22f] font-grotesk mb-4">
            DEVsr
          </div>
          <p className="font-grotesk text-sm tracking-wide uppercase text-zinc-500">
            © {new Date().getFullYear()} <span className="normal-case">Dev-showroom</span> Engineered for velocity.
          </p>
        </div>
        <div className="flex flex-wrap gap-6 md:justify-end font-grotesk text-sm tracking-wide uppercase">
          <a
            className="text-zinc-500 hover:text-white transition-colors cursor-pointer"
            href="#"
          >
            GitHub
          </a>
          <a
            className="text-zinc-500 hover:text-white transition-colors cursor-pointer"
            href="#"
          >
            Discord
          </a>
          <a
            className="text-zinc-500 hover:text-white transition-colors cursor-pointer"
            href="#"
          >
            Twitter
          </a>
          <a
            className="text-zinc-500 hover:text-white transition-colors cursor-pointer"
            href="#"
          >
            Changelog
          </a>
          <a
            className="text-zinc-500 hover:text-white transition-colors cursor-pointer"
            href="#"
          >
            Newsletter
          </a>
        </div>
      </div>
    </footer>
  );
}
