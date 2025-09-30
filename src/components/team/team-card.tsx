'use client';

import Image from 'next/image';
import { Card, CardContent, CardHeader } from '../ui';
import { TeamMember } from '../../types';
import { motion } from 'framer-motion';
import { Award, Heart } from 'lucide-react';

interface TeamCardProps {
  member: TeamMember;
  index: number;
}

export function TeamCard({ member, index }: TeamCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="h-full bg-white hover:shadow-xl transition-all duration-300 border-0 shadow-lg group overflow-hidden">
        <CardHeader className="p-0">
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="relative h-64 overflow-hidden"
          >
            <Image
              src={member.image}
              alt={`Foto de ${member.name}`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
              <p className="text-blue-200 font-medium">{member.specialty}</p>
            </div>
          </motion.div>
        </CardHeader>
        <CardContent className="p-6">
          <p className="text-gray-600 mb-4 leading-relaxed">
            {member.bio}
          </p>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <Award className="w-4 h-4 text-primary" />
              <span>Especialista</span>
            </div>
            <div className="flex items-center space-x-1">
              <Heart className="w-4 h-4 text-red-500" />
              <span>Humanizado</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}