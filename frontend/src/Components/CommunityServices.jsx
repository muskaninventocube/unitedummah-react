import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './BannerScrollSection.css';

const BannerScrollSection = () => {
  const sectionRef = useRef(null);
const { scrollYProgress: bannerProgress } = useScroll({
  target: sectionRef,
  offset: ['start start', 'start end'], 
});

const { scrollYProgress: polProgress } = useScroll({
  target: sectionRef,
  offset: ['start start', ' end start '], 
});

const isMobile = typeof window !== 'undefined' && window.innerWidth <= 500;

// Banner smooth downward movement
const bannerY = useTransform(bannerProgress, [0, 1], [0, 500]);

// Card animations
const y2 = useTransform(polProgress, [0.0, 0.01], [0, isMobile ? -1200 : -1100]);
const y1 = useTransform(polProgress, [0.01, 0.22], [0, isMobile ? -1200 : -1100]);

const y5 = useTransform(polProgress, [0.22, 0.33], [0, isMobile ? -1200 : -1100]);
const y6 = useTransform(polProgress, [0.33, 0.44], [0, isMobile ? -1200 : -1100]);
const y4 = useTransform(polProgress, [0.44, 0.45], [0, isMobile ? -1270 : -1100]);
const y3 = useTransform(polProgress, [0.45, 0.56], [0, isMobile ? -1200 : -1450]);


  return (
    <div className="relative min-h-[260vh]">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("/grid/home-backk.png")' }}
      >
        <div className="absolute inset-0 bg-white opacity-40" />
      </div>

      {/* Scrollable area */}
      <div ref={sectionRef} className="relative z-10" style={{ height: '250vh' }}>
        {/* Sticky container */}
        <div className="sticky top-0 h-screen overflow-hidden">
          {/* Banner with smooth scroll */}
          <motion.div className="relative flex justify-center pl-10" style={{ y: bannerY }}>
            <img
              src="/images/black-back.png"
              alt="Banner"
             className={`${isMobile ? 'h-[1100px]' : 'h-[900px] sm:h-[700px] md:h-[800px]'} object-cover`}

            />
            <div className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center text-white">
              <h1
                className="sm:text-6xl text-2xl mb-6 pl-8"
                style={{ fontFamily: 'Times New Roman, serif', color: '#F1E8DA' }}
              >
                Community Services
              </h1>
              <p
                className="max-w-3xl sm:text-xl text-md mb-8 leading-relaxed pl-8"
                style={{ fontFamily: 'Times New Roman, serif', color: '#F1E8DA' }}
              >
                At United Ummah, serving our community is not just what we do it's who we are.
                Our services are designed to uplift, empower, and support every member of our Ummah
                with dignity and compassion.
              </p>
              <button
                className="
                  sm:px-8 sm:py-3 px-6 py-2
                  sm:text-lg text-md font-semibold mb-20
                  bg-[#F1E8DA] text-black
                  hover:bg-[#bf8c4b] transition-colors duration-300 ml-10
                "
                style={{ fontFamily: 'Times New Roman, serif' }}
              >
                BECOME A MEMBER
              </button>
            </div>
          </motion.div>

          {/* Cards */}
          <motion.img
            src="/images/pol2.png"
            alt="pol2"
            className="card-img rotate-[8deg]"
            style={{
              y: y2,
              top: isMobile ? '1280px' : '1180px',
              left: isMobile ? '15%' : '17%',
              position: 'absolute',
            }}
          />
          <motion.img
            src="/images/pol1.png"
            alt="pol1"
            className="card-img rotate-[-10deg]"
            style={{
              y: y1,
              top: isMobile ? '1290px' : '1150px',
              left: isMobile ? '26%' : '0%',
              position: 'absolute',
            }}
          />
          <motion.img
            src="/images/pol4.png"
            alt="pol5"
            className="card-img rotate-[-7deg]"
            style={{
              y: y5,
              top: isMobile ? '1300px' : '1190px',
              left: isMobile ? '25%' : '65%',
              position: 'absolute',
            }}
          />
          <motion.img
            src="/images/pol6.png"
            alt="pol6"
            className="card-img rotate-[10deg]"
            style={{
              y: y6,
              top: isMobile ? '1310px' : '1180px',
              left: isMobile ? '11%' : '78%',
              position: 'absolute',
            }}
          />
          <motion.img
            src="/images/pol3.png"
            alt="pol4"
            className="card-img rotate-[6deg]"
            style={{
              y: y4,
              top: isMobile ? '1395px' : '1170px',
              left: isMobile ? '15%' : '55%',
              position: 'absolute',
            }}
          />
          <motion.img
            src="/images/pol5.png"
            alt="pol3"
            className="card-img rotate-[-6deg]"
            style={{
              y: y3,
              top: isMobile ? '1305px' : '1560px',
              left: isMobile ? '17%' : '35%',
              position: 'absolute',
              scale: isMobile ? 0.8 : 1,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default BannerScrollSection;
