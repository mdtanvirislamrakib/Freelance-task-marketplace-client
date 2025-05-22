import React from 'react';
import { FaRegEye } from 'react-icons/fa';
import { useLoaderData } from 'react-router';


const BrowseTask = () => {
    const browseTask = useLoaderData()
    console.log(browseTask);
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-10 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-6 text-white text-center">Available Tasks</h2>
                <div className="overflow-x-auto rounded-xl shadow-lg">
                    <table className="w-full bg-gray-800/70 backdrop-blur-sm text-left text-sm text-gray-300">
                        <thead className="bg-gray-700/50 text-gray-200 uppercase tracking-wider border-b border-gray-600">
                            <tr>
                                <th className="px-6 py-4 font-semibold">Task Name</th>
                                <th className="px-6 py-4 font-semibold">Client Email</th>
                                <th className="px-6 py-4 font-semibold">Category</th>
                                <th className="px-6 py-4 font-semibold">Budget</th>
                                <th className="px-6 py-4 font-semibold text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-700">
                            {browseTask.map((task) => (
                                <tr
                                    key={task._id}
                                    className="hover:bg-gray-700/30 transition-colors duration-150"
                                >
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="text-white font-medium">{task["user-name"]}</span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">{task["user-email"]}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-900/70 text-blue-200 rounded-full border border-blue-700">
                                            {task.category}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-green-400 font-medium">
                                        $ {task.budget}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right">
                                        <button
                                            className="flex items-center gap-2 ml-auto px-4 py-2 text-sm font-medium text-blue-300 bg-blue-700/30 hover:bg-blue-700/50 rounded-md transition-colors"
                                            aria-label="View details"
                                        >
                                            <FaRegEye />
                                            <span>Details</span>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default BrowseTask;