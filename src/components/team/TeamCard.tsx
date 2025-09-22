import Image from 'next/image';
import { Card } from '../ui';
import { TeamMember } from '../../lib/types';

interface TeamCardProps {
  member: TeamMember;
}

export function TeamCard({ member }: TeamCardProps) {
  return (
    <Card className="p-6 text-center hover:shadow-lg transition-shadow">
      <Image
        src={member.image}
        alt={`Foto de ${member.name}`}
        width={150}
        height={150}
        className="rounded-full mx-auto mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
      <p className="text-primary font-medium mb-4">{member.specialty}</p>
      <p className="text-gray-600">{member.bio}</p>
    </Card>
  );
}