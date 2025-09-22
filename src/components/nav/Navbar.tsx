'use client';

import { useState } from 'react';
import { Button } from '../ui';
import { MobileMenu } from './MobileMenu';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: '#services', label: 'Serviços' },
    { href: '#team', label: 'Equipe' },
    { href: '#testimonials', label: 'Depoimentos' },
    { href: '#booking', label: 'Agendamento' },
    { href: '#contact', label: 'Contato' }
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-primary">Sorriso Vivo</h1>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="text-gray-700 hover:text-primary transition-colors">
                {link.label}
              </a>
            ))}
            <Button>Agende sua consulta</Button>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      <MobileMenu isOpen={isOpen} links={links} />
    </nav>
  );
}