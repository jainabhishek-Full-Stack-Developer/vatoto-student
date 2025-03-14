"use client";
import React, { useState, useEffect } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

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

const Courseherosection = () => {
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

        <section>
            <div
                className="relative w-100% h-[500px] flex items-center justify-center text-white text-center"
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
                <div className="relative z-10 p-6 flex flex-col items-center text-center">
                    <h1 className="title-font text-white font-bold leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                        Bhagavad Gita for Kids
                        <br className="hidden lg:inline-block" />
                        Fun & Inspiring Lessons!
                    </h1>
                    <p className="mt-4 mb-8 text-gray-300 text-base sm:text-lg md:text-xl max-w-xl sm:max-w-2xl">
                        Discover the ancient teachings of the Bhagavad Gita in a fun and engaging way designed for kids aged 4-14.
                        Our program helps your child acquire essential life skills, values, and cultural knowledge to excel.
                    </p>
                    <div className="flex justify-center">
                        <button className="inline-flex text-white bg-[#ff5c00] cursor-pointer border-0 py-3 px-8 focus:outline-none hover:opacity-90 rounded-full text-lg shadow-lg transition-all">
                            Start Learning
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
    )
}

export default Courseherosection;
