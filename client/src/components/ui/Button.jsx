function Button({
  children,
  className = "",
}) {
  return (
    <button
      className={`rounded-xl bg-cyan-500 px-7 py-3 font-semibold text-slate-950 transition duration-300 hover:scale-105 hover:bg-cyan-400 ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;