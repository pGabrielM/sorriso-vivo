"use client";

import Link from "next/link";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { useTranslations } from "next-intl";
import { contactInfo } from "@/utils/landing-helper";

export function Footer() {
  const t = useTranslations("footer");
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4 flex items-center space-x-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 shadow-lg">
                <span className="text-2xl">😁</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white">Sorriso Vivo</span>
                <span className="text-xs text-teal-400">{t("tagline")}</span>
              </div>
            </div>
            <p className="mb-6 max-w-md leading-relaxed text-gray-400">{t("description")}</p>
            <div className="flex space-x-4">
              <a
                href={`https://instagram.com/${contactInfo.social.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 text-gray-400 transition-all hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#E1306C] hover:to-[#F77737] hover:text-white"
                aria-label="Instagram"
              >
                <FaInstagram className="h-5 w-5" />
              </a>
              <a
                href={`https://facebook.com/${contactInfo.social.facebook}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 text-gray-400 transition-all hover:bg-[#1877F2] hover:text-white"
                aria-label="Facebook"
              >
                <FaFacebook className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/554198765432"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 text-gray-400 transition-all hover:bg-[#25D366] hover:text-white"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">{t("navigation")}</h3>
            <ul className="space-y-2.5">
              {[
                { href: "#inicio", label: t("links.home") },
                { href: "#servicos", label: t("links.services") },
                { href: "#equipe", label: t("links.team") },
                { href: "#depoimentos", label: t("links.testimonials") },
                { href: "#agendamento", label: t("links.booking") },
                { href: "#contato", label: t("links.contact") },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 transition-colors hover:text-teal-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">{t("contactTitle")}</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-teal-400">📍</span>
                <span className="text-gray-400">
                  {contactInfo.address.street}
                  <br />
                  {contactInfo.address.neighborhood}, {contactInfo.address.city} -{" "}
                  {contactInfo.address.state}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-teal-400">📞</span>
                <a
                  href={`tel:${contactInfo.contact.phone}`}
                  className="text-gray-400 transition-colors hover:text-teal-400"
                >
                  {contactInfo.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-teal-400">💬</span>
                <a
                  href="https://wa.me/554198765432"
                  className="text-gray-400 transition-colors hover:text-teal-400"
                >
                  {contactInfo.contact.whatsapp}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-teal-400">📧</span>
                <a
                  href={`mailto:${contactInfo.contact.email}`}
                  className="text-gray-400 transition-colors hover:text-teal-400"
                >
                  {contactInfo.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Horário de Atendimento */}
        <div className="mt-8 border-t border-gray-800 pt-8">
          <div className="text-center">
            <h4 className="mb-2 font-semibold text-white">{t("hoursTitle")}</h4>
            <div className="flex flex-col justify-center gap-4 text-sm text-gray-400 sm:flex-row">
              <span>{contactInfo.hours.weekdays}</span>
              <span className="hidden sm:inline">|</span>
              <span>{contactInfo.hours.saturday}</span>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} {contactInfo.clinic} - {t("copyright")}
          </p>
          <p className="mt-2 text-xs">{t("legalInfo")}</p>
        </div>
      </div>
    </footer>
  );
}
