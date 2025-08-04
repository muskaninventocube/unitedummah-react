import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function UpcomingEvents() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const secondY = useTransform(scrollYProgress, [0, 1], [900, 0]);
  const thirdY = useTransform(scrollYProgress, [0, 1], [1300, 0]);

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
    <div className="relative w-full overflow-visible">
      
      <div
        className="absolute"
        style={{
          width: "2500px",
          height: "250px",
          top: "-180px",
          left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: "#F1E8DA",
          filter: "blur(100px)",
          zIndex: 1,
        }}
      />

      {/* 📦 MAIN SECTION */}
      <div
        className="relative z-10 bg-cover bg-center top-0"
        style={{ backgroundImage: "url('/grid/back-comingevents.png')" }}
      >
        {/* 📝 Text Section */}
        <div className="max-w-[1750px] mx-auto px-6 mt-[100px] pb-[40px]">
          <div className="flex flex-col md:flex-row justify-between items-start gap-5 mt-10">
            <h1
              className="text-[64px]  text-gray-800 leading-[1.2] ml-6 mt-25"
              style={{ fontFamily: "Orpheus Pro, serif" }}
            >
              Upcoming Events
            </h1>
            <div className="text-end max-w-[850px] mr-6 mt-15">
              <p
                className="leading-relaxed mb-6"
                style={{
                  fontFamily: "Times New Roman, serif",
                  fontWeight: 400,
                  fontSize: "21.75px",
                }}
              >
                At United Ummah, every gathering is more than just an event — it’s
                a chance to strengthen bonds, share blessings, and grow together in
                faith. From inspiring lectures and vibrant youth activities to
                community iftars and charity drives, our events are thoughtfully
                crafted to bring hearts closer and uplift every member of our Ummah.
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
                moments that create memories — and sometimes questionable chai art.
              </p>
            </div>
          </div>
        </div>

        {/* 🎞 Scroll Controlled Cards */}
        <div ref={containerRef} className="relative h-[200vh]">
          <div className="sticky top-0 h-screen flex flex-col items-center justify-center z-20">
            <div className="flex justify-center gap-x-12 mb-[80px]">
              {events.map((event, index) => {
                const yMotion = index === 1 ? secondY : index === 2 ? thirdY : 0;

                return (
                  <motion.div
                    key={event.id}
                    className="flex flex-col items-start w-[516px]"
                    style={{ y: yMotion }}
                  >
                    {/* Image */}
                    <div
                      className="w-full h-[600px] overflow-hidden shadow-lg"
                      style={{
                        backgroundImage: `url(${event.src})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        borderRadius: "210px 210px 0 0",
                      }}
                    ></div>

                    {/* Content */}
                    <div className="mt-4 w-full px-3">
                      <h2
                        className="text-gray-800 mb-1"
                        style={{
                          fontFamily: "Times New Roman, serif",
                          fontWeight: 700,
                          fontSize: "32px",
                        }}
                      >
                        {event.title}
                      </h2>
                      <p
                        className="text-gray-600 text-right mb-2"
                        style={{
                          fontFamily: "Times New Roman, serif",
                          fontWeight: 500,
                          fontSize: "24px",
                        }}
                      >
                        {event.date}
                      </p>
                      <p
                        className="text-gray-700"
                        style={{
                          fontFamily: "Times New Roman, serif",
                          fontWeight: 400,
                          fontSize: "15.75px",
                        }}
                      >
                        {event.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* 📦 Bottom Spacing */}
        <div className="h-[400px]" />
      </div>

      {/* 🔳 BOTTOM SHADOW */}
      <div
        className="absolute"
        style={{
          width: "2500px",
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
