import React from 'react';
import { Menu } from 'lucide-react';
import { MainNav } from './MainNav';
import { theme } from '../../config/theme';

interface HeaderProps {
  onToggleSidebar: () => void;
}

export function Header({ onToggleSidebar }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 z-50" style={{ backgroundColor: theme.colors.header }}>
      <div className="flex items-center justify-between px-4 h-full">
        <div className="flex items-center gap-4">
          <button
            onClick={onToggleSidebar}
            className="lg:hidden p-2 hover:bg-opacity-10 hover:bg-white rounded-lg transition-colors"
            aria-label="Toggle sidebar"
          >
            <Menu className="w-6 h-6 text-white" />
          </button>
          <h1 className="text-xl font-bold text-white">Your Logo</h1>
        </div>
        <MainNav />
      </div>
    </header>
  );
}