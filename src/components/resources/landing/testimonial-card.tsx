"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { type ITestimonial } from "@/types/landings";

interface TestimonialCardProps {
  testimonial: ITestimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const t = useTranslations();

  const name = testimonial.nameKey ? t(testimonial.nameKey) : testimonial.name || "";
  const text = testimonial.textKey ? t(testimonial.textKey) : testimonial.text || "";
  const treatment = testimonial.treatmentKey
    ? t(testimonial.treatmentKey)
    : testimonial.treatment || "";

  return (
    <div className="testimonial-card group relative">
      {/* Quote Icon Background */}
      <div className="pointer-events-none absolute -top-6 -right-6 text-8xl font-light text-blue-100/40 select-none">
        "
      </div>

      {/* Card Content */}
      <div className="relative z-10 rounded-2xl border border-white/20 bg-white/80 p-6 shadow-lg backdrop-blur-md backdrop-filter transition-all duration-300 group-hover:bg-white/90 group-hover:shadow-2xl">
        {/* Header with Avatar */}
        <div className="mb-4 flex items-center space-x-4">
          <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-full ring-2 ring-blue-200 transition-all duration-300 group-hover:ring-4 group-hover:ring-blue-300">
            <Image src={testimonial.image} alt={name} fill className="object-cover" />
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-gray-900">{name}</h4>
            {/* Star Rating with Gold Color */}
            <div className="mt-2 flex gap-1">
              {[...Array(testimonial.rating)].map((_, i) => (
                <svg
                  key={i}
                  className="h-4 w-4 fill-amber-400 transition-transform duration-300 hover:scale-125"
                  viewBox="0 0 20 20"
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonial Text */}
        <p className="mb-4 text-sm leading-relaxed text-gray-700 italic">"{text}"</p>

        {/* Treatment Badge and Date */}
        <div className="flex items-center justify-between border-t border-blue-100 pt-4">
          <div className="inline-flex items-center rounded-lg border border-blue-200 bg-gradient-to-r from-blue-50 to-teal-50 px-3 py-1">
            <svg
              className="mr-1.5 h-3 w-3 text-blue-600"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-xs font-semibold text-blue-700">{treatment}</span>
          </div>
          <span className="text-xs text-gray-500">
            {new Date(testimonial.date).toLocaleDateString("pt-BR")}
          </span>
        </div>
      </div>
    </div>
  );
}
