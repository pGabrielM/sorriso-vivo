import { Button, Card } from '../ui';
import { Service } from '../../lib/types';

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  // Simple icon mapping, since no lucide
  const iconMap: Record<string, string> = {
    brush: '🧹',
    sun: '☀️',
    'align-justify': '📏',
    implant: '🦷'
  };

  return (
    <Card className="p-6 text-center hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{iconMap[service.icon] || '🦷'}</div>
      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
      <p className="text-gray-600 mb-4">{service.desc}</p>
      <Button variant="outline">Saiba mais</Button>
    </Card>
  );
}