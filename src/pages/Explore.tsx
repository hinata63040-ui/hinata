import { useState } from 'react';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';

// Generates an array of products
const generateProducts = () => {
  return Array.from({ length: 12 }).map((_, i) => ({
    id: i + 1,
    name: `Premium Item ${i + 1}`,
    price: `$${(Math.random() * 200 + 50).toFixed(0)}`,
    image: `https://images.unsplash.com/photo-${[
      '1515886657613-9f3515b0c78f',
      '1539533018447-63fcce2678e3',
      '1434389678232-04ce6cafe0cc',
      '1539008835657-9e8e9680c956',
      '1591369822096-fb14ce694e00',
      '1620799140408-edc6dcb6d633'
    ][i % 6]}?auto=format&fit=crop&q=80&w=800`
  }));
};

const allProducts = generateProducts();

export default function Explore() {
  const [activeCategory, setActiveCategory] = useState('New Arrivals');
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const categories = ['New Arrivals', 'Best Sellers', 'Streetwear', 'Ethnic', 'Accessories'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-gray-100 pb-8">
        <div>
          <h1 className="text-4xl md:text-5xl font-serif font-medium mb-4">Explore Collection</h1>
          <div className="flex space-x-6 overflow-x-auto hide-scrollbar">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap text-sm font-medium uppercase tracking-widest pb-2 transition-colors border-b-2 ${
                  activeCategory === cat ? 'border-black text-black' : 'border-transparent text-gray-400 hover:text-gray-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        <button 
          onClick={() => setIsFiltersOpen(!isFiltersOpen)}
          className="mt-6 md:mt-0 flex items-center text-sm font-medium uppercase tracking-widest text-gray-600 hover:text-black transition-colors"
        >
          <SlidersHorizontal className="h-4 w-4 mr-2" />
          Filters
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Sidebar Filters (Desktop) */}
        <div className={`lg:w-64 flex-shrink-0 ${isFiltersOpen ? 'block' : 'hidden lg:block'}`}>
          <div className="space-y-8 sticky top-28">
             {/* Category */}
             <div>
              <h3 className="flex items-center justify-between text-sm font-medium uppercase tracking-widest mb-4">
                Category <ChevronDown className="h-4 w-4 text-gray-400" />
              </h3>
              <div className="space-y-3">
                {['Men', 'Women', 'Unisex'].map(item => (
                  <label key={item} className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-black focus:ring-black accent-black w-4 h-4" />
                    <span className="ml-3 text-sm text-gray-600">{item}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price */}
            <div>
              <h3 className="flex items-center justify-between text-sm font-medium uppercase tracking-widest mb-4 border-t border-gray-100 pt-8">
                Price <ChevronDown className="h-4 w-4 text-gray-400" />
              </h3>
              <div className="space-y-3">
                {['Under $100', '$100 - $200', 'Over $200'].map(item => (
                  <label key={item} className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-black focus:ring-black accent-black w-4 h-4" />
                    <span className="ml-3 text-sm text-gray-600">{item}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Size */}
            <div>
              <h3 className="flex items-center justify-between text-sm font-medium uppercase tracking-widest mb-4 border-t border-gray-100 pt-8">
                Size <ChevronDown className="h-4 w-4 text-gray-400" />
              </h3>
              <div className="grid grid-cols-3 gap-2">
                {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map(size => (
                  <button key={size} className="border border-gray-200 py-2 text-xs font-medium hover:border-black transition-colors">
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {allProducts.map((product, index) => (
              <motion.div 
                key={product.id} 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-4">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="w-full bg-white/90 backdrop-blur text-black py-3 text-sm font-medium uppercase tracking-widest hover:bg-black hover:text-white transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900 group-hover:text-gray-600 transition-colors">{product.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{product.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center border-t border-gray-100 pt-16">
            <button className="inline-flex items-center px-8 py-4 border border-black text-black font-medium uppercase tracking-widest text-sm hover:bg-black hover:text-white transition-colors">
              Load More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
