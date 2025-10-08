import Image from "next/image";
import { type ITeamMember } from "@/types/landings";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/commons/card";
import { Badge } from "@/components/commons/badge";

interface TeamCardProps {
  member: ITeamMember;
}

export function TeamCard({ member }: TeamCardProps) {
  return (
    <Card className="transition-all duration-300 hover:shadow-lg">
      <CardHeader className="text-center">
        <div className="relative mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full">
          <Image src={member.image} alt={member.name} fill className="object-cover" />
        </div>
        <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
        <CardDescription className="text-sm text-gray-600">{member.role}</CardDescription>
        <Badge className="mx-auto mt-2">{member.specialty}</Badge>
      </CardHeader>
      <CardContent className="text-center">
        <p className="mb-2 text-sm font-semibold text-blue-600">{member.cro}</p>
        <p className="text-sm text-gray-600">{member.bio}</p>
      </CardContent>
    </Card>
  );
}
