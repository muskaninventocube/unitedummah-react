import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const BannerScrollSection = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  // Custom staggered scroll order: 2 → 1 → 5 → 6 → 4 → 3
  const y2 = useTransform(scrollYProgress, [0.0, 0.1], [0, -700]);
  const y1 = useTransform(scrollYProgress, [0.1, 0.2], [0, -700]);
  const y5 = useTransform(scrollYProgress, [0.2, 0.3], [0, -700]);
  const y6 = useTransform(scrollYProgress, [0.3, 0.4], [0, -700]);
  const y4 = useTransform(scrollYProgress, [0.4, 0.5], [0, -700]);
  const y3 = useTransform(scrollYProgress, [0.5, 0.6], [0, -700]);

  return (
    <div className="relative h-[1500px]">
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

        {/* Banner with text overlay */}
        <div className="absolute top-[200px] w-full flex justify-center z-10">
          <div className="relative">
            <img
              src="/images/black-back.png"
              alt="Banner"
              className="w-[1600px] h-[1000px] object-cover"
            />
            {/* Text overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center text-white">
              <h1
                className="text-6xl mb-6"
                style={{ fontFamily: 'Times New Roman, serif', color: '#F1E8DA' }}
              >
                Community Services
              </h1>
              <p
                className="max-w-3xl text-xl mb-8 leading-relaxed"
                style={{ fontFamily: 'Times New Roman, serif' , color: '#F1E8DA' }}
              >
                At United Ummah, serving our community is not just what we do —
                it’s who we are. Our services are designed to uplift, empower,
                and support every member of our Ummah with dignity and
                compassion.
              </p>
              <button
                className="px-8 py-3 text-lg font-semibold rounded"
                style={{
                  fontFamily: 'Times New Roman, serif',
                  backgroundColor: '#F1E8DA',
                  color: '#000',
                }}
              >
                BECOME A MEMBER
              </button>
            </div>
          </div>
        </div>

        {/* Images */}
        <motion.img
          src="/images/pol2.png"
          alt="pol2"
          className="absolute w-[450px] rotate-[8deg] z-20"
          style={{ y: y2, top: '980px', left: '17%' }}
        />
        <motion.img
          src="/images/pol1.png"
          alt="pol1"
          className="absolute w-[450px] rotate-[-10deg] z-20"
          style={{ y: y1, top: '950px', left: '0%' }}
        />
        <motion.img
          src="/images/pol4.png"
          alt="pol5"
          className="absolute w-[450px] rotate-[-7deg] z-20"
          style={{ y: y5, top: '990px', left: '75%' }}
        />
        <motion.img
          src="/images/pol6.png"
          alt="pol6"
          className="absolute w-[450px] rotate-[10deg] z-20"
          style={{ y: y6, top: '980px', left: '82%' }}
        />
        <motion.img
          src="/images/pol3.png"
          alt="pol4"
          className="absolute w-[450px] rotate-[6deg] z-20"
          style={{ y: y4, top: '970px', left: '55%' }}
        />
        <motion.img
          src="/images/pol5.png"
          alt="pol3"
          className="absolute w-[450px] rotate-[-6deg] z-20"
          style={{ y: y3, top: '960px', left: '35%' }}
        />
      </div>
    </div>
  );
};

export default BannerScrollSection;
