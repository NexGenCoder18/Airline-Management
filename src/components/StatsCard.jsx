import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

const StatsCard = ({ icon: Icon, title, value, color, delay }) => {
  
  // Premium Theme Configurations
  const themes = {
    blue: {
      linear: "from-blue-500 to-indigo-600",
      bgIcon: "bg-blue-50 dark:bg-blue-900/20",
      text: "text-blue-600 dark:text-blue-400",
      glow: "shadow-blue-500/20",
      trend: "+12.5%"
    },
    purple: {
      linear: "from-purple-500 to-fuchsia-600",
      bgIcon: "bg-purple-50 dark:bg-purple-900/20",
      text: "text-purple-600 dark:text-purple-400",
      glow: "shadow-purple-500/20",
      trend: "+8.2%"
    },
    cyan: {
      linear: "from-cyan-500 to-teal-600",
      bgIcon: "bg-cyan-50 dark:bg-cyan-900/20",
      text: "text-cyan-600 dark:text-cyan-400",
      glow: "shadow-cyan-500/20",
      trend: "+24%"
    },
    green: {
      linear: "from-emerald-500 to-green-600",
      bgIcon: "bg-emerald-50 dark:bg-emerald-900/20",
      text: "text-emerald-600 dark:text-emerald-400",
      glow: "shadow-emerald-500/20",
      trend: "+5.3%"
    }
  };

  const theme = themes[color] || themes.blue;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delay, duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="relative overflow-hidden glass-card p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-xl"
    >
      {/* --- Decorative Background Glow --- */}
      <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full bg-linear-to-br ${theme.linear} opacity-10 blur-2xl pointer-events-none`}></div>

      <div className="relative z-10">
        {/* --- Header: Icon & Trend --- */}
        <div className="flex justify-between items-start mb-6">
          <div className={`p-3.5 rounded-xl ${theme.bgIcon} ${theme.text} shadow-lg ${theme.glow}`}>
            <Icon className="text-2xl" />
          </div>
          
          <div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-900/50">
            <FaArrowUp className="text-[10px] text-green-600 dark:text-green-400" />
            <span className="text-xs font-bold text-green-700 dark:text-green-400">{theme.trend}</span>
          </div>
        </div>

        {/* --- Content: Value & Title --- */}
        <div>
          <h3 className="text-3xl font-extrabold text-slate-800 dark:text-white tracking-tight mb-1">
            {value}
          </h3>
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            {title}
          </p>
        </div>

        {/* --- Footer: Animated Progress Line --- */}
        <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full mt-5 overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "65%" }}
            transition={{ duration: 1.5, delay: delay + 0.2 }}
            className={`h-full rounded-full bg-linear-to-r ${theme.linear}`}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default StatsCard;