
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BUSINESS_INFO } from '../constants/data.js';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-blue-700">{BUSINESS_INFO.name}</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-700 font-medium">Home</Link>
            <Link to="/products" className="text-gray-700 hover:text-blue-700 font-medium">Products</Link>
            <Link to="/services" className="text-gray-700 hover:text-blue-700 font-medium">Services</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-700 font-medium">Why Choose Us</Link>
            <Link to="/contact" className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition">Contact Now</Link>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-700 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white pb-4 px-4 space-y-1 shadow-inner">
          <Link to="/" onClick={() => setIsOpen(false)} className="block py-2 text-gray-700 border-b">Home</Link>
          <Link to="/products" onClick={() => setIsOpen(false)} className="block py-2 text-gray-700 border-b">Products</Link>
          <Link to="/services" onClick={() => setIsOpen(false)} className="block py-2 text-gray-700 border-b">Services</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="block py-2 text-gray-700 border-b">Why Choose Us</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="block py-2 text-blue-700 font-bold">Contact Now</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
