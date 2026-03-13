'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectCoverflow } from 'swiper/modules';

// Swiper styles are imported globally in app/globals.css

const resultsImages = Array.from({ length: 15 }, (_, i) => `/images/neticeler/img${i + 1}.png`);

export const BachelorResults = () => {
  const t = useTranslations('bachelor-results');
 

  return (
    <section id="neticeler" className="section-padding bg-section-alt-bg bg-background/30 dark:bg-background/60 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

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
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 15,
              stretch: 0,
              depth: 200,
              modifier: 1,
              slideShadows: false,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            pagination={{ clickable: true, dynamicBullets: true }}
            navigation={true}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            className="w-full pb-20!"
            breakpoints={{
              0: {
                slidesPerView: 1.2,
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
          >
            {resultsImages.map((img, index) => (
              <SwiperSlide key={index} className="w-[280px]! sm:w-[300px]! md:w-[340px]!">
                <div className="glass-card flex flex-col items-center p-4 group transition-all duration-500 hover:shadow-2xl hover:border-primary-400 dark:hover:border-primary-500 hover:-translate-y-2">
                  <div className="relative w-full aspect-3/4 rounded-xl overflow-hidden shadow-inner">
                    <Image
                      src={img}
                      alt={`Abituriyent Nəticəsi ${index + 1}`}
                      fill
                      className="object-contain filter transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 280px, (max-width: 768px) 300px, 340px"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};