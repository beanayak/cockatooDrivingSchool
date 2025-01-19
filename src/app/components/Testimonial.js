"use client";

import React from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const Testimonial = ({ autoplaySpeed = 3000 }) => {
  const testimonials = [
    {
      name: "Binayak Pokharel",
      profession: "Software Engineer",
      text: "The training was exceptional! I felt confident and well-prepared for my driving test, thanks to the expert guidance.",
      image: "/testimonial-2.png",
    },
    {
      name: "Laira Koirala",
      profession: "Project Manager",
      text: "A fantastic experience! The instructors were professional, and the test circuit practice helped me pass with ease!",
      image: "/testimonial-1.png",
    },
    // {
    //   name: "Client 3",
    //   profession: "Project Manager",
    //   text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
    //   image: "/testimonial-3.png",
    // },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed,
  };

  return (
    <div
      id="testimonial"
      className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="text-center mb-8">
        <h6 className="text-primary uppercase tracking-wider text-sm sm:text-base mb-2">
          Testimonial
        </h6>
        <h1 className="text-2xl sm:text-4xl font-bold">
          What Our Clients Say!
        </h1>
      </div>
      <div className="max-w-full mx-auto">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="text-center px-6">
              <div className="relative mb-6">
                <Image
                  className="w-24 h-24 rounded-full mx-auto object-cover"
                  src={testimonial.image}
                  alt={`Portrait of ${testimonial.name}`}
                  width={96} // equivalent to 24px * 4 (rem)
                  height={96} // equivalent to 24px * 4 (rem)
                  priority // Optional: use priority if this image is important to load quickly
                />
                <div className="absolute inset-x-0 bottom-0 translate-y-1/2 flex items-center justify-center w-12 h-12 bg-white rounded-full mx-auto shadow-md">
                  <span
                    className="fa fa-quote-left text-primary text-xl"
                    aria-label="Quote Icon"
                  ></span>
                </div>
              </div>
              <p className="text-lg text-gray-600 italic">{testimonial.text}</p>
              <hr className="w-16 mx-auto my-4 border-t-2 border-primary" />
              <h5 className="text-xl font-semibold">{testimonial.name}</h5>
              <span className="text-gray-500">{testimonial.profession}</span>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

Testimonial.propTypes = {
  autoplaySpeed: PropTypes.number,
};

export default Testimonial;
