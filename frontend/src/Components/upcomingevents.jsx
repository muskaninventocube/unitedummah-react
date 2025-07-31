import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function UpcomingEvents() {
  const containerRef = useRef(null);

  // Track scroll progress for animation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Y-axis movement animations for 2nd and 3rd cards
  const secondY = useTransform(scrollYProgress, [0, 1], [550, 0]);
  const thirdY = useTransform(scrollYProgress, [0, 1], [1100, 0]);

  const events = [
    {
      id: 1,
      title: "Community Iftar",
      date: "August 15, 2025",
      description: "Join us for a blessed evening of breaking bread together.",
      src: "/grid/six-four.png"
    },
    {
      id: 2,
      title: "Youth Leadership Summit",
      date: "September 5, 2025",
      description: "Empowering tomorrow's leaders today.",
      src: "/grid/first-four.png"
    },
    {
      id: 3,
      title: "Charity Drive",
      date: "October 10, 2025",
      description: "Extending our hand to those who need it most.",
      src: "/grid/four-one.png"
    }
  ];

  return (
    <div
      ref={containerRef}
      className="bg-cover bg-center px-6 py-20 min-h-[2000px]"
      style={{
        backgroundImage: "url('/grid/back-comingevents.png')"
      }}
    >
      <div className="max-w-[1750px] mx-auto text-center">
        {/* Header */}
        <h1 className="text-5xl md:text-6xl font-light text-gray-800 mb-10 tracking-wide">
          Upcoming Events
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto mb-4">
          At United Ummah, every gathering is more than just an event — it's a chance to strengthen bonds, 
          share blessings, and grow together in faith. From inspiring lectures and vibrant youth activities to 
          community Iftars and charity drives, our events are thoughtfully crafted to bring hearts closer and 
          uplift every member of our Ummah.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto mb-16">
          Come as you are, bring your family and friends, and be part of moments that create memories — 
          and sometimes questionable chai art. There's always a seat for you here.
        </p>

        {/* Animated 3-Card Section */}
        <div className="flex justify-center gap-x-12 relative">
          {events.map((event, index) => {
            const yMotion = index === 1 ? secondY : index === 2 ? thirdY : 0;

            return (
              <motion.div
                key={event.id}
                className="flex flex-col items-center"
                style={{ y: yMotion }}
              >
                {/* Image */}
                <div
                  className="w-[516px] h-[600px] overflow-hidden shadow-lg"
                  style={{
                    backgroundImage: `url(${event.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: '210px 210px 0 0'
                  }}
                ></div>

                {/* Text */}
                <div className="mt-6 text-center space-y-2">
                  <h2 className="text-3xl md:text-4xl text-gray-800 font-semibold">
                    {event.title}
                  </h2>
                  <p className="text-md text-gray-600">{event.date}</p>
                  <p className="text-md text-gray-700 max-w-[90%] mx-auto">
                    {event.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
