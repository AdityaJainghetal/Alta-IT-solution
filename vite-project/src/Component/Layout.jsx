// src/layouts/Layout.jsx   (या components/Layout.jsx)
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Component/Navbar.jsx';
import Footer from './Footer.jsx';

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <Navbar />
      
      {/* Main content area with proper padding */}
      <main className="pt-4 pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </main>

      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default Layout;