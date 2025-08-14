
import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function UpcomingEvents() {
  const containerRef = useRef(null);
  const mobileRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const timeout = setTimeout(() => {
      document.body.style.overflow = "auto";
    }, 500);
    return () => {
      clearTimeout(timeout);
      document.body.style.overflow = "auto";
    };
  }, []);

  // Desktop scroll animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const secondY = useTransform(scrollYProgress, [0.1, 0.35], [900, 0]);
  const thirdY = useTransform(scrollYProgress, [0.2, 0.45], [1300, 0]);

  // Mobile scroll animations
  const { scrollYProgress: mobileProgress } = useScroll({
    target: mobileRef,
    offset: ["start start", "end start"],
  });

  const mSecondY = useTransform(mobileProgress, [0.12, 0.28], [600, 0]);
  const mThirdY = useTransform(mobileProgress, [0.22, 0.38], [1000, 0]);

//   // Button animation for mobile
// const buttonOpacity = useTransform(mobileProgress, [0.38, 0.42], [0, 1]);
// const buttonY = useTransform(mobileProgress, [0.38, 0.42], [50, 0]);

  const events = [
    {
      id: 1,
      title: "Community Iftar",
      date: "August 15, 2025",
      description: "Join us for a blessed evening of breaking bread together.",
      src: "/grid/six-four.png",
    },
    {
      id: 2,
      title: "Youth Leadership Summit",
      date: "September 5, 2025",
      description: "Empowering tomorrow's leaders today.",
      src: "/grid/first-four.png",
    },
    {
      id: 3,
      title: "Charity Drive",
      date: "October 10, 2025",
      description: "Extending our hand to those who need it most.",
      src: "/grid/four-one.png",
    },
  ];

  return (
    <div
      className="relative w-full overflow-visible bg-cover bg-center"
      style={{ backgroundImage: "url('/grid/comingevents-back.png')" }}
    >
      {/* Top Blur */}
      <div
        className="absolute"
        style={{
          width: "100%",
          maxWidth: "100vw",
          height: "250px",
          top: "-80px",
          left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: "#F1E8DA",
          filter: "blur(100px)",
          zIndex: 1,
        }}
      />

      <div className="relative z-10 top-0">
        {/* Heading + Text */}
        <div className="relative max-w-[1750px] mx-auto px-6 mt-0 pb-[40px]">
          <div className="flex flex-col md:flex-row justify-between items-start gap-5 mb-30">
            <h1
              className="text-[35px] sm:text-[64px] text-gray-800 leading-[1.2] ml-0 sm:ml-6 mt-[80px] sm:mt-[150px]"
              style={{ fontFamily: "Orpheus Pro, serif" }}
            >
              Upcoming Events
            </h1>

           <div className="text-start max-w-[850px] mr-0 sm:mr-6 mt-6 sm:mt-20">
  <p
    className="leading-relaxed mb-6 text-[15px] sm:text-[20px] lg:text-[22px]"
    style={{
      fontFamily: "Times New Roman, serif",
      fontWeight: 350,
    }}
  >
    At United Ummah, every gathering is more than just an event —
    it’s a chance to strengthen bonds, share blessings, and grow
    together in faith. From inspiring lectures and vibrant youth
    activities to community iftars and charity drives, our events
    are thoughtfully crafted to bring hearts closer and uplift
    every member of our Ummah.
  </p>

  <p
    className="leading-relaxed text-[15px] sm:text-[20px] lg:text-[22px]"
    style={{
      fontFamily: "Times New Roman, serif",
      fontWeight: 350,
    }}
  >
    Come as you are, bring your family and friends, and be part of
    moments that create memories — and sometimes questionable chai
    art.
  </p>
</div>

          </div>
        </div>

        {/* DESKTOP Sticky Cards */}
        <div className="hidden sm:block">
          <div ref={containerRef} className="relative h-[180vh]">
            <div className="sticky top-0 h-screen flex items-center justify-center z-20">
              <div className="flex justify-center gap-x-12 items-start">
                {/* First Card */}
                <div className="flex flex-col items-start w-[516px]">
                  <div
                    className="w-full h-[600px] overflow-hidden shadow-lg"
                    style={{
                      backgroundImage: `url(${events[0].src})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      borderRadius: "210px 210px 0 0",
                    }}
                  ></div>
                  <div className="mt-4 w-full px-3">
                    <h2
                      className="text-gray-800 mb-1"
                      style={{
                        fontFamily: "Times New Roman, serif",
                        fontWeight: 700,
                        fontSize: "40px",
                      }}
                    >
                      {events[0].title}
                    </h2>
                    <p
                      className="text-gray-600 text-right mb-2"
                      style={{
                        fontFamily: "Times New Roman, serif",
                        fontWeight: 500,
                        fontSize: "26px",
                      }}
                    >
                      {events[0].date}
                    </p>
                    <p
                      className="text-gray-700"
                      style={{
                        fontFamily: "Times New Roman, serif",
                        fontWeight: 350,
                        fontSize: "18.75px",
                      }}
                    >
                      {events[0].description}
                    </p>
                  </div>
                </div>

                {/* Second Card */}
                <motion.div
                  className="flex flex-col items-start w-[516px]"
                  style={{ y: secondY }}
                >
                  <div
                    className="w-full h-[600px] overflow-hidden shadow-lg"
                    style={{
                      backgroundImage: `url(${events[1].src})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      borderRadius: "210px 210px 0 0",
                    }}
                  ></div>
                  <div className="mt-4 w-full px-3">
                    <h2
                      className="text-gray-800 mb-1"
                      style={{
                        fontFamily: "Times New Roman, serif",
                        fontWeight: 700,
                        fontSize: "40px",
                      }}
                    >
                      {events[1].title}
                    </h2>
                    <p
                      className="text-gray-600 text-right mb-2"
                      style={{
                        fontFamily: "Times New Roman, serif",
                        fontWeight: 500,
                        fontSize: "26px",
                      }}
                    >
                      {events[1].date}
                    </p>
                    <p
                      className="text-gray-700"
                      style={{
                        fontFamily: "Times New Roman, serif",
                        fontWeight: 350,
                        fontSize: "18.75px",
                      }}
                    >
                      {events[1].description}
                    </p>
                  </div>
                </motion.div>

                {/* Third Card */}
                <motion.div
                  className="flex flex-col items-start w-[516px]"
                  style={{ y: thirdY }}
                >
                  <div
                    className="w-full h-[600px] overflow-hidden shadow-lg"
                    style={{
                      backgroundImage: `url(${events[2].src})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      borderRadius: "210px 210px 0 0",
                    }}
                  ></div>
                  <div className="mt-4 w-full px-3">
                    <h2
                      className="text-gray-800 mb-1"
                      style={{
                        fontFamily: "Times New Roman, serif",
                        fontWeight: 700,
                        fontSize: "40px",
                      }}
                    >
                      {events[2].title}
                    </h2>
                    <p
                      className="text-gray-600 text-right mb-2"
                      style={{
                        fontFamily: "Times New Roman, serif",
                        fontWeight: 500,
                        fontSize: "26px",
                      }}
                    >
                      {events[2].date}
                    </p>
                    <p
                      className="text-gray-700"
                      style={{
                        fontFamily: "Times New Roman, serif",
                        fontWeight: 350,
                        fontSize: "18.75px",
                      }}
                    >
                      {events[2].description}
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Desktop Button */}
          <div className="flex justify-center z-30 relative mt-10">
            <button className="bg-[#90BC5D] text-black px-8 py-4 text-lg rounded-md transition-colors duration-300 hover:bg-[#A67C52]">
              VIEW OUR EVENTS
            </button>
          </div>
        </div>
{/* MOBILE Stacked Scroll Animation */}
<div className="block sm:hidden px-4 pl-10">
  <div ref={mobileRef} className="relative h-[150vh]"> {/* Reduced from 200vh */}
    <div className="sticky top-0 h-screen flex flex-col items-center justify-center">
      {/* First Card */}
      <div className="absolute top-0 w-full bg-[#F1E8DA]">
        <div
          className="w-full h-[350px] overflow-hidden shadow-lg"
          style={{
            backgroundImage: `url(${events[0].src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "210px 210px 0 0",
          }}
        ></div>
        <div className="mt-4 px-3 bg-[#F1E8DA]">
          <h2 className="text-gray-800 mb-1 text-[24px] font-bold">
            {events[0].title}
          </h2>
          <p className="text-gray-600 text-right mb-2 text-[20px]">
            {events[0].date}
          </p>
          <p className="text-gray-700 text-[16px]">{events[0].description}</p>
        </div>
      </div>

      {/* Second Card */}
      <motion.div className="absolute top-0 w-full" style={{ y: mSecondY }}>
        <div
          className="w-full h-[350px] overflow-hidden shadow-lg bg-[#F1E8DA]"
          style={{
            backgroundImage: `url(${events[1].src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "210px 210px 0 0",
          }}
        ></div>
        <div className="mt-4 px-3 bg-[#F1E8DA]">
          <h2 className="text-gray-800 mb-1 text-[24px] font-bold">
            {events[1].title}
          </h2>
          <p className="text-gray-600 text-right mb-2 text-[20px]">
            {events[1].date}
          </p>
          <p className="text-gray-700 text-[16px]">{events[1].description}</p>
        </div>
      </motion.div>

      {/* Third Card */}
      <motion.div className="absolute top-0 w-full" style={{ y: mThirdY }}>
        <div
          className="w-full h-[350px] overflow-hidden shadow-lg bg-[#F1E8DA]"
          style={{
            backgroundImage: `url(${events[2].src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "210px 210px 0 0",
          }}
        ></div>
        <div className="mt-4 px-3 bg-[#F1E8DA] pb-8"> {/* Added pb-8 for bottom padding */}
          <h2 className="text-gray-800 mb-1 text-[24px] font-bold">
            {events[2].title}
          </h2>
          <p className="text-gray-600 text-right mb-2 text-[20px]">
            {events[2].date}
          </p>
          <p className="text-gray-700 text-[16px]">{events[2].description}</p>
        </div>
          {/* Button - Now appears immediately after content */}
  <div className="flex justify-center mt-10"> {/* Changed from motion.div */}
    <button className="bg-[#90BC5D] text-black px-8 py-4 text-lg rounded-md transition-colors duration-300 hover:bg-[#A67C52]">
      VIEW OUR EVENTS
    </button>
  </div>
      </motion.div>
    </div>
  </div>


</div>


        <div className=" sm:h-[50px]" />
       </div>

      {/* Bottom Blur */}
     {/* Bottom Blur */}
{/* Bottom Blur */}
{/* <div
  className="absolute pointer-events-none"
  style={{
    width: "100%",
    maxWidth: "100vw",
    height: "400px",            // zyada height taake neeche tak jaye
    bottom: "-350px",           // neeche push kiya
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "#F1E8DA",
    filter: "blur(120px)",      // thoda zyada blur for smooth fade
    zIndex: 10,
  }}
/>
</div> */}
</div>
  );
}
