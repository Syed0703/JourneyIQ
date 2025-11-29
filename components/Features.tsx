export default function Features() {
  const features = [
    {
      title: "Personalized Itineraries",
      description:
        "Get trip plans tailored to your interests, budget, and travel style in seconds.",
      icon: "🗺️",
    },
    {
      title: "Smart Budget Tracking",
      description:
        "AI helps you optimize flights, stays, and activities to fit your budget.",
      icon: "💰",
    },
    {
      title: "Local Recommendations",
      description:
        "Find authentic restaurants, attractions, and experiences curated by AI insights.",
      icon: "📍",
    },
    {
      title: "Live Trip Re-Planning",
      description:
        "Adjust your schedule instantly when plans change due to weather or delays.",
      icon: "⚡",
    },
    {
      title: "Multi-City Routing",
      description:
        "Optimize routes and timings across destinations with smart transitions.",
      icon: "✈️",
    },
    {
      title: "Offline-Ready Summaries",
      description:
        "Export itineraries for quick access on the go, even without internet.",
      icon: "📄",
    },
  ];

  return (
    <section id="features" className="w-full py-20 bg-gray-50 border-b-2 border-gray-300">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">🌟 Features</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg transition"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}