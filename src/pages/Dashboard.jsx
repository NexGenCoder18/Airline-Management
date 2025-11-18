import React from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  BarChart, Bar, Legend 
} from 'recharts';
import { chartData } from '../data/mockData';
import { FaPlane, FaUsers, FaMoneyBillWave, FaCalendarAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import StatsCard from '../components/StatsCard';

// Mock Data for Recent Bookings Table
const recentBookings = [
  { id: '#BK-7829', user: 'John Doe', flight: 'NY -> LND', amount: '$450', status: 'Confirmed', date: 'Nov 20' },
  { id: '#BK-7830', user: 'Sarah Smith', flight: 'TOK -> PAR', amount: '$850', status: 'Pending', date: 'Nov 21' },
  { id: '#BK-7831', user: 'Mike Ross', flight: 'DUB -> SIN', amount: '$550', status: 'Confirmed', date: 'Nov 21' },
  { id: '#BK-7832', user: 'Rachel Green', flight: 'LAX -> ROM', amount: '$920', status: 'Cancelled', date: 'Nov 22' },
];

const Dashboard = () => {
  // Get Today's Date
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="min-h-screen pt-28 px-6 pb-10 container mx-auto">
      
      {/* --- Header Section --- */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4"
      >
        <div>
          <h1 className="text-4xl font-extrabold text-slate-800 dark:text-white mb-2">
            Dashboard <span className="text-blue-500">Overview</span>
          </h1>
          <p className="text-slate-500 dark:text-slate-400">Welcome back, Admin! Here's what's happening today.</p>
        </div>
        <div className="flex items-center gap-2 bg-white dark:bg-slate-800 px-4 py-2 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 text-sm font-medium text-slate-600 dark:text-slate-300">
          <FaCalendarAlt className="text-blue-500" /> {today}
        </div>
      </motion.div>

      {/* --- Stats Cards Grid --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <StatsCard icon={FaPlane} title="Total Flights" value="1,245" color="blue" delay={0.1} />
        <StatsCard icon={FaUsers} title="Passengers" value="45.2k" color="purple" delay={0.2} />
        <StatsCard icon={FaMoneyBillWave} title="Total Revenue" value="$1.2M" color="green" delay={0.3} />
      </div>

      {/* --- Charts Section --- */}
      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        
        {/* Revenue Chart (Area) */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="glass-card p-6 md:p-8"
        >
          <h3 className="text-xl font-bold mb-6 text-slate-800 dark:text-white flex justify-between items-center">
            Revenue Analytics
            <span className="text-xs font-normal px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 rounded">+12.5% Growth</span>
          </h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearlinear id="colorSales" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                  </linearlinear>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#475569" opacity={0.1} vertical={false} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.9)', border: 'none', borderRadius: '12px', color: '#fff', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }} 
                  itemStyle={{ color: '#fff' }}
                />
                <Area type="monotone" dataKey="sales" stroke="#8b5cf6" strokeWidth={3} fillOpacity={1} fill="url(#colorSales)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Passengers Chart (Bar) */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="glass-card p-6 md:p-8"
        >
          <h3 className="text-xl font-bold mb-6 text-slate-800 dark:text-white">Passenger Traffic</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#475569" opacity={0.1} vertical={false} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <Tooltip 
                  cursor={{fill: 'rgba(255,255,255,0.05)'}}
                  contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.9)', border: 'none', borderRadius: '12px', color: '#fff' }} 
                />
                <Bar dataKey="passengers" fill="#06b6d4" radius={[6, 6, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      {/* --- Recent Bookings Table --- */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="glass-card p-6 md:p-8 overflow-hidden"
      >
        <h3 className="text-xl font-bold mb-6 text-slate-800 dark:text-white">Recent Bookings</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700 text-sm uppercase tracking-wider">
                <th className="py-4 px-2">Booking ID</th>
                <th className="py-4 px-2">Passenger</th>
                <th className="py-4 px-2">Flight</th>
                <th className="py-4 px-2">Date</th>
                <th className="py-4 px-2">Amount</th>
                <th className="py-4 px-2">Status</th>
              </tr>
            </thead>
            <tbody className="text-slate-700 dark:text-slate-300 text-sm font-medium">
              {recentBookings.map((item, index) => (
                <tr key={index} className="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="py-4 px-2">{item.id}</td>
                  <td className="py-4 px-2 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-linear-to-tr from-blue-500 to-purple-500 text-white flex items-center justify-center text-xs font-bold">
                      {item.user.charAt(0)}
                    </div>
                    {item.user}
                  </td>
                  <td className="py-4 px-2">{item.flight}</td>
                  <td className="py-4 px-2">{item.date}</td>
                  <td className="py-4 px-2 font-bold">{item.amount}</td>
                  <td className="py-4 px-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold 
                      ${item.status === 'Confirmed' ? 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400' : 
                        item.status === 'Pending' ? 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400' : 
                        'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400'}`}>
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

    </div>
  );
};

export default Dashboard;