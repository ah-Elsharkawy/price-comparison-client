import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";

const images = [
  "https://www.shutterstock.com/shutterstock/photos/615672728/display_1500/stock-photo-woman-s-hands-working-on-a-lap-top-615672728.jpg", // replace with actual image URLs
  "https://img.freepik.com/free-photo/hands-male-executive-using-mobile-phone-laptop_1170-867.jpg?t=st=1720038703~exp=1720042303~hmac=73f9f05579317e490d9ffb53eeae31305c4f662cc5292b7644f69d922a537285&w=996",
  "https://img.freepik.com/free-photo/flat-lay-smartphone-laptop_23-2148638126.jpg?t=st=1720038620~exp=1720042220~hmac=f3f7521821eda276c642f6804baf9f7f0d35abc06ca35180d1e5e5c7c6aba431&w=996",
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative w-1/2 overflow-hidden m-auto">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            className="flex-none w-[800px] h-[400px] object-contain"
            alt="pic"
          />
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-blue-500 text-white p-2"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        <span className="sr-only">Previous</span>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-blue-500 text-white p-2"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
        <span className="sr-only">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
