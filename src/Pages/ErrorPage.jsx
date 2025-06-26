import React from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';
import { FaHome, FaArrowRight } from 'react-icons/fa';
import errorImage from '../assets/404/404.gif'; // Consider replacing with a more professional illustration

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex flex-col items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl w-full bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
            >
              404
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-6"
            >
              Page Not Found
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-gray-600 dark:text-gray-300 mb-8 text-lg"
            >
              The page you're looking for doesn't exist or has been moved. 
              Let's get you back on track.
            </motion.p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/')}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all"
              >
                <FaHome />
                Return Home
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate(-1)}
                className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
              >
                <FaArrowRight className="transform rotate-180" />
                Go Back
              </motion.button>
            </div>
          </div>
          
          <div className="md:w-1/2 bg-blue-50 dark:bg-gray-700 flex items-center justify-center p-8">
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              src={errorImage}
              alt="404 Error Illustration"
              className="max-w-full h-auto max-h-80 object-contain"
            />
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="mt-8 text-center text-gray-500 dark:text-gray-400 text-sm"
      >
        <p>Need help? <a href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline">Contact our support team</a></p>
        <p className="mt-1">Error Code: 404 - Page Not Found</p>
      </motion.div>
    </div>
  );
};

export default ErrorPage;