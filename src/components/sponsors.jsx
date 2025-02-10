

export default function Sponsors() {
  const sponsors = [
  {
    id: 1,
    name: "Asmi",
    image: "/sponsors/Asmi.jpg",
    link:
      "",
  },
  {
    id: 2,
    name: "GreenMonk",
    image: "/sponsors/GreenMonk.jpg",
    link:
      "",
  },
  {
    id: 3,
    name: "CakesAndCrumbs",
    image: "/sponsors/CakesAndCrumbs.jpg",
    link:
      "",
  },
  {
    id: 4,
    name: "HouseOfBrahma",
    image: "/sponsors/HouseOfBrahma.jpg",
    link:
      "",
  },
  {
    id: 5,
    name: "Idlish",
    image: "/sponsors/Idlish.jpg",
    link:
      "",
  },
  {
    id: 6,
    name: "SanaHealthFirst",
    image: "/sponsors/SanaHealthFirst.jpg",
    link:
      "",
  },
  {
    id: 7,
    name: "PinItUp",
    image: "/sponsors/PinItUp.jpg",
    link:
      "",
  },
  {
    id: 8,
    name: "Kpop",
    image: "/sponsors/Kpop.jpg",
	links: ""
  },
  {
    id: 9,
    name: "SHF_health",
    image: "/sponsors/SHF_health.jpg",
	links: ""
  },
]

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat pb-24 bg-black"
      style={{
        backgroundImage: `url('/sponser_background.png')`,
      }}
    >

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
          style={{ perspective: "1000px" }}
        >
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.id}
              className="relative w-full h-[300px] group"
              style={{ perspective: "1000px" }}
            >
              <div
                className="card-inner relative w-full h-full transition-transform duration-500 ease-in-out"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Front of card */}
                <div className="absolute inset-0 w-full h-full backface-hidden">
                  <div className="w-full h-full bg-gray-600/50 rounded-lg overflow-hidden">
                    <img
                      src={sponsor.image}
                      alt={sponsor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Back of card */}
                <div
                  className="absolute inset-0 w-full h-full bg-gray-800/90 rounded-lg p-6 flex flex-col justify-center items-center"
                  style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}
                >
                  <h3 className="text-[#c5ff7c] text-4xl mb-4">{sponsor.name}</h3>
                  {/* <a href={sponsor.description}>
					<button className="text-2xl text-[#c5ff7c]">
						Link -
					</button>
				  </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      
    </div>
  )
}
