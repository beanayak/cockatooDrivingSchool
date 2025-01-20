'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav id="header" className="bg-white sticky top-0 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="#header" className="flex items-center">
              <FontAwesomeIcon icon={faCar} className="text-primary text-3xl mr-4" />
              <span className="font-bold text-xl">Cockatoo Driving School </span>
            </Link>
          </div>
          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:items-center lg:justify-center flex-1">
            <div className="flex items-center justify-center space-x-6">
              <Link
                href="#header"
                className="inline-block text-gray-700 hover:bg-[#f3c614] py-2 px-4 rounded-md text-sm font-medium"
              >
                HOME
              </Link>
              <Link
                href="#services"
                className="inline-block text-gray-700 hover:bg-[#f3c614] py-2 px-4 rounded-md text-sm font-medium"
              >
                SERVICES
              </Link>
              <Link
                href="#about"
                className="inline-block text-gray-700 hover:bg-[#f3c614] py-2 px-4 rounded-md text-sm font-medium"
              >
                ABOUT
              </Link>
              <Link
                href="#contact"
                className="inline-block text-gray-700 hover:bg-[#f3c614] py-2 px-4 rounded-md text-sm font-medium"
              >
                CONTACT
              </Link>
            </div>
          </div>
          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded={isOpen ? 'true' : 'false'}
            >
              <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
              <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="text-xl" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } lg:hidden transition-all duration-300 ease-in-out overflow-hidden absolute top-16 left-0 w-full bg-white shadow-md`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            href="#services"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-[#f3c614]"
          >
            SERVICES
          </Link>
          <Link
            href="#about"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-[#f3c614]"
          >
            ABOUT
          </Link>
          <Link
            href="#contact"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-[#f3c614]"
          >
            CONTACT
          </Link>
          <div className="animate-heartbeat flex justify-center mx-auto items-center w-1/4 px-4 py-2 bg-[#f3c614] rounded-md text-base font-medium text-white hover:bg-green-700">
  <a href="tel:+61481372786" className="text-md text-light hover:text-white">
    Call Now
  </a>
</div>


        </div>
      </div>
    </nav>
  );
};

export default Header;
