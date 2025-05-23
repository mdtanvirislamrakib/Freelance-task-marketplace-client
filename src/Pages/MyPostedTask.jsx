import { useState } from 'react';
import { FaEdit, FaRegHandshake, FaRegLightbulb, FaTrashAlt } from 'react-icons/fa';
import { Link, useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const MyPostedTask = () => {
  const myTask = useLoaderData();
  const [tasks, setTasks] = useState(myTask);
  const navigate = useNavigate();

  const redirectAddTask = () => {
    navigate("/add-task");
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://freelance-task-marketplace-server-peach.vercel.app/users/${id}`, {
          method: "DELETE"
        })
          .then(res => res.json())
          .then(data => {
            const remainingTasks = tasks.filter(task => task._id !== id);
            setTasks(remainingTasks);
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          });
      }
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center flex-col bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-10 px-4 transition-colors duration-500">
      <div className="w-full max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white text-center transition-colors duration-300">My Posted Tasks</h2>

        {/* No Task State */}
        {myTask?.length < 1 ? (
          <div className="text-center py-16 px-6 bg-gray-200/70 dark:bg-gray-800/50 rounded-xl shadow-lg border border-gray-300 dark:border-gray-700 transition-colors duration-300">
            <div className="flex justify-center mb-4">
              <FaRegLightbulb className="text-gray-400 dark:text-gray-600 text-5xl transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">No Tasks Posted Yet</h3>
            <p className="text-gray-700 dark:text-gray-400 mb-6 max-w-md mx-auto transition-colors duration-300">
              It looks like you haven't posted any tasks. Start sharing your project needs and get bids from talented freelancers!
            </p>
            <button
              onClick={redirectAddTask}
              className="px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-md font-medium transition"
            >
              Post a New Task
            </button>
          </div>
        ) : (
          <div className="overflow-x-auto rounded-xl shadow-lg border border-gray-300 dark:border-gray-700 transition-colors duration-300">
            <table className="w-full min-w-max table-auto bg-gray-200/70 dark:bg-gray-800/70 backdrop-blur-sm text-left text-sm text-gray-900 dark:text-gray-300 transition-colors duration-300">
              <thead className="bg-gray-300/50 dark:bg-gray-700/50 text-gray-900 dark:text-gray-200 uppercase tracking-wider border-b border-gray-400 dark:border-gray-600 transition-colors duration-300">
                <tr>
                  <th className="px-4 py-3 font-semibold text-xs sm:text-sm whitespace-nowrap">Task Title</th>
                  <th className="px-4 py-3 font-semibold text-xs sm:text-sm whitespace-nowrap">Name</th>
                  <th className="px-4 py-3 font-semibold text-xs sm:text-sm whitespace-nowrap">Category</th>
                  <th className="px-4 py-3 font-semibold text-xs sm:text-sm whitespace-nowrap">Deadline</th>
                  <th className="px-4 py-3 font-semibold text-xs sm:text-sm whitespace-nowrap">Budget</th>
                  <th className="px-4 py-3 font-semibold text-xs sm:text-sm whitespace-nowrap text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-400 dark:divide-gray-700 transition-colors duration-300">
                {tasks.map((task) => (
                  <tr key={task._id} className="hover:bg-gray-300/40 dark:hover:bg-gray-700/30 transition-colors duration-150 cursor-default">
                    <td className="px-4 py-3 font-medium text-xs sm:text-sm whitespace-nowrap text-gray-900 dark:text-white transition-colors duration-300">
                      {task['task-title']}
                    </td>
                    <td className="px-4 py-3 font-semibold text-xs sm:text-sm whitespace-nowrap text-yellow-700 dark:text-yellow-400 transition-colors duration-300">
                      {task['user-name']}
                    </td>
                    <td className="px-4 py-3 text-xs sm:text-sm whitespace-nowrap">
                      <span className="inline-block px-2 py-1 text-xs font-medium bg-blue-200 dark:bg-blue-900/50 text-blue-900 dark:text-blue-200 rounded-full border border-blue-700 transition-colors duration-300">
                        {task.category}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-xs sm:text-sm whitespace-nowrap text-gray-700 dark:text-gray-400 transition-colors duration-300">
                      {new Date(task.deadline).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-3 font-medium text-xs sm:text-sm whitespace-nowrap text-green-700 dark:text-green-400 transition-colors duration-300">
                      $ {task.budget}
                    </td>
                    <td className="px-4 py-3 text-right space-x-1 sm:space-x-2 whitespace-nowrap">
                      <Link
                        to={`/update-task/${task._id}`}
                        className="inline-flex items-center gap-1 sm:gap-2 px-2 py-1 bg-blue-600 hover:bg-blue-500 text-white rounded text-xs sm:text-sm transition"
                      >
                        <FaEdit className="text-xs sm:text-sm" />
                        <span className="hidden sm:inline">Update</span>
                      </Link>
                      <button
                        onClick={() => handleDelete(task._id)}
                        className="inline-flex items-center gap-1 sm:gap-2 px-2 py-1 bg-red-600 hover:bg-red-500 text-white rounded text-xs sm:text-sm transition"
                      >
                        <FaTrashAlt className="text-xs sm:text-sm" />
                        <span className="hidden sm:inline">Delete</span>
                      </button>
                      <button className="inline-flex items-center gap-1 sm:gap-2 px-2 py-1 bg-yellow-600 hover:bg-yellow-500 text-white rounded text-xs sm:text-sm transition">
                        <FaRegHandshake className="text-xs sm:text-sm" />
                        <span>{task?.bids?.length || 0} Bids</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyPostedTask;
