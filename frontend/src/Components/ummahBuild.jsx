import React from 'react';

const UmmahSection = () => {
  return (

    <div className="bg-[#F1E8DA] py-12 px-4 text-center font-serif">
         {/* Top Shadow */}
      <div
        className="absolute"
        style={{
          width: '1920px',
          height: '250px',
          top: '-180px',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: '#F1E8DA',
          filter: 'blur(100px)',
          zIndex: 1,
        }}
      />
      {/* Heading */}
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-semibold">Ready to make a difference?</h1>
        <h2 className="text-lg md:text-xl mt-2">Let's build a stronger Ummah, together.</h2>
      </div>

      {/* Image with Arch */}
      <div className="relative w-full px-[5px] sm:px-[5px] md:px-[5px] mt-10">
        <div className="relative w-full aspect-[14/5]">
          {/* Desktop (5 arches) */}
          <svg
            className="absolute inset-0 w-full h-full hidden md:block"
            viewBox="0 0 2000 700"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <clipPath id="arched-clip-desktop" clipPathUnits="objectBoundingBox">
                <path
                  d="M0,1 
                    L0,0.25 
                    A0.1,0.25 0 0,1 0.1,0 
                    A0.1,0.25 0 0,1 0.2,0.25 
                    A0.1,0.25 0 0,1 0.3,0 
                    A0.1,0.25 0 0,1 0.4,0.25 
                    A0.1,0.25 0 0,1 0.5,0 
                    A0.1,0.25 0 0,1 0.6,0.25 
                    A0.1,0.25 0 0,1 0.7,0 
                    A0.1,0.25 0 0,1 0.8,0.25 
                    A0.1,0.25 0 0,1 0.9,0 
                    A0.1,0.25 0 0,1 1,0.25 
                    L1,1 Z"
                />
              </clipPath>
            </defs>
            <image
              href="/images/pr.jpg"
              width="2000"
              height="700"
              clipPath="url(#arched-clip-desktop)"
              preserveAspectRatio="xMidYMid slice"
            />
          </svg>

          {/* Mobile (3 arches) */}
          <svg
            className="absolute inset-0 w-full h-full block md:hidden"
            viewBox="0 0 2000 700"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <clipPath id="arched-clip-mobile" clipPathUnits="objectBoundingBox">
               <path
                  d="M0,1 
                    L0,0.25 
                    A0.166,0.25 0 0,1 0.166,0 
                    A0.166,0.25 0 0,1 0.333,0.25 
                    A0.166,0.25 0 0,1 0.5,0 
                    A0.166,0.25 0 0,1 0.666,0.25 
                    A0.166,0.25 0 0,1 0.833,0 
                    A0.166,0.25 0 0,1 1,0.25 
                    L1,1 Z"
                />
              </clipPath>
            </defs>
            <image
              href="/images/pr.jpg"
              width="2000"
              height="700"
              clipPath="url(#arched-clip-mobile)"
              preserveAspectRatio="xMidYMid slice"
            />
          </svg>

          {/* Become a Member Button */}
          <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-green-700 text-white px-5 py-2 text-sm font-medium rounded hover:bg-[#A0522D] transition z-10">
            Become a Member
          </button>
        </div>
      </div>

      {/* Bottom Newsletter Row */}
      <div className="mt-6 flex flex-col sm:flex-row justify-between items-center max-w-5xl mx-auto gap-4 text-left text-xs sm:text-sm text-gray-700">
        <p>
          Stay in the loop! Sign up for our monthly newsletter — promise, no spam. Just good vibes.
        </p>
        <button className="border border-black px-4 py-2 text-sm font-medium rounded hover:bg-gray-100 transition">
          SUBSCRIBE TO OUR NEWSLETTER
        </button>
      </div>
    </div>
  );
};

export default UmmahSection;
