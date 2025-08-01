import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function UpcomingEvents() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const secondY = useTransform(scrollYProgress, [0, 1], [300, 0]);
  const thirdY = useTransform(scrollYProgress, [0, 1], [600, 0]);

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
    <div className="bg-cover bg-center" style={{ backgroundImage: "url('/grid/back-comingevents.png')" }}>
      {/* Top content - not sticky */}
      <div className="max-w-[1750px] mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row justify-between items-start gap-5">
          <h1
            className="text-[64px] font-light text-gray-800 leading-[1.2] mt-10 ml-15"
            style={{ fontFamily: "Orpheus Pro, serif" }}
          >
            Upcoming Events
          </h1>
          <div className="text-end max-w-[850px] mr-20">
            <p
              className="leading-relaxed mb-6"
              style={{ fontFamily: "Times New Roman, serif", fontWeight: 400, fontSize: "21.75px" }}
            >
              At United Ummah, every gathering is more than just an event — it's a chance to strengthen bonds,
              share blessings, and grow together in faith.
            </p>
            <p
              className="leading-relaxed"
              style={{ fontFamily: "Times New Roman, serif", fontWeight: 400, fontSize: "21.75px" }}
            >
              Come as you are, bring your family and friends, and be part of moments that create memories —
              and sometimes questionable chai art.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Controlled Cards Section */}
      <div ref={containerRef} className="relative h-[300vh]">
        <div className="sticky top-0 h-screen flex items-center justify-center">
          <div className="flex justify-center gap-x-12">
            {events.map((event, index) => {
              const yMotion = index === 1 ? secondY : index === 2 ? thirdY : 0;

              return (
                <motion.div
                  key={event.id}
                  className="flex flex-col items-center"
                  style={{ y: yMotion }}
                >
                  <div
                    className="w-[516px] h-[600px] overflow-hidden shadow-lg"
                    style={{
                      backgroundImage: `url(${event.src})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      borderRadius: "210px 210px 0 0",
                    }}
                  ></div>
                  <div className="mt-3 text-center">
                    <h2
                      className="text-4xl text-gray-800 font-semibold"
                      style={{ fontFamily: "Times New Roman, serif", fontWeight: 400, fontSize: "27.75px" }}
                    >
                      {event.title}
                    </h2>
                    <p
                      className="text-md text-gray-600"
                      style={{ fontFamily: "Times New Roman, serif", fontWeight: 400, fontSize: "27.75px" }}
                    >
                      {event.date}
                    </p>
                    <p
                      className="text-md text-gray-700 max-w-[90%] mx-auto"
                      style={{ fontFamily: "Times New Roman, serif", fontWeight: 400, fontSize: "15.75px" }}
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
    </div>
  );
}
