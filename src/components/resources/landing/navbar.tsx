"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/commons/button";
import { MobileMenu } from "./mobile-menu";
import anime from "@/lib/anime";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    // Animate navbar on mount
    anime({
      targets: ".navbar",
      translateY: [-20, 0],
      opacity: [0, 1],
      duration: 800,
      easing: "out-expo",
    });

    // Handle scroll for active section
    const handleScroll = () => {
      const sections = ["inicio", "servicos", "equipe", "depoimentos", "agendamento", "contato"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#inicio", label: "Início" },
    { href: "#servicos", label: "Serviços" },
    { href: "#equipe", label: "Equipe" },
    { href: "#depoimentos", label: "Depoimentos" },
    { href: "#agendamento", label: "Agendamento" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <nav className="navbar fixed top-0 right-0 left-0 z-50 bg-white/95 shadow-sm backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-600">
              <span className="text-2xl">😁</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Sorriso Vivo</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  activeSection === link.href.slice(1)
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild>
              <Link href="#agendamento">Agendar Consulta</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-md p-2 text-gray-700 hover:bg-gray-100 md:hidden"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isOpen} navLinks={navLinks} onClose={() => setIsOpen(false)} />
    </nav>
  );
}
