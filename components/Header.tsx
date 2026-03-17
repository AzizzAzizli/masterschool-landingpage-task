"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTranslations, useLocale } from "next-intl";
import { useTheme } from "@/lib/theme";
import { useRouter } from "next/navigation";
import Image from "next/image";

const navItems = [
  { key: "home", href: "#home" },
  { key: "about", href: "#about" },
  { key: "services", href: "#services" },
  { key: "teachers", href: "#komanda" },
  { key: "branches", href: "#filiallar" },
  { key: "contact", href: "#contact" },
];

const languages = [
  { code: "az", label: "AZ" },
  { code: "en", label: "EN" },
  { code: "ru", label: "RU" },
];

export default function Header() {
  const router = useRouter();
  const t = useTranslations("nav");
  const locale = useLocale();

  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
  }, [isMobileOpen]);

  const handleLocaleChange = (newLocale: string) => {
    if (typeof window !== "undefined") {
      document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`;

      router.refresh();
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileOpen(false);

    // Give the menu a moment to start closing so overflow hidden is removed
    setTimeout(() => {
      const id = href.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 10);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? " backdrop-blur-xl shadow-lg border-b border-card-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#home" className="flex items-center group">
            <div className="relative w-32 h-10 md:w-44 md:h-16 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/master-school-logo.webp"
                alt="MasterSchool Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all hover:bg-primary-500/10 hover:text-primary-500 ${
                  "text-white"
                }`}
              >
                {t(item.key)}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center rounded-lg overflow-hidden border border-card-border">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLocaleChange(lang.code)}
                  className={`px-2.5 py-1.5 text-xs cursor-pointer font-semibold transition-all ${
                    locale === lang.code
                      ? "bg-primary-500 text-white"
                      
                        : "text-white hover:bg-white/10"
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>

            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all cursor-pointer ${
               
                  "text-white hover:bg-white/10 "
              }`}
              aria-label="Toggle theme"
            >
              {theme === "light" ? <FiMoon size={18} /> : <FiSun size={18} />}
            </button>

            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className={`lg:hidden p-2 rounded-lg transition-all cursor-pointer ${
                isScrolled
                  ? "text-white hover:bg-white/10"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle menu"
            >
              {isMobileOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-nav-bg backdrop-blur-xl border-t border-card-border"
          >
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="block px-4 py-3 rounded-lg text-text-primary font-medium hover:bg-primary-500/10 hover:text-primary-500 transition-all cursor-pointer"
                >
                  {t(item.key)}
                </a>
              ))}
              <div className="flex items-center gap-2 px-4 pt-3 border-t border-card-border mt-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      handleLocaleChange(lang.code);
                      setIsMobileOpen(false);
                    }}
                    className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                      locale === lang.code
                        ? "bg-primary-500 text-white"
                        : "text-text-secondary hover:bg-primary-50"
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
