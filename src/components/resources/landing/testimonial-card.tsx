"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { type ITestimonial } from "@/types/landings";
import { Card, CardContent, CardHeader } from "@/components/commons/card";

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
    <Card className="group relative overflow-hidden border-teal-100 bg-white transition-all duration-300 hover:-translate-y-2 hover:border-teal-300 hover:shadow-xl">
      {/* Quote icon background */}
      <div className="pointer-events-none absolute top-4 right-4 text-8xl text-teal-50 opacity-50 transition-opacity duration-300 group-hover:opacity-70">
        "
      </div>

      <CardHeader className="relative">
        <div className="flex items-center space-x-4">
          <div className="relative h-14 w-14 overflow-hidden rounded-full ring-2 ring-teal-100 transition-all duration-300 group-hover:ring-4 group-hover:ring-teal-200">
            <Image src={testimonial.image} alt={name} fill className="object-cover" />
          </div>
          <div>
            <h4 className="font-bold text-gray-900">{name}</h4>
            <div className="mt-1 flex text-yellow-400">
              {[...Array(testimonial.rating)].map((_, i) => (
                <svg
                  key={i}
                  className="h-4 w-4 fill-current transition-transform duration-300 group-hover:scale-110"
                  viewBox="0 0 20 20"
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="relative">
        <p className="mb-4 text-sm leading-relaxed text-gray-700">{text}</p>
        <div className="flex items-center justify-between border-t border-teal-50 pt-4">
          <div className="inline-flex items-center rounded-full bg-gradient-to-r from-teal-50 to-cyan-50 px-3 py-1">
            <svg
              className="mr-1.5 h-4 w-4 text-teal-600"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-xs font-semibold text-teal-700">{treatment}</span>
          </div>
          <div className="text-xs text-gray-500">
            {new Date(testimonial.date).toLocaleDateString("pt-BR")}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
