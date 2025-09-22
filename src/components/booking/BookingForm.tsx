'use client';

import { useState } from 'react';
import { Button, Input, Card } from '../ui';
import { services } from '../../data/services';
import { BookingData } from '../../lib/types';

export function BookingForm() {
  const [formData, setFormData] = useState<BookingData>({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation
    if (!formData.name || !formData.phone || !formData.service || !formData.date || !formData.time) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
    // Mock submission
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="booking" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8 text-center max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-4">Agendamento Enviado!</h2>
            <p className="text-gray-600">Entraremos em contato em breve para confirmar sua consulta.</p>
            <Button onClick={() => setSubmitted(false)} className="mt-4">Agendar outro</Button>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Agende sua Consulta</h2>
          <p className="text-xl text-gray-600">Preencha o formulário abaixo para marcar sua visita.</p>
        </div>
        <Card className="p-8 max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">Nome</label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                aria-required="true"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1">Telefone</label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                aria-required="true"
              />
            </div>
            <div>
              <label htmlFor="service" className="block text-sm font-medium mb-1">Serviço</label>
              <select
                id="service"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                required
                aria-required="true"
              >
                <option value="">Selecione um serviço</option>
                {services.map((service) => (
                  <option key={service.id} value={service.title}>{service.title}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="date" className="block text-sm font-medium mb-1">Data</label>
              <Input
                id="date"
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                required
                aria-required="true"
              />
            </div>
            <div>
              <label htmlFor="time" className="block text-sm font-medium mb-1">Horário</label>
              <Input
                id="time"
                type="time"
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                required
                aria-required="true"
              />
            </div>
            <Button type="submit" className="w-full">Agendar</Button>
          </form>
        </Card>
      </div>
    </section>
  );
}