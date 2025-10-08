"use client";

import { testimonials } from "@/utils/landing-helper";
import { TestimonialCard } from "./testimonial-card";

export function Testimonials() {
  return (
    <section id="depoimentos" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Depoimentos</h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-600">
            Veja o que nossos pacientes dizem sobre nosso atendimento
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
