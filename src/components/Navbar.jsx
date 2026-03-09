// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { language, toggleLanguage, dir } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { en: 'Home', ar: 'الرئيسية', path: '/' },
    { en: 'About', ar: 'من نحن', path: '/about' },
    { en: 'Services', ar: 'الخدمات', path: '/services' },
    { en: 'Projects', ar: 'مشاريعنا', path: '/projects' },
    { en: 'Contact', ar: 'اتصل بنا', path: '/contact' },
  ];

  const content = {
    ar: {
      company: 'مدماك الجنوب',
      subtitle: 'Medmak Aljanub'
    },
    en: {
      company: 'Medmak Aljanub',
      subtitle: 'مدماك الجنوب'
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container-custom">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <div className="w-12 h-12 bg-[#010001] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">MAC</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-[#010001]">{content[language].company}</span>
              <span className="text-xs text-gray-600">{content[language].subtitle}</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-colors hover:text-[#E30613] ${
                  location.pathname === item.path
                    ? 'text-[#E30613]'
                    : 'text-[#010001]'
                }`}
              >
                <span className="block text-right">{item[language]}</span>
                <span className="block text-xs text-gray-500">{item[language === 'ar' ? 'en' : 'ar']}</span>
              </Link>
            ))}
            
            {/* Language Switcher Button */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 bg-[#E30613] text-white rounded-lg hover:bg-opacity-90 transition-all duration-300"
            >
              <Globe size={18} />
              <span>{language === 'ar' ? 'English' : 'العربية'}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#010001]"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block px-4 py-2 hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                <span className="block text-right font-medium">{item[language]}</span>
                <span className="block text-xs text-gray-500">{item[language === 'ar' ? 'en' : 'ar']}</span>
              </Link>
            ))}
            
            {/* Mobile Language Switcher */}
            <button
              onClick={() => {
                toggleLanguage();
                setIsOpen(false);
              }}
              className="w-full text-right px-4 py-2 mt-2 bg-[#E30613] text-white font-medium"
            >
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <Globe size={18} />
                <span>{language === 'ar' ? 'Switch to English' : 'التبديل إلى العربية'}</span>
              </div>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;