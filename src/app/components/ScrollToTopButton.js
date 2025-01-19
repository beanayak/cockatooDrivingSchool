"use client";

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <>
          {/* WhatsApp Button (Left-Aligned) */}
          <div className="fixed bottom-4 left-4">
            <a
              aria-label="Chat on WhatsApp"
              href="https://wa.me/61481372786"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="Chat on WhatsApp"
                src="/wa.png"
                width={64} // Increased width for a larger image
                height={64} // Increased height for a larger image
                className="object-cover cursor-pointer animate-heartbeat"
                layout="intrinsic" // Automatically adjusts height based on aspect ratio
              />
            </a>
          </div>

          {/* Scroll-to-Top Button (Right-Aligned) */}
          <div className="fixed bottom-4 right-4">
            <button
              onClick={scrollToTop}
              className="bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary-dark transition duration-300"
              aria-label="Scroll to top"
            >
              <FontAwesomeIcon icon={faChevronUp} />
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default ScrollToTopButton;
