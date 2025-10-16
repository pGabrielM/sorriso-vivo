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
import { useTranslations } from "next-intl";

export function ContactForm() {
  const t = useTranslations("contact.form");
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
    alert(t("success"));
  };

  return (
    <Card className="h-fit border-teal-100 shadow-xl">
      <CardHeader className="border-b border-teal-50 bg-gradient-to-r from-teal-50 to-cyan-50">
        <CardTitle className="text-xl text-gray-900">{t("title")}</CardTitle>
        <CardDescription className="text-base text-gray-600">{t("subtitle")}</CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">{t("name")} *</label>
            <Input
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder={t("namePlaceholder")}
              className="border-teal-200 focus:ring-teal-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">{t("email")} *</label>
            <Input
              required
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder={t("emailPlaceholder")}
              className="border-teal-200 focus:ring-teal-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">{t("phone")} *</label>
            <Input
              required
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder={t("phonePlaceholder")}
              className="border-teal-200 focus:ring-teal-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">{t("subject")} *</label>
            <Input
              required
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              placeholder={t("subjectPlaceholder")}
              className="border-teal-200 focus:ring-teal-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">{t("message")} *</label>
            <textarea
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder={t("messagePlaceholder")}
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
            {t("submit")}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
