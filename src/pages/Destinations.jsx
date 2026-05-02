import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, MapPin, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
const Destinations = () => {
  const [activeRegion, setActiveRegion] = useState('All');
  const navigate = useNavigate();

  const allDestinations = [
    { id: 1, name: "Santorini, Greece", region: "Europe", image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&q=80&w=800", description: "Experience the stunning sunsets and white-washed architecture.", rating: 4.8 },
    { id: 2, name: "Bali, Indonesia", region: "Asia", image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800", description: "Discover ancient temples, beautiful beaches, and lush jungles.", rating: 4.9 },
    { id: 3, name: "Kyoto, Japan", region: "Asia", image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800", description: "Immerse yourself in traditional Japanese culture and beautiful shrines.", rating: 4.7 },
    { id: 4, name: "Paris, France", region: "Europe", image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80&w=800", description: "The city of love, art, fashion, and gastronomy.", rating: 4.8 },
    { id: 5, name: "Rome, Italy", region: "Europe", image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&q=80&w=800", description: "Explore the ancient ruins and enjoy world-class cuisine.", rating: 4.6 },
    { id: 6, name: "Maldives", region: "Islands", image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=800", description: "Relax in overwater bungalows over crystal clear turquoise waters.", rating: 5.0 },
    { id: 7, name: "Masai Mara", region: "Africa", image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=800", description: "Witness the spectacular great migration and exotic wildlife.", rating: 4.9 },
    { id: 8, name: "Bora Bora", region: "Islands", image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80&w=800", description: "The ultimate luxury island destination with vibrant coral reefs.", rating: 4.9 },
  ];

  const regions = ['All', 'Europe', 'Asia', 'Africa', 'Islands'];

  const filteredDestinations = activeRegion === 'All' 
    ? allDestinations 
    : allDestinations.filter(d => d.region === activeRegion);

  return (
    <div className="bg-gray-50 min-h-screen py-12 pb-24">
      <Helmet>
        <title>Destinations | Wanderlust Travel Agency</title>
        <meta name="description" content="Explore our beautiful destinations worldwide. From Santorini to Bali, find the perfect backdrop for your next unforgettable journey." />
      </Helmet>
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Header */}
        <div className="text-center mb-16 mt-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full bg-blue-100 text-primary text-sm font-bold tracking-wider"
          >
            DISCOVER THE WORLD
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6"
          >
            Explore Our Destinations
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            From pristine beaches to bustling cities, find the perfect backdrop for your next unforgettable journey.
          </motion.p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {regions.map((region, idx) => (
            <button 
              key={idx}
              onClick={() => setActiveRegion(region)}
              className={`px-8 py-3 rounded-2xl font-bold transition-all shadow-sm ${
                activeRegion === region 
                  ? 'bg-primary text-white shadow-primary/30 transform -translate-y-1' 
                  : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-primary'
              }`}
            >
              {region}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredDestinations.map((dest, index) => (
              <motion.div 
                key={dest.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col group border border-gray-100 hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={dest.image} 
                    alt={dest.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-60"></div>
                  
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1.5 font-bold text-sm shadow-md">
                    <Star className="text-yellow-500 w-4 h-4 fill-current" />
                    <span>{dest.rating}</span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-primary/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {dest.region}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-2xl font-extrabold text-gray-900 mb-3 flex items-center gap-2 group-hover:text-primary transition-colors line-clamp-1">
                    <MapPin className="text-primary w-5 h-5 shrink-0" />
                    {dest.name}
                  </h3>
                  <p className="text-gray-600 mb-6 flex-grow text-sm leading-relaxed">{dest.description}</p>
                  <button 
                    onClick={() => navigate('/tours')}
                    className="w-full py-4 bg-gray-50 border border-gray-200 text-gray-800 hover:bg-primary hover:border-primary hover:text-white rounded-2xl font-bold transition-all flex items-center justify-center gap-2 group/btn"
                  >
                    View Tours <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredDestinations.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-gray-500 font-medium">No destinations found for this region yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Destinations;
