import SectionTitle from "../ui/SectionTitle";
import FeatureCard from "./FeatureCard";

const features = [
  {
    title: "Fast Responses",
    description: "Optimized for lightning-fast AI conversations.",
  },
  {
    title: "Multiple Modes",
    description: "Friendly, Dark, Savage and many more personalities.",
  },
  {
    title: "Share Chats",
    description: "Share conversations with a single click.",
  },
  {
    title: "Auto Language",
    description: "Understands Hindi, English and Hinglish naturally.",
  },
  {
    title: "Privacy First",
    description: "Your conversations stay under your control.",
  },
  {
    title: "Premium UI",
    description: "Clean, responsive and modern experience.",
  },
];

function Features() {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-6 py-28">

      <SectionTitle
        title="Why Choose RetortAI?"
        subtitle="Everything you need for fun, fast and intelligent conversations."
      />

      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        {features.map((feature) => (
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