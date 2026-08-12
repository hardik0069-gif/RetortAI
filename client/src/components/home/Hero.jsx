import { Link } from "react-router-dom";
import useRandomTagline from "../../hooks/useRandomTagline";

function Hero() {
  const tagline = useRandomTagline();

  return (
    <section className="relative z-10 mx-auto flex min-h-[calc(100vh-80px)] max-w-6xl flex-col items-center justify-center px-6 py-20 text-center">
      <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-neutral-700 sm:text-[10px]">
        AI WITH ATTITUDE
      </p>

      <h1 className="mt-7 text-[clamp(4rem,13vw,10rem)] font-black leading-[0.78] tracking-[-0.09em] text-white">
        RETORT<span className="text-neutral-600">AI</span>
      </h1>

      <div className="mt-9 min-h-[72px] max-w-3xl">
        <p className="text-2xl font-semibold leading-tight tracking-[-0.035em] text-neutral-200 sm:text-3xl">
          {tagline}
        </p>
      </div>

      <p className="mt-5 max-w-xl text-sm leading-7 text-neutral-600 sm:text-base">
        Pick a personality. Start talking. Get responses with an attitude
        that actually matches the conversation.
      </p>

      <div className="mt-9 flex flex-wrap justify-center gap-3">
        <Link
          to="/chat"
          className="group inline-flex items-center gap-4 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-black transition hover:bg-neutral-200"
        >
          Start Chat
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>

        <Link
          to="/about"
          className="rounded-full border border-neutral-800 px-7 py-3.5 text-sm font-semibold text-neutral-400 transition hover:border-neutral-600 hover:text-white"
        >
          Why RetortAI?
        </Link>
      </div>

      <div className="mt-14 flex max-w-3xl flex-wrap justify-center gap-2">
        {[
          "Roast",
          "Dark",
          "Gen-Z",
          "Friendly",
          "Mentor",
          "Random",
          "Bachhi",
        ].map((mode) => (
          <span
            key={mode}
            className="rounded-full border border-neutral-900 px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-neutral-700 transition hover:border-neutral-700 hover:text-neutral-400"
          >
            {mode}
          </span>
        ))}
      </div>

      <div className="mt-14 flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.25em] text-neutral-800">
        <span className="h-px w-8 bg-neutral-900" />
        Seven personalities
        <span className="h-px w-8 bg-neutral-900" />
      </div>
    </section>
  );
}

export default Hero;