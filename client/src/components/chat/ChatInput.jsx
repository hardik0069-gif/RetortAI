import { useEffect, useRef, useState } from "react";
import { useChat } from "../../hooks/useChat";

function ChatInput() {
  const { addMessage, loading } = useChat();

  const [text, setText] = useState("");
  const [listening, setListening] = useState(false);

  const recognitionRef = useRef(null);

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition ||
      window.webkitSpeechRecognition;

    if (!SpeechRecognition) return;

    const recognition = new SpeechRecognition();

    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.lang = "en-IN";

    recognition.onresult = (event) => {
      let transcript = "";

      for (let i = event.resultIndex; i < event.results.length; i++) {
        transcript += event.results[i][0].transcript;
      }

      setText(transcript);
    };

    recognition.onend = () => {
      setListening(false);
    };

    recognition.onerror = () => {
      setListening(false);
    };

    recognitionRef.current = recognition;

    return () => {
      recognition.stop();
    };
  }, []);

  function toggleVoice() {
    const recognition = recognitionRef.current;

    if (!recognition) {
      alert("Voice input is not supported in this browser.");
      return;
    }

    if (listening) {
      recognition.stop();
      setListening(false);
      return;
    }

    setListening(true);
    recognition.start();
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const message = text.trim();

    if (!message || loading) return;

    setText("");

    await addMessage({
      id: Date.now(),
      role: "user",
      text: message,
    });
  }

  function handleKeyDown(event) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSubmit(event);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto w-full max-w-3xl">
      <div className="flex items-end gap-1.5 rounded-2xl border border-neutral-800 bg-[#090909]/95 p-1.5 shadow-2xl shadow-black/20 backdrop-blur-md transition focus-within:border-neutral-700">
        <textarea
          value={text}
          onChange={(event) => setText(event.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={listening ? "Listening..." : "Message RetortAI..."}
          rows={1}
          disabled={loading}
          className="max-h-32 min-h-10 flex-1 resize-none bg-transparent px-3 py-2.5 text-sm text-white outline-none placeholder:text-neutral-700"
        />

        <button
          type="button"
          onClick={toggleVoice}
          disabled={loading}
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition ${
            listening
              ? "bg-white text-black"
              : "text-neutral-500 hover:bg-neutral-900 hover:text-white"
          }`}
          aria-label="Voice input"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-[18px] w-[18px]"
          >
            <rect x="9" y="3" width="6" height="11" rx="3" />
            <path d="M5 11a7 7 0 0 0 14 0" />
            <path d="M12 18v3" />
            <path d="M8 21h8" />
          </svg>
        </button>

        <button
          type="submit"
          disabled={!text.trim() || loading}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-black transition hover:bg-neutral-200 disabled:cursor-not-allowed disabled:opacity-25"
          aria-label="Send message"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-[18px] w-[18px]"
          >
            <path d="M5 12h14" />
            <path d="m13 6 6 6-6 6" />
          </svg>
        </button>
      </div>
    </form>
  );
}

export default ChatInput;