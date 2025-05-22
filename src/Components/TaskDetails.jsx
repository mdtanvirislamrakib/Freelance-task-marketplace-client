import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useLoaderData, useNavigate } from 'react-router';

const TaskDetails = () => {
  const task = useLoaderData();
  const navigate = useNavigate();

  // Initial bid count from task data or fallback to 0
  const initialBidCount = parseInt(task.bidsCount, 10) || 0;
  const [bidsCount, setBidsCount] = useState(initialBidCount);

  const backtoReverse = () => {
    navigate('/browse-tasks');
  };

  const handleBidClick = () => {
    setBidsCount((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Top Bid Info */}
        <div className="mb-6 text-center">
          <p className="text-blue-300 text-sm">
            You bid for <span className="font-semibold text-white">{bidsCount}</span> opportunities
          </p>
        </div>

        {/* Back Button */}
        <button
          onClick={backtoReverse}
          className="flex cursor-pointer items-center gap-2 text-blue-400 hover:text-blue-300 transition mb-6"
        >
          <FaArrowLeft />
          <span>Back</span>
        </button>

        {/* Task Details Card */}
        <div className="bg-gray-800/70 backdrop-blur-sm rounded-xl shadow-2xl p-8 border border-gray-700">
          <h2 className="text-3xl font-bold text-white mb-2">{task['task-title']}</h2>
          <p className="text-gray-400 mb-6">
            Posted by <span className="font-medium text-white">{task['user-name']}</span>
          </p>

          <div className="mb-6">
            <span className="inline-block px-4 py-1 text-xs font-semibold bg-blue-900/50 text-blue-200 rounded-full border border-blue-700">
              {task.category}
            </span>
          </div>

          <div className="space-y-4 mb-8">
            <h3 className="text-lg font-semibold text-white">Description</h3>
            <p className="text-gray-300 leading-relaxed">{task.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-400 text-sm">Deadline</p>
              <p className="text-white font-medium">
                {new Date(task.deadline).toDateString()}
              </p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Budget</p>
              <p className="text-green-400 font-bold text-lg">$ {task.budget}</p>
            </div>
          </div>

          {/* Bids Section (Clickable) */}
          <div className="mt-8 pt-6 border-t border-gray-700">
            <p className="text-gray-400 text-sm">Total Bids</p>
            <button
              onClick={() => navigate(`/task/${task.id}/bids`)}
              className="text-blue-400 font-medium hover:underline flex items-center gap-2"
            >
              {task.totalBids || 0} bid{task.totalBids !== 1 ? 's' : ''}
            </button>
          </div>

          {/* Client Email */}
          <div className="mt-4">
            <p className="text-gray-400 text-sm">Client Email</p>
            <p className="text-blue-400 font-medium">{task['user-email']}</p>
          </div>

          {/* Bid Now Button */}
          <div className="mt-8 flex justify-end">
            <button
              onClick={handleBidClick}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold rounded-lg shadow-md transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Bids Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;