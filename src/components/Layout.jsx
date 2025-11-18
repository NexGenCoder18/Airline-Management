import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layout = ({ toggleTheme, isDark }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar toggleTheme={toggleTheme} isDark={isDark} />
      
      {/* Main Content Wrapper */}
      <main className="grow">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;