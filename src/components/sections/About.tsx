"use client";

import React, { useEffect, useRef } from 'react';
import { Award, Users, Heart, Zap } from 'lucide-react';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.about-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                (card as HTMLElement).style.opacity = '1';
                (card as HTMLElement).style.transform = 'translateY(0) scale(1)';
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const highlights = [
    {
      icon: Award,
      title: "+10 anos de experiência",
      description: "Mais de uma década dedicada ao cuidado e à saúde bucal",
      color: "text-yellow-600 bg-yellow-50"
    },
    {
      icon: Zap,
      title: "Tecnologia moderna",
      description: "Equipamentos de última geração para tratamentos precisos",
      color: "text-blue-600 bg-blue-50"
    },
    {
      icon: Heart,
      title: "Atendimento humanizado",
      description: "Cuidado personalizado e atenção especial a cada paciente",
      color: "text-red-600 bg-red-50"
    },
    {
      icon: Users,
      title: "+5000 pacientes",
      description: "Milhares de sorrisos transformados com excelência",
      color: "text-green-600 bg-green-50"
    }
  ];

  return (
    <section id="sobre" ref={sectionRef} className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Sobre a <span className="text-blue-600">Sorriso Vivo</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Somos uma clínica odontológica comprometida em proporcionar sorrisos saudáveis 
            e confiantes. Nossa missão é oferecer tratamentos de excelência com a mais 
            avançada tecnologia e o cuidado humano que você merece.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="about-card opacity-0 transform translate-y-8 scale-90 transition-all duration-800 ease-out group bg-gray-50 p-8 rounded-2xl hover:shadow-xl hover:-translate-y-2"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6 ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Additional content */}
        <div className="mt-20 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
              Nossa História e Compromisso
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Fundada com o propósito de transformar vidas através de sorrisos saudáveis, 
              a Sorriso Vivo nasceu do sonho de oferecer cuidados odontológicos de excelência 
              com um toque humano especial.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Ao longo dos anos, investimos constantemente em tecnologia de ponta, 
              capacitação profissional e métodos inovadores para garantir que cada 
              paciente receba o melhor tratamento possível.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-blue-600">98%</div>
                <div className="text-sm text-gray-600">Satisfação dos pacientes</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-blue-600">15+</div>
                <div className="text-sm text-gray-600">Especialidades oferecidas</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-blue-600">24h</div>
                <div className="text-sm text-gray-600">Suporte de emergência</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white">
              <h4 className="text-xl font-bold mb-4">Nossa Missão</h4>
              <p className="mb-6 opacity-90">
                Proporcionar cuidados odontológicos excepcionais, combinando 
                tecnologia avançada com atendimento humanizado para transformar 
                sorrisos e melhorar a qualidade de vida de nossos pacientes.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-sm opacity-90">Excelência em todos os tratamentos</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-sm opacity-90">Cuidado individualizado</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-sm opacity-90">Ambiente acolhedor e seguro</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;