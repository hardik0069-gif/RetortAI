import { useState } from "react";
import AnimatedBackground from "../components/ui/AnimatedBackground";
import ChatSidebar from "../components/chat/ChatSidebar";
import ModeSelector from "../components/chat/ModeSelector";
import ChatMessages from "../components/chat/ChatMessages";
import ChatInput from "../components/chat/ChatInput";

function Chat() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-white">
      <AnimatedBackground />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1600px]">
        <ChatSidebar />

        {sidebarOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <button
              type="button"
              onClick={() => setSidebarOpen(false)}
              className="absolute inset-0 bg-black/70"
              aria-label="Close sidebar"
            />

            <div className="relative h-full">
              <ChatSidebar
                mobile
                onClose={() => setSidebarOpen(false)}
              />
            </div>
          </div>
        )}

        <div className="flex min-h-screen min-w-0 flex-1 flex-col">
          <header className="flex h-20 shrink-0 items-center justify-between border-b border-neutral-900 px-4 sm:px-6 lg:px-10">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setSidebarOpen(true)}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-900 text-neutral-500 transition hover:border-neutral-700 hover:text-white lg:hidden"
                aria-label="Open chat history"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  className="h-5 w-5"
                >
                  <path d="M4 6h16" />
                  <path d="M4 12h16" />
                  <path d="M4 18h16" />
                </svg>
              </button>

              <div>
                <h1 className="text-xl font-extrabold tracking-[-0.04em] lg:hidden">
                  RETORTAI<span className="text-neutral-600">.</span>
                </h1>

                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-neutral-600">
                  AI WITH ATTITUDE
                </p>
              </div>
            </div>

          <div className="flex items-center gap-4 text-[9px] font-semibold uppercase tracking-[0.18em] text-neutral-600 sm:gap-5 sm:text-[10px]">
          <span className="text-white">
            Chat
          </span>

          <a
            href="/about"
            className="transition hover:text-white"
          >
            About
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
          >
            GitHub
          </a>

          <a
            href="#"
            className="transition hover:text-white"
          >
            LinkedIn
          </a>
          </div>
          </header>

          <section className="flex min-h-0 flex-1 flex-col px-4 sm:px-6 lg:px-10">
            <div className="shrink-0 border-b border-neutral-900 py-3">
              <ModeSelector />
            </div>

            <div className="min-h-0 flex-1 py-4 sm:py-6">
              <ChatMessages />
            </div>

            <div className="shrink-0 border-t border-neutral-900 pb-3 pt-3 sm:pb-5">
              <ChatInput />

              <p className="mt-2 text-center text-[9px] uppercase tracking-[0.2em] text-neutral-700">
                RetortAI can make mistakes
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default Chat;