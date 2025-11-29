'use client'

const Hero = () => {
  return (
    <section className="h-[90vh] w-full bg-[url('/Hero3.jpg')] bg-cover bg-center text-white text-center border-b-2 border-gray-300">
      <div className="bg-[#0000006c] w-full h-full flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-bold text-left">
          Plan Smarter, Travel Better
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl font-semibold">
          Discover personalized itineraries, hidden gems, and stress‑free planning — all powered by AI.
        </p>
        <button
          className="mt-6 px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg shadow hover:bg-orange-700 transition cursor-pointer"
        >
          Start Your Journey
        </button>
      </div>
    </section>

  )
}

export default Hero
