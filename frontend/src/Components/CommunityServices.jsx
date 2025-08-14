import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const BannerScrollSection = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'start end'],
  });

  // Transform to move image downward (adjust these values as needed)
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 500]);

  return (
    <div className="relative min-h-[260vh]">
      {/* Background */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("/grid/home-backk.png")' }}>
        <div className="absolute inset-0 bg-white opacity-40" />
      </div>

      {/* Scrollable area */}
      <div 
        ref={sectionRef} 
        className="relative z-10"
        style={{ height: '250vh' }} // Adjust this to control scroll duration
      >
        {/* Sticky container */}
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          {/* Moving image */}
          <motion.div 
            className="relative"
            style={{ y: imageY }}
          >
            <img
              src="/images/black-back.png"
              alt="Banner"
              className="h-[600px] sm:h-[700px] md:h-[800px] object-contain" // Removed w-full
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center text-white pointer-events-auto">
              <h1 className="sm:text-6xl text-2xl mb-6" style={{ fontFamily: 'Times New Roman, serif', color: '#F1E8DA' }}>
                Community Services
              </h1>
              <p className="max-w-3xl sm:text-xl text-md mb-8 leading-relaxed" style={{ fontFamily: 'Times New Roman, serif', color: '#F1E8DA' }}>
                At United Ummah, serving our community is not just what we do it's who we are. Our services are designed to uplift, empower, and support every member of our Ummah with dignity and compassion.
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
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BannerScrollSection;