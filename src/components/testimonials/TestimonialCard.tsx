import { Avatar, Card } from '../ui';
import { Testimonial } from '../../lib/types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="p-6 text-center hover:shadow-lg transition-shadow">
      <Avatar src={testimonial.image} alt={`Foto de ${testimonial.name}`} className="mx-auto mb-4" />
      <p className="text-gray-600 mb-4 italic">&ldquo;{testimonial.comment}&rdquo;</p>
      <h3 className="font-semibold">{testimonial.name}</h3>
    </Card>
  );
}