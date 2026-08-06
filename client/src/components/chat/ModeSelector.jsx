function ModeSelector() {
  return (
    <div className="mt-8 flex flex-wrap gap-3">

      <button className="rounded-xl bg-cyan-500 px-5 py-2 font-medium text-slate-950">
        Friendly
      </button>

      <button className="rounded-xl border border-slate-700 px-5 py-2">
        Savage
      </button>

      <button className="rounded-xl border border-slate-700 px-5 py-2">
        Dark
      </button>

      <button className="rounded-xl border border-slate-700 px-5 py-2">
        Gen-Z
      </button>

      <button className="rounded-xl border border-slate-700 px-5 py-2">
        Random
      </button>

    </div>
  );
}

export default ModeSelector;