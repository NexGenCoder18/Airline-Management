import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaPlaneDeparture, FaUserCircle, FaMoon, FaSun } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Navbar = ({ toggleTheme, isDark }) => {
  const location = useLocation(); // यह पता लगाने के लिए कि अभी कौन सा पेज खुला है

  // चेक करें कि लिंक एक्टिव है या नहीं
  const isActive = (path) => location.pathname === path;

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }} 
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      className="fixed w-full z-50 backdrop-blur-xl bg-white/80 dark:bg-slate-900/80 border-b border-slate-200/50 dark:border-slate-700/50 shadow-sm transition-colors duration-300"
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* --- Premium Logo --- */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="bg-linear-to-br from-blue-500 to-cyan-400 p-2.5 rounded-xl text-white shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
            <FaPlaneDeparture className="text-xl" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-2xl font-extrabold tracking-tight text-slate-800 dark:text-white">
              Sky<span className="text-blue-500">Wings</span>
            </span>
            <span className="text-[10px] font-medium tracking-widest text-slate-500 uppercase">Premium Travel</span>
          </div>
        </Link>
        
        {/* --- Navigation Links with Active Line Animation --- */}
        <div className="hidden md:flex items-center gap-10">
          {[
            { name: 'Home', path: '/' },
            { name: 'Book Flight', path: '/search' },
            { name: 'Dashboard', path: '/dashboard' }
          ].map((link) => (
            <Link key={link.path} to={link.path} className="relative group py-2">
              <span className={`text-sm font-bold uppercase tracking-wide transition-colors duration-300 ${isActive(link.path) ? 'text-blue-600 dark:text-blue-400' : 'text-slate-600 dark:text-slate-300 hover:text-blue-500'}`}>
                {link.name}
              </span>
              {/* Animated Bottom Line */}
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-linear-to-r from-blue-500 to-cyan-500 rounded-full transform origin-left transition-transform duration-300 ${isActive(link.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
            </Link>
          ))}
        </div>

        {/* --- Actions --- */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <motion.button 
            whileTap={{ scale: 0.8, rotate: 180 }}
            onClick={toggleTheme} 
            className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-yellow-400 border border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          >
            {isDark ? <FaSun size={18} /> : <FaMoon size={18} />}
          </motion.button>

          {/* Login Button with Glow */}
          <Link to="/login">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 text-white px-6 py-2.5 rounded-full font-bold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all"
            >
              <FaUserCircle /> 
              <span>Login</span>
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;