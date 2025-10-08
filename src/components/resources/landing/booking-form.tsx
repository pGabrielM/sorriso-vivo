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
import { services } from "@/utils/landing-helper";
import type { IBookingData } from "@/types/landings";

export function BookingForm() {
  const [formData, setFormData] = useState<IBookingData>({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.warn("Booking data:", formData);
    alert("Agendamento enviado com sucesso! Entraremos em contato em breve.");
  };

  return (
    <section id="agendamento" className="bg-gradient-to-br from-teal-50 via-white to-cyan-50 py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-block rounded-full border border-teal-200 bg-teal-50 px-4 py-1.5">
            <span className="text-sm font-medium text-teal-700">📅 Agende Agora</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Marque Sua{" "}
            <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Consulta
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Preencha o formulário e entraremos em contato para confirmar
          </p>
        </div>

        <Card className="border-teal-100 shadow-xl">
          <CardHeader className="border-b border-teal-50 bg-gradient-to-r from-teal-50 to-cyan-50">
            <CardTitle className="text-2xl text-gray-900">Dados para Agendamento</CardTitle>
            <CardDescription className="text-base text-gray-600">
              Informe seus dados e o serviço desejado
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Nome Completo *
                  </label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Seu nome"
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
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Serviço Desejado *
                  </label>
                  <select
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full rounded-md border border-teal-200 px-3 py-2 transition-colors focus:border-teal-500 focus:ring-2 focus:ring-teal-500 focus:outline-none"
                  >
                    <option value="">Selecione um serviço</option>
                    {services.map((service, index) => (
                      <option key={index} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Data Preferida *
                  </label>
                  <Input
                    required
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="border-teal-200 focus:ring-teal-500"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Horário Preferido *
                  </label>
                  <Input
                    required
                    type="time"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="border-teal-200 focus:ring-teal-500"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Mensagem (Opcional)
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Conte-nos mais sobre sua necessidade..."
                  className="min-h-[100px] w-full rounded-md border border-teal-200 px-3 py-2 transition-colors focus:border-teal-500 focus:ring-2 focus:ring-teal-500 focus:outline-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
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
                  <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Confirmar Agendamento
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
