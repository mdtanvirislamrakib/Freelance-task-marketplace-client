import React from 'react';
import { useNavigate } from 'react-router';
import errorImage from '../assets/404/404.gif';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <main className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-10 space-y-8">
        <img
          src={errorImage}
          alt="Page not found - 404 error"
          className="max-w-3xl mx-auto"
        />
        <button
          onClick={() => navigate('/')}
          className="text-lg px-10 py-3 bg-green-500 text-white font-bold rounded-md hover:rounded-3xl transition-all cursor-pointer"
        >
          Go Back Home
        </button>
      </main>

      <Footer />
    </>
  );
};

export default ErrorPage;
