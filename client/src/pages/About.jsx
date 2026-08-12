import { Link } from "react-router-dom";
import AnimatedBackground from "../components/ui/AnimatedBackground";
import { APP } from "../config/app";

const MODES = [
  {
    name: "Roast",
    description: "Savage replies, sharp comebacks and zero boring energy.",
  },
  {
    name: "Dark",
    description: "Darker humour, sharper observations and a more personal edge.",
  },
  {
    name: "Gen-Z",
    description: "Internet energy, casual language and modern humour.",
  },
  {
    name: "Friendly",
    description: "Warm, relaxed and genuinely helpful conversation.",
  },
  {
    name: "Mentor",
    description: "Practical guidance, honest advice and thoughtful answers.",
  },
  {
    name: "Random",
    description: "You never know which personality is showing up next.",
  },
  {
    name: "Bachhi",
    description: "The most unfiltered experimental personality in RetortAI.",
  },
];

function About() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-white">
      <AnimatedBackground />

      <section className="relative z-10 min-h-screen px-5 py-6 sm:px-8 lg:px-12">
        <nav className="flex items-center justify-between">
          <Link
            to="/"
            className="text-sm font-extrabold tracking-[-0.04em] sm:text-base"
          >
            RETORTAI<span className="text-neutral-600">.</span>
          </Link>

          <div className="flex items-center gap-4 overflow-x-auto text-[9px] font-semibold uppercase tracking-[0.18em] text-neutral-600 sm:gap-5 sm:text-[10px]">
            <Link
              to="/chat"
              className="whitespace-nowrap transition hover:text-white"
            >
              Chat
            </Link>

            <Link
              to="/about"
              className="whitespace-nowrap text-white"
            >
              About
            </Link>

            <a
              href={APP.github}
              target="_blank"
              rel="noreferrer"
              className="whitespace-nowrap transition             hover:text-white"
            >
              GitHub
            </a>

            <a
              href={APP.linkedin}
              target="_blank"
              rel="noreferrer"
              className="whitespace-nowrap transition             hover:text-white"
            >
              LinkedIn
            </a>
          </div>
        </nav>

        <div className="mx-auto max-w-5xl pb-20 pt-24 sm:pt-32">
          <div className="max-w-4xl">
            <p className="mb-6 text-[9px] font-bold uppercase tracking-[0.4em] text-neutral-700 sm:text-[10px]">
              ABOUT RETORTAI
            </p>

            <h1 className="max-w-4xl text-5xl font-extrabold leading-[0.95] tracking-[-0.06em] sm:text-7xl lg:text-8xl">
              AI doesn't have to sound the same every time.
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-7 text-neutral-500 sm:text-lg">
              RetortAI is an AI chat experience built around personality.
              Instead of giving you the same kind of answer every time, you
              choose how you want the conversation to feel.
            </p>
          </div>

          <div className="mt-24 grid gap-16 border-t border-neutral-900 pt-10 sm:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-neutral-700">
                WHAT IT DOES
              </p>
            </div>

            <div>
              <p className="max-w-2xl text-xl font-medium leading-8 tracking-[-0.02em] text-neutral-200 sm:text-2xl">
                Pick a personality, start a conversation and let RetortAI
                adapt its tone to your vibe.
              </p>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-neutral-600">
                Want a roast? Pick Roast. Want darker humour? Pick Dark.
                Need actual guidance? Pick Mentor. Prefer a relaxed
                conversation? Friendly has you covered.
              </p>
            </div>
          </div>

          <div className="mt-24 border-t border-neutral-900 pt-10">
            <div className="mb-10 flex items-end justify-between gap-6">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-neutral-700">
                  PERSONALITIES
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-[-0.04em] sm:text-4xl">
                  Choose your vibe.
                </h2>
              </div>

              <p className="hidden max-w-xs text-right text-xs leading-5 text-neutral-700 sm:block">
                Seven personalities.
                <br />
                One conversation.
              </p>
            </div>

            <div className="grid border-l border-t border-neutral-900 sm:grid-cols-2 lg:grid-cols-3">
              {MODES.map((mode, index) => (
                <div
                  key={mode.name}
                  className={`group min-h-44 border-b border-r border-neutral-900 p-6 transition hover:bg-white/[0.025] ${
                    index === MODES.length - 1
                      ? "lg:col-span-1"
                      : ""
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-neutral-700">
                      0{index + 1}
                    </span>

                    <span className="text-neutral-800 transition group-hover:text-neutral-500">
                      ↗
                    </span>
                  </div>

                  <h3 className="mt-12 text-xl font-bold tracking-[-0.03em] text-neutral-200">
                    {mode.name}
                  </h3>

                  <p className="mt-3 max-w-xs text-xs leading-5 text-neutral-600">
                    {mode.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-24 border-t border-neutral-900 pt-10">
            <div className="grid gap-10 sm:grid-cols-2">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-neutral-700">
                  THE IDEA
                </p>

                <h2 className="mt-4 max-w-md text-3xl font-bold leading-tight tracking-[-0.05em] sm:text-4xl">
                  Same AI. Different attitude.
                </h2>
              </div>

              <div className="max-w-xl text-sm leading-7 text-neutral-600">
                <p>
                  RetortAI is designed for conversations that feel less
                  predictable. The personality you choose changes the way the
                  AI responds, so the same question can feel completely
                  different depending on the mode.
                </p>

                <p className="mt-5">
                  You can switch modes whenever you want and keep the
                  conversation moving in a completely different direction.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-24 border-t border-neutral-900              pt-10">
            <div className="grid gap-10 sm:grid-cols-2">
              <div>
                <p className="text-[9px] font-bold uppercase              tracking-[0.3em] text-neutral-700">
                  WHY RETORTAI?
                </p>

                <h2 className="mt-4 max-w-md text-3xl              font-bold leading-tight tracking-[-0.05em]              sm:text-4xl">
                  T             here is a reason behind the name.
                </h2>
              </div>

              <div className="space-y-8">
                <div>
                  <p className="text-[9px] font-bold uppercase              tracking-[0.3em] text-neutral-700">
                    THE NAME
                  </p>

                  <h3 className="mt-3 text-xl font-bold              tracking-[-0.03em] text-neutral-200">
                    Retort + AI
                  </h3>

                  <p className="mt-3 text-sm leading-7              text-neutral-600">
                    “Retort” means a quick, sharp or witty              reply. RetortAI takes that
                    idea and turns it into an AI built around              personality, attitude and
                    conversation.
                  </p>
                </div>

                <div>
                  <p className="text-[9px] font-bold uppercase              tracking-[0.3em] text-neutral-700">
                    THE LOGO
                  </p>

                  <h3 className="mt-3 text-xl font-bold              tracking-[-0.03em] text-neutral-200">
                    Why the T?
                  </h3>

                  <p className="mt-3 text-sm leading-7              text-neutral-600">
                    The T represents “Retort” — the sharp              comeback behind the
                    personality. The contrasting AI treatment              represents the artificial
                    intelligence behind it. Together, they              form the RetortAI identity.
                  </p>
                </div>

                <p className="border-l border-neutral-800 pl-5              text-sm font-medium leading-7              text-neutral-400">
                  Not just an AI that answers. An AI that has              a retort.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-24 flex flex-col items-start justify-between gap-8 border-t border-neutral-900 pt-10 sm:flex-row sm:items-end">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-neutral-700">
                READY?
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-[-0.05em] sm:text-4xl">
                Pick a vibe. Start talking.
              </h2>
            </div>

            <Link
              to="/chat"
              className="group inline-flex items-center gap-4 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-black transition hover:bg-neutral-200"
            >
              Start Chat

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>

        <footer className="mx-auto flex max-w-5xl items-center justify-between border-t border-neutral-900 py-5 text-[9px] font-semibold uppercase tracking-[0.25em] text-neutral-700">
          <span>RETORTAI</span>
          <span>AI WITH ATTITUDE</span>

          <div className="mt-24 border-t border-neutral-900 pt-10">
          
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
          <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-neutral-700">
            BUILT BY
          </p>

             <h2 className="mt-3 text-3xl font-bold tracking-[-0.05em] sm:text-4xl">
               Hardik Kataria
             </h2>

             <p className="mt-3 max-w-md text-sm leading-7 text-neutral-600">
              RetortAI is a personal project built around     the idea that AI
              conversations can have more  personality,     attitude and character.
             </p>
            </div>

            <div className="flex flex-wrap gap-3">
            <a
              href="https://github.com/hardik0069-gif/         RetortAI"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border        border-neutral-800 px-5 py-2.5 text-[10px]        font-semibold uppercase tracking-[0.18em]        text-neutral-500 transition        hover:border-neutral-600 hover:text-white"
            >
              GitHub
            </a>

            <a
            href="https://www.linkedin.com/in/      hardik-kataria-59bb83379/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border       border-neutral-800 px-5 py-2.5 text-[10px]       font-semibold uppercase tracking-[0.18em]       text-neutral-500 transition       hover:border-neutral-600 hover:text-white"
            >
              LinkedIn
           </a>
          </div>
         </div>
        </div>

        </footer>
      </section>
    </main>
  );
}

export default About;