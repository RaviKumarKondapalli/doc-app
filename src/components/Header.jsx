import React, { useEffect, useState } from 'react';
import { Sun, Moon, Menu } from 'lucide-react'; // Optional: Use `react-icons` or other icons if preferred

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Load saved theme on mount
  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      document.documentElement.classList.add('dark');
      setDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    setDarkMode(!darkMode);
  };
  const menuClick = () => {
    const sidebar = document.querySelector('.navigation-sidebar');
    if (sidebar) {
      sidebar.classList.toggle('block');
    }
  };
  return (
     <div className='container-fluid border-b border-gray-300 dark:border-gray-800 pb-1'>
        <div className='container mx-auto'>
            <header className="flex items-center px-4 py-3">
                <div className="text-xl font-bold">
                    MyLogo
                </div>
                <button
                    onClick={toggleTheme}
                    aria-label="Toggle Theme"
                    title="Change Theme"
                    className="text-gray-600 p-3 py-1 ml-auto dark:text-gray-300 hover:text-black dark:hover:text-white transition"
                >
                    {darkMode ? <Moon size={20} /> : <Sun size={20} />}
                </button>
                <button
                    title="Menu"
                    onClick={menuClick}
                    className="text-gray-600 p-3 py-1 dark:text-gray-300 hover:text-black dark:hover:text-white transition lg:hidden"
                >
                    <Menu />
                </button>
                 
            </header>
           
        </div>
    </div>
  );
};

export default Header;
