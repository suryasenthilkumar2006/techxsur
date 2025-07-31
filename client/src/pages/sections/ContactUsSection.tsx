import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  LinkedinIcon,
} from "lucide-react";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserTie,
  faUsersCog,
  faEnvelope,
  faGlobe,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

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

export const ContactUsSection = (): JSX.Element => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Speakers", href: "#speakers" },
    { name: "Schedule", href: "#agenda" },
    { name: "Register", href: "#tickets" },
  ];

  

  return (
    <section
      id="contact"
      className="relative w-full bg-gradient-to-br from-[#800000] via-[#a83232] to-[#800000] py-16 lg:py-20 overflow-hidden"
    >
      <Bubble className="absolute left-10 top-10 animate-bubble1 z-0" />
      <Bubble
        className="absolute right-16 top-32 animate-bubble2 z-0"
        style={{ width: 60, height: 60 }}
      />
      <Bubble
        className="absolute left-1/2 bottom-10 animate-bubble3 z-0"
        style={{ width: 100, height: 100 }}
      />
      <Bubble
        className="absolute left-1/4 top-1/3 animate-bubble4 z-0"
        style={{ width: 70, height: 70 }}
      />
      <Bubble
        className="absolute right-1/4 bottom-1/4 animate-bubble5 z-0"
        style={{ width: 90, height: 90 }}
      />
      <Bean className="absolute right-10 bottom-24 animate-bean1 z-0" />
      <Bean
        className="absolute left-24 top-1/2 animate-bean2 z-0"
        style={{ width: 80, height: 50 }}
      />
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80 z-0"
        style={{
          backgroundImage: `url('https://www.dropbox.com/scl/fi/k83n31ithvnlgvu0dkcou/WhatsApp-Image-2025-07-23-at-22.35.26_d919ebf4.jpg?rlkey=b1npq90ebic8eo7csizbuk554&st=suvsrvc2&dl=1')`,
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80 z-5"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Contact Us Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-8">
            <div className="w-16 sm:w-20 h-0.5 bg-red-500"></div>
            <div className="w-3 h-3 bg-red-500 rounded-full mx-4"></div>
            <div className="w-16 sm:w-20 h-0.5 bg-red-500"></div>
          </div>

          <h2 className="font-['Poppins',sans-serif] font-bold text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mb-6 tracking-wide drop-shadow-2xl">
            Contact <span className="text-red-400">Us</span>
          </h2>

          <p className="font-['Poppins',sans-serif] text-white/90 text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
            Get in touch with us for any queries, or sponsorship
            opportunities. We'd love to hear from you and make TechX Madras even
            better - together.
          </p>
        </div>

        <div className="mb-20">
          <div className="relative group max-w-6xl mx-auto">
            <div className="absolute -inset-4 bg-gradient-to-br from-white/12 via-gray-500/8 to-white/6 rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition-all duration-400"></div>

            <Card className="relative bg-gradient-to-br from-black/20 via-red-950/15 to-black/20 border-2 border-red-800/40 shadow-[0_20px_50px_rgba(127,29,29,0.4)] backdrop-blur-xl hover:shadow-[0_25px_60px_rgba(127,29,29,0.5)] transition-all duration-500 hover:-translate-y-1 hover:scale-[1.002] rounded-2xl overflow-hidden">
              <CardContent className="p-0">
                <a
                  href="https://www.google.com/maps/place/Sri+Sairam+Institute+of+Technology/@12.9609357,80.0547164,1616m/data=!3m1!1e3!4m14!1m7!3m6!1s0x3a52f51f638ddfbb:0xf3aef7ec7c8979ba!2sSri+Sairam+Institute+of+Technology!8m2!3d12.9606471!4d80.0532325!16s%2Fm%2F010qj3mw!3m5!1s0x3a52f51f638ddfbb:0xf3aef7ec7c8979ba!8m2!3d12.9606471!4d80.0532325!16s%2Fm%2F010qj3mw?entry=ttu&g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open location in Google Maps"
                  className="block"
                >
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      className="w-full h-auto object-cover transition-all duration-500 hover:scale-102 filter brightness-95 contrast-105 hover:brightness-100 hover:contrast-110"
                      alt="Location Map"
                      src="/figmaAssets/image-8-1.png"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-red-950/30 via-transparent to-red-900/15 pointer-events-none"></div>
                  </div>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 mb-12">
          {/* TechX Madras Section */}
          <div className="lg:col-span-1">
            <div className="mb-8">
              <h3 className="font-['Poppins',sans-serif] font-bold text-white text-2xl lg:text-3xl mb-6 drop-shadow-lg">
                TechX Madras
              </h3>
              <p className="font-['Poppins',sans-serif] text-white/90 text-base lg:text-lg leading-relaxed mb-8">
               eXplore, eXcel, eXperience
              </p>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-6">
 <a
                href="https://www.instagram.com/ssit_ieee_cs_society/"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/20"
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} className="text-white text-lg" />
              </a>
              <a
                href="https://www.linkedin.com/company/ieee-computer-society-ssit/"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/20"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} className="text-white text-lg" />
              </a>
              <a
                href="https://www.facebook.com/share/16eHKwaXmz/"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/20"
                aria-label="Facebook"
              >
                <FontAwesomeIcon icon={faFacebook} className="text-white text-lg" />
              </a>
              <a
                href="https://x.com/IEEE_CS_SSIT/media"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/20"
                aria-label="Twitter"
              >
                <FontAwesomeIcon icon={faXTwitter} className="text-white text-lg" />
              </a>
            </div>
          </div>
          <div className="lg:col-span-1">
            <h4 className="font-['Poppins',sans-serif] font-semibold text-white text-xl lg:text-2xl mb-8 drop-shadow-lg">
              QUICK LINKS
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="font-['Poppins',sans-serif] text-white/80 hover:text-white text-base lg:text-lg transition-colors duration-300 hover:translate-x-2 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-1">
            <h4 className="font-['Poppins',sans-serif] font-semibold text-white text-xl lg:text-2xl mb-8 drop-shadow-lg">
              CONTACT
            </h4>
            <div className="space-y-6">
              <div>
                <p className="font-['Poppins',sans-serif] font-semibold text-white text-lg mb-3">
                  IEEE CS Convenor
                </p>
                <p className="font-['Poppins',sans-serif] text-white/80 text-base">
                  Dr B Sreedevi
                  <br />
                  Mr M Parthiban
                </p>
                <br />
                
              </div>
              <div>
                <p className="font-['Poppins',sans-serif] font-semibold text-white text-lg mb-3">
                  IEEE CS Chairpersons
                </p>
                <p className="font-['Poppins',sans-serif] text-white/80 text-base">
                  Charu Dharshana R - 98848 95505
                </p>
                <p className="font-['Poppins',sans-serif] text-white/80 text-base">
                  Parveen Begum T - 95001 77775
                </p>
              </div>
              <div>
                <p className="font-['Poppins',sans-serif] font-semibold text-white text-lg mb-3">
                  Address
                </p>
                <p className="font-['Poppins',sans-serif] text-white/80 text-base leading-relaxed">
                  Sri Sairam Institute of Technology
                  <br />
                  Sai Leo Nagar, West Tambaram, 
                  <br/>
                  Chennai - 600044, Tamil Nadu, India. 
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  {/* <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-red-400 text-base"
                  /> */}
                  <span className="font-['Poppins',sans-serif] text-white/80 text-base">
                    techxmadras25@gmail.com
                    <br />
                 
                    ssitieeesbcomputersociety@gmail.com
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="font-['Poppins',sans-serif] text-white/80 text-sm lg:text-base">
                © 2025 TechX Madras. All rights reserved.
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="font-['Poppins',sans-serif] text-white/70 text-sm text-center md:text-right">
                Designed by TechXMadras Tech Team
              </p>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                <span className="font-['Poppins',sans-serif] text-white/60 text-xs">
                  IEEE SSIT SBC
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style >
        {`
          .animate-bubble1 {
            animation: bubbleAppearMove1 12s infinite
              cubic-bezier(0.4, 0, 0.2, 1) alternate;
          }
          .animate-bubble2 {
            animation: bubbleAppearMove2 10s infinite
              cubic-bezier(0.4, 0, 0.2, 1) alternate;
          }
          .animate-bubble3 {
            animation: bubbleAppearMove3 14s infinite
              cubic-bezier(0.4, 0, 0.2, 1) alternate;
          }
          .animate-bubble4 {
            animation: bubbleAppearMove4 16s infinite
              cubic-bezier(0.4, 0, 0.2, 1) alternate;
          }
          .animate-bubble5 {
            animation: bubbleAppearMove5 18s infinite
              cubic-bezier(0.4, 0, 0.2, 1) alternate;
          }
          .animate-bean1 {
            animation: beanAppearMove1 13s infinite cubic-bezier(0.4, 0, 0.2, 1)
              alternate;
          }
          .animate-bean2 {
            animation: beanAppearMove2 11s infinite cubic-bezier(0.4, 0, 0.2, 1)
              alternate;
          }

          @keyframes bubbleAppearMove1 {
            0% {
              opacity: 0;
              transform: translateY(0) scale(0.7) rotateY(0deg);
            }
            10% {
              opacity: 1;
              transform: translateY(0) scale(1) rotateY(10deg);
            }
            50% {
              opacity: 1;
              transform: translateY(-40px) scale(1.15) rotateY(25deg);
              filter: drop-shadow(0 8px 32px #80000088);
            }
            90% {
              opacity: 1;
            }
            100% {
              opacity: 0;
              transform: translateY(0) scale(0.7) rotateY(0deg);
            }
          }
          @keyframes bubbleAppearMove2 {
            0% {
              opacity: 0;
              transform: translateY(0) scale(0.7) rotateX(0deg);
            }
            10% {
              opacity: 1;
              transform: translateY(0) scale(1) rotateX(10deg);
            }
            50% {
              opacity: 1;
              transform: translateY(30px) scale(0.95) rotateX(25deg);
              filter: drop-shadow(0 8px 32px #80000088);
            }
            90% {
              opacity: 1;
            }
            100% {
              opacity: 0;
              transform: translateY(0) scale(0.7) rotateX(0deg);
            }
          }
          @keyframes bubbleAppearMove3 {
            0% {
              opacity: 0;
              transform: translateY(0) scale(0.7) rotateZ(0deg);
            }
            10% {
              opacity: 1;
              transform: translateY(0) scale(1) rotateZ(10deg);
            }
            50% {
              opacity: 1;
              transform: translateY(-60px) scale(1.2) rotateZ(25deg);
              filter: drop-shadow(0 8px 32px #80000088);
            }
            90% {
              opacity: 1;
            }
            100% {
              opacity: 0;
              transform: translateY(0) scale(0.7) rotateZ(0deg);
            }
          }
          @keyframes bubbleAppearMove4 {
            0% {
              opacity: 0;
              transform: translateY(0) scale(0.7) rotateY(0deg);
            }
            10% {
              opacity: 1;
              transform: translateY(0) scale(1) rotateY(10deg);
            }
            50% {
              opacity: 1;
              transform: translateY(-30px) scale(1.1) rotateY(20deg);
              filter: drop-shadow(0 8px 32px #80000088);
            }
            90% {
              opacity: 1;
            }
            100% {
              opacity: 0;
              transform: translateY(0) scale(0.7) rotateY(0deg);
            }
          }
          @keyframes bubbleAppearMove5 {
            0% {
              opacity: 0;
              transform: translateY(0) scale(0.7) rotateX(0deg);
            }
            10% {
              opacity: 1;
              transform: translateY(0) scale(1) rotateX(10deg);
            }
            50% {
              opacity: 1;
              transform: translateY(40px) scale(1.2) rotateX(20deg);
              filter: drop-shadow(0 8px 32px #80000088);
            }
            90% {
              opacity: 1;
            }
            100% {
              opacity: 0;
              transform: translateY(0) scale(0.7) rotateX(0deg);
            }
          }
          @keyframes beanAppearMove1 {
            0% {
              opacity: 0;
              transform: translateX(0) rotate(-10deg) scale(0.7);
            }
            10% {
              opacity: 1;
              transform: translateX(0) rotate(-10deg) scale(1);
            }
            50% {
              opacity: 1;
              transform: translateX(-30px) rotate(20deg) scale(1.1);
              filter: drop-shadow(0 8px 32px #80000088);
            }
            90% {
              opacity: 1;
            }
            100% {
              opacity: 0;
              transform: translateX(0) rotate(-10deg) scale(0.7);
            }
          }
          @keyframes beanAppearMove2 {
            0% {
              opacity: 0;
              transform: translateY(0) rotate(0deg) scale(0.7);
            }
            10% {
              opacity: 1;
              transform: translateY(0) rotate(0deg) scale(1);
            }
            50% {
              opacity: 1;
              transform: translateY(40px) rotate(25deg) scale(1.1);
              filter: drop-shadow(0 8px 32px #80000088);
            }
            90% {
              opacity: 1;
            }
            100% {
              opacity: 0;
              transform: translateY(0) rotate(0deg) scale(0.7);
            }
          }
        `}
      </style>
    </section>
  );
};
