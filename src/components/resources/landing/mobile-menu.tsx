import Link from "next/link";
import { Button } from "@/components/commons/button";

interface MobileMenuProps {
  isOpen: boolean;
  navLinks: { href: string; label: string }[];
  onClose: () => void;
}

export function MobileMenu({ isOpen, navLinks, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden">
      <div className="space-y-1 border-t border-teal-100 bg-gradient-to-b from-white to-teal-50/30 px-2 pt-2 pb-3 shadow-lg">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 transition-colors hover:bg-teal-50 hover:text-teal-700"
          >
            {link.label}
          </Link>
        ))}
        <div className="pt-4">
          <Button
            asChild
            className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
          >
            <Link href="#agendamento" onClick={onClose}>
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
              Agendar Consulta
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
