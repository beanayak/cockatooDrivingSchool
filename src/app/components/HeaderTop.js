import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faClock, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF} from '@fortawesome/free-brands-svg-icons'; // Import from the 'brands' package

const HeaderTop = () => {
  return (
    <>
      {/* Topbar Start */}
      <div className="bg-gray-800 text-white p-1.5 sm:p-3 top-0 z-50 sticky">
        <div className="container mx-auto flex justify-between items-center">

          {/* Left side: Timing & Location (hidden on mobile) */}
          <div className="flex space-x-6 items-center text-sm">
            <div className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary text-xl" />
              <span>Nowra, NSW, Australia</span>
            </div>
            <div className="hidden lg:flex items-center space-x-2">
              <FontAwesomeIcon icon={faClock} className="text-primary" />
              <div className="flex flex-col leading-normal items-center">
                <small className="tracking-wider">Mon - Fri: 06:00 AM - 09:00 PM</small>
                <small className="tracking-wider">Sat: 06:00 AM - 04:00 PM</small>
              </div>
            </div>
          </div>

          {/* Right side: Name, Phone & Social Icons */}
          <div className="flex space-x-8 items-center text-sm">
            <div className="flex items-center space-x-3">
              <FontAwesomeIcon icon={faPhoneAlt} className="text-primary text-xl" />
              <span>
                <a href="tel:+61481372786" className=" text-md text-light hover:text-gray-300">0481 372 786</a>
              </span>
            </div>

            <div className="hidden lg:flex space-x-4">
              <a
                className="text-primary  pr-4 h-full hover:text-gray-200 transition duration-300"
                href="https://www.facebook.com/profile.php?id=61560439003963"
                aria-label="Facebook"
              >
                <FontAwesomeIcon icon={faFacebookF} className="text-xl" />
              </a>  
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}
    </>
  );
}

export default HeaderTop;
