import React from 'react';

const TestHoverGallery = () => {
  const images = [
    {
      src: '/grid/first-one.png',
      hoverSrc: '/grid/first-one-hover.png',
      alt: 'first one',
    },
    {
      src: '/grid/first-two.png',
      hoverSrc: '/grid/first-two-hover.png',
      alt: 'first two',
    },
    {
      src: '/grid/first-three.png',
      hoverSrc: '/grid/first-three-hover.png',
      alt: 'first three',
    },
  ];

  return (
    <div className="flex gap-4 p-10 bg-gray-100">
      <style>{`
        .hover-container {
          position: relative;
          width: 300px;
          height: 400px;
          overflow: hidden;
          border: 2px solid #ccc;
          cursor: pointer;
        }

        .hover-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: opacity 0.3s ease-in-out;
        }

        .hover-container .hover-img {
          position: absolute;
          top: 0;
          left: 0;
          opacity: 0;
          z-index: 1;
        }

        .hover-container:hover .hover-img {
          opacity: 1;
        }

        .hover-container:hover .main-img {
          opacity: 0;
        }
      `}</style>

      {images.map((img, i) => (
        <div key={i} className="hover-container">
          <img src={img.src} alt={img.alt} className="main-img" />
          <img src={img.hoverSrc} alt={`${img.alt} hover`} className="hover-img" />
        </div>
      ))}
    </div>
  );
};

export default TestHoverGallery;
