'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

const partners = [
  { name: 'BDU', image: '/images/emekdas/bdu.webp' },
  { name: 'UNEC', image: '/images/emekdas/unec.webp' },
];

export const Partners = () => {
  const t = useTranslations('partners');

  return (
    <section className="section-padding bg-section-alt-bg bg-background/20 dark:bg-background/60 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary-500/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      
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

        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mt-12">
          {partners.map((partner, index) => (
            <div key={index} className="glass-card w-40 h-40 md:w-56 md:h-56 flex items-center justify-center p-6 group hover:border-primary-400 dark:hover:border-primary-500 transition-colors duration-300">
              <div className="relative w-full h-full">
                <Image
                  src={partner.image}
                  alt={partner.name}
                  fill
                  className="object-contain  group-hover:grayscale-0 transition-all duration-500 opacity-70 group-hover:opacity-100 group-hover:scale-110"
                  sizes="(max-width: 768px) 160px, 224px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};