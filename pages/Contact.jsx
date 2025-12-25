
import React from 'react';
import { BUSINESS_INFO } from '../constants/data.js';

const Contact = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Visit Our Store</h1>
          <p className="text-slate-600">We are conveniently located in Udhna, Surat. Come visit us for the best deals!</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Details & Form */}
          <div className="space-y-8">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="text-blue-600 text-xl">📍</div>
                  <p className="text-slate-700">{BUSINESS_INFO.fullAddress}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-blue-600 text-xl">📞</div>
                  <p className="text-slate-700">{BUSINESS_INFO.phone}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-blue-600 text-xl">💬</div>
                  <p className="text-slate-700">WhatsApp: {BUSINESS_INFO.whatsapp}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-blue-600 text-xl">⏰</div>
                  <p className="text-slate-700">{BUSINESS_INFO.workingHours}</p>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-slate-200">
                <a 
                  href={`https://wa.me/${BUSINESS_INFO.whatsapp}`} 
                  className="block w-full bg-green-500 text-white text-center py-3 rounded-lg font-bold hover:bg-green-600 transition"
                >
                  Chat on WhatsApp Now
                </a>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Send a Message</h2>
              <form className="space-y-4">
                <input type="text" placeholder="Your Name" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
                <input type="text" placeholder="Phone Number" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
                <textarea placeholder="How can we help you?" rows="4" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"></textarea>
                <button className="w-full bg-blue-700 text-white py-3 rounded-lg font-bold hover:bg-blue-800 transition">Submit Request</button>
              </form>
            </div>
          </div>

          {/* Map Section */}
          <div className="h-full min-h-[500px] rounded-2xl overflow-hidden shadow-lg border border-slate-200">
            {/* Google Maps Embed Placeholder - Using generic Surat map */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.144804360341!2d72.8258245!3d21.1466041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f997635671d%3A0xe10433246a066929!2sUdhna%2C%20Surat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
