import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade, Parallax } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import heroVideo1 from "../assets/hero-slider.mp4";
import heroVideo2 from "../assets/hero-slider.mp4";
import heroVideo3 from "../assets/hero-slider.mp4";
import heroVideo4 from "../assets/hero-slider.mp4";

import { Typewriter } from "react-simple-typewriter";
import {
  FaSearch,
  FaLightbulb,
  FaCode,
  FaChartLine,
  FaUserTie,
} from "react-icons/fa";

const slides = [
  {
    title: ["Post Your Task", "Hire Top Talent", "Get Work Done Fast"],
    subtitle: "Connect with professionals who deliver results you can trust.",
    video: heroVideo1,
  },
  {
    title: ["Hire Talent", "Discover Freelancers", "Scale Your Business"],
    subtitle: "Verified experts ready to take your business to the next level.",
    video: heroVideo2,
  },
  {
    title: ["Find Experts", "Boost Productivity", "Work Smarter"],
    subtitle: "Freelancers across all industries waiting for your task.",
    video: heroVideo3,
  },
  {
    title: ["Launch Projects", "Manage Tasks", "Achieve Goals"],
    subtitle: "A platform that makes hiring and working easy for everyone.",
    video: heroVideo4,
  },
];

const HeroSlider = () => {
  return (
    <div className="relative w-full h-[85vh] overflow-hidden bg-white dark:bg-black transition-colors duration-500"
>
      <Swiper
        modules={[Pagination, Autoplay, EffectFade, Parallax]}
        autoplay={{ delay: 5000 }}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
          renderBullet: (index, className) =>
            `<span class="${className} w-3 h-3 rounded-full bg-black/30 dark:bg-white/60 hover:bg-black dark:hover:bg-white transition-all duration-300"></span>`,
        }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1200}
        loop
        parallax
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full" data-swiper-parallax="-10%">
              <video
                autoPlay
                muted
                loop
                playsInline
                aria-label="Background video"
                className="absolute inset-0 w-full h-full object-cover z-0 opacity-50"
              >
                <source src={slide.video} type="video/mp4" />
              </video>

              {/* Gradient overlay with reduced opacity for light mode */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/40 dark:from-gray-900/60 via-white/20 dark:via-gray-800/40 to-transparent z-10 transition-colors duration-500"></div>

              <div className="absolute inset-0 flex items-center z-20">
                <div className="container mx-auto px-6 md:px-12">
                  <div className="max-w-3xl space-y-6" data-swiper-parallax="-200">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight tracking-tight drop-shadow-lg">
                      <Typewriter
                        words={slide.title}
                        loop={0}
                        cursor
                        cursorStyle="_"
                        typeSpeed={60}
                        deleteSpeed={50}
                      />
                    </h1>

                    <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-200 leading-relaxed drop-shadow-md">
                      {slide.subtitle}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      <button className="flex items-center gap-1 px-4 py-1 rounded-full text-sm bg-yellow-500 text-white hover:bg-yellow-600 transition">
                        <FaLightbulb /> Ideas
                      </button>
                      <button className="flex items-center gap-1 px-4 py-1 rounded-full text-sm bg-indigo-600 text-white hover:bg-indigo-700 transition">
                        <FaCode /> Development
                      </button>
                      <button className="flex items-center gap-1 px-4 py-1 rounded-full text-sm bg-purple-600 text-white hover:bg-purple-700 transition">
                        <FaChartLine /> Marketing
                      </button>
                      <button className="flex items-center gap-1 px-4 py-1 rounded-full text-sm bg-green-600 text-white hover:bg-green-700 transition">
                        <FaUserTie /> Hire Freelancer
                      </button>
                    </div>

                    <div className="mt-8 relative group">
                      <input
                        type="text"
                        placeholder="e.g., 'Web Developer', 'Logo Design'"
                        className="w-full px-12 py-4 bg-black/10 dark:bg-white/10 backdrop-blur-sm border border-black/20 dark:border-white/20 rounded-lg text-black dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
                      />
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-300">
                        <FaSearch />
                      </span>
                      <button className="absolute right-3 top-1/2 -translate-y-1/2 text-white bg-blue-600 hover:bg-blue-700 p-2 rounded-md transition-colors duration-300">
                        🔍
                      </button>
                    </div>

                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                      Try: <span className="italic">"hire a logo designer"</span>,{" "}
                      <span className="italic">"get a website built"</span>, or{" "}
                      <span className="italic">"find a digital marketer"</span>
                    </p>

                    <button className="mt-8 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 rounded-lg transition-all duration-300 text-white font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                      Get Started Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="custom-pagination absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-2"></div>
      </Swiper>
    </div>
  );
};

export default HeroSlider;
