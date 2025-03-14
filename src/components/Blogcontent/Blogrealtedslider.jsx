"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight } from "lucide-react";

const blogPosts = [
    {
        title: "The Catalyzer",
        date: "Mar 16, 2020",
        category: "Business",
        description: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
        image: "/images/about-hero-1.jpg",
        link: "/blog/business/the-catalyzer",
    },
    {
        title: "Post Two",
        date: "Apr 10, 2021",
        category: "Tech",
        description: "Explore the latest advancements in technology and its impact on daily life.",
        image: "/images/about-hero-4.jpg",
        link: "/blog/tech/post-two",
    },
    {
        title: "Post Three",
        date: "Jun 05, 2022",
        category: "Lifestyle",
        description: "Discover lifestyle tips and tricks to enhance your everyday experience.",
        image: "/images/about-hero-3.jpg",
        link: "/blog/lifestyle/post-three",
    },
    {
        title: "Post Four",
        date: "Jan 20, 2023",
        category: "Health",
        description: "Health insights and wellness strategies to help you stay fit and active.",
        image: "/images/about-hero-1.jpg",
        link: "/blog/health/post-four",
    },
    {
        title: "Post Five",
        date: "Feb 15, 2024",
        category: "Finance",
        description: "Smart financial strategies for better wealth management.",
        image: "/images/about-hero-2.jpg",
        link: "/blog/finance/post-five",
    },
    {
        title: "Post Six",
        date: "Mar 01, 2024",
        category: "Travel",
        description: "Discover breathtaking destinations for your next adventure.",
        image: "/images/about-hero-1.jpg",
        link: "/blog/travel/post-six",
    },
];

const BlogRelatedSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerSlide, setItemsPerSlide] = useState(3); // Default: 3 per slide

    useEffect(() => {
        const updateItemsPerSlide = () => {
            if (window.innerWidth < 640) {
                setItemsPerSlide(1); // Small screens (sm)
            } else if (window.innerWidth < 1024) {
                setItemsPerSlide(2); // Medium screens (md)
            } else {
                setItemsPerSlide(3); // Large screens (lg)
            }
        };

        updateItemsPerSlide();
        window.addEventListener("resize", updateItemsPerSlide);
        return () => window.removeEventListener("resize", updateItemsPerSlide);
    }, []);

    const totalSlides = Math.ceil(blogPosts.length / itemsPerSlide);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    return (
        <section className="w-full px-4 md:px-8 lg:px-12 mt-15">
            {/* Heading */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900  mb-6">
                <span className="relative inline-block">
                    Related Posts
                </span>
            </h2>

            <div className="relative w-full overflow-hidden mb-20">
                {/* Slider Container */}
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                        <div key={slideIndex} className="flex min-w-full space-x-4">
                            {blogPosts
                                .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                                .map((post, index) => (
                                    <div key={index} className="p-4 w-1/1">
                                        <Link href={post.link} className="block">
                                            <img
                                                src={post.image}
                                                className="lg:h-100 md:h-100 w-full object-cover object-center"
                                                alt={post.title}
                                            />
                                            <div className="p-6">
                                                <div className="flex flex-row items-center mb-5">
                                                    <span>Mar 16, 2020</span>
                                                    <Badge variant="secondary" className="ml-5">{post.category}</Badge>
                                                </div>
                                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                                    {post.title}
                                                </h1>
                                                <p className="leading-relaxed mb-3">
                                                    Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.
                                                </p>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                        </div>
                    ))}
                </div>

                {/* Navigation Buttons */}
                <button
                    className="absolute top-1/2 left-2 transform -translate-y-1/2 text-black p-2 rounded-full bg-white/70 cursor-pointer"
                    onClick={prevSlide}
                >
                    <ChevronLeft className="w-7 h-7" />
                </button>
                <button
                    className="absolute top-1/2 right-2 transform -translate-y-1/2 text-black p-2 rounded-full bg-white/70 cursor-pointer"
                    onClick={nextSlide}
                >
                    <ChevronRight className="w-7 h-7" />
                </button>
            </div>
        </section>
    );
};

export default BlogRelatedSlider;
