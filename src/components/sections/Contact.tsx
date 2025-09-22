"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.contact-item');
            items.forEach((item, index) => {
              setTimeout(() => {
                (item as HTMLElement).style.opacity = '1';
                (item as HTMLElement).style.transform = 'translateY(0)';
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      details: ["Rua das Flores, 123", "Centro - São Paulo/SP", "CEP: 01234-567"],
      color: "text-blue-600 bg-blue-50"
    },
    {
      icon: Phone,
      title: "Telefone",
      details: ["(11) 3456-7890", "(11) 98765-4321", "WhatsApp disponível"],
      color: "text-green-600 bg-green-50"
    },
    {
      icon: Mail,
      title: "E-mail",
      details: ["contato@sorrisovivo.com.br", "agendamento@sorrisovivo.com.br", "emergencia@sorrisovivo.com.br"],
      color: "text-purple-600 bg-purple-50"
    },
    {
      icon: Clock,
      title: "Horário",
      details: ["Segunda a Sexta: 8h às 18h", "Sábados: 8h às 12h", "Emergências: 24h"],
      color: "text-orange-600 bg-orange-50"
    }
  ];

  return (
    <section id="contato" ref={sectionRef} className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Agende sua <span className="text-blue-600">Consulta</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Estamos prontos para cuidar do seu sorriso. Entre em contato conosco 
            e agende sua consulta. Nossa equipe está sempre disposta a ajudar.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="contact-item opacity-0 transform translate-y-8 transition-all duration-800 ease-out">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Envie sua Solicitação
              </h3>
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nome completo *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Seu nome completo"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      E-mail *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="seu@email.com"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefone
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(11) 99999-9999"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Mensagem
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Conte-nos sobre seus objetivos e como podemos ajudar..."
                      className="w-full"
                      rows={4}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                    Enviar Solicitação
                  </Button>
                </form>
              ) : (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    Solicitação Enviada!
                  </h4>
                  <p className="text-gray-600">
                    Recebemos sua mensagem e entraremos em contato em breve.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div key={index} className="contact-item opacity-0 transform translate-y-8 transition-all duration-800 ease-out flex space-x-4">
                  <div className={`flex-shrink-0 w-14 h-14 rounded-xl ${info.color} flex items-center justify-center`}>
                    <IconComponent className="h-7 w-7" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      {info.title}
                    </h4>
                    <div className="space-y-1">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-600">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16 contact-item opacity-0 transform translate-y-8 transition-all duration-800 ease-out">
          <div className="bg-gray-100 rounded-2xl p-4 lg:p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Nossa Localização
            </h3>
            {/* Mock Google Maps */}
            <div className="bg-gray-300 rounded-xl h-64 lg:h-80 flex items-center justify-center">
              <div className="text-center text-gray-600">
                <MapPin className="h-12 w-12 mx-auto mb-4" />
                <p className="text-lg font-medium">Google Maps</p>
                <p className="text-sm">Rua das Flores, 123 - Centro - São Paulo/SP</p>
                <p className="text-xs mt-2 opacity-75">
                  (Em uma implementação real, aqui seria integrado o Google Maps)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Emergências Odontológicas</h3>
          <p className="text-lg opacity-90 mb-6">
            Precisando de atendimento urgente? Estamos disponíveis 24 horas para emergências.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-red-600 hover:bg-gray-100"
            >
              Ligar: (11) 99999-9999
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-red-600"
            >
              WhatsApp Emergência
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;