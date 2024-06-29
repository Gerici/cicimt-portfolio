import React, { useState } from 'react';
import './dropdown.css'; // Assicurati di importare i tuoi stili personalizzati
import { motion, AnimatePresence } from 'framer-motion';
import { items } from '../constants';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleItems, setVisibleItems] = useState([]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setVisibleItems(filteredItems.slice(0, 3));
    }
  };

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    const filtered = items.filter(item =>
      item.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setVisibleItems(filtered.slice(0, 3));
  };

  return (
    <div className="m-[30px] flex items-center justify-center bg-n-8">
      <div className="relative">
        <button
          id="dropdown-button"
          className="minecraft-btn mx-auto w-64 text-center text-white truncate p-1 border-2 border-b-4 hover:text-yellow-200 font-minecraft inline-flex justify-center px-4 py-2 text-sm font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500 transition duration-150 ease-in-out"
          onClick={toggleDropdown}
        >
          <span className="mr-1">Plugin</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="dropdown-menu"
              className="absolute right-0 mt-2 w-64 rounded-md shadow-lg bg-minecraft-menu ring-1 ring-n-8 ring-opacity-5 p-1 space-y-1 z-10"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <input
                id="search-input"
                className="block w-full px-4 py-2 text-n-1 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
                type="text"
                placeholder="Search plugins"
                value={searchTerm}
                onChange={handleSearchChange}
                autoComplete="off"
              />
              {visibleItems.map((item, index) => (
                <div key={index} className="flex justify-between items-center px-4 py-2 text-white hover:bg-minecraft-hover cursor-pointer rounded-md transition duration-150 ease-in-out border-b border-gray-500 truncate">
                  <span className="truncate">{item.name}</span>
                  <div className="w-16 h-2 bg-n-1 rounded-md overflow-hidden ml-2">
                    <div
                      className="h-full bg-yellow-300"
                      style={{ width: `${item.rating * 10}%` }}
                    ></div>
                  </div>
                </div>
              ))}
              {filteredItems.length === 0 && (
                <div className="px-4 py-2 text-gray-500 text-sm">No items found</div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Dropdown;
