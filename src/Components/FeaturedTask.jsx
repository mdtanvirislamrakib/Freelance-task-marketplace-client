import React from 'react';

const FeaturedTask = ({ featuredTaskData }) => {
  // Sort tasks by deadline (nearest first)
  const sortedTasks = [...featuredTaskData].sort(
    (a, b) => new Date(a.deadline) - new Date(b.deadline)
  );

  return (
    <div className="overflow-x-auto px-6 py-10 text-gray-900 dark:text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Featured Tasks
          </h2>
          <p className="mt-2 text-gray-700 dark:text-gray-400">
            Browse the most urgent and upcoming tasks
          </p>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-xl rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-100 dark:bg-gray-700/60 backdrop-blur-sm">
                <tr>
                  {['Name', 'Email', 'Category', 'Budget', 'Deadline'].map((heading) => (
                    <th
                      key={heading}
                      className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-800 dark:text-gray-300"
                    >
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {sortedTasks.length > 0 ? (
                  sortedTasks.map((task) => (
                    <tr
                      key={task._id}
                      className="hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors duration-150"
                    >
                      <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        {task["user-name"]}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-700 dark:text-gray-300">
                        {task["user-email"]}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-200 dark:bg-indigo-500/20 text-indigo-800 dark:text-indigo-300 ring-1 ring-indigo-500/30">
                          {task.category}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-800 dark:text-gray-300">
                        ${task.budget}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-700 dark:text-gray-300">
                        {new Date(task.deadline).toLocaleDateString()}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="px-6 py-8 text-center text-gray-400">
                      No tasks found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedTask;
