import React from 'react';
import errorImage from '../assets/404/404.gif'
import Navbar from '../Components/Navbar';

const ErrorPage = () => {
    return (

        <div>
            <Navbar></Navbar>
            <div className='flex items-center justify-center flex-col'>

                <div>
                    <img src={errorImage} alt="" className='max-w-3xl mx-auto' />
                </div>

                <div>
                    <button className='text-lg px-10 py-3 bg-green-500 text-white font-bold cursor-pointer hover:rounded-3xl transition-all'>Go Back Home</button>
                </div>

            </div>
        </div>
    );
};

export default ErrorPage;