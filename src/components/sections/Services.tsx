"use client";

import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Shield, Sparkles, Braces, Drill, Smile, Stethoscope } from 'lucide-react';

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.service-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                (card as HTMLElement).style.opacity = '1';
                (card as HTMLElement).style.transform = 'translateY(0) scale(1)';
              }, index * 150);
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

  const services = [
    {
      icon: Shield,
      title: "Limpeza e Prevenção",
      description: "Procedimentos preventivos para manter sua saúde bucal em dia. Inclui limpeza profissional, aplicação de flúor e orientações de higiene.",
      features: ["Limpeza profissional", "Aplicação de flúor", "Orientação de higiene"],
      color: "from-green-400 to-green-500"
    },
    {
      icon: Sparkles,
      title: "Clareamento Dental",
      description: "Transforme seu sorriso com nossos tratamentos de clareamento seguros e eficazes, devolvendo o branco natural dos seus dentes.",
      features: ["Clareamento a laser", "Moldeiras personalizadas", "Resultados duradouros"],
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: Braces,
      title: "Ortodontia",
      description: "Aparelhos modernos e discretos para alinhar seus dentes. Oferecemos desde aparelhos tradicionais até alinhadores invisíveis.",
      features: ["Aparelhos fixos", "Alinhadores invisíveis", "Ortodontia digital"],
      color: "from-blue-400 to-blue-500"
    },
    {
      icon: Drill,
      title: "Implantes Dentários",
      description: "Soluções definitivas para substituição de dentes perdidos. Recupere sua função mastigatória e estética com implantes de última geração.",
      features: ["Implantes de titânio", "Cirurgia guiada", "Próteses personalizadas"],
      color: "from-purple-400 to-purple-500"
    },
    {
      icon: Smile,
      title: "Estética do Sorriso",
      description: "Procedimentos estéticos para um sorriso perfeito. Facetas, lentes de contato dental e harmonização orofacial.",
      features: ["Facetas de porcelana", "Lentes de contato", "Harmonização facial"],
      color: "from-pink-400 to-pink-500"
    },
    {
      icon: Stethoscope,
      title: "Tratamentos Gerais",
      description: "Atendimento completo para toda a família. Restaurações, extrações, tratamento de canal e emergências odontológicas.",
      features: ["Restaurações", "Endodontia", "Atendimento de urgência"],
      color: "from-indigo-400 to-indigo-500"
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="servicos" ref={sectionRef} className="py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Nossos <span className="text-blue-600">Serviços</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Oferecemos uma gama completa de tratamentos odontológicos com tecnologia 
            de ponta e profissionais especializados para cuidar do seu sorriso.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="service-card opacity-0 transform translate-y-10 scale-90 transition-all duration-800 ease-out bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 group"
              >
                {/* Icon with gradient background */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>

                {/* Service title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>

                {/* Service description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Service features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button 
                  onClick={scrollToContact}
                  variant="outline"
                  className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300"
                >
                  Agendar Consulta
                </Button>
              </div>
            );
          })}
        </div>

        {/* Call to action section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 lg:p-12 text-center text-white">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Não encontrou o que procura?
          </h3>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Oferecemos uma ampla gama de tratamentos odontológicos. 
            Entre em contato conosco para uma avaliação personalizada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              Falar com Especialista
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600"
            >
              Avaliação Gratuita
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;