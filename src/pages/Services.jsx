// src/pages/Services.js
import React from 'react';
import { CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'الانشاء والبناء',
      items: [
        'تنفيذ الهيكل الإنشائي وصب الخرسانة',
        'تنفيذ أعمال العزل المائي والحراري',
        'تأسيس الكهرباء والسباكة',
        'بناء الأسوار والملاحق',
        'الالتزام بكود البناء السعودي',
      ],
    },
    {
      title: 'الصيانة والترميم',
      items: [
        'ترميم وإعادة تأهيل المباني',
        'أعمال الأرضيات والدهانات',
        'صيانة الأعمال الكهربائية والميكانيكية',
        'معالجة التشققات والتلفيات الإنشائية',
        'حلول صيانة وقائية وعلاجية',
      ],
    },
    {
      title: 'التشطيبات الداخلية والخارجية',
      items: [
        'أعمال الدهانات الداخلية والخارجية',
        'تنفيذ الجبس بورد والأسقف المستعارة',
        'تركيب الأرضيات بمختلف أنواعها',
        'الأعمال الخشبية والزجاجية',
        'تنفيذ الديكورات والتأثيث',
      ],
    },
    {
      title: 'تسليم مفتاح حسب الطلب',
      items: [
        'إعداد المخططات والتصاميم الهندسية',
        'استخراج التصاريح اللازمة',
        'تنفيذ كامل أعمال البناء والتشطيب',
        'الإشراف وإدارة المشروع',
        'تسليم نهائي جاهز للاستخدام',
      ],
    },
    {
      title: 'صيانة الطرق',
      items: [
        'أعمال السفلتة وإعادة التأهيل',
        'معالجة الحفر والتشققات',
        'إعادة تخطيط الطرق',
        'صيانة الأرصفة والبردورات',
        'تحسين كفاءة البنية التحتية',
      ],
    },
    {
      title: 'استشارات هندسية',
      items: [
        'دراسات الجدوى للمشاريع',
        'التصاميم الهندسية',
        'الإشراف على التنفيذ',
        'إدارة المشاريع',
        'الاستشارات الفنية',
      ],
    },
  ];

  return (
    <div className="pt-24">
      <section className="relative py-20 bg-[#010001] text-white">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">خدماتنا</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            نقدم مجموعة شاملة من الخدمات في مجال المقاولات والإنشاءات
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card hover:translate-y-[-5px] transition-transform duration-300">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-[#010001] border-b pb-2">
                    {service.title}
                  </h3>
                  <ul className="space-y-3">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-3 rtl:space-x-reverse">
                        <CheckCircle className="text-[#E30613] flex-shrink-0 mt-1" size={18} />
                        <span className="text-gray-600 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;