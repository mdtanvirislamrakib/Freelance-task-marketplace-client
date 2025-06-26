import React from "react";
import { motion } from "framer-motion";
import { FaDiscord, FaUsers, FaChartLine, FaHandshake, FaRegSmile, FaTrophy, FaShieldAlt } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { useNavigate } from "react-router";

const stats = [
  { value: "50,000+", label: "Active Freelancers" },
  { value: "30,000+", label: "Completed Projects" },
  { value: "95%", label: "Client Satisfaction" },
];

const benefits = [
  {
    icon: <FaUsers className="text-3xl" />,
    title: "Network Growth",
    desc: "Connect with 50,000+ skilled freelancers and clients worldwide.",
  },
  {
    icon: <FaChartLine className="text-3xl" />,
    title: "Career Boost",
    desc: "Freelancers earn 3x more than traditional job markets. Top-rated talent gets priority access to high-budget projects.",
  },
  {
    icon: <FaHandshake className="text-3xl" />,
    title: "Secure Payments",
    desc: "Escrow protection ensures you only pay when work is delivered. No upfront risks.",
  },
  {
    icon: <FaTrophy className="text-3xl" />,
    title: "Exclusive Perks",
    desc: "Top performers get featured in our newsletter, VIP support, and bonus rewards.",
  },
  {
    icon: <FaShieldAlt className="text-3xl" />,
    title: "Verified Talent",
    desc: "Rigorous ID checks and portfolio reviews to ensure quality.",
  },
  {
    icon: <FaRegSmile className="text-3xl" />,
    title: "24/7 Support",
    desc: "Dedicated help center and live chat for instant assistance.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, when: "beforeChildren" },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

const JoinOurCommunity = () => {

    const navigate = useNavigate();
    const navigatePostJOb = () => {
        navigate("/add-task")
    }
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header with Typewriter Effect */}
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
                words={["Join Our Thriving Community"]}
                loop={1}
                cursor
                cursorStyle="|"
                typeSpeed={80}
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
            <Typewriter
              words={[
                "Where top talent meets high-value projects.",
                "Trusted by freelancers and businesses in 100+ countries.",
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={2000}
            />
          </motion.p>
        </div>

        {/* Stats Bar */}
        <motion.div
          className="grid grid-cols-3 gap-4 mb-16 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              variants={itemVariants}
            >
              <p className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
                {stat.value}
              </p>
              <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-indigo-500"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="text-indigo-600 dark:text-indigo-400 mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                {benefit.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {benefit.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-xl overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Grow Your Career or Business?
            </h3>
            <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
              Join thousands of professionals who trust our platform to build their success stories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-white text-indigo-600 font-medium rounded-full shadow-md hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Sign Up as Freelancer
              </button>
              <button onClick={navigatePostJOb} className="px-6 py-3 bg-transparent border-2 border-white text-white font-medium rounded-full hover:bg-white hover:text-indigo-600 transition-all duration-300 transform hover:scale-105 cursor-pointer">
                Post a Job
              </button>
            </div>
            <p className="text-indigo-200 mt-6 text-sm">
              <FaDiscord className="inline mr-2" />
              Join our Discord community for exclusive tips and networking.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default JoinOurCommunity;