"use client";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faUsers, faFileAlt } from '@fortawesome/free-solid-svg-icons';

const Facts = () => {
  return (
    <div className="container-fluid py-8 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-stretch gap-6">
          {/* Fact 1 */}
          <div className="w-full sm:w-1/3 wow fadeIn" data-wow-delay="0.1s">
            <div className="bg-white shadow flex items-center p-4 h-full">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-primary flex items-center justify-center rounded-lg mr-4">
                  <FontAwesomeIcon icon={faCar} className="text-white text-xl" />
                </div>
                <div>
                  <h5 className="text-lg font-semibold mb-2">Easy Driving Learn</h5>
                  <span className="text-gray-600">Driving simple, safe, and stress-free with personalized lessons</span>
                </div>
              </div>
            </div>
          </div>
          {/* Fact 2 */}
          <div className="w-full sm:w-1/3 wow fadeIn" data-wow-delay="0.3s">
            <div className="bg-white shadow flex items-center p-4 h-full">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-primary flex items-center justify-center rounded-lg mr-4">
                  <FontAwesomeIcon icon={faUsers} className="text-white text-xl" />
                </div>
                <div>
                  <h5 className="text-lg font-semibold mb-2">NSW Recognized Instructor</h5>
                  <span className="text-gray-600">Expert trainers delivering consistent, high-quality guidance nationwide.</span>
                </div>
              </div>
            </div>
          </div>
          {/* Fact 3 */}
          <div className="w-full sm:w-1/3 wow fadeIn" data-wow-delay="0.5s">
            <div className="bg-white shadow flex items-center p-4 h-full">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-primary flex items-center justify-center rounded-lg mr-4">
                  <FontAwesomeIcon icon={faFileAlt} className="text-white text-xl" />
                </div>
                <div>
                  <h5 className="text-lg font-semibold mb-2">Get Licence</h5>
                  <span className="text-gray-600">Perfect your skills with test circuit practice, ensuring you&apos;re fully prepared for your driving exam.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facts;

