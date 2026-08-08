import { createContext, useState } from "react";

export const ChatContext = createContext();

export function ChatProvider({ children }) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: "assistant",
      text: "Hello! I'm RetortAI. Choose a mode and start chatting.",
    },
  ]);

function addMessage(message) {
  setMessages((prev) => [...prev, message]);

  if (message.role === "user") {
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          role: "assistant",
          text: "I'm still running in demo mode. Soon I'll answer using Groq AI with multiple personalities.",
        },
      ]);
    }, 900);
  }
}

  return (
    <ChatContext.Provider value={{ messages, addMessage }}>
      {children}
    </ChatContext.Provider>
  );
}