import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Compass, Globe2, Map, ShieldCheck, Star, ArrowRight, Play, MapPin, Users, Award, Trees, Waves, Mountain, Coffee, Quote, Send } from 'lucide-react';
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
    { name: 'Kyoto', country: 'Japan', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800', price: '$1,499' },
    { name: 'Amalfi Coast', country: 'Italy', image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=800', price: '$1,599' },
    { name: 'Swiss Alps', country: 'Switzerland', image: 'https://images.unsplash.com/photo-1531210483974-4f8c1f33fd35?auto=format&fit=crop&q=80&w=800', price: '$2,100' },
    { name: 'Marrakech', country: 'Morocco', image: 'https://images.unsplash.com/photo-1539020140153-e479b7c2b3df?auto=format&fit=crop&q=80&w=800', price: '$750' }
  ];

  const stats = [
    { icon: Users, value: '50k+', label: t('stats_happy_travelers') },
    { icon: Globe2, value: '120+', label: t('stats_destinations') },
    { icon: Award, value: '15+', label: t('stats_experience') },
    { icon: Star, value: '4.9', label: t('stats_rating') }
  ];

  const categories = [
    { icon: Mountain, name: 'Adventure', count: '12 Tours', image: 'https://images.unsplash.com/photo-1533240332313-0db49b459ad6?auto=format&fit=crop&q=80&w=800', size: 'col-span-2 row-span-2' },
    { icon: Waves, name: 'Beaches', count: '25 Tours', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800', size: 'col-span-1 row-span-1' },
    { icon: Trees, name: 'Nature', count: '18 Tours', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800', size: 'col-span-1 row-span-2' },
    { icon: Coffee, name: 'Culture', count: '30 Tours', image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80&w=800', size: 'col-span-1 row-span-1' }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Adventure Enthusiast',
      content: 'The attention to detail and personal touch provided by Wanderlust made our trip to Bali absolutely unforgettable.',
      avatar: 'https://i.pravatar.cc/150?u=sarah'
    },
    {
      name: 'Michael Chen',
      role: 'Photography Hobbyist',
      content: 'I have traveled with many agencies, but Wanderlust truly understands what a curious traveler is looking for.',
      avatar: 'https://i.pravatar.cc/150?u=michael'
    },
    {
      name: 'Emma Williams',
      role: 'Digital Nomad',
      content: 'Seamless booking, amazing local guides, and destinations that you won\'t find in standard guidebooks.',
      avatar: 'https://i.pravatar.cc/150?u=emma'
    }
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
            src="https://images.unsplash.com/photo-1506929113670-b42d07e69be0?auto=format&fit=crop&q=80&w=2000" 
            alt="Hero Background" 
            className="w-full h-full object-cover scale-110 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/80"></div>
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
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <span className="text-blue-600 font-black tracking-widest uppercase text-sm mb-4 block">The Wanderlust Edge</span>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight leading-tight">Crafting experiences that transcend travel</h2>
          </div>

          <div className="space-y-32">
            {features.map((feat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-24`}
              >
                {/* Image Side */}
                <div className="w-full lg:w-1/2 relative group">
                  <div className="absolute -inset-4 bg-blue-600/5 rounded-[4rem] scale-95 group-hover:scale-100 transition-transform duration-700"></div>
                  <div className="relative aspect-[4/3] rounded-[3.5rem] overflow-hidden shadow-2xl">
                    <img 
                      src={[
                        'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?auto=format&fit=crop&q=80&w=800',
                        'https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&q=80&w=800',
                        'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800',
                        'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=800'
                      ][i]} 
                      alt={feat.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                  </div>
                  {/* Small Floating Card */}
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className={`absolute ${i % 2 === 0 ? '-right-8' : '-left-8'} bottom-12 bg-white p-6 rounded-3xl shadow-2xl border border-gray-100 hidden md:block max-w-[200px]`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white mb-4">
                      <feat.icon size={20} />
                    </div>
                    <div className="font-bold text-gray-900 text-sm">{feat.title}</div>
                  </motion.div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2 space-y-8">
                  <div className="inline-flex items-center gap-4 text-blue-600">
                    <div className="w-12 h-px bg-blue-600"></div>
                    <span className="font-black tracking-widest uppercase text-xs">Excellence 0{i + 1}</span>
                  </div>
                  <h3 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                    {feat.title}
                  </h3>
                  <p className="text-gray-500 text-xl font-medium leading-relaxed">
                    {feat.desc}
                  </p>
                  <ul className="space-y-4">
                    {['24/7 dedicated support', 'Expert local knowledge', 'Tailored to your needs'].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-700 font-bold">
                        <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4">
                    <button className="flex items-center gap-3 text-blue-600 font-black text-lg group">
                      <span>Explore service</span>
                      <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 bg-white relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative group"
              >
                <div className="flex items-center gap-6">
                  <div className="flex-shrink-0 w-20 h-20 rounded-[2rem] bg-gray-50 border border-gray-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-xl shadow-transparent group-hover:shadow-blue-600/20">
                    <stat.icon size={32} strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-5xl font-black text-gray-900 tracking-tighter mb-1 tabular-nums">
                      {stat.value}
                    </div>
                    <div className="text-gray-500 font-bold uppercase tracking-[0.2em] text-[10px]">
                      {stat.label}
                    </div>
                  </div>
                </div>
                {i < stats.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-px h-12 bg-gray-100 -translate-y-1/2"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {popularDestinations.map((dest, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -15 }}
                className="group relative h-[450px] rounded-[3rem] overflow-hidden shadow-2xl"
              >
                <img src={dest.image} alt={dest.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                
                <div className="absolute top-6 right-6">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-white font-bold text-sm">
                    {dest.price}
                  </div>
                </div>

                <div className="absolute bottom-10 left-10 right-10">
                  <div className="flex items-center gap-2 mb-3 text-blue-400 font-bold">
                    <MapPin size={16} />
                    <span className="text-xs uppercase tracking-[0.2em]">{dest.country}</span>
                  </div>
                  <h3 className="text-3xl font-black text-white mb-6 tracking-tight">{dest.name}</h3>
                  <div className="flex items-center justify-between">
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold text-sm transition-all hover:bg-blue-700 shadow-xl shadow-blue-600/30">
                      View Details
                    </button>
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-blue-600 transition-all">
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Categories */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="text-blue-600 font-black tracking-widest uppercase text-sm">{t('travel_style')}</span>
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 mt-4 tracking-tight leading-tight">Find your perfect escape</h2>
            </div>
            <p className="text-gray-500 font-medium max-w-sm mb-2">Whether you're seeking adrenaline or relaxation, we have the perfect itinerary tailored for you.</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 grid-rows-2 gap-6 h-[600px]">
            {categories.map((cat, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className={`relative rounded-[2.5rem] overflow-hidden group cursor-pointer ${cat.size}`}
              >
                <img src={cat.image} alt={cat.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white">
                          <cat.icon size={20} />
                        </div>
                        <span className="text-white/80 font-bold uppercase tracking-widest text-[10px]">{cat.count}</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-black text-white">{cat.name}</h3>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all shadow-xl shadow-blue-600/40">
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/3">
              <span className="text-blue-500 font-black tracking-widest uppercase text-sm">Testimonials</span>
              <h2 className="text-4xl md:text-6xl font-black mt-4 leading-tight">{t('testimonials_title')}</h2>
              <p className="text-gray-400 mt-8 text-lg">Real stories from real travelers who chose Wanderlust for their journeys.</p>
              <div className="mt-12 flex gap-4">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-gray-900 transition-colors cursor-pointer">
                  <ArrowRight size={20} className="rotate-180" />
                </div>
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-gray-900 transition-colors cursor-pointer">
                  <ArrowRight size={20} />
                </div>
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <div className="flex gap-8 overflow-x-auto pb-8 scrollbar-hide">
                {testimonials.map((t, i) => (
                  <motion.div 
                    key={i}
                    className="min-w-[350px] md:min-w-[450px] bg-white/5 backdrop-blur-lg border border-white/10 p-10 rounded-[3rem]"
                  >
                    <Quote className="text-blue-500 mb-8" size={40} />
                    <p className="text-xl md:text-2xl font-medium leading-relaxed mb-10 italic">"{t.content}"</p>
                    <div className="flex items-center gap-4">
                      <img src={t.avatar} alt={t.name} className="w-16 h-16 rounded-2xl object-cover" />
                      <div>
                        <h4 className="font-bold text-xl">{t.name}</h4>
                        <p className="text-blue-400 text-sm uppercase tracking-widest font-bold">{t.role}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[3.5rem] bg-blue-600 p-12 md:p-20 overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full -mr-64 -mt-64 blur-3xl"></div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">{t('newsletter_title')}</h2>
                <p className="text-blue-100 text-xl font-medium">{t('newsletter_subtitle')}</p>
              </div>
              <div>
                <form className="flex flex-col sm:flex-row gap-4">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="flex-1 px-8 py-5 rounded-2xl bg-white text-gray-900 font-bold focus:outline-none shadow-xl"
                  />
                  <button className="bg-gray-900 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-gray-800 transition-all flex items-center justify-center gap-3">
                    {t('subscribe')} <Send size={20} />
                  </button>
                </form>
                <p className="text-blue-200 text-xs mt-6 font-medium">We promise not to spam you. Unsubscribe at any time.</p>
              </div>
            </div>
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
