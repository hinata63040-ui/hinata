import { Link, Outlet } from 'react-router-dom';
import { ShoppingBag, Menu, Search, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Explore', path: '/explore' },
    { name: 'Collections', path: '/collections' },
    { name: 'About', path: '/about' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Top Banner */}
      <div className="bg-black text-white text-xs py-2 text-center tracking-wider">
        FREE SHIPPING ON ORDERS OVER $150
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Mobile menu button */}
            <div className="flex items-center lg:hidden">
              <button
                type="button"
                className="text-gray-900 p-2"
                onClick={() => setIsMenuOpen(true)}
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>

            {/* Logo */}
            <div className="flex-1 flex justify-center lg:justify-start">
              <Link to="/" className="font-serif text-2xl font-bold tracking-tight">
                StyleVerse
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-sm font-medium text-gray-900 hover:text-gray-500 transition-colors uppercase tracking-widest"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Icons */}
            <div className="flex items-center space-x-6 flex-1 justify-end">
              <button className="text-gray-900 hover:text-gray-500 transition-colors">
                <Search className="h-5 w-5" />
              </button>
              <Link to="/checkout" className="text-gray-900 hover:text-gray-500 transition-colors relative">
                <ShoppingBag className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-3.5 w-3.5 rounded-full bg-black text-white text-[9px] font-bold flex items-center justify-center">
                  2
                </span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/40 z-50 lg:hidden"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 left-0 max-w-xs w-full bg-white z-50 shadow-xl flex flex-col lg:hidden"
            >
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <span className="font-serif text-xl font-bold">StyleVerse</span>
                <button onClick={() => setIsMenuOpen(false)} className="p-2 -mr-2">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav className="flex-1 px-6 py-8 space-y-6 flex flex-col">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-lg font-medium text-gray-900 uppercase tracking-wider"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-100 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <span className="font-serif text-2xl font-bold tracking-tight block mb-4">StyleVerse</span>
              <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                Premium fashion for modern life. Crafted with intention, designed for comfort, and built to last.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-sm text-gray-900 uppercase tracking-wider mb-4">Explore</h3>
              <ul className="space-y-3">
                <li><Link to="/explore" className="text-gray-500 hover:text-black text-sm transition-colors">New Arrivals</Link></li>
                <li><Link to="/collections" className="text-gray-500 hover:text-black text-sm transition-colors">Collections</Link></li>
                <li><Link to="/about" className="text-gray-500 hover:text-black text-sm transition-colors">Our Story</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-sm text-gray-900 uppercase tracking-wider mb-4">Support</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-500 hover:text-black text-sm transition-colors">Contact</a></li>
                <li><a href="#" className="text-gray-500 hover:text-black text-sm transition-colors">Shipping & Returns</a></li>
                <li><a href="#" className="text-gray-500 hover:text-black text-sm transition-colors">FAQ</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
            <p>&copy; {new Date().getFullYear()} StyleVerse Fashion. All rights reserved.</p>
            <div className="mt-4 md:mt-0 space-x-4">
              <a href="#" className="hover:text-gray-900">Privacy Policy</a>
              <a href="#" className="hover:text-gray-900">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
