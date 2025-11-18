import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle, FaApple, FaEnvelope, FaLock } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Fake login logic
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-50 dark:bg-slate-900">
      {/* Background Elements */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="w-full max-w-md glass-card p-8 relative z-10 mx-4"
      >
        <h2 className="text-3xl font-bold text-center mb-2 linear-text">Welcome Back</h2>
        <p className="text-center text-slate-500 mb-8">Sign in to manage your flights</p>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="relative">
            <FaEnvelope className="absolute top-4 left-4 text-slate-400" />
            <input 
              type="email" 
              placeholder="Email Address" 
              className="w-full pl-12 p-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 ring-blue-500 outline-none transition"
              required 
            />
          </div>
          
          <div className="relative">
            <FaLock className="absolute top-4 left-4 text-slate-400" />
            <input 
              type="password" 
              placeholder="Password" 
              className="w-full pl-12 p-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 ring-blue-500 outline-none transition"
              required 
            />
          </div>

          <div className="flex justify-between text-sm text-slate-500">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="rounded text-blue-500 focus:ring-0" />
              Remember me
            </label>
            <a href="#" className="hover:text-blue-500">Forgot Password?</a>
          </div>

          <button className="w-full bg-linear-to-r from-blue-600 to-purple-600 text-white font-bold py-3 rounded-xl shadow-lg hover:scale-[1.02] transition-transform">
            Sign In
          </button>
        </form>

        <div className="my-8 flex items-center gap-4">
          <div className="h-px bg-slate-300 dark:bg-slate-700 flex-1"></div>
          <span className="text-slate-400 text-sm">Or continue with</span>
          <div className="h-px bg-slate-300 dark:bg-slate-700 flex-1"></div>
        </div>

        <div className="flex gap-4">
          <button className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition">
            <FaGoogle className="text-red-500" /> Google
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition">
            <FaApple className="text-black dark:text-white" /> Apple
          </button>
        </div>

        <p className="text-center mt-8 text-slate-500">
          Don't have an account? <Link to="/signup" className="text-blue-500 font-bold">Sign Up</Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;