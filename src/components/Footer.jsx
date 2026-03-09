// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { language } = useLanguage();

  const content = {
    ar: {
      company: 'مدماك الجنوب',
      subtitle: 'Medmak Aljanub',
      slogan: 'مدماك الجنوب أمانة في التنفيذ... ودقة في الإنجاز',
      quickLinks: 'روابط سريعة',
      home: 'الرئيسية',
      about: 'من نحن',
      services: 'الخدمات',
      projects: 'مشاريعنا',
      contact: 'اتصل بنا',
      contactInfo: 'معلومات الاتصال',
      followUs: 'تواصل معنا',
      copyright: 'جميع الحقوق محفوظة',
      integrity: 'Integrity in execution... and precision in completion'
    },
    en: {
      company: 'Medmak Aljanub',
      subtitle: 'مدماك الجنوب',
      slogan: 'Medmak Aljanub - Integrity in execution... and precision in completion',
      quickLinks: 'Quick Links',
      home: 'Home',
      about: 'About',
      services: 'Services',
      projects: 'Projects',
      contact: 'Contact',
      contactInfo: 'Contact Info',
      followUs: 'Follow Us',
      copyright: 'All rights reserved',
      integrity: 'أمانة في التنفيذ... ودقة في الإنجاز'
    }
  };

  return (
    <footer className="bg-[#010001] text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <span className="text-[#010001] font-bold text-xl">MAC</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">{content[language].company}</h3>
                <p className="text-sm text-gray-400">{content[language].subtitle}</p>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              {content[language].slogan}
            </p>
            <p className="text-sm text-gray-300">
              {content[language].integrity}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">{content[language].quickLinks}</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-[#E30613] transition-colors">{content[language].home}</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-[#E30613] transition-colors">{content[language].about}</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-[#E30613] transition-colors">{content[language].services}</Link></li>
              <li><Link to="/projects" className="text-gray-300 hover:text-[#E30613] transition-colors">{content[language].projects}</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-[#E30613] transition-colors">{content[language].contact}</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">{content[language].contactInfo}</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                <Phone size={18} className="text-[#E30613]" />
                <span className="text-gray-300">0536526753</span>
              </li>
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                <Phone size={18} className="text-[#E30613]" />
                <span className="text-gray-300">0593902495</span>
              </li>
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                <Mail size={18} className="text-[#E30613]" />
                <span className="text-gray-300">info@medmak.com</span>
              </li>
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                <MapPin size={18} className="text-[#E30613]" />
                <span className="text-gray-300">المملكة العربية السعودية</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-bold text-lg mb-4">{content[language].followUs}</h4>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#E30613] transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#E30613] transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#E30613] transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#E30613] transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
            <p className="mt-4 text-gray-300 text-sm">@Medmakaljanub</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} {content[language].company} {content[language].copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;