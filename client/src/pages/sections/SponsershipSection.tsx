// SponsorshipSection.tsx


import React from "react";

// Update sponsor info with website URLs
const sponsors = {
  // platinum: [
  //   {
  //     name: "",
  //      logo: "",
  //     url: "",
  //     description: "Empowering entrepreneurs globally with domain & hosting solutions.",
  //   },
  // ],
  // gold: [
  //   {
  //     name: "",
  //     logo: "",
  //     url: "",
  //     description: "",
  //   },
  //   {
  //     name: "",
  //     logo: "",
  //     url: "",
  //     description: "",
  //   },
  // ],
  silver: [
    {
      name: "Vectra Technosoft",
      logo: "/figmaAssets/advantage.png",
      url: "https://www.advantagepro.in",
      description: "",
    },
    {
      name: "OneYes",
      logo: "/figmaAssets/oneyes.jpeg",
      url: "https://oneyesinfotechsolutions.com",
      description: "",
    },
    {
      name: "PT Export",
      logo: "/figmaAssets/ptexports.jpg",
      description: "",
    },
    {
      name: "Para Project",
      logo: "/figmaAssets/PP.png",
      url: "https://paraprojects.in",
      description: "",
    },
    {
      name: "Thozhil",
      logo: "/figmaAssets/thozhill.png",
      url: "https://www.thozhil.co.in",
      description: "",
    },
  ],
  // bronze: [
  //   {
  //     name: "",
  //     logo: "",
  //     url: "",
  //     description: "",
  //   },
  //   {
  //     name: "",
  //     logo: "",
  //     url: "",
  //     description: "",
  //   },
  //   {
  //     name: "",
  //     logo: "",
  //     url: "",
  //     description: "",
  //   },
  // ],
};

const SponsorSection = () => {
  return (
    <section className="bg-gradient-to-b from-black via-[#2a0000] to-black text-white py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Animated Title Box */}
        <div className="relative inline-block mb-16 animate-fade-in-up">
          <div className="absolute -inset-6 bg-red-700/30 rounded-3xl blur-3xl opacity-50 animate-pulse"></div>
          <div className="relative inline-block mb-16 animate-fade-in-up">
            {/* Glowing blurred background */}
            <div className="absolute -inset-5 bg-red-700/40 rounded-3xl blur-2xl opacity-40 animate-pulse pointer-events-none"></div>

            {/* Main content container */}
            <div className="relative px-8 py-6 sm:px-10 sm:py-8 border border-red-800 rounded-3xl bg-black/70 backdrop-blur-xl shadow-xl transition-transform duration-500 ease-out hover:scale-[1.02] max-w-2xl mx-auto">

              {/* Title */}
              <h2 className="text-4xl lg:text-5xl font-extrabold mb-4 font-[Poppins] tracking-wide text-white animate-text-glow text-center">
                <span className="inline-block animate-slide-in-up">Our Sponsors</span>
              </h2>

              {/* Subtitle */}
              <p className="text-gray-300 text-lg font-[Inter] animate-fade-in opacity-80 leading-relaxed text-center">
                People who helped to make{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-white to-red-400 font-semibold animate-gradient-x">
                  TechX
                </span>{" "}
                a reality.
              </p>
            </div>
          </div>

        </div>


        {/* Sponsor Categories */}
        {Object.entries(sponsors).map(([category, items]) => (
          <div key={category} className="mb-20">
            <h3 className="text-2xl lg:text-3xl font-semibold mb-8 capitalize text-red-300 underline underline-offset-8 font-[Poppins] tracking-wider">
              {category} Sponsors
            </h3>

            <div className="flex flex-wrap justify-center gap-10">
              {items.map((sponsor, index) => (
                <div
                  key={index}
                  onClick={() => sponsor.url ? window.open(sponsor.url, "_blank") : null} // only open if URL exists
                  className={`relative group w-32 h-32 lg:w-40 lg:h-40 flex flex-col items-center justify-center p-2 rounded-xl border border-red-800 bg-white/10 backdrop-blur-md shadow-md transition-transform duration-300 cursor-pointer hover:scale-105`}
                >
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="max-w-full max-h-full object-contain"
                  />

                  {/* Hover Description Box BELOW */}
                  <div className="absolute left-1/2 -bottom-16 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out z-20 pointer-events-none">
                    <div className="bg-black/90 text-white text-sm px-4 py-2 rounded-lg shadow-lg max-w-xs w-[200px] text-center">
                      {sponsor.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SponsorSection;
