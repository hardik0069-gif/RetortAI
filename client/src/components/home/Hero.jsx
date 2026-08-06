import Button from "../ui/Button";
import useRandomTagline from "../../hooks/useRandomTagline";

function Hero() {
  const tagline = useRandomTagline();
  

  return (
    <section className="mx-auto flex min-h-[calc(100vh-64px)] max-w-5xl flex-col items-center justify-center px-6 text-center">

      <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
        AI Powered Roast Chatbot
      </span>

      <h1 className="mt-8 text-6xl font-extrabold tracking-tight text-white md:text-7xl">
        RetortAI
      </h1>

      <h2 className="mt-6 max-w-3xl text-2xl font-semibold text-cyan-400 md:text-3xl">
        {tagline}
      </h2>

      <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">
        Experience an AI chatbot that adapts its personality,
        understands your language, and delivers fast, creative,
        and entertaining conversations.
      </p>

      <div className="mt-12">
        <Button>
          Start Chat
        </Button>
      </div>

    </section>
  );
}

export default Hero;