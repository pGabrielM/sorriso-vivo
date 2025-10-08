"use client";

import { team } from "@/utils/landing-helper";
import { TeamCard } from "./team-card";

export function Team() {
  return (
    <section id="equipe" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Nossa Equipe</h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-600">
            Profissionais especializados e experientes, prontos para cuidar do seu sorriso
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => (
            <TeamCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
