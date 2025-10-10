"use client";

import { services } from "@/utils/landing-helper";
import { ServiceCard } from "./service-card";
import { useEffect, useRef } from "react";
import anime from "@/lib/anime";

export function Services() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const tl = anime.timeline();

            if (titleRef.current) {
              tl.add(titleRef.current, {
                opacity: [0, 1],
                translateY: [-30, 0],
                duration: 800,
                easing: "out-expo",
              });
            }

            if (descRef.current) {
              tl.add(
                descRef.current,
                {
                  opacity: [0, 1],
                  translateY: [-20, 0],
                  duration: 600,
                  easing: "out-expo",
                },
                "-=400"
              );
            }

            if (cardsRef.current?.children) {
              tl.add(
                cardsRef.current.children,
                {
                  opacity: [0, 1],
                  translateY: [50, 0],
                  duration: 700,
                  delay: anime.stagger(100),
                  easing: "out-expo",
                },
                "-=200"
              );
            }

            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("servicos");
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="servicos" className="bg-gradient-to-b from-white via-teal-50/30 to-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-block rounded-full border border-teal-200 bg-teal-50 px-4 py-1.5">
            <span className="text-sm font-medium text-teal-700">🦷 Nossos Tratamentos</span>
          </div>
          <h2
            ref={titleRef}
            className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl"
            style={{ opacity: 0 }}
          >
            Serviços Odontológicos de{" "}
            <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Excelência
            </span>
          </h2>
          <p
            ref={descRef}
            className="mx-auto max-w-2xl text-xl text-gray-600"
            style={{ opacity: 0 }}
          >
            Tratamentos completos com tecnologia de ponta e equipe especializada para cuidar do seu
            sorriso
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
