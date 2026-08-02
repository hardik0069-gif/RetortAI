import SectionTitle from "../ui/SectionTitle";
import FeatureCard from "./FeatureCard";

function Features() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <SectionTitle
        title="Why RetortAI?"
        subtitle="Built for speed, fun and modern AI conversations."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <FeatureCard
          icon="⚡"
          title="Fast Responses"
          description="Powered by modern AI models for lightning-fast replies."
        />

        <FeatureCard
          icon="🌍"
          title="Auto Language"
          description="Detects Hindi, English and Hinglish automatically."
        />

        <FeatureCard
          icon="🔥"
          title="Multiple Modes"
          description="Friendly, Savage, Dark, Gen-Z and Random personalities."
        />
      </div>
    </section>
  );
}

export default Features;