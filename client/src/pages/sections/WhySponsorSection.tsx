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
    {
      title: "Tech Talks",
      description:
        "Dive into trending tech with expert-led sessions that keep you ahead.",
      imageUrl: "/figmaAssets/vector-3-1.svg",
      icon: "💻",
      delay: "0s",
    },
    {
      title: "Insider Stories",
      description:
        "Hear real experiences and strategies from the pros who've done it.",
      imageUrl: "/figmaAssets/vector-4-1.svg",
      icon: "🎯",
      delay: "1s",
    },
    {
      title: "Play, Win & Connect",
      description:
        "Join fun challenges, win cool prizes, and meet your future team.",
      imageUrl: "/figmaAssets/vector-5-1.svg",
      icon: "🏆",
      delay: "2s",
    },
    {
      title: "Hack & Build Workshops",
      description:
        "Get hands-on with tools and tech in guided, practical sessions.",
      imageUrl: "",
      icon: "🔧",
      delay: "3s",
    },
  ];

  const speakers = [
    { id: 1, name: "Kalam", day: "Day 1" },
    { id: 2, name: "Elon Musk", day: "Day 2" },
    { id: 3, name: "Ada Lovelace", day: "Day 1" },
    { id: 4, name: "Grace Hopper", day: "Day 2" },
  ];

  const speakerIcon = (
    <svg
      className="w-12 h-12 text-gray-400"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </svg>
  );

  const FloatingParticle = ({
    size,
    delay,
    duration,
    x,
    y,
    color = "red",
  }: {
    size: string;
    delay: string;
    duration: string;
    x: string;
    y: string;
    color?: string;
  }) => (
    <div
      className={`absolute ${size} rounded-full animate-floatSlow opacity-30 pointer-events-none`}
      style={{
        left: x,
        top: y,
        animationDelay: delay,
        animationDuration: duration,
        background:
          color === "red"
            ? "radial-gradient(circle, rgba(220,38,38,0.4) 0%, rgba(185,28,28,0.2) 50%, transparent 100%)"
            : "radial-gradient(circle, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)",
        backdropFilter: "blur(1px)",
        boxShadow:
          color === "red"
            ? "0 8px 24px rgba(220,38,38,0.3)"
            : "0 8px 24px rgba(0,0,0,0.2)",
      }}
    />
  );
  const Bean = ({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) => (
  <svg
    className={className}
    style={style}
    width="60"
    height="40"
    viewBox="0 0 60 40"
    fill="none"
  >
    <ellipse
      cx="30"
      cy="20"
      rx="28"
      ry="16"
      fill="url(#beanGradient)"
      opacity="0.8"
    />
    <defs>
      <linearGradient
        id="beanGradient"
        x1="0"
        y1="0"
        x2="60"
        y2="40"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" stopOpacity="0.7" />
        <stop offset="1" stopColor="#800000" stopOpacity="0.5" />
      </linearGradient>
    </defs>
  </svg>
);
const Bubble = ({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) => (
  <svg
    className={className}
    style={style}
    width="80"
    height="80"
    viewBox="0 0 80 80"
    fill="none"
  >
    <ellipse
      cx="40"
      cy="40"
      rx="38"
      ry="38"
      fill="url(#bubbleGradient)"
      opacity="0.7"
    />
    <defs>
      <radialGradient
        id="bubbleGradient"
        cx="0"
        cy="0"
        r="1"
        gradientTransform="translate(40 40) scale(38)"
      >
        <stop stopColor="#fff" stopOpacity="0.8" />
        <stop offset="1" stopColor="#800000" stopOpacity="0.3" />
      </radialGradient>
    </defs>
  </svg>
);

 return (
    <section className="relative w-full min-h-screen py-20 overflow-hidden">
  
      <div className="absolute inset-0 bg-gradient-to-br from-red-900 via-red-800 to-black"></div>

      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80 z-5"></div>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_40%,rgba(220,38,38,0.2),transparent)]"></div>

      <Bubble className="absolute left-10 top-10 animate-bubble1 z-0" />
      <Bubble className="absolute right-16 top-32 animate-bubble2 z-0" style={{ width: 60, height: 60 }} />
      <Bubble className="absolute left-1/2 bottom-10 animate-bubble3 z-0" style={{ width: 100, height: 100 }} />
      <Bubble className="absolute left-1/4 top-1/3 animate-bubble4 z-0" style={{ width: 70, height: 70 }} />
      <Bubble className="absolute right-1/4 bottom-1/4 animate-bubble5 z-0" style={{ width: 90, height: 90 }} />
      <Bean className="absolute right-10 bottom-24 animate-bean1 z-0" />
      <Bean className="absolute left-24 top-1/2 animate-bean2 z-0" style={{ width: 80, height: 50 }} />
      <Bean className="absolute left-1/3 bottom-1/4 animate-bean3 z-0" style={{ width: 70, height: 40 }} />
      <Bean className="absolute right-1/3 top-1/4 animate-bean4 z-0" style={{ width: 90, height: 60 }} />

      <div className="absolute inset-0 z-0">
        <FloatingParticle
          size="w-4 h-4"
          delay="0s"
          duration="15s"
          x="10%"
          y="20%"
          color="red"
        />
        <FloatingParticle
          size="w-3 h-3"
          delay="3s"
          duration="12s"
          x="85%"
          y="15%"
          color="red"
        />
        <FloatingParticle
          size="w-2 h-2"
          delay="6s"
          duration="18s"
          x="70%"
          y="70%"
          color="red"
        />
        <FloatingParticle
          size="w-5 h-5"
          delay="9s"
          duration="14s"
          x="20%"
          y="80%"
          color="red"
        />
        <FloatingParticle
          size="w-3 h-3"
          delay="12s"
          duration="16s"
          x="50%"
          y="25%"
          color="red"
        />
        <FloatingParticle
          size="w-4 h-4"
          delay="15s"
          duration="13s"
          x="30%"
          y="60%"
          color="red"
        />
        <FloatingParticle
          size="w-2 h-2"
          delay="2s"
          duration="17s"
          x="90%"
          y="40%"
          color="red"
        />
        <FloatingParticle
          size="w-6 h-6"
          delay="5s"
          duration="11s"
          x="15%"
          y="45%"
          color="red"
        />
      </div>

      <div className="container mx-auto relative z-20 px-4">
 
        <div className="text-center mb-16">
          <h2 className="[font-family:'Poppins',sans-serif] text-5xl lg:text-6xl font-bold text-white mb-6 tracking-wide">
            Why be <span className="text-red-400">part of it</span>?
          </h2>

          <div className="flex items-center justify-center mb-8">
            <div className="w-20 h-0.5 bg-red-500"></div>
            <div className="w-3 h-3 bg-red-500 rounded-full mx-4"></div>
            <div className="w-20 h-0.5 bg-red-500"></div>
          </div>

          <p className="[font-family:'Poppins',sans-serif] text-gray-300 text-xl lg:text-2xl max-w-2xl mx-auto font-medium">
            Discover the transformative opportunities that await you
          </p>
        </div>

    
        <div className="relative max-w-5xl mx-auto mb-32">

          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-red-500 z-10"></div>


          <div className="space-y-20">
            {benefitCards.map((card, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >

                <div
                  className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full border-4 border-red-400 z-20 ${
                    activeCard === index
                      ? "animate-pulse shadow-[0_0_20px_rgba(220,38,38,0.8)]"
                      : ""
                  }`}
                />

                <div
                  className={`absolute top-1/2 ${
                    index % 2 === 0 ? "left-1/2 ml-2" : "right-1/2 mr-2"
                  } w-16 h-16 border-2 border-red-500/60 rounded-full ${
                    index % 2 === 0
                      ? "border-l-transparent border-b-transparent"
                      : "border-r-transparent border-b-transparent"
                  } z-15`}
                  style={{
                    transform:
                      index % 2 === 0
                        ? "translateY(-50%) rotate(45deg)"
                        : "translateY(-50%) rotate(-45deg)",
                  }}
                />

                <div
                  className={`w-full max-w-sm ${index % 2 === 0 ? "mr-8" : "ml-8"}`}
                >
                  <Card
                    className={`group bg-white/95 backdrop-blur-sm rounded-3xl border-0 shadow-[0_20px_60px_rgba(0,0,0,0.3)] transition-all duration-700 hover:scale-105 hover:-translate-y-2 cursor-pointer overflow-hidden ${
                      activeCard === index
                        ? "shadow-[0_30px_80px_rgba(220,38,38,0.2)]"
                        : ""
                    }`}
                    onClick={() => setActiveCard(index)}
                  >
                    <CardContent className="relative p-8">
                 
                      <h3 className="[font-family:'Poppins',sans-serif] font-bold text-2xl text-black mb-4">
                        {card.title === "Insider Stories" ? (
                          <>
                            <span className="text-red-600">
                              Insider Stories
                            </span>
                          </>
                        ) : card.title === "Hack & Build Workshops" ? (
                          <>
                            <span className="text-red-600">Hack & Build</span>
                            <br />
                            <span className="text-red-600">Workshops</span>
                          </>
                        ) : (
                          card.title
                        )}
                      </h3>

                      <p className="[font-family:'Poppins',sans-serif] text-gray-600 text-base leading-relaxed font-normal">
                        {card.description}
                      </p>

                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

         <div  id="speakers" className="container mx-auto mt-32 relative z-10 px-4">
          <Card className="w-full max-w-6xl mx-auto bg-gradient-to-br from-white via-gray-50 to-white rounded-[60px] overflow-hidden shadow-[0px_25px_80px_rgba(0,0,0,0.6)] border-4 border-white/30 backdrop-blur-lg">
            <CardContent className="p-12 lg:p-20 relative">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-4 mb-8">
                  <div className="w-16 h-1 bg-gradient-to-r from-[#780000] to-[#450000]"></div>
                  <div className="w-4 h-4 bg-[#780000] rounded-full"></div>
                  <div className="w-16 h-1 bg-gradient-to-l from-[#780000] to-[#450000]"></div>
                </div>
                <h2 className="[font-family:'Poppins',sans-serif] font-semibold text-black text-5xl lg:text-6xl mb-4">
                  Meet our Speakers
                </h2>
                <p className="[font-family:'Poppins',sans-serif] text-gray-600 text-xl max-w-2xl mx-auto font-normal">
                  Industry experts and thought leaders ready to share their
                  insights
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                {speakers.map((speaker) => (
                  <div key={speaker.id} className="group relative">
                    <div className="bg-gradient-to-br from-[#2d0303] via-[#450000] to-[#780000] rounded-[30px] p-8 shadow-[0_15px_40px_rgba(0,0,0,0.4)] border-2 border-white/10 hover:shadow-[0_25px_60px_rgba(0,0,0,0.6)] transition-all duration-500 hover:scale-105 cursor-pointer relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative z-10 flex flex-col items-center space-y-6">
                        <div className="w-24 h-24 bg-gradient-to-br from-[#717171] via-[#5a5a5a] to-[#404040] rounded-full flex items-center justify-center shadow-2xl border-3 border-white/20 group-hover:shadow-3xl group-hover:border-white/40 transition-all duration-500 relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                          {speaker.iconUrl ? (
                            <img
                              src={speaker.iconUrl}
                              alt={speaker.name}
                              className="w-[100%] h-[100%] rounded-full object-cover"
                              style={{ objectFit: "cover" }}
                            />
                          ) : (
                            speakerIcon
                          )}
                        </div>
                        <div className="text-center space-y-3">
                          <div className="[font-family:'Poppins',sans-serif] font-bold text-white text-sm opacity-90 group-hover:opacity-100 transition-opacity duration-300 tracking-wide">
                            {speaker.name}
                          </div>
                          <div className="[font-family:'Poppins',sans-serif] font-medium text-white/70 text-xs group-hover:text-white/90 transition-colors duration-300">
                            {speaker.day}
                          </div>
                          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto group-hover:via-white/70 transition-colors duration-300"></div>
                        </div>
                      </div>
                      <div className="absolute top-3 right-3 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
                    </div>
                    <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-br from-[#780000] to-[#450000] rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                      <span className="text-white text-sm font-bold">
                        {speaker.id}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="absolute top-8 right-8 w-3 h-3 bg-[#780000]/30 rounded-full animate-pulse"></div>
              <div
                className="absolute bottom-8 left-8 w-4 h-4 bg-[#780000]/20 rounded-full animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute top-1/2 left-8 w-2 h-2 bg-[#780000]/40 rounded-full animate-pulse"
                style={{ animationDelay: "2s" }}
              ></div>
              <div
                className="absolute top-1/3 right-1/4 w-1 h-1 bg-[#780000]/50 rounded-full animate-pulse"
                style={{ animationDelay: "0.5s" }}
              ></div>
            </CardContent>
          </Card>
        </div> 
   
        {/* <div className="mt-32 text-center">
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
        </div> */}
      </div>

      <style >{`
        @keyframes floatSlow {
          0%,100% { transform: translateY(0px) scale(1); opacity: 0.3; }
          50% { transform: translateY(-15px) scale(1.1); opacity: 0.5; }
        }
        .animate-floatSlow { animation: floatSlow 8s ease-in-out infinite; }

        .animate-bubble1 {
          animation: bubbleAppearMove1 12s infinite cubic-bezier(.4,0,.2,1) alternate;
        }
        .animate-bubble2 {
          animation: bubbleAppearMove2 10s infinite cubic-bezier(.4,0,.2,1) alternate;
        }
        .animate-bubble3 {
          animation: bubbleAppearMove3 14s infinite cubic-bezier(.4,0,.2,1) alternate;
        }
        .animate-bubble4 {
          animation: bubbleAppearMove4 16s infinite cubic-bezier(.4,0,.2,1) alternate;
        }
        .animate-bubble5 {
          animation: bubbleAppearMove5 18s infinite cubic-bezier(.4,0,.2,1) alternate;
        }
        .animate-bean1 {
          animation: beanAppearMove1 13s infinite cubic-bezier(.4,0,.2,1) alternate;
        }
        .animate-bean2 {
          animation: beanAppearMove2 11s infinite cubic-bezier(.4,0,.2,1) alternate;
        }
        .animate-bean3 {
          animation: beanAppearMove3 15s infinite cubic-bezier(.4,0,.2,1) alternate;
        }
        .animate-bean4 {
          animation: beanAppearMove4 17s infinite cubic-bezier(.4,0,.2,1) alternate;
        }
        @keyframes bubbleAppearMove1 {
          0%   { opacity: 0; transform: translateY(0) scale(0.7) rotateY(0deg);}
          10%  { opacity: 1; transform: translateY(0) scale(1) rotateY(10deg);}
          50%  { opacity: 1; transform: translateY(-40px) scale(1.15) rotateY(25deg); filter: drop-shadow(0 8px 32px #80000088);}
          90%  { opacity: 1; }
          100% { opacity: 0; transform: translateY(0) scale(0.7) rotateY(0deg);}
        }
        @keyframes bubbleAppearMove2 {
          0%   { opacity: 0; transform: translateY(0) scale(0.7) rotateX(0deg);}
          10%  { opacity: 1; transform: translateY(0) scale(1) rotateX(10deg);}
          50%  { opacity: 1; transform: translateY(30px) scale(0.95) rotateX(25deg); filter: drop-shadow(0 8px 32px #80000088);}
          90%  { opacity: 1; }
          100% { opacity: 0; transform: translateY(0) scale(0.7) rotateX(0deg);}
        }
        @keyframes bubbleAppearMove3 {
          0%   { opacity: 0; transform: translateY(0) scale(0.7) rotateZ(0deg);}
          10%  { opacity: 1; transform: translateY(0) scale(1) rotateZ(10deg);}
          50%  { opacity: 1; transform: translateY(-60px) scale(1.2) rotateZ(25deg); filter: drop-shadow(0 8px 32px #80000088);}
          90%  { opacity: 1; }
          100% { opacity: 0; transform: translateY(0) scale(0.7) rotateZ(0deg);}
        }
        @keyframes bubbleAppearMove4 {
          0%   { opacity: 0; transform: translateY(0) scale(0.7) rotateY(0deg);}
          10%  { opacity: 1; transform: translateY(0) scale(1) rotateY(10deg);}
          50%  { opacity: 1; transform: translateY(-30px) scale(1.1) rotateY(20deg); filter: drop-shadow(0 8px 32px #80000088);}
          90%  { opacity: 1; }
          100% { opacity: 0; transform: translateY(0) scale(0.7) rotateY(0deg);}
        }
        @keyframes bubbleAppearMove5 {
          0%   { opacity: 0; transform: translateY(0) scale(0.7) rotateX(0deg);}
          10%  { opacity: 1; transform: translateY(0) scale(1) rotateX(10deg);}
          50%  { opacity: 1; transform: translateY(40px) scale(1.2) rotateX(20deg); filter: drop-shadow(0 8px 32px #80000088);}
          90%  { opacity: 1; }
          100% { opacity: 0; transform: translateY(0) scale(0.7) rotateX(0deg);}
        }
        @keyframes beanAppearMove1 {
          0%   { opacity: 0; transform: translateX(0) rotate(-10deg) scale(0.7);}
          10%  { opacity: 1; transform: translateX(0) rotate(-10deg) scale(1);}
          50%  { opacity: 1; transform: translateX(-30px) rotate(20deg) scale(1.1); filter: drop-shadow(0 8px 32px #80000088);}
          90%  { opacity: 1; }
          100% { opacity: 0; transform: translateX(0) rotate(-10deg) scale(0.7);}
        }
        @keyframes beanAppearMove2 {
          0%   { opacity: 0; transform: translateY(0) rotate(0deg) scale(0.7);}
          10%  { opacity: 1; transform: translateY(0) rotate(0deg) scale(1);}
          50%  { opacity: 1; transform: translateY(40px) rotate(25deg) scale(1.1); filter: drop-shadow(0 8px 32px #80000088);}
          90%  { opacity: 1; }
          100% { opacity: 0; transform: translateY(0) rotate(0deg) scale(0.7);}
        }
        @keyframes beanAppearMove3 {
          0%   { opacity: 0; transform: translateX(0) rotate(-5deg) scale(0.7);}
          10%  { opacity: 1; transform: translateX(0) rotate(-5deg) scale(1);}
          50%  { opacity: 1; transform: translateX(25px) rotate(15deg) scale(1.1); filter: drop-shadow(0 8px 32px #80000088);}
          90%  { opacity: 1; }
          100% { opacity: 0; transform: translateX(0) rotate(-5deg) scale(0.7);}
        }
        @keyframes beanAppearMove4 {
          0%   { opacity: 0; transform: translateY(0) rotate(0deg) scale(0.7);}
          10%  { opacity: 1; transform: translateY(0) rotate(0deg) scale(1);}
          50%  { opacity: 1; transform: translateY(-35px) rotate(-15deg) scale(1.1); filter: drop-shadow(0 8px 32px #80000088);}
          90%  { opacity: 1; }
          100% { opacity: 0; transform: translateY(0) rotate(0deg) scale(0.7);}
        }
      `}</style>
    </section>
  );
};
