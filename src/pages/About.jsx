// src/pages/About.js
import React from 'react';

const About = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20 bg-[#010001] text-white">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">من نحن</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            مؤسسة مدماك الجنوب للمقاولات، إحدى المؤسسات الرائدة في مجال المقاولات العامة في المملكة العربية السعودية
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#010001]">رؤية واضحة.. تصميم مبتكر.. تنفيذ بدقة</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                تأسست الشركة على أسس قوية من الاحترافية والجودة والتميز في الأداء، مما جعلها تحظى بسمعة طيبة وثقة عملائها في السوق المحلية. نتخصص في تنفيذ مشاريع البنية التحتية والعمارة بأعلى معايير الجودة والأمان.
              </p>
              <p className="text-gray-600 leading-relaxed">
                نتمتع بفريق عمل مؤهل ومدرب يتمتع بخبرة واسعة في مجال المقاولات، كما نقدم خدمات شاملة تشمل الإنشاءات العامة والصيانة والترميم والتجديد، بالإضافة إلى خدمات صيانة الطرق.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Construction"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#E30613] rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card p-8">
              <h3 className="text-2xl font-bold mb-4 text-[#010001]">رؤيتنا</h3>
              <p className="text-gray-600 leading-relaxed">
                نتطلع إلى تحقيق مكانة رائدة محليًا وعالميًا في مجال المقاولات العامة، من خلال تقديم حلول مبتكرة ومستدامة تساهم في تطوير ورفع مستوى البنية التحتية والعمران في البلاد، بما يتوافق مع رؤية المملكة العربية السعودية 2030.
              </p>
            </div>
            <div className="card p-8">
              <h3 className="text-2xl font-bold mb-4 text-[#010001]">رسالتنا</h3>
              <p className="text-gray-600 leading-relaxed">
                نسعى إلى تحقيق رضا العملاء وكسب رضاهم وثقتهم وتحقيق أهدافهم وتلبية تطلعاتهم، من خلال الاستثمار في تطوير وتدريب الكفاءات البشرية لدينا لتعزيز قدراتنا التنافسية وتحسين أداء العمل لتقديم قيمة فعالة لعملائنا وشركائنا.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;