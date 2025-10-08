'use client';

import { useState } from 'react';
import { Button } from '@/components/commons/button';
import { Input } from '@/components/commons/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/commons/card';
import type { IContactData } from '@/types/landings';

export function ContactForm() {
  const [formData, setFormData] = useState<IContactData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact data:', formData);
    alert('Mensagem enviada com sucesso!');
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Envie uma Mensagem</CardTitle>
        <CardDescription>Responderemos o mais breve possível</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Nome *</label>
            <Input
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Seu nome"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
            <Input
              required
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="seu@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Telefone *</label>
            <Input
              required
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="(00) 00000-0000"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Assunto *</label>
            <Input
              required
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              placeholder="Assunto da mensagem"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Mensagem *</label>
            <textarea
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Sua mensagem..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[120px]"
            />
          </div>

          <Button type="submit" className="w-full">
            Enviar Mensagem
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
