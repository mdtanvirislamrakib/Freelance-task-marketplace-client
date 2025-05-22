
import { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../Provider/AuthProvider';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';

const Signup = () => {
  const { SignUpUser, setUser, googleLogin, updateUser } = use(AuthContext)
  const navigate = useNavigate()

  const handleSignUp = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photoURL.value;

    const lengthValidation = /[A-Za-z\d@$!%*?&]{6,}/;
    const smallLetterValidation = /(?=.*[a-z])/
    const capitalLetterValidation = /(?=.*[A-Z])/
    const digitValidation = /(?=.*\d)/;
    if (lengthValidation.test(password) === false) {
      return Swal.fire({
        icon: "error",
        title: "Invalid Password",
        text: "Password Must be 6 charecter",
      });
    } else if (smallLetterValidation.test(password) === false) {
      return Swal.fire({
        icon: "error",
        title: "Invalid Password",
        text: "password must have a small letter!",
      });
    } else if (capitalLetterValidation.test(password) === false) {
      return Swal.fire({
        icon: "error",
        title: "Invalid Password",
        text: "Password must be have an UpperCase Letter!",
      });
    } else if (digitValidation.test(password) === false) {
      return Swal.fire({
        icon: "error",
        title: "Invalid Password",
        text: "Password must be have a number!",
      });
    }


    SignUpUser(email, password)
      .then(result => {
        const user = result.user;
        updateUser({ displayName: name, photoURL: photoURL }).then(() => {
          setUser({ ...user, displayName: name, photoURL: photoURL })
          toast.success('Successfully Login!')
          navigate("/")
        }).catch(error => {
          setUser(user)
          toast.error(`${error.message}`)
        })

      })
      .catch(error => {
        console.log(error.message);

      })
  }

  const handleGoogleLogin = () => {
    googleLogin()
      .then(result => {
        console.log(result.user);
        navigate("/");
        toast.success('Successfully SignUp!')
      })
      .catch(error => {
        console.log(error.message);
      })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black px-4 sm:px-6 lg:px-8 py-10 lg:py-20">
      <div className="max-w-md w-full space-y-8 bg-gray-800 p-10 rounded-xl shadow-2xl">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
            Create an Account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-300">
            Join our freelance marketplace today
          </p>
        </div>
        <div>
          <button onClick={handleGoogleLogin} className='w-full flex items-center justify-center gap-5 font-bold px-5 py-3 rounded-sm border text-white cursor-pointer hover:bg-gray-900 transition-all '><FcGoogle size={25} /> Continue With Google</button>
        </div>

        <form onSubmit={handleSignUp} className="mt-8 space-y-6">

          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              className="appearance-none rounded-lg relative block w-full px-3 py-3 border border-gray-600 placeholder-gray-400 text-white bg-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="John Doe"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="appearance-none rounded-lg relative block w-full px-3 py-3 border border-gray-600 placeholder-gray-400 text-white bg-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="you@example.com"
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              className="appearance-none rounded-lg relative block w-full px-3 py-3 border border-gray-600 placeholder-gray-400 text-white bg-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="••••••••"
            />
          </div>

          {/* Profile Photo URL */}
          <div>
            <label htmlFor="photoURL" className="block text-sm font-medium text-gray-300 mb-1">
              Profile Picture URL
            </label>
            <input
              id="photoURL"
              name="photoURL"
              type="url"
              className="appearance-none rounded-lg relative block w-full px-3 py-3 border border-gray-600 placeholder-gray-400 text-white bg-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="https://example.com/profile.jpg "
            />
          </div>

          <div>
            <button
              type="submit"
              className="cursor-pointer relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150"
            >
              Sign Up
            </button>
          </div>
        </form>



        <div className="text-center">
          <p className="text-sm text-gray-400">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-indigo-400 hover:text-indigo-300">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;