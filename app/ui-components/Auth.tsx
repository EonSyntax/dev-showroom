export default function Auth() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-surface-container-lowest/60 backdrop-blur-lg">
      {/* <!-- Sign-up Modal --> */}
      <div className="relative w-full max-w-xl glass-panel rounded-[4rem] border border-outline-variant/30 overflow-hidden neon-glow-blue">
        {/* <!-- Decorative Elements --> */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container/10 blur-[80px] -z-10"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/10 blur-[60px] -z-10"></div>
        <div className="p-8 md:p-12">
          {/* <!-- Close Button --> */}
          <button className="absolute top-8 right-8 text-outline hover:text-on-surface transition-colors">
            <span className="material-symbols-outlined">close</span>
          </button>
          {/* <!-- Header --> */}
          <div className="mb-10 text-center">
            <div className="inline-block px-3 py-1 mb-6 rounded-full bg-surface-container-highest border border-outline-variant/20">
              <span className="font-mono text-[10px] tracking-widest text-secondary flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
                SYSTEM ACCESS AUTHORIZED
              </span>
            </div>
            <h1 className="font-headline text-5xl font-bold tracking-tighter text-on-surface mb-2">
              Join the Core
            </h1>
            <p className="text-on-surface-variant font-light tracking-wide italic">
              Engineer your future.
            </p>
          </div>
          {/* <!-- Action Cluster --> */}
          <div className="space-y-4 mb-6">
            {/* <!-- GitHub --> */}
            <button className="w-full group relative flex items-center justify-center gap-3 bg-surface-container-highest hover:bg-surface-bright text-on-surface py-4 px-6 rounded-full transition-all duration-300 border border-outline-variant/30 active:scale-[0.98]">
              <span className="font-medium tracking-tight">Continue with</span>
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
              </svg>
            </button>
            {/* <!-- Google --> */}
            <button className="w-full group relative flex items-center justify-center gap-3 bg-surface-container-highest hover:bg-surface-bright text-on-surface py-4 px-6 rounded-full transition-all duration-300 border border-outline-variant/30 active:scale-[0.98]">
              <span className="font-medium tracking-tight">Continue with</span>
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                ></path>
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                ></path>
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                ></path>
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z"
                  fill="#EA4335"
                ></path>
              </svg>
            </button>
            {/* <!-- X --> */}
            <button className="w-full group relative flex items-center justify-center gap-3 bg-surface-container-highest hover:bg-surface-bright text-on-surface py-4 px-6 rounded-full transition-all duration-300 border border-outline-variant/30 active:scale-[0.98]">
              <span className="font-medium tracking-tight">Continue with</span>
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </svg>
            </button>
          </div>
          {/* <!-- Divider --> */}
          {/* <!-- Secondary Action --> */}
          {/* <!-- Footer Links --> */}
          <div className="mt-10 pt-6 border-t border-outline-variant/10 flex flex-col items-center gap-4">
            <p className="text-outline text-xs text-center leading-relaxed max-w-xs">
              By deploying your account, you agree to our
              <a
                className="text-primary-fixed-dim hover:text-primary underline underline-offset-4 decoration-primary-container/30"
                href="#"
              >
                {" "}
                Terms of Operation
              </a>{" "}
              and
              <a
                className="text-primary-fixed-dim hover:text-primary underline underline-offset-4 decoration-primary-container/30"
                href="#"
              >
                {" "}
                Data Privacy Protocol
              </a>
              .
            </p>
            <div className="flex gap-4">
              <div className="w-1 h-1 rounded-full bg-secondary"></div>
              <div className="w-1 h-1 rounded-full bg-primary"></div>
              <div className="w-1 h-1 rounded-full bg-primary"></div>
              <div className="w-1 h-1 rounded-full bg-primary"></div>
              <div className="w-1 h-1 rounded-full bg-primary"></div>
            </div>
          </div>
        </div>
        {/* <!-- Bottom Tech Accent --> */}
        <div className="h-1 bg-linear-to-r from-primary-container via-secondary to-primary-container opacity-50"></div>
      </div>
    </div>
  );
}
