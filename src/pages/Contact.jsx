// src/pages/Contact.js
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-24">
      <section className="relative py-20 bg-[#010001] text-white">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">اتصل بنا</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            تواصل معنا لأي استفسار أو لطلب عرض سعر
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-[#010001]">معلومات الاتصال</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="w-12 h-12 bg-[#E30613] bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-[#E30613]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">الهاتف</h3>
                    <p className="text-gray-600">0536526753</p>
                    <p className="text-gray-600">0593902495</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="w-12 h-12 bg-[#E30613] bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-[#E30613]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">البريد الإلكتروني</h3>
                    <p className="text-gray-600">info@medmak.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="w-12 h-12 bg-[#E30613] bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-[#E30613]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">الموقع</h3>
                    <p className="text-gray-600">المملكة العربية السعودية</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14736.735063785503!2d46.6752957!3d24.774809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQ2JzI5LjMiTiA0NsKwNDAnMzEuMSJF!5e0!3m2!1sen!2ssa!4v1620000000000!5m2!1sen!2ssa"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  className="rounded-lg shadow-lg"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-[#010001]">أرسل لنا رسالة</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-right mb-2 font-medium text-gray-700">
                    الاسم
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E30613] focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-right mb-2 font-medium text-gray-700">
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E30613] focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-right mb-2 font-medium text-gray-700">
                    رقم الجوال
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E30613] focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-right mb-2 font-medium text-gray-700">
                    الرسالة
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E30613] focus:border-transparent"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#010001] text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors flex items-center justify-center space-x-2 rtl:space-x-reverse"
                >
                  <span>إرسال الرسالة</span>
                  <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;