import { useState } from "react";
import { useChat } from "../../hooks/useChat";

function ChatInput() {
  const [text, setText] = useState("");

  const { addMessage } = useChat();

  function handleSend() {
    if (!text.trim()) return;

    addMessage({
      id: Date.now(),
      role: "user",
      text,
    });

    setText("");
  }

  return (
    <div className="mt-6 flex gap-4">

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
        placeholder="Type your message..."
        className="flex-1 rounded-xl border border-slate-700 bg-slate-900 px-5 py-4 text-white outline-none focus:border-cyan-400"
      />

      <button
        onClick={handleSend}
        className="rounded-xl bg-cyan-500 px-8 font-semibold text-slate-950 hover:bg-cyan-400"
      >
        Send
      </button>

    </div>
  );
}

export default ChatInput;