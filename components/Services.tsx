"use client";

import { useTranslations } from "next-intl";
import { ServiceCard } from "./ServiceCard";

export const Services = () => {
  const t = useTranslations("services");
  const items = [0, 1, 2, 3, 4, 5];

  return (
    <section id="services" className="section-padding bg-background/30 dark:bg-background/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="section-badge">{t("sectionTitle")}</span>
          <h2 className="section-title">{t("title")}</h2>
          <p className="section-subtitle">{t("subtitle")}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((index) => (
            <ServiceCard
              key={index}
              title={t(`items.${index}.title`)}
              info={t(`items.${index}.card-info`)}
              description={t(`items.${index}.description`)}
              explore={t("explore")}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
