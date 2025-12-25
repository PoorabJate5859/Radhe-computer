
import React from 'react';
import { Link } from 'react-router-dom';
import { BUSINESS_INFO } from '../constants/data.js';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-xl font-bold text-white mb-4">{BUSINESS_INFO.name}</h3>
          <p className="mb-4">Surat's most trusted destination for quality second-hand laptops and reliable computer repairs since years.</p>
          <div className="flex space-x-4">
            <span className="bg-blue-600 px-3 py-1 rounded-full text-xs font-semibold text-white">4.6⭐ Rating</span>
            <span className="bg-blue-600 px-3 py-1 rounded-full text-xs font-semibold text-white">370+ Reviews</span>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/products" className="hover:text-blue-400 transition">Used Laptops in Surat</Link></li>
            <li><Link to="/services" className="hover:text-blue-400 transition">Laptop Repair Udhna</Link></li>
            <li><Link to="/products" className="hover:text-blue-400 transition">Computer Accessories</Link></li>
            <li><Link to="/contact" className="hover:text-blue-400 transition">Visit Store</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
          <p className="mb-2">📍 {BUSINESS_INFO.fullAddress}</p>
          <p className="mb-2">📞 {BUSINESS_INFO.phone}</p>
          <p className="mb-2">💬 WhatsApp: {BUSINESS_INFO.whatsapp}</p>
          <p className="mb-2">⏰ {BUSINESS_INFO.workingHours}</p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-slate-800 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.</p>
        <p className="mt-2 text-slate-500">Keywords: Second hand laptop in Surat, Used laptop shop in Udhna, Computer accessories Surat, Laptop repair Surat.</p>
      </div>
    </footer>
  );
};

export default Footer;
