// SponsorshipSection.tsx


import React from "react";

// Update sponsor info with website URLs
const sponsors = {
  platinum: [
    {
      name: "GoDaddy",
      logo: "/sponsors/godaddy.png",
      url: "https://www.godaddy.com",
      description: "Empowering entrepreneurs globally with domain & hosting solutions.",
    },
  ],
  gold: [
    {
      name: "Asgardeo",
      logo: "/sponsors/asgardeo.png",
      url: "https://wso2.com/asgardeo",
      description: "Secure, scalable CIAM platform by WSO2.",
    },
    {
      name: "Zoho",
      logo: "/sponsors/zoho.png",
      url: "https://www.zoho.com",
      description: "Powerful suite of business, productivity & collaboration tools.",
    },
  ],
  silver: [
    {
      name: "ImageKit",
      logo: "/sponsors/imagekit.png",
      url: "https://imagekit.io",
      description: "Image CDN with optimization and real-time transformation.",
    },
    {
      name: "Vonage",
      logo: "/sponsors/vonage.png",
      url: "https://www.vonage.com",
      description: "Cloud communications platform for voice, video, messaging, and more.",
    },
  ],
  bronze: [
    {
      name: "Dream11",
      logo: "/sponsors/dream11.png",
      url: "https://www.dream11.com",
      description: "India’s #1 fantasy sports platform.",
    },
    {
      name: "QED42",
      logo: "/sponsors/qed42.png",
      url: "https://www.qed42.com",
      description: "Digital engineering and design studio.",
    },
    {
      name: "MiQ",
      logo: "/sponsors/miq.png",
      url: "https://www.wearemiq.com",
      description: "Marketing intelligence company combining data and media.",
    },
  ],
};

const SponsorSection = () => {
  return (
    <section className="bg-gradient-to-b from-black via-[#2a0000] to-black text-white py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Animated Title Box */}
       <div className="relative inline-block mb-16 animate-fade-in-up">
  <div className="absolute -inset-6 bg-red-700/30 rounded-3xl blur-3xl opacity-50 animate-pulse"></div>
  <div className="relative px-10 py-6 border border-red-800 rounded-3xl bg-black/70 backdrop-blur-xl shadow-xl transition-transform duration-700 ease-out hover:scale-[1.02]">
    
    {/* Animated heading */}
    <h2 className="text-4xl lg:text-5xl font-extrabold mb-4 font-[Poppins] tracking-wide text-white animate-text-glow">
      <span className="inline-block animate-slide-in-up">Our Sponsors</span>
    </h2>

    {/* Subheading with animated TechX */}
    <p className="text-gray-300 text-lg font-[Inter] animate-fade-in opacity-80">
      People who helped to make 
      <span className="ml-1 text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-white to-red-400 font-semibold animate-gradient-x">
        TechX
      </span> 
      <br />
      a reality.
    </p>
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
                  onClick={() => window.open(sponsor.url, "_blank")}
                  className="relative group w-32 h-32 lg:w-40 lg:h-40 flex flex-col items-center justify-center p-2 rounded-xl border border-red-800 bg-white/10 backdrop-blur-md shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer"
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
