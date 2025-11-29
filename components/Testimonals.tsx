export default function Testimonials() {
  const testimonials = [
    {
      quote: "Planning my Dubai trip was effortless — the AI suggested places I’d never have found!",
      author: "Ayesha",
      role: "Solo Traveler",
    },
    {
      quote: "Saved me hours of research. The budget tracking feature kept my trip affordable.",
      author: "Rahul",
      role: "Business Traveler",
    },
    {
      quote: "Finally, a planner that feels like a local guide in my pocket.",
      author: "Emily",
      role: "Adventure Enthusiast",
    },
  ];

  return (
    <section id="testimonials" className="w-full py-20 bg-white border-b-2 border-gray-300">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">💬 What Travelers Say</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-gray-50 p-6 rounded-lg shadow-lg transition">
              <p className="italic text-gray-700 mb-4">“{t.quote}”</p>
              <h3 className="font-semibold text-orange-600">— {t.author}</h3>
              <p className="text-sm text-gray-500">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
