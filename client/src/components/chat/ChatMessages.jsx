import { useEffect, useRef } from "react";
import { useChat } from "../../hooks/useChat";

function ChatMessages() {
  const { messages } = useChat();

const bottomRef = useRef(null);

useEffect(() => {
  bottomRef.current?.scrollIntoView({
    behavior: "smooth",
  });
}, [messages]);

  return (
    <div className="h-125 overflow-y-auto rounded-2xl border border-slate-800 bg-slate-900 p-6">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`mb-5 max-w-xl rounded-2xl px-5 py-4 ${
            message.role === "assistant"
              ? "bg-slate-800 text-white"
              : "ml-auto bg-cyan-500 text-slate-950"
          }`}
        >
          <p className="mb-2 text-sm opacity-70">
            {message.role === "assistant" ? "RetortAI" : "You"}
          </p>

          <p>{message.text}</p>
          <div ref={bottomRef} />
        </div>
      ))}
    </div>
  );
}

export default ChatMessages;