import React, { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { FaUser, FaPassport, FaEnvelope, FaChair, FaCheckCircle, FaPlane } from 'react-icons/fa';

const Booking = () => {
  const [selectedSeat, setSelectedSeat] = useState(null);
  const [seatPrice, setSeatPrice] = useState(0);

  // Mock Seat Configuration
  // Rows 1-2: Business ($200 extra), Rows 3-6: Economy
  const handleSeatSelect = (seatId, type) => {
    setSelectedSeat(seatId);
    setSeatPrice(type === 'business' ? 650 : 450); // Base price logic
  };

  const handleBook = (e) => {
    e.preventDefault();
    if(!selectedSeat) return toast.error("Please select a seat to proceed!");
    toast.success(`Booking Confirmed! Seat: ${selectedSeat}`);
  };

  return (
    <div className="min-h-screen pt-28 pb-10 px-4 container mx-auto">
      <div className="grid lg:grid-cols-12 gap-8">
        
        {/* --- Left: Interactive Seat Map (Fuselage UI) --- */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative bg-white dark:bg-slate-900 rounded-[3rem] p-4 shadow-2xl border-2 border-slate-200 dark:border-slate-700 w-full max-w-sm"
          >
            {/* Cockpit Area */}
            <div className="h-24 bg-linear-to-b from-slate-200 to-white dark:from-slate-800 dark:to-slate-900 rounded-t-[2.5rem] border-b-2 border-dashed border-slate-300 dark:border-slate-700 mb-6 flex items-center justify-center relative overflow-hidden">
               <FaPlane className="text-4xl text-slate-300 dark:text-slate-700 opacity-50" />
               <div className="absolute top-0 w-full h-full bg-linear-to-b from-white/20 to-transparent"></div>
            </div>

            {/* Cabin Labels */}
            <div className="flex justify-between px-6 mb-4 text-xs font-bold uppercase tracking-widest text-slate-400">
              <span>ABC</span>
              <span>Aisle</span>
              <span>DEF</span>
            </div>

            {/* Seats Grid with Aisle */}
            <div className="space-y-3 px-4 mb-8">
              {[...Array(6)].map((_, row) => {
                const isBusiness = row < 2;
                const rowNum = row + 1;
                return (
                  <div key={row} className="flex justify-between items-center gap-4">
                    {/* Left Side Seats */}
                    <div className="flex gap-2">
                      {['A', 'B'].map((col) => {
                        const seatId = `${rowNum}${col}`;
                        const isTaken = ['1A', '3B', '5A'].includes(seatId);
                        const isSelected = selectedSeat === seatId;
                        
                        return (
                          <Seat 
                            key={seatId} 
                            id={seatId} 
                            status={isTaken ? 'taken' : isSelected ? 'selected' : 'available'}
                            type={isBusiness ? 'business' : 'economy'}
                            onClick={() => !isTaken && handleSeatSelect(seatId, isBusiness ? 'business' : 'economy')}
                          />
                        );
                      })}
                    </div>

                    {/* The Aisle (Index Number) */}
                    <span className="text-xs font-mono text-slate-300 dark:text-slate-600 w-6 text-center">{rowNum}</span>

                    {/* Right Side Seats */}
                    <div className="flex gap-2">
                      {['C', 'D'].map((col) => {
                        const seatId = `${rowNum}${col}`;
                        const isTaken = ['2C', '4D'].includes(seatId);
                        const isSelected = selectedSeat === seatId;
                        
                        return (
                          <Seat 
                            key={seatId} 
                            id={seatId} 
                            status={isTaken ? 'taken' : isSelected ? 'selected' : 'available'}
                            type={isBusiness ? 'business' : 'economy'}
                            onClick={() => !isTaken && handleSeatSelect(seatId, isBusiness ? 'business' : 'economy')}
                          />
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Legend */}
            <div className="flex justify-center gap-4 text-[10px] font-medium text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800 pt-4">
              <div className="flex items-center gap-1"><div className="w-3 h-3 rounded bg-slate-200 dark:bg-slate-700"></div> Taken</div>
              <div className="flex items-center gap-1"><div className="w-3 h-3 rounded bg-blue-100 border border-blue-400"></div> Economy</div>
              <div className="flex items-center gap-1"><div className="w-3 h-3 rounded bg-amber-100 border border-amber-400"></div> Business</div>
              <div className="flex items-center gap-1"><div className="w-3 h-3 rounded bg-cyan-500"></div> Yours</div>
            </div>
          </motion.div>
        </div>

        {/* --- Right: Form & Summary --- */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          
          {/* Passenger Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
              <FaPassport size={100} className="text-slate-400 dark:text-white" />
            </div>

            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-slate-800 dark:text-white">
              <span className="w-8 h-8 rounded-lg bg-blue-500 text-white flex items-center justify-center text-sm">1</span>
              Passenger Details
            </h2>
            
            <form onSubmit={handleBook} className="space-y-5 relative z-10">
              <div className="grid md:grid-cols-2 gap-5">
                <InputGroup icon={FaUser} placeholder="First Name" />
                <InputGroup icon={FaUser} placeholder="Last Name" />
              </div>
              <InputGroup icon={FaEnvelope} type="email" placeholder="Email Address" />
              <InputGroup icon={FaPassport} placeholder="Passport Number" />
            </form>
          </motion.div>

          {/* Flight Summary Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="glass-card p-0 overflow-hidden flex flex-col md:flex-row"
          >
            {/* Left: Details */}
            <div className="p-8 flex-1">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-slate-800 dark:text-white">
                <span className="w-8 h-8 rounded-lg bg-purple-500 text-white flex items-center justify-center text-sm">2</span>
                Trip Summary
              </h2>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between text-slate-500 dark:text-slate-400">
                  <span>Flight Route</span>
                  <span className="font-bold text-slate-800 dark:text-white">NYC ✈ LND</span>
                </div>
                <div className="flex justify-between text-slate-500 dark:text-slate-400">
                  <span>Date</span>
                  <span className="font-bold text-slate-800 dark:text-white">24 Nov, 2024</span>
                </div>
                <div className="flex justify-between text-slate-500 dark:text-slate-400">
                  <span>Seat Class</span>
                  <span className="font-bold text-slate-800 dark:text-white capitalize">
                    {selectedSeat ? (['1','2'].includes(selectedSeat[0]) ? 'Business' : 'Economy') : '-'}
                  </span>
                </div>
                <div className="flex justify-between text-slate-500 dark:text-slate-400">
                  <span>Selected Seat</span>
                  <span className="font-bold text-cyan-500 text-lg">{selectedSeat || 'None'}</span>
                </div>
              </div>
            </div>

            {/* Right: Total & Pay (Ticket Stub Style) */}
            <div className="bg-slate-100 dark:bg-slate-800/50 p-8 md:w-1/3 border-t md:border-t-0 md:border-l border-dashed border-slate-300 dark:border-slate-600 flex flex-col justify-between relative">
               {/* Cutout Circles for Ticket Effect */}
               <div className="absolute -left-3 top-1/2 w-6 h-6 bg-slate-50 dark:bg-slate-900 rounded-full hidden md:block"></div>
               <div className="absolute -right-3 top-1/2 w-6 h-6 bg-slate-50 dark:bg-slate-900 rounded-full hidden md:block"></div>

               <div>
                 <p className="text-slate-500 text-xs uppercase tracking-wider mb-1">Total Payble</p>
                 <div className="text-3xl font-extrabold text-slate-800 dark:text-white">
                   ${selectedSeat ? seatPrice : '0'}
                 </div>
                 <p className="text-xs text-slate-400 mt-1">Inc. taxes</p>
               </div>

               <button 
                 onClick={handleBook}
                 disabled={!selectedSeat}
                 className="w-full mt-6 bg-linear-to-r from-blue-600 to-cyan-600 text-white py-3 rounded-xl font-bold shadow-lg shadow-blue-500/30 hover:scale-105 hover:shadow-blue-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
               >
                 <FaCheckCircle /> Confirm
               </button>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

// --- Helper Component: Seat ---
const Seat = ({ id, status, type, onClick }) => {
  // Color Logic based on status and type
  let bgClass = "bg-slate-100 dark:bg-slate-800 border-slate-300 dark:border-slate-600 hover:border-blue-400"; // Available Economy
  
  if (type === 'business' && status === 'available') {
    bgClass = "bg-amber-50 dark:bg-amber-900/10 border-amber-300 dark:border-amber-700 hover:border-amber-500"; // Available Business
  }

  if (status === 'selected') {
    bgClass = "bg-cyan-500 border-cyan-400 text-white shadow-[0_0_15px_rgba(6,182,212,0.6)] transform scale-110 z-10";
  } else if (status === 'taken') {
    bgClass = "bg-slate-200 dark:bg-slate-700 border-transparent text-slate-400 dark:text-slate-600 cursor-not-allowed";
  }

  return (
    <button
      onClick={onClick}
      disabled={status === 'taken'}
      className={`
        relative w-10 h-12 rounded-t-xl rounded-b-md border-2 transition-all duration-300 flex items-center justify-center group
        ${bgClass}
      `}
    >
      {/* Headrest for realism */}
      <div className={`absolute -top-1 left-1/2 -translate-x-1/2 w-6 h-1.5 rounded-full ${status === 'selected' ? 'bg-white/30' : 'bg-current opacity-20'}`}></div>
      
      {/* Seat Icon */}
      <FaChair className={`text-xs ${status === 'selected' ? 'text-white' : 'opacity-40'}`} />
      
      {/* Tooltip on Hover */}
      <div className="absolute -top-8 opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white text-[10px] px-2 py-1 rounded whitespace-nowrap pointer-events-none z-20">
        {id} • {type === 'business' ? '$650' : '$450'}
      </div>
    </button>
  );
};

// --- Helper Component: Input ---
const InputGroup = ({ icon: Icon, type = "text", placeholder }) => (
  <div className="relative group">
    <Icon className="absolute top-4 left-4 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
    <input 
      type={type} 
      placeholder={placeholder} 
      className="w-full pl-12 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400"
      required 
    />
  </div>
);

export default Booking;