// SponsorshipSection.tsx
import React from "react";

const SponsorshipSection = () => {
  return (
    <div className="mt-32 text-center">
      <div className="relative inline-block group">
        <div className="absolute -inset-6 bg-red-600/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-all duration-1000"></div>
        <div className="relative bg-gradient-to-br from-black/80 via-red-900/40 to-black/80 backdrop-blur-2xl p-8 rounded-3xl border-2 border-red-600/30 shadow-[0_30px_80px_rgba(0,0,0,0.7)] transition-all duration-1000 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-transparent to-red-600/5 rounded-3xl"></div>
          <h2 className="relative [font-family:'Poppins',sans-serif] font-bold text-4xl lg:text-5xl text-white mb-4">
            Our Sponsors
          </h2>
          <p className="relative [font-family:'Poppins',sans-serif] text-xl lg:text-2xl text-gray-400 font-normal">
            People who helped to make this event happen
          </p>
        </div>
      </div>
    </div>
  );
};

export default SponsorshipSection;
