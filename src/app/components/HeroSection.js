'use client';

import React, { useState, useEffect, useCallback } from "react";
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const HeroSection = () => {
  const slides = [
    {
      id: 1,
      image: "/carousel-1.png",
      title: "Learn To Drive With Confidence",
    },
    {
      id: 2,
      image: "/carousel-2.png",
      title: "Safe Driving Is Our Top Priority",
    },
    {
      id: 3,
      image: "/carousel-3.png",
      title: "Get Your License In No Time",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 9000); // Auto-slide every 9 seconds
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [nextSlide]); // Add nextSlide to the dependency array

  return (
    <div className="relative">
      <div className="relative h-[500px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
              index === currentSlide ? "translate-x-0" : "translate-x-full"
            }`}
            style={{
              transform: `translateX(${(index - currentSlide) * 100}%)`,
            }}
          >
            <div className="relative w-full h-full">
              <Image
                src={slide.image || "/placeholder.svg"}
                alt={`Slide ${slide.id}`}
                fill
                sizes="100vw"
                style={{ objectFit: 'cover' }}
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-center text-white px-4">
                  <h1 className="text-4xl md:text-5xl font-bold mb-6">
                    {slide.title}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full"
        onClick={prevSlide}
      >
        <FontAwesomeIcon icon={faChevronLeft} className="w-4 h-4" />
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full"
        onClick={nextSlide}
      >
        <FontAwesomeIcon icon={faChevronRight} className="w-4 h-4" />
      </button>
    </div>
  );
};

export default HeroSection;