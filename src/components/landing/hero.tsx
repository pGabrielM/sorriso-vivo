"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useRef } from "react";
import anime from "@/lib/anime";

export function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = anime.timeline();

    if (titleRef.current) {
      tl.add(titleRef.current, {
        translateY: [40, 0],
        opacity: [0, 1],
        duration: 800,
        easing: 'out-expo'
      });
    }

    if (descRef.current) {
      tl.add(descRef.current, {
        translateY: [30, 0],
        opacity: [0, 1],
        duration: 700,
        easing: 'out-expo'
      }, '-=400');
    }

    if (buttonsRef.current) {
      tl.add(buttonsRef.current, {
        translateY: [20, 0],
        opacity: [0, 1],
        duration: 600,
        easing: 'out-expo'
      }, '-=300');
    }

    if (imageRef.current) {
      tl.add(imageRef.current, {
        scale: [0.9, 1],
        opacity: [0, 1],
        duration: 800,
        easing: 'out-expo'
      }, '-=600');
    }
  }, []);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-16 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full">
              <span className="text-blue-600 font-semibold text-sm">✨ Odontologia de Excelência</span>
            </div>

            <h1
              ref={titleRef}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight opacity-0"
            >
              Seu sorriso
              <span className="block text-blue-600">mais bonito começa aqui</span>
            </h1>

            <p
              ref={descRef}
              className="text-xl text-gray-600 leading-relaxed opacity-0"
            >
              Cuidamos da saúde e beleza do seu sorriso com tecnologia de ponta,
              profissionais especializados e um atendimento humanizado.
            </p>

            <div
              ref={buttonsRef}
              className="flex flex-col sm:flex-row gap-4 opacity-0"
            >
              <Button size="lg" asChild>
                <a href="#agendamento">
                  Agendar Consulta
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#servicos">
                  Nossos Serviços
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div>
                <div className="text-3xl font-bold text-blue-600">15+</div>
                <div className="text-sm text-gray-600">Anos de Experiência</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">5000+</div>
                <div className="text-sm text-gray-600">Pacientes Atendidos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">98%</div>
                <div className="text-sm text-gray-600">Satisfação</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div ref={imageRef} className="relative h-[500px] lg:h-[600px] opacity-0">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl transform rotate-3"></div>
            <div className="relative h-full rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=1000&fit=crop&q=80"
                alt="Clínica Odontológica Sorriso Vivo"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Floating Cards */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">✓</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Ambiente Moderno</div>
                  <div className="text-sm text-gray-600">Equipamentos de última geração</div>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">😊</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Atendimento Humanizado</div>
                  <div className="text-sm text-gray-600">Conforto e segurança</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
