import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const StickyBannerSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Gentle upward slide — all images align around the banner area (top ~300px)
  const y1 = useTransform(scrollYProgress, [0.3, 0.9], [0, -600]);
  const y2 = useTransform(scrollYProgress, [0.35, 0.95], [0, -690]);
  const y3 = useTransform(scrollYProgress, [0.4, 1], [0, -650]);
  const y4 = useTransform(scrollYProgress, [0.45, 1], [0, -670]);
  const y5 = useTransform(scrollYProgress, [0.5, 1], [0, -660]);
  const y6 = useTransform(scrollYProgress, [0.55, 1], [0, -675]);

  return (
    <div
      ref={sectionRef}
      className="relative min-h-[6000px] bg-cover bg-center"
      style={{ backgroundImage: 'url("/grid/six-four.png")' }}
    >
      {/* Light overlay */}
      <div className="absolute inset-0 bg-white opacity-20 z-0" />

      {/* Spacer before sticky banner */}
      <div className="h-[300px]" />

      {/* Sticky Banner */}
      <div className="sticky top-[300px] h-[calc(100vh-300px)] z-10 flex justify-center items-center relative overflow-hidden">
        {/* Banner background */}
        <img
          src="/images/black-back.png"
          alt="Banner"
          className="absolute w-[90%] max-w-[1500px] h-full object-cover z-0"
        />

        {/* Banner content */}
        <div
          className="absolute text-center px-4 max-w-3xl text-white z-30"
          style={{ fontFamily: '"Times New Roman", serif' }}
        >
          <h2 className="text-5xl sm:text-7xl mb-5 font-normal">Community Services</h2>
          <p className="text-4xl sm:text-xl mb-6 leading-relaxed">
            At United Ummah, serving our community is not just <br />
            what we do it’s who we are. Our services are designed <br />
            to uplift, empower, and support every member of our <br />
            Ummah with dignity and compassion.
          </p>
          <button className="bg-[#F7F2E8] text-black px-6 py-3 text-sm font-bold transition-colors duration-300 hover:bg-[#C4A484]">
            BECOME A MEMBER
          </button>
        </div>
      </div>

      {/* Pol Images (animate upward but stay above banner) */}
      <motion.img
        src="/images/pol1.png"
        alt="pol1"
        className="absolute w-[60%] sm:w-[350px] rotate-[-8deg] z-20"
        style={{ y: y1, top: '900px', left: '2%' }}
      />
      <motion.img
        src="/images/pol2.png"
        alt="pol2"
        className="absolute w-[60%] sm:w-[350px] rotate-[4deg] z-20"
        style={{ y: y2, top: '1000px', left: '60%' }}
      />
      <motion.img
        src="/images/pol3.png"
        alt="pol3"
        className="absolute w-[60%] sm:w-[350px] rotate-[-4deg] z-20"
        style={{ y: y3, top: '1300px', left: '20%' }}
      />
      <motion.img
        src="/images/pol6.png"
        alt="pol4"
        className="absolute w-[60%] sm:w-[350px] rotate-[6deg] z-20"
        style={{ y: y4, top: '1800px', left: '40%' }}
      />
      <motion.img
        src="/images/pol5.png"
        alt="pol5"
        className="absolute w-[60%] sm:w-[350px] rotate-[-6deg] z-20"
        style={{ y: y5, top: '2000px', left: '80%' }}
      />
      <motion.img
        src="/images/pol4.png"
        alt="pol6"
        className="absolute w-[60%] sm:w-[350px] rotate-[7deg] z-20"
        style={{ y: y6, top: '2300px', left: '60%' }}
      />

      {/* Spacer to allow scroll */}
      <div className="h-[1500px]" />
    </div>
  );
};

export default StickyBannerSection;
