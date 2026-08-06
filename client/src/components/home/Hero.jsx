import { Link } from "react-router-dom";
import Button from "../ui/Button";
import { APP } from "../../config/app";
import useRandomTagline from "../../hooks/useRandomTagline";

function Hero() {
  const tagline = useRandomTagline();

  return (
    <section className="relative z-10 mx-auto flex min-h-[calc(100vh-64px)] max-w-5xl flex-col items-center justify-center px-6 text-center">

      <span className="inline-flex items-center rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-300">
      AI Powered Roast Chatbot
      </span>

      <h1 className="mt-8 text-6xl font-black tracking-tight text-white md:text-7xl"
>
        {APP.name}
      </h1>

      <p className="mt-6 max-w-3xl text-xl font-medium text-cyan-400 md:text-2xl">
      {tagline}
      </p>

      <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">
      Experience witty, intelligent and lightning-fast AI
      conversations with multiple personalities,     multilingual
      support and creative responses.
      </p>

      <div className="mt-12 flex flex-col gap-4 sm:flex-row">

      <Link to="/chat">
      <Button>
      Start Chat
      </Button>
      </Link>

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

<div className="mt-16 flex flex-wrap justify-center gap-10 text-center">

  <div>
    <h3 className="text-3xl font-bold text-white">10K+</h3>
    <p className="mt-2 text-slate-400">
      Roasts Generated
    </p>
  </div>

  <div>
    <h3 className="text-3xl font-bold text-white">25+</h3>
    <p className="mt-2 text-slate-400">
      AI Personalities
    </p>
  </div>

  <div>
    <h3 className="text-3xl font-bold text-white">100+</h3>
    <p className="mt-2 text-slate-400">
      Unique Taglines
    </p>
  </div>

</div>