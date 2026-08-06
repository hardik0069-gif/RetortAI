import ModeSelector from "../components/chat/ModeSelector";
import ChatMessages from "../components/chat/ChatMessages";
import ChatInput from "../components/chat/ChatInput";

function Chat() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <div className="mx-auto max-w-5xl px-6 py-8">

        <h1 className="text-3xl font-bold">
          RetortAI Chat
        </h1>

        <ModeSelector />

        <ChatMessages />

        <ChatInput />

      </div>

    </div>
  );
}

export default Chat;