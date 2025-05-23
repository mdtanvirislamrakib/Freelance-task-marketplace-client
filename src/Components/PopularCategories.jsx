import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  FaLaptopCode,
  FaPalette,
  FaFeatherAlt,
  FaBullhorn,
  FaMobileAlt,
  FaVideo,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  {
    title: "Web Development",
    icon: <FaLaptopCode className="w-6 h-6" />,
    count: "12K+ Tasks",
  },
  {
    title: "Graphic Design",
    icon: <FaPalette className="w-6 h-6" />,
    count: "9K+ Tasks",
  },
  {
    title: "Content Writing",
    icon: <FaFeatherAlt className="w-6 h-6" />,
    count: "7K+ Tasks",
  },
  {
    title: "Digital Marketing",
    icon: <FaBullhorn className="w-6 h-6" />,
    count: "6K+ Tasks",
  },
  {
    title: "Mobile App Development",
    icon: <FaMobileAlt className="w-6 h-6" />,
    count: "5K+ Tasks",
  },
  {
    title: "Video Editing",
    icon: <FaVideo className="w-6 h-6" />,
    count: "4K+ Tasks",
  },
];

const PopularCategories = () => {
  const sectionRef = useRef(null);
  const categoryRefs = useRef([]);

  useEffect(() => {
    categoryRefs.current.forEach((ref, index) => {
      gsap.fromTo(
        ref,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          delay: index * 0.1,
          scrollTrigger: {
            trigger: ref,
            start: "top 90%",
          },
        }
      );
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-white text-gray-900 dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-800 dark:text-white transition-colors duration-500"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Popular Categories
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            Browse top-rated freelance services in popular categories.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              ref={(el) => (categoryRefs.current[index] = el)}
              className="group p-6 rounded-xl bg-gray-100 dark:bg-gray-800/70 backdrop-blur-sm hover:bg-gray-200 dark:hover:bg-gray-700/90 border border-gray-200 dark:border-gray-700 hover:border-indigo-500 transition-all duration-300 shadow-lg hover:shadow-indigo-500/20 cursor-pointer transform hover:-translate-y-2"
            >
              <div className="flex items-center space-x-4">
                <div className="p-4 rounded-full bg-indigo-600 group-hover:bg-indigo-500 text-white transition-colors duration-300 flex-shrink-0">
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {category.count}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCategories;
