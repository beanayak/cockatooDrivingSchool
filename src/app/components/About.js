"use client";
import Image from 'next/image';

const About = () => {
  return (
    <div id="about" className="container mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Left Image Section */}
        <div 
          className="relative overflow-hidden pl-5 pt-5 h-full min-h-[400px] animate__animated animate__fadeInUp"
          style={{ animationDelay: '0.1s' }}
        >
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/carousel-1.png"
              alt="About Us"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="absolute top-0 left-0 bg-white p-3">
            <Image
              src="/carousel-2.png"
              alt="Overlay Image"
              width={200}
              height={200}
            />
          </div>
        </div>

        {/* Right Text Section */}
        <div className="animate__animated animate__fadeInUp" style={{ animationDelay: '0.5s' }}>
          <div className="h-full">
            <h6 className="text-primary uppercase mb-2">About Us</h6>
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">
              We Help Students To Pass Test & Get A License 
            </h1>
            <p className="text-justify">
              We are a driving school dedicated to helping students pass their driving tests on the first try. Our
              professional instructors and modern vehicles ensure a smooth and successful learning experience.
            </p>
            <p className="mb-4 text-justify">
              Our mission is to provide high-quality training and a supportive environment to make sure youre
              prepared and confident when it&apos;s time to take your driving test.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-4 pb-2">
              <div className="flex items-center">
                <i className="fa fa-check text-primary mr-2"></i>Fully Licensed
              </div>
              <div className="flex items-center">
                <i className="fa fa-check text-primary mr-2"></i>Online Tracking
              </div>
              <div className="flex items-center">
                <i className="fa fa-check text-primary mr-2"></i>Affordable Fee
              </div>
              <div className="flex items-center">
                <i className="fa fa-check text-primary mr-2"></i>Best Trainers
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                className="inline-flex items-center btn border-2 border-primary text-primary rounded-md p-2 hover:bg-primary hover:text-white hover:bg-green-700 transition"
                href="tel:+61481372786"
              >
                <div className="btn-square bg-primary text-white flex items-center justify-center h-10 w-10 rounded-md">
                  <i className="fa fa-phone-alt"></i>
                </div>
                <span className="ml-3">0481 372 786</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
