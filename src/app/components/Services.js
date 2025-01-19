import Image from 'next/image';

const Services = () => {
  return (
    <div id="services" className="container mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Right Image Section for large devices and on top for small devices */}
        <div
          className="relative overflow-hidden h-full min-h-[300px] animate__animated animate__fadeInUp sm:order-first lg:order-none"
          style={{ animationDelay: '0.1s' }}
        >
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/carousel-3.png"
              alt="Driving School"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </div>

        {/* Left Services List Section */}
        <div
          className="animate__animated animate__fadeInUp sm:order-last lg:order-none"
          style={{ animationDelay: '0.5s' }}
        >
          <h6 className="text-primary uppercase mb-2">Our Services</h6>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            We Offer Professional Driving Lessons & Services
          </h1>
          <p className="mb-4">
            Our experienced instructors offer a wide range of driving lessons tailored to help you become a safe and confident driver. Whether you&apos;re a beginner or need a refresher, we&apos;ve got you covered.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 pb-2">
            <div className="flex items-center">
              <i className="fa fa-check text-primary mr-2"></i>Learner Driver Logbook Hours
            </div>
            <div className="flex items-center">
              <i className="fa fa-check text-primary mr-2"></i>Beginner&apos;s Driving Lessons
            </div>
            <div className="flex items-center">
              <i className="fa fa-check text-primary mr-2"></i>Intermediate & Advanced Lessons
            </div>
            <div className="flex items-center">
              <i className="fa fa-check text-primary mr-2"></i>Refresher&apos;s Course
            </div>
            <div className="flex items-center">
              <i className="fa fa-check text-primary mr-2"></i>Defensive Driving Course
            </div>
            <div className="flex items-center">
              <i className="fa fa-check text-primary mr-2"></i>Mock Driving Tests
            </div>
            <div className="flex items-center">
              <i className="fa fa-check text-primary mr-2"></i>Night Driving Lessons
            </div>
            <div className="flex items-center">
              <i className="fa fa-check text-primary mr-2"></i>All types of Parking Courses
            </div>
            <div className="flex items-center">
              <i className="fa fa-check text-primary mr-2"></i>Car Hire for Driving Test
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
