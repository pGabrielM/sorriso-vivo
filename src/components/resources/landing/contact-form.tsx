"use client";

import { useState } from "react";
import { Button } from "@/components/commons/button";
import { Input } from "@/components/commons/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/commons/card";
import type { IContactData } from "@/types/landings";

export function ContactForm() {
  const [formData, setFormData] = useState<IContactData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.warn("Contact data:", formData);
    alert("Mensagem enviada com sucesso!");
  };

  return (
    <Card className="border-teal-100 shadow-xl">
      <CardHeader className="border-b border-teal-50 bg-gradient-to-r from-teal-50 to-cyan-50">
        <CardTitle className="text-xl text-gray-900">Envie uma Mensagem</CardTitle>
        <CardDescription className="text-base text-gray-600">
          Responderemos o mais breve possível
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">Nome *</label>
            <Input
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Seu nome"
              className="border-teal-200 focus:ring-teal-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">Email *</label>
            <Input
              required
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="seu@email.com"
              className="border-teal-200 focus:ring-teal-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">Telefone *</label>
            <Input
              required
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="(41) 99999-9999"
              className="border-teal-200 focus:ring-teal-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">Assunto *</label>
            <Input
              required
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              placeholder="Assunto da mensagem"
              className="border-teal-200 focus:ring-teal-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">Mensagem *</label>
            <textarea
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Sua mensagem..."
              className="min-h-[120px] w-full rounded-md border border-teal-200 px-3 py-2 transition-colors focus:border-teal-500 focus:ring-2 focus:ring-teal-500 focus:outline-none"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
          >
            <svg
              className="mr-2 h-5 w-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Enviar Mensagem
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
