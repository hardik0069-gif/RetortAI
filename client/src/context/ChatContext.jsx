import { createContext, useState } from "react";
import { sendMessage } from "../services/chatService";
export const ChatContext = createContext();

export function ChatProvider({ children }) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: "assistant",
      text: "Hello! I'm RetortAI. Choose a mode and start chatting.",
    },
  ]);

async function addMessage(message) {
  setMessages((prev) => [...prev, message]);

  if (message.role !== "user") return;

  try {
    const response = await sendMessage(message.text);

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now() + 1,
        role: "assistant",
        text: response.reply,
      },
    ]);
  } catch (error) {
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now() + 1,
        role: "assistant",
        text: "Backend connection failed.",
      },
    ]);
  }
}

  return (
    <ChatContext.Provider value={{ messages, addMessage }}>
      {children}
    </ChatContext.Provider>
  );
}