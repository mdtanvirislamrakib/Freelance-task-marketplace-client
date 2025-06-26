import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const testimonials = [
  {
    name: "Sarah M.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    role: "Client • Startup Founder",
    rating: 5,
    feedback: "Found a web developer within hours—project delivered before the deadline. The whole process was smooth and secure. Highly recommend!",
    bgColor: "bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/20"
  },
  {
    name: "Amit K.",
    avatar: "https://randomuser.me/api/portraits/men/85.jpg",
    role: "Freelancer • Web Developer",
    rating: 5,
    feedback: "Easy to post tasks and manage bids. I received multiple projects in my first week. The payment system is fast and reliable.",
    bgColor: "bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/20"
  },
  {
    name: "Linda P.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    role: "Client • Small Business Owner",
    rating: 4,
    feedback: "The platform helped me find quality writers for my blog. Loved the seamless communication and support!",
    bgColor: "bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/20"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren"
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  },
  hover: {
    y: -10,
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
    transition: { duration: 0.3 }
  }
};

const SuccessStoriesSection = () => (
  <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
    <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
            <Typewriter
              words={['Success Stories']}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={2500}
            />
          </span>
        </motion.h2>
        
        <motion.p
          className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <span>
            <Typewriter
              words={[
                "Real feedback from real users who trust our platform.",
                "See how our community is thriving together.",
                "Join thousands of satisfied users today."
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={2000}
            />
          </span>
        </motion.p>
      </div>

      <motion.div
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      >
        {testimonials.map((item) => (
          <motion.div
            key={item.name}
            className="group"
            variants={cardVariants}
            whileHover="hover"
          >
            <div className={`h-full ${item.bgColor} rounded-xl shadow-md p-1 border border-gray-200/50 dark:border-gray-700/30`}>
              <div className="h-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-lg p-8 relative overflow-hidden">
                <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-primary/5 dark:bg-primary/10"></div>
                <div className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-primary/5 dark:bg-primary/10"></div>
                
                <FaQuoteLeft className="text-4xl text-primary/10 dark:text-primary/20 absolute top-4 right-4" />
                
                <div className="relative z-10">
                  <div className="flex justify-center mb-6">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-16 h-16 rounded-full border-4 border-white dark:border-gray-800 shadow-lg object-cover"
                    />
                  </div>
                  
                  <div className="flex justify-center gap-1 mb-4">
                    {[...Array(item.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 text-lg" />
                    ))}
                    {[...Array(5 - item.rating)].map((_, i) => (
                      <FaStar key={i} className="text-gray-300 dark:text-gray-600 text-lg" />
                    ))}
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 text-center mb-6 min-h-[100px] italic relative">
                    "{item.feedback}"
                  </p>
                  
                  <div className="text-center">
                    <h4 className="font-bold text-gray-900 dark:text-white">{item.name}</h4>
                    <p className="text-sm text-primary dark:text-primary-300 font-medium mt-1">{item.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
      >
        <button className="px-8 py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 cursor-pointer">
          Join Our Community
        </button>
      </motion.div>
    </div>
  </section>
);

export default SuccessStoriesSection;