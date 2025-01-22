'use client';

import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 text-white p-4 flex justify-between items-center">
      {/* Logo */}
      <div>
        <h1 className="text-lg font-bold">LOGO</h1>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-14">
        <ul className="flex gap-14">
          <li className="hover:underline cursor-pointer">Dashboard</li>
          <li className="hover:underline cursor-pointer">Appointment</li>
          <li className="hover:underline cursor-pointer">Workspace</li>
          <li className="hover:underline cursor-pointer">Finance</li>
          <li className="hover:underline cursor-pointer">Inbox</li>
        </ul>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <span className="material-icons">
            {isMobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4">
        <button className="hidden md:block hover:underline">Help</button>
        <button className="relative">
          <span className="material-icons">notifications</span>
          <span className="absolute top-0 right-0 bg-red-500 text-xs rounded-full px-1">3</span>
        </button>
        <img
          src="https://media.licdn.com/dms/image/v2/D4D03AQHsLcaoJX4aLg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1730303379010?e=1743033600&v=beta&t=ptVAM7fr5t2pwPGI_NFzxnda2ZgH0L1v4CO1U67dSJI"
          alt="Profile"
          className="w-8 h-8 rounded-full border-2 border-white"
        />
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-blue-600 text-white md:hidden">
          <ul className="flex flex-col gap-4 p-4">
            <li className="hover:underline cursor-pointer">Dashboard</li>
            <li className="hover:underline cursor-pointer">Appointment</li>
            <li className="hover:underline cursor-pointer">Workspace</li>
            <li className="hover:underline cursor-pointer">Finance</li>
            <li className="hover:underline cursor-pointer">Inbox</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
