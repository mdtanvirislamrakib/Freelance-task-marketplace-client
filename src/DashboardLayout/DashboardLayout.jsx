import React, { useState, useContext } from 'react';
import { Link, NavLink, Outlet } from 'react-router';
import { FiHome, FiBox, FiPlusSquare, FiUser, FiLogOut, FiMenu, FiX, FiArrowLeft } from 'react-icons/fi';
import { AuthContext } from '../Provider/AuthProvider';

const DashboardLayout = () => {
    const { user, logout } = useContext(AuthContext);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleLogout = () => {
        logout();
        // Optionally redirect after logout
    };

    const navLinks = [
        { to: "/dashboard", icon: <FiHome />, text: "Overview", end: true },
        { to: "/dashboard/browse-tasks", icon: <FiBox />, text: "Browse Tasks" },
        { to: "/dashboard/add-task", icon: <FiPlusSquare />, text: "Add Task" },
        { to: `/dashboard/my-posted-tasks/${user?.email}`, icon: <FiUser />, text: "My Tasks" }
    ];

    const renderNavLink = ({ to, icon, text, end = false }) => (
        <li key={to}>
            <NavLink
                to={to}
                end={end}
                className={({ isActive }) =>
                    `flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                        isActive
                            ? 'bg-blue-50 text-blue-600 dark:bg-gray-700'
                            : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                    }`
                }
                onClick={() => setMobileMenuOpen(false)}
            >
                {icon}
                <span>{text}</span>
            </NavLink>
        </li>
    );

    const renderSidebar = (isMobile = false) => (
        <div className={`${isMobile ? 'md:hidden fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-300' : 'hidden md:flex w-64 flex-col fixed h-full'} bg-white dark:bg-gray-800 shadow-lg ${isMobile && !mobileMenuOpen ? '-translate-x-full' : 'translate-x-0'}`}>
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <Link to="/" className="text-xl font-bold text-gray-800 dark:text-white">TaskHub</Link>
                {isMobile && (
                    <button 
                        onClick={() => setMobileMenuOpen(false)}
                        className="absolute top-6 right-6 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 cursor-pointer"
                    >
                        <FiX className="w-6 h-6" />
                    </button>
                )}
            </div>

            <nav className="flex-1 p-4 overflow-y-auto">
                <ul className="space-y-2">
                    {navLinks.map(renderNavLink)}
                </ul>
            </nav>

            <div className="p-4 border-t border-gray-200 dark:border-gray-700 mt-auto">
                <button
                    onClick={handleLogout}
                    className="w-full flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                    <FiLogOut />
                    <span>Logout</span>
                </button>
            </div>
        </div>
    );

    return (
        <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
            {/* Desktop Sidebar */}
            {renderSidebar()}

            {/* Mobile Sidebar Overlay */}
            {mobileMenuOpen && (
                <div 
                    className="fixed inset-0  bg-opacity-50 z-40 md:hidden cursor-pointer"
                    onClick={() => setMobileMenuOpen(false)}
                />
            )}

            {/* Mobile Sidebar */}
            {renderSidebar(true)}

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col overflow-hidden md:ml-64 relative">
                {/* Header */}
                <header className="bg-white dark:bg-gray-800 shadow-sm z-10">
                    <div className="flex items-center justify-between p-4">
                        <div className="flex items-center space-x-4">
                            {/* Hamburger menu button for mobile */}
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="md:hidden text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 cursor-pointer"
                            >
                                {mobileMenuOpen ? (
                                    <FiArrowLeft className="w-6 h-6" />
                                ) : (
                                    <FiMenu className="w-6 h-6" />
                                )}
                            </button>
                            <h1 className="text-xl font-bold text-gray-800 dark:text-white">Dashboard</h1>
                        </div>
                        <div className="flex items-center space-x-4">
                            {user && (
                                <div className="flex items-center space-x-2">
                                    <img
                                        className="w-8 h-8 rounded-full"
                                        src={user?.photoURL || "https://randomuser.me/api/portraits/men/32.jpg"}
                                        alt="User profile"
                                        onError={(e) => {
                                            e.target.src = "https://randomuser.me/api/portraits/men/32.jpg";
                                        }}
                                    />
                                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                        {user?.displayName || 'User'}
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>
                </header>

                {/* Dynamic Content */}
                <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-gray-50 dark:bg-gray-900">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;