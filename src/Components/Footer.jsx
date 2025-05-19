import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-300">
      <div className="container mx-auto px-6 py-12 md:py-16">
        {/* Footer Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">

          {/* Brand Column */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">TaskMarket</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Connect with top freelancers and complete your projects faster than ever.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <FaTwitter />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-pink-500 transition-colors duration-300">
                <FaInstagram />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-blue-600 transition-colors duration-300">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="mr-2 text-indigo-400 mt-1">📍</span>
                <span className="text-gray-400">123 Freelance Street, San Francisco, CA</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-indigo-400 mt-1">📞</span>
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-indigo-400 mt-1">✉️</span>
                <span className="text-gray-400">support@taskmarket.com</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Cookie Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Refund Policy</a>
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Stay in the Loop</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to get updates on new features, deals, and more.
            </p>
            <form className="mt-2 flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-md bg-gray-700/50 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white placeholder-gray-400"
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
        <hr className="my-10 border-gray-700" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} TaskMarket. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Terms of Use</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;