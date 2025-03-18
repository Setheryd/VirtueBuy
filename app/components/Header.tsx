import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Header: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center group">
          <svg
            className="h-10 w-10 text-blue-500 dark:text-purple-500 transition-all duration-300 group-hover:shadow-neon dark:group-hover:shadow-neon-dark"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h18M3 3v18M3 3l6 6M21 3v18M21 3l-6 6"
            />
          </svg>
          <span className="ml-2 text-2xl font-extrabold text-gray-800 dark:text-gray-100 group-hover:text-blue-500 dark:group-hover:text-purple-400 transition-colors duration-300">
            VirtuBuy
          </span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            {['Home', 'Products', 'About', 'Contact'].map((link) => (
              <li key={link}>
                <a
                  href={`/${link.toLowerCase()}`}
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-purple-400 transition-colors duration-200 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-500 dark:after:bg-purple-400 after:left-0 after:bottom-[-4px] after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 hover:shadow-neon dark:hover:shadow-neon-dark transition-all duration-300"
        >
          {isDark ? '🌞' : '🌙'}
        </button>
      </div>
    </header>
  );
};

export default Header;