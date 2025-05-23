import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-100 via-white to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-black text-gray-800 dark:text-gray-300 transition-colors duration-300">
      <div className="container mx-auto px-6 py-12 md:py-16">

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">

          {/* Brand Column */}
          <div>
            <h2 className="text-2xl font-bold text-indigo-600 dark:text-white mb-4">TaskHub</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Connect with top freelancers and complete your projects faster than ever.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/" target="_blank" aria-label="Facebook" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition">
                <FaFacebookF />
              </a>
              <a href="https://x.com/" target="_blank" aria-label="Twitter" className="text-gray-600 dark:text-gray-400 hover:text-blue-400 transition">
                <FaTwitter />
              </a>
              <a href="https://www.instagram.com" target="_blank" aria-label="Instagram" className="text-gray-600 dark:text-gray-400 hover:text-pink-500 transition">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/" target="_blank" aria-label="LinkedIn" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-indigo-700 dark:text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="mr-2 text-indigo-500 mt-1">📍</span>
                <span className="text-gray-700 dark:text-gray-400">123 Freelance Street, San Francisco, CA</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-indigo-500 mt-1">📞</span>
                <span className="text-gray-700 dark:text-gray-400">+88 01880598006</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-indigo-500 mt-1">✉️</span>
                <span className="text-gray-700 dark:text-gray-400">support@taskmarket.com</span>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold text-indigo-700 dark:text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://www.teemservices.com/" target="_blank" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-white transition">Terms of Service</a>
              </li>
              <li>
                <a href="https://policies.google.com/privacy?hl=en-US" target="_blank" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-white transition">Privacy Policy</a>
              </li>
              <li>
                <a href="https://www.cookiebot.com/en/cookie-policy/" target="_blank" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-white transition">Cookie Policy</a>
              </li>
              <li>
                <a href="https://support.google.com/googleplay/answer/2479637?hl=en" target="_blank" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-white transition">Refund Policy</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-indigo-700 dark:text-white mb-4">Stay in the Loop</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Subscribe to get updates on new features, deals, and more.
            </p>
            <form className="mt-2 flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-md bg-white dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                required
              />
              <button
                type="submit"
                className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 rounded-md text-white font-medium transition-all duration-300 shadow-md hover:shadow-indigo-500/20"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-10 border-gray-300 dark:border-gray-700" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 dark:text-gray-500">
          <p>© {new Date().getFullYear()} TaskMarket. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="https://www.privacypolicygenerator.info/" target="_blank" className="hover:text-indigo-600 dark:hover:text-white transition">Privacy Policy</a>
            <a href="https://termly.io/resources/templates/terms-of-use-template/" target="_blank" className="hover:text-indigo-600 dark:hover:text-white transition">Terms of Use</a>
            <a href="https://www.xml-sitemaps.com/" target="_blank" className="hover:text-indigo-600 dark:hover:text-white transition">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
