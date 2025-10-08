import { type IService } from "@/types/landings";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/commons/card";
import { Button } from "@/components/commons/button";

interface ServiceCardProps {
  service: IService;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card className="service-card group relative overflow-hidden border-teal-100 bg-white opacity-0 transition-all duration-300 hover:-translate-y-2 hover:border-teal-300 hover:shadow-xl">
      {/* Gradient overlay on hover */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-teal-50/0 via-cyan-50/0 to-teal-50/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <CardHeader className="relative">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-100 to-cyan-100 shadow-md transition-transform duration-300 group-hover:scale-110">
          <span className="text-4xl">{service.icon}</span>
        </div>
        <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
        <CardDescription className="text-base leading-relaxed text-gray-600">
          {service.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="relative">
        <ul className="mb-6 space-y-3">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-start text-sm text-gray-700">
              <svg
                className="mt-0.5 mr-3 h-5 w-5 flex-shrink-0 text-teal-600"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
        <Button
          variant="outline"
          className="w-full border-teal-300 text-teal-700 transition-all duration-300 hover:border-teal-500 hover:bg-teal-50 hover:text-teal-900 hover:shadow-md"
          asChild
        >
          <a href="#agendamento">Agendar Avaliação</a>
        </Button>
      </CardContent>
    </Card>
  );
}
