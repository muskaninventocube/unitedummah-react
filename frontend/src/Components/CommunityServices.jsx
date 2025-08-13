import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './BannerScrollSection.css'; // We'll put custom breakpoints here

const BannerScrollSection = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
const isMobile = typeof window !== "undefined" && window.innerWidth <= 500;

const moveDistance = isMobile ? -1200 : -700; // mobile pe zyada upar

const y2 = useTransform(scrollYProgress, [0.0, 0.1], [0, moveDistance]);
const y1 = useTransform(scrollYProgress, [0.1, 0.2], [0, moveDistance]);
const y5 = useTransform(scrollYProgress, [0.2, 0.3], [0, moveDistance]);
const y6 = useTransform(scrollYProgress, [0.3, 0.4], [0, moveDistance]);
const y4 = useTransform(scrollYProgress, [0.4, 0.5], [0, moveDistance]);
const y3 = useTransform(scrollYProgress, [0.5, 0.6], [0, moveDistance]);


  return (
    <div className="relative min-h-screen">
      <div ref={sectionRef} className="sticky top-0 sm:h-[1500px] h-[1200px]  overflow-hidden z-10">
        {/* Background */}
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("/grid/home-backk.png")' }}>
          <div className="absolute inset-0 bg-white opacity-40" />
        </div>

        {/* Banner */}
        <div className="absolute sm:top-[200px] -top-[20px]  w-full flex justify-center z-10">
          <div className="relative">
            <img
              src="/images/black-back.png"
              alt="Banner"
              className="banner-img h-[1000px] object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center text-white banner-text-mobile">

              <h1 className="sm:text-6xl text-2xl mb-6" style={{ fontFamily: 'Times New Roman, serif', color: '#F1E8DA' }}>
                Community Services
              </h1>
              <p className="max-w-3xl sm:text-xl text-md mb-8 leading-relaxed" style={{ fontFamily: 'Times New Roman, serif', color: '#F1E8DA' }}>
              At United Ummah, serving our community is not just what we do it’s who we are. Our services are designed to uplift, empower, and support every member of our Ummah with dignity and compassion.
              </p>
             <button
  className="
    sm:px-8 sm:py-3 px-6 py-2 
    sm:text-lg text-md font-semibold mb-20
    bg-[#F1E8DA] text-black
    hover:bg-[#bf8c4b] transition-colors duration-300
  "
  style={{ fontFamily: 'Times New Roman, serif' }}
>
  BECOME A MEMBER
</button>

            </div>
          </div>
        </div>
{/* Cards */}
<motion.img
  src="/images/pol2.png"
  alt="pol2"
  className="card-img rotate-[8deg]"
  style={{
    y: y2,
    top: isMobile ? '1280px' : '1080px',
    left: isMobile ? '20%' : '17%'
  }}
/>
<motion.img
  src="/images/pol1.png"
  alt="pol1"
  className="card-img rotate-[-10deg]"
  style={{
    y: y1,
    top: isMobile ? '1290px' : '1050px',
    left: isMobile ? '45%' : '0%'
  }}
/>
<motion.img
  src="/images/pol4.png"
  alt="pol5"
  className="card-img rotate-[-7deg]"
  style={{
    y: y5,
    top: isMobile ? '1300px' : '1090px',
    left: isMobile ? '25%' : '75%'
  }}
/>
<motion.img
  src="/images/pol6.png"
  alt="pol6"
  className="card-img rotate-[10deg]"
  style={{
    y: y6,
    top: isMobile ? '1310px' : '1080px',
    left: isMobile ? '40%' : '82%'
  }}
/>
<motion.img
  src="/images/pol3.png"
  alt="pol4"
  className="card-img rotate-[6deg]"
  style={{
    y: y4,
    top: isMobile ? '1395px' : '1070px',
    left: isMobile ? '15%' : '55%'
  }}
/>
<motion.img
  src="/images/pol5.png"
  alt="pol3"
  className="card-img rotate-[-6deg]"
  style={{
    y: y3,
    top: isMobile ? '1305px' : '1060px',
    left: isMobile ? '30%' : '35%'
  }}
/>
</div>

    </div>
  );
};

export default BannerScrollSection;