'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

export function ContactDetails() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Endereço',
      content: 'Rua das Flores, 123 - Centro',
      subcontent: 'São Paulo - SP, 01234-567'
    },
    {
      icon: Phone,
      title: 'Telefone',
      content: '(11) 99999-9999',
      subcontent: 'WhatsApp disponível'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'contato@sorrisovivo.com',
      subcontent: 'Resposta em até 24h'
    },
    {
      icon: Clock,
      title: 'Horário de Funcionamento',
      content: 'Segunda a Sexta: 8h às 18h',
      subcontent: 'Sábado: 8h às 12h'
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Informações de Contato</h3>
        <div className="space-y-6">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <info.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                <p className="text-gray-700 font-medium">{info.content}</p>
                <p className="text-gray-600 text-sm">{info.subcontent}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-semibold text-gray-900 mb-4">Redes Sociais</h4>
        <div className="flex space-x-4">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.5, duration: 0.3 }}
              className="w-12 h-12 bg-primary/10 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-colors group"
              aria-label={social.label}
            >
              <social.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}