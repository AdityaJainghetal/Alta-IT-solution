// src/context/SidebarContext.jsx
import { ChevronLeft } from 'lucide-react';
import { createContext, useContext, useState, useEffect } from 'react';
const SidebarContext = createContext(null);

export function SidebarProvider({ children }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false); // mobile drawer ke liye alag state

  // LocalStorage se state persist karna (optional lekin useful)
  useEffect(() => {
    try {
      const saved = localStorage.getItem('sidebar-collapsed');
      if (saved !== null) {
        setIsCollapsed(JSON.parse(saved));
      }
    } catch (err) {
      console.warn('Failed to load sidebar state from localStorage', err);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('sidebar-collapsed', JSON.stringify(isCollapsed));
    } catch (err) {
      console.warn('Failed to save sidebar state', err);
    }
  }, [isCollapsed]);

  const value = {
    isCollapsed,
    setIsCollapsed,
    toggleSidebar: () => setIsCollapsed((prev) => !prev),

    isMobileOpen,
    setIsMobileOpen,
    toggleMobile: () => setIsMobileOpen((prev) => !prev),
    closeMobile: () => setIsMobileOpen(false),
  };

  return (
    <SidebarContext.Provider value={value}>
      {children}
    </SidebarContext.Provider>
  );
}

// Custom hook
export function useSidebar() {
  const context = useContext(SidebarContext);
  if (context === null) {
    throw new Error('useSidebar must be used inside SidebarProvider');
  }
  return context;
}