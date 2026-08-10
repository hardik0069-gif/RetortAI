import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AnimatedBackground from "../components/ui/AnimatedBackground";
import { generateTagline } from "../services/chatService";

function Home() {
  const [tagline, setTagline] = useState("Retort loading...");

  useEffect(() => {
    let active = true;

    async function loadTagline() {
      try {
        const saved = JSON.parse(
          localStorage.getItem("retortai_taglines") || "[]"
        );

        let generated = "";

        for (let attempt = 0; attempt < 3; attempt++) {
          const result = await generateTagline(saved);

          const normalized = result
            .toLowerCase()
            .replace(/[^\w\s]/g, "")
            .trim();

          const duplicate = saved.some((item) => {
            const existing = item
              .toLowerCase()
              .replace(/[^\w\s]/g, "")
              .trim();

            return (
              existing === normalized ||
              existing.includes(normalized) ||
              normalized.includes(existing)
            );
          });

          if (!duplicate && result.length <= 80) {
            generated = result;
            break;
          }
        }

        if (!generated) {
          generated = await generateTagline([
            ...saved,
            "Make something completely different from every previous tagline.",
          ]);
        }

        if (!active) return;

        const updated = [
          generated,
          ...saved.filter(
            (item) => item.toLowerCase() !== generated.toLowerCase()
          ),
        ].slice(0, 30);

        localStorage.setItem(
          "retortai_taglines",
          JSON.stringify(updated)
        );

        setTagline(generated);
      } catch (error) {
        console.error(error);

        if (active) {
          setTagline("Baat karo. Retort lo.");
        }
      }
    }

    loadTagline();

    return () => {
      active = false;
    };
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-white">
      <AnimatedBackground />

      <section className="relative z-10 flex min-h-screen w-full flex-col px-5 py-6 sm:px-8 lg:px-12">
        <nav className="flex items-center justify-between">
          <Link
            to="/"
            className="text-sm font-extrabold tracking-[-0.04em] sm:text-base"
          >
            RETORTAI<span className="text-neutral-600">.</span>
          </Link>

          <div className="flex items-center gap-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-600">
            <Link
              to="/chat"
              className="transition hover:text-white"
            >
              Chat
            </Link>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white"
            >
              GitHub
            </a>

            <a
              href="#"
              className="transition hover:text-white"
            >
              LinkedIn
            </a>
          </div>
        </nav>

        <div className="flex flex-1 items-center justify-center">
          <div className="mx-auto flex w-full max-w-6xl flex-col items-center text-center">
            <p className="mb-7 text-[9px] font-bold uppercase tracking-[0.4em] text-neutral-700 sm:text-[10px]">
              AI PERSONALITY CONVERSATION
            </p>

            <h1 className="text-[20vw] font-extrabold leading-[0.72] tracking-[-0.09em] sm:text-[16vw] lg:text-[11rem]">
              RETORT
              <span className="text-neutral-600">AI</span>
            </h1>

            <div className="mt-10 flex min-h-[4rem] items-center justify-center">
              <p className="max-w-3xl text-xl font-medium leading-tight tracking-[-0.035em] text-neutral-200 transition-all duration-500 sm:text-2xl lg:text-4xl">
                {tagline}
              </p>
            </div>

            <p className="mt-5 max-w-lg text-xs leading-6 text-neutral-600 sm:text-sm">
              An AI that talks the way you want.
              <br />
              Roast it. Ask it. Challenge it.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/chat"
                className="group inline-flex items-center gap-4 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-black transition-all duration-300 hover:bg-neutral-200"
              >
                Start Chat

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <a
                href="#modes"
                className="rounded-full border border-neutral-800 px-7 py-3.5 text-sm font-semibold text-neutral-400 transition-all duration-300 hover:border-neutral-600 hover:text-white"
              >
                Explore
              </a>
            </div>

            <div
              id="modes"
              className="mt-14 flex max-w-2xl flex-wrap justify-center gap-2"
            >
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
                  className="rounded-full border border-neutral-900 px-3.5 py-1.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-neutral-600 transition hover:border-neutral-700 hover:text-neutral-300"
                >
                  {mode}
                </span>
              ))}
            </div>
          </div>
        </div>

        <footer className="flex items-end justify-between border-t border-neutral-900 pt-4">
          <p className="text-[9px] uppercase tracking-[0.25em] text-neutral-700">
            RetortAI
          </p>

          <p className="text-[9px] uppercase tracking-[0.25em] text-neutral-700">
            AI with attitude
          </p>
        </footer>
      </section>
    </main>
  );
}

export default Home;