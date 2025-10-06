import Image from 'next/image';
import { ITeamMember } from '@/types/landing';
import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface TeamCardProps {
  member: ITeamMember;
}

export function TeamCard({ member }: TeamCardProps) {
  return (
    <Card className="hover:shadow-lg transition-all duration-300">
      <CardHeader className="text-center">
        <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover"
          />
        </div>
        <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
        <CardDescription className="text-sm text-gray-600">{member.role}</CardDescription>
        <Badge className="mx-auto mt-2">{member.specialty}</Badge>
      </CardHeader>
      <CardContent className="text-center">
        <p className="text-sm text-blue-600 font-semibold mb-2">{member.cro}</p>
        <p className="text-sm text-gray-600">{member.bio}</p>
      </CardContent>
    </Card>
  );
}
