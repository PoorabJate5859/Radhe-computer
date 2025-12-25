
import React from 'react';

const About = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">About Radhe Computer</span>
            <h1 className="text-4xl font-bold text-slate-900 mt-2 mb-6 leading-tight">Your Trusted Partner for Budget-Friendly Computing</h1>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              Located in the heart of Udhna, Surat, Radhe Computer has been serving the local community with high-quality second-hand laptops and top-tier repair services. We believe that technology should be accessible to everyone—especially students and small businesses.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 text-blue-700 p-2 rounded-lg mt-1">✓</div>
                <div>
                  <h3 className="font-bold text-slate-900">Rigorous Testing</h3>
                  <p className="text-slate-500 text-sm">Every laptop undergoes a 50-point quality check before it reaches our display.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 text-blue-700 p-2 rounded-lg mt-1">✓</div>
                <div>
                  <h3 className="font-bold text-slate-900">Affordable Pricing</h3>
                  <p className="text-slate-500 text-sm">We offer the best market rates in Surat for used business-grade laptops.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 text-blue-700 p-2 rounded-lg mt-1">✓</div>
                <div>
                  <h3 className="font-bold text-slate-900">Local Warranty</h3>
                  <p className="text-slate-500 text-sm">Enjoy peace of mind with our testing period warranty on all used devices.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="/images/technician.jpg"
              alt="Inside Radhe Computer Store"
              className="rounded-3xl shadow-2xl relative z-10"
            />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-600 rounded-full mix-blend-multiply opacity-20 animate-pulse"></div>
          </div>
        </div>

        <section className="bg-slate-50 rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-12">Why Hundreds of Customers Trust Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold mb-2">Quality First</h3>
              <p className="text-slate-500 text-sm text-balance">We don't sell 'cheap' computers; we sell high-quality pre-owned machines that last.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-2">Expert Advice</h3>
              <p className="text-slate-500 text-sm text-balance">Our team helps you choose the right specs based on your specific usage requirements.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-2">Fast Turnaround</h3>
              <p className="text-slate-500 text-sm text-balance">We understand your work can't wait. Most of our repairs are completed within 24-48 hours.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
