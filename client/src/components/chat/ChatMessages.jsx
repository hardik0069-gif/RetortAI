import { useEffect, useRef, useState } from "react";
import { useChat } from "../../hooks/useChat";

function ChatMessages() {
  const { messages, loading } = useChat();
  const [copiedId, setCopiedId] = useState(null);
  const [speakingId, setSpeakingId] = useState(null);

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  async function copyMessage(message) {
    try {
      await navigator.clipboard.writeText(message.text);
      setCopiedId(message.id);

      setTimeout(() => {
        setCopiedId(null);
      }, 1500);
    } catch (error) {
      console.error(error);
    }
  }

  function speakMessage(message) {
    if (!window.speechSynthesis) return;

    if (speakingId === message.id) {
      window.speechSynthesis.cancel();
      setSpeakingId(null);
      return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(message.text);

    utterance.rate = 1;
    utterance.pitch = 1;

    utterance.onend = () => {
      setSpeakingId(null);
    };

    utterance.onerror = () => {
      setSpeakingId(null);
    };

    setSpeakingId(message.id);
    window.speechSynthesis.speak(utterance);
  }

  return (
    <div className="h-full overflow-y-auto px-1 sm:px-3">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-7">
        {messages.map((message) => {
          const isUser = message.role === "user";

          return (
            <div
              key={message.id}
              className={`group flex ${
                isUser ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[88%] sm:max-w-[78%] ${
                  isUser ? "text-right" : "text-left"
                }`}
              >
                <div
                  className={`mb-1.5 flex items-center gap-2 ${
                    isUser ? "justify-end" : "justify-start"
                  }`}
                >
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-neutral-700">
                    {isUser ? "You" : "RetortAI"}
                  </span>

                  {!isUser && (
                    <>
                      <button
                        type="button"
                        onClick={() => copyMessage(message)}
                        className="text-neutral-600 opacity-70 transition hover:text-white sm:opacity-0 sm:group-hover:opacity-100"
                        aria-label="Copy response"
                      >
                        {copiedId === message.id ? (
                          <span className="text-[9px] font-semibold uppercase tracking-wider">
                            Copied
                          </span>
                        ) : (
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-3.5 w-3.5"
                          >
                            <rect
                              x="9"
                              y="9"
                              width="10"
                              height="10"
                              rx="2"
                            />
                            <path d="M15 9V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
                          </svg>
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={() => speakMessage(message)}
                        className="text-neutral-600 opacity-70 transition hover:text-white sm:opacity-0 sm:group-hover:opacity-100"
                        aria-label="Speak response"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-3.5 w-3.5"
                        >
                          <path d="M11 5 6 9H3v6h3l5 4V5Z" />
                          <path d="M15 9.5a4 4 0 0 1 0 5" />
                          <path d="M18 7a8 8 0 0 1 0 10" />
                        </svg>
                      </button>
                    </>
                  )}
                </div>

                <div
                  className={`text-[15px] leading-6 sm:text-base sm:leading-7 ${
                    isUser
                      ? "rounded-2xl bg-white px-4 py-2.5 text-left text-black"
                      : "text-neutral-200"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            </div>
          );
        })}

        {loading && (
          <div className="flex justify-start">
            <div>
              <p className="mb-1.5 text-[9px] font-bold uppercase tracking-[0.2em] text-neutral-700">
                RetortAI
              </p>

              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-neutral-600" />
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-neutral-600 [animation-delay:150ms]" />
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-neutral-600 [animation-delay:300ms]" />
              </div>
            </div>
          </div>
        )}

        <div ref={bottomRef} />
      </div>
    </div>
  );
}

export default ChatMessages;