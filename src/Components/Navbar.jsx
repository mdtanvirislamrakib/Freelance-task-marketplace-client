import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Add Task", href: "/add-task" },
    { name: "Browse Tasks", href: "/browse-tasks" },
    { name: "My Posted Tasks", href: "/my-posted-tasks" },
  ];

  const navLinkClass = ({ isActive }) =>
    `relative group text-sm font-medium px-2 py-1 transition duration-300 ${
      isActive ? "text-indigo-400" : "text-gray-200 hover:text-white"
    }`;

  const underline = `
    absolute left-0 -bottom-1 h-[2px] w-0 bg-indigo-500 transition-all duration-300 group-hover:w-full
  `;

  return (
    <nav className="bg-[#0f2027]/70 backdrop-blur-md shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 text-white">

          {/* Logo */}
          <div className="text-2xl font-bold text-indigo-400">
            TaskHub
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map(link => (
              <NavLink key={link.name} to={link.href} className={navLinkClass}>
                {({ isActive }) => (
                  <span className="relative group">
                    {link.name}
                    <span className={`${underline} ${isActive ? "w-full" : ""}`}></span>
                  </span>
                )}
              </NavLink>
            ))}
            <NavLink
              to="/signup"
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
            >
              Sign Up
            </NavLink>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-200 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-[#0f2027] text-white shadow-md px-4 pb-4 pt-2 space-y-3"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map(link => (
              <NavLink
                key={link.name}
                to={link.href}
                className={({ isActive }) =>
                  `block font-medium transition ${
                    isActive ? "text-indigo-400" : "text-gray-200 hover:text-white"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <NavLink
              to="/signup"
              className="inline-block w-full text-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
            >
              Sign Up
            </NavLink>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
