'use client';

import { testimonials } from '@/helpers/landing-helper';
import { TestimonialCard } from './testimonial-card';

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Depoimentos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Veja o que nossos pacientes dizem sobre nosso atendimento
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
