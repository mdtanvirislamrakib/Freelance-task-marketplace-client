import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade, Parallax } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import firstSliderImage from "../assets/slide-1.jpg";
import secoundSliderImage from "../assets/slide-2.jpg";
import thirdSliderImage from "../assets/slide-3.jpg";

const slides = [
  {
    title: "Post Your Task with Ease",
    subtitle:
      "Connect with top-tier freelancers in minutes and get your projects done efficiently.",
    button: "Get Started Now",
    image: firstSliderImage,
  },
  {
    title: "Access Elite Freelance Talent",
    subtitle:
      "Our vetted professionals deliver exceptional results for your business needs.",
    button: "Browse Talent",
    image: secoundSliderImage,
  },
  {
    title: "Build Your Freelance Career",
    subtitle:
      "Join our platform to find premium projects and grow your professional portfolio.",
    button: "Join as a Freelancer",
    image: thirdSliderImage,
  },
];

const HeroSlider = () => {
  return (
    <div className="relative w-full h-screen max-h-[90vh] overflow-hidden bg-black">
      <Swiper
        modules={[Pagination, Autoplay, EffectFade, Parallax]}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          el: ".custom-pagination",
          renderBullet: (index, className) => {
            return `<span class="${className} w-3 h-3 rounded-full bg-white/50 hover:bg-white transition-all duration-300"></span>`;
          },
        }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1200}
        loop={true}
        parallax={true}
        className="w-full h-full"
      >
        {/* Slides */}
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full h-full bg-no-repeat bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
              data-swiper-parallax="-10%"
            >
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-800/85 to-transparent"></div>

              {/* Content Container */}
              <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-6 md:px-12">
                  <div
                    className="max-w-2xl lg:max-w-3xl xl:max-w-4xl space-y-6 transform transition-all duration-700 ease-out slide-in"
                    data-swiper-parallax="-200"
                  >
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight drop-shadow-lg">
                      {slide.title}
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-200 opacity-95 leading-relaxed drop-shadow-md">
                      {slide.subtitle}
                    </p>
                    <button className="mt-6 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 text-white font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                      {slide.button}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Pagination Dots */}
        <div className="custom-pagination absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex space-x-2"></div>
      </Swiper>
    </div>
  );
};

export default HeroSlider;