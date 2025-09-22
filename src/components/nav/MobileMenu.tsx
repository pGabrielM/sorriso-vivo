'use client';

import { Button } from '../ui';

interface MobileMenuProps {
  isOpen: boolean;
  links: { href: string; label: string }[];
}

export function MobileMenu({ isOpen, links }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
        {links.map((link) => (
          <a key={link.href} href={link.href} className="block px-3 py-2 text-gray-700 hover:text-primary">
            {link.label}
          </a>
        ))}
        <div className="px-3 py-2">
          <Button className="w-full">Agende sua consulta</Button>
        </div>
      </div>
    </div>
  );
}