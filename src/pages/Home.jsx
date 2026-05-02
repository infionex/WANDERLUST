import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Compass, Globe2, Map, ShieldCheck, Star, ArrowRight, Play, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  const { t } = useTranslation();

  const features = [
    { icon: Globe2, title: 'World Class Guides', desc: 'Expert local guides who know every hidden gem and secret path.' },
    { icon: Compass, title: 'Tailored Experiences', desc: 'Custom itineraries designed specifically for your travel style.' },
    { icon: ShieldCheck, title: 'Secure & Safe', desc: 'Full travel insurance and 24/7 support throughout your journey.' },
    { icon: Map, title: 'Unique Destinations', desc: 'Access to exclusive locations off the beaten tourist track.' }
  ];

  const popularDestinations = [
    { name: 'Santorini', country: 'Greece', image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&q=80&w=800', price: '$1,299' },
    { name: 'Bali', country: 'Indonesia', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800', price: '$899' },
    { name: 'Kyoto', country: 'Japan', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800', price: '$1,499' }
  ];

  return (
    <div className="overflow-x-hidden">
      <Helmet>
        <title>Discover Your Next Adventure | Wanderlust Travel Agency</title>
        <meta name="description" content="Explore the world's most breathtaking destinations with Wanderlust. We offer curated travel packages for unforgettable experiences." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=2000" 
            alt="Hero Background" 
            className="w-full h-full object-cover scale-110 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/20 backdrop-blur-md border border-white/30 text-white font-bold mb-8"
          >
            <Compass className="animate-spin-slow" size={18} />
            <span className="text-sm tracking-widest uppercase">{t('why_choose_us')}</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none"
          >
            {t('hero_title')}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-200 mb-12 max-w-2xl mx-auto font-medium leading-relaxed"
          >
            {t('hero_subtitle')}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link to="/destinations" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl font-black text-lg transition-all shadow-2xl shadow-blue-600/40 flex items-center gap-3 group">
              {t('explore_now')} <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <button className="flex items-center gap-4 text-white group">
              <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover:bg-blue-600 transition-colors">
                <Play className="fill-white" size={24} />
              </div>
              <span className="font-bold tracking-wider uppercase text-sm">Watch Story</span>
            </button>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4 text-white/50 text-xs font-bold tracking-widest uppercase">
          <span>Scroll Down</span>
          <div className="w-px h-10 bg-white/30"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feat, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-8 rounded-[2rem] bg-gray-50 border border-gray-100 transition-all hover:bg-white hover:shadow-2xl hover:shadow-blue-600/10"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center mb-6 shadow-lg shadow-blue-600/20">
                  <feat.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feat.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm font-medium">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="text-blue-600 font-black tracking-widest uppercase text-sm">{t('popular_destinations')}</span>
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 mt-4 tracking-tight leading-tight">Handpicked for the curious traveler</h2>
            </div>
            <Link to="/destinations" className="bg-white text-gray-900 px-8 py-4 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all flex items-center gap-2">
              View All <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularDestinations.map((dest, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -15 }}
                className="group relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-xl"
              >
                <img src={dest.image} alt={dest.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="flex items-center gap-2 mb-2 text-blue-400 font-bold">
                    <MapPin size={16} />
                    <span className="text-sm uppercase tracking-widest">{dest.country}</span>
                  </div>
                  <h3 className="text-3xl font-black text-white mb-4">{dest.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-white/80 font-bold">Starting from <span className="text-white text-xl">{dest.price}</span></span>
                    <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all scale-50 group-hover:scale-100">
                      <ArrowRight className="text-white" size={20} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[3rem] bg-gray-900 p-12 md:p-24 overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -mr-64 -mt-64 animate-pulse"></div>
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-tight">Ready to start your next chapter?</h2>
              <p className="text-gray-400 text-lg md:text-xl mb-12 font-medium">Join 50,000+ travelers who have explored the world with Wanderlust. Your dream vacation is just a few clicks away.</p>
              <div className="flex flex-wrap gap-6">
                <Link to="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl font-black text-lg transition-all shadow-xl shadow-blue-600/40">
                  Book A Consult
                </Link>
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map((n) => (
                    <img key={n} src={`https://i.pravatar.cc/100?img=${n + 10}`} alt="User" className="w-14 h-14 rounded-full border-4 border-gray-900 object-cover" />
                  ))}
                  <div className="w-14 h-14 rounded-full bg-blue-600 border-4 border-gray-900 flex items-center justify-center text-white font-bold text-sm">
                    +50k
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
