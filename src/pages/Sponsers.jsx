"use client"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function SponsorsPage() {
  const sponsors = Array.from({ length: 9 }).map((_, i) => ({
    id: i,
    name: "NAME",
    image: "/placeholder.svg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis nisl vitae nibh convallis tincidunt. Mauris euismod, magna id consequat malesuada, leo nisi aliquet nisi.",
  }))

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat bg-black"
      style={{
        backgroundImage: `url('/sponser_background.png')`,
      }}
    >
      <Navbar />

      <main className="pt-24 px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-[#c5ff7c] text-6xl font-bold mb-4">Our Sponsors</h1>
          <p className="text-white text-xl">
            Our sponsors are the heroes behind the scenes.
            <br />
            We appreciate your contribution and dedication to our cause.
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          style={{
            perspective: "1000px",
          }}
        >
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.id}
              className="relative w-full h-[300px] group"
              style={{
                transformStyle: "preserve-3d",
                transition: "transform 0.6s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "rotateY(180deg)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "rotateY(0deg)"
              }}
            >
              {/* Front of card */}
              <div
                className="absolute inset-0 w-full h-full"
                style={{
                  backfaceVisibility: "hidden",
                }}
              >
                <div className="w-full h-full bg-gray-600/50 rounded-lg overflow-hidden">
                  <img
                    src={ "/background.png"}
                    alt={sponsor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Back of card */}
              <div
                className="absolute inset-0 w-full h-full bg-gray-800/90 rounded-lg p-6 flex flex-col justify-center items-center"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
              >
                <h3 className="text-[#c5ff7c] text-2xl mb-4">{sponsor.name}</h3>
                <p className="text-white text-sm text-center">{sponsor.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <div className="max-w-9xl py-8 bg-black mt-12">
        <Footer />
      </div>
    </div>
  )
}

