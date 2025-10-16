import { useTranslations } from "next-intl";
import Image from "next/image";
import { type ITeamMember } from "@/types/landings";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/commons/card";
import { Badge } from "@/components/commons/badge";

interface TeamCardProps {
  member: ITeamMember;
}

export function TeamCard({ member }: TeamCardProps) {
  const t = useTranslations();

  const name = member.nameKey ? t(member.nameKey) : member.name || "Profissional";
  const role = member.roleKey ? t(member.roleKey) : member.role || "";
  const specialty = member.specialtyKey ? t(member.specialtyKey) : member.specialty || "";
  const cro = member.croKey ? t(member.croKey) : member.cro || "";
  const bio = member.bioKey ? t(member.bioKey) : member.bio || "";

  return (
    <Card className="group relative overflow-hidden border-teal-100 bg-white transition-all duration-300 hover:-translate-y-2 hover:border-teal-300 hover:shadow-xl">
      {/* Gradient overlay on hover */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-teal-50/0 via-cyan-50/0 to-teal-50/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <CardHeader className="relative text-center">
        <div className="relative mx-auto mb-4 h-40 w-40 overflow-hidden rounded-full ring-4 ring-teal-100 transition-all duration-300 group-hover:ring-8 group-hover:ring-teal-200">
          <Image
            src={member.image}
            alt={name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <h3 className="text-xl font-bold text-gray-900">{name}</h3>
        <CardDescription className="text-sm font-medium text-gray-600">{role}</CardDescription>
        <Badge className="mx-auto mt-3 border-teal-200 bg-teal-50 text-teal-700 hover:bg-teal-100">
          {specialty}
        </Badge>
      </CardHeader>
      <CardContent className="relative text-center">
        <div className="mb-3 inline-flex items-center rounded-full bg-gradient-to-r from-teal-100 to-cyan-100 px-3 py-1">
          <svg
            className="mr-1.5 h-4 w-4 text-teal-700"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-sm font-semibold text-teal-700">{cro}</span>
        </div>
        <p className="text-sm leading-relaxed text-gray-600">{bio}</p>
      </CardContent>
    </Card>
  );
}
