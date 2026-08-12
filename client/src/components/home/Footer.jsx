import { APP } from "../../config/app";

function Footer() {
  return (
    <footer className="border-t border-neutral-900 bg-[#050505]">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-12 sm:px-8 md:flex-row md:items-start md:justify-between">
        <div>
          <h2 className="text-xl font-black tracking-[-0.04em] text-white">
            {APP.name}
            <span className="text-neutral-600">.</span>
          </h2>

          <p className="mt-3 max-w-sm text-sm leading-6 text-neutral-600">
            AI with attitude. Pick a personality, start a conversation, and
            get a response that actually has some character.
          </p>
        </div>

        <div>
          <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-neutral-700">
            Explore
          </p>

          <div className="mt-4 flex flex-col gap-3">
            <a
              href="/chat"
              className="text-sm text-neutral-500 transition hover:text-white"
            >
              Chat
            </a>

            <a
              href="/about"
              className="text-sm text-neutral-500 transition hover:text-white"
            >
              About
            </a>
          </div>
        </div>

        <div>
          <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-neutral-700">
            Connect
          </p>

          <div className="mt-4 flex flex-col gap-3">
            <a
              href="https://github.com/hardik0069-gif/RetortAI"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-neutral-500 transition hover:text-white"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/hardik-kataria-59bb83379/"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-neutral-500 transition hover:text-white"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-900 px-6 py-5 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-neutral-700 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 {APP.name}</span>
          <span>AI WITH ATTITUDE</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;