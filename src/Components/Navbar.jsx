import { useState, useContext } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Tooltip } from 'react-tooltip';
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";

const Navbar = ({ toogleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const [mode, setMode] = useState(true);

  const handleMode = () => {
    setMode(!mode);
    toogleTheme();
  };

  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          position: "top-right",
          icon: "success",
          title: "Logout Successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
        });
      });
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Add Task", href: "/add-task" },
    { name: "Browse Tasks", href: "/browse-tasks" },
    { name: "My Posted Tasks", href: `/my-posted-tasks/${user?.email}` },
  ];

  const navLinkClass = ({ isActive }) =>
    `relative group text-sm font-medium px-2 py-1 transition duration-300 ${
      isActive
        ? "dark:text-indigo-400 text-indigo-700"
        : "dark:text-gray-200 text-gray-900 dark:hover:text-white hover:text-gray-700"
    }`;

  const underline =
    "absolute left-0 -bottom-1 h-[2px] w-0 bg-indigo-500 transition-all duration-300 group-hover:w-full";

  return (
    <nav className="dark:bg-gray-900/95 bg-base-100 dark:backdrop-blur-md shadow-md fixed top-0 left-0 right-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Navbar */}
        <div className="hidden md:flex justify-between items-center h-16 text-black dark:text-white">
          <div className="text-2xl font-bold text-indigo-400">TaskHub</div>

          <div className="flex-1 flex justify-center space-x-6">
            {navLinks.map((link) => (
              <NavLink key={link.name} to={link.href} className={navLinkClass}>
                {({ isActive }) => (
                  <span className="relative group">
                    {link.name}
                    <span className={`${underline} ${isActive ? "w-full" : ""}`}></span>
                  </span>
                )}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            {/* Mode toggle button for desktop */}
            <button onClick={handleMode} className="cursor-pointer">
              {mode ? <FaMoon size={30} /> : <MdSunny size={30} />}
            </button>

            {!user ? (
              <>
                <NavLink
                  to="/login"
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                >
                  Sign In
                </NavLink>
                <NavLink
                  to="/signup"
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                >
                  Sign Up
                </NavLink>
              </>
            ) : (
              <div className="relative">
                <div className="avatar cursor-pointer">
                  <div className="w-10 rounded-full ring-2 ring-indigo-500 ring-offset-2 transition-transform duration-300 hover:scale-105">
                    <img
                      onClick={() => setDropDown(!dropDown)}
                      src={user.photoURL}
                      alt="User Avatar"
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content={user.displayName}
                      className="object-cover"
                    />
                  </div>
                </div>

                {dropDown && (
                  <div
                    onMouseLeave={() => setDropDown(false)}
                    className="absolute right-0 mt-2 w-56 bg-white text-gray-800 rounded-lg shadow-xl z-50 animate-fade-in border"
                  >
                    <div className="px-4 py-3 border-b border-gray-200">
                      <p className="text-sm font-semibold truncate">
                        {user.displayName || "User Name"}
                      </p>
                      <p className="text-xs text-gray-500 truncate">
                        {user.email || "user@example.com"}
                      </p>
                    </div>
                    <ul className="py-1 text-sm">
                      <li>
                        <button
                          onClick={handleLogOut}
                          className="flex items-center w-full px-4 py-2 text-sm text-left text-red-600 hover:bg-red-50 transition-colors duration-150"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                            />
                          </svg>
                          Log out
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="md:hidden flex justify-between items-center h-16 text-white">
          <div className="text-xl font-bold text-indigo-400">TaskHub</div>

          <div className="flex items-center space-x-4">
            {/* Mode toggle button for mobile */}
            <button onClick={handleMode} className="cursor-pointer dark:text-white text-black">
              {mode ? <FaMoon size={24} /> : <MdSunny size={24} />}
            </button>

            {/* Hamburger menu */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="dark:text-gray-200 text-gray-800 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0f2027] text-white px-4 pb-4 pt-2 space-y-3">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              className={({ isActive }) =>
                `block font-medium transition ${
                  isActive ? "text-indigo-400" : "text-gray-200 hover:text-white"
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}

          {!user ? (
            <>
              <NavLink
                to="/login"
                className="inline-block w-full text-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                onClick={() => setIsOpen(false)}
              >
                Sign In
              </NavLink>
              <NavLink
                to="/signup"
                className="inline-block w-full text-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                onClick={() => setIsOpen(false)}
              >
                Sign Up
              </NavLink>
            </>
          ) : (
            <div className="space-y-2">
              <div className="flex gap-2 items-center">
                <div className="avatar">
                  <div className="w-6 rounded-full ring-2 ring-indigo-500">
                    <img
                      src={user.photoURL}
                      alt="User Avatar"
                      className="object-cover"
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content={user.displayName}
                    />
                  </div>
                </div>
                <div className="font-semibold text-lg">{user.displayName || "User"}</div>
              </div>
              <button
                onClick={handleLogOut}
                className="w-full text-left text-red-400 hover:text-red-300 px-2 py-1"
              >
                Log Out
              </button>
            </div>
          )}
        </div>
      )}

      <Tooltip id="my-tooltip" />
    </nav>
  );
};

export default Navbar;
