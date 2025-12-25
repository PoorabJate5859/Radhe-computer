
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, FEATURED_PRODUCTS, BUSINESS_INFO } from '../constants/data.js';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Premium Second-Hand Laptops in <span className="text-blue-400">Surat</span>
            </h1>
            <p className="text-lg text-blue-100 mb-8 max-w-lg">
              High-performance business laptops at student-friendly prices. Fully tested, certified, and ready for work or study.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/products" className="bg-white text-blue-900 px-8 py-3 rounded-md font-bold text-center hover:bg-blue-50 transition shadow-lg">
                View Stock
              </Link>
              <a href={`https://wa.me/${BUSINESS_INFO.whatsapp}`} className="bg-green-500 text-white px-8 py-3 rounded-md font-bold text-center hover:bg-green-600 transition shadow-lg flex items-center justify-center">
                WhatsApp Inquiry
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <img
              src="/images/shop-hero.jpg"
              alt="Used Laptops Store Surat"
              className="rounded-2xl shadow-2xl border-4 border-white/10"
            />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Services</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">From selling quality hardware to providing expert repair services, we are your one-stop computer shop in Udhna.</p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="p-8 border rounded-xl hover:shadow-xl transition group bg-white border-slate-100">
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">{service.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 flex justify-between items-end">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Popular In Stock</h2>
            <p className="text-slate-600">Fresh arrivals of business laptops and accessories.</p>
          </div>
          <Link to="/products" className="text-blue-700 font-semibold hover:underline hidden sm:block">View All Products &rarr;</Link>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
          {FEATURED_PRODUCTS.map((product) => (
            <div key={product.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition border border-slate-200">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <span className="text-xs font-bold uppercase text-blue-600 tracking-wider">{product.category}</span>
                <h3 className="text-lg font-bold mt-1 text-slate-900">{product.name}</h3>
                <p className="text-slate-600 text-sm mt-1">{product.specs}</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-xl font-bold text-slate-900">{product.price}</span>
                  <a href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Inquiry for ${product.name}`} className="bg-slate-100 text-slate-900 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-slate-200 transition">Inquire</a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="sm:hidden mt-8 text-center px-4">
          <Link to="/products" className="block bg-blue-700 text-white px-6 py-3 rounded-lg font-bold">View All Products</Link>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="py-20 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold mb-2">4.6/5</div>
            <p className="text-blue-100">Customer Satisfaction</p>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">379+</div>
            <p className="text-blue-100">Verified Local Reviews</p>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">10+ Years</div>
            <p className="text-blue-100">Established Experience</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
