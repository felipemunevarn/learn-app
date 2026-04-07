import React from 'react';

const Login = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-2">Sign In</h2>
        <p className="text-gray-500 text-center mb-8">Welcome back</p>

        <form className="space-y-6">
          {/* User Name / Email Field */}
          <div>
            <label className="block text-sm font-semibold mb-2">User name</label>
            <input 
              type="email" 
              placeholder="Enter email" 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition"
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-semibold mb-2">Password</label>
            <input 
              type="password" 
              placeholder="Enter password" 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition"
            />
          </div>

          {/* CAPTCHA Placeholder */}
          <div className="flex items-center gap-3 p-4 border border-gray-200 bg-gray-50 rounded-lg">
            <input type="checkbox" className="w-5 h-5 rounded" />
            <span className="text-sm text-gray-700">I'm not a robot</span>
          </div>

          {/* Submit Button */}
          <button className="w-full bg-indigo-600 text-white font-bold py-3 rounded-lg hover:bg-indigo-700 transition shadow-md">
            Sign In
          </button>

          <div className="relative flex py-3 items-center">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="flex-shrink mx-4 text-gray-400 text-sm">OR</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <p className="text-center text-sm text-gray-600">
            Don't have an account? <span className="text-indigo-600 font-semibold cursor-pointer">Sign up</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;