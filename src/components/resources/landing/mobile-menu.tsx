import Link from 'next/link';
import { Button } from '@/components/commons/button';

interface MobileMenuProps {
  isOpen: boolean;
  navLinks: { href: string; label: string }[];
  onClose: () => void;
}

export function MobileMenu({ isOpen, navLinks, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
          >
            {link.label}
          </Link>
        ))}
        <div className="pt-4">
          <Button asChild className="w-full">
            <Link href="#agendamento" onClick={onClose}>
              Agendar Consulta
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
