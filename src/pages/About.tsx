import { motion } from 'motion/react';
import { ShieldCheck, Truck, RotateCcw, Gem } from 'lucide-react';

const features = [
  {
    icon: <Gem className="h-6 w-6 stroke-1" />,
    title: 'Premium Fabrics',
    description: 'Materials sourced globally to ensure they last longer and feel luxurious against your skin.'
  },
  {
    icon: <ShieldCheck className="h-6 w-6 stroke-1" />,
    title: 'Affordable Luxury',
    description: 'High-end design and quality without the extreme markup. Accessible elegance.'
  },
  {
    icon: <Truck className="h-6 w-6 stroke-1" />,
    title: 'Fast & Reliable',
    description: 'Tracked, express delivery on all orders to ensure your pieces arrive safely and quickly.'
  },
  {
    icon: <RotateCcw className="h-6 w-6 stroke-1" />,
    title: 'Easy Returns',
    description: 'Not quite perfect? Enjoy a seamless 7-day return process with no questions asked.'
  }
];

export default function About() {
  return (
    <div className="w-full pb-20">
      {/* Hero */}
      <section className="relative h-[60vh] bg-black">
        <img 
          src="https://images.unsplash.com/photo-1550614000-4b95d4ed1ab5?auto=format&fit=crop&q=80&w=2000" 
          alt="Fabric Texture" 
          className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-5xl md:text-7xl font-serif text-center relative z-10">
            Why StyleVerse?
          </h1>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-24 px-4 max-w-4xl mx-auto text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <span className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-6 block">Our Story</span>
          <blockquote className="text-2xl md:text-4xl font-serif leading-relaxed text-gray-900 border-l-0">
            "StyleVerse was built for individuals who want to stand out effortlessly—without compromising comfort or quality."
          </blockquote>
          <div className="mt-12 h-px w-24 bg-black mx-auto"></div>
        </motion.div>
      </section>

      {/* Key Points */}
      <section className="bg-[#FAF9F6] py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center md:items-start"
              >
                <div className="h-12 w-12 bg-black text-white flex items-center justify-center rounded-full mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-serif font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visuals */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <img 
            src="https://images.unsplash.com/photo-1558769132-cb1fac0840c2?auto=format&fit=crop&q=80&w=1000" 
            alt="Behind the scenes" 
            className="w-full h-[600px] object-cover"
          />
          <img 
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1000" 
            alt="Design process" 
            className="w-full h-[600px] object-cover pt-12 md:pt-24"
          />
        </div>
      </section>
    </div>
  );
}
