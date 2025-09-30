'use client';

import { Button, Card, CardContent, CardHeader, CardTitle } from '../ui';
import { Service } from '../../types';
import { motion } from 'framer-motion';
import {
  Shield,
  Sparkles,
  AlignJustify,
  Crown
} from 'lucide-react';

interface ServiceCardProps {
  service: Service;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const iconMap = {
    brush: Shield,
    sun: Sparkles,
    'align-justify': AlignJustify,
    implant: Crown
  };

  const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Shield;

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="h-full bg-white hover:shadow-xl transition-all duration-300 border-0 shadow-lg group">
        <CardHeader className="text-center pb-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors"
          >
            <IconComponent className="w-8 h-8 text-primary" />
          </motion.div>
          <CardTitle className="text-xl font-bold text-gray-900">
            {service.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-gray-600 mb-6 leading-relaxed">
            {service.desc}
          </p>
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
          >
            Saiba mais
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}