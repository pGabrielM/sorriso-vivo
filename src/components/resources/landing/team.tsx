"use client";

import { team } from "@/utils/landing-helper";
import { TeamCard } from "./team-card";

export function Team() {
  return (
    <section id="equipe" className="bg-gradient-to-b from-white via-teal-50/30 to-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-block rounded-full border border-teal-200 bg-teal-50 px-4 py-1.5">
            <span className="text-sm font-medium text-teal-700">👥 Conheça Nossa Equipe</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Especialistas em{" "}
            <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Odontologia
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-600">
            Dentistas altamente qualificados e certificados pelo CRO-PR, comprometidos com sua saúde
            bucal
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <TeamCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
