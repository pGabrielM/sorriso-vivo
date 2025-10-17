"use client";

import { testimonials } from "@/utils/landing-helper";
import { TestimonialCard } from "./testimonial-card";
import { useTranslations } from "next-intl";

export function Testimonials() {
  const t = useTranslations("testimonials");
  return (
    <section
      id="depoimentos"
      className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/20 to-white py-20"
    >
      {/* Decorative Elements */}
      <div className="pointer-events-none absolute top-32 left-1/4 h-80 w-80 rounded-full bg-blue-400/5 blur-3xl" />
      <div className="pointer-events-none absolute right-1/4 bottom-20 h-96 w-96 rounded-full bg-teal-400/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="badge-primary mb-4 inline-block">
            <span className="text-sm font-semibold">{t("badge")}</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">{t("title")}</h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-600">{t("subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>

        {/* Show remaining testimonials on larger screens */}
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:hidden">
          {testimonials.slice(3).map((testimonial, index) => (
            <TestimonialCard key={index + 3} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
