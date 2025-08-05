import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const BannerScrollSection = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  // Updated transforms: allow both upward and downward scroll effect
  const y1 = useTransform(scrollYProgress, [0.2, 0.3, 0.4, 0.5], [400, 0, -400, -800]);
  const y2 = useTransform(scrollYProgress, [0.25, 0.35, 0.45, 0.55], [400, 0, -400, -800]);
  const y3 = useTransform(scrollYProgress, [0.3, 0.4, 0.5, 0.6], [400, 0, -400, -800]);
  const y4 = useTransform(scrollYProgress, [0.35, 0.45, 0.55, 0.65], [400, 0, -400, -800]);
  const y5 = useTransform(scrollYProgress, [0.4, 0.5, 0.6, 0.7], [400, 0, -400, -800]);
  const y6 = useTransform(scrollYProgress, [0.45, 0.55, 0.65, 0.75], [400, 0, -400, -800]);

  // Keep zIndex dynamic so images slide under next content
  const zIndex = useTransform(scrollYProgress, [0, 0.85, 1], [20, 20, 0]);

  return (
    <div
      ref={sectionRef}
      className="relative h-[1500px] overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: 'url("/grid/six-four.png")' }}
    >
      {/* White overlay */}
      <div className="absolute inset-0 bg-white opacity-40 z-0" />

      {/* Sticky Banner */}
      <div className="sticky top-[300px] z-10 mt-20 flex justify-center items-center h-[700px] py-[150px]">
        <img
          src="/images/banner.png"
          alt="Banner"
          className="w-[1400px] h-[800px] object-cover"
        />
      </div>

      {/* Animated Images */}
      <motion.img
        src="/images/pol1.png"
        alt="pol1"
        className="absolute w-[400px] rotate-[-10deg]"
        style={{ y: y1, top: '800px', left: '0%', zIndex }}
      />
      <motion.img
        src="/images/pol2.png"
        alt="pol2"
        className="absolute w-[400px] rotate-[8deg]"
        style={{ y: y2, top: '850px', left: '17%', zIndex }}
      />
      <motion.img
        src="/images/pol6.png"
        alt="pol3"
        className="absolute w-[400px] rotate-[-6deg]"
        style={{ y: y3, top: '820px', left: '35%', zIndex }}
      />
      <motion.img
        src="/images/pol4.png"
        alt="pol4"
        className="absolute w-[400px] rotate-[6deg]"
        style={{ y: y4, top: '830px', left: '55%', zIndex }}
      />
      <motion.img
        src="/images/pol5.png"
        alt="pol5"
        className="absolute w-[350px] rotate-[-7deg]"
        style={{ y: y5, top: '860px', left: '75%', zIndex }}
      />
      <motion.img
        src="/images/pol3.png"
        alt="pol6"
        className="absolute w-[400px] rotate-[10deg]"
        style={{ y: y6, top: '840px', left: '87%', zIndex }}
      />
    </div>
  );
};

export default BannerScrollSection;
