const modes = [
  "Friendly",
  "Roast",
  "Dark",
  "Gen-Z",
  "Random",
];

function ModeSelector() {
  return (
    <div className="mt-8 flex flex-wrap gap-3">

      {modes.map((mode, index) => (

        <button
          key={mode}
          className={`rounded-xl px-5 py-2 transition ${
            index === 0
              ? "bg-cyan-500 text-slate-950"
              : "border border-slate-700 hover:border-cyan-400"
          }`}
        >
          {mode}
        </button>

      ))}

    </div>
  );
}

export default ModeSelector;