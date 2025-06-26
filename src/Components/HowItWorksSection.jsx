import React from "react";
import { FaClipboardList, FaGavel, FaHandshake, FaRegSmile } from "react-icons/fa";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const steps = [
  {
    icon: <FaClipboardList className="text-4xl" />,
    title: "Post Your Task",
    desc: "Describe what you need done, set your budget and deadline.",
    color: "from-blue-500 to-blue-400"
  },
  {
    icon: <FaGavel className="text-4xl" />,
    title: "Receive Bids",
    desc: "Freelancers bid on your task with their best offers.",
    color: "from-green-500 to-green-400"
  },
  {
    icon: <FaHandshake className="text-4xl" />,
    title: "Choose & Collaborate",
    desc: "Select the best freelancer, chat, and get your task done.",
    color: "from-orange-500 to-orange-400"
  },
  {
    icon: <FaRegSmile className="text-4xl" />,
    title: "Complete & Review",
    desc: "Mark your task as complete and leave feedback.",
    color: "from-purple-500 to-purple-400"
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

const itemVariants = {
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
    transition: { duration: 0.2 }
  }
};

const HowItWorksSection = () => (
  <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
    <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
            <Typewriter
              words={['How It Works']}
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
                "Start your journey in just a few simple steps.",
                "Connecting clients and freelancers efficiently.",
                "Quality work delivered with ease."
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
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {steps.map((step, idx) => (
          <motion.div
            key={step.title}
            className="group"
            variants={itemVariants}
            whileHover="hover"
          >
            <div className="h-full bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 group-hover:shadow-xl">
              <div className={`p-1 bg-gradient-to-r ${step.color}`}>
                <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg">
                  <div className={`mb-5 p-4 rounded-full bg-gradient-to-r ${step.color} text-white shadow-md`}>
                    {step.icon}
                  </div>
                  <h3 className="font-bold text-xl mb-3 text-gray-800 dark:text-white text-center">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center mb-4">
                    {step.desc}
                  </p>
                  <span className="mt-auto px-3 py-1 text-xs font-semibold rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
                    Step {idx + 1}
                  </span>
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
        <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer">
          Get Started Now
        </button>
      </motion.div>
    </div>
  </section>
);

export default HowItWorksSection;