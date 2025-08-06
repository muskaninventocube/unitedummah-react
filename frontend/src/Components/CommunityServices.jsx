import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const BannerScrollSection = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  // Custom staggered scroll order: 2 → 1 → 5 → 6 → 4 → 3
  const y2 = useTransform(scrollYProgress, [0.00, 0.05], [0, -400]); // 2nd
  const y1 = useTransform(scrollYProgress, [0.05, 0.1], [0, -400]);  // 1st
  const y5 = useTransform(scrollYProgress, [0.1, 0.15], [0, -400]);  // 5th
  const y6 = useTransform(scrollYProgress, [0.15, 0.2], [0, -400]);  // 6th
  const y4 = useTransform(scrollYProgress, [0.2, 0.25], [0, -400]);  // 4th
  const y3 = useTransform(scrollYProgress, [0.25, 0.3], [0, -400]);  // 3rd

  return (
    <div className="relative h-[2500px] bg-white">
      {/* Sticky Scroll Section */}
      <div
        ref={sectionRef}
        className="sticky top-0 h-[1500px] overflow-hidden z-10"
      >
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("/grid/six-four.png")' }}
        >
          <div className="absolute inset-0 bg-white opacity-40" />
        </div>

        {/* Banner */}
        <div className="absolute top-[200px] w-full flex justify-center z-10">
          <img
            src="/images/banner.png"
            alt="Banner"
            className="w-[1400px] h-[800px] object-cover"
          />
        </div>

        {/* Pol Images in Custom Scroll Order */}
        <motion.img
          src="/images/pol2.png"
          alt="pol2"
          className="absolute w-[400px] rotate-[8deg] z-20"
          style={{ y: y2, top: '780px', left: '17%' }}
        />
        <motion.img
          src="/images/pol1.png"
          alt="pol1"
          className="absolute w-[400px] rotate-[-10deg] z-20"
          style={{ y: y1, top: '750px', left: '0%' }}
        />
        <motion.img
          src="/images/pol5.png"
          alt="pol5"
          className="absolute w-[350px] rotate-[-7deg] z-20"
          style={{ y: y5, top: '790px', left: '75%' }}
        />
        <motion.img
          src="/images/pol3.png"
          alt="pol6"
          className="absolute w-[400px] rotate-[10deg] z-20"
          style={{ y: y6, top: '780px', left: '87%' }}
        />
        <motion.img
          src="/images/pol4.png"
          alt="pol4"
          className="absolute w-[400px] rotate-[6deg] z-20"
          style={{ y: y4, top: '770px', left: '55%' }}
        />
        <motion.img
          src="/images/pol6.png"
          alt="pol3"
          className="absolute w-[400px] rotate-[-6deg] z-20"
          style={{ y: y3, top: '760px', left: '35%' }}
        />
      </div>

      {/* Next section */}
      <div className="h-[1000px] bg-gray-100 flex items-center justify-center">
        <h1 className="text-4xl">Next Section Content</h1>
      </div>
    </div>
  );
};

export default BannerScrollSection;
