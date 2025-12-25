
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, BUSINESS_INFO } from '../constants/data.js';

const Services = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Professional Computer Services</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">Providing reliable technical support and expert repair services for individuals and small businesses in Surat.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {SERVICES.map((service) => (
            <div key={service.id} className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition">
              <div className="text-5xl shrink-0">{service.icon}</div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h2>
                <p className="text-slate-600 mb-4 leading-relaxed">{service.description}</p>
                <ul className="text-sm text-slate-500 space-y-2 mb-6">
                  <li>✅ Quality replacement parts used</li>
                  <li>✅ Same-day diagnostic for most issues</li>
                  <li>✅ Transparent pricing with no hidden costs</li>
                </ul>
                <a href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=I need help with ${service.title}`} className="text-blue-700 font-bold hover:underline">Get a Free Quote &rarr;</a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 border-t border-slate-100 pt-16">
          <div className="bg-slate-900 rounded-3xl p-10 md:p-16 text-white text-center">
            <h2 className="text-3xl font-bold mb-6">Experience Quick & Reliable Repairs</h2>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto">Laptop won't turn on? Screen broken? System running slow? Bring it to Radhe Computer today!</p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a href={`tel:${BUSINESS_INFO.phone}`} className="bg-white text-slate-900 px-8 py-3 rounded-xl font-bold hover:bg-slate-100 transition">Call Technician</a>
              <Link to="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition">Get Directions</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
