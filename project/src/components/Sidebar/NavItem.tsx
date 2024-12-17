import React from 'react';
import { LucideIcon } from 'lucide-react';

interface NavItemProps {
  href: string;
  icon: LucideIcon;
  children: React.ReactNode;
}

export function NavItem({ href, icon: Icon, children }: NavItemProps) {
  return (
    <li>
      <a
        href={href}
        className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100 text-gray-700 transition-colors"
      >
        <Icon className="w-5 h-5" />
        <span>{children}</span>
      </a>
    </li>
  );
}