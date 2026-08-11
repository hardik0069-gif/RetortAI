import { Link, useSearchParams } from "react-router-dom";
import AnimatedBackground from "../components/ui/AnimatedBackground";

function decodeChat(value) {
  try {
    return JSON.parse(decodeURIComponent(escape(atob(value))));
  } catch {
    return null;
  }
}

function SharedChat() {
  const [searchParams] = useSearchParams();
  const encodedChat = searchParams.get("chat");
  const chat = encodedChat ? decodeChat(encodedChat) : null;

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-white">
      <AnimatedBackground />

      <section className="relative z-10 mx-auto min-h-screen w-full max-w-4xl px-5 py-6 sm:px-8">
        <nav className="flex items-center justify-between border-b border-neutral-900 pb-5">
          <Link
            to="/"
            className="text-sm font-extrabold tracking-[-0.04em]"
          >
            RETORTAI<span className="text-neutral-600">.</span>
          </Link>

          <div className="flex items-center gap-4 text-[9px] font-semibold uppercase tracking-[0.18em] text-neutral-600">
            <Link
              to="/chat"
              className="transition hover:text-white"
            >
              Chat
            </Link>

            <Link
              to="/about"
              className="transition hover:text-white"
            >
              About
            </Link>
          </div>
        </nav>

        <div className="py-12 sm:py-16">
          <p className="text-[9px] font-bold uppercase tracking-[0.35em] text-neutral-700">
            SHARED CHAT
          </p>

          <h1 className="mt-3 text-3xl font-extrabold tracking-[-0.05em] sm:text-4xl">
            A conversation from RetortAI.
          </h1>

          {!chat ? (
            <div className="mt-12 border border-neutral-900 p-6">
              <p className="text-sm text-neutral-500">
                This shared chat link is invalid or incomplete.
              </p>

              <Link
                to="/chat"
                className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-xs font-bold uppercase tracking-[0.15em] text-black transition hover:bg-neutral-200"
              >
                Start a Chat
              </Link>
            </div>
          ) : (
            <>
              <div className="mt-10 space-y-8">
                {chat.messages?.map((message, index) => {
                  const isUser = message.role === "user";

                  return (
                    <div
                      key={`${message.id}-${index}`}
                      className={`flex ${
                        isUser ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-[88%] sm:max-w-[75%] ${
                          isUser ? "text-right" : "text-left"
                        }`}
                      >
                        <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.2em] text-neutral-700">
                          {isUser ? "You" : "RetortAI"}
                        </p>

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
              </div>

              <div className="mt-16 border-t border-neutral-900 pt-8">
                <p className="text-xs leading-6 text-neutral-600">
                  This is a read-only shared conversation.
                </p>

                <Link
                  to="/chat"
                  className="mt-5 inline-flex rounded-full bg-white px-6 py-3 text-xs font-bold uppercase tracking-[0.15em] text-black transition hover:bg-neutral-200"
                >
                  Start Your Own Chat →
                </Link>
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  );
}

export default SharedChat;