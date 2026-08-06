function BackgroundGlow() {
  return (
    <>
      <div className="absolute left-1/2 top-32 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[140px]" />

      <div className="absolute left-20 top-40 h-56 w-56 rounded-full bg-sky-500/10 blur-[120px]" />

      <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-[160px]" />
    </>
  );
}

export default BackgroundGlow;