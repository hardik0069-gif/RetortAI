import { useChat } from "../../hooks/useChat";
import { useState } from "react";
function ChatSidebar({ mobile = false, onClose }) {
  const [shared, setShared] = useState(false);
  const {
    chats,
    activeChatId,
    createNewChat,
    selectChat,
    deleteChat,
  } = useChat();

  function handleSelect(id) {
    selectChat(id);

    if (onClose) {
      onClose();
    }
  }

  function handleNewChat() {
    createNewChat();

    if (onClose) {
      onClose();
    }
  }

  async function handleShare() {
  const currentChat = chats.find(
    (chat) => chat.id === activeChatId
  );

  if (!currentChat) return;

  const data = encodeURIComponent(
    JSON.stringify(currentChat)
  );

  const shareUrl =
    `${window.location.origin}/chat?share=${data}`;

  try {
    if (navigator.share) {
      await navigator.share({
        title: currentChat.title,
        text: "Check out this RetortAI conversation.",
        url: shareUrl,
      });
    } else {
      await navigator.clipboard.writeText(shareUrl);
      setShared(true);

      setTimeout(() => {
        setShared(false);
      }, 1500);
    }
  } catch (error) {
    console.error(error);
  }
}

  return (
    <aside
      className={
        mobile
          ? "flex h-full w-[82vw] max-w-sm flex-col bg-[#070707]"
          : "hidden w-64 shrink-0 border-r border-neutral-900 bg-[#070707] lg:flex lg:flex-col"
      }
    >
      <div className="flex h-20 shrink-0 items-center justify-between border-b border-neutral-900 px-5">
        <h2 className="text-lg font-extrabold tracking-[-0.04em]">
          RETORTAI<span className="text-neutral-600">.</span>
        </h2>

        {mobile && (
          <button
            type="button"
            onClick={onClose}
            className="text-xl text-neutral-500 transition hover:text-white"
            aria-label="Close sidebar"
          >
            ×
          </button>
        )}
      </div>

      <div className="p-3">
        <button
          type="button"
          onClick={handleNewChat}
          className="flex w-full items-center justify-between rounded-xl border border-neutral-800 px-4 py-3 text-sm font-semibold text-neutral-300 transition hover:border-neutral-600 hover:bg-neutral-900 hover:text-white"
        >
          <span>New Chat</span>
          <span className="text-lg">+</span>
        </button>
        <button
         type="button"
         onClick={handleShare}
         className="mt-2 flex w-full items-center justify-center rounded-xl border border-neutral-900 px-4 py-2.5 text-xs font-semibold text-neutral-600 transition hover:border-neutral-700 hover:text-white"
        >
         {shared ? "Link Copied" : "Share Chat"}
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-3 pb-4">
        <p className="mb-3 px-2 pt-3 text-[10px] font-bold uppercase tracking-[0.25em] text-neutral-700">
          Conversations
        </p>

        <div className="space-y-1">
          {chats.map((chat) => {
            const active = chat.id === activeChatId;

            return (
              <div
                key={chat.id}
                className={`group flex items-center gap-1 rounded-lg transition ${
                  active
                    ? "bg-white text-black"
                    : "text-neutral-500 hover:bg-neutral-900 hover:text-white"
                }`}
              >
                <button
                  type="button"
                  onClick={() => handleSelect(chat.id)}
                  className="min-w-0 flex-1 truncate px-3 py-3 text-left text-sm font-medium"
                >
                  {chat.title}
                </button>

                <button
                  type="button"
                  onClick={() => deleteChat(chat.id)}
                  className={`mr-2 shrink-0 px-1 text-xs transition ${
                    active
                      ? "text-neutral-500 hover:text-black"
                      : "text-neutral-700 opacity-0 hover:text-white group-hover:opacity-100"
                  }`}
                  aria-label="Delete chat"
                >
                  ×
                </button>
              </div>
            );
          })}
        </div>
      </div>

      <div className="border-t border-neutral-900 p-4">
        <div className="flex gap-5 text-xs text-neutral-600">
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
      </div>
    </aside>
  );
}

export default ChatSidebar;