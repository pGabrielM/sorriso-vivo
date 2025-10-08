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
    <Card className="service-card opacity-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <CardHeader>
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">
          <span className="text-4xl">{service.icon}</span>
        </div>
        <CardTitle className="text-xl">{service.title}</CardTitle>
        <CardDescription className="text-base">{service.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="mb-6 space-y-2">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-600">
              <svg
                className="mr-2 h-5 w-5 text-green-500"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
        <Button variant="outline" className="w-full" asChild>
          <a href="#agendamento">Agendar Avaliação</a>
        </Button>
      </CardContent>
    </Card>
  );
}
