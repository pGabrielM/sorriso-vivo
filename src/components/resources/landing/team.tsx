"use client";

import { team } from "@/utils/landing-helper";
import { TeamCard } from "./team-card";
import { useTranslations } from "next-intl";

export function Team() {
  const t = useTranslations("team");
  return (
    <section
      id="equipe"
      className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/20 to-white py-20"
    >
      {/* Decorative Elements */}
      <div className="pointer-events-none absolute top-20 right-10 h-96 w-96 rounded-full bg-teal-400/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-40 left-20 h-72 w-72 rounded-full bg-blue-400/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="badge-primary mb-4 inline-block">
            <span className="text-sm font-semibold">{t("badge")}</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">{t("title")}</h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-600">{t("subtitle")}</p>
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
