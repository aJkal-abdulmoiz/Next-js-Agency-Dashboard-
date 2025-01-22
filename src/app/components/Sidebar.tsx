'use client';

import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile Hamburger Menu */}
      <button
        className="p-4 bg-blue-500 text-white fixed top-4 left-4 z-50 md:hidden"
        onClick={toggleSidebar}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar */}
      <div
        className={`md:hidden fixed top-0 left-0 h-full bg-gray-100 shadow-lg transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 z-40 md:translate-x-0 md:static md:w-60`}
      >
        <div className="p-6">
          <h2 className="text-xl font-bold mb-6">Dashboard Menu</h2>
          <ul className="space-y-4">
            <li className="font-bold hover:text-blue-500 cursor-pointer">Dashboard</li>
            <li className="hover:text-blue-500 cursor-pointer">Appointments</li>
            <li className="hover:text-blue-500 cursor-pointer">Workspace</li>
            <li className="hover:text-blue-500 cursor-pointer">Finance</li>
            <li className="hover:text-blue-500 cursor-pointer">Inbox</li>
          </ul>
        </div>
      </div>

      {/* Overlay for mobile view when the sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
