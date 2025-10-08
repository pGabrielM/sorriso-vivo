"use client";

import { testimonials } from "@/utils/landing-helper";
import { TestimonialCard } from "./testimonial-card";

export function Testimonials() {
  return (
    <section id="depoimentos" className="bg-gradient-to-b from-teal-50 via-white to-teal-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-block rounded-full border border-teal-200 bg-teal-50 px-4 py-1.5">
            <span className="text-sm font-medium text-teal-700">⭐ Depoimentos Reais</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            O Que Nossos{" "}
            <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Pacientes Dizem
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-600">
            Histórias reais de transformação e satisfação com nossos tratamentos
          </p>
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
