function FeatureCard({ title, description }) {
  return (
    <div className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400">

      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-slate-400">
        {description}
      </p>

    </div>
  );
}

export default FeatureCard;