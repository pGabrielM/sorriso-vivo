import Image from "next/image";
import { type ITestimonial } from "@/types/landings";
import { Card, CardContent, CardHeader } from "@/components/commons/card";

interface TestimonialCardProps {
  testimonial: ITestimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="transition-all duration-300 hover:shadow-lg">
      <CardHeader>
        <div className="flex items-center space-x-4">
          <div className="relative h-12 w-12 overflow-hidden rounded-full">
            <Image src={testimonial.image} alt={testimonial.name} fill className="object-cover" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
            <div className="flex text-yellow-400">
              {[...Array(testimonial.rating)].map((_, i) => (
                <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="mb-4 text-gray-600">{testimonial.text}</p>
        <div className="text-sm font-semibold text-blue-600">{testimonial.treatment}</div>
        <div className="text-xs text-gray-500">
          {new Date(testimonial.date).toLocaleDateString("pt-BR")}
        </div>
      </CardContent>
    </Card>
  );
}
