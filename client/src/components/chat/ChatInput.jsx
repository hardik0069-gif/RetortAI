function ChatInput() {
  return (
    <div className="mt-6 flex gap-4">

      <input
        type="text"
        placeholder="Type your message..."
        className="flex-1 rounded-xl border border-slate-700 bg-slate-900 px-5 py-4 text-white outline-none transition focus:border-cyan-400"
      />

      <button
        className="rounded-xl bg-cyan-500 px-8 font-semibold text-slate-950 transition hover:bg-cyan-400"
      >
        Send
      </button>

    </div>
  );
}

export default ChatInput;