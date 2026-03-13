import type { Metadata } from "next";
import { ThemeProvider, useTheme } from "@/lib/theme";
import BackgroundAnimation from "@/components/BackgroundAnimation";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const metadata: Metadata = {
  title: "MasterSchool — Gələcəyin Təhsili",
  description:
    "MasterSchool ilə keyfiyyətli təhsil, peşəkar müəllimlər və uğurlu gələcək. Abituriyent, magistratura, xarici dil kursları.",
  keywords: "MasterSchool, təhsil, kurslar, abituriyent, magistratura, Bakı",
  openGraph: {
    title: "MasterSchool — Gələcəyin Təhsili",
    description:
      "MasterSchool ilə keyfiyyətli təhsil, peşəkar müəllimlər və uğurlu gələcək.",
    type: "website",

    // locale: "az_AZ",
  },
  icons: {
    icon: "/master-school-logo.png",
  },
};
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <NextIntlClientProvider messages={messages}>
        <ThemeProvider>
          <body suppressHydrationWarning>
            <ToastContainer />
            <BackgroundAnimation />
            {children}
          </body>
        </ThemeProvider>
      </NextIntlClientProvider>
    </html>
  );
}
