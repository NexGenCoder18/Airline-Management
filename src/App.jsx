import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Layout from './components/Layout'; // Import Layout
import Home from './pages/Home';
import Search from './pages/Search';
import Booking from './pages/Booking';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login'; // Import Login

function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [isDark]);

  return (
    <Router>
      <Toaster position="top-center" toastOptions={{ style: { background: '#333', color: '#fff' } }} />
      
      <Routes>
        {/* Pages with Navbar and Footer */}
        <Route element={<Layout toggleTheme={() => setIsDark(!isDark)} isDark={isDark} />}>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        {/* Pages without Navbar/Footer (Standalone) */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;