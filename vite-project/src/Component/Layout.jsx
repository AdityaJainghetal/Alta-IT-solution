// // src/layouts/Layout.jsx   (या components/Layout.jsx)
// import React from 'react';
// import { Outlet } from 'react-router-dom';
// import Navbar from '../Component/Navbar.jsx';
// import Footer from './Footer.jsx';

// const Layout = () => {
//   return (
//     <div className="min-h-screen bg-gray-950 text-gray-100">
//       <Navbar />
      
//       {/* Main content area with proper padding */}
//       <main className="pt-4 pb-12">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <Outlet />
//         </div>
//       </main>

//       <div>
//         <Footer/>
//       </div>
//     </div>
//   );
// };

// export default Layout;


// src/layouts/Layout.jsx



// import React from 'react';
// import { Outlet } from 'react-router-dom';

// import Navbar from '../Component/Navbar';  // adjust path according to your folder structure
// import Footer from '../Component/Footer';  // adjust path according to your folder structure

// const Layout = () => {
//   return (
//     <div className="min-h-screen flex flex-col bg-black text-white antialiased">
//       {/* Navbar - sticky + glassmorphism style */}
//       <header className="sticky top-0 z-50 w-full bg-black/80 backdrop-blur-xl border-b border-zinc-800/70 shadow-sm">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <Navbar />
//         </div>
//       </header>

//       {/* Main content - grows to push footer down */}
//       <main className="flex-grow pt-8 pb-16 md:pt-10 md:pb-20">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <Outlet />
//         </div>
//       </main>

//       {/* Footer */}
//       <footer className="bg-zinc-950 border-t border-zinc-900">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <Footer />
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Layout;

import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

const Layout = () => {
  return (
    <div className="min-h-screen w-full flex flex-col bg-black text-white antialiased">
      
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full bg-black/80 backdrop-blur-xl border-b border-zinc-800/70">
        <Navbar />
      </header>

      {/* Main Content - FULL SCREEN */}
      <main className="flex-grow w-full">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="w-full bg-zinc-950 border-t border-zinc-900">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
