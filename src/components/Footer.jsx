import React from 'react';
import { Link } from 'react-router-dom';
import { Globe2, Mail, Phone, MapPin, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-blue-600 p-2 rounded-xl group-hover:rotate-12 transition-transform duration-300">
                <Globe2 size={24} />
              </div>
              <span className="font-black text-2xl tracking-tighter">
                WANDER<span className="text-blue-600">LUST</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Discover the world's most breathtaking destinations with Wanderlust. We create unforgettable experiences tailored just for you.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-8 uppercase tracking-widest text-blue-500">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'Destinations', 'Tours', 'About', 'Contact'].map((link) => (
                <li key={link}>
                  <Link to={link === 'Home' ? '/' : `/${link.toLowerCase().replace(' ', '')}`} className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-all" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h4 className="font-bold text-lg mb-8 uppercase tracking-widest text-blue-500">Top Destinations</h4>
            <ul className="space-y-4">
              {['Santorini, Greece', 'Bali, Indonesia', 'Kyoto, Japan', 'Paris, France', 'Rome, Italy'].map((dest) => (
                <li key={dest}>
                  <Link to="/destinations" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-all" />
                    {dest}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-8 uppercase tracking-widest text-blue-500">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-gray-400">
                <MapPin className="text-blue-600 shrink-0" size={20} />
                <span className="text-sm">123 Adventure Way, Travel City, TC 12345</span>
              </li>
              <li className="flex items-center gap-4 text-gray-400">
                <Phone className="text-blue-600 shrink-0" size={20} />
                <span className="text-sm">+1 (234) 567-890</span>
              </li>
              <li className="flex items-center gap-4 text-gray-400">
                <Mail className="text-blue-600 shrink-0" size={20} />
                <span className="text-sm">info@wanderlust.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-white/5 pt-12 mb-12">
          <div className="bg-blue-600 rounded-3xl p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="text-3xl font-black mb-2">Join Our Newsletter</h3>
              <p className="text-blue-100">Get exclusive travel deals and inspiration sent to your inbox.</p>
            </div>
            <form className="w-full lg:w-auto flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white/20 border border-white/30 rounded-2xl px-6 py-4 outline-none focus:bg-white focus:text-gray-900 transition-all placeholder:text-blue-100 w-full sm:w-80"
              />
              <button className="bg-white text-blue-600 font-bold px-8 py-4 rounded-2xl hover:bg-gray-100 transition-all whitespace-nowrap">
                Subscribe Now
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/5 pt-8 text-sm text-gray-500">
          <p>© {currentYear} Wanderlust Travel Agency. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
