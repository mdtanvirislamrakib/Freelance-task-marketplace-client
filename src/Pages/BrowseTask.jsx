import React from 'react';
import { FaRegEye } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router';

const BrowseTask = () => {
  const browseTask = useLoaderData();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-10 px-4 transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white text-center transition-colors duration-500">
          Available Tasks
        </h2>
        <div className="overflow-x-auto rounded-xl shadow-lg">
          <table className="w-full bg-gray-200/70 dark:bg-gray-800/70 backdrop-blur-sm text-left text-sm text-gray-900 dark:text-gray-300 transition-colors duration-500">
            <thead className="bg-gray-300/50 dark:bg-gray-700/50 text-gray-700 dark:text-gray-200 uppercase tracking-wider border-b border-gray-300 dark:border-gray-600">
              <tr>
                <th className="px-6 py-4 font-semibold">Task Name</th>
                <th className="px-6 py-4 font-semibold">Client Email</th>
                <th className="px-6 py-4 font-semibold">Category</th>
                <th className="px-6 py-4 font-semibold">Budget</th>
                <th className="px-6 py-4 font-semibold text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-300 dark:divide-gray-700">
              {browseTask.map((task) => (
                <tr
                  key={task._id}
                  className="hover:bg-gray-300/30 dark:hover:bg-gray-700/30 transition-colors duration-150"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-gray-900 dark:text-white font-medium transition-colors duration-300">
                      {task["user-name"]}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700 dark:text-gray-300 transition-colors duration-300">
                    {task["user-email"]}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-200 dark:bg-blue-900/70 text-blue-900 dark:text-blue-200 rounded-full border border-blue-700 transition-colors duration-300">
                      {task.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-green-700 dark:text-green-400 font-medium transition-colors duration-300">
                    $ {task.budget}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <button
                      className="ml-auto px-4 py-2 text-sm font-medium text-blue-700 dark:text-blue-300 bg-blue-200 dark:bg-blue-700/30 hover:bg-blue-300 dark:hover:bg-blue-700/50 rounded-md transition-colors duration-300"
                      aria-label="View details"
                    >
                      <Link to={`/task-details/${task._id}`} className="flex items-center gap-2">
                        <FaRegEye />
                        <span>Details</span>
                      </Link>
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
