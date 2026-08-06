import FeatureCard from "./FeatureCard";

const FEATURES = [
  {
    title: "Lightning Fast",
    description:
      "Receive AI responses in seconds without breaking your flow.",
  },
  {
    title: "Multiple Personalities",
    description:
      "Switch between Friendly, Savage, Dark, Gen-Z and more.",
  },
  {
    title: "Share Conversations",
    description:
      "Generate shareable chat links with one click.",
  },
  {
    title: "Language Aware",
    description:
      "Automatically understands English, Hindi and Hinglish.",
  },
  {
    title: "Privacy Focused",
    description:
      "Your conversations remain under your control.",
  },
  {
    title: "Modern Experience",
    description:
      "Clean interface built for desktop and mobile devices.",
  },
];

function Features() {
  return (
    <section
      id="features"
      className="mx-auto max-w-7xl px-6 py-28"
    >
      <div className="mx-auto max-w-3xl text-center">

        <h2 className="text-4xl font-black text-white">
          Why RetortAI?
        </h2>

        <p className="mt-6 text-lg leading-8 text-slate-400">
          Everything you need for fast, intelligent and entertaining
          AI conversations.
        </p>

      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        {FEATURES.map((feature) => (
          <FeatureCard
            key={feature.title}
            title={feature.title}
            description={feature.description}
          />
        ))}

      </div>
    </section>
  );
}

export default Features;