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

      <button
        className="mt-10 rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-black transition hover:scale-105"
      >
        Start Roasting 🚀
      </button>

    </section>
  );
}

export default Hero;