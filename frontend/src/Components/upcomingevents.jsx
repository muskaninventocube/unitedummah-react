import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

export default function UpcomingEvents() {
  const containerRef = useRef(null);
  const [allCardsVisible, setAllCardsVisible] = useState(false);
  const [scrollLock, setScrollLock] = useState(true);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Calculate vertical offsets (20% and 40% of viewport height)
  const viewportHeight = typeof window !== 'undefined' ? window.innerHeight : 800;
  const secondCardOffset = viewportHeight * 0.2;  // 20% of viewport
  const thirdCardOffset = viewportHeight * 0.4;   // 40% of viewport

  // Card animations
  const firstCardY = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const secondCardY = useTransform(scrollYProgress, [0, 1], [secondCardOffset, 0]);
  const thirdCardY = useTransform(scrollYProgress, [0, 1], [thirdCardOffset, 0]);

  // Track scroll progress
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest >= 0.99) {
      setAllCardsVisible(true);
      setScrollLock(false);
    } else {
      setAllCardsVisible(false);
      setScrollLock(true);
    }
  });

  // Lock scroll when cards aren't aligned
  useEffect(() => {
    if (scrollLock) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [scrollLock]);

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
    <div className="relative w-full" style={{ overflow: scrollLock ? 'hidden' : 'auto' }}>
      
      {/* Background elements */}
      <div className="absolute w-[2500px] h-[250px] top-[-180px] left-1/2 transform -translate-x-1/2 bg-[#F1E8DA] filter blur-[100px] z-1" />

      <div className="relative z-10 bg-cover bg-center" style={{ backgroundImage: "url('/grid/back-comingevents.png')" }}>
        
        {/* Text Section */}
        <div className="max-w-[1750px] mx-auto px-6 mt-[100px] pb-[40px]">
          <div className="flex flex-col md:flex-row justify-between items-start gap-5 mt-10">
            <h1 className="text-[64px] text-gray-800 leading-[1.2] ml-6 mt-25" style={{ fontFamily: "Orpheus Pro, serif" }}>
              Upcoming Events
            </h1>
            <div className="text-end max-w-[850px] mr-6 mt-15">
              <p className="leading-relaxed mb-6" style={{ fontFamily: "Times New Roman, serif", fontWeight: 400, fontSize: "21.75px" }}>
                At United Ummah, every gathering is more than just an event...
              </p>
            </div>
          </div>
        </div>

        {/* Scroll Controlled Cards */}
        <div ref={containerRef} className="relative h-[300vh]">
          <div className="sticky top-0 h-screen flex flex-col items-center justify-center z-20">
            <div className="flex justify-center gap-x-12 mb-[80px]">
              {/* First Card (always visible) */}
              <motion.div className="flex flex-col items-start w-[516px]" style={{ y: firstCardY }}>
                <div className="w-full h-[600px] overflow-hidden shadow-lg" style={{
                  backgroundImage: `url(${events[0].src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "210px 210px 0 0",
                }}/>
                <div className="mt-4 w-full px-3">
                  <h2 className="text-gray-800 mb-1" style={{ fontFamily: "Times New Roman, serif", fontWeight: 700, fontSize: "32px" }}>
                    {events[0].title}
                  </h2>
                  <p className="text-gray-600 text-right mb-2" style={{ fontFamily: "Times New Roman, serif", fontWeight: 500, fontSize: "24px" }}>
                    {events[0].date}
                  </p>
                  <p className="text-gray-700" style={{ fontFamily: "Times New Roman, serif", fontWeight: 400, fontSize: "15.75px" }}>
                    {events[0].description}
                  </p>
                </div>
              </motion.div>

              {/* Second Card (20% below first) */}
              <motion.div className="flex flex-col items-start w-[516px]" style={{ y: secondCardY }}>
                <div className="w-full h-[600px] overflow-hidden shadow-lg" style={{
                  backgroundImage: `url(${events[1].src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "210px 210px 0 0",
                }}/>
                <div className="mt-4 w-full px-3">
                  <h2 className="text-gray-800 mb-1" style={{ fontFamily: "Times New Roman, serif", fontWeight: 700, fontSize: "32px" }}>
                    {events[1].title}
                  </h2>
                  <p className="text-gray-600 text-right mb-2" style={{ fontFamily: "Times New Roman, serif", fontWeight: 500, fontSize: "24px" }}>
                    {events[1].date}
                  </p>
                  <p className="text-gray-700" style={{ fontFamily: "Times New Roman, serif", fontWeight: 400, fontSize: "15.75px" }}>
                    {events[1].description}
                  </p>
                </div>
              </motion.div>

              {/* Third Card (40% below first) */}
              <motion.div className="flex flex-col items-start w-[516px]" style={{ y: thirdCardY }}>
                <div className="w-full h-[600px] overflow-hidden shadow-lg" style={{
                  backgroundImage: `url(${events[2].src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "210px 210px 0 0",
                }}/>
                <div className="mt-4 w-full px-3">
                  <h2 className="text-gray-800 mb-1" style={{ fontFamily: "Times New Roman, serif", fontWeight: 700, fontSize: "32px" }}>
                    {events[2].title}
                  </h2>
                  <p className="text-gray-600 text-right mb-2" style={{ fontFamily: "Times New Roman, serif", fontWeight: 500, fontSize: "24px" }}>
                    {events[2].date}
                  </p>
                  <p className="text-gray-700" style={{ fontFamily: "Times New Roman, serif", fontWeight: 400, fontSize: "15.75px" }}>
                    {events[2].description}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* View All Button - Only shows when all cards are aligned */}
            {allCardsVisible && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="mt-12"
              >
                <button className="bg-[#8BC34A] text-[#0D1B2A] px-8 py-3 font-bold shadow-md hover:bg-[#F4A261] transition-colors">
                  VIEW ALL EVENTS
                </button>
              </motion.div>
            )}
          </div>
        </div>

        <div className="h-[400px]" />
      </div>

      <div className="absolute w-[2500px] h-[250px] bottom-[-180px] left-1/2 transform -translate-x-1/2 bg-[#F1E8DA] filter blur-[100px] z-1" />
    </div>
  );
}