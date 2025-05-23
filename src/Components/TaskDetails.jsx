import { useContext, useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useLoaderData, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const TaskDetails = () => {
  const { user } = useContext(AuthContext);
  const loadedTask = useLoaderData();
  const navigate = useNavigate();

  const [task, setTask] = useState(loadedTask);

  const backToBrowse = () => {
    navigate('/browse-tasks');
  };

  const handleBidClick = () => {
    const updatedBids = [...(task.bids || []), user.email];

    fetch(`https://freelance-task-marketplace-server-peach.vercel.app/update-task/${task._id}`, {
      method: "PATCH",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ bids: updatedBids }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0 || data.acknowledged) {
          const newTask = { ...task, bids: updatedBids };
          setTask(newTask);
        }
      })
      .catch(err => console.error('Error updating bids:', err));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 transition-colors duration-500">
      <div className="max-w-4xl mx-auto">

        {/* Top Info */}
        <div className="mb-6 text-center">
          <p className="text-blue-700 dark:text-blue-300 text-sm transition-colors duration-300">
            You bid for <span className="font-semibold text-gray-900 dark:text-white transition-colors duration-300">{task?.bids?.length || 0}</span> opportunities
          </p>
        </div>

        {/* Back Button */}
        <button
          onClick={backToBrowse}
          className="flex cursor-pointer items-center gap-2 text-blue-700 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 transition mb-6"
        >
          <FaArrowLeft />
          <span>Back</span>
        </button>

        {/* Task Details Card */}
        <div className="bg-gray-200/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl shadow-2xl p-8 border border-gray-300 dark:border-gray-700 transition-colors duration-500">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">{task['task-title']}</h2>
          <p className="text-gray-700 dark:text-gray-400 mb-6 transition-colors duration-300">
            Posted by <span className="font-medium text-gray-900 dark:text-white transition-colors duration-300">{task['user-name']}</span>
          </p>

          <div className="mb-6">
            <span className="inline-block px-4 py-1 text-xs font-semibold bg-blue-200 dark:bg-blue-900/50 text-blue-900 dark:text-blue-200 rounded-full border border-blue-700 transition-colors duration-300">
              {task.category}
            </span>
          </div>

          <div className="space-y-4 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white transition-colors duration-300">Description</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed transition-colors duration-300">{task.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-600 dark:text-gray-400 text-sm transition-colors duration-300">Deadline</p>
              <p className="text-gray-900 dark:text-white font-medium transition-colors duration-300">
                {new Date(task.deadline).toDateString()}
              </p>
            </div>
            <div>
              <p className="text-gray-600 dark:text-gray-400 text-sm transition-colors duration-300">Budget</p>
              <p className="text-green-700 dark:text-green-400 font-bold text-lg transition-colors duration-300">$ {task.budget}</p>
            </div>
          </div>

          {/* Client Email */}
          <div className="mt-4">
            <p className="text-gray-600 dark:text-gray-400 text-sm transition-colors duration-300">Client Email</p>
            <p className="text-blue-700 dark:text-blue-400 font-medium transition-colors duration-300">{task['user-email']}</p>
          </div>

          {/* Bid Now Button */}
          <div className="mt-8 flex justify-end">
            <button
              onClick={handleBidClick}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold rounded-lg shadow-md transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Bid Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
