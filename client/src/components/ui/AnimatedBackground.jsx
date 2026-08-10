function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#050505]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.055),transparent_28%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.035),transparent_30%)]" />

      <div className="absolute left-[8%] top-[18%] h-40 w-40 rounded-full border border-white/[0.035] animate-[float_12s_ease-in-out_infinite]" />

      <div className="absolute right-[12%] top-[30%] h-56 w-56 rounded-full border border-white/[0.025] animate-[float_16s_ease-in-out_infinite_reverse]" />

      <div className="absolute bottom-[12%] left-[38%] h-32 w-32 rounded-full border border-white/[0.03] animate-[float_10s_ease-in-out_infinite]" />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_80%)]" />
    </div>
  );
}

export default AnimatedBackground;