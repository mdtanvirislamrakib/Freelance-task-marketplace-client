import React, { useContext, useEffect, useState } from 'react';
import { FiBox, FiUser, FiBarChart2, FiPlusSquare } from 'react-icons/fi';
import { AuthContext } from '../Provider/AuthProvider';
import FeaturedTask from '../Components/FeaturedTask';
import { useLoaderData } from 'react-router';


const DashboardPage = () => {


    const {user} = useContext(AuthContext);
    const [totalProducts, setTotalProducts] = useState([]);
    const [myTasks, setMyTasks] = useState([])

const featuredTaskData = useLoaderData();

    useEffect(() => {
        fetch('https://freelance-task-marketplace-server-peach.vercel.app/users')
        .then(res => res.json())
        .then(data => setTotalProducts(data))
    }, [])

    useEffect(() => {
        fetch(`https://freelance-task-marketplace-server-peach.vercel.app/my-posted-tasks/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setMyTasks(data)
            console.log(data);
        })
    }, [user])


  const stats = [
    { title: 'Total Products', value: totalProducts?.length || 0, change: '+12%', icon: <FiBox />, color: 'bg-blue-100 text-blue-600' },
    { title: 'My Items', value: myTasks?.length || 0, change: '+5%', icon: <FiUser />, color: 'bg-green-100 text-green-600' },
    { title: 'Active Projects', value: 8, change: '+2', icon: <FiBarChart2 />, color: 'bg-purple-100 text-purple-600' },
    { title: 'Pending Tasks', value: 3, change: '-1', icon: <FiPlusSquare />, color: 'bg-yellow-100 text-yellow-600' }
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">Welcome back!</h2>
        <p className="opacity-90">Premium Member • Joined January 2023</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4">
            <div className={`inline-flex p-3 rounded-lg mb-3 ${stat.color}`}>
              {stat.icon}
            </div>
            <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1">{stat.title}</h3>
            <div className="flex items-end justify-between">
              <p className="text-xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
              <span className={`text-xs font-medium ${stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      <FeaturedTask featuredTaskData = {featuredTaskData}></FeaturedTask>
    </div>
  );
};

export default DashboardPage;