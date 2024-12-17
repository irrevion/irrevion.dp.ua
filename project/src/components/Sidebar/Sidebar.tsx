import React from 'react';
import { X, LayoutDashboard, FolderKanban, CheckSquare, Settings } from 'lucide-react';
import { NavItem } from './NavItem';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const navItems = [
  { href: '#', icon: LayoutDashboard, label: 'Dashboard' },
  { href: '#', icon: FolderKanban, label: 'Projects' },
  { href: '#', icon: CheckSquare, label: 'Tasks' },
  { href: '#', icon: Settings, label: 'Settings' },
];

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white border-r border-gray-200 transform transition-transform duration-200 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button
            onClick={onClose}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
            aria-label="Close sidebar"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <NavItem
                key={item.label}
                href={item.href}
                icon={item.icon}
              >
                {item.label}
              </NavItem>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}