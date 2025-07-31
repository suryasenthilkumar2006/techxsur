
import { CheckIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export const TicketInfoSection = (): JSX.Element => {
  
  const day1And2Tickets = [
    {
      type: "IEEE COMPUTER SOCIETY MEMBER",
      originalPrice: "₹500",
      offerPrice: "₹300",
      benefits: [
       "40% Discount on ticket price",
        "Hackathon",
        "Surprise Event",
        "Cyber Security Workshop",
        "Panel Discussion / Debate",
        "Food & Refreshments",
      ],
    },
    {
      type: "IEEE MEMBER",
      originalPrice: "₹550",
      offerPrice: "₹350",
      benefits: [
       "35% Discount on ticket price",
        "Hackathon",
        "Surprise Event",
        "Cyber Security Workshop",
        "Panel Discussion / Debate",
        "Food & Refreshments",
      ],
    },
    {
      type: "NON - IEEE MEMBER",
      originalPrice: "₹600",
      offerPrice: "₹400",
      benefits: [
       "30% Discount on ticket price",
        "Hackathon",
        "Surprise Event",
        "Cyber Security Workshop",
        "Panel Discussion / Debate",
        "Food & Refreshments",
      ],
    },
  ];

  
  const day2Tickets = [
    {
      type: "IEEE COMPUTER SOCIETY MEMBER",
      originalPrice: "₹300",
      offerPrice: "₹200",
      benefits: [
       "30% Discount on ticket price",
       "Surprise Event",
    
        "Cyber Security Workshop",
        "Panel Discussion / Debate",
        "Food & Refreshments",
      ],
    },
    {
      type: "IEEE MEMBER",
      originalPrice: "₹350",
      offerPrice: "₹250",
      benefits: [
       "28% Discount on ticket price",
       "Surprise Event",
        "Cyber Security Workshop",
        "Panel Discussion / Debate",
        "Food & Refreshments",
      ],
    },
    {
      type: "NON - IEEE MEMBER",
      originalPrice: "₹400",
      offerPrice: "₹300",
      benefits: [
        "25% Discount on ticket price",
        "Surprise Event",
        
        "Cyber Security Workshop",
        "Panel Discussion / Debate",
        "Food & Refreshments",
      ],
    },
  ];

  
  const renderTicketCard = (ticket: (typeof day1And2Tickets)[0], index: number) => (
    <div 
      className="relative group perspective-1000"
      style={{
        animationDelay: `${index * 0.2}s`
      }}
    >
  <Card className="relative w-[400px] h-[620px] min-w-[400px] min-h-[620px] max-w-[400px] max-h-[620px] bg-gradient-to-br from-black via-gray-900 to-black rounded-[30px] border-4 border-white/20 shadow-[0px_25px_60px_rgba(0,0,0,0.8),inset_0px_1px_0px_rgba(255,255,255,0.1)] px-2.5 py-4 flex flex-col transition-all duration-700 hover:shadow-[0px_35px_80px_rgba(0,0,0,0.9),inset_0px_2px_0px_rgba(255,255,255,0.2)] hover:scale-[1.05] hover:-translate-y-3 hover:rotate-x-3 hover:rotate-y-2 transform-gpu preserve-3d animate-fade-in-up">
        <div className="absolute inset-0 rounded-[30px] bg-gradient-to-br from-white/5 via-transparent to-black/20 pointer-events-none"></div>
      
        <div className="absolute inset-0 overflow-hidden rounded-[30px] pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-float-particle opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${4 + Math.random() * 2}s`,
              }}
            ></div>
          ))}
        </div>

        <CardContent className="relative p-0 flex-1 flex flex-col justify-between z-10">
        <div className="flex flex-col w-full items-center justify-start gap-[17px] h-full">
  
            <div className="relative inline-flex items-center justify-center gap-2.5 mb-4">
              <div className="relative group/price">
      
                <div className="[font-family:'Poppins',sans-serif] font-semibold text-white text-xl text-center mb-3 drop-shadow-xl transition-all duration-300 group-hover:text-gray-100 group-hover:scale-105">
                  {ticket.type}
            </div>
  
                <div className="relative flex flex-col items-center gap-2">

                  <div className="relative">
                    <div className="[font-family:'Poppins',sans-serif] font-semibold text-gray-400 text-[24px] text-center drop-shadow-lg line-through decoration-red-500 decoration-2 opacity-70 transition-all duration-300 group-hover:opacity-50">
                      {ticket.originalPrice}
                    </div>
                    <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-red-500 via-red-600 to-red-500 transform -translate-y-1/2 animate-pulse"></div>
                  </div>
                  <div className="relative">
                    <div className="[font-family:'Poppins',sans-serif] font-bold text-green-400 text-[40px] text-center drop-shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:text-green-300 animate-pulse">
                      {ticket.offerPrice}
                    </div>
                    <div className="absolute -top-2 -left-2 w-3 h-3 bg-gradient-to-br from-green-400 to-green-600 rounded-full animate-pulse shadow-lg"></div>
                    <div className="absolute -bottom-2 -right-2 w-2 h-2 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full animate-pulse"></div>
                  </div>
                  <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 backdrop-blur-sm rounded-lg px-3 py-1 border border-green-500/30">
                    <span className="text-green-300 text-sm font-semibold">
                      Save ₹{parseInt(ticket.originalPrice.replace('₹', '')) - parseInt(ticket.offerPrice.replace('₹', ''))}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full items-start gap-4 flex-1 justify-center px-4">
              {ticket.benefits.map((benefit, benefitIndex) => (
                <div 
                  key={benefitIndex} 
                  className="flex items-center gap-3 w-full group/benefit relative transition-all duration-300 hover:translate-x-2"
                  style={{
                    animationDelay: `${(index * 0.2) + (benefitIndex * 0.1)}s`
                  }}
                >

                  <div className="relative flex-shrink-0">
                    <div className="w-[25px] h-[25px] bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 group-hover/benefit:scale-110 group-hover/benefit:rotate-12">
                      <CheckIcon className="w-[15px] h-[17px] text-white drop-shadow-sm" />
                    </div>
                  </div>
 
                  <div className="[font-family:'Poppins',sans-serif] font-medium text-white text-[20px] flex-1 drop-shadow-lg transition-all duration-300 group-hover/benefit:text-gray-100 relative">
                  {benefit}
 
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-400 to-red-600 transition-all duration-300 group-hover/benefit:w-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>

        <CardFooter className="flex justify-center p-0 mt-4 relative z-10">
          <div className="relative group/button">
            <Button className="relative bg-gradient-to-r from-black via-gray-900 to-black rounded-[30px] border-[3px] border-red-500/80 px-[19px] py-1 shadow-[0px_10px_30px_rgba(0,0,0,0.5)] transition-all duration-500 hover:shadow-[0px_15px_40px_rgba(0,0,0,0.7)] hover:scale-105 hover:border-red-400 overflow-hidden">

              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover/button:translate-x-full transition-transform duration-1000"></div>
              
              <span className="relative [font-family:'Poppins',sans-serif] font-semibold text-white text-2xl text-center drop-shadow-lg transition-all duration-300 group-hover/button:text-gray-100">
            Register
          </span>
        </Button>
          </div>
      </CardFooter>

        <div className="absolute -inset-2 bg-gradient-to-br from-black/20 to-red-950/30 rounded-[35px] -z-10 transform translate-x-2 translate-y-2 transition-all duration-700 group-hover:translate-x-4 group-hover:translate-y-4 group-hover:scale-105"></div>
    </Card>
    </div>
  );

  return (
    <section id="tickets" className="relative w-full min-h-screen py-24 overflow-hidden">

      <div className="absolute inset-0 w-full h-full">
      <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 ease-out"
        style={{
            backgroundImage: `url('https://www.dropbox.com/scl/fi/k83n31ithvnlgvu0dkcou/WhatsApp-Image-2025-07-23-at-22.35.26_d919ebf4.jpg?rlkey=b1npq90ebic8eo7csizbuk554&st=suvsrvc2&dl=1')`,
            transform: "scale(1.1)",
        }}
      ></div>

        <div className="absolute inset-0 bg-gradient-to-br from-red-900/90 via-black/80 to-red-950/95"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40"></div>
        
  
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="absolute opacity-5 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${10 + Math.random() * 6}s`,
              }}
            >
              <div
                className={`w-${2 + Math.floor(Math.random() * 8)} h-${2 + Math.floor(Math.random() * 8)} bg-gradient-to-br from-red-400/20 to-white/10 ${Math.random() > 0.5 ? "rounded-full" : "rotate-45"} shadow-xl`}
              ></div>
            </div>
          ))}
        </div>
    
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer transform skew-x-12"></div>
        </div>
      </div>
      
      <div className="relative w-full z-10">
 
        <div className="text-center mb-16 relative">
          <div className="relative group perspective-1000 inline-block">
            <h1 className="[font-family:'Poppins',sans-serif] font-bold text-white text-6xl lg:text-7xl mb-4 transition-all duration-700 hover:scale-105 hover:rotate-x-3 transform-gpu preserve-3d cursor-default">
              <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
                Reserve Your 
              </span>
              <span className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent ml-4 drop-shadow-2xl">
                Spot  
              </span>
              <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
                 -Be An 
              </span>
              <span className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent ml-4 drop-shadow-2xl">
                  Early Bird!
              </span>
        </h1>

            <div className="absolute inset-0 [font-family:'Aoboshi_One',Helvetica] font-normal text-6xl lg:text-7xl opacity-10 translate-x-2 translate-y-2 -z-10 pointer-events-none">
              <span className="text-black">Reserve Your Spot!</span>
            </div>
          </div>
    
          <div className="flex items-center justify-center mt-8">
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-red-500/60 to-red-500 rounded-full shadow-lg"></div>
            <div className="w-4 h-4 bg-gradient-to-br from-red-400 to-red-600 rounded-full mx-6 animate-pulse shadow-xl"></div>
            <div className="w-32 h-1 bg-gradient-to-l from-transparent via-red-500/60 to-red-500 rounded-full shadow-lg"></div>
          </div>
        </div>
 <div className="mb-20">
          <div className="relative group perspective-1000 mb-12">
            <h2 className="text-center [font-family:'Poppins',sans-serif] font-semibold text-white text-[36px] lg:text-[42px] transition-all duration-500 hover:scale-105 hover:text-red-100 cursor-default drop-shadow-xl">
              <span className="bg-gradient-to-r from-white via-red-100 to-white bg-clip-text text-transparent">
                    Both Day Pass
              </span>
        </h2>

            <div className="flex items-center justify-center mt-4">
              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-red-400 to-transparent rounded-full"></div>
            </div>
          </div>
<div className="grid grid-cols-1 lg:grid-cols-3 place-items-center gap-y-10 gap-x-8 px-4 lg:px-[100px]">
           {day1And2Tickets.map((ticket, index) => (
    <div key={index}>{renderTicketCard(ticket, index)}</div>
  ))}
        </div>
        </div>
        <div className="mb-20">
          <div className="relative group perspective-1000 mb-12">
            <h2 className="text-center [font-family:'Poppins',sans-serif] font-semibold text-white text-[36px] lg:text-[42px] transition-all duration-500 hover:scale-105 hover:text-red-100 cursor-default drop-shadow-xl">
              <span className="bg-gradient-to-r from-white via-red-100 to-white bg-clip-text text-transparent">
          Day 2 Pass
              </span>
        </h2>

            <div className="flex items-center justify-center mt-4">
              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-red-400 to-transparent rounded-full"></div>
            </div>
          </div>
<div className="grid grid-cols-1 lg:grid-cols-3 place-items-center gap-y-10 gap-x-8 px-4 lg:px-[100px]">
          {day2Tickets.map((ticket, index) => (
              <div key={index}>{renderTicketCard(ticket, index + 3)}</div>
          ))}
        </div>
        </div>

        
        <div className="flex justify-center mt-16">
          <div className="relative group perspective-1000">
{/* <Button className="relative w-auto h-auto min-w-[320px] min-h-[80px] px-8 py-4 bg-gradient-to-r from-black via-gray-900 to-black rounded-[30px] border-[3px] border-white/30 shadow-[0px_20px_50px_rgba(0,0,0,0.8)] flex flex-col items-center justify-center transition-all duration-700 hover:shadow-[0px_30px_70px_rgba(0,0,0,0.9)] hover:scale-105 hover:border-white/50 hover:-translate-y-2 transform-gpu preserve-3d overflow-hidden">

  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
  
  <span className="relative flex flex-col items-center [font-family:'Poppins',sans-serif] font-semibold text-white text-[32px] drop-shadow-xl transition-all duration-300 group-hover:text-gray-100 z-10">
    <span>Be an Early Bird</span>
    <br />
    <span className="text-[20px] font-normal mt-1">Get exclusive access before everyone else!</span>
  </span>

  <div className="absolute top-2 right-2 w-3 h-3 bg-white/20 rounded-full animate-pulse"></div>
  <div className="absolute bottom-2 left-2 w-2 h-2 bg-red-400/40 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
</Button> */}
        
            <div className="absolute -inset-2 bg-gradient-to-br from-black/30 to-gray-900/40 rounded-[35px] -z-10 transform translate-x-3 translate-y-3 transition-all duration-700 group-hover:translate-x-5 group-hover:translate-y-5"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

// dummy lines
// im surya currently working for techxxx