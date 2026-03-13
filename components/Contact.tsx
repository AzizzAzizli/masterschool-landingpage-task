"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { FiMail, FiPhone, FiClock } from "react-icons/fi";
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";

interface formDataType {
  name: string;
  surname: string;
  email: string;
  phone: string;
  message?: string;
}


export const Contact = () => {
  const t = useTranslations("contact");
  const toastT = useTranslations( "toast-message");

  const [formData, setFormData] = useState<formDataType>({
    name: "",
    message: "",
    surname: "",
    email: "",
    phone: "",
  });

  function handleInput(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const inputName: string = e.target.name;
    setFormData((prev) => ({ ...prev, [inputName]: e.target.value }));
  }

  async function sendForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: formData.name,
          surname: formData.surname,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      toast.success(toastT("success"))
      setFormData({
    name: "",
    message: "",
    surname: "",
    email: "",
    phone: "",
  })
    } catch (err) {
      toast.success(toastT("error"))

    }
  }
  return (
    <section
      id="contact"
      className="section-padding bg-background/20 dark:bg-background/60 relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left Column - Contact Info */}
          <div className="lg:w-5/12 flex flex-col justify-center">
            <span className="section-badge mb-4 inline-block self-start">
              {t("sectionTitle")}
            </span>
            <h2 className="section-title text-white mb-4 text-left!">
              {t("title")}
            </h2>
            <p className="text-gray-300 mb-10 leading-relaxed max-w-md">
              {t("subtitle")}
            </p>

            <div className="space-y-6">
              {/* Phone Card */}
              <div className="glass-card flex items-center p-6 group hover:-translate-y-1 transition-transform">
                <div className="w-14 h-14 rounded-full bg-primary-100 dark:bg-primary-900/40 flex items-center justify-center shrink-0 mr-6 group-hover:bg-primary-500 transition-colors">
                  <FiPhone className="w-6 h-6 text-primary-500 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">{t("phone")}</p>
                  <p className="text-lg font-bold text-gray-100 group-hover:text-primary-500 transition-colors">
                    {t("number")}
                  </p>
                </div>
              </div>

              {/* Email Card */}
              <div className="glass-card flex items-center p-6 group hover:-translate-y-1 transition-transform">
                <div className="w-14 h-14 rounded-full bg-primary-100 dark:bg-primary-900/40 flex items-center justify-center shrink-0 mr-6 group-hover:bg-primary-500 transition-colors">
                  <FiMail className="w-6 h-6 text-primary-500 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">{t("email")}</p>
                  <p className="text-lg font-bold text-gray-100 group-hover:text-primary-500 transition-colors">
                    {t("email-info")}
                  </p>
                </div>
              </div>

              {/* Job Hours Card */}
              <div className="glass-card flex items-center p-6 group hover:-translate-y-1 transition-transform">
                <div className="w-14 h-14 rounded-full bg-primary-100 dark:bg-primary-900/40 flex items-center justify-center shrink-0 mr-6 group-hover:bg-primary-500 transition-colors">
                  <FiClock className="w-6 h-6 text-primary-500 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">{t("job-hours")}</p>
                  <p className="text-lg font-bold text-gray-100 group-hover:text-primary-500 transition-colors">
                    {t("job-hours-info")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:w-7/12">
            <div className="glass-card p-8 md:p-10 border-t-4 border-t-primary-500 shadow-2xl relative">
              {/* Background Glow inside card */}
              <div className="absolute inset-0 bg-linear-to-b from-primary-500/5 to-transparent pointer-events-none rounded-2xl"></div>

              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {t("form-title")}
                </h3>
                <p className="text-gray-400 mb-8">{t("form-subtitle")}</p>

                <form onSubmit={sendForm} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-300"
                      >
                        {t("name")}
                      </label>
                      <input
                      value={formData.name}
                        name="name"
                        onChange={handleInput}
                        required
                        type="text"
                        id="name"
                        placeholder={t("name")}
                        className="w-full bg-white text-gray-900 dark:text-white dark:bg-[#0f172a]/50 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3  focus:outline-hidden focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all shadow-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="surname"
                        className="block text-sm font-medium text-gray-300"
                      >
                        {t("surname")}
                      </label>
                      <input
                      value={formData.surname}
                        name="surname"
                        onChange={handleInput}
                        required
                        type="text"
                        id="surname"
                        placeholder={t("surname")}
                        className="w-full bg-white dark:bg-[#0f172a]/50 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all shadow-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-300"
                      >
                        {t("email")}
                      </label>
                      <input
                      value={formData.email}
                        name="email"
                        onChange={handleInput}
                        required
                        type="email"
                        id="email"
                        suppressHydrationWarning
                        placeholder="numune@mail.com"
                        className="w-full bg-white dark:bg-[#0f172a]/50 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all shadow-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-300"
                      >
                        {t("phone")}
                      </label>
                      <input
                      value={formData.phone}
                        name="phone"
                        onChange={handleInput}
                        required
                        type="tel"
                        id="phone"
                        placeholder="+994"
                        className="w-full bg-white dark:bg-[#0f172a]/50 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all shadow-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-300"
                    >
                      {t("message")}
                    </label>
                    <textarea
                    value={formData.message}
                      name="message"
                      onChange={handleInput}
                      required
                      id="message"
                      rows={5}
                      placeholder={t("message")}
                      className="w-full bg-white dark:bg-[#0f172a]/50 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all shadow-sm resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary justify-center text-lg py-4 group cursor-pointer"
                  >
                    <span>{t("send")}</span>
                    <FiMail className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
