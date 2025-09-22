"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const testimonials = [
    {
      name: "Maria S.",
      treatment: "Clareamento Dental",
      text: "Fiquei impressionada com o resultado do clareamento! A equipe da Sorriso Vivo é extremamente profissional e cuidadosa. Meu sorriso nunca esteve tão bonito!",
      rating: 5,
      photo: "MS"
    },
    {
      name: "João P.",
      treatment: "Implante Dentário",
      text: "Após anos com prótese móvel, decidi fazer implante. O Dr. Ricardo foi excepcional, muito atencioso e explicou todo o processo. Hoje me sinto muito mais confiante!",
      rating: 5,
      photo: "JP"
    },
    {
      name: "Ana L.",
      treatment: "Ortodontia",
      text: "O tratamento ortodôntico superou todas as minhas expectativas. Dra. Ana Carolina é uma excelente profissional. O atendimento é humanizado e os resultados fantásticos!",
      rating: 5,
      photo: "AL"
    },
    {
      name: "Carlos R.",
      treatment: "Facetas de Porcelana",
      text: "As facetas transformaram completamente meu sorriso! O trabalho da Dra. Fernanda é impecável. Recomendo a Sorriso Vivo para quem busca excelência.",
      rating: 5,
      photo: "CR"
    },
    {
      name: "Lucia M.",
      treatment: "Limpeza e Prevenção",
      text: "Sempre tive medo de dentista, mas aqui me senti acolhida desde o primeiro dia. A equipe é muito carinhosa e o atendimento é excelente!",
      rating: 5,
      photo: "LM"
    },
    {
      name: "Pedro H.",
      treatment: "Tratamento de Canal",
      text: "Precisei fazer um tratamento de canal e o Dr. Carlos foi excepcional. Sem dor, muito profissionalismo. Superou todas as minhas expectativas!",
      rating: 5,
      photo: "PH"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            const cards = entry.target.querySelectorAll('.testimonial-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                (card as HTMLElement).style.opacity = '1';
                (card as HTMLElement).style.transform = 'translateY(0)';
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
  }, [isVisible]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="depoimentos" ref={sectionRef} className="py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Sorrisos que <span className="text-blue-600">falam por si</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Veja o que nossos pacientes dizem sobre os tratamentos e o atendimento 
            que receberam na Sorriso Vivo. Sua satisfação é nossa maior recompensa.
          </p>
        </div>

        {/* Main Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            <div className="flex items-start space-x-4 mb-6">
              <Quote className="h-8 w-8 text-blue-600 mt-1 flex-shrink-0" />
              <div className="flex-1">
                <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-6">
                  &ldquo;{testimonials[currentIndex].text}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">
                        {testimonials[currentIndex].photo}
                      </span>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {testimonials[currentIndex].treatment}
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-1">
                    {renderStars(testimonials[currentIndex].rating)}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Additional testimonials grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card opacity-0 transform translate-y-8 transition-all duration-800 ease-out bg-white rounded-xl p-6 shadow-lg hover:shadow-xl"
            >
              <div className="flex space-x-1 mb-4">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                &ldquo;{testimonial.text.length > 120 
                  ? testimonial.text.substring(0, 120) + '...' 
                  : testimonial.text}&rdquo;
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">
                    {testimonial.photo}
                  </span>
                </div>
                <div>
                  <div className="font-medium text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.treatment}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 bg-white rounded-2xl p-8 lg:p-12">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">4.9/5</div>
              <div className="text-sm text-gray-600">Avaliação média</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-sm text-gray-600">Avaliações positivas</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-sm text-gray-600">Pacientes satisfeitos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-sm text-gray-600">Recomendação</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;