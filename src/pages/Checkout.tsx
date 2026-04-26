import { Lock, ShieldCheck, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export default function Checkout() {
  return (
    <div className="bg-[#FAF9F6] min-h-screen pt-12 pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Secure Header */}
        <div className="flex items-center justify-center space-x-2 text-sm text-gray-500 font-medium uppercase tracking-widest mb-12">
          <Lock className="h-4 w-4" />
          <span>Secure Checkout</span>
        </div>

        <div className="flex flex-col-reverse lg:flex-row gap-12">
          
          {/* Left Column: Form */}
          <div className="flex-1 space-y-12">
            
            {/* Contact Info */}
            <section className="bg-white p-8 border border-gray-100 shadow-sm">
              <h2 className="text-xl font-serif font-medium mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div>
                   <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                   <input type="email" className="w-full border border-gray-300 px-4 py-3 text-sm focus:border-black focus:ring-1 focus:ring-black outline-none transition-colors" />
                </div>
              </div>
            </section>

            {/* Shipping Info */}
            <section className="bg-white p-8 border border-gray-100 shadow-sm">
              <h2 className="text-xl font-serif font-medium mb-6">Shipping Address</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                   <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                   <input type="text" className="w-full border border-gray-300 px-4 py-3 text-sm focus:border-black focus:ring-1 focus:ring-black outline-none transition-colors" />
                </div>
                <div>
                   <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                   <input type="text" className="w-full border border-gray-300 px-4 py-3 text-sm focus:border-black focus:ring-1 focus:ring-black outline-none transition-colors" />
                </div>
                <div className="md:col-span-2">
                   <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                   <input type="text" className="w-full border border-gray-300 px-4 py-3 text-sm focus:border-black focus:ring-1 focus:ring-black outline-none transition-colors" />
                </div>
                <div>
                   <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                   <input type="text" className="w-full border border-gray-300 px-4 py-3 text-sm focus:border-black focus:ring-1 focus:ring-black outline-none transition-colors" />
                </div>
                <div>
                   <label className="block text-sm font-medium text-gray-700 mb-1">Postal Code</label>
                   <input type="text" className="w-full border border-gray-300 px-4 py-3 text-sm focus:border-black focus:ring-1 focus:ring-black outline-none transition-colors" />
                </div>
              </div>
            </section>

            {/* Payment Options */}
            <section className="bg-white p-8 border border-gray-100 shadow-sm">
              <h2 className="text-xl font-serif font-medium mb-6">Payment Method</h2>
              <div className="space-y-3">
                <label className="flex items-center p-4 border border-gray-200 cursor-pointer hover:border-black transition-colors rounded-sm group">
                  <input type="radio" name="payment" className="text-black focus:ring-black accent-black w-4 h-4" defaultChecked />
                  <span className="ml-3 font-medium text-gray-900 flex-1">Credit / Debit Card</span>
                  <div className="flex space-x-1 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all">
                    <div className="w-8 h-5 bg-gray-200 rounded"></div>
                    <div className="w-8 h-5 bg-gray-200 rounded"></div>
                  </div>
                </label>
                <label className="flex items-center p-4 border border-gray-200 cursor-pointer hover:border-black transition-colors rounded-sm group">
                  <input type="radio" name="payment" className="text-black focus:ring-black accent-black w-4 h-4" />
                  <span className="ml-3 font-medium text-gray-900">UPI (GPay, PhonePe)</span>
                </label>
                <label className="flex items-center p-4 border border-gray-200 cursor-pointer hover:border-black transition-colors rounded-sm">
                  <input type="radio" name="payment" className="text-black focus:ring-black accent-black w-4 h-4" />
                  <span className="ml-3 font-medium text-gray-900">Cash on Delivery</span>
                </label>
              </div>

              <div className="mt-8">
                <button className="w-full bg-black text-white py-4 font-medium uppercase tracking-widest text-sm hover:bg-gray-900 transition-colors">
                  Complete Order
                </button>
              </div>
            </section>

          </div>

          {/* Right Column: Order Summary */}
          <div className="lg:w-96">
            <div className="bg-white p-8 border border-gray-100 shadow-sm sticky top-28">
              <h2 className="text-xl font-serif font-medium mb-6">Order Summary</h2>
              
              <div className="space-y-6 mb-6">
                {/* Item 1 */}
                <div className="flex space-x-4">
                  <div className="w-20 h-24 bg-gray-100 flex-shrink-0">
                    <img src="https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&q=80&w=200" alt="Item" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">Oversized Wool Blend Coat</h4>
                      <p className="text-xs text-gray-500 mt-1">Color: Noir | Size: M</p>
                    </div>
                    <p className="text-sm font-medium">$289.00</p>
                  </div>
                </div>
                {/* Item 2 */}
                <div className="flex space-x-4">
                  <div className="w-20 h-24 bg-gray-100 flex-shrink-0">
                    <img src="https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&q=80&w=200" alt="Item" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">Minimalist Silk Dress</h4>
                      <p className="text-xs text-gray-500 mt-1">Color: Beige | Size: S</p>
                    </div>
                    <p className="text-sm font-medium">$195.00</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-6 space-y-3">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Subtotal</span>
                  <span>$484.00</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Shipping</span>
                  <span className="text-green-600 font-medium">Free</span>
                </div>
              </div>

              <div className="border-t border-gray-100 mt-6 pt-6 flex justify-between items-end">
                <span className="font-serif text-lg font-medium">Total</span>
                <span className="text-xl font-medium">$484.00</span>
              </div>

              {/* Trust Badges */}
              <div className="mt-8 bg-gray-50 p-4 border border-gray-100 space-y-3">
                <div className="flex items-center text-xs text-gray-600">
                  <ShieldCheck className="h-4 w-4 mr-2" />
                  7-day easy returns
                </div>
                <div className="flex items-center text-xs text-gray-600">
                  <Clock className="h-4 w-4 mr-2" />
                  Delivery in 3-5 business days
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
