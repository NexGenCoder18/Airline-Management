import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaPlaneDeparture, FaUserCircle, FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ toggleTheme, isDark }) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false); // Mobile Menu State

  const isActive = (path) => location.pathname === path;

  return (
    <motion.nav 
      initial={{ y: -100 }} animate={{ y: 0 }}
      className="fixed w-full z-50 backdrop-blur-xl bg-white/80 dark:bg-slate-950/80 border-b border-slate-200/50 dark:border-slate-800/50 shadow-sm"
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 z-50">
          <div className="bg-blue-600 p-2 rounded-lg text-white">
            <FaPlaneDeparture />
          </div>
          <span className="text-xl font-extrabold text-slate-800 dark:text-white">SkyWings</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {['/', '/search', '/dashboard'].map((path, idx) => (
            <Link key={idx} to={path} className={`text-sm font-bold uppercase tracking-wide ${isActive(path) ? 'text-blue-600' : 'text-slate-500 hover:text-blue-500'}`}>
              {path === '/' ? 'Home' : path.replace('/', '')}
            </Link>
          ))}
        </div>

        {/* Actions (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <button onClick={toggleTheme} className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-yellow-400">
            {isDark ? <FaSun /> : <FaMoon />}
          </button>
          <Link to="/login" className="bg-blue-600 text-white px-6 py-2 rounded-full font-bold text-sm hover:shadow-lg transition">
            Login
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center gap-4 z-50">
           <button onClick={toggleTheme} className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-yellow-400">
            {isDark ? <FaSun /> : <FaMoon />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl text-slate-800 dark:text-white">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 p-6 flex flex-col gap-4 shadow-2xl md:hidden"
          >
            <Link onClick={() => setIsOpen(false)} to="/" className="text-lg font-bold text-slate-800 dark:text-white py-2 border-b border-slate-100 dark:border-slate-800">Home</Link>
            <Link onClick={() => setIsOpen(false)} to="/search" className="text-lg font-bold text-slate-800 dark:text-white py-2 border-b border-slate-100 dark:border-slate-800">Book Flight</Link>
            <Link onClick={() => setIsOpen(false)} to="/dashboard" className="text-lg font-bold text-slate-800 dark:text-white py-2 border-b border-slate-100 dark:border-slate-800">Dashboard</Link>
            <Link onClick={() => setIsOpen(false)} to="/login" className="w-full text-center bg-blue-600 text-white py-3 rounded-xl font-bold mt-2">Login / Sign Up</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;