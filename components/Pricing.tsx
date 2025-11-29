export default function Pricing() {
  const plans = [
    {
      name: "Free Plan",
      price: "Free",
      features: ["Basic itineraries", "Budget tracking", "Limited recommendations"],
    },
    {
      name: "Pro Plan",
      price: "$9/month",
      features: ["Advanced itineraries", "Unlimited recommendations", "Priority support"],
    },
    {
      name: "Premium Plan",
      price: "$19/month",
      features: ["AI concierge service", "Real‑time travel updates", "Exclusive deals & discounts"],
    },
  ];

  return (
    <section id="pricing" className="w-full py-20 bg-gray-50 border-b-2 border-gray-300">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">💰 Choose Your Plan</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg transition flex flex-col">
              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <p className="text-gray-600 mb-4">{plan.price}</p>
              <ul className="text-gray-600 flex-1 mb-6 space-y-2 text-left">
                {plan.features.map((f, i) => (
                  <li key={i}>• {f}</li>
                ))}
              </ul>
              <button className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 transition cursor-pointer">
                Get Started Today
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}