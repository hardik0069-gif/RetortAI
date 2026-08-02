import Button from "../ui/button";
function Hero() {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">

      <h1 className="text-6xl font-extrabold text-white">
        Roast Smarter.
      </h1>

      <h1 className="mt-2 text-6xl font-extrabold text-cyan-400">
        Laugh Harder.
      </h1>

      <p className="mt-8 max-w-2xl text-lg text-slate-400">

        Experience the next generation AI roast chatbot
        with multiple personalities and blazing-fast replies.

      </p>

      <Button>
        Start Roasting 🚀
      </Button>

    </section>
  );
}

export default Hero;