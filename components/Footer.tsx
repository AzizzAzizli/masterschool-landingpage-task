'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { FaInstagram, FaYoutube, FaFacebook } from 'react-icons/fa';
import { FiMail, FiPhone, FiMapPin, FiClock } from 'react-icons/fi';

const navItems = [
  { key: "home", href: "#home" },
  { key: "about", href: "#about" },
  { key: "services", href: "#services" },
  { key: "teachers", href: "#komanda" },
  { key: "branches", href: "#filiallar" },
  { key: "contact", href: "#contact" },
];

export const Footer = () => {
  const t = useTranslations('footer');
  const navT = useTranslations('nav');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background/90 dark:bg-background border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Logo & Description */}
          <div className="space-y-6">
            <div className="relative w-48 h-20">
              <Image
                src="/images/master-school-logo.webp"
                alt="MasterSchool Logo"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              {t('description')}
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">{t('quickLinks')}</h3>
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.key}>
                  <a 
                    href={item.href}
                    className="text-gray-400 hover:text-primary-500 transition-colors flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {navT(item.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">{t('contactInfo')}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FiPhone className="text-primary-500 mt-1 shrink-0" />
                <span className="text-gray-400 text-sm">{t('number')}</span>
              </li>
              <li className="flex items-start gap-3">
                <FiMail className="text-primary-500 mt-1 shrink-0" />
                <span className="text-gray-400 text-sm break-all">{t('email-info')}</span>
              </li>
              <li className="flex items-start gap-3">
                <FiMapPin className="text-primary-500 mt-1 shrink-0" />
                <span className="text-gray-400 text-sm">{t('address')}</span>
              </li>
              <li className="flex items-start gap-3">
                <FiClock className="text-primary-500 mt-1 shrink-0" />
                <span className="text-gray-400 text-sm">{t('job-hours-info')}</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Social */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">{t('sosial')}</h3>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/masterschool.az/" 
                target="_blank"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-primary-500 hover:text-white hover:border-primary-500 transition-all duration-300"
              >
                <FaInstagram size={18} />
              </a>
              <a 
                href="https://www.youtube.com/channel/UCyp6IRNGWmB6ncX6nsLOZtw" 
                target="_blank"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300"
              >
                <FaYoutube size={18} />
              </a>
              <a 
                href="https://www.facebook.com/MasterSchool.az/" 
                target="_blank"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300"
              >
                <FaFacebook size={18} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t  border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-gray-500 text-sm w-full text-center">
            © {currentYear} {t('rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};