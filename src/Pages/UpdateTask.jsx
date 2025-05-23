import { use } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const UpdateTask = () => {

    const updateTask = useLoaderData();
    const { user } = use(AuthContext)

    const { _id } = updateTask;


    const handleUpdateTask = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updateTask = Object.fromEntries(formData.entries());

        // send updated data to Db

        fetch(`http://localhost:5000/update-task/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateTask)
        })
            .then(res => res.json())
            .then(data => {
                if (data.matchedCount) {
                    toast.success('Successfully Update Task!')
                }
                console.log('updated Data', data);
            })
        //

    }


    return (
        <div>
            <div
                className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 p-4">
                <div className="w-full max-w-lg bg-gray-800 rounded-xl shadow-2xl p-8" >
                    <h2 className="text-2xl font-bold text-center text-white mb-6">Update Task</h2>
                    <form onSubmit={handleUpdateTask} className="space-y-4">

                        {/* Task Title */}
                        <div>
                            <label htmlFor="task-title" className="block text-sm font-medium text-gray-300">Task Title</label>
                            <input
                                type="text"
                                defaultValue={updateTask['task-title']}
                                id="task-title"
                                name="task-title"
                                placeholder="Enter task title"
                                required
                                className="mt-1 block w-full px-4 py-3 border border-gray-600 bg-gray-700 text-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 appearance-none outline-none transition-all"
                            />
                        </div>

                        {/* Category */}
                        <div>
                            <label htmlFor="category" className="block text-sm font-medium text-gray-300">Category</label>
                            <select
                                id="category"
                                name="category"
                                defaultValue={updateTask.category}
                                required
                                className="mt-1 block w-full px-4 py-3 bg-gray-700 border border-gray-600 text-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 appearance-none outline-none"
                            >
                                <option value="">Select Category</option>
                                <option value="Web Development">Web Development</option>
                                <option value="Design">Design</option>
                                <option value="Writing">Writing</option>
                                <option value="Marketing">Digital Marketing</option>
                                <option value="App Development">App Development</option>
                                <option value="Video Editing">Video Editing</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        {/* Description */}
                        <div>
                            <label htmlFor="description" className="block text-sm font-medium text-gray-300">Description</label>
                            <textarea
                                id="description"
                                name="description"
                                defaultValue={updateTask.description}
                                rows="4"
                                placeholder="Describe what needs to be done..."
                                required
                                className="mt-1 block w-full px-4 py-3 border border-gray-600 bg-gray-700 text-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 resize-none outline-none"
                            ></textarea>
                        </div>

                        {/* Deadline */}
                        <div>
                            <label htmlFor="deadline" className="block text-sm font-medium text-gray-300">Deadline</label>
                            <input
                                type="date"
                                id="deadline"
                                name="deadline"
                                defaultValue={updateTask.deadline}
                                required
                                className="mt-1 block w-full px-4 py-3 border border-gray-600 bg-gray-700 text-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 appearance-none outline-none"
                            />
                        </div>

                        {/* Budget */}
                        <div>
                            <label htmlFor="budget" className="block text-sm font-medium text-gray-300">Budget ($)</label>
                            <input
                                type="number"
                                id="budget"
                                name="budget"
                                defaultValue={updateTask.budget}
                                min="0"
                                step="0.01"
                                placeholder="Enter budget amount"
                                required
                                className="mt-1 block w-full px-4 py-3 border border-gray-600 bg-gray-700 text-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 appearance-none outline-none "
                            />
                        </div>

                        {/* User Email (Read Only) */}
                        <div>
                            <label htmlFor="user-email" className="block text-sm font-medium text-gray-300">User Email</label>
                            <input
                                type="email"
                                id="user-email"
                                name="user-email"
                                value={user?.email}
                                readOnly
                                className="mt-1 block w-full px-4 py-3 bg-gray-700 border border-gray-600 text-gray-400 rounded-md shadow-sm cursor-not-allowed"
                            />
                        </div>

                        {/* User Name (Read Only) */}
                        <div>
                            <label htmlFor="user-name" className="block text-sm font-medium text-gray-300">User Name</label>
                            <input
                                type="text"
                                id="user-name"
                                name="user-name"
                                value={user?.displayName}
                                readOnly
                                className="mt-1 block w-full px-4 py-3 bg-gray-700 border border-gray-600 text-gray-400 rounded-md shadow-sm cursor-not-allowed"
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition duration-200"
                        >
                            Update Task
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateTask;