import React, { useState, useEffect } from "react";
import SearchComponent from '../Search/Search';
import { carouselImages } from '../../../jsondata/constantImages'

const LandingCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance the carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [carouselImages]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex flex-col items-between bg-gray-200" style={{height: "500px"}}>
        <div className="relative">
            {carouselImages.map((image, index) => (
                <div
                key={index}
                className={`${
                    index === currentIndex ? "opacity-100" : "opacity-0"
                } transition-opacity duration-500 ease-in-out absolute inset-0`}
                >
                <img src={image} className="w-full" style={{height: "500px", backgroundSize: "cover"}} />
                </div>
            ))}

            <button
                className="absolute top-60 left-6 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
                onClick={prevSlide}
            >
                {"<"}
            </button>

            <button
                className="absolute top-60 right-6 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
                onClick={nextSlide}
            >
                {">"}
            </button>
        </div>
        <div className="absolute top-80 left-5 bg-gray-200 p-5"><SearchComponent /></div>
    </div>
  );
};

export default LandingCarousel;
