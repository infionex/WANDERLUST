import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe2, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const navLinks = [
  { label: 'home', href: '/' },
  { label: 'destinations', href: '/destinations' },
  { label: 'tours', href: '/tours' },
  { label: 'about', href: '/about' },
  { label: 'contact', href: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Bar - Only visible when not scrolled and on Home */}
      <div className={`bg-blue-900 text-white py-2 px-4 transition-all duration-300 ${
        isScrolled ? 'h-0 opacity-0 overflow-hidden' : 'h-auto opacity-100'
      } hidden md:block`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
          <div className="flex items-center gap-6">
            <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-blue-300 transition-colors">
              <Phone size={12} /> +1 (234) 567-890
            </a>
            <a href="mailto:info@wanderlust.com" className="flex items-center gap-2 hover:text-blue-300 transition-colors">
              <Mail size={12} /> info@wanderlust.com
            </a>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4 border-r border-blue-800 pr-6">
              <a href="#" className="hover:text-blue-300 transition-colors"><Instagram size={14} /></a>
              <a href="#" className="hover:text-blue-300 transition-colors"><Facebook size={14} /></a>
              <a href="#" className="hover:text-blue-300 transition-colors"><Twitter size={14} /></a>
            </div>
            <button onClick={toggleLanguage} className="hover:text-blue-300 transition-colors">
              {i18n.language === 'en' ? 'Español' : 'English'}
            </button>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className={`transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-lg shadow-lg py-3' 
          : isHome ? 'bg-transparent py-6' : 'bg-white shadow-sm py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-blue-600 p-2 rounded-xl group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-blue-600/20">
                <Globe2 className="text-white" size={20} />
              </div>
              <span className={`font-black text-2xl tracking-tighter transition-colors ${
                isScrolled || !isHome ? 'text-gray-900' : 'text-white'
              }`}>
                WANDER<span className="text-blue-600">LUST</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className={`hidden md:flex items-center gap-1 rounded-2xl p-1 border transition-all ${
              isScrolled || !isHome 
                ? 'bg-gray-100 border-gray-200' 
                : 'bg-white/10 backdrop-blur-md border-white/20'
            }`}>
              {navLinks.map(link => (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`px-5 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-300 ${
                    location.pathname === link.href
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                      : `hover:bg-black/5 ${isScrolled || !isHome ? 'text-gray-600 hover:text-gray-900' : 'text-white hover:text-white'}`
                  }`}
                >
                  {t(link.label)}
                </Link>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-4">
              <button onClick={toggleLanguage} className={`hidden md:block text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg border transition-all ${
                isScrolled || !isHome ? 'border-gray-300 text-gray-700 hover:bg-gray-50' : 'border-white/30 text-white hover:bg-white/10'
              }`}>
                {i18n.language === 'en' ? 'EN' : 'ES'}
              </button>
              
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className={`md:hidden p-2 rounded-xl transition-all ${
                  isScrolled || !isHome ? 'bg-gray-100 text-gray-900' : 'bg-white/20 text-white backdrop-blur-md'
                }`}
              >
                {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-500 overflow-hidden ${isMobileOpen ? 'max-h-screen bg-white border-t border-gray-100 shadow-2xl' : 'max-h-0'}`}>
          <div className="px-4 py-8 space-y-2">
            {navLinks.map(link => (
              <Link
                key={link.label}
                to={link.href}
                className={`block px-6 py-4 rounded-2xl text-lg font-bold transition-all ${
                  location.pathname === link.href
                    ? 'bg-blue-600 text-white shadow-xl shadow-blue-600/20'
                    : 'text-gray-800 hover:bg-gray-50'
                }`}
                onClick={() => setIsMobileOpen(false)}
              >
                {t(link.label)}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}


