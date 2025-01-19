'use client';

import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <div>
      {/* Footer Section */}
      <div id="footer" className="bg-gray-900 text-white py-16 mt-16">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between space-y-8 lg:space-y-0">
            {/* Left Section: Get In Touch + Quick Links */}
            <div className="flex flex-col lg:flex-row lg:w-2/3 space-y-8 lg:space-y-0 lg:space-x-8">
              {/* Column 1: Get In Touch */}
              <motion.div
                className="footer-column flex-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h4 className="text-2xl font-semibold text-primary mb-4">Get In Touch</h4>
                <h2 className="text-xl lg:text-2xl text-white font-bold mb-4">
                  <i className="fa fa-car text-xl lg:text-3xl text-primary mr-2"></i>CDS Nowra
                </h2>
                <p className="flex items-center text-gray-300 mb-2">
                  <i className="fa fa-map-marker-alt text-xl lg:text-3xl text-blue-400 mr-3"></i>
                  Nowra NSW 2541, Australia
                </p>
                <p className="flex items-center text-gray-300 mb-2">
                  <i className="fa fa-phone-alt text-xl lg:text-3xl text-green-700 mr-3"></i>
                  <a href="tel:+61481372786" className="hover:text-gray-300">0481 372 786</a>
                </p>
                <p className="flex items-center text-gray-300 mb-2">
                  <i className="fa fa-envelope text-xl lg:text-3xl text-red-400 mr-3"></i>
                  cockatoodrivingschool@gmail.com
                </p>
              </motion.div>

              {/* Column 2: Quick Links */}
              <motion.div
                className="footer-column flex-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <h4 className="text-2xl font-semibold text-primary mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><a className="text-gray-300 hover:text-primary" href="#about">About Us</a></li>
                  <li><a className="text-gray-300 hover:text-primary" href="#contact">Contact Us</a></li>
                  <li><a className="text-gray-300 hover:text-primary" href="#services">Our Services</a></li>
                  <li><a className="text-gray-300 hover:text-primary" href="#terms">Terms & Conditions</a></li>
                  <li><a className="text-gray-300 hover:text-primary" href="#support">Support</a></li>
                </ul>
              </motion.div>
            </div>

            {/* Right Section: Newsletter + Social Links */}
            <motion.div
              className="footer-column lg:w-1/3 flex flex-col space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h4 className="text-2xl font-semibold text-primary mb-4">Newsletter</h4>
              <form action="">
                <div className="flex">
                  <input
                    type="email"
                    className="w-full p-3 border border-gray-300 rounded-l-lg text-gray-900 focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Email Address"
                    required
                  />
                  <button className="bg-primary text-white px-8 py-2 rounded-r-lg hover:bg-primary-dark transition duration-300">
                    SignUp
                  </button>
                </div>
              </form>
              <h6 className="text-white text-xl lg:text-2xl text-primary">Follow Us</h6>
              <div className="flex space-x-6">
                <a
                  className="text-gray-300 hover:text-blue-600 transition"
                  href="https://www.facebook.com/profile.php?id=61560439003963"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook-f text-3xl lg:text-4xl"></i>
                </a>
                <a
                  className="text-gray-300 hover:text-red-600 transition"
                  href="https://www.youtube.com/@CDS_Pty_Ltd"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-youtube text-3xl lg:text-4xl"></i>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-gray-800 text-white py-4">
  <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col sm:flex-col justify-center items-center space-y-2 sm:space-y-2">
      {/* Top Content */}
      <div className="text-center sm:text-center">
        &copy; {new Date().getFullYear()} Cockatoo Driving School
      </div>
      {/* Bottom Content */}
      <div className="text-center sm:text-center">
        Design by 
        <a 
          className="text-primary hover:text-primary-dark ml-1" 
          href="https://binayakpokharel.com.np" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          LaveshTech
        </a>, All Rights Reserved.
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default Footer;
