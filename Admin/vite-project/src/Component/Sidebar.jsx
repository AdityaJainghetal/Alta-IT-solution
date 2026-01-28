
// import { useState, useEffect } from "react";
// import { 
//   LayoutDashboard, Users, Settings, BarChart3, 
//   ChevronRight, ChevronDown, LogOut, Menu, ChevronLeft, X 
// } from "lucide-react";
// import { NavLink } from "react-router-dom";

// const useDarkMode = () => {
//   const [isDark, setIsDark] = useState(() => {
//     if (typeof window !== 'undefined') {
//       return localStorage.theme === "dark" || 
//              (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
//     }
//     return false;
//   });

//   useEffect(() => {
//     if (isDark) {
//       document.documentElement.classList.add('dark');
//       localStorage.theme = 'dark';
//     } else {
//       document.documentElement.classList.remove('dark');
//       localStorage.theme = 'light';
//     }
//   }, [isDark]);

//   return [isDark, setIsDark];
// };

// export default function Sidebar() {
//   const [isCollapsed, setIsCollapsed] = useState(false);
//   const [isMobileOpen, setIsMobileOpen] = useState(false);
//   const [isDark, setIsDark] = useDarkMode();

//   const [openMenus, setOpenMenus] = useState({
//     users: false,
//   });

//   const toggleMenu = (menu) => {
//     setOpenMenus(prev => ({ ...prev, [menu]: !prev[menu] }));
//   };

//   return (
//     <>
//       {/* Mobile Hamburger */}
//       <button
//         className="fixed top-3 left-3 z-50 lg:hidden p-2 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 shadow-sm"
//         onClick={() => setIsMobileOpen(!isMobileOpen)}
//       >
//         {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
//       </button>

//       {/* Mobile Overlay */}
//       {isMobileOpen && (
//         <div 
//           className="fixed inset-0 bg-black/40 lg:hidden z-40 backdrop-blur-sm"
//           onClick={() => setIsMobileOpen(false)}
//         />
//       )}

//       {/* Sidebar */}
//       <aside 
//         className={`
//           fixed lg:static inset-y-0 left-0 z-50 lg:z-auto
//           w-72 lg:${isCollapsed ? 'w-16' : 'w-64'}
//           transition-all duration-300 ease-in-out
//           ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'} 
//           lg:translate-x-0
//           bg-white dark:bg-gray-900 
//           border-r border-gray-200 dark:border-gray-700
//           flex flex-col
//         `}
//       >
//         {/* Header / Logo */}
//         <div className="p-3 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
//           <h1 className={`${isCollapsed ? 'hidden' : 'block'} text-lg font-bold text-gray-800 dark:text-white`}>
//             MyApp
//           </h1>
//           <button 
//             onClick={() => setIsCollapsed(!isCollapsed)}
//             className="hidden lg:block p-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
//           >
//             {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
//           </button>
//         </div>

//         {/* Navigation – padding kam kiya */}
//         <nav className="flex-1 px-2 py-3 overflow-y-auto">
//           <ul className="space-y-1">
//             <li>
//               <NavLink
//                 to="/dashboard"
//                 className={({ isActive }) => `
//                   flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm
//                   ${isActive ? 'bg-blue-600 text-white' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'}
//                   ${isCollapsed ? 'justify-center px-2' : ''}
//                 `}
//               >
//                 <LayoutDashboard size={20} />
//                 {!isCollapsed && <span>Dashboard</span>}
//               </NavLink>
//             </li>

//             {/* Users submenu */}
//             <li>
//               <button
//                 onClick={() => toggleMenu('users')}
//                 className={`
//                   w-full flex items-center justify-between gap-2.5 px-3 py-2 rounded-lg text-sm
//                   text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800
//                   ${isCollapsed ? 'justify-center px-2' : ''}
//                 `}
//               >
//                 <div className="flex items-center gap-2.5">
//                   <Users size={20} />
//                   {!isCollapsed && <span>Users</span>}
//                 </div>
//                 {!isCollapsed && (openMenus.users ? <ChevronDown size={16} /> : <ChevronRight size={16} />)}
//               </button>

//               {openMenus.users && !isCollapsed && (
//                 <ul className="ml-6 mt-1 space-y-1 text-sm">
//                   <li><NavLink to="/users/list" className="block px-3 py-1.5 text-gray-600 dark:text-gray-400 hover:text-blue-600">All Users</NavLink></li>
//                   <li><NavLink to="/users/add"  className="block px-3 py-1.5 text-gray-600 dark:text-gray-400 hover:text-blue-600">Add User</NavLink></li>
//                 </ul>
//               )}
//             </li>

//             {/* aur items same tarah se tight kar do */}
//           </ul>
//         </nav>

//         {/* Footer – padding kam */}
//         <div className="p-3 border-t border-gray-200 dark:border-gray-700">
//           <div className="flex items-center justify-between">
//             <button
//               onClick={() => setIsDark(!isDark)}
//               className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
//             >
//               {isDark ? "☀️" : "🌙"}
//             </button>

//             <button className="flex items-center gap-2 px-3 py-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/40 rounded-lg text-sm">
//               <LogOut size={18} />
//               {!isCollapsed && <span>Logout</span>}
//             </button>
//           </div>
//         </div>
//       </aside>
//     </>
//   );
// }

import { useState, useEffect } from "react";
import { 
  LayoutDashboard, Users, Settings, BarChart3, 
  ChevronRight, ChevronDown, LogOut, Menu, ChevronLeft, X,
  MessageSquare  // <-- New icon for Contacts
} from "lucide-react";
import { NavLink } from "react-router-dom";

const useDarkMode = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.theme === "dark" || 
             (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }, [isDark]);

  return [isDark, setIsDark];
};

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDark, setIsDark] = useDarkMode();

  const [openMenus, setOpenMenus] = useState({
    users: false,
  });

  const toggleMenu = (menu) => {
    setOpenMenus(prev => ({ ...prev, [menu]: !prev[menu] }));
  };

  return (
    <>
      {/* Mobile Hamburger */}
      <button
        className="fixed top-3 left-3 z-50 lg:hidden p-2 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 shadow-sm"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      >
        {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black/40 lg:hidden z-40 backdrop-blur-sm"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`
          fixed lg:static inset-y-0 left-0 z-50 lg:z-auto
          w-72 lg:${isCollapsed ? 'w-16' : 'w-64'}
          transition-all duration-300 ease-in-out
          ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'} 
          lg:translate-x-0
          bg-white dark:bg-gray-900 
          border-r border-gray-200 dark:border-gray-700
          flex flex-col
        `}
      >
        {/* Header / Logo */}
        <div className="p-3 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
          <h1 className={`${isCollapsed ? 'hidden' : 'block'} text-lg font-bold text-gray-800 dark:text-white`}>
            Alta Knots
          </h1>
          <button 
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="hidden lg:block p-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-2 py-3 overflow-y-auto">
          <ul className="space-y-1">
            {/* Dashboard */}
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) => `
                  flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm
                  ${isActive ? 'bg-blue-600 text-white' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'}
                  ${isCollapsed ? 'justify-center px-2' : ''}
                `}
              >
                <LayoutDashboard size={20} />
                {!isCollapsed && <span>Dashboard</span>}
              </NavLink>
            </li>

            {/* Users submenu */}
            <li>
              <button
                onClick={() => toggleMenu('users')}
                className={`
                  w-full flex items-center justify-between gap-2.5 px-3 py-2 rounded-lg text-sm
                  text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800
                  ${isCollapsed ? 'justify-center px-2' : ''}
                `}
              >
                <div className="flex items-center gap-2.5">
                  <Users size={20} />
                  {!isCollapsed && <span>Users</span>}
                </div>
                {!isCollapsed && (openMenus.users ? <ChevronDown size={16} /> : <ChevronRight size={16} />)}
              </button>

              {openMenus.users && !isCollapsed && (
                <ul className="ml-6 mt-1 space-y-1 text-sm">
                  <li>
                    <NavLink 
                      to="/users/list" 
                      className="block px-3 py-1.5 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      All Users
                    </NavLink>
                  </li>
                  <li>
                    <NavLink 
                      to="/users/add" 
                      className="block px-3 py-1.5 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      Add User
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>

            {/* Analytics (example - agar chahiye to rakho) */}
            <li>
              <NavLink
                to="/analytics"
                className={({ isActive }) => `
                  flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm
                  ${isActive ? 'bg-blue-600 text-white' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'}
                  ${isCollapsed ? 'justify-center px-2' : ''}
                `}
              >
                <BarChart3 size={20} />
                {!isCollapsed && <span>Analytics</span>}
              </NavLink>
            </li>

            {/* New: Contacts / Get All Contacts */}
            <li>
              <NavLink
                to="/contacts"
                className={({ isActive }) => `
                  flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm
                  ${isActive ? 'bg-blue-600 text-white' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'}
                  ${isCollapsed ? 'justify-center px-2' : ''}
                `}
              >
                <MessageSquare size={20} />
                {!isCollapsed && <span>Contacts</span>}
              </NavLink>
            </li>

              <li>
              <NavLink
                to="/photo"
                className={({ isActive }) => `
                  flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm
                  ${isActive ? 'bg-blue-600 text-white' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'}
                  ${isCollapsed ? 'justify-center px-2' : ''}
                `}
              >
                <MessageSquare size={20} />
                {!isCollapsed && <span>photo</span>}
              </NavLink>
            </li>

            

            {/* Settings */}
            <li>
              <NavLink
                to="/settings"
                className={({ isActive }) => `
                  flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm
                  ${isActive ? 'bg-blue-600 text-white' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'}
                  ${isCollapsed ? 'justify-center px-2' : ''}
                `}
              >
                <Settings size={20} />
                {!isCollapsed && <span>Settings</span>}
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Footer */}
        <div className="p-3 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isDark ? "☀️" : "🌙"}
            </button>

            <button className="flex items-center gap-2 px-3 py-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/40 rounded-lg text-sm">
              <LogOut size={18} />
              {!isCollapsed && <span>Logout</span>}
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}