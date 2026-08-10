import { createContext, useEffect, useState } from "react";
import { sendMessage } from "../services/chatService";

export const ChatContext = createContext();

function createChat() {
  const id = Date.now().toString();

  return {
    id,
    title: "New Chat",
    messages: [
      {
        id: Date.now(),
        role: "assistant",
        text: "Hey. What's on your mind?",
      },
    ],
    createdAt: Date.now(),
  };
}

function getSavedChats() {
  try {
    const saved = localStorage.getItem("retortai_chats");

    if (saved) {
      const chats = JSON.parse(saved);

      if (Array.isArray(chats) && chats.length > 0) {
        return chats;
      }
    }
  } catch (error) {
    console.error(error);
  }

  return [createChat()];
}

export function ChatProvider({ children }) {
  const [chats, setChats] = useState(getSavedChats);

  const [activeChatId, setActiveChatId] = useState(() => {
    return localStorage.getItem("retortai_active_chat");
  });

  const [mode, setMode] = useState("normal");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    localStorage.setItem("retortai_chats", JSON.stringify(chats));
  }, [chats]);

  useEffect(() => {
    if (activeChatId) {
      localStorage.setItem("retortai_active_chat", activeChatId);
    }
  }, [activeChatId]);

  useEffect(() => {
    if (!activeChatId && chats.length > 0) {
      setActiveChatId(chats[0].id);
    }
  }, [activeChatId, chats]);

  const activeChat =
    chats.find((chat) => chat.id === activeChatId) || chats[0];

  const messages = activeChat?.messages || [];

  function createNewChat() {
    const newChat = createChat();

    setChats((prev) => [newChat, ...prev]);
    setActiveChatId(newChat.id);
    setMode("normal");
  }

  function selectChat(id) {
    setActiveChatId(id);
    setMode("normal");
  }

  function deleteChat(id) {
    setChats((prev) => {
      const remaining = prev.filter((chat) => chat.id !== id);

      if (remaining.length === 0) {
        const newChat = createChat();
        setActiveChatId(newChat.id);
        return [newChat];
      }

      if (id === activeChatId) {
        setActiveChatId(remaining[0].id);
      }

      return remaining;
    });
  }

  function clearCurrentChat() {
    if (!activeChat) return;

    setChats((prev) =>
      prev.map((chat) => {
        if (chat.id !== activeChatId) return chat;

        return {
          ...chat,
          title: "New Chat",
          messages: [
            {
              id: Date.now(),
              role: "assistant",
              text: "Hey. What's on your mind?",
            },
          ],
        };
      })
    );

    setMode("normal");
  }

  async function addMessage(message) {
    if (!activeChat) return;

    setChats((prev) =>
      prev.map((chat) => {
        if (chat.id !== activeChatId) return chat;

        const userMessages = chat.messages.filter(
          (item) => item.role === "user"
        );

        const title =
          chat.title === "New Chat" && userMessages.length === 0
            ? message.text.slice(0, 32)
            : chat.title;

        return {
          ...chat,
          title,
          messages: [...chat.messages, message],
        };
      })
    );

    if (message.role !== "user") return;

    setLoading(true);

    try {
      const response = await sendMessage(message.text, mode);

      setChats((prev) =>
        prev.map((chat) => {
          if (chat.id !== activeChatId) return chat;

          return {
            ...chat,
            messages: [
              ...chat.messages,
              {
                id: Date.now(),
                role: "assistant",
                text: response.reply,
              },
            ],
          };
        })
      );
    } catch (error) {
      console.error(error);

      setChats((prev) =>
        prev.map((chat) => {
          if (chat.id !== activeChatId) return chat;

          return {
            ...chat,
            messages: [
              ...chat.messages,
              {
                id: Date.now(),
                role: "assistant",
                text: "Backend connection failed.",
              },
            ],
          };
        })
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <ChatContext.Provider
      value={{
        chats,
        activeChatId,
        messages,
        addMessage,
        createNewChat,
        selectChat,
        deleteChat,
        clearCurrentChat,
        mode,
        setMode,
        loading,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}