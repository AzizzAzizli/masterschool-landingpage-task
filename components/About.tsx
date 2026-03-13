import Image from "next/image";
import { useTranslations } from "next-intl";

export const About = () => {
  const t = useTranslations("about");

  return (
    <section
      id="about"
      className="relative py-20 md:py-28 bg-background/20 dark:bg-background/60 backdrop-blur-sm"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
              {t("title")}
            </h2>
            <p className="mt-5 text-sm sm:text-base text-blue-100/90 leading-relaxed">
              {t("description")}
            </p>

            <div className="mt-6 rounded-2xl   bg-white dark:bg-slate-950/80  px-5 py-4 shadow-lg shadow-slate-500/40">
              <p className="text-sm sm:text-base font-semibold text-primary-700 dark:text-primary-300">
                {t("proud")}
              </p>
              <ul className="mt-3 space-y-2 text-sm sm:text-base text-slate-700 leading-relaxed dark:text-slate-300 list-disc list-inside">
                <li>{t("proudItem1")}</li>
                <li>{t("proudItem2")}</li>
              </ul>
              <p className="mt-4 text-sm sm:text-base text-slate-800 font-medium dark:text-slate-300">
                {t("endText")}
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-primary-500/20 via-blue-500/10 to-emerald-400/10 blur-2xl -z-10" />
            <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-blue-500/20 bg-slate-900/60">
              <Image
                src="/images/haqqimizda.webp"
                alt={t("title")}
                width={640}
                height={480}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
