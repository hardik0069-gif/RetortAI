function ChatMessages() {
  return (
    <div className="h-125 overflow-y-auto rounded-2xl border border-slate-800 bg-slate-900 p-6">

      <div className="max-w-xl rounded-2xl bg-slate-800 px-5 py-4">

        <p className="text-sm text-cyan-400">
          RetortAI
        </p>

        <p className="mt-2 text-slate-200">
          Hello! 👋

          <br /><br />

          I'm ready.

          Choose any mode above and send your first message.
        </p>

      </div>

    </div>
  );
}

export default ChatMessages;