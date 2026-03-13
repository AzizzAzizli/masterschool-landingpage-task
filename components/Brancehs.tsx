'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const branches = [
  {
    key: "0",
    images: [
      "/images/filial/28may/image.png",
      "/images/filial/28may/image2.jpeg",
      "/images/filial/28may/image3.jpeg",
    ]
  },
  {
    key: "1",
    images: [
      "/images/filial/elmler/image.png",
      "/images/filial/elmler/image2.jpeg",
      "/images/filial/elmler/image3.webp",
    ]
  },
  {
    key: "2",
    images: [
      "/images/filial/gunesli/img1.png",
      "/images/filial/gunesli/img2.png",
      "/images/filial/gunesli/img3.png",
    ]
  },
  {
    key: "3",
    images: [
      "/images/filial/hovsan/img1.webp",
      "/images/filial/hovsan/img2.webp",
      "/images/filial/hovsan/img3.webp",
    ]
  }
];

export const Branches = () => {
  const t = useTranslations('branches');

  return (
    <section id="filiallar" className="section-padding bg-background/20 dark:bg-background/80 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-[100px] translate-y-1/2 translate-x-1/2 pointer-events-none" />

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {branches.map((branch) => (
            <div key={branch.key} className="relative group rounded-2xl p-[2px] overflow-hidden">
              {/* Animated Border */}
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-primary-500 to-transparent group-hover:animate-[spin_3s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative h-full bg-background backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-transparent group-hover:border-primary-500/20 transition-all duration-300 z-10">
                <div className="relative h-48 w-full group/slider overflow-hidden">
                  <Swiper
                    modules={[Autoplay, Pagination, EffectFade]}
                    effect="fade"
                    spaceBetween={0}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    autoplay={{
                      delay: 3500 + Math.random() * 1000,
                      disableOnInteraction: false,
                    }}
                    loop={true}
                    className="w-full h-full"
                  >
                    {branch.images.map((img, i) => (
                      <SwiperSlide key={i} className="w-full h-full">
                        <div className="relative w-full h-full">
                          <Image
                            src={img}
                            alt={`${t(`locations.${branch.key}.name`)} image ${i + 1}`}
                            fill
                            className="object-cover group-hover/slider:scale-110 transition-transform duration-700"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          />
                          <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent z-10"></div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  
                  {/* Overlay content on image */}
                  <div className="absolute bottom-4 left-4 right-4 z-20">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {t(`locations.${branch.key}.name`)}
                    </h3>
                  </div>
                </div>

                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center shrink-0">
                        <svg className="w-5 h-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-200 mb-1">Ünvan</p>
                        <p className="text-gray-200 font-medium">
                          {t(`locations.${branch.key}.address`)}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center shrink-0">
                        <svg className="w-5 h-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-200 mb-1">Əlaqə</p>
                        <p className="text-gray-200 font-medium whitespace-pre-line group-hover:text-primary-500 transition-colors">
                          {t(`locations.${branch.key}.phone`)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Custom styles for swiper pagination */}
      <style dangerouslySetInnerHTML={{__html: `
        .group\\/slider .swiper-pagination-bullet {
          background-color: rgba(255, 255, 255, 0.5);
          opacity: 1;
        }
        .group\\/slider .swiper-pagination-bullet-active {
          background-color: white !important;
        }
      `}} />
    </section>
  );
};