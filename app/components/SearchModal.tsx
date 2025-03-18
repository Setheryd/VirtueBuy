import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

const SearchModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [query, setQuery] = useState('');
  const suggestions = ['laptop', 'phone', 'headphones', 'camera', 'watch'];

  const filteredSuggestions = suggestions.filter((s) =>
    s.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return createPortal(
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-neon dark:shadow-neon-dark w-full max-w-md relative animate-fade-slide">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-purple-400"
        >
          ✕
        </button>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for products..."
          className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-purple-400"
        />
        {query && (
          <ul className="mt-4 max-h-60 overflow-auto bg-gray-50 dark:bg-gray-700 rounded-md">
            {filteredSuggestions.map((suggestion, index) => (
              <li
                key={index}
                className="p-3 hover:bg-blue-100 dark:hover:bg-purple-900 cursor-pointer text-gray-800 dark:text-gray-100"
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>,
    document.body
  );
};

export default SearchModal;