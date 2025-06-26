import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaRocket, FaUsers, FaHandshake, FaChartLine, FaGlobe, FaLightbulb, FaShieldAlt, FaRegSmile } from "react-icons/fa";
import { useNavigate } from "react-router";

const AboutUs = () => {
    const navigate = useNavigate();

    const navigateToContact = () => {
        navigate("/contact")
    }

    const navigateSignUp = () => {
        navigate("/signup")
    }

  // Team data included directly in component
  const teamMembers = [
    {
      name: "Alex Johnson",
      position: "CEO & Founder",
      bio: "Former freelance developer with 10+ years experience building remote teams.",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Sarah Chen",
      position: "CTO",
      bio: "Tech lead from Google, specializing in scalable marketplace platforms.",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Michael Rodriguez",
      position: "Head of Community",
      bio: "Built thriving communities for 3 major SaaS platforms.",
      image: "https://randomuser.me/api/portraits/men/75.jpg"
    },
    {
      name: "Priya Patel",
      position: "Product Director",
      bio: "UX specialist focused on freelance workflow optimization.",
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    }
  ];

  // Simple counter component - no external dependency needed
  const StatsCounter = ({ end, duration = 2, prefix = "" }) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      let start = 0;
      const increment = end / (duration * 60); // 60fps
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000/60); // 60fps
      
      return () => clearInterval(timer);
    }, [end, duration]);
    
    return <span>{prefix}{count.toLocaleString()}</span>;
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Empowering Freelance Talent Worldwide
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl max-w-3xl mx-auto"
          >
            Connecting businesses with top-tier freelance professionals since 2018
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Our Journey Began With a Simple Idea
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              In 2018, our founders recognized a growing gap in the freelance economy. 
              Businesses struggled to find reliable talent, while skilled professionals 
              wasted time chasing payments. We built TaskBridge to solve both problems.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Today, we've grown into a global platform serving clients in 127 countries, 
              with over $250M in projects completed through our system.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <FaRocket className="text-blue-600 text-xl" />
                <span className="font-medium">500,000+ Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <FaUsers className="text-green-600 text-xl" />
                <span className="font-medium">150,000+ Freelancers</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-200 dark:bg-gray-800 rounded-xl p-2"
          >
            <div className="bg-gray-300 dark:bg-gray-700 rounded-lg w-full h-80 flex items-center justify-center">
              <FaRegSmile className="text-6xl text-gray-400" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16"
          >
            Our Core Principles
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaHandshake className="text-4xl mb-4 text-blue-600" />,
                title: "Trust First",
                desc: "Our escrow system ensures payments are secure and work is delivered as promised."
              },
              {
                icon: <FaChartLine className="text-4xl mb-4 text-green-600" />,
                title: "Growth Focused",
                desc: "We provide tools and education to help freelancers build sustainable careers."
              },
              {
                icon: <FaGlobe className="text-4xl mb-4 text-purple-600" />,
                title: "Global Reach",
                desc: "Connect with opportunities worldwide while working from anywhere."
              },
              {
                icon: <FaLightbulb className="text-4xl mb-4 text-yellow-500" />,
                title: "Innovation Driven",
                desc: "We continuously improve our platform based on user feedback."
              },
              {
                icon: <FaUsers className="text-4xl mb-4 text-red-600" />,
                title: "Community Powered",
                desc: "Our network effects create more opportunities for everyone."
              },
              {
                icon: <FaShieldAlt className="text-4xl mb-4 text-indigo-600" />,
                title: "Safety Guaranteed",
                desc: "Rigorous verification protects both clients and freelancers."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-center">
                  {item.icon}
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16"
        >
          Meet The Leadership Team
        </motion.h2>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="bg-gray-200 dark:bg-gray-700 h-48 flex items-center justify-center">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{member.name}</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-2">{member.position}</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center mb-16"
          >
            By The Numbers
          </motion.h2>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="text-4xl font-bold mb-2">
                <StatsCounter end={150000} duration={3} />
              </div>
              <p className="text-blue-100">Freelancers</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-4xl font-bold mb-2">
                <StatsCounter end={75000} duration={3} />
              </div>
              <p className="text-blue-100">Clients</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="text-4xl font-bold mb-2">
                +<StatsCounter end={500000} duration={3} />
              </div>
              <p className="text-blue-100">Projects Completed</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="text-4xl font-bold mb-2">
                <StatsCounter end={127} duration={3} />
              </div>
              <p className="text-blue-100">Countries</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-12 text-center text-white">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-6"
          >
            Ready to Join Our Community?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl mb-8 max-w-2xl mx-auto text-blue-100"
          >
            Whether you're looking to hire talent or grow your freelance business, we've got you covered.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button onClick={navigateSignUp} className="px-8 py-3 bg-white text-blue-600 font-bold rounded-full hover:bg-gray-100 transition-all cursor-pointer">
              Sign Up Free
            </button>
            <button onClick={navigateToContact} className="px-8 py-3 border-2 border-white text-white font-bold rounded-full hover:bg-blue-700 transition-all cursor-pointer">
              Contact Us
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;