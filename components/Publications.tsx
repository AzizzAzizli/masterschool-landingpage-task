'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

const bookImages = [
  '/images/nesrler/mentiq.webp',
  '/images/nesrler/infor2.webp',
  '/images/nesrler/english(magistr).webp',
  '/images/nesrler/rus(magistr).webp',
  '/images/nesrler/english(doktorantura).webp',
  '/images/nesrler/tarix.webp',
  '/images/nesrler/az(abituriyent).webp',
  '/images/nesrler/logic.webp'
];

export const Publications = () => {
  const t = useTranslations('publications');
  
  // Create an array mapping indices to books since next-intl can return an array
  // If next-intl doesn't return an exact array naturally, you can map dynamically or by a known length.
  const books = Array.from({ length: 8 }).map((_, i) => ({
    name: t(`books.${i}.name`),
    description: t(`books.${i}.description`),
    image: bookImages[i]
  }));

  return (
    <section 
      id="nesrler" 
      className="section-padding relative overflow-hidden bg-cover bg-center bg-fixed"
      style={{ backgroundImage: 'url("/images/publications-bg.webp")' }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/70 dark:bg-black/80 z-0"></div>
      
      {/* Decorative gradient patches to blend with the rest of the site's theme */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="section-badge mb-4 inline-block">{t('sectionTitle')}</span>
          <h2 className="section-title text-white mb-6">
            {t('title')}
          </h2>
          <p className="section-subtitle text-gray-200">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {books.map((book, index) => (
            <div 
              key={index} 
              className="group relative h-[400px] rounded-2xl overflow-hidden shadow-xl border border-white/10 hover:border-primary-400 transition-all duration-500 hover:-translate-y-2"
            >
              <Image
                src={book.image}
                alt={book.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              
              {/* Blur Overlay at the bottom */}
              <div className="absolute bottom-0 left-0 w-full p-6   bg-black/40 backdrop-blur-md border-t border-white/10 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <h3 className="  bg-[var(--primary-500)] font-bold rounded-full px-2 py-1 inline-block text-left! text-lg! mb-2! text-white! group-hover:text-primary-300 transition-colors">
                  {book.name}
                </h3>
                <p className="text-gray-200  text-sm md:text-base max-h-0 opacity-0 group-hover:opacity-100 group-hover:max-h-40 transition-all  duration-500 ">
                  {book.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};