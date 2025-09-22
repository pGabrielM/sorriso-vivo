"use client";

import React, { useEffect, useRef } from 'react';
import { Linkedin, Mail } from 'lucide-react';

const Team = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.team-card');
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

  const teamMembers = [
    {
      name: "Dr. Ana Carolina Silva",
      specialty: "Diretora Clínica e Ortodontista",
      bio: "Especialista em Ortodontia com 15 anos de experiência. Mestre em Ciências Odontológicas pela USP.",
      image: "/api/placeholder/300/300",
      email: "ana.silva@sorrisovivo.com.br",
      linkedin: "#"
    },
    {
      name: "Dr. Ricardo Santos",
      specialty: "Implantodontista",
      bio: "Especialista em Implantodontia e Cirurgia Oral. Pioneiro em técnicas de implante imediato.",
      image: "/api/placeholder/300/300",
      email: "ricardo.santos@sorrisovivo.com.br",
      linkedin: "#"
    },
    {
      name: "Dra. Fernanda Costa",
      specialty: "Dentística e Estética",
      bio: "Especialista em Dentística Restauradora e Estética do Sorriso. Referência em facetas e laminados.",
      image: "/api/placeholder/300/300",
      email: "fernanda.costa@sorrisovivo.com.br",
      linkedin: "#"
    },
    {
      name: "Dr. Carlos Mendes",
      specialty: "Endodontista",
      bio: "Especialista em Endodontia com foco em tratamentos de canal complexos e retratamentos.",
      image: "/api/placeholder/300/300",
      email: "carlos.mendes@sorrisovivo.com.br",
      linkedin: "#"
    }
  ];

  return (
    <section id="equipe" ref={sectionRef} className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Conheça Nossa <span className="text-blue-600">Equipe</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Profissionais altamente qualificados e especializados, 
            comprometidos em oferecer o melhor cuidado odontológico para você e sua família.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="team-card opacity-0 transform translate-y-8 scale-95 transition-all duration-800 ease-out bg-gray-50 rounded-2xl overflow-hidden group hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Photo placeholder with gradient */}
              <div className="relative h-64 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/40 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="flex space-x-4">
                    <a
                      href={`mailto:${member.email}`}
                      className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                    >
                      <Mail className="h-5 w-5 text-blue-600" />
                    </a>
                    <a
                      href={member.linkedin}
                      className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                    >
                      <Linkedin className="h-5 w-5 text-blue-600" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-3">
                  {member.specialty}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional info section */}
        <div className="mt-20 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                Excelência Profissional
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <p className="text-gray-600">
                    Todos os nossos profissionais são especialistas registrados no 
                    Conselho Regional de Odontologia (CRO)
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <p className="text-gray-600">
                    Educação continuada e participação regular em congressos 
                    e cursos de atualização
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <p className="text-gray-600">
                    Compromisso com as melhores práticas e protocolos de segurança
                  </p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">4+</div>
                <div className="text-sm text-gray-600">Especialistas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-sm text-gray-600">Anos de experiência combinada</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-sm text-gray-600">Especializações</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-sm text-gray-600">Dedicação</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;