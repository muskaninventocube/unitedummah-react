import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function UpcomingEvents() {
  const containerRef = useRef(null);

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

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const secondY = useTransform(scrollYProgress, [0.1, 0.35], [900, 0]);
  const thirdY = useTransform(scrollYProgress, [0.2, 0.45], [1300, 0]);

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

      <div
        className="absolute"
        style={{
          width: "100%",
maxWidth: "100vw",

          height: "250px",
          top: "-280px",
          left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: "#F1E8DA",
          filter: "blur(100px)",
          zIndex: 1,
        }}
      />

      {/* 🧾 Main Section (Background color only) */}
      <div className="relative z-10 top-0">
        {/* 📝 Text Block */}
    <div className="relative max-w-[1750px] mx-auto px-6 mt-[200px] pb-[40px]">


 
 

          <div className="flex flex-col md:flex-row justify-between items-start gap-5 mb-30">
            <h1
             className="text-[64px] text-gray-800 leading-[1.2] ml-6 mt-[150px]"
              style={{ fontFamily: "Orpheus Pro, serif" }}
            >
              Upcoming Events
            </h1>
            <div className="text-start max-w-[850px] mr-6 mt-20">
              <p
                className="leading-relaxed mb-6 mt-20"
                style={{
                  fontFamily: "Times New Roman, serif",
                  fontWeight: 400,
                  fontSize: "21.75px",
                }}
              >
           At United Ummah, every gathering is more than just an event — it’s a chance to strengthen bonds, share blessings, and grow together in faith. From inspiring lectures and vibrant youth activities to community iftars and charity drives, our events are thoughtfully crafted to bring hearts closer and uplift every member of our Ummah.
              </p>
              <p
                className="leading-relaxed"
                style={{
                  fontFamily: "Times New Roman, serif",
                  fontWeight: 400,
                  fontSize: "21.75px",
                }}
              >
                Come as you are, bring your family and friends, and be part of
                moments that create memories — and sometimes questionable chai
                art.
              </p>
            </div>
          </div>
        </div>

        {/* 🎞 Scroll-Controlled Cards */}
        <div ref={containerRef} className="relative h-[220vh]">
          <div className="sticky top-0 h-screen flex items-center justify-center z-20">
            <div className="flex justify-center gap-x-12 items-start">
              {/* First Card (Sticky, No Motion) */}
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
                      fontSize: "27px",
                    }}
                  >
                    {events[0].date}
                  </p>
                  <p
                    className="text-gray-700"
                    style={{
                      fontFamily: "Times New Roman, serif",
                      fontWeight: 400,
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
                      fontSize: "27px",
                    }}
                  >
                    {events[1].date}
                  </p>
                  <p
                    className="text-gray-700"
                    style={{
                      fontFamily: "Times New Roman, serif",
                      fontWeight: 400,
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
                      fontSize: "27px",
                    }}
                  >
                    {events[2].date}
                  </p>
                  <p
                    className="text-gray-700"
                    style={{
                      fontFamily: "Times New Roman, serif",
                      fontWeight: 400,
                      fontSize: "18.75px",
                    }}
                  >
                    {events[2].description}
                  </p>
                </div>
              </motion.div>
              {/* 👇 Centered Button */}


            </div>
          </div>
        </div>
        <div className="flex justify-center mt-12 z-30 relative">
  <button className="bg-[#90BC5D] text-black px-8 py-4 text-lg rounded-md transition-colors duration-300 hover:bg-[#A67C52]">
    VIEW OUR EVENTS
  </button>
</div>

        {/* Bottom Spacer */}
        <div className="h-[100px]" />
      </div>

      {/* 🔳 Bottom Blur */}
      <div
        className="absolute"
        style={{
          width: "100%",
maxWidth: "100vw",

          height: "250px",
          bottom: "-180px",
          left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: "#F1E8DA",
          filter: "blur(100px)",
          zIndex: 1,
        }}
      />
    </div>
  );
}