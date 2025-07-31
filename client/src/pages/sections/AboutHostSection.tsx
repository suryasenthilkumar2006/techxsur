import React from "react";

export const AboutHostSection = (): JSX.Element => {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">

      <div className="absolute inset-0 w-full h-full">
        <img
          className="w-full h-full object-cover opacity-40"
          alt="Background texture"
          src="/figmaAssets/rectangle-14.png"
        />
      </div>

 
      <div className="absolute inset-0 bg-black/50 z-0"></div>

 
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16 lg:py-20">
  
        <h2 className="font-sans font-bold text-white text-4xl sm:text-5xl lg:text-6xl mb-12 lg:mb-16 text-center drop-shadow-2xl">
          The Host Institution
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-start max-w-7xl mx-auto">
   
          <div className="flex flex-col space-y-8 lg:space-y-10">
 
            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 bg-black/20 p-6 lg:p-8 rounded-2xl backdrop-blur-sm border border-white/10 shadow-2xl">

                      <div className="grid place-items-center bg-black/20 p-6 lg:p-8 rounded-2xl backdrop-blur-sm border border-white/10 shadow-2xl">
                           <img
                           src="/figmaAssets/cs society achievement images.jpg"
                              alt="CS Society Achievement"
                           className="w-full max-w-xs sm:max-w-sm lg:max-w-md rounded-lg shadow-lg"
                          />
                      </div>    
                               
              {/* <img
                className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain drop-shadow-xl flex-shrink-0"
                alt="Institution logo"
                src="/figmaAssets/ellipse-4.png"
              />
              <div className="text-center sm:text-left">
                <h3 className="font-sans font-bold text-white text-2xl sm:text-3xl lg:text-4xl leading-tight drop-shadow-lg">
                  Sri Sai Ram
                  <br />
                  Institute of Technology
                </h3>
                <img
                className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain drop-shadow-xl flex-shrink-0"
                alt="Institution logo"
                src="/figmaAssets/ellipse-4.png"
              />
              </div>  */}
            </div> 

  
             
            {/* <div className="bg-black/25 rounded-2xl p-6 lg:p-8 border border-white/10 shadow-xl backdrop-blur-sm">
              <div className="text-center">
                <span className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-green-400 mb-3 block drop-shadow-lg">
                  1527+
                </span>
                <span className="text-white text-lg sm:text-xl lg:text-2xl font-semibold mb-2 block">
                  Placement Offers (2025 Batch)
                </span>
                <span className="text-white/80 text-base lg:text-lg">
                  1000+ offers every year
                </span>
              </div>
            </div> */}

            {/* <div className="bg-black/20 rounded-2xl p-6 lg:p-8 border border-white/10 shadow-xl backdrop-blur-sm">
              <h4 className="text-white text-lg sm:text-xl font-semibold mb-6 text-center">
                Top Recruiting Partners
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 lg:gap-6">
                <div className="bg-white rounded-lg p-3 lg:p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img
                    src="https://sairamit.edu.in/wp-content/uploads/2023/11/microsoft-logo.png"
                    alt="Microsoft"
                    className="h-8 sm:h-10 lg:h-12 w-auto mx-auto object-contain"
                  />
                </div>
                <div className="bg-white rounded-lg p-3 lg:p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img
                    src="https://sairamit.edu.in/wp-content/uploads/2023/11/oracle-logo.png"
                    alt="Oracle"
                    className="h-8 sm:h-10 lg:h-12 w-auto mx-auto object-contain"
                  />
                </div>
                <div className="bg-white rounded-lg p-3 lg:p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img
                    src="https://sairamit.edu.in/wp-content/uploads/2023/11/tcs-bot-logo.png"
                    alt="TCS"
                    className="h-8 sm:h-10 lg:h-12 w-auto mx-auto object-contain"
                  />
                </div>
                <div className="bg-white rounded-lg p-3 lg:p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img
                    src="https://sairamit.edu.in/wp-content/uploads/2023/11/vmware-logo.png"
                    alt="VMware"
                    className="h-8 sm:h-10 lg:h-12 w-auto mx-auto object-contain"
                  />
                </div>
                <div className="bg-white rounded-lg p-3 lg:p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img
                    src="https://www.pngplay.com/wp-content/uploads/3/Amazon-Web-Services-AWS-Logo-Transparent-PNG.png"
                    alt="AWS"
                    className="h-8 sm:h-10 lg:h-12 w-auto mx-auto object-contain"
                  />
                </div>
                <div className="bg-white rounded-lg p-3 lg:p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img
                    src="https://sairamit.edu.in/wp-content/uploads/2023/11/cisco-logo.png"
                    alt="Cisco"
                    className="h-8 sm:h-10 lg:h-12 w-auto mx-auto object-contain"
                  />
                </div>
              </div>
            </div>  */}
          </div>

          <div className="flex flex-col space-y-6 lg:space-y-8">
            <div className="bg-black/20 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 lg:p-8 border border-white/10 shadow-xl hover:bg-black/25 transition-colors duration-300">
              <p className="font-sans text-white text-base sm:text-lg lg:text-xl leading-relaxed lg:leading-loose">
                Sri Sairam Institute of Technology, Chennai, affiliated with
                Anna University and accredited with an 'A+' grade by NAAC and
                NBA, is a premier engineering college known for academic
                excellence and innovation.
              </p>
            </div>

            <div className="bg-black/20 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 lg:p-8 border border-white/10 shadow-xl hover:bg-black/25 transition-colors duration-300">
              <p className="font-sans text-white text-base sm:text-lg lg:text-xl leading-relaxed lg:leading-loose">
                Through platforms like Ideathon, Solveathon, Innovathon, and
                Inspirathon, and initiatives like the Sairam Techno Incubation
                Foundation, it has supported over 85 startups in robotics,
                agriculture, healthcare, and defence.
              </p>
            </div>

            <div className="bg-black/20 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 lg:p-8 border border-white/10 shadow-xl hover:bg-black/25 transition-colors duration-300">
              <p className="font-sans text-white text-base sm:text-lg lg:text-xl leading-relaxed lg:leading-loose">
                Empowering students to build real-world solutions aligned with
                the UN Sustainable Development Goals (SDGs).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
