function FeatureCard({ title, description }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:bg-slate-900">

      <h3 className="text-xl font-bold text-white">
        {title}
      </h3>

      <p className="mt-3 text-slate-400">
        {description}
      </p>

    </div>
  );
}

export default FeatureCard;