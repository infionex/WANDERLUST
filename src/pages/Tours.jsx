import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Users, Shield, CheckCircle2, Star, MapPin, ChevronRight, Filter, X } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Tours = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedTour, setSelectedTour] = useState(null);
  const [modalType, setModalType] = useState(''); // 'book' or 'itinerary'
  
  const tours = [
    {
      id: 1,
      title: "Mediterranean Dream",
      location: "Greece, Italy, Spain",
      duration: "14 Days",
      groupSize: "10-15 People",
      price: "$2,899",
      rating: 4.9,
      reviews: 124,
      image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=1200",
      highlights: ["Athens Acropolis Tour", "Santorini Sunset Cruise", "Rome Colosseum Skip-the-line", "Barcelona Sagrada Familia"],
      category: "Europe"
    },
    {
      id: 2,
      title: "Asian Wonders",
      location: "Japan, South Korea",
      duration: "10 Days",
      groupSize: "12-20 People",
      price: "$2,299",
      rating: 4.8,
      reviews: 98,
      image: "https://images.unsplash.com/photo-1542931287-023b922fa89b?auto=format&fit=crop&q=80&w=1200",
      highlights: ["Tokyo City Tour", "Mt. Fuji Excursion", "Kyoto Temples", "Seoul Gyeongbokgung Palace"],
      category: "Asia"
    },
    {
      id: 3,
      title: "African Safari Adventure",
      location: "Kenya, Tanzania",
      duration: "8 Days",
      groupSize: "6-8 People",
      price: "$3,499",
      rating: 5.0,
      reviews: 56,
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=1200",
      highlights: ["Masai Mara Game Drive", "Serengeti Migration", "Ngorongoro Crater", "Luxury Lodge Stays"],
      category: "Africa"
    },
    {
      id: 4,
      title: "Tropical Paradise",
      location: "Maldives, Bora Bora",
      duration: "7 Days",
      groupSize: "2-4 People",
      price: "$4,199",
      rating: 4.9,
      reviews: 210,
      image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80&w=1200",
      highlights: ["Overwater Villa Stay", "Private Scuba Diving", "Sunset Dinner on Beach", "Spa & Wellness Retreat"],
      category: "Islands"
    }
  ];

  const categories = ['All', 'Europe', 'Asia', 'Africa', 'Islands'];

  const filteredTours = activeTab === 'All' ? tours : tours.filter(t => t.category === activeTab);

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      <Helmet>
        <title>Our Tours | Wanderlust Travel Agency</title>
        <meta name="description" content="Explore our curated tour packages. We offer handcrafted itineraries designed for the ultimate travel experience." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=2000" 
            alt="Mountains" 
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white font-medium mb-6"
          >
            <Star className="text-yellow-400 w-4 h-4 fill-current" />
            <span>Premium Selection</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg"
          >
            Curated Tour Packages
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-200 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Handcrafted itineraries designed for the ultimate travel experience. Everything from accommodation to expert guides is taken care of.
          </motion.p>
        </div>
      </section>

      <div className="container mx-auto px-4 -mt-12 relative z-20">
        
        {/* Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 mb-16"
        >
          <div className="flex items-center gap-3 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
            <span className="text-gray-400 font-medium flex items-center gap-2 pl-2 pr-4 border-r hidden md:flex">
              <Filter size={18} /> Filters
            </span>
            {categories.map((cat) => (
              <button 
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`whitespace-nowrap px-6 py-2.5 rounded-xl font-semibold transition-all ${activeTab === cat ? 'bg-primary text-white shadow-md shadow-primary/30' : 'bg-gray-50 text-gray-600 hover:bg-gray-100'}`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="text-gray-500 font-medium pr-4 w-full md:w-auto text-right">
            Showing <span className="text-primary font-bold">{filteredTours.length}</span> tours
          </div>
        </motion.div>

        {/* Tour List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredTours.map((tour, index) => (
              <motion.div 
                key={tour.id}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 group hover:-translate-y-2"
              >
                {/* Image Section */}
                <div className="relative overflow-hidden h-64">
                  <img 
                    src={tour.image} 
                    alt={tour.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent"></div>
                  
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-primary px-3 py-1 rounded-full font-bold shadow-lg text-xs flex items-center gap-1.5">
                    <Star className="text-yellow-500 w-3 h-3 fill-current" />
                    {tour.rating} <span className="text-gray-500 font-normal">({tour.reviews})</span>
                  </div>
                  
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                    <div className="text-white">
                      <span className="block text-xs text-gray-300 font-medium mb-0.5">Starting from</span>
                      <span className="text-2xl font-extrabold">{tour.price}</span>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-4">
                    <h2 className="text-xl font-extrabold text-gray-900 mb-1.5 group-hover:text-primary transition-colors line-clamp-1">{tour.title}</h2>
                    <p className="text-gray-500 text-sm font-medium flex items-center gap-1.5">
                      <MapPin size={14} className="text-primary" />
                      {tour.location}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-5 bg-blue-50/50 p-4 rounded-2xl border border-blue-50">
                    <div className="flex items-center gap-2">
                      <div className="bg-white p-1.5 rounded-full text-primary shadow-sm"><Clock size={14}/></div>
                      <div className="flex flex-col">
                        <span className="text-gray-400 text-[10px] font-bold uppercase tracking-wider">Duration</span>
                        <span className="font-bold text-gray-800 text-sm">{tour.duration}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="bg-white p-1.5 rounded-full text-primary shadow-sm"><Users size={14}/></div>
                      <div className="flex flex-col">
                        <span className="text-gray-400 text-[10px] font-bold uppercase tracking-wider">Group Size</span>
                        <span className="font-bold text-gray-800 text-sm">{tour.groupSize}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6 flex-grow">
                    <h4 className="font-bold text-gray-900 mb-3 text-sm">Experience Highlights:</h4>
                    <ul className="flex flex-col gap-2">
                      {tour.highlights.slice(0, 3).map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-600 text-sm font-medium">
                          <div className="bg-green-100 p-0.5 rounded-full mt-0.5">
                            <CheckCircle2 className="text-green-600 w-3 h-3 shrink-0" />
                          </div>
                          <span className="line-clamp-1">{highlight}</span>
                        </li>
                      ))}
                      {tour.highlights.length > 3 && (
                        <li className="text-xs text-primary font-bold pl-6">+ {tour.highlights.length - 3} more</li>
                      )}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 mt-4 border-t border-gray-100 pt-8">
                    <button 
                      onClick={() => { setSelectedTour(tour); setModalType('book'); }}
                      className="flex-1 bg-primary hover:bg-blue-700 text-white py-4 rounded-2xl font-bold transition-all shadow-md shadow-primary/20 flex items-center justify-center gap-2 text-sm"
                    >
                      Book This Tour <ChevronRight size={16} />
                    </button>
                    <button 
                      onClick={() => { setSelectedTour(tour); setModalType('itinerary'); }}
                      className="flex-1 bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-800 py-3 rounded-xl font-bold transition-colors text-sm"
                    >
                      View Itinerary
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {selectedTour && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-white w-full max-w-lg rounded-[2rem] overflow-hidden shadow-2xl relative"
            >
              <button 
                onClick={() => setSelectedTour(null)}
                className="absolute top-4 right-4 bg-white/50 hover:bg-white text-gray-800 p-2 rounded-full backdrop-blur-md transition-colors z-10"
              >
                <X size={20} />
              </button>
              
              <div className="h-40 relative">
                <img src={selectedTour.image} alt={selectedTour.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white">{selectedTour.title}</h3>
              </div>

              <div className="p-6 md:p-8">
                {modalType === 'book' ? (
                  <>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Ready to book?</h4>
                    <p className="text-gray-600 mb-6">You're about to begin the booking process for the <strong>{selectedTour.title}</strong> package.</p>
                    
                    <div className="bg-gray-50 p-4 rounded-xl mb-6 flex justify-between items-center border border-gray-100">
                      <span className="text-gray-600 font-medium">Total Price:</span>
                      <span className="text-2xl font-black text-primary">{selectedTour.price}</span>
                    </div>

                    <form onSubmit={(e) => {
                      e.preventDefault();
                      alert(`Successfully booked ${selectedTour.title}! We will contact you shortly.`);
                      setSelectedTour(null);
                    }} className="flex flex-col gap-4">
                      <input type="text" placeholder="Full Name" required className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary" />
                      <input type="email" placeholder="Email Address" required className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary" />
                      <button type="submit" className="bg-primary hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-colors mt-2">
                        Confirm Booking
                      </button>
                    </form>
                  </>
                ) : (
                  <>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Tour Itinerary</h4>
                    <p className="text-gray-600 mb-6">A detailed day-by-day itinerary for {selectedTour.title} will be sent to your email.</p>
                    
                    <form onSubmit={(e) => {
                      e.preventDefault();
                      alert(`Itinerary for ${selectedTour.title} sent to your email!`);
                      setSelectedTour(null);
                    }} className="flex flex-col gap-4">
                      <input type="email" placeholder="Enter your email to receive PDF" required className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary" />
                      <button type="submit" className="bg-gray-900 hover:bg-black text-white font-bold py-4 rounded-xl transition-colors mt-2 flex justify-center items-center gap-2">
                        Send Itinerary
                      </button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Tours;
