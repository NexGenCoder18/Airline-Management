import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaPlane, FaClock, FaWifi, FaUtensils, FaSuitcaseRolling } from 'react-icons/fa';

const FlightCard = ({ flight, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      className="group relative w-full"
    >
      {/* --- Glow Effect Behind Card --- */}
      <div className="absolute -inset-0.5 bg-linear-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-60 transition duration-500"></div>

      {/* --- Main Card Content --- */}
      <div className="relative bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 md:p-6 flex flex-col md:flex-row gap-6 overflow-hidden">
        
        {/* --- Left: Image Section with Badge --- */}
        <div className="w-full md:w-1/3 relative h-48 md:h-auto rounded-xl overflow-hidden shadow-md">
          <img 
            src={flight.image} 
            alt={flight.to} 
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out" 
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent"></div>
          
          {/* Airline Badge */}
          <div className="absolute top-3 left-3 bg-white/90 dark:bg-black/80 backdrop-blur-sm px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider shadow-sm text-slate-800 dark:text-white border border-white/20">
            {flight.airline}
          </div>
          
          {/* Price Tag Overlay (Mobile only mostly) */}
          <div className="absolute bottom-3 left-3 text-white md:hidden">
             <span className="text-lg font-bold">${flight.price}</span>
          </div>
        </div>

        {/* --- Right: Flight Details --- */}
        <div className="flex-1 flex flex-col justify-between">
          
          {/* Top: Route & Price */}
          <div className="flex justify-between items-start mb-6">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-1">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white">{flight.from}</h3>
                
                {/* Visual Flight Path */}
                <div className="flex-1 flex flex-col items-center px-2 min-w-20 max-w-[150px]">
                  <div className="flex items-center gap-1 text-slate-400 text-[10px] uppercase font-bold tracking-widest mb-1">
                    {flight.duration}
                  </div>
                  <div className="w-full h-0.5 bg-slate-300 dark:bg-slate-700 relative flex items-center justify-center">
                    <div className="absolute w-2 h-2 bg-slate-300 dark:bg-slate-700 rounded-full left-0"></div>
                    <FaPlane className="text-blue-500 transform rotate-90 text-lg absolute" />
                    <div className="absolute w-2 h-2 bg-slate-300 dark:bg-slate-700 rounded-full right-0"></div>
                  </div>
                  <div className="text-[10px] text-green-500 font-bold mt-1 uppercase">Direct</div>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white">{flight.to}</h3>
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-sm flex items-center gap-2">
                <FaClock className="text-blue-500" /> {flight.date} • {flight.time}
              </p>
            </div>

            {/* Price Section (Desktop) */}
            <div className="hidden md:block text-right">
              <div className="text-sm text-slate-400 mb-1">Starting from</div>
              <div className="text-4xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-cyan-500">
                ${flight.price}
              </div>
            </div>
          </div>

          {/* Middle: Amenities Divider */}
          <div className="border-t border-dashed border-slate-300 dark:border-slate-700 my-4"></div>

          {/* Bottom: Amenities & Action */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Amenities Pills */}
            <div className="flex gap-3 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
              {[
                { icon: FaWifi, label: 'Fast WiFi' },
                { icon: FaUtensils, label: 'Meals' },
                { icon: FaSuitcaseRolling, label: '20kg' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-medium text-slate-600 dark:text-slate-300 whitespace-nowrap">
                  <item.icon className="text-blue-500" />
                  {item.label}
                </div>
              ))}
            </div>

            {/* Action Button */}
            <Link to="/booking" className="w-full md:w-auto">
              <button className="w-full md:w-auto relative overflow-hidden px-8 py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 group">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Select Flight <FaPlane className="text-sm transform group-hover:translate-x-1 transition-transform" />
                </span>
                {/* Hover Sheen Effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-linear-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>
              </button>
            </Link>
          </div>

        </div>
      </div>
    </motion.div>
  );
};

export default FlightCard;