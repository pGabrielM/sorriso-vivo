'use client';

import { useState } from 'react';
import { Button } from '../ui';
import { Menu, X } from 'lucide-react';

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
    <nav className="bg-white shadow-lg border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-primary">Sorriso Vivo</h1>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
            ))}
            <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              Agende sua consulta
            </Button>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary rounded-md p-1"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="px-3 py-2">
              <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                Agende sua consulta
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}