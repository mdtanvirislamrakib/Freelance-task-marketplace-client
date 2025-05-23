import { useState } from 'react';
import { FaEdit, FaRegHandshake, FaRegLightbulb, FaTrashAlt } from 'react-icons/fa';
import { Link, useLoaderData, useNavigate, useParams } from 'react-router';
import Swal from 'sweetalert2';

const MyPostedTask = () => {
    const myTask = useLoaderData();
    console.log(myTask);
    const [tasks, setTasks] = useState(myTask)
    const params = useParams();
    console.log(params);
    const navigate = useNavigate();
    const redirectAddTask = () => {
        navigate("/add-task")
    }




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
                        const remainingTasks = tasks.filter(remainingTask => remainingTask._id !== id)
                        setTasks(remainingTasks)
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }

                    })



            }
        });
    }

    return (
        <div className="min-h-screen flex items-center justify-center flex-col bg-gradient-to-b from-gray-900 to-gray-800 py-10 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-white text-center">My Posted Tasks</h2>

                {/* Responsive Table Wrapper */}
                {
                    myTask?.length < 1 ? <div className="text-center py-16 px-6 bg-gray-800/50 rounded-xl shadow-lg border border-gray-700">
                        <div className="flex justify-center mb-4">
                            <FaRegLightbulb className="text-gray-600 text-5xl" />
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">No Tasks Posted Yet</h3>
                        <p className="text-gray-400 mb-6 max-w-md mx-auto">
                            It looks like you haven't posted any tasks. Start sharing your project needs and get bids from talented freelancers!
                        </p>
                        <button onClick={redirectAddTask} className="px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-md font-medium transition">
                            Post a New Task
                        </button>
                    </div> : <div className="overflow-x-auto rounded-xl shadow-lg">
                        <table className="w-full bg-gray-800/70 backdrop-blur-sm text-left text-sm text-gray-300">
                            <thead className="bg-gray-700/50 text-gray-200 uppercase tracking-wider border-b border-gray-600">
                                <tr>
                                    <th className="px-6 py-4 font-semibold">Task Title</th>
                                    <th className="px-6 py-4 font-semibold">Name</th>
                                    <th className="px-6 py-4 font-semibold">Category</th>
                                    <th className="px-6 py-4 font-semibold">Deadline</th>
                                    <th className="px-6 py-4 font-semibold">Budget</th>
                                    <th className="px-6 py-4 font-semibold text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-700">
                                {tasks.map((task) => (
                                    <tr
                                        key={task._id}
                                        className="hover:bg-gray-700/30 transition-colors duration-150"
                                    >
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="text-white font-medium">{task['task-title']}</span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-yellow-400 font-semibold">
                                            {task['user-name']}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-900/50 text-blue-200 rounded-full border border-blue-700">
                                                {task.category}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-gray-300">
                                            {new Date(task.deadline).toDateString()}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-green-400 font-medium">
                                            $ {task.budget}
                                        </td>

                                        <td className="px-6 py-4 whitespace-nowrap text-right space-x-2">
                                            <button
                                                className="inline-flex items-center gap-2 px-3 py-1 bg-blue-600 hover:bg-blue-500 text-white rounded-md transition"
                                                aria-label="Update task"
                                            >
                                                <Link to={`/update-task/${task._id}`} className='inline-flex items-center gap-2'>
                                                    <FaEdit />
                                                    Update
                                                </Link>

                                            </button>
                                            <button
                                                onClick={() => handleDelete(task._id)}
                                                className="inline-flex items-center gap-2 px-3 py-1 bg-red-600 hover:bg-red-500 text-white rounded-md transition"
                                                aria-label="Delete task"
                                            >
                                                <FaTrashAlt />
                                                Delete
                                            </button>
                                            <button
                                                className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-600 hover:bg-yellow-500 text-white rounded-md transition"
                                                aria-label="View bids"
                                            >
                                                <FaRegHandshake />
                                                {task?.bids?.length} Bids
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                }

            </div>
        </div>
    );
};

export default MyPostedTask;