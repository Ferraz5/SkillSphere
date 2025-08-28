'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all ${isScrolled ? 'bg-black/90' : 'bg-transparent'}`}>
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <Image src="/logo-netflix.png" alt="Logo" width={100} height={40} />

          {/* Links principais */}
          <nav className="hidden md:flex space-x-6 text-sm text-white">
            <a className="hover:text-gray-300">Home</a>
            <a  className="hover:text-gray-300">About</a>
            <a className="hover:text-gray-300">Discover</a>
          </nav>
        </div>

        {/* Ícones ou avatar */}
        <div className="flex items-center space-x-4">
          <Image src="/profiles/maria.png" alt="Perfil" width={32} height={32} className="rounded-md" />
        </div>
      </div>
    </header>
  );
}
