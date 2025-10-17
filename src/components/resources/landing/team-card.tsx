import { useTranslations } from "next-intl";
import Image from "next/image";
import { type ITeamMember } from "@/types/landings";

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
    <div className="team-card group relative">
      {/* Image Container */}
      <div className="relative mx-auto mb-6 h-48 w-48 overflow-hidden rounded-2xl shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl">
        <Image
          src={member.image}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        {/* Overlay with specialty badge */}
        <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/40 to-transparent pb-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="badge-accent">
            <span className="text-xs font-bold">{specialty.toUpperCase()}</span>
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="rounded-2xl border border-white/20 bg-white/80 p-6 shadow-lg backdrop-blur-md backdrop-filter transition-all duration-300 group-hover:bg-white/90 group-hover:shadow-2xl">
        <div className="mb-3 text-center">
          <h3 className="text-xl font-bold text-gray-900">{name}</h3>
          <p className="text-sm font-semibold text-blue-600">{role}</p>
        </div>

        {/* Professional Badge with CRO */}
        <div className="mb-4 flex items-center justify-center gap-2 rounded-lg border border-blue-100 bg-gradient-to-r from-blue-50 to-teal-50 px-3 py-2">
          <svg
            className="h-4 w-4 text-blue-600"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-xs font-bold text-blue-700">{cro}</span>
        </div>

        {/* Bio */}
        <p className="text-center text-sm leading-relaxed text-gray-600">{bio}</p>
      </div>
    </div>
  );
}
