import { motion } from 'motion/react';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Oversized Wool Blend Coat',
    price: '$289',
    image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&q=80&w=1000',
    tag: '🔥 Trending'
  },
  {
    id: 2,
    name: 'Minimalist Silk Dress',
    price: '$195',
    image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 3,
    name: 'Structured Cotton Blazer',
    price: '$245',
    image: 'https://images.unsplash.com/photo-1591369822096-fb14ce694e00?auto=format&fit=crop&q=80&w=1000',
    tag: 'New'
  },
  {
    id: 4,
    name: 'Cashmere Turtleneck',
    price: '$150',
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=1000',
  }
];

const reviews = [
  {
    id: 1,
    text: "The quality feels luxury. Totally worth it. I've received so many compliments.",
    author: "Ayesha K.",
  },
  {
    id: 2,
    text: "Perfect fit and fast delivery! The packaging itself was an experience.",
    author: "Rahul S.",
  },
  {
    id: 3,
    text: "My new favorite brand. The materials are incredible and styling is perfectly minimal.",
    author: "Sarah J.",
  }
];

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[90vh] w-full bg-black overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=2070" 
          alt="Fashion Model Walking" 
          className="absolute inset-0 w-full h-full object-cover opacity-70 object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-white font-serif text-5xl md:text-7xl lg:text-8xl max-w-4xl tracking-tight leading-tight mb-6"
          >
            Own Your Style.<br />Define Your Verse.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <Link 
              to="/explore" 
              className="inline-flex items-center px-8 py-4 bg-white text-black font-medium uppercase tracking-widest text-sm hover:bg-gray-100 transition-colors group"
            >
              Shop Now
              <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Controlled Premium Color Blocks */}
      <section className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 aspect-auto md:aspect-[21/9]">
          <Link to="/collections" className="group relative overflow-hidden block h-96 md:h-auto">
            <img src="https://images.unsplash.com/photo-1434389678232-04ce6cafe0cc?auto=format&fit=crop&q=80&w=1000" alt="Minimal Beige" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <span className="text-white/80 uppercase tracking-widest text-xs font-bold mb-2">Beige</span>
              <h3 className="text-white font-serif text-3xl">Minimal Collection</h3>
            </div>
          </Link>
          <Link to="/collections" className="group relative overflow-hidden block h-96 md:h-auto">
            <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=1000" alt="Nightwear Black" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
               <span className="text-white/80 uppercase tracking-widest text-xs font-bold mb-2">Black</span>
              <h3 className="text-white font-serif text-3xl">Nightwear</h3>
            </div>
          </Link>
          <Link to="/collections" className="group relative overflow-hidden block h-96 md:h-auto">
            <img src="https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?auto=format&fit=crop&q=80&w=1000" alt="Pastel Summer" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
               <span className="text-white/80 uppercase tracking-widest text-xs font-bold mb-2">Soft Pastel</span>
              <h3 className="text-white font-serif text-3xl">Summer Drop</h3>
            </div>
          </Link>
        </div>
      </section>

      {/* Trending Collection */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-serif font-semibold tracking-tight">Trending Now</h2>
            <p className="mt-2 text-gray-500">The pieces everyone is talking about.</p>
          </div>
          <Link to="/explore" className="hidden md:inline-flex items-center text-sm font-medium uppercase tracking-wider hover:text-gray-500 transition-colors">
            View All <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-4">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
                />
                {product.tag && (
                  <div className="absolute top-3 left-3 bg-white text-black text-[10px] font-bold uppercase tracking-widest px-3 py-1.5">
                    {product.tag}
                  </div>
                )}
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
            </div>
          ))}
        </div>
        <div className="mt-12 text-center md:hidden">
            <Link to="/explore" className="inline-flex items-center text-sm font-medium uppercase tracking-wider hover:text-gray-500 transition-colors">
            View All <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="bg-[#FAF9F6] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <h2 className="text-3xl md:text-4xl font-serif font-semibold text-center mb-16">Loved by Thousands</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {reviews.map((review) => (
                <div key={review.id} className="p-8 bg-white border border-gray-100">
                  <div className="flex justify-center space-x-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-black text-black" />
                    ))}
                  </div>
                  <p className="text-lg leading-relaxed text-gray-800 mb-6 font-serif italic">"{review.text}"</p>
                  <p className="text-sm font-medium uppercase tracking-widest text-gray-500">— {review.author}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Offer Section */}
      <section className="bg-black text-white py-20 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-serif mb-4">Join the Verse</h2>
          <p className="text-gray-300 mb-8 font-light">Subscribe to our newsletter and get 10% OFF on your first order.</p>
          <form className="flex flex-col sm:flex-row max-w-md mx-auto gap-2">
            <input 
              type="email" 
              placeholder="YOUR EMAIL" 
              className="flex-1 bg-transparent border border-white/30 px-4 py-3 text-sm focus:outline-none focus:border-white transition-colors"
            />
            <button type="submit" className="bg-white text-black px-6 py-3 font-medium uppercase tracking-widest text-sm hover:bg-gray-200 transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
