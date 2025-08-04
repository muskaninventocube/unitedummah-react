import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const StickyBannerSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Transform animations
// Updated y transforms for dynamic movement and clustering effect
const y1 = useTransform(scrollYProgress, [0, 1], [0, 50]);
const y2 = useTransform(scrollYProgress, [0, 1], [0, -50]);
const y3 = useTransform(scrollYProgress, [0, 1], [0, -1300]);
const y4 = useTransform(scrollYProgress, [0, 1], [0, -2500]);
const y5 = useTransform(scrollYProgress, [0, 1], [0, -3500]);
const y6 = useTransform(scrollYProgress, [0, 1], [0, -4000]);


  return (
    <div
      ref={sectionRef}
      className="relative min-h-[4000px] bg-cover bg-center py-[300px]"
      style={{
        backgroundImage: 'url("/grid/six-four.png")',
      }}
    >
      <div className="absolute inset-0 bg-white opacity-40 z-0" />

      {/* Sticky Banner */}
      <div className="sticky top-0 z-10 flex justify-center items-center h-[700px]">
        <img
          src="/images/banner.png"
          alt="Banner"
          className="w-[1500px] h-[700px] object-cover"
        />
      </div>

      {/* Pol images with different positions & rotations */}
      <motion.img
        src="/images/pol1.png"
        alt="pol1"
        className="absolute w-[350px] rotate-[-8deg] z-20"
        style={{ y: y1, top: '900px', left: '2%' }}
      />
      <motion.img
        src="/images/pol2.png"
        alt="pol2"
        className="absolute w-[350px] rotate-[4deg] z-20"
        style={{ y: y2, top: '1000px', left: '61%' }}
      />
      <motion.img
        src="/images/pol3.png"
        alt="pol3"
        className="absolute w-[350px] rotate-[-4deg] z-20"
        style={{ y: y3, top: '1300px', left: '17%' }}
      />
      <motion.img
        src="/images/pol6.png"
        alt="pol4"
        className="absolute w-[350px] rotate-[6deg] z-20"
        style={{ y: y4, top: '1800px', left: '75%' }}
      />
      <motion.img
        src="/images/pol5.png"
        alt="pol5"
        className="absolute w-[320px] rotate-[-6deg] z-20"
        style={{ y: y5, top: '2000px', left: '32%' }}
      />
      <motion.img
        src="/images/pol4.png"
        alt="pol6"
        className="absolute w-[350px] rotate-[7deg] z-20"
        style={{ y: y6, top: '2300px', left: '45%' }}
      />
    </div>
  );
};

export default StickyBannerSection;
