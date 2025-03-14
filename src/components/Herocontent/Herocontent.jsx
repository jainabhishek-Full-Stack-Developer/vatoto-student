
"use client";
import React, { useState, useEffect } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
import Heroslider from "./Heroslider";

const slides = [
  {
    image: "/images/home-hero-1.jpg",
  },
  {
    image: "/images/home-hero-2.jpg",
  },
  {
    image: "/images/home-hero-3.jpg",
  },
];
const Herocontent = () => {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 10000);
    return () => clearInterval(timer);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };
  return (
    <>
      <section className="text-gray-700 body-font bg-gray-50">
        <div className=" mx-auto px-5 py-16">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-10 items-center">
            {/* Left Content Section */}
            <div className="text-center  md:text-center xl:text-left w-full max-w-3xl mx-auto">
              <h1 className="title-font sm:text-5xl text-4xl mb-6 font-bold text-gray-900 leading-tight">
                Learn from Top Experts
                <br className="hidden lg:inline-block" />
                Anytime, Anywhere
              </h1>
              <p className="mb-8 leading-relaxed text-lg text-gray-600">
                Join millions of learners worldwide and access live interactive classes from industry leaders.
                Elevate your skills with real-time learning, mentorship, and practical knowledge – all in one place.
              </p>
              {/* Call-to-Action Buttons */}
              <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4">
                <button className="text-white bg-[#ff5c00] cursor-pointer border-0 py-3 px-8 focus:outline-none hover:opacity-90 rounded-full text-lg shadow-lg transition-all">
                  Start Learning Today
                </button>
                <button className="border-2 border-[#ff5c00] text-[#ff5c00] py-3 px-8 focus:outline-none cursor-pointer rounded-full text-lg transition-all">
                  Explore Courses
                </button>
              </div>
            </div>

            {/* Right Image Section - Hidden in lg, Visible in xl */}
            <div className="hidden lg:block md:hidden">
              <div className="max-w-xs sm:max-w-md md:max-w-lg w-full">
                <Heroslider />
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="hidden">
        <div
          className="relative w-full h-[500px] flex items-center justify-center text-white text-center"
          style={{
            backgroundImage: `url(${slides[current].image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transition: "background-image 1s ease-in-out",
          }}
        >
          {/* Overlay for Dark Effect */}
          <div className="absolute inset-0  bg-black/65 bg-opacity-0"></div>

          {/* Text Content (Static) */}
          {/* <div className="relative z-10 p-4">
        <h2 className="text-3xl font-bold">{slides[current].title}</h2>
        <p className="text-lg mt-2">{slides[current].subtitle}</p>
      </div> */}
          <div className="relative z-10 p-4">
            <h1 className="title-font sm:text-5xl text-4xl mb-6 font-bold text-white leading-tight">
              Learn from Top Experts
              <br className="hidden lg:inline-block" />
              Anytime, Anywhere
            </h1>
            <p className="mb-8 leading-relaxed text-md text-gray-50 w-[500px]">
              Join millions of learners worldwide and access live interactive classes from industry leaders.
              Elevate your skills with real-time learning, mentorship, and practical knowledge – all in one place.
            </p>
            {/* Call-to-Action Buttons */}
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-gradient-to-r from-[#ff5c00] via-red-500 to-red-600 border-0 py-3 px-8 focus:outline-none hover:opacity-90 rounded-full text-lg shadow-lg transition-all">
                Start Learning Today
              </button>
              <button className="ml-4 inline-flex text-gray-900 bg-gray-200 border-0 py-3 px-8 focus:outline-none hover:bg-gray-300 rounded-full text-lg transition-all">
                Explore Courses
              </button>
            </div>
          </div>

          {/* Navigation Buttons */}
          {/* <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-900 z-10"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-900 z-10"
      >
        <ChevronRight size={24} />
      </button> */}

          {/* Dots Navigation */}
          {/* <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-white" : "bg-gray-400"
            } transition-colors duration-300`}
          ></button>
        ))}
      </div> */}
        </div>
      </section>
    </>

  )
}

export default Herocontent;
