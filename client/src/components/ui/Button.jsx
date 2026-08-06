function Button({
  children,
  variant = "primary",
  className = "",
}) {
  const styles = {
    primary:
      "bg-cyan-500 text-slate-950 hover:bg-cyan-400",
    secondary:
      "border border-slate-700 text-white hover:border-cyan-400 hover:text-cyan-400",
  };

  return (
    <button
      className={`rounded-xl px-6 py-3 font-semibold transition-all duration-300 ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;