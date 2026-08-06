import { APP } from "../../config/app";

function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">

      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-14 md:flex-row md:justify-between">

        <div>

          <h2 className="text-2xl font-black text-white">
            {APP.name}
          </h2>

          <p className="mt-4 max-w-sm leading-7 text-slate-400">
            An AI-powered chatbot built for fast, intelligent and entertaining conversations.
          </p>

        </div>

        <div>

          <h3 className="font-semibold text-white">
            Quick Links
          </h3>

          <div className="mt-4 flex flex-col gap-3">

            <a
              href="#features"
              className="text-slate-400 transition hover:text-cyan-400"
            >
              Features
            </a>

            <a
              href="#roadmap"
              className="text-slate-400 transition hover:text-cyan-400"
            >
              Roadmap
            </a>

            <a
              href="#about"
              className="text-slate-400 transition hover:text-cyan-400"
            >
              About
            </a>

          </div>

        </div>

        <div>

          <h3 className="font-semibold text-white">
            Project
          </h3>

          <div className="mt-4 flex flex-col gap-3">

            <a
              href={APP.github}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 transition hover:text-cyan-400"
            >
              GitHub Repository
            </a>

            <p className="text-slate-400">
              Version {APP.version}
            </p>

          </div>

        </div>

      </div>

      <div className="border-t border-slate-800 py-6 text-center text-sm text-slate-500">
        © 2026 {APP.name}. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;