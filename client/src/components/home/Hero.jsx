import { Link } from "react-router-dom";
import AnimatedBackground from "../components/ui/AnimatedBackground";
import useRandomTagline from "../hooks/useRandomTagline";

function Hero() {
  const tagline = useRandomTagline();

  return (
    <section className="relative z-10 mx-auto flex min-h-[calc(100vh-80px)] max-w-6xl flex-col items-center justify-center px-6 py-20 text-center">
      <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-neutral-700">
        AI PERSONALITY CONVERSATION
      </p>

      <h1 className="mt-7 text-[clamp(4rem,12vw,9rem)] font-black leading-[0.8] tracking-[-0.08em] text-white">
        RETORT<span className="text-neutral-600">AI</span>
      </h1>

      <p className="mt-8 text-2xl font-semibold tracking-[-0.03em] text-neutral-200 sm:text-3xl">
        {tagline}
      </p>

      <p className="mt-5 max-w-xl text-sm leading-7 text-neutral-600 sm:text-base">
        An AI that talks the way you want. Pick a personality, start a
        conversation, and let RetortAI match your vibe.
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-3">
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
          About RetortAI
        </Link>
      </div>

      <div className="mt-16 flex flex-wrap justify-center gap-2">
        {["Roast", "Dark", "Gen-Z", "Friendly", "Mentor", "Random", "Bachhi"].map(
          (mode) => (
            <span
              key={mode}
              className="rounded-full border border-neutral-900 px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-neutral-700"
            >
              {mode}
            </span>
          )
        )}
      </div>

      <div className="mt-14 max-w-2xl border-t border-neutral-900 pt-8">
        <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-neutral-700">
          CHOOSE YOUR ATTITUDE
        </p>

        <p className="mt-3 text-xs leading-6 text-neutral-600 sm:text-sm">
          Roast it. Challenge it. Ask it. Talk to it. RetortAI lets you choose
          how the conversation feels instead of giving every message the same
          boring personality.
        </p>
      </div>
    </section>
  );
}

export default Hero;