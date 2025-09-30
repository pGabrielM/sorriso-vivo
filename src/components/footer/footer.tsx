'use client';

import { Separator } from '../ui';
import { motion } from 'framer-motion';
import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  const footerLinks = {
    servicos: [
      { label: 'Limpeza', href: '#services' },
      { label: 'Clareamento', href: '#services' },
      { label: 'Ortodontia', href: '#services' },
      { label: 'Implantes', href: '#services' }
    ],
    empresa: [
      { label: 'Sobre nós', href: '#about' },
      { label: 'Equipe', href: '#team' },
      { label: 'Depoimentos', href: '#testimonials' },
      { label: 'Contato', href: '#contact' }
    ],
    suporte: [
      { label: 'Agendamento', href: '#booking' },
      { label: 'Dúvidas', href: '#faq' },
      { label: 'Política de Privacidade', href: '#privacy' },
      { label: 'Termos de Uso', href: '#terms' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8"
        >
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Sorriso Vivo</h3>
            <p className="text-gray-400 leading-relaxed">
              Cuidando do seu sorriso com dedicação, tecnologia e humanização.
              Sua saúde bucal é nossa prioridade.
            </p>
            <div className="flex items-center space-x-2 text-gray-400">
              <Heart className="w-4 h-4 text-red-500" />
              <span className="text-sm">Feito com amor pelos seus sorrisos</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Serviços</h4>
            <ul className="space-y-2">
              {footerLinks.servicos.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4">Empresa</h4>
            <ul className="space-y-2">
              {footerLinks.empresa.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2, duration: 0.3 }}
                >
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contato</h4>
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm">Rua das Flores, 123<br />Centro, São Paulo - SP</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm">(11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm">contato@sorrisovivo.com</span>
              </div>
            </div>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.4, duration: 0.3 }}
                  className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-lg flex items-center justify-center transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        <Separator className="bg-gray-800 mb-8" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm"
        >
          <p>&copy; 2024 Sorriso Vivo. Todos os direitos reservados.</p>
          <p className="mt-2 md:mt-0">
            Desenvolvido com <Heart className="w-4 h-4 text-red-500 inline mx-1" /> para cuidar do seu sorriso
          </p>
        </motion.div>
      </div>
    </footer>
  );
}