
import React from 'react';
import { FEATURED_PRODUCTS, BUSINESS_INFO } from '../constants/data.js';

const Products = () => {
  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Our Inventory</h1>
        <p className="text-slate-600">Explore our curated collection of second-hand laptops and accessories. Prices are indicative - please contact us for the latest offers.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex space-x-4 overflow-x-auto pb-2">
          <button className="bg-blue-700 text-white px-6 py-2 rounded-full whitespace-nowrap">All Items</button>
          <button className="bg-white text-slate-700 border border-slate-200 px-6 py-2 rounded-full whitespace-nowrap hover:bg-slate-50 transition">Laptops</button>
          <button className="bg-white text-slate-700 border border-slate-200 px-6 py-2 rounded-full whitespace-nowrap hover:bg-slate-50 transition">Accessories</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* Extended product list simulation */}
          {[...FEATURED_PRODUCTS, ...FEATURED_PRODUCTS].map((product, index) => (
            <div key={`${product.id}-${index}`} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition border border-slate-200 flex flex-col">
              <img src={`${product.image}?v=${index}`} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-5 flex-grow">
                <span className="text-[10px] font-bold uppercase text-blue-600 tracking-wider bg-blue-50 px-2 py-0.5 rounded">{product.category}</span>
                <h3 className="text-lg font-bold mt-2 text-slate-900 leading-snug">{product.name}</h3>
                <p className="text-slate-600 text-sm mt-1">{product.specs}</p>
              </div>
              <div className="p-5 border-t border-slate-50 flex items-center justify-between">
                <span className="text-lg font-bold text-slate-900">{product.price}</span>
                <a 
                  href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hi, I am interested in ${product.name}`}
                  className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 rounded-2xl p-8 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Don't see what you're looking for?</h2>
          <p className="text-slate-600 mb-6">Our inventory changes daily. Tell us your requirements and budget, and we'll notify you when the right machine arrives.</p>
          <a href={`tel:${BUSINESS_INFO.phone}`} className="inline-block bg-blue-700 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-800 transition">Call to Check Availability</a>
        </div>
      </div>
    </div>
  );
};

export default Products;
