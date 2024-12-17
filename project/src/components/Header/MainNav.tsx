import React from 'react';

export function MainNav() {
  return (
    <nav className="hidden lg:flex items-center gap-6">
      <a href="#" className="text-white/80 hover:text-white transition-colors">Home</a>
      <a href="#" className="text-white/80 hover:text-white transition-colors">About</a>
      <a href="#" className="text-white/80 hover:text-white transition-colors">Contact</a>
    </nav>
  );
}