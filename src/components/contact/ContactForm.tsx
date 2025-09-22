'use client';

import { useState } from 'react';
import { Button, Input, Card } from '../ui';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
    // Mock submission
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Card className="p-8 text-center">
        <h3 className="text-xl font-bold mb-4">Mensagem Enviada!</h3>
        <p className="text-gray-600">Obrigado pelo contato. Responderemos em breve.</p>
        <Button onClick={() => setSubmitted(false)} className="mt-4">Enviar outra mensagem</Button>
      </Card>
    );
  }

  return (
    <Card className="p-8">
      <h3 className="text-xl font-bold mb-6">Envie uma Mensagem</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="contact-name" className="block text-sm font-medium mb-1">Nome</label>
          <Input
            id="contact-name"
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            aria-required="true"
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="block text-sm font-medium mb-1">Email</label>
          <Input
            id="contact-email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            aria-required="true"
          />
        </div>
        <div>
          <label htmlFor="contact-message" className="block text-sm font-medium mb-1">Mensagem</label>
          <textarea
            id="contact-message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            required
            aria-required="true"
          />
        </div>
        <Button type="submit" className="w-full">Enviar</Button>
      </form>
    </Card>
  );
}