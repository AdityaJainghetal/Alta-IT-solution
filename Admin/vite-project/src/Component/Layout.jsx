
// import React from 'react';
// import { Outlet } from 'react-router-dom';
// import Sidebar from '../Component/Sidebar';
// import { useSidebar } from '../pages/context/SidebarContext';

// const Layout = () => {
//   const { isCollapsed } = useSidebar();

//   return (
//     <div className="flex min-h-screen bg-gray-50 dark:bg-gray-950">
//       <Sidebar />

//       <div
//         className={`
//           flex-1 flex flex-col transition-all duration-300
//           ${isCollapsed ? 'lg:ml-20' : 'lg:ml-72'}
//         `}
//       >
//         <header className="bg-white dark:bg-gray-900 border-b h-16 flex items-center px-6 sticky top-0 z-30 shadow-sm">
//           <h2 className="text-xl font-semibold dark:text-white">My Application</h2>
//         </header>

//         <main className="flex-1 p-5 sm:p-6 lg:p-8 overflow-auto">
//           <Outlet />
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Layout;
// Layout.jsx (updated)
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Component/Sidebar';
import { useSidebar } from '../pages/context/SidebarContext';  // adjust path if needed

const Layout = () => {
  const { isCollapsed, isMobileOpen } = useSidebar();   // ← add isMobileOpen if you have it

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Sidebar – make sure it has proper width classes */}
      <Sidebar />

      {/* Main content – flex-1 automatically takes remaining space */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Optional: only show header when sidebar is not covering everything on mobile */}
        <header
          className={`
            bg-white dark:bg-gray-900 border-b h-16 flex items-center px-6 sticky top-0 z-30 shadow-sm
            ${isMobileOpen ? 'lg:block hidden' : 'block'}   // hide header on mobile when drawer open (optional)
          `}
        >
          <h2 className="text-xl font-semibold dark:text-white">My Application</h2>
        </header>

        <main className="flex-1 p-5 sm:p-6 lg:p-8 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;