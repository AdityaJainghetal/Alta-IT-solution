
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import ATLAknots from "./Mobile/img/ITLogo.png"; // Adjust path if needed

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
  { name: "Service", path: "/service" ,hasDropdown: true, dropdownItems: [
    { name: "Documentation", path: "/resources/documentation" },
    { name: "API Reference", path: "/resources/api" },
    { name: "Community Forum", path: "/resources/forum" },
  ]},
  // { name: "Pricing", path: "/pricing" },
  {name: "Careers", path: "/careers" },
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
                className="h-24 w-120 md:h-16 md:w-46 lg:h-40 mt-5  lg:w-50 object-contain"
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
