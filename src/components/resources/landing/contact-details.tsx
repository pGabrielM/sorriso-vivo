"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/commons/card";
import { contactInfo } from "@/utils/landing-helper";
import { useTranslations } from "next-intl";

export function ContactDetails() {
  const t = useTranslations("contact");

  const contactDetails = [
    {
      icon: "📍",
      title: t("info.address"),
      details: `${contactInfo.address.full}`,
      link: contactInfo.mapUrl,
    },
    {
      icon: "📞",
      title: t("info.phone"),
      details: `${contactInfo.contact.phone}\n${contactInfo.contact.whatsapp} (WhatsApp)`,
      link: `https://wa.me/554198765432`,
    },
    {
      icon: "📧",
      title: t("info.email"),
      details: contactInfo.contact.email,
      link: `mailto:${contactInfo.contact.email}`,
    },
    {
      icon: "🕐",
      title: t("info.hours"),
      details: `${contactInfo.hours.weekdays}\n${contactInfo.hours.saturday}\n${contactInfo.hours.sunday}`,
    },
  ];

  return (
    <div className="space-y-6">
      <Card className="border-teal-100">
        <CardHeader>
          <CardTitle className="text-gray-900">{t("info.title")}</CardTitle>
          <CardDescription>{t("subtitle")}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {contactDetails.map((item, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-teal-100 text-2xl">
                {item.icon}
              </div>
              <div className="flex-1">
                <h3 className="mb-1 font-semibold text-gray-900">{item.title}</h3>
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm whitespace-pre-line text-teal-700 transition-colors hover:text-teal-800 hover:underline"
                  >
                    {item.details}
                  </a>
                ) : (
                  <p className="text-sm whitespace-pre-line text-gray-600">{item.details}</p>
                )}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="border-none bg-gradient-to-br from-teal-600 to-cyan-600 text-white shadow-lg">
        <CardContent className="pt-6">
          <h3 className="mb-2 text-xl font-bold">Pronto para transformar seu sorriso?</h3>
          <p className="mb-4 text-teal-50">
            Agende sua avaliação gratuita e descubra como nossa equipe pode criar o sorriso dos seus
            sonhos!
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#agendamento"
              className="inline-block rounded-lg bg-white px-6 py-3 text-center font-semibold text-teal-700 transition-all hover:bg-teal-50 hover:shadow-md"
            >
              Agendar Avaliação Gratuita
            </a>
            <a
              href="https://wa.me/554198765432?text=Olá! Gostaria de agendar uma consulta na Sorriso Vivo."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg border-2 border-white px-6 py-3 text-center font-semibold text-white transition-all hover:bg-white hover:text-teal-700"
            >
              WhatsApp
            </a>
          </div>
        </CardContent>
      </Card>

      {/* Mapa */}
      <Card className="overflow-hidden border-teal-100">
        <CardContent className="p-0">
          <div className="relative h-64 w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.2156!2d-49.2768!3d-25.4423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDI2JzMyLjMiUyA0OcKwMTYnMzYuNSJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Sorriso Vivo - Batel, Curitiba"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
