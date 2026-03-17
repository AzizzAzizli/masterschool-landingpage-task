"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations("not-found");

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <h1 className="text-9xl font-bold text-blue-600 dark:text-blue-400">
        404
      </h1>
      <h2 className="text-3xl font-semibold mt-4 mb-6">
        {t("title")}
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md">
        {t("description")}
      </p>
      <div>
        <Link
          href="/"
          className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all transform hover:scale-105 active:scale-95 shadow-lg"
        >
          {t("backHome")}
        </Link>
      </div>
    </div>
  );
}
