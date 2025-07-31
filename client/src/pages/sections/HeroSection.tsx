import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export const HeroSection = (): JSX.Element => {
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About us", href: "#about" },
    { label: "Agenda", href: "#agenda" },
    { label: "Tickets", href: "#tickets" },
    { label: "Contact us", href: "#contact" },
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const handleJoinRevolutionClick = () => {
    const ticketsSection = document.getElementById('tickets');
    if (ticketsSection) {
      ticketsSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const FloatingBubble = ({ size, delay, duration, x, y }: { 
    size: string; 
    delay: string; 
    duration: string; 
    x: string; 
    y: string; 
  }) => (
    <div
      className={`absolute ${size} rounded-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 shadow-xl animate-float`}
      style={{
        left: x,
        top: y,
        animationDelay: delay,
        animationDuration: duration,
        filter: 'drop-shadow(0 8px 32px rgba(255,255,255,0.1))',
      }}
    />
  );

  return (
    <section id="home" className="relative w-full min-h-screen overflow-hidden">
      <div className="relative w-full min-h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110 transition-transform duration-1000 ease-out"
          style={{
            backgroundImage: `url('https://www.dropbox.com/scl/fi/71xfxpe1vl0m2abvlw542/Gemini_Generated_Image_b0oajpb0oajpb0oa.png?rlkey=56ul5n5r99ye6l5uqw6fwe6rr&st=idxxnmid&dl=1')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 via-slate-800/60 to-slate-900/80 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 z-20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)] z-30" />
        <div className="absolute inset-0 z-40">
          <FloatingBubble size="w-16 h-16" delay="0s" duration="8s" x="10%" y="20%" />
          <FloatingBubble size="w-24 h-24" delay="2s" duration="10s" x="85%" y="15%" />
          <FloatingBubble size="w-12 h-12" delay="4s" duration="6s" x="20%" y="60%" />
          <FloatingBubble size="w-20 h-20" delay="1s" duration="12s" x="75%" y="70%" />
          <FloatingBubble size="w-8 h-8" delay="3s" duration="7s" x="50%" y="25%" />
          <FloatingBubble size="w-14 h-14" delay="5s" duration="9s" x="5%" y="80%" />
          <FloatingBubble size="w-10 h-10" delay="6s" duration="11s" x="90%" y="50%" />
          <FloatingBubble size="w-18 h-18" delay="7s" duration="8s" x="40%" y="85%" />
        </div>
        <header className="absolute top-0 left-0 right-0 z-50 px-4 sm:px-6">
          <div className="flex items-center justify-between max-w-7xl mx-auto py-2">
            <div className="flex items-center">
              <img
                className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 object-contain drop-shadow-2xl transition-all duration-300 group-hover:scale-105 relative z-10"
                alt="TechX Event Logo"
                src="/figmaAssets/image-8.png"
              />
            </div>
            <nav className="hidden sm:flex">
              <NavigationMenu>
                <NavigationMenuList className="flex items-center gap-2 px-6 py-3 bg-black/20 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5 rounded-2xl" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent rounded-2xl" />
                  {navItems.map((item, index) => (
                    <NavigationMenuItem key={index}>
                      <a
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item.href)}
                        className="relative inline-flex items-center px-4 py-2 rounded-xl hover:bg-white/20 transition-all duration-300 hover:shadow-lg hover:scale-105 focus:outline-none cursor-pointer group overflow-hidden"
                      >
                        <span className="[font-family:'Aoboshi_One',Helvetica] font-normal text-white text-base md:text-lg text-center tracking-wide leading-normal relative z-10 drop-shadow-lg">
                          {item.label}
                        </span>
                      </a>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </nav>
            <button
              className="sm:hidden flex items-center justify-center w-12 h-12 rounded-full bg-black/40 border border-white/20 shadow-lg"
              aria-label="Open menu"
              onClick={() => setMobileMenuOpen(true)}
            >
              <svg width="28" height="28" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
          </div>
          {mobileMenuOpen && (
            <div className="fixed inset-0 z-[999] bg-gradient-to-br from-black/90 via-black/80 to-black/95 backdrop-blur-xl flex items-center justify-center sm:hidden">
              <div className="relative w-full max-w-xs mx-auto px-4 py-8 rounded-3xl bg-gradient-to-br from-white/10 via-slate-900/80 to-red-900/40 shadow-[0_8px_32px_rgba(0,0,0,0.8)] border border-white/20 animate-fade-in">
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-red-500 via-red-600 to-red-700 shadow-lg flex items-center justify-center">
                  <svg width="32" height="32" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M4 7h16M4 12h16M4 17h16" />
                  </svg>
                </div>
                <button
                  className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 border border-white/20 shadow hover:bg-red-500/30 transition"
                  aria-label="Close menu"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <svg width="24" height="24" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M6 6l12 12M6 18L18 6" />
                  </svg>
                </button>
                <nav>
                  <ul className="flex flex-col gap-6 text-center mt-8">
                    {navItems.map((item, index) => (
                      <li key={index}>
                        <a
                          href={item.href}
                          onClick={(e) => handleNavClick(e, item.href)}
                          className="block text-white text-2xl font-semibold px-8 py-4 rounded-xl bg-gradient-to-r from-red-500/10 via-white/10 to-red-700/10 shadow-lg hover:bg-red-500/30 hover:scale-105 transition-all duration-300 border border-white/10 backdrop-blur focus:outline-none"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </header>
        <div className="relative flex flex-col items-center justify-center h-full pt-36 sm:pt-48 md:pt-64 z-40">
          <div className="text-center space-y-8 max-w-6xl mx-auto px-4 sm:px-6">
            <div className="relative">
              <div className="mb-6">
                <h3 className="[font-family:'Aoboshi_One',Helvetica] font-medium text-white/90 text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-[0.2em] mb-4 drop-shadow-lg">
                  IEEE SSIT SBC CS
                </h3>
                <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-white/60 to-transparent mx-auto"></div>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8 lg:gap-12 mb-8">
                <h1 className="[font-family:'Aoboshi_One',Helvetica] font-bold text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl leading-tight tracking-wide relative">
                  <span className="relative inline-block group">
                    <span className="absolute top-2 left-2 text-black/30 blur-sm scale-105">
                      Tech<span className="text-red-900/40">X</span>
                    </span>
                    <span className="absolute top-1 left-1 text-black/20 blur-xs scale-102">
                      Tech<span className="text-red-800/30">X</span>
                    </span>
                    <span className="relative z-10 drop-shadow-[0_8px_32px_rgba(0,0,0,0.8)]">
                      <span className="text-white drop-shadow-[0_4px_16px_rgba(255,255,255,0.3)]">Tech</span>
                      <span className="bg-gradient-to-br from-red-400 via-red-500 to-red-700 bg-clip-text text-transparent drop-shadow-[0_4px_16px_rgba(220,38,38,0.5)]">X</span>
                    </span>
                    <span className="absolute inset-0 text-white/10 blur-2xl scale-110 opacity-50">
                      Tech<span className="text-red-500/20">X</span>
                    </span>
                  </span>
                </h1>
                <h2 className="[font-family:'Aoboshi_One',Helvetica] font-bold text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl leading-tight tracking-wide relative">
                  <span className="relative inline-block group">
                    <span className="absolute top-2 left-2 text-black/30 blur-sm scale-105">
                      Madras
                    </span>
                    <span className="absolute top-1 left-1 text-black/20 blur-xs scale-102">
                      Madras
                    </span>
                    <span className="relative z-10 drop-shadow-[0_8px_32px_rgba(0,0,0,0.8)]">
                      <span className="text-white drop-shadow-[0_4px_16px_rgba(255,255,255,0.3)]">Madras</span>
                    </span>
                    <span className="absolute inset-0 text-white/10 blur-2xl scale-110 opacity-50">
                      Madras
                    </span>
                  </span>
                </h2>
              </div>
              <div className="relative mb-12 group flex justify-center">
                <div className="absolute -inset-2 bg-gradient-to-r from-red-500/5 via-white/10 to-red-500/5 rounded-full blur-2xl opacity-60" />
                <div className="absolute -inset-1 bg-gradient-to-br from-white/5 to-red-500/10 rounded-2xl blur-lg" />
                <h2 className="[font-family:'Poppins',sans-serif] font-medium text-lg sm:text-xl md:text-2xl lg:text-2xl text-center tracking-[0.1em] leading-relaxed relative z-10 max-w-2xl">
                  <span className="inline-block px-6 py-4 rounded-full bg-gradient-to-br from-white/15 via-white/10 to-red-500/15 backdrop-blur-2xl border-2 border-white/20 shadow-[0_15px_35px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.2)] relative overflow-hidden">
                    <span className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-red-500/10 rounded-full" />
                    <span className="relative z-10 bg-gradient-to-r from-white via-red-100 via-white to-red-200 bg-clip-text text-transparent font-semibold italic drop-shadow-[0_2px_8px_rgba(255,255,255,0.2)]">
                      "Learn The Tech, Lead The Change"
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 rounded-full" />
                  </span>
                </h2>
              </div>
              <div className="relative">
                <p className="[font-family:'Aoboshi_One',Helvetica] font-normal text-white/95 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-center tracking-wide leading-relaxed px-6 sm:px-8 py-6 bg-black/25 rounded-2xl backdrop-blur-xl border border-white/25 shadow-2xl">
                  Sri Sai Ram Institute of Technology, Chennai
                </p>
              </div>
              <div className="mb-20"></div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 z-30 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
