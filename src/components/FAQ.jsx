// src/components/FAQ.js
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'ما هي خدمات مؤسسة مدماك الجنوب؟',
      answer: 'نقدم مجموعة شاملة من الخدمات تشمل الإنشاءات العامة، الصيانة والترميم، التشطيبات الداخلية والخارجية، مشاريع تسليم مفتاح، وصيانة الطرق.',
    },
    {
      question: 'هل تلتزمون بكود البناء السعودي؟',
      answer: 'نعم، نلتزم بشكل كامل بكود البناء السعودي وجميع المعايير واللوائح المحلية في جميع مشاريعنا.',
    },
    {
      question: 'ما هي مناطق عمل الشركة؟',
      answer: 'نعمل في جميع أنحاء المملكة العربية السعودية، مع التركيز على المشاريع الكبيرة والمعقدة.',
    },
    {
      question: 'كيف يمكنني التواصل معكم؟',
      answer: 'يمكنكم التواصل معنا عبر الهاتف: 0536526753 أو 0593902495، أو عبر البريد الإلكتروني: info@medmak.com',
    },
    {
      question: 'هل توفرون ضمان على أعمالكم؟',
      answer: 'نعم، نوفر ضمان على جميع أعمالنا وفقاً للمعايير المعتمدة في قطاع المقاولات.',
    },
  ];

  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">الأسئلة الشائعة</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            إجابات على أكثر الأسئلة شيوعاً حول خدماتنا
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full text-right bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-[#010001]">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-[#E30613]" />
                ) : (
                  <ChevronDown className="text-[#E30613]" />
                )}
              </button>
              {openIndex === index && (
                <div className="bg-gray-50 p-6 rounded-b-lg mt-1">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;