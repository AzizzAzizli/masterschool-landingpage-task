import type { Metadata } from "next";
import { ThemeProvider } from "@/lib/theme";
import BackgroundAnimation from "@/components/BackgroundAnimation";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

// Swiper Styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/effect-coverflow";
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
    icon: "/master-school-logo.webp",
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
    <html lang={locale} className={spaceGrotesk.variable}>
      <NextIntlClientProvider messages={messages}>
        <ThemeProvider>
          <body suppressHydrationWarning className="font-sans">
            <ToastContainer />
            <BackgroundAnimation />
            {children}
          </body>
        </ThemeProvider>
      </NextIntlClientProvider>
    </html>
  );
}
