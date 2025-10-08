'use client';

import { services } from '@/utils/landing-helper';
import { ServiceCard } from './service-card';
import { useEffect, useRef } from 'react';
import anime from '@/lib/anime';

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
                easing: 'out-expo',
              });
            }

            if (descRef.current) {
              tl.add(descRef.current, {
                opacity: [0, 1],
                translateY: [-20, 0],
                duration: 600,
                easing: 'out-expo',
              }, '-=400');
            }

            if (cardsRef.current?.children) {
              tl.add(cardsRef.current.children, {
                opacity: [0, 1],
                translateY: [50, 0],
                duration: 700,
                delay: anime.stagger(100),
                easing: 'out-expo',
              }, '-=200');
            }

            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('servicos');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 opacity-0"
          >
            Nossos Serviços
          </h2>
          <p
            ref={descRef}
            className="text-xl text-gray-600 max-w-2xl mx-auto opacity-0"
          >
            Oferecemos uma ampla gama de tratamentos odontológicos com tecnologia de ponta
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
