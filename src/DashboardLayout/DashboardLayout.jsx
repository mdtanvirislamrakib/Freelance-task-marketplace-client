import React, { useContext } from 'react';
import { Link, NavLink, Outlet } from 'react-router';
import { FiHome, FiBox, FiPlusSquare, FiUser, FiLogOut } from 'react-icons/fi';
import { AuthContext } from '../Provider/AuthProvider';

const DashboardLayout = () => {
    const { user, logout } = useContext(AuthContext);

    return (
        <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
            {/* Fixed Sidebar */}
            <div className="hidden md:flex w-64 flex-col bg-white dark:bg-gray-800 shadow-lg">
                <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                    <Link to={"/"} className="text-xl font-bold text-gray-800 dark:text-white">TaskHub</Link>
                </div>

                <nav className="flex-1 p-4">
                    <ul className="space-y-2">
                        <li>
                            <NavLink
                                to="/dashboard"
                                end
                                className={({ isActive }) =>
                                    `flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${isActive
                                        ? 'bg-blue-50 text-blue-600 dark:bg-gray-700'
                                        : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                                    }`
                                }
                            >
                                <FiHome />
                                <span>Overview</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/dashboard/browse-tasks"
                                className={({ isActive }) =>
                                    `flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${isActive
                                        ? 'bg-blue-50 text-blue-600 dark:bg-gray-700'
                                        : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                                    }`
                                }
                            >
                                <FiBox />
                                <span>Browse Tasks</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/dashboard/add-task"
                                className={({ isActive }) =>
                                    `flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${isActive
                                        ? 'bg-blue-50 text-blue-600 dark:bg-gray-700'
                                        : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                                    }`
                                }
                            >
                                <FiPlusSquare />
                                <span>Add Task</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={`/dashboard/my-posted-tasks/${user?.email}`}
                                className={({ isActive }) =>
                                    `flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${isActive
                                        ? 'bg-blue-50 text-blue-600 dark:bg-gray-700'
                                        : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                                    }`
                                }
                            >
                                <FiUser />
                                <span>My Tasks</span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                    <button
                        onClick={logout}
                        className="w-full flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 rounded-lg transition-colors"
                    >
                        <FiLogOut />
                        <span>Logout</span>
                    </button>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Header */}
                <header className="bg-white dark:bg-gray-800 shadow-sm z-10">
                    <div className="flex items-center justify-between p-4">
                        <h1 className="text-xl font-bold text-gray-800 dark:text-white">Dashboard</h1>
                        <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2">
                                <img
                                    className="w-8 h-8 rounded-full"
                                    src={user?.photoURL || "https://randomuser.me/api/portraits/men/32.jpg"}
                                    alt="User profile"
                                />
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                    {user?.displayName || 'User'}
                                </span>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Dynamic Content */}
                <main className="flex-1 overflow-y-auto p-4 md:p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;