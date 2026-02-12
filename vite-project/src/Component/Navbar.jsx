// // // src/components/Navbar.jsx
// // import React, { useState } from "react";
// // import { NavLink } from "react-router-dom";
// // import { Menu, X } from "lucide-react";
// // import ATLAknots from  "./Mobile/img/ATLAKnots.png"; // Ensure this path is correct based on your project structure

// // const navItems = [
// //   { name: "Home", path: "/" },
// //   { name: "About", path: "/about" },
// //   { name: "Features", path: "/service" },
// //   { name: "Pricing", path: "/pricing" },
// //   { name: "Technology", path: "/technology" },
// //   { name: "Tech news", path: "/technews" },
// //   { name: "Contact", path: "/contact" },
// // ];

// // const Navbar = () => {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const toggleMenu = () => setIsOpen(!isOpen);
// //   const closeMenu = () => setIsOpen(false);

// //   return (
// //     <nav className="bg-black/90 backdrop-blur-md border-b border-gray-800/50 sticky top-0 z-50 transition-all duration-300">
// //       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
// //         <div className="flex h-16 md:h-20 items-center justify-between">
// //           {/* Logo */}
// //           <div className="flex-shrink-0">
// //             <NavLink
// //               to="/"
// //               className="text-2xl md:text-3xl font-extrabold tracking-tight bg-linear-to-r from-white to-white bg-clip-text text-transparent hover:from-red-400 hover:via-white hover:to-red-400 transition-all duration-500"
// //             >
// //               <div className="flex items-center gap-2">
// //               <img src={ATLAknots} alt="ATLAKnots Logo" className="h-10 w-10 md:h-18 pt-5 md:w-50 " />
// //             </div>
// //             </NavLink>
// //             {/* Optional small tagline - remove if not needed */}
// //             {/* <p className="text-xs text-gray-500 mt-0.5">IT Solutions</p> */}
// //           </div>

// //           {/* Desktop Menu */}
// //           <div className="hidden md:flex md:items-center md:space-x-1 lg:space-x-2">
// //             {navItems.map((item) => (
// //               <NavLink
// //                 key={item.path}
// //                 to={item.path}
// //                 onClick={closeMenu}
// //                 className={({ isActive }) =>
// //                   `px-4 py-2.5 text-sm lg:text-base font-medium rounded-lg transition-all duration-300 ${
// //                     isActive
// //                       ? "bg-red-950/40 text-red-400 border border-red-900/50 shadow-sm"
// //                       : "text-gray-300 hover:text-red-400 hover:bg-red-950/30 border border-transparent hover:border-red-900/40"
// //                   }`
// //                 }
// //               >
// //                 {item.name}
// //               </NavLink>
// //             ))}
// //           </div>

// //           {/* Mobile Menu Button */}
// //           <div className="md:hidden">
// //             <button
// //               onClick={toggleMenu}
// //               className="inline-flex items-center justify-center p-2 rounded-lg text-gray-400 hover:text-red-400 hover:bg-red-950/30 focus:outline-none transition-colors"
// //               aria-expanded={isOpen}
// //             >
// //               <span className="sr-only">Open main menu</span>
// //               {isOpen ? <X size={28} /> : <Menu size={28} />}
// //             </button>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Mobile Menu */}
// //       <div
// //         className={`md:hidden overflow-hidden transition-all duration-300 ${
// //           isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
// //         }`}
// //       >
// //         <div className="px-4 pt-3 pb-5 space-y-2 bg-black/95 border-t border-gray-800/50">
// //           {navItems.map((item) => (
// //             <NavLink
// //               key={item.path}
// //               to={item.path}
// //               onClick={closeMenu}
// //               className={({ isActive }) =>
// //                 `block px-4 py-3.5 rounded-lg text-base font-medium transition-all ${
// //                   isActive
// //                     ? "bg-red-950/50 text-red-400 border-l-4 border-red-600"
// //                     : "text-gray-300 hover:text-red-400 hover:bg-red-950/30 border-l-4 border-transparent"
// //                 }`
// //               }
// //             >
// //               {item.name}
// //             </NavLink>
// //           ))}

// //           {/* Optional Auth buttons - styled to match */}
// //           <div className="pt-5 px-2 flex flex-col gap-4 border-t border-gray-800/50 mt-4">
// //             <button className="w-full py-3.5 text-gray-300 hover:text-white border border-gray-700 rounded-lg hover:bg-gray-800/50 transition">
// //               Login
// //             </button>
// //             <button className="w-full py-3.5 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition shadow-md hover:shadow-red-900/40">
// //               Get Started
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;
// // src/components/Navbar.jsx

// // import React, { useState } from "react";
// // import { NavLink } from "react-router-dom";
// // import { Menu, X, ChevronDown } from "lucide-react";
// // import ATLAknots from "./Mobile/img/ATLAKnots.png"; // Adjust path if needed

// // const navItems = [
// //   { name: "Home", path: "/" },
// //   {
// //     name: "About",
// //     path: "/about",
// //     hasDropdown: true,
// //     dropdownItems: [
// //       { name: "Recent Work", path: "/recentwork" },
// //     ],
// //   },
// //   { name: "Features", path: "/service" },
// //   { name: "Pricing", path: "/pricing" },
// //   { name: "Technology", path: "/technology" },
// //   { name: "Tech News", path: "/technews" },
// //   { name: "Contact", path: "/contact" },
// // ];

// // const Navbar = () => {
// //   const [isOpen, setIsOpen] = useState(false);           // mobile menu
// //   const [isAboutOpen, setIsAboutOpen] = useState(false); // desktop dropdown

// //   const toggleMenu = () => setIsOpen(!isOpen);
// //   const closeMenu = () => {
// //     setIsOpen(false);
// //     setIsAboutOpen(false);
// //   };

// //   const handleMouseEnter = () => setIsAboutOpen(true);
// //   const handleMouseLeave = () => setIsAboutOpen(false);

// //   return (
// //     <nav className="bg-black/90 backdrop-blur-md border-b border-gray-800/50 sticky top-0 z-50 transition-all duration-300">
// //       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
// //         <div className="flex h-25 md:h-20 items-center justify-between ">
// //           {/* Logo */}
// //           <div className="flex-shrink-0">
// //             <NavLink to="/" className="flex items-center gap-2.5">
// //              <img
// //   src={ATLAknots}
// //   alt="ATLAKnots Logo"
// //   className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 object-contain"
// // />

// //               {/* Optional: If you want text logo beside image */}
// //               {/* <span className="text-xl md:text-2xl font-bold text-white tracking-tight">
// //                 ATLAKnots
// //               </span> */}
// //             </NavLink>
// //           </div>

// //           {/* Desktop Menu */}
// //           <div className="hidden md:flex md:items-center md:space-x-1 lg:space-x-2">
// //             {navItems.map((item) =>
// //               item.hasDropdown ? (
// //                 <div
// //                   key={item.name}
// //                   className="relative"
// //                   onMouseEnter={handleMouseEnter}
// //                   onMouseLeave={handleMouseLeave}
// //                 >
// //                   <NavLink
// //                     to={item.path}
// //                     className={({ isActive }) =>
// //                       `flex items-center gap-1 px-4 py-2.5 text-sm lg:text-base font-medium rounded-lg transition-all duration-300 ${
// //                         isActive
// //                           ? "bg-red-950/40 text-red-400 border border-red-900/50 shadow-sm"
// //                           : "text-gray-300 hover:text-red-400 hover:bg-red-950/30 border border-transparent hover:border-red-900/40"
// //                       }`
// //                     }
// //                   >
// //                     {item.name}
// //                     <ChevronDown
// //                       size={16}
// //                       className={`transition-transform duration-200 ${
// //                         isAboutOpen ? "rotate-180" : ""
// //                       }`}
// //                     />
// //                   </NavLink>

// //                   <div
// //                     className={`absolute left-0 top-full mt-1 w-56 bg-black/95 border border-gray-800/70 rounded-xl shadow-2xl py-2 z-50 backdrop-blur-md transition-all duration-200 ${
// //                       isAboutOpen
// //                         ? "opacity-100 visible translate-y-0"
// //                         : "opacity-0 invisible -translate-y-2 pointer-events-none"
// //                     }`}
// //                     onMouseEnter={handleMouseEnter}
// //                     onMouseLeave={handleMouseLeave}
// //                   >
// //                     {item.dropdownItems.map((subItem) => (
// //                       <NavLink
// //                         key={subItem.path}
// //                         to={subItem.path}
// //                         onClick={closeMenu}
// //                         className={({ isActive }) =>
// //                           `block px-5 py-2.5 text-sm text-gray-300 hover:bg-red-950/40 hover:text-red-400 transition-colors ${
// //                             isActive ? "bg-red-950/50 text-red-400" : ""
// //                           }`
// //                         }
// //                       >
// //                         {subItem.name}
// //                       </NavLink>
// //                     ))}
// //                   </div>
// //                 </div>
// //               ) : (
// //                 <NavLink
// //                   key={item.path}
// //                   to={item.path}
// //                   onClick={closeMenu}
// //                   className={({ isActive }) =>
// //                     `px-4 py-2.5 text-sm lg:text-base font-medium rounded-lg transition-all duration-300 ${
// //                       isActive
// //                         ? "bg-red-950/40 text-red-400 border border-red-900/50 shadow-sm"
// //                         : "text-gray-300 hover:text-red-400 hover:bg-red-950/30 border border-transparent hover:border-red-900/40"
// //                     }`
// //                   }
// //                 >
// //                   {item.name}
// //                 </NavLink>
// //               )
// //             )}
// //           </div>

// //           {/* Mobile Menu Button */}
// //           <div className="md:hidden">
// //             <button
// //               onClick={toggleMenu}
// //               className="inline-flex items-center justify-center p-2 rounded-lg text-gray-400 hover:text-red-400 hover:bg-red-950/30 focus:outline-none transition-colors"
// //               aria-expanded={isOpen}
// //             >
// //               <span className="sr-only">Open main menu</span>
// //               {isOpen ? <X size={28} /> : <Menu size={28} />}
// //             </button>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Mobile Menu */}
// //       <div
// //         className={`md:hidden overflow-hidden transition-all duration-300 ${
// //           isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
// //         }`}
// //       >
// //         <div className="px-4 pt-3 pb-5 space-y-2 bg-black/95 border-t border-gray-800/50">
// //           {navItems.map((item) =>
// //             item.hasDropdown ? (
// //               <div key={item.name} className="space-y-1">
// //                 <NavLink
// //                   to={item.path}
// //                   onClick={closeMenu}
// //                   className={({ isActive }) =>
// //                     `block px-4 py-3.5 rounded-lg text-base font-medium transition-all ${
// //                       isActive
// //                         ? "bg-red-950/50 text-red-400 border-l-4 border-red-600"
// //                         : "text-gray-300 hover:text-red-400 hover:bg-red-950/30 border-l-4 border-transparent"
// //                     }`
// //                   }
// //                 >
// //                   {item.name}
// //                 </NavLink>

// //                 <div className="pl-6 space-y-1 mt-1">
// //                   {item.dropdownItems.map((subItem) => (
// //                     <NavLink
// //                       key={subItem.path}
// //                       to={subItem.path}
// //                       onClick={closeMenu}
// //                       className={({ isActive }) =>
// //                         `block px-4 py-3 rounded-lg text-base font-medium transition-all ${
// //                           isActive
// //                             ? "bg-red-950/40 text-red-400"
// //                             : "text-gray-400 hover:text-red-400 hover:bg-red-950/30"
// //                         }`
// //                       }
// //                     >
// //                       {subItem.name}
// //                     </NavLink>
// //                   ))}
// //                 </div>
// //               </div>
// //             ) : (
// //               <NavLink
// //                 key={item.path}
// //                 to={item.path}
// //                 onClick={closeMenu}
// //                 className={({ isActive }) =>
// //                   `block px-4 py-3.5 rounded-lg text-base font-medium transition-all ${
// //                     isActive
// //                       ? "bg-red-950/50 text-red-400 border-l-4 border-red-600"
// //                       : "text-gray-300 hover:text-red-400 hover:bg-red-950/30 border-l-4 border-transparent"
// //                   }`
// //                 }
// //               >
// //                 {item.name}
// //               </NavLink>
// //             )
// //           )}

// //           <div className="pt-5 px-2 flex flex-col gap-4 border-t border-gray-800/50 mt-4">
// //             <button className="w-full py-3.5 text-gray-300 hover:text-white border border-gray-700 rounded-lg hover:bg-gray-800/50 transition">
// //               Login
// //             </button>
// //             <button className="w-full py-3.5 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition shadow-md hover:shadow-red-900/40">
// //               Get Started
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;

// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { Menu, X, ChevronDown } from "lucide-react";
// import ATLAknots from "./Mobile/img/ATLAKnots.png"; // Adjust path if needed

// const navItems = [
//   { name: "Home", path: "/" },
//   {
//     name: "About",
//     path: "/about",
//     hasDropdown: true,
//     dropdownItems: [
//       { name: "Recent Work", path: "/recentwork" },
//       // You can easily add more items here
//       // { name: "Our Team", path: "/team" },
//       // { name: "Vision", path: "/vision" },
//     ],
//   },
//   { name: "Features", path: "/service" },
//   { name: "Pricing", path: "/pricing" },
//   { name: "Technology", path: "/technology" },
//   { name: "Tech News", path: "/technews" },
//   { name: "Contact", path: "/contact" },
// ];

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);             // mobile menu
//   const [openDropdown, setOpenDropdown] = useState(null);  // for mobile accordion + desktop optional

//   const toggleMenu = () => setIsOpen(!isOpen);
//   const closeMenu = () => {
//     setIsOpen(false);
//     setOpenDropdown(null);
//   };

//   const toggleDropdown = (name) => {
//     setOpenDropdown(openDropdown === name ? null : name);
//   };

//   return (
//     <nav className="bg-black/90 backdrop-blur-md border-b border-gray-800/50 sticky top-0 z-50">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="flex h-20 md:h-20 items-center justify-between">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <NavLink to="/" className="flex items-center gap-2.5">
//               <img
//                 src={ATLAknots}
//                 alt="ATLAKnots Logo"
//                 className="h-14 w-14 md:h-16 md:w-16 lg:h-20 lg:w-20 object-contain"
//               />
//               {/* Uncomment if you want text logo */}
//               {/* <span className="text-xl md:text-2xl font-bold text-white tracking-tight">ATLAKnots</span> */}
//             </NavLink>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex md:items-center md:space-x-1 lg:space-x-2">
//             {navItems.map((item) =>
//               item.hasDropdown ? (
//                 <div
//                   key={item.name}
//                   className="relative group"
//                 >
//                   <button
//                     type="button"
//                     className={`flex items-center gap-1.5 px-4 py-2.5 text-sm lg:text-base font-medium rounded-lg transition-all duration-300 group-hover:text-red-400 ${
//                       location.pathname.startsWith(item.path)
//                         ? "bg-red-950/40 text-red-400 border border-red-900/50"
//                         : "text-gray-300 hover:bg-red-950/30 border border-transparent hover:border-red-900/40"
//                     }`}
//                     onClick={() => toggleDropdown(item.name)} // also works on click
//                   >
//                     {item.name}
//                     <ChevronDown
//                       size={16}
//                       className="transition-transform duration-300 group-hover:rotate-180"
//                     />
//                   </button>

//                   {/* Dropdown */}
//                   <div
//                     className={`absolute left-0 top-full mt-2 w-56 bg-black/95 border border-gray-800/70 rounded-xl shadow-2xl py-2 opacity-0 invisible translate-y-2 scale-95 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:scale-100 transition-all duration-200 origin-top-left z-50 backdrop-blur-md`}
//                   >
//                     {item.dropdownItems.map((subItem) => (
//                       <NavLink
//                         key={subItem.path}
//                         to={subItem.path}
//                         onClick={closeMenu}
//                         className={({ isActive }) =>
//                           `block px-5 py-2.5 text-sm transition-colors ${
//                             isActive
//                               ? "bg-red-950/60 text-red-400"
//                               : "text-gray-300 hover:bg-red-950/50 hover:text-red-400"
//                           }`
//                         }
//                       >
//                         {subItem.name}
//                       </NavLink>
//                     ))}
//                   </div>
//                 </div>
//               ) : (
//                 <NavLink
//                   key={item.path}
//                   to={item.path}
//                   onClick={closeMenu}
//                   className={({ isActive }) =>
//                     `px-4 py-2.5 text-sm lg:text-base font-medium rounded-lg transition-all duration-300 ${
//                       isActive
//                         ? "bg-red-950/40 text-red-400 border border-red-900/50"
//                         : "text-gray-300 hover:text-red-400 hover:bg-red-950/30 border border-transparent hover:border-red-900/40"
//                     }`
//                   }
//                 >
//                   {item.name}
//                 </NavLink>
//               )
//             )}
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button
//               onClick={toggleMenu}
//               className="p-2 rounded-lg text-gray-400 hover:text-red-400 hover:bg-red-950/30 transition-colors"
//               aria-expanded={isOpen}
//             >
//               <span className="sr-only">Open main menu</span>
//               {isOpen ? <X size={28} /> : <Menu size={28} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
//           isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
//         }`}
//       >
//         <div className="px-4 pt-4 pb-6 space-y-2 bg-black/95 border-t border-gray-800/50">
//           {navItems.map((item) =>
//             item.hasDropdown ? (
//               <div key={item.name} className="space-y-1">
//                 <button
//                   onClick={() => toggleDropdown(item.name)}
//                   className={`w-full flex items-center justify-between px-4 py-3.5 rounded-lg text-base font-medium transition-all ${
//                     location.pathname.startsWith(item.path)
//                       ? "bg-red-950/50 text-red-400 border-l-4 border-red-600"
//                       : "text-gray-300 hover:text-red-400 hover:bg-red-950/30 border-l-4 border-transparent"
//                   }`}
//                 >
//                   <span>{item.name}</span>
//                   <ChevronDown
//                     size={20}
//                     className={`transition-transform duration-300 ${
//                       openDropdown === item.name ? "rotate-180" : ""
//                     }`}
//                   />
//                 </button>

//                 {/* Mobile Dropdown Content */}
//                 <div
//                   className={`overflow-hidden transition-all duration-300 ease-in-out ${
//                     openDropdown === item.name ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
//                   }`}
//                 >
//                   <div className="pl-6 pt-1 pb-2 space-y-1">
//                     {item.dropdownItems.map((subItem) => (
//                       <NavLink
//                         key={subItem.path}
//                         to={subItem.path}
//                         onClick={closeMenu}
//                         className={({ isActive }) =>
//                           `block px-4 py-3 rounded-lg text-base font-medium transition-all ${
//                             isActive
//                               ? "bg-red-950/50 text-red-400"
//                               : "text-gray-400 hover:text-red-400 hover:bg-red-950/30"
//                           }`
//                         }
//                       >
//                         {subItem.name}
//                       </NavLink>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ) : (
//               <NavLink
//                 key={item.path}
//                 to={item.path}
//                 onClick={closeMenu}
//                 className={({ isActive }) =>
//                   `block px-4 py-3.5 rounded-lg text-base font-medium transition-all ${
//                     isActive
//                       ? "bg-red-950/50 text-red-400 border-l-4 border-red-600"
//                       : "text-gray-300 hover:text-red-400 hover:bg-red-950/30 border-l-4 border-transparent"
//                   }`
//                 }
//               >
//                 {item.name}
//               </NavLink>
//             )
//           )}

//           {/* Optional Auth Buttons */}
//           <div className="pt-6 px-2 flex flex-col gap-4 border-t border-gray-800/50 mt-5">
//             <button className="w-full py-3.5 text-gray-200 border border-gray-700 rounded-lg hover:bg-gray-800/60 transition">
//               Login
//             </button>
//             <button className="w-full py-3.5 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition shadow-md hover:shadow-red-900/50">
//               Get Started
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { Menu, X, ChevronDown } from "lucide-react";
// import ATLAknots from "./Mobile/img/ATLAKnots.png"; // Adjust path if needed

// const navItems = [
//   { name: "Home", path: "/" },
//   {
//     name: "About",
//     path: "/about",
//     hasDropdown: true,
//     dropdownItems: [
//       { name: "Recent Work", path: "/recentwork" },
//       // Add more items here if needed
//     ],
//   },
//   { name: "Features", path: "/service" },
//   { name: "Pricing", path: "/pricing" },
//   { name: "Technology", path: "/technology" },
//   { name: "Tech News", path: "/technews" },
//   { name: "Contact", path: "/contact" },
// ];

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);            // mobile menu
//   const [openDropdown, setOpenDropdown] = useState(null); // mobile accordion

//   const toggleMenu = () => setIsOpen(!isOpen);
//   const closeMenu = () => {
//     setIsOpen(false);
//     setOpenDropdown(null);
//   };

//   const toggleDropdown = (name) => {
//     setOpenDropdown(openDropdown === name ? null : name);
//   };

//   return (
//     <nav className="bg-black/85 backdrop-blur-lg border-b border-gray-800/60 sticky top-0 z-50">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="flex h-20 items-center justify-between">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <NavLink to="/" className="flex items-center gap-2.5">
//               <img
//                 src={ATLAknots}
//                 alt="ATLAKnots Logo"
//                 className="h-14 w-14 md:h-16 md:w-16 lg:h-20 lg:w-20 object-contain"
//               />
//             </NavLink>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex md:items-center md:space-x-1 lg:space-x-2">
//             {navItems.map((item) =>
//               item.hasDropdown ? (
//                 <div key={item.name} className="relative group">
//                   <button
//                     type="button"
//                     className={`flex items-center gap-1.5 px-4 py-2.5 text-sm lg:text-base font-medium rounded-lg transition-all duration-300 ${
//                       location.pathname.startsWith(item.path)
//                         ? "bg-red-950/50 text-red-400 border border-red-800/60 shadow-sm"
//                         : "text-gray-200 hover:text-red-400 hover:bg-red-950/30 border border-transparent hover:border-red-800/50"
//                     }`}
//                   >
//                     {item.name}
//                     <ChevronDown
//                       size={16}
//                       className="transition-transform duration-300 group-hover:rotate-180"
//                     />
//                   </button>

//                   {/* Desktop Dropdown – Improved look */}
//                   <div
//                     className={`
//                       absolute left-0 top-full mt-2 w-60
//                       bg-gradient-to-b from-gray-950/95 to-black/95
//                       backdrop-blur-xl
//                       border border-gray-800/70 rounded-xl
//                       shadow-2xl shadow-black/60
//                       py-3 opacity-0 invisible translate-y-3 scale-95
//                       group-hover:opacity-100 group-hover:visible
//                       group-hover:translate-y-0 group-hover:scale-100
//                       transition-all duration-200 ease-out z-50
//                     `}
//                   >
//                     {item.dropdownItems.map((subItem) => (
//                       <NavLink
//                         key={subItem.path}
//                         to={subItem.path}
//                         onClick={closeMenu}
//                         className={({ isActive }) =>
//                           `block px-5 py-2.5 text-sm font-medium transition-all duration-200 ${
//                             isActive
//                               ? "bg-red-900/40 text-red-300 border-l-2 border-red-600"
//                               : "text-gray-200 hover:bg-red-950/60 hover:text-red-300 hover:border-l-2 hover:border-red-700/70"
//                           }`
//                         }
//                       >
//                         {subItem.name}
//                       </NavLink>
//                     ))}
//                   </div>
//                 </div>
//               ) : (
//                 <NavLink
//                   key={item.path}
//                   to={item.path}
//                   onClick={closeMenu}
//                   className={({ isActive }) =>
//                     `px-4 py-2.5 text-sm lg:text-base font-medium rounded-lg transition-all duration-300 ${
//                       isActive
//                         ? "bg-red-950/50 text-red-400 border border-red-800/60 shadow-sm"
//                         : "text-gray-200 hover:text-red-400 hover:bg-red-950/30 border border-transparent hover:border-red-800/50"
//                     }`
//                   }
//                 >
//                   {item.name}
//                 </NavLink>
//               )
//             )}
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button
//               onClick={toggleMenu}
//               className="p-2 rounded-lg text-gray-300 hover:text-red-400 hover:bg-red-950/30 transition-colors"
//               aria-expanded={isOpen}
//             >
//               <span className="sr-only">Open main menu</span>
//               {isOpen ? <X size={28} /> : <Menu size={28} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
//           isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
//         }`}
//       >
//         <div className="px-4 pt-4 pb-6 space-y-2 bg-black/95 border-t border-gray-800/60">
//           {navItems.map((item) =>
//             item.hasDropdown ? (
//               <div key={item.name} className="space-y-1">
//                 <button
//                   onClick={() => toggleDropdown(item.name)}
//                   className={`w-full flex items-center justify-between px-4 py-3.5 rounded-lg text-base font-medium transition-all ${
//                     location.pathname.startsWith(item.path)
//                       ? "bg-red-950/50 text-red-400 border-l-4 border-red-600"
//                       : "text-gray-200 hover:text-red-400 hover:bg-red-950/30 border-l-4 border-transparent"
//                   }`}
//                 >
//                   <span>{item.name}</span>
//                   <ChevronDown
//                     size={20}
//                     className={`transition-transform duration-300 ${
//                       openDropdown === item.name ? "rotate-180" : ""
//                     }`}
//                   />
//                 </button>

//                 {/* Mobile Dropdown */}
//                 <div
//                   className={`overflow-hidden transition-all duration-300 ease-in-out ${
//                     openDropdown === item.name ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
//                   }`}
//                 >
//                   <div className="pl-6 pt-1 pb-2 space-y-1 bg-black/40 rounded-b-lg">
//                     {item.dropdownItems.map((subItem) => (
//                       <NavLink
//                         key={subItem.path}
//                         to={subItem.path}
//                         onClick={closeMenu}
//                         className={({ isActive }) =>
//                           `block px-5 py-3 rounded-lg text-base font-medium transition-all ${
//                             isActive
//                               ? "bg-red-950/50 text-red-300 border-l-4 border-red-600"
//                               : "text-gray-300 hover:bg-red-950/60 hover:text-red-300"
//                           }`
//                         }
//                       >
//                         {subItem.name}
//                       </NavLink>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ) : (
//               <NavLink
//                 key={item.path}
//                 to={item.path}
//                 onClick={closeMenu}
//                 className={({ isActive }) =>
//                   `block px-4 py-3.5 rounded-lg text-base font-medium transition-all ${
//                     isActive
//                       ? "bg-red-950/50 text-red-400 border-l-4 border-red-600"
//                       : "text-gray-200 hover:text-red-400 hover:bg-red-950/30 border-l-4 border-transparent"
//                   }`
//                 }
//               >
//                 {item.name}
//               </NavLink>
//             )
//           )}

//           {/* Auth Buttons */}
//           <div className="pt-6 px-2 flex flex-col gap-4 border-t border-gray-800/50 mt-5">
//             <button className="w-full py-3.5 text-gray-200 border border-gray-700 rounded-lg hover:bg-gray-800/60 transition">
//               Login
//             </button>
//             <button className="w-full py-3.5 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition shadow-md hover:shadow-red-900/50">
//               Get Started
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import ATLAknots from "./Mobile/img/ALTAKnots.png"; // Adjust path if needed

const navItems = [
  { name: "Home", path: "/" },
  {
    name: "About",
    path: "/about",
    hasDropdown: true,
    dropdownItems: [
      { name: "Recent Work", path: "/recentwork" },
      // Add more items here if needed
    ],
  },
  { name: "Service", path: "/service" },
  // { name: "Pricing", path: "/pricing" },
  { name: "Technology", path: "/technology" },
  { name: "Tech News", path: "/technews" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // mobile menu
  const [openDropdown, setOpenDropdown] = useState(null); // mobile accordion

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => {
    setIsOpen(false);
    setOpenDropdown(null);
  };

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <nav className="bg-black/85 backdrop-blur-lg border-b border-gray-800/60 sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLink to="/" className="flex items-center gap-2.5">
              <img
                src={ATLAknots}
                alt="ATLAKnots Logo"
                className="h-14 w-30 md:h-16 md:w-36 lg:h-20 lg:w-50 object-contain"
              />
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-1 lg:space-x-2">
            {navItems.map((item) =>
              item.hasDropdown ? (
                <div key={item.name} className="relative group">
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `flex items-center gap-1.5 px-4 py-2.5 text-sm lg:text-base font-medium rounded-lg transition-all duration-300 ${
                        isActive ||
                        window.location.pathname.startsWith(item.path)
                          ? "bg-red-950/50 text-red-400 border border-red-800/60 shadow-sm"
                          : "text-gray-200 hover:text-red-400 hover:bg-red-950/30 border border-transparent hover:border-red-800/50"
                      }`
                    }
                  >
                    <span>{item.name}</span>
                    <ChevronDown
                      size={16}
                      className="transition-transform duration-300 group-hover:rotate-180"
                    />
                  </NavLink>

                  {/* Desktop Dropdown */}
                  <div
                    className={`
                      absolute left-0 top-full mt-2 w-60 
                      bg-gradient-to-b from-gray-950/95 to-black/95 
                      backdrop-blur-xl 
                      border border-gray-800/70 rounded-xl 
                      shadow-2xl shadow-black/60 
                      py-3 opacity-0 invisible translate-y-3 scale-95 
                      group-hover:opacity-100 group-hover:visible 
                      group-hover:translate-y-0 group-hover:scale-100 
                      transition-all duration-200 ease-out z-50
                    `}
                  >
                    {item.dropdownItems.map((subItem) => (
                      <NavLink
                        key={subItem.path}
                        to={subItem.path}
                        onClick={closeMenu}
                        className={({ isActive }) =>
                          `block px-5 py-2.5 text-sm font-medium transition-all duration-200 ${
                            isActive
                              ? "bg-red-900/40 text-red-300 border-l-2 border-red-600"
                              : "text-gray-200 hover:bg-red-950/60 hover:text-red-300 hover:border-l-2 hover:border-red-700/70"
                          }`
                        }
                      >
                        {subItem.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              ) : (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `px-4 py-2.5 text-sm lg:text-base font-medium rounded-lg transition-all duration-300 ${
                      isActive
                        ? "bg-red-950/50 text-red-400 border border-red-800/60 shadow-sm"
                        : "text-gray-200 hover:text-red-400 hover:bg-red-950/30 border border-transparent hover:border-red-800/50"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ),
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg text-gray-300 hover:text-red-400 hover:bg-red-950/30 transition-colors"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-2 bg-black/95 border-t border-gray-800/60">
          {navItems.map((item) =>
            item.hasDropdown ? (
              <div key={item.name} className="space-y-1">
                <div className="flex items-center justify-between">
                  <NavLink
                    to={item.path}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `flex-1 px-4 py-3.5 rounded-lg text-base font-medium transition-all ${
                        isActive ||
                        window.location.pathname.startsWith(item.path)
                          ? "bg-red-950/50 text-red-400 border-l-4 border-red-600"
                          : "text-gray-200 hover:text-red-400 hover:bg-red-950/30 border-l-4 border-transparent"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>

                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      toggleDropdown(item.name);
                    }}
                    className="p-3 text-gray-300 hover:text-red-400"
                  >
                    <ChevronDown
                      size={20}
                      className={`transition-transform duration-300 ${
                        openDropdown === item.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>

                {/* Mobile Dropdown */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openDropdown === item.name
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pl-6 pt-1 pb-2 space-y-1 bg-black/40 rounded-b-lg">
                    {item.dropdownItems.map((subItem) => (
                      <NavLink
                        key={subItem.path}
                        to={subItem.path}
                        onClick={closeMenu}
                        className={({ isActive }) =>
                          `block px-5 py-3 rounded-lg text-base font-medium transition-all ${
                            isActive
                              ? "bg-red-950/50 text-red-300 border-l-4 border-red-600"
                              : "text-gray-300 hover:bg-red-950/60 hover:text-red-300"
                          }`
                        }
                      >
                        {subItem.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `block px-4 py-3.5 rounded-lg text-base font-medium transition-all ${
                    isActive
                      ? "bg-red-950/50 text-red-400 border-l-4 border-red-600"
                      : "text-gray-200 hover:text-red-400 hover:bg-red-950/30 border-l-4 border-transparent"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ),
          )}

          {/* Auth Buttons */}
          <div className="pt-6 px-2 flex flex-col gap-4 border-t border-gray-800/50 mt-5">
            <button className="w-full py-3.5 text-gray-200 border border-gray-700 rounded-lg hover:bg-gray-800/60 transition">
              Login
            </button>
            <button className="w-full py-3.5 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition shadow-md hover:shadow-red-900/50">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
