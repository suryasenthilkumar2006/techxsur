import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

export const EventAgendaSection = (): JSX.Element => {
  const [selectedDay, setSelectedDay] = useState<"day1" | "day2">("day1");

  return (
    <section
      id="agenda"
      className="relative w-full min-h-screen overflow-hidden"
    >
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/figmaAssets/background for event agenda_1753521087388.jpg.jpg"
          alt="Event Agenda Background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-black/50 z-10"></div>
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16 lg:py-20">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-8">
            <div className="w-16 sm:w-20 h-0.5 bg-red-500"></div>
            <div className="w-3 h-3 bg-red-500 rounded-full mx-4"></div>
            <div className="w-16 sm:w-20 h-0.5 bg-red-500"></div>
          </div>

          <h2 className="font-sans font-bold text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mb-6 tracking-wide drop-shadow-2xl">
            Event <span className="text-red-400 animate-text">Agenda</span>
          </h2>

          <p className="font-sans text-gray-200 text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto font-medium leading-relaxed">
            Your complete guide to two days of innovation, learning, and collaboration
          </p>
        </div>
        <div className="max-w-md mx-auto mb-16">
          <Card className="bg-black/50 backdrop-blur-md border border-white/30 rounded-2xl overflow-hidden shadow-2xl">
            <CardContent className="p-2">
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setSelectedDay("day1")}
                  className={`relative px-6 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                    selectedDay === "day1"
                      ? "bg-gradient-to-r from-red-600 to-red-500 text-white shadow-lg transform scale-105"
                      : "text-gray-200 hover:text-white hover:bg-white/20"
                  }`}
                >
                  <span className="relative z-10">Day 1</span>
                  {selectedDay === "day1" && (
                    <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-xl animate-glow-pulse"></div>
                  )}
                </button>

                <button
                  onClick={() => setSelectedDay("day2")}
                  className={`relative px-6 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                    selectedDay === "day2"
                      ? "bg-gradient-to-r from-red-600 to-red-500 text-white shadow-lg transform scale-105"
                      : "text-gray-200 hover:text-white hover:bg-white/20"
                  }`}
                >
                  <span className="relative z-10">Day 2</span>
                  {selectedDay === "day2" && (
                    <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-xl animate-glow-pulse"></div>
                  )}
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="max-w-6xl mx-auto">
          <Card className="group bg-black/30 backdrop-blur-md border border-white/30 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl hover:bg-black/40 transition-all duration-500 hover:scale-[1.02] hover:border-white/40">
            <CardContent className="p-8 sm:p-12 lg:p-16">
              <div className="flex justify-center items-center">
                <div className="relative w-full max-w-4xl">
                  {/* Day 1 Image */}
                  {selectedDay === "day1" && (
                    <div className="animate-fadeIn">
                      <img
                        src="/figmaAssets/day1_agenda-removebg-preview.png"
                        alt="Day 1 Agenda"
                        className="w-full h-auto object-contain rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105"
                      />
                    </div>
                  )}
                  {selectedDay === "day2" && (
                    <div className="animate-fadeIn">
                      <img
                        src="/figmaAssets/day2agenda-removebg-preview.png"
                        alt="Day 2 Agenda"
                        className="w-full h-auto object-contain rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-red-500/20 rounded-full animate-pulse"></div>
                  <div className="absolute -top-2 -right-6 w-4 h-4 bg-white/30 rounded-full animate-pulse delay-1000"></div>
                  <div className="absolute -bottom-6 -left-2 w-6 h-6 bg-red-400/30 rounded-full animate-pulse delay-500"></div>
                  <div className="absolute -bottom-4 -right-4 w-5 h-5 bg-white/20 rounded-full animate-pulse delay-700"></div>
                </div>
              </div>
              <div className="mt-8 text-center">
                <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-600/20 to-red-500/20 border border-red-400/30 rounded-full">
                  <div className="w-2 h-2 bg-red-400 rounded-full mr-3 animate-pulse"></div>
                  <span className="text-white font-semibold text-lg">
                    {selectedDay === "day1" ? "Day 1 Schedule" : "Day 2 Schedule"}
                  </span>
                  <div className="w-2 h-2 bg-red-400 rounded-full ml-3 animate-pulse"></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="flex items-center justify-center mt-16">
          <div className="w-20 h-0.5 bg-red-500/60"></div>
          <div className="w-2 h-2 bg-red-500 rounded-full mx-4 animate-pulse"></div>
          <div className="w-20 h-0.5 bg-red-500/60"></div>
        </div>
      </div>
      <div className="absolute top-20 left-10 w-2 h-2 bg-red-400 rounded-full animate-pulse opacity-60"></div>
      <div className="absolute top-1/3 right-16 w-1 h-1 bg-white rounded-full animate-pulse opacity-40"></div>
      <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-red-300 rounded-full animate-pulse opacity-50"></div>
      <div className="absolute bottom-20 right-20 w-2 h-2 bg-white rounded-full animate-pulse opacity-30"></div>
    </section>
  );
};
