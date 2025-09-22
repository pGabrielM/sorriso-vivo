"use client";

import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Smile, ShieldCheck, Users } from 'lucide-react';

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Using CSS animations instead of anime.js for better compatibility
    const elements = [iconRef.current, titleRef.current, subtitleRef.current, buttonsRef.current];
    
    elements.forEach((element, index) => {
      if (element) {
        setTimeout(() => {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }, index * 200);
      }
    });
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Animated Icon */}
            <div 
              ref={iconRef} 
              className="opacity-0 transform translate-y-4 transition-all duration-1000 ease-out"
              style={{ transitionDelay: '0ms' }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full shadow-lg animate-pulse">
                <Smile className="h-8 w-8 text-white" />
              </div>
            </div>

            {/* Main Headline */}
            <h1 
              ref={titleRef}
              className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight opacity-0 transform translate-y-4 transition-all duration-1000 ease-out"
              style={{ transitionDelay: '200ms' }}
            >
              Transformando sorrisos,{" "}
              <span className="text-blue-600">cuidando de você</span>
            </h1>

            {/* Subheadline */}
            <p 
              ref={subtitleRef}
              className="text-lg lg:text-xl text-gray-600 leading-relaxed opacity-0 transform translate-y-4 transition-all duration-1000 ease-out max-w-2xl"
              style={{ transitionDelay: '400ms' }}
            >
              Com mais de 10 anos de experiência, oferecemos tratamentos odontológicos 
              de excelência com tecnologia moderna e atendimento humanizado. 
              Seu sorriso merece o melhor cuidado.
            </p>

            {/* CTA Buttons */}
            <div 
              ref={buttonsRef} 
              className="flex flex-col sm:flex-row gap-4 opacity-0 transform translate-y-4 transition-all duration-1000 ease-out"
              style={{ transitionDelay: '600ms' }}
            >
              <Button 
                size="lg"
                onClick={() => scrollToSection('#contato')}
                className="bg-blue-600 hover:bg-blue-700 text-white transform hover:scale-105 transition-transform"
              >
                Agendar Consulta
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('#servicos')}
                className="border-blue-600 text-blue-600 hover:bg-blue-50 transform hover:scale-105 transition-transform"
              >
                Conheça os Serviços
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 pt-8">
              <div className="flex items-center space-x-3">
                <ShieldCheck className="h-5 w-5 text-green-600" />
                <span className="text-sm text-gray-600">+10 anos de experiência</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="h-5 w-5 text-blue-600" />
                <span className="text-sm text-gray-600">+5000 pacientes atendidos</span>
              </div>
            </div>
          </div>

          {/* Hero Image/Illustration */}
          <div className="relative">
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 lg:p-12 transform hover:scale-105 transition-transform duration-300">
              <div className="space-y-6">
                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Agende sua consulta hoje
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Avaliação completa gratuita para novos pacientes
                  </p>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-green-600 font-medium">
                      Disponível agora
                    </span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-sm text-gray-600">Limpeza e prevenção</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-sm text-gray-600">Clareamento dental</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-sm text-gray-600">Ortodontia moderna</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 rounded-2xl transform rotate-3 scale-105 opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;