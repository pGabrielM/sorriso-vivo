'use client';

import { Avatar, AvatarFallback, AvatarImage, Card, CardContent } from '../ui';
import { Testimonial } from '../../types';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

export function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="h-full bg-white hover:shadow-xl transition-all duration-300 border-0 shadow-lg relative overflow-hidden">
        <div className="absolute top-4 right-4 text-primary/20">
          <Quote className="w-8 h-8" />
        </div>
        <CardContent className="p-6 pt-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
          >
            <p className="text-gray-700 mb-6 leading-relaxed italic text-lg">
              &ldquo;{testimonial.comment}&rdquo;
            </p>
          </motion.div>
          <div className="flex items-center space-x-4">
            <Avatar className="w-12 h-12 border-2 border-primary/20">
              <AvatarImage src={testimonial.image} alt={`Foto de ${testimonial.name}`} />
              <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                {testimonial.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div>
              <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
              <p className="text-sm text-gray-600">Paciente Sorriso Vivo</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}