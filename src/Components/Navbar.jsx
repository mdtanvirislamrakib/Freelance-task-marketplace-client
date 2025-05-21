import { use, useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const { user, logOut } = use(AuthContext);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Add Task", href: "/add-task" },
    { name: "Browse Tasks", href: "/browse-tasks" },
    { name: "My Posted Tasks", href: "/my-posted-tasks" },
  ];

  const navLinkClass = ({ isActive }) =>
    `relative group text-sm font-medium px-2 py-1 transition duration-300 ${isActive ? "text-indigo-400" : "text-gray-200 hover:text-white"
    }`;

  const underline = `
    absolute left-0 -bottom-1 h-[2px] w-0 bg-indigo-500 transition-all duration-300 group-hover:w-full
  `;

  const showDropdown = () => {
    setDropDown(!dropDown)
    console.log(dropDown);
  }

  const handleLogOut = () => {
    logOut().then(() => {
      Swal.fire({
        position: "top-right",
        icon: "success",
        title: "Logout Successfully!",
        showConfirmButton: false,
        timer: 1500
      });
    }).catch(error => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${error.message}`,
      });
    })
  }

  return (
    <nav className="bg-gray-900/95 backdrop-blur-md shadow-md fixed top-0 left-0 right-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Navbar */}
        <div className="hidden md:flex justify-between items-center h-16 text-white relative">

          {/* Logo - Left */}
          <div className="text-2xl font-bold text-indigo-400">
            TaskHub
          </div>

          {/* Navigation Links - Center */}
          <div className="flex-1 flex justify-center space-x-6">
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
          </div>

          {/* User / Auth Section - Right */}
          <div className="flex items-center space-x-4">
            {!user && (
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
            )}

            {user && (
              <div className="relative">
                {/* Avatar - Click to toggle dropdown */}
                <div className="avatar cursor-pointer">
                  <div className="w-10 rounded-full ring-2 ring-indigo-500 ring-offset-2 transition-transform duration-300 hover:ring-offset-base-100 hover:scale-105">
                    <img
                      onClick={showDropdown}
                      src={user?.photoURL}
                      alt="User Avatar"
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Dropdown Menu - Controlled by dropDown state */}
                {dropDown && (
                  <div
                    onMouseLeave={() => setDropDown(false)} // Close when mouse leaves
                    className="absolute right-0 mt-2 w-56 bg-white text-gray-800 rounded-lg shadow-xl z-50 animate-fade-in"
                  >
                    {/* User Info */}
                    <div className="px-4 py-3 border-b border-gray-200">
                      <p className="text-sm font-semibold truncate">
                        {user?.displayName || "User Name"}
                      </p>
                      <p className="text-xs text-gray-500 truncate">{user?.email || "user@example.com"}</p>
                    </div>

                    {/* Logout Button */}
                    <ul className="py-1 text-sm">
                      <li>
                        <button
                          onClick={handleLogOut}
                          className="flex items-center w-full px-4 py-2 text-sm text-left text-red-600 hover:bg-red-50 transition-colors duration-150"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
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

        {/* Mobile & Tablet Navbar */}
        <div className="md:hidden flex justify-between items-center h-16 text-white">

          {/* Logo - Left */}
          <div className="text-xl font-bold text-indigo-400">
            TaskHub
          </div>

          {/* Mobile Toggle Button - Right */}
          <div className="flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-200 focus:outline-none"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0f2027] text-white px-4 pb-4 pt-2 space-y-3">
          {navLinks.map(link => (
            <NavLink
              key={link.name}
              to={link.href}
              className={({ isActive }) =>
                `block font-medium transition ${isActive ? "text-indigo-400" : "text-gray-200 hover:text-white"
                }`
              }
              onClick={() => setIsOpen(false)} // Close menu on link click
            >
              {link.name}
            </NavLink>
          ))}

          {!user && (
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
          )}

          {user && (
            <div className="space-y-2">
              <div className="font-semibold text-center">
                {user?.displayName || "User"}
              </div>
              <button
                onClick={() => {
                  console.log("Logout clicked");
                }}
                className="w-full text-left text-red-400 hover:text-red-300 px-2 py-1"
              >
                Log Out
              </button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;