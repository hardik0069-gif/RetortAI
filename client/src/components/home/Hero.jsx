import Button from "../ui/Button";
import { APP } from "../../config/app";
import useRandomTagline from "../../hooks/useRandomTagline";

function Hero() {
  const tagline = useRandomTagline();

  return (
    <section className="relative z-10 mx-auto flex min-h-[calc(100vh-64px)] max-w-5xl flex-col items-center justify-center px-6 text-center">

      <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
        AI Powered Roast Chatbot
      </span>

      <h1 className="mt-8 text-6xl font-black tracking-tight text-white md:text-7xl">
        {APP.name}
      </h1>

      <p className="mt-5 text-2xl font-semibold text-cyan-400">
        {tagline}
      </p>

      <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">
        Experience an AI chatbot that adapts its personality,
        understands your language and delivers witty, fast,
        and entertaining conversations.
      </p>

      <div className="mt-12 flex flex-col gap-4 sm:flex-row">

        <Button>
          Start Chat
        </Button>

        <a
          href={APP.github}
          target="_blank"
          rel="noreferrer"
        >
          <Button variant="secondary">
            View on GitHub
          </Button>
        </a>

      </div>

    </section>
  );
}

export default Hero;