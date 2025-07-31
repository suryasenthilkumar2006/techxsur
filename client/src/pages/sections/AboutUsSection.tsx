import * as React from "react";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";

export const AboutUsSection = (): JSX.Element => {
  const targetDate = new Date("2025-09-10T09:00:00");

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    let timeLeft = {
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
    };

    if (difference > 0) {
      timeLeft = {
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(
          2,
          "0",
        ),
        hours: String(
          Math.floor((difference / (1000 * 60 * 60)) % 24),
        ).padStart(2, "0"),
        minutes: String(Math.floor((difference / (1000 * 60)) % 60)).padStart(
          2,
          "0",
        ),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const countdownItems = [
    { value: timeLeft.days, label: "DAYS" },
    { value: timeLeft.hours, label: "HOURS" },
    { value: timeLeft.minutes, label: "MINUTES" },
    { value: timeLeft.seconds, label: "SECONDS" },
  ];

  const collaboratorLogos = [
    {
      src: "/figmaAssets/cs-poster-4.png",
      alt: "CS POSTER",
      className:
        "w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-[101px] lg:h-[95px]",
    },
    {
      src: "/figmaAssets/ieee-mb-blue-3.png",
      alt: "IEEE MB BLUE",
      className:
        "w-32 h-12 sm:w-40 sm:h-12 md:w-48 md:h-14 lg:w-[219px] lg:h-16",
    },
    {
      src: "/figmaAssets/layer-5.png",
      alt: "Layer",
      className:
        "w-32 h-12 sm:w-40 sm:h-12 md:w-48 md:h-14 lg:w-[209px] lg:h-16",
    },
    {
      src: "/figmaAssets/images-removebg-preview--1--2.png",
      alt: "Images removebg",
      className:
        "w-20 h-16 sm:w-24 sm:h-20 md:w-32 md:h-24 lg:w-[264px] lg:h-[126px]",
    },
    {
      src: "/figmaAssets/cs-poster-1--3.png",
      alt: "CS POSTER",
      className:
        "w-20 h-16 sm:w-24 sm:h-18 md:w-32 md:h-20 lg:w-[191px] lg:h-[85px]",
    },
     {
      src: "/figmaAssets/collaborator-removebg-preview.png",
      alt: "CS POSTER",
      className:
        "w-20 h-16 sm:w-24 sm:h-18 md:w-32 md:h-20 lg:w-[191px] lg:h-[85px]",
    },
  ];

  React.useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const bubbleElements = document.querySelectorAll(".professional-bubble");
      const beanElements = document.querySelectorAll(".professional-bean");
      const dynamicElements = document.querySelectorAll(".dynamic-element");

      bubbleElements.forEach((element, index) => {
        const speed = 0.2 + index * 0.03;
        const yPos = -(scrolled * speed);
        const xPos = Math.sin(scrolled * 0.008 + index) * 20;
        const scale = 1 + Math.sin(scrolled * 0.006 + index) * 0.1;
        (element as HTMLElement).style.transform =
          `translateY(${yPos}px) translateX(${xPos}px) scale(${scale})`;
      });

      beanElements.forEach((element, index) => {
        const speed = 0.15 + index * 0.04;
        const yPos = -(scrolled * speed);
        const xPos = Math.cos(scrolled * 0.005 + index * 0.7) * 25;
        const rotateZ = scrolled * 0.08 + index * 30;
        (element as HTMLElement).style.transform =
          `translateY(${yPos}px) translateX(${xPos}px) rotateZ(${rotateZ}deg)`;
      });

      dynamicElements.forEach((element, index) => {
        const speed = 0.1 + index * 0.02;
        const yPos = -(scrolled * speed);
        const opacity = 0.6 + Math.sin(scrolled * 0.01 + index) * 0.4;
        (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
        (element as HTMLElement).style.opacity = opacity.toString();
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="about"
      className="relative w-full min-h-screen overflow-hidden bg-black"
    >
  
      <div className="absolute inset-0 bg-gradient-to-br from-red via-red-950/20 to-black z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-red-900/10 to-black/90 z-11"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_40%,rgba(0,0,0,0.15),transparent)] z-12"></div>
      {[...Array(25)].map((_, i) => (
        <div
          key={`bubble-${i}`}
          className="professional-bubble absolute pointer-events-none z-15 hidden sm:block"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 15}s`,
            animationDuration: `${12 + Math.random() * 8}s`,
          }}
        >
          <div
            className="relative w-4 h-4 sm:w-6 sm:h-6 rounded-full shadow-lg animate-bubbleLife"
            style={{
              background: `radial-gradient(circle at 30% 30%, 
                rgba(220,38,38,${0.3 + Math.random() * 0.2}) 0%, 
                rgba(220,38,38,${0.1 + Math.random() * 0.1}) 70%, 
                transparent 100%)`,
              boxShadow: `
                0 0 ${15 + Math.random() * 10}px rgba(220,38,38,0.4),
                inset 0 ${2 + Math.random() * 2}px ${8 + Math.random() * 4}px rgba(220,38,38,0.2)
              `,
              backdropFilter: "blur(4px)",
            }}
          >
            <div className="absolute inset-2 rounded-full bg-gradient-to-br from-red-400/20 to-transparent"></div>
          </div>
        </div>
      ))}

      {[...Array(20)].map((_, i) => (
        <div
          key={`bean-${i}`}
          className="professional-bean absolute pointer-events-none z-16 hidden md:block"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 20}s`,
            animationDuration: `${18 + Math.random() * 12}s`,
          }}
        >
          <div
            className="relative w-3 h-6 sm:w-4 sm:h-8 shadow-lg animate-beanLife"
            style={{
              background: `linear-gradient(145deg, 
                rgba(220,38,38,${0.2 + Math.random() * 0.15}) 0%, 
                rgba(220,38,38,${0.1 + Math.random() * 0.1}) 50%, 
                rgba(220,38,38,${0.05 + Math.random() * 0.05}) 100%)`,
              borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
              boxShadow: `
                0 ${8 + Math.random() * 6}px ${25 + Math.random() * 15}px rgba(220,38,38,0.25),
                inset 0 ${1 + Math.random() * 2}px ${6 + Math.random() * 4}px rgba(220,38,38,0.15)
              `,
              backdropFilter: "blur(3px)",
            }}
          >
            <div className="absolute inset-1 rounded-full bg-gradient-to-br from-red-400/15 to-transparent opacity-60"></div>
          </div>
        </div>
      ))}

      {[...Array(30)].map((_, i) => (
        <div
          key={`particle-${i}`}
          className="dynamic-element absolute opacity-20 pointer-events-none z-17 hidden lg:block"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 25}s`,
            animationDuration: `${20 + Math.random() * 15}s`,
          }}
        >
          <div
            className="w-1 h-1 rounded-full animate-particleFloat"
            style={{
              background: `radial-gradient(circle, 
                rgba(220,38,38,${0.4 + Math.random() * 0.3}) 0%, 
                rgba(220,38,38,${0.2 + Math.random() * 0.2}) 70%, 
                transparent 100%)`,
              boxShadow: `0 0 ${6 + Math.random() * 4}px rgba(220,38,38,0.5)`,
            }}
          />
        </div>
      ))}

      <div className="relative z-30">
        <div className="w-full bg-transparent">
          <div className="flex flex-col items-center justify-end mx-auto w-full max-w-[1200px] p-4 sm:p-6 md:p-8">
            <img
              className="relative w-32 sm:w-48 md:w-64 lg:w-[290px] h-[2px] sm:h-[3px] -mt-1 drop-shadow-xl filter brightness-0 invert"
              alt="Vector"
              src="/figmaAssets/vector-6.svg"
            />
          </div>
          <div className="flex flex-col items-center mx-auto w-full max-w-[900px] mt-6 sm:mt-8 md:mt-10 px-4 sm:px-6 md:px-8">
            <div className="relative group perspective-1000 transform-gpu w-full">
              <div className="absolute -inset-4 sm:-inset-6 md:-inset-8 bg-gradient-to-br from-black/80 via-red-950/60 to-black/80 rounded-2xl sm:rounded-3xl blur-2xl sm:blur-3xl opacity-70 group-hover:opacity-90 transition-all duration-1000"></div>
              <div className="absolute -inset-2 sm:-inset-4 bg-red-950/40 rounded-xl sm:rounded-2xl blur-xl sm:blur-2xl opacity-60"></div>

              <div className="relative border-2 border-red-600/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 bg-gradient-to-br from-black/90 via-red-950/20 to-black/90 backdrop-blur-xl shadow-[0_40px_100px_rgba(0,0,0,0.9)] hover:shadow-[0_50px_120px_rgba(220,38,38,0.4)] transition-all duration-1000 hover:-translate-y-2 sm:hover:-translate-y-4 hover:scale-[1.01] sm:hover:scale-[1.02] group-hover:border-red-500/70 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/8 via-transparent to-red-600/5 rounded-2xl sm:rounded-3xl pointer-events-none"></div>
                <div className="relative group/badge mb-8 sm:mb-10 md:mb-12 flex justify-center">
                  <div className="absolute -inset-2 sm:-inset-3 bg-red-600/30 rounded-2xl sm:rounded-3xl blur-lg sm:blur-xl opacity-70 group-hover/badge:opacity-95 transition-all duration-700"></div>
                  <div className="relative flex items-center justify-center w-full max-w-[280px] px-4 sm:px-6 md:px-8 py-3 sm:py-4 bg-gradient-to-br from-black/95 via-red-950/40 to-black/95 rounded-2xl sm:rounded-3xl border-2 border-red-600/60 shadow-[0_25px_50px_rgba(0,0,0,0.9)] hover:shadow-[0_30px_60px_rgba(220,38,38,0.5)] transition-all duration-700 hover:-translate-y-1 sm:hover:-translate-y-2 hover:scale-105 overflow-hidden backdrop-blur-xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-600/20 to-transparent -skew-x-12 -translate-x-full group-hover/badge:translate-x-full transition-transform duration-1200"></div>

                    <div className="relative [font-family:'Poppins',sans-serif] font-medium text-white text-2xl sm:text-3xl md:text-4xl drop-shadow-2xl tracking-wide text-center">
                      Now Live In
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
                  {countdownItems.map((item, index) => (
                    <div
                      key={index}
                      className="relative group/card perspective-1000 transform-gpu"
                    >
                      <div className="absolute -inset-2 sm:-inset-3 md:-inset-4 bg-red-600/20 rounded-2xl sm:rounded-3xl blur-xl sm:blur-2xl opacity-60 group-hover/card:opacity-85 transition-all duration-800"></div>
                      <div className="absolute -inset-1 sm:-inset-2 bg-black/80 rounded-2xl sm:rounded-3xl blur-lg sm:blur-xl opacity-95"></div>

                      <Card className="relative w-full h-32 sm:h-40 md:h-44 lg:h-[180px] bg-gradient-to-br from-black/95 via-red-950/30 to-black/95 rounded-2xl sm:rounded-3xl border-2 border-red-600/50 shadow-[0_30px_70px_rgba(0,0,0,0.95)] hover:shadow-[0_40px_90px_rgba(220,38,38,0.5)] transition-all duration-1000 hover:-translate-y-2 sm:hover:-translate-y-4 md:hover:-translate-y-6 hover:scale-105 sm:hover:scale-110 group-hover/card:border-red-500/70 overflow-hidden backdrop-blur-xl">
                        <div className="absolute inset-0 bg-gradient-to-br from-red-600/8 via-transparent to-red-600/5 rounded-2xl sm:rounded-3xl pointer-events-none"></div>

                        <CardContent className="relative p-0 h-full flex flex-col items-center justify-center z-10">
                          <div className="[font-family:'Poppins',sans-serif] font-bold text-red-500 text-2xl sm:text-3xl md:text-4xl lg:text-5xl drop-shadow-2xl group-hover/card:text-red-400 transition-all duration-500 tracking-wider">
                            {item.value}
                          </div>
                          <div className="[font-family:'Poppins',sans-serif] font-semibold text-white text-xs sm:text-sm md:text-lg lg:text-xl tracking-[1px] sm:tracking-[2px] mt-2 sm:mt-3 md:mt-4 drop-shadow-xl group-hover/card:text-gray-100 transition-all duration-500">
                            {item.label}
                          </div>
                        </CardContent>

                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-600/15 to-transparent -skew-x-12 -translate-x-full group-hover/card:translate-x-full transition-transform duration-1200 rounded-2xl sm:rounded-3xl"></div>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center mx-auto max-w-[1100px] mt-[100px] px-4">
            <div className="relative group mb-12 perspective-1000 transform-gpu">
              <div className="absolute -inset-6 bg-red-600/20 rounded-3xl blur-2xl opacity-70 group-hover:opacity-90 transition-all duration-800"></div>
              <div className="absolute -inset-3 bg-black/80 rounded-2xl blur-xl opacity-90"></div>
              <div className="relative bg-gradient-to-br from-black/90 via-red-950/20 to-black/90 backdrop-blur-2xl border-2 border-red-600/40 rounded-3xl px-10 py-6 shadow-[0_35px_80px_rgba(0,0,0,0.8)] hover:shadow-[0_40px_100px_rgba(220,38,38,0.4)] transition-all duration-1000 hover:-translate-y-3 hover:scale-105 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/6 via-transparent to-red-600/4 rounded-3xl pointer-events-none"></div>
                <h2 className="relative [font-family:'Poppins',sans-serif] font-semibold text-5xl text-center drop-shadow-2xl tracking-wide">
                  <span className="text-white drop-shadow-[0_6px_20px_rgba(255,255,255,0.4)]">
                    What is Tech
                  </span>
                  <span className="text-red-500 drop-shadow-[0_6px_20px_rgba(220,38,38,0.6)]">
                    X{" "}
                  </span>
                  <span className="text-white drop-shadow-[0_6px_20px_rgba(255,255,255,0.4)]">
                    ?
                  </span>
                </h2>
              </div>
            </div>
            <div className="relative group perspective-1000 transform-gpu">
              <div className="absolute -inset-6 bg-black/60 rounded-3xl blur-3xl opacity-60 group-hover:opacity-85 transition-all duration-1000"></div>
              <div className="absolute -inset-2 bg-red-600/15 rounded-2xl blur-lg opacity-60"></div>
              <div className="relative bg-gradient-to-br from-black/95 via-red-950/15 to-black/95 backdrop-blur-2xl border-2 border-red-600/30 rounded-3xl p-10 shadow-[0_40px_100px_rgba(0,0,0,0.9)] hover:shadow-[0_50px_120px_rgba(220,38,38,0.3)] transition-all duration-1000 hover:-translate-y-4 hover:scale-[1.01] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/6 via-transparent to-red-600/4 rounded-3xl pointer-events-none"></div>

                <p className="relative [font-family:'Poppins',sans-serif] font-normal text-white text-xl text-justify leading-relaxed drop-shadow-xl tracking-wide">
                  TechX Madras is a premier initiative hosted by the IEEE CS SBC
                  of SSIT, as part of the IEEE CS SYP TechX series, in
                  association with the IEEE CS Madras Chapter. Gathering over
                  200+ passionate tech minds, this dynamic two-day event offers
                  a vibrant mix of learning, collaboration, and innovation.
                  Participants dive into engaging hands-on workshops,
                  thought-provoking tech talks led by industry experts, and
                  high-energy sessions including debates, panel discussions, and
                  a thrilling hackathon&nbsp;&nbsp;all designed to inspire,
                  connect, and ignite the next generation of tech leaders.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full mt-16 sm:mt-24 md:mt-32 lg:mt-[200px]">
            <div className="relative group mb-8 sm:mb-10 md:mb-12 perspective-1000 transform-gpu">
              <div className="absolute -inset-3 sm:-inset-4 md:-inset-6 bg-red-600/20 rounded-2xl sm:rounded-3xl blur-xl sm:blur-2xl opacity-60 group-hover:opacity-85 transition-all duration-800"></div>
              <div className="absolute -inset-2 sm:-inset-3 bg-black/80 rounded-xl sm:rounded-2xl blur-lg sm:blur-xl opacity-95"></div>
              <div className="relative bg-gradient-to-br from-black/95 via-red-950/20 to-black/95 backdrop-blur-2xl border-2 border-red-600/40 rounded-2xl sm:rounded-3xl px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 shadow-[0_35px_80px_rgba(0,0,0,0.9)] hover:shadow-[0_40px_100px_rgba(220,38,38,0.3)] transition-all duration-1000 hover:-translate-y-2 sm:hover:-translate-y-3 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/6 via-transparent to-red-600/4 rounded-2xl sm:rounded-3xl pointer-events-none"></div>
                <h3 className="relative opacity-95 text-center [font-family:'Poppins',sans-serif] font-semibold text-white text-3xl sm:text-4xl md:text-5xl drop-shadow-2xl tracking-wide">
                  Our Collaborators
                </h3>
              </div>
            </div>
            <div className="relative w-full h-20 sm:h-24 md:h-28 lg:h-[140px] overflow-hidden group perspective-1000">
              <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-red-950/10 to-black/95 shadow-[inset_0_15px_40px_rgba(0,0,0,0.95)] border-y-2 border-red-600/30"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-transparent to-black/95 pointer-events-none z-10"></div>

              <div className="w-full h-full bg-black overflow-hidden relative">
                <div className="flex items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 p-2 sm:p-2.5 animate-scroll">
                  {collaboratorLogos.map((logo, index) => (
                    <img
                      key={index}
                      className={`object-contain flex-shrink-0 ${logo.className}`}
                      alt={logo.alt}
                      src={logo.src}
                    />
                  ))}

                  {collaboratorLogos.map((logo, index) => (
                    <img
                      key={`duplicate-${index}`}
                      className={`object-contain flex-shrink-0 ${logo.className}`}
                      alt={logo.alt}
                      src={logo.src}
                    />
                  ))}

                  {collaboratorLogos.map((logo, index) => (
                    <img
                      key={`triple-${index}`}
                      className={`object-contain flex-shrink-0 ${logo.className}`}
                      alt={logo.alt}
                      src={logo.src}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style >{`
        @keyframes bubbleLife {
          0% {
            opacity: 0;
            transform: scale(0) translateY(0px);
          }
          20% {
            opacity: 0.8;
            transform: scale(1) translateY(-20px);
          }
          80% {
            opacity: 0.3;
            transform: scale(1.2) translateY(-80px);
          }
          100% {
            opacity: 0;
            transform: scale(0) translateY(-120px);
          }
        }

        @keyframes beanLife {
          0% {
            opacity: 0;
            transform: scale(0) rotate(0deg) translateY(0px);
          }
          25% {
            opacity: 0.7;
            transform: scale(1) rotate(90deg) translateY(-30px);
          }
          75% {
            opacity: 0.4;
            transform: scale(1.1) rotate(270deg) translateY(-90px);
          }
          100% {
            opacity: 0;
            transform: scale(0) rotate(360deg) translateY(-140px);
          }
        }

        @keyframes particleFloat {
          0% {
            opacity: 0;
            transform: translateY(0px) scale(0);
          }
          30% {
            opacity: 0.8;
            transform: translateY(-30px) scale(1);
          }
          70% {
            opacity: 0.3;
            transform: translateY(-70px) scale(1.2);
          }
          100% {
            opacity: 0;
            transform: translateY(-100px) scale(0);
          }
        }

        @keyframes animate-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-scroll {
          animation: animate-scroll 25s linear infinite;
        }

        .animation-paused {
          animation-play-state: paused;
        }

        .perspective-1000 {
          perspective: 1000px;
        }

        .transform-gpu {
          transform: translateZ(0);
        }

        /* Responsive adjustments for smaller screens */
        @media (max-width: 640px) {
          .animate-scroll {
            animation: animate-scroll 20s linear infinite;
          }
        }

        @media (max-width: 768px) {
          .professional-bubble,
          .professional-bean {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};
