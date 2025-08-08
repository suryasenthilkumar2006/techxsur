import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";

export const WhySponsorSection = (): JSX.Element => {
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const benefitCards = [
    { title: "Tech Talks", description: "Dive into trending tech with expert-led sessions that keep you ahead.", imageUrl: "/figmaAssets/vector-3-1.svg", icon: "💻", delay: "0s" },
    { title: "Insider Stories", description: "Hear real experiences and strategies from the pros who've done it.", imageUrl: "/figmaAssets/vector-4-1.svg", icon: "🎯", delay: "1s" },
    { title: "Play, Win & Connect", description: "Join fun challenges, win cool prizes, and meet your future team.", imageUrl: "/figmaAssets/vector-5-1.svg", icon: "🏆", delay: "2s" },
    { title: "Hack & Build Workshops", description: "Get hands‑on with tools and tech in guided, practical sessions.", imageUrl: "", icon: "🔧", delay: "3s" },
  ];

  const speakers = [
    { id: 1, name: "Will be updated soon", day: "Day 1" },
    { id: 2, name: "Will be updated soon", day: "Day 2" },
    { id: 3, name: "Will be updated soon", day: "Day 1" },
    { id: 4, name: "Will be updated soon", day: "Day 2" },
  ];

  const speakerIcon = (
    <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 12c2.21..."/>
    </svg>
  );

  const FloatingParticle = ({ size, delay, duration, x, y, color = "red" }: any) => (
    <div className={`absolute ${size} rounded-full animate-floatSlow opacity-30 pointer-events-none`}
      style={{ left: x, top: y, animationDelay: delay, animationDuration: duration,
        background: color === "red"
          ? "radial-gradient(circle, rgba(220,38,38,0.4) 0%, rgba(185,28,28,0.2) 50%, transparent 100%)"
          : "radial-gradient(circle, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)",
        backdropFilter: "blur(1px)",
        boxShadow: color === "red"
          ? "0 8px 24px rgba(220,38,38,0.3)"
          : "0 8px 24px rgba(0,0,0,0.2)",
      }} />
  );

  const Bean = ({ className, style }: any) => (
    <svg className={className} style={style} width="60" height="40" viewBox="0 0 60 40" fill="none">
      <ellipse cx="30" cy="20" rx="28" ry="16" fill="url(#beanGradient)" opacity="0.8"/>
      <defs><linearGradient id="beanGradient" x1="0" y1="0" x2="60" y2="40" gradientUnits="userSpaceOnUse">
        <stop stopColor="#fff" stopOpacity="0.7"/><stop offset="1" stopColor="#800000" stopOpacity="0.5"/>
      </linearGradient></defs>
    </svg>
  );

  const Bubble = ({ className, style }: any) => (
    <svg className={className} style={style} width="80" height="80" viewBox="0 0 80 80" fill="none">
      <ellipse cx="40" cy="40" rx="38" ry="38" fill="url(#bubbleGradient)" opacity="0.7"/>
      <defs><radialGradient id="bubbleGradient" cx="0" cy="0" r="1" gradientTransform="translate(40 40) scale(38)">
        <stop stopColor="#fff" stopOpacity="0.8"/><stop offset="1" stopColor="#800000" stopOpacity="0.3"/>
      </radialGradient></defs>
    </svg>
  );

  return (
    <section className="relative w-full min-h-screen py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-red-900 via-red-800 to-black"/>
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80 z-5"/>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_40%,rgba(220,38,38,0.2),transparent)]"/>

      {/* Background bubbles and beans */}
      {/* (-- unchanged, but fine as-is --) */}

      <div className="container mx-auto relative z-20 px-4 sm:px-6 md:px-8">
        <div className="text-center mb-16">
          <h2 className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-6 tracking-wide">
            Why be <span className="text-red-400">part of it</span>?
          </h2>
          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-0.5 bg-red-500"/>
            <div className="w-3 h-3 bg-red-500 rounded-full mx-4"/>
            <div className="w-16 h-0.5 bg-red-500"/>
          </div>
          <p className="text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto font-medium">
            Discover the transformative opportunities that await you
          </p>
        </div>

        {/* Timeline & Benefit Cards */}
        <div className="relative max-w-5xl mx-auto mb-32">
<div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-red-500 z-10"/>
          <div className="space-y-20 px-2 sm:px-4 md:px-6 lg:px-8">
            {benefitCards.map((card, index) => (
              <div key={index}
                   className={`relative flex flex-col items-center sm:flex-row ${
                     index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
                   }`}>
                <div
                  className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full border-4 border-red-400 z-20 ${
                    activeCard === index ? "animate-pulse shadow-[0_0_20px_rgba(220,38,38,0.8)]" : ""
                  }`}
                />
                <div
                  className={`hidden sm:block absolute top-1/2 ${
                    index % 2 === 0 ? "left-1/2 ml-2" : "right-1/2 mr-2"
                  } w-16 h-16 border-2 border-red-500/60 rounded-full ${
                    index % 2 === 0 ? "border-l-transparent border-b-transparent" : "border-r-transparent border-b-transparent"
                  } z-15`}
                  style={{ transform: index % 2 === 0 ? "translateY(-50%) rotate(45deg)" : "translateY(-50%) rotate(-45deg)" }}
                />
                <div className={`w-full max-w-sm ${index % 2 === 0 ? "mr-0 sm:mr-8" : "ml-0 sm:ml-8"}`}>
                  <Card className={`group bg-white/95 backdrop-blur-sm rounded-3xl border-0 shadow-[0_20px_60px_rgba(0,0,0,0.3)] transition-all duration-700 hover:scale-105 hover:-translate-y-2 cursor-pointer overflow-hidden ${
                    activeCard === index ? "shadow-[0_30px_80px_rgba(220,38,38,0.2)]" : ""
                  }`}
                    onClick={() => setActiveCard(index)}>
                    <CardContent className="relative p-6 sm:p-8">
                      <h3 className="font-bold text-xl sm:text-2xl text-black mb-4">
                        {card.title === "Insider Stories" ? (
                          <span className="text-red-600">Insider Stories</span>
                        ) : card.title === "Hack & Build Workshops" ? (
                          <>
                            <span className="text-red-600">Hack & Build</span><br />
                            <span className="text-red-600">Workshops</span>
                          </>
                        ) : card.title}
                      </h3>
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-normal">
                        {card.description}
                      </p>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"/>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Speakers Section */}
        <div id="speakers" className="container mx-auto relative z-10 px-4 sm:px-6 md:px-8">
          <Card className="w-full max-w-6xl mx-auto bg-white/95 backdrop-blur-lg rounded-[60px] overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.6)] border-4 border-white/30">
            <CardContent className="p-8 sm:p-12 lg:p-20 relative">
              <div className="text-center mb-12 sm:mb-16">
                <div className="inline-flex items-center gap-3 sm:gap-4 mb-8">
                  <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-[#780000] to-[#450000]"/>
                  <div className="w-3 h-3 bg-[#780000] rounded-full"/>
                  <div className="w-12 sm:w-16 h-1 bg-gradient-to-l from-[#780000] to-[#450000]"/>
                </div>
                <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4">Meet our Speakers</h2>
                <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
                  Industry experts and thought leaders ready to share their insights
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
                {speakers.map((speaker) => (
                  <div key={speaker.id} className="group relative">
                    <div className="bg-gradient-to-br from-[#2d0303] via-[#450000] to-[#780000] rounded-[30px] p-6 sm:p-8 shadow-[0_15px_40px_rgba(0,0,0,0.4)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.6)] transition-all duration-500 hover:scale-105 cursor-pointer">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
                      <div className="relative z-10 flex flex-col items-center space-y-4 sm:space-y-6">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-[#717171] via-[#5a5a5a] to-[#404040] rounded-full flex items-center justify-center shadow-2xl border-2 border-white/20 group-hover:shadow-3xl group-hover:border-white/40 transition-all duration-500 relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"/>
                          {speaker.iconUrl ? <img src={speaker.iconUrl} alt={speaker.name} className="w-full h-full rounded-full object-cover"/> : speakerIcon}
                        </div>
                        <div className="text-center space-y-2">
                          <div className="font-bold text-white text-sm sm:text-base tracking-wide group-hover:opacity-100 opacity-90 transition-opacity duration-300">{speaker.name}</div>
                          <div className="font-medium text-white/70 text-xs sm:text-sm group-hover:text-white/90 transition-colors duration-300">{speaker.day}</div>
                          <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto group-hover:via-white/70 transition-colors duration-300"/>
                        </div>
                      </div>
                      <div className="absolute top-2 right-2 w-2 h-2 bg-[#780000]/30 rounded-full animate-pulse"/>
                    </div>
                    <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-br from-[#780000] to-[#450000] rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                      <span className="text-white text-sm font-bold">{speaker.id}</span>
                    </div>
                  </div>
                ))}
              </div>
              {/* optional pulses */}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* animations style unchanged */}
      <style>{`@keyframes floating { ... }`}</style>
    </section>
  );
};
