"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/commons/button";
import { Input } from "@/components/commons/input";
import { services } from "@/utils/landing-helper";
import type { IBookingData } from "@/types/landings";

export function BookingForm() {
  const t = useTranslations("booking");
  const tGlobal = useTranslations();
  const [formData, setFormData] = useState<IBookingData>({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.warn("Booking data:", formData);
    setSubmitStatus("success");
    setTimeout(() => {
      setFormData({ name: "", phone: "", email: "", service: "", date: "", time: "", message: "" });
      setSubmitStatus("idle");
    }, 3000);
  };

  return (
    <section
      id="agendamento"
      className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/20 to-white py-20"
    >
      {/* Decorative Elements */}
      <div className="pointer-events-none absolute top-1/3 right-1/4 h-96 w-96 rounded-full bg-blue-400/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-1/4 left-1/3 h-80 w-80 rounded-full bg-teal-400/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <div className="badge-primary mb-4 inline-block">
            <span className="text-sm font-semibold">{t("badge")}</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">{t("title")}</h2>
          <p className="text-xl text-gray-600">{t("subtitle")}</p>
        </div>

        {/* Premium Booking Form Card */}
        <div className="booking-form-card">
          {/* Card Header */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900">{t("cardTitle")}</h3>
            <p className="mt-2 text-gray-600">{t("cardDescription")}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name and Phone Row */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label className="mb-3 block text-sm font-semibold text-gray-700">
                  {t("form.name")} *
                </label>
                <div className="relative">
                  <svg
                    className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-blue-600"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={t("form.namePlaceholder")}
                    className="pl-10"
                  />
                </div>
              </div>

              <div>
                <label className="mb-3 block text-sm font-semibold text-gray-700">
                  {t("form.phone")} *
                </label>
                <div className="relative">
                  <svg
                    className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-blue-600"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <Input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder={t("form.phonePlaceholder")}
                    className="pl-10"
                  />
                </div>
              </div>
            </div>

            {/* Email and Service Row */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label className="mb-3 block text-sm font-semibold text-gray-700">
                  {t("form.email")} *
                </label>
                <div className="relative">
                  <svg
                    className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-blue-600"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <Input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={t("form.emailPlaceholder")}
                    className="pl-10"
                  />
                </div>
              </div>

              <div>
                <label className="mb-3 block text-sm font-semibold text-gray-700">
                  {t("form.service")} *
                </label>
                <div className="relative">
                  <svg
                    className="pointer-events-none absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-blue-600"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.5a2 2 0 00-1 .268l-4-4" />
                  </svg>
                  <select
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full pl-10"
                  >
                    <option value="">{t("form.servicePlaceholder")}</option>
                    {services.map((service, index) => {
                      const serviceTitle = service.titleKey
                        ? tGlobal(service.titleKey)
                        : service.title || `Serviço ${index + 1}`;
                      return (
                        <option key={index} value={serviceTitle}>
                          {serviceTitle}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
            </div>

            {/* Date and Time Row */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label className="mb-3 block text-sm font-semibold text-gray-700">
                  {t("form.date")} *
                </label>
                <div className="relative">
                  <svg
                    className="pointer-events-none absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-blue-600"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <Input
                    required
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="pl-10"
                  />
                </div>
              </div>

              <div>
                <label className="mb-3 block text-sm font-semibold text-gray-700">
                  {t("form.time")} *
                </label>
                <div className="relative">
                  <svg
                    className="pointer-events-none absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-blue-600"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <Input
                    required
                    type="time"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="pl-10"
                  />
                </div>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="mb-3 block text-sm font-semibold text-gray-700">
                {t("form.message")}
              </label>
              <div className="relative">
                <svg
                  className="pointer-events-none absolute top-3 left-3 h-5 w-5 text-blue-600"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M7 8h10M7 12h10m-10 4h10M3 20h18a2 2 0 002-2V4a2 2 0 00-2-2H3a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={t("form.messagePlaceholder")}
                  className="min-h-[120px] w-full pt-3 pl-10"
                />
              </div>
            </div>

            {/* Submit Button with Status */}
            <div className="pt-4">
              {submitStatus === "success" && (
                <div className="mb-4 rounded-lg border border-green-200 bg-green-50 p-4 text-green-700">
                  <p className="font-semibold">{t("success")}</p>
                </div>
              )}
              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-blue-600 to-teal-600 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:from-blue-700 hover:to-teal-700 hover:shadow-xl"
              >
                <svg
                  className="mr-2 h-5 w-5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {t("form.submit")}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
