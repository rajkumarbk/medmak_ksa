// src/components/Features.js
import React from 'react';
import { Building2, HardHat, TrendingUp, Shield } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Building2 size={40} className="text-[#E30613]" />,
      title: 'خبرة واسعة',
      description: 'نتمتع بخبرة واسعة في مجال المقاولات والإنشاءات',
    },
    {
      icon: <HardHat size={40} className="text-[#E30613]" />,
      title: 'فريق مؤهل',
      description: 'فريق عمل مدرب ومؤهل بأعلى المعايير المهنية',
    },
    {
      icon: <TrendingUp size={40} className="text-[#E30613]" />,
      title: 'جودة عالية',
      description: 'نلتزم بأعلى معايير الجودة في جميع مشاريعنا',
    },
    {
      icon: <Shield size={40} className="text-[#E30613]" />,
      title: 'موثوقية',
      description: 'نسجل حافل بالنجاحات وثقة عملائنا',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">لماذا تختار مدماك الجنوب؟</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            نقدم حلولاً مبتكرة ومستدامة في مجال المقاولات العامة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card p-6 text-center hover:translate-y-[-5px] transition-transform duration-300">
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-[#010001]">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;