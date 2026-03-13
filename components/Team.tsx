'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const teamMembers = [
  "Abdı Dilbər.jpg",
  "Adil Alışlı.jpg",
  "Amin Həsənov.jpg",
  "Atəş Məcnunov.jpg",
  "Aydan Şəkixanlı.jpg",
  "Aytən Həşimova.jpg",
  "Azadə Kiçibəyova.jpg",
  "Azadə Əsgərli.jpg",
  "Bahar Məmmədova.jpg",
  "Cavid Cəfərli.jpg",
  "Cavid Cəlilli.jpg",
  "Cəvahir Səfərova.jpg",
  "Elvira Məmmədova.jpg",
  "Emil Aydınov.jpg",
  "Fidan Khanim Ahmedzade.jpg",
  "Gülnar Əhmədova.jpg",
  "Könül Qəniyeva.jpg",
  "Maarifə Gülməmmədova.jpg",
  "Mehriban Fərzeliyeva.jpg",
  "Mehriban Hüseynli.jpg",
  "Məhəmmədəli Məmmədov.jpg",
  "Məmməd Mirzəyev.jpg",
  "Nigar Abbasova.jpg",
  "Nigar Hüseyni.jpg",
  "Nihad Zeynallı.jpg",
  "Nişat Zülfüqarlı.webp",
  "Nuranə Məmmədzadə.webp",
  "Nərgiz Hüseynova.jpg",
  "Nərgiz Rəhimova.jpg",
  "Orxan Əlizadə.webp",
  "Pərvanə Əliyeva.webp",
  "Qəmzə Yəhyayeva.webp",
  "Rəfiqə Abdullazadə.webp",
  "Rəvan Quliyev.webp",
  "Rəşad Kazımzadə.webp",
  "Samid Mirsaabov.webp",
  "Seyid Rəhimov.webp",
  "Seymur Əliyev.webp",
  "Sitara Orucova.jpg",
  "Səriyyə Ağalarova.webp",
  "Tamerlan Aslanlı.webp",
  "Turanə Ağayeva.webp",
  "Türkan İsmayılova.webp",
  "Xamis Abıyev.png",
  "Xumar Şirəliyeva.webp",
  "Xuraman Sultanova.webp",
  "Çingiz Çingizzadə.jpg",
  "İlkanə Qasımzadə.jpg",
  "İlkin Məhərrəmov.jpg",
  "İnci Abdullayeva.jpg",
  "Şamama.webp",
  "Şəhriyar Kərimli.webp",
  "Əkbər Səmədzadə.jpg"
].map(filename => ({
  
  name: filename.replace(/\.(jpg|png|webp|jpeg)$/i, ''),
  image: `/images/komanda/${filename}`
}));


export const Team = () => {
  const t = useTranslations('team');

  return (
    <section id="komanda" className="section-padding bg-section-alt-bg bg-background/30 dark:bg-background/80 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="section-badge mb-4 inline-block">{t('sectionTitle')}</span>
          <h2 className="section-title text-text-primary dark:text-white mb-6">
            {t('title')}
          </h2>
          <p className="section-subtitle text-text-secondary dark:text-gray-300">
            {t('subtitle')}
          </p>
        </div>

        <div className="mt-12 px-2 md:px-8">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            loop={true}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
              },
            }}
            className="team-swiper pb-16!"
          >
            {teamMembers.map((member, index) => (
              <SwiperSlide key={index} className="h-auto py-2">
                <div className="glass-card h-full flex flex-col items-center p-6 text-center group min-h-[350px]">
                  <div className="relative w-40 h-40 mb-6 rounded-full overflow-hidden border-4 border-primary-100 dark:border-gray-800 group-hover:border-primary-400 dark:group-hover:border-primary-500 transition-colors duration-300 shadow-xl">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-500 transition-colors">
                    {member.name}
                  </h3>
                  <div className="w-12 h-1 bg-primary-500 rounded-full mt-2 group-hover:w-24 transition-all duration-300"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
