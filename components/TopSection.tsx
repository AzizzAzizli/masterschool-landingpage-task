
"use client";

import { useTranslations } from "next-intl";
import BackgroundAnimation from "./BackgroundAnimation";

export const TopSection = () => {
  const t = useTranslations("top-section");

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-background/30 dark:bg-background/40 overflow-hidden"
    >
      <BackgroundAnimation />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white drop-shadow-md">
            {t("title")}
          </h1>

          <p className="mt-6 text-base sm:text-lg md:text-xl text-blue-100/90 max-w-2xl leading-relaxed">
            {t("subtitle")}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#about"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm sm:text-base font-semibold bg-primary-500 text-white shadow-lg shadow-primary-500/30 hover:bg-primary-600 transition-all duration-200 hover:-translate-y-0.5"
            >
              {t("about")}
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm sm:text-base font-semibold border border-blue-300/60 text-blue-100 hover:bg-white/10 hover:border-white/80 transition-all duration-200 hover:-translate-y-0.5 backdrop-blur-sm"
            >
              {t("contact")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
