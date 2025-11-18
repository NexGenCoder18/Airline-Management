import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { flights } from '../data/mockData';
import { FaPlane, FaCalendarAlt, FaUser, FaSearch, FaExchangeAlt, FaFilter, FaSortAmountDown } from 'react-icons/fa';
import FlightCard from '../components/FlightCard';

const Search = () => {
  const [results] = useState(flights);
  const [activeTab, setActiveTab] = useState('oneway');
  const [filter, setFilter] = useState('best');

  return (
    <div className="min-h-screen pt-28 pb-10 px-4 md:px-6 container mx-auto">
      
      {/* --- Advanced Search Engine Section --- */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-20 mb-12"
      >
        <div className="glass-card p-1 rounded-4xl shadow-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-white/20 dark:border-slate-700 max-w-5xl mx-auto">
          
          {/* Tabs (One Way / Round Trip) */}
          <div className="flex gap-2 p-2 mb-2 overflow-x-auto">
            {['One Way', 'Round Trip', 'Multi-City'].map((tab) => {
              const key = tab.toLowerCase().replace(' ', '');
              const isActive = activeTab === key;
              return (
                <button 
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 whitespace-nowrap
                    ${isActive 
                      ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-lg' 
                      : 'text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          {/* Inputs Grid */}
          <div className="bg-slate-50 dark:bg-slate-800/50 rounded-3xl p-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-center relative">
            
            {/* FROM */}
            <div className="md:col-span-3 relative group">
              <SearchInput label="From" value="New York" sub="JFK - John F. Kennedy" icon={FaPlane} />
            </div>

            {/* SWAP BUTTON (Visual) */}
            <div className="hidden md:flex md:col-span-1 justify-center -ml-2 -mr-2 z-10">
              <button className="w-10 h-10 rounded-full bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 shadow-md flex items-center justify-center text-blue-500 hover:rotate-180 transition-transform duration-500">
                <FaExchangeAlt />
              </button>
            </div>

            {/* TO */}
            <div className="md:col-span-3 relative group">
              <SearchInput label="To" value="London" sub="LHR - Heathrow Airport" icon={FaPlane} rotateIcon />
            </div>

            {/* DATE */}
            <div className="md:col-span-3 relative group">
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-4 rounded-2xl group-focus-within:ring-2 ring-blue-500 transition-all cursor-pointer hover:border-blue-300">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 block">Departure</label>
                <div className="flex items-center gap-3">
                  <FaCalendarAlt className="text-slate-400" />
                  <input 
                    type="date" 
                    className="w-full bg-transparent font-bold text-slate-800 dark:text-white outline-none p-0 cursor-pointer" 
                  />
                </div>
              </div>
            </div>

            {/* SEARCH BUTTON */}
            <div className="md:col-span-2">
              <button className="w-full h-full min-h-[70px] bg-linear-to-r from-blue-600 to-cyan-600 text-white rounded-2xl font-bold text-lg shadow-lg shadow-blue-500/30 hover:scale-[1.02] hover:shadow-blue-500/50 transition-all flex flex-col items-center justify-center gap-1">
                <FaSearch className="text-xl" />
                <span className="text-xs uppercase tracking-widest opacity-80">Search</span>
              </button>
            </div>

          </div>
        </div>
      </motion.div>

      {/* --- Results Header & Filters --- */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4 max-w-6xl mx-auto">
        <div>
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white">
            Flights from <span className="text-blue-500">New York</span> to <span className="text-blue-500">London</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-1">Showing {results.length} results based on your preferences</p>
        </div>

        {/* Smart Filters */}
        <div className="flex bg-white dark:bg-slate-800 p-1 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
           <FilterButton label="Cheapest" price="$450" active={filter === 'cheapest'} onClick={() => setFilter('cheapest')} />
           <FilterButton label="Best" price="7h 30m" active={filter === 'best'} onClick={() => setFilter('best')} />
           <FilterButton label="Fastest" price="6h 15m" active={filter === 'fastest'} onClick={() => setFilter('fastest')} />
        </div>
      </div>

      {/* --- Flight List --- */}
      <div className="grid gap-6 max-w-6xl mx-auto">
        {results.map((flight, idx) => (
          <FlightCard key={flight.id} flight={flight} index={idx} />
        ))}
        
        {/* Loading Skeleton (Fake) for visual flair */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center py-8"
        >
          <p className="text-slate-400 text-sm">End of search results</p>
        </motion.div>
      </div>

    </div>
  );
};

// --- Helper Components ---

const SearchInput = ({ label, value, sub, icon: Icon, rotateIcon }) => (
  <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-4 rounded-2xl group-focus-within:ring-2 ring-blue-500 transition-all cursor-text hover:border-blue-300 relative overflow-hidden">
    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 block">{label}</label>
    <div className="flex items-center justify-between">
       <div>
         <input 
           type="text" 
           defaultValue={value}
           className="w-full bg-transparent font-extrabold text-lg text-slate-800 dark:text-white outline-none p-0 placeholder:text-slate-300" 
         />
         <p className="text-xs text-slate-500 font-medium truncate max-w-[150px]">{sub}</p>
       </div>
       <Icon className={`text-slate-300 text-2xl absolute right-4 bottom-4 ${rotateIcon ? 'transform rotate-90' : ''}`} />
    </div>
  </div>
);

const FilterButton = ({ label, price, active, onClick }) => (
  <button 
    onClick={onClick}
    className={`px-6 py-2 rounded-lg text-sm font-medium transition-all
      ${active 
        ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 shadow-sm ring-1 ring-blue-200 dark:ring-blue-800' 
        : 'text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700'
      }`}
  >
    <span className="block font-bold">{label}</span>
    <span className="text-xs opacity-70">{price}</span>
  </button>
);

export default Search;