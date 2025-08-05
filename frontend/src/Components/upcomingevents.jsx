import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function UpcomingEvents() {
  // 1. Define scroll container ref (MUST be on a positioned parent)
  const scrollContainerRef = useRef(null);

  // Auto-scroll lock (optional)
  
useEffect(() => {
  // Optional: briefly lock scroll for animations (0.5s)
  document.body.style.overflow = "hidden";

  const timeout = setTimeout(() => {
    document.body.style.overflow = "auto";
  }, 500); // ✅ only 0.5 second

  return () => {
    clearTimeout(timeout);
    document.body.style.overflow = "auto";
  };
}, []);


  // 2. Configure scroll tracking (NOW ERROR-FREE)
  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
    offset: ["start start", "end start"],
  });

  // Animation transforms
  const secondY = useTransform(scrollYProgress, [0.1, 0.35], [900, 0]);
  const thirdY = useTransform(scrollYProgress, [0.2, 0.45], [1300, 0]);

  // Event data
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
    <div className="relative w-full overflow-visible bg-[#F1E8DA] min-h-screen">
      {/* Top Blur Effect */}
      <div className="absolute w-[2500px] h-[250px] top-[-180px] left-1/2 transform -translate-x-1/2 bg-[#F1E8DA] blur-[100px] z-[1]" />

      {/* Main Content */}
      <div className="relative z-10">
        {/* Header Section */}
        <div className="max-w-[1750px] mx-auto px-6 mt-[100px] pb-[40px]">
          <div className="flex flex-col md:flex-row justify-between items-start gap-5 mt-10">
            <h1 className="text-[64px] text-gray-800 leading-[1.2] ml-6 font-[Orpheus Pro, serif]">
              Upcoming Events
            </h1>
            <div className="text-end max-w-[850px] mr-6">
              <p className="leading-relaxed mb-6 font-[Times New Roman, serif] text-[21.75px]">
                At United Ummah, every gathering is more than just an event —
                it's a chance to strengthen bonds, share blessings, and grow
                together in faith...
              </p>
              <p className="leading-relaxed font-[Times New Roman, serif] text-[21.75px]">
                Come as you are, bring your family and friends, and be part of
                moments that create memories.
              </p>
            </div>
          </div>
        </div>

        {/* **FIXED SCROLL CONTAINER** (Now works with Framer Motion) */}
        <div
          ref={scrollContainerRef}
          className="relative w-full h-[220vh] overflow-visible"
        >
          {/* Sticky Cards Container */}
          <div className="sticky top-0 h-screen flex items-center justify-center">
            <div className="flex justify-center gap-x-12 items-start">
              {/* Card 1 (Static) */}
              <div className="flex flex-col items-start w-[516px]">
                <div
                  className="w-full h-[600px] overflow-hidden shadow-lg"
                  style={{
                    backgroundImage: `url(${events[0].src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "210px 210px 0 0",
                  }}
                />
                <div className="mt-4 w-full px-3">
                  <h2 className="text-gray-800 mb-1 font-[Times New Roman, serif] font-bold text-[40px]">
                    {events[0].title}
                  </h2>
                  <p className="text-gray-600 text-right mb-2 font-[Times New Roman, serif] font-medium text-[27px]">
                    {events[0].date}
                  </p>
                  <p className="text-gray-700 font-[Times New Roman, serif] text-[18.75px]">
                    {events[0].description}
                  </p>
                </div>
              </div>

              {/* Card 2 (Animated) */}
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
                />
                <div className="mt-4 w-full px-3">
                  <h2 className="text-gray-800 mb-1 font-[Times New Roman, serif] font-bold text-[40px]">
                    {events[1].title}
                  </h2>
                  <p className="text-gray-600 text-right mb-2 font-[Times New Roman, serif] font-medium text-[27px]">
                    {events[1].date}
                  </p>
                  <p className="text-gray-700 font-[Times New Roman, serif] text-[18.75px]">
                    {events[1].description}
                  </p>
                </div>
              </motion.div>

              {/* Card 3 (Animated) */}
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
                />
                <div className="mt-4 w-full px-3">
                  <h2 className="text-gray-800 mb-1 font-[Times New Roman, serif] font-bold text-[40px]">
                    {events[2].title}
                  </h2>
                  <p className="text-gray-600 text-right mb-2 font-[Times New Roman, serif] font-medium text-[27px]">
                    {events[2].date}
                  </p>
                  <p className="text-gray-700 font-[Times New Roman, serif] text-[18.75px]">
                    {events[2].description}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-12 z-30 relative">
          <button className="bg-[#90BC5D] text-black px-8 py-4 text-lg rounded-md hover:bg-[#A67C52] transition-colors">
            VIEW OUR EVENTS
          </button>
        </div>

        {/* Bottom Spacer */}
        <div className="h-[400px]" />
      </div>

      {/* Bottom Blur Effect */}
      <div className="absolute w-[2500px] h-[250px] bottom-[-180px] left-1/2 transform -translate-x-1/2 bg-[#F1E8DA] blur-[100px] z-[1]" />
    </div>
  );
}