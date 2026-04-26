import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const collections = [
  {
    id: 'earth',
    title: 'Earth Tones Collection',
    description: 'Calm, minimal outfits designed for the modern grounding.',
    image: 'https://images.unsplash.com/photo-1434389678232-04ce6cafe0cc?auto=format&fit=crop&q=80&w=2000',
    align: 'left'
  },
  {
    id: 'street',
    title: 'Bold Streetwear',
    description: 'Dark bases with neon accents. Stand out in the concrete jungle.',
    image: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80&w=2000',
    align: 'right'
  },
  {
    id: 'summer',
    title: 'Summer Pastels',
    description: 'Light, fresh, and breathable fabrics for endless sun.',
    image: 'https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?auto=format&fit=crop&q=80&w=2000',
    align: 'left'
  },
  {
    id: 'night',
    title: 'Night Luxe',
    description: 'Premium black outfits tailored for unforgettable evenings.',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=2000',
    align: 'right'
  }
];

export default function Collections() {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-serif mb-6">Collections</h1>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg">Curated stories told through fabric, color, and silhouette.</p>
      </div>

      <div className="flex flex-col space-y-4 md:space-y-8 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto pb-24">
        {collections.map((collection) => (
          <div key={collection.id} className="relative group overflow-hidden h-[60vh] md:h-[80vh] w-full bg-gray-100 flex items-center">
            <img 
              src={collection.image} 
              alt={collection.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 transition-colors duration-700 group-hover:bg-black/40"></div>
            
            <div className={`relative z-10 w-full px-8 md:px-24 flex ${collection.align === 'right' ? 'justify-end' : 'justify-start'}`}>
              <div className="max-w-xl text-white">
                <h2 className="text-4xl md:text-6xl font-serif mb-4 leading-tight">{collection.title}</h2>
                <p className="text-lg md:text-xl text-white/80 mb-8 font-light">{collection.description}</p>
                <Link 
                  to="/explore" 
                  className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-medium uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-all duration-300 group/btn"
                >
                  Shop Collection
                  <ArrowRight className="ml-2 h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
