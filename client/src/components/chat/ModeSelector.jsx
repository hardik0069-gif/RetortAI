import { useChat } from "../../hooks/useChat";

const MODES = [
  {
    id: "roast",
    name: "Roast",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3c2 4 5 5 5 9a5 5 0 0 1-10 0c0-2 1-4 3-6" />
        <path d="M12 11c1 2 2 2 2 4a2 2 0 0 1-4 0c0-1 1-2 2-4Z" />
      </svg>
    ),
  },
  {
    id: "dark",
    name: "Dark",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 15.5A8 8 0 0 1 8.5 4 8 8 0 1 0 20 15.5Z" />
      </svg>
    ),
  },
  {
    id: "gen-z",
    name: "Gen-Z",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 5h16v11H8l-4 4V5Z" />
        <path d="M8 9h8" />
        <path d="M8 12h5" />
      </svg>
    ),
  },
  {
    id: "friendly",
    name: "Friendly",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="8" />
        <path d="M8.5 10h.01" />
        <path d="M15.5 10h.01" />
        <path d="M8.5 14c1 1.5 2.5 2 3.5 2s2.5-.5 3.5-2" />
      </svg>
    ),
  },
  {
    id: "mentor",
    name: "Mentor",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 4 3 8l9 4 9-4-9-4Z" />
        <path d="M6 10v5c2 2 10 2 12 0v-5" />
        <path d="M21 8v6" />
      </svg>
    ),
  },
  {
    id: "random",
    name: "Random",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 7h3c4 0 5 10 10 10h3" />
        <path d="M17 5l3 2-3 2" />
        <path d="M4 17h3c1.5 0 2.5-1 3.5-2.5" />
        <path d="M17 15l3 2-3 2" />
      </svg>
    ),
  },
  {
    id: "bachhi",
    name: "Bachhi",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 8h14" />
        <path d="M7 8v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V8" />
        <path d="M9 8V6a3 3 0 0 1 6 0v2" />
        <path d="M10 13h4" />
      </svg>
    ),
  },
];

function ModeSelector() {
  const { mode, setMode } = useChat();

  return (
    <div className="mx-auto flex w-full max-w-3xl items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
      {MODES.map((item) => {
        const active = mode === item.id;

        return (
          <button
            key={item.id}
            type="button"
            onClick={() => setMode(item.id)}
            className={`flex h-9 shrink-0 items-center gap-2 rounded-full border px-3 text-[11px] font-semibold transition-all duration-200 ${
              active
                ? "border-white bg-white text-black"
                : "border-neutral-900 bg-transparent text-neutral-600 hover:border-neutral-700 hover:text-neutral-300"
            }`}
          >
            <span className="h-4 w-4 shrink-0">
              {item.icon}
            </span>

            <span>{item.name}</span>
          </button>
        );
      })}
    </div>
  );
}

export default ModeSelector;