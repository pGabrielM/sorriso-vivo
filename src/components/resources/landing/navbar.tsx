"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/commons/button";
import { MobileMenu } from "./mobile-menu";
import anime from "@/lib/anime";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Animate navbar on mount
    anime({
      targets: ".navbar",
      translateY: [-20, 0],
      opacity: [0, 1],
      duration: 800,
      easing: "out-expo",
    });

    // Handle scroll for active section and navbar style
    const handleScroll = () => {
      const sections = ["inicio", "servicos", "equipe", "depoimentos", "agendamento", "contato"];
      const scrollPosition = window.scrollY + 100;

      // Update navbar style based on scroll
      setIsScrolled(window.scrollY > 10);

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
    <nav
      className={`navbar fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-white shadow-lg backdrop-blur-md"
          : "bg-white/95 shadow-sm backdrop-blur-sm"
        }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 shadow-md transition-transform group-hover:scale-110">
              <span className="text-2xl">😁</span>
            </div>
            <div className="flex flex-col">
              <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-xl font-bold text-transparent">
                Sorriso Vivo
              </span>
              <span className="-mt-1 text-xs text-gray-500">Odontologia Moderna</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${activeSection === link.href.slice(1)
                    ? "bg-teal-50 text-teal-700 shadow-sm"
                    : "text-gray-700 hover:bg-teal-50/50 hover:text-teal-600"
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              className="bg-teal-600 text-white shadow-md transition-all hover:bg-teal-700 hover:shadow-lg"
              asChild
            >
              <Link href="#agendamento">
                <span className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  Agendar Consulta
                </span>
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-gray-700 transition-colors hover:bg-teal-50 hover:text-teal-700 md:hidden"
            aria-label="Menu"
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
